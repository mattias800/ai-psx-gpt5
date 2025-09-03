import { EventScheduler, InterruptController, IRQ } from './timing';
import type { SPU } from '@ai-psx/spu';
import { decodeBlock } from '@ai-psx/spu';

const CD_BASE = 0x1f801800;

function msfToLba(m: number, s: number, f: number): number {
  return (m|0)*60*75 + (s|0)*75 + (f|0);
}

export interface DiscSource {
  // Return raw 2352-byte sector at LBA
  readSector2352(lba: number): Uint8Array;
}

export interface DiscTOCTrack { track: number; startLBA: number; control: number }
export interface DiscTOC { tracks: DiscTOCTrack[] }

export class CDROM {
  private index = 0; // 0..3
  private status = 0x02; // legacy ready bit placeholder (computeStatus() used at runtime)
  private resp: number[] = [];

  // Parameter and data FIFOs
  private param: number[] = [];
  private data: number[] = [];

  // Basic command state
  private curLBA = 0;
  private targetLBA = 0;
  private reading = false;
  private mode = 0x00; // default 2048-byte user data
  private readFmt: 'user2048' | 'raw2352' = 'user2048';

  // XA filter state
  private filterFile = 0x00;
  private filterChannel = 0x00;

  private sectorCounter = 0; // for fallback DMA patterns

  private sch?: EventScheduler;
  private readEvt?: number;
  private seekEvt?: number;
  private readonly readInterval = 12000;

  // Optional integrations
  private disc?: DiscSource;
  private spu?: SPU;
  private xaVoice = 23; // reserved voice for XA stub
  private xaMuted = false; // when true, XA routing to SPU is suppressed
  private toc?: DiscTOC;
  private discPresent = true; // logical presence independent of attached DiscSource

  // Internal IRQ latch bits:
  // bit1 -> INT1 (seek complete)
  // bit2 -> INT2 (data ready)
  // bit3 -> INT3 (command complete)
  // bit4 -> INT4 (read ended)
  // bit0 -> INT5 (error)
  private irqLatch = 0;
  private shellOpen = false;
  private error = 0; // 1 when error latched until INT5 ack

  constructor(private intc: InterruptController) {}

  attachScheduler(sch: EventScheduler) {
    this.sch = sch;
    // Register event handlers for snapshot-friendly scheduling
    this.sch.registerHandler('cdrom.seekDone', () => {
      this.curLBA = this.targetLBA;
      this.resp.push(0x02);
      this.irqLatch |= (1 << 1); // INT1: seek complete
      this.raise();
      this.seekEvt = undefined;
    });
    this.sch.registerHandler('cdrom.readTick', () => {
      if (!this.reading) { this.readEvt = undefined; return; }
      this.enqueueSector(this.curLBA++);
      this.irqLatch |= (1 << 2); // INT2: data ready
      this.raise();
      // Schedule next tick deterministically (respect speed)
      this.readEvt = this.sch!.scheduleKey(this.getReadInterval(), 'cdrom.readTick');
    });
  }
  attachDisc(disc: DiscSource) { this.disc = disc; }
  attachTOC(toc: DiscTOC) { this.toc = toc; }
  attachSPU(spu: SPU) { this.spu = spu; }
  setDiscPresent(present: boolean) {
    const p = !!present;
    if (this.discPresent === p) { this.discPresent = p; return; }
    this.discPresent = p;
    // If disc removed during reading, stop and raise INT5 error
    if (!this.discPresent && this.reading) {
      this.reading = false;
      this.error = 1;
      this.resp.push(this.computeStatus() & 0xff);
      this.irqLatch |= 0x01;
      this.raise();
    }
  }
  setShellOpen(open: boolean) {
    this.shellOpen = !!open;
    // If opened during reading, stop and raise error (INT5)
    if (this.shellOpen && this.reading) {
      this.reading = false;
      this.error = 1;
      this.resp.push(this.computeStatus() & 0xff);
      // Latch INT5 (bit0)
      this.irqLatch |= 0x01;
      this.raise();
    }
  }

  serialize(): any {
    return {
      index: this.index>>>0,
      status: this.status>>>0,
      resp: [...this.resp],
      param: [...this.param],
      data: [...this.data],
      curLBA: this.curLBA>>>0,
      targetLBA: this.targetLBA>>>0,
      reading: this.reading ? 1 : 0,
      mode: this.mode>>>0,
      sectorCounter: this.sectorCounter>>>0,
      irqLatch: this.irqLatch>>>0,
      rf: this.readFmt === 'raw2352' ? 1 : 0,
      sh: this.shellOpen ? 1 : 0,
      ff: this.filterFile>>>0,
      fc: this.filterChannel>>>0,
      er: this.error>>>0,
      xm: this.xaMuted ? 1 : 0,
      dp: this.discPresent ? 1 : 0,
      toc: this.toc ? { tracks: this.toc.tracks.map(t=>({ track: t.track>>>0, startLBA: t.startLBA>>>0, control: t.control>>>0 })) } : undefined,
    };
  }
  deserialize(s: any): void {
    this.index = s.index|0;
    this.status = s.status|0;
    this.resp = Array.isArray(s.resp) ? s.resp.map((x:number)=>x&0xff) : [];
    this.param = Array.isArray(s.param) ? s.param.map((x:number)=>x&0xff) : [];
    if (Array.isArray(s.data)) {
      this.data = s.data.map((x:number)=>x & 0xff);
    } else {
      const len = s.dataLen|0; this.data = new Array(len); for (let i=0;i<len;i++) this.data[i]=0;
    }
    this.curLBA = s.curLBA|0;
    this.targetLBA = s.targetLBA|0;
    this.reading = !!s.reading;
    this.mode = s.mode|0;
    this.sectorCounter = s.sectorCounter|0;
    this.irqLatch = (s.irqLatch|0) & 0x1f;
    this.readFmt = ((s.rf|0) === 1) ? 'raw2352' : 'user2048';
    this.shellOpen = !!s.sh;
    this.filterFile = (s.ff|0) & 0xff;
    this.filterChannel = (s.fc|0) & 0xff;
    this.error = (s.er|0) & 0x01;
    this.xaMuted = ((s.xm|0) === 1);
    this.discPresent = ((s.dp|0) !== 0);
    if (s.toc && Array.isArray(s.toc.tracks)) {
      this.toc = { tracks: s.toc.tracks.map((t:any)=> ({ track: (t.track|0), startLBA: (t.startLBA|0), control: (t.control|0) })) };
    } else {
      this.toc = undefined;
    }
  }

  private raise() { this.intc.raise(IRQ.CDROM); }

  private scheduleSeek(delay: number) {
    if (!this.sch) { this.curLBA = this.targetLBA; this.resp.push(0x02); this.raise(); return; }
    if (this.seekEvt) { /* ignore */ }
    this.seekEvt = this.sch.scheduleKey(Math.max(0, delay|0), 'cdrom.seekDone');
  }

  private scheduleRead(interval: number) {
    if (!this.sch) {
      this.enqueueSector(this.curLBA++);
      this.raise();
      return;
    }
    if (this.readEvt) return;
    // Trigger immediately, then handler will schedule next
    this.readEvt = this.sch.scheduleKey(0, 'cdrom.readTick');
  }

  private xaEnabled(): boolean { return (this.mode & 0x20) !== 0; }
  private filterEnabled(): boolean { return (this.mode & 0x40) !== 0; }

  private enqueueSector(lba: number) {
    // If a disc source is attached, choose between raw 2352 and user 2048 delivery
    if (this.disc) {
      const raw = this.disc.readSector2352(lba);
      if (raw && raw.length >= 24 + 2048) {
        // Optional gating for XA sectors based on subheader file/channel
        const fileId = raw[16] & 0xff;
        const chanId = raw[17] & 0xff;
        const modeByte = raw[15] & 0xff;
        const submode = raw[19] & 0xff;
        const isXA = (modeByte === 2);
        const isAudio = isXA && ((submode & 0x20) !== 0);
        const dropDueToFilter = isAudio && this.filterEnabled() && ((fileId !== this.filterFile) || (chanId !== this.filterChannel));

        if (!dropDueToFilter) {
          if (this.readFmt === 'raw2352') {
            // If SETMODE bit0 is set, deliver 2336 bytes (skip 12 sync + 4 header)
            if ((this.mode & 0x01) !== 0) {
              for (let i = 16; i < raw.length; i++) this.data.push(raw[i] & 0xff);
            } else {
              for (let i = 0; i < raw.length; i++) this.data.push(raw[i] & 0xff);
            }
          } else {
            // user 2048 (optionally include 8-byte subheader when SETMODE bit0x10 is set)
            if ((this.mode & 0x10) !== 0) {
              for (let i = 16; i < 24; i++) this.data.push(raw[i] & 0xff);
            }
            const user = raw.subarray(24, 24 + 2048);
            for (let i = 0; i < 2048; i++) this.data.push(user[i] & 0xff);
          }
        }
        // XA audio path: detect submode bit (treat bit0x20 as audio)
    if (this.xaEnabled() && raw.length >= 20) {
      const mode = raw[15] & 0xff;
      const submode2 = raw[19] & 0xff;
      const isAudio2 = (mode === 2) && ((submode2 & 0x20) !== 0);
      if (isAudio2 && this.spu && !dropDueToFilter && !this.xaMuted) {
        this.routeXAFromSector(lba, raw);
      }
    }
        return;
      }
      // fall through to synthetic if malformed
    }
    if (this.readFmt === 'raw2352') {
      // Synthetic raw: sync/header/subheader + 2048 payload + trailing zeros to 2352
      const rawLen = 2352;
      const tmp = new Uint8Array(rawLen);
      // mode=2 at byte15, subheader at 16..23 zeros
      tmp[15] = 0x02;
      for (let i = 0; i < 2048; i++) tmp[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff;
      for (let i = 0; i < rawLen; i++) this.data.push(tmp[i] & 0xff);
      return;
    }
    // Synthetic user 2048-byte payload for lba (optionally preceded by subheader when mode bit set)
    if ((this.mode & 0x10) !== 0) {
      for (let i = 0; i < 8; i++) this.data.push(0x00);
    }
    const len = 2048;
    for (let i=0;i<len;i++) this.data.push(((lba & 0xff) ^ (i & 0xff)) & 0xff);
  }

  private routeXAStubToSPU(lba: number) {
    const v = this.xaVoice | 0;
    const spu = this.spu!;
    spu.setVoiceVolume(v, 0x3fff, 0x3fff);
    spu.setVoiceADSR(v, 0, 0, 1.0, 0);
    const n = 256;
    const buf = new Int16Array(n);
    for (let i = 0; i < n; i++) {
      const s8 = (((lba ^ i) & 0xff) - 128) | 0;
      buf[i] = (s8 << 8) | (s8 < 0 ? 0xff00 : 0);
    }
    spu.enqueuePCM(v, buf);
    spu.setVoiceKeyOn(v, true);
  }

  private routeXAFromSector(lba: number, raw: Uint8Array) {
    // Deterministic ADPCM decode over 16-byte frames from user data.
    // Optional stereo: coding info at subheader[2] (raw[18]) bit0 => stereo; even frames=left, odd frames=right.
    const codingInfo = raw[18] & 0xff;
    const stereo = (codingInfo & 0x01) !== 0;

    const spu = this.spu!;
    const vL = this.xaVoice | 0;      // left
    const vR = (this.xaVoice - 1) | 0; // right (use previous voice index)

    // Configure voices (idempotent)
    if (stereo) {
      // Pan left to L only, right to R only
      spu.setVoiceVolume(vL, 0x3fff, 0x0000);
      spu.setVoiceADSR(vL, 0, 0, 1.0, 0);
      spu.setVoiceVolume(vR, 0x0000, 0x3fff);
      spu.setVoiceADSR(vR, 0, 0, 1.0, 0);
    } else {
      spu.setVoiceVolume(vL, 0x3fff, 0x3fff);
      spu.setVoiceADSR(vL, 0, 0, 1.0, 0);
    }

    const userOff = 24;
    const userBytes = raw.subarray(userOff, Math.min(raw.length, userOff + 2048));
    const blocks = Math.floor(userBytes.length / 16);
    if (blocks <= 0) return;

    // Sample rate hint: codingInfo bit2 -> 37.8kHz, else 18.9kHz
    const sampleRate = (codingInfo & 0x04) !== 0 ? 37800 : 18900;
    const stepFP = Math.max(1, Math.floor((sampleRate / 44100) * (1 << 16))) >>> 0;

    if (!stereo) {
      spu.setVoicePitch(vL, stepFP);
      let prev1 = 0, prev2 = 0;
      const out = new Int16Array(blocks * 28);
      let wr = 0;
      for (let i = 0; i < blocks; i++) {
        const frame = userBytes.subarray(i * 16, i * 16 + 16);
        const st = { prev1, prev2 } as { prev1: number; prev2: number };
        const dec = decodeBlock(frame, st);
        prev1 = st.prev1 | 0; prev2 = st.prev2 | 0;
        out.set(dec, wr);
        wr += dec.length;
      }
      if ((spu as any).voices && (spu as any).voices[vL] && (spu as any).voices[vL].pending?.length > 0) {
        spu.appendPCM(vL, out);
      } else {
        spu.enqueuePCM(vL, out);
      }
      spu.setVoiceKeyOn(vL, true);
      return;
    }

    // Stereo: split even frames -> left, odd frames -> right, with independent ADPCM states
    let prev1L = 0, prev2L = 0, prev1R = 0, prev2R = 0;
    // Approximate total per side
    const nL = Math.ceil(blocks / 2);
    const nR = Math.floor(blocks / 2);
    const outL = new Int16Array(nL * 28);
    const outR = new Int16Array(nR * 28);
    let wrL = 0, wrR = 0;
    spu.setVoicePitch(vL, stepFP);
    spu.setVoicePitch(vR, stepFP);
    for (let i = 0; i < blocks; i++) {
      const frame = userBytes.subarray(i * 16, i * 16 + 16);
      if ((i & 1) === 0) {
        const st = { prev1: prev1L, prev2: prev2L } as { prev1: number; prev2: number };
        const dec = decodeBlock(frame, st);
        prev1L = st.prev1 | 0; prev2L = st.prev2 | 0;
        outL.set(dec, wrL); wrL += dec.length;
      } else {
        const st = { prev1: prev1R, prev2: prev2R } as { prev1: number; prev2: number };
        const dec = decodeBlock(frame, st);
        prev1R = st.prev1 | 0; prev2R = st.prev2 | 0;
        outR.set(dec, wrR); wrR += dec.length;
      }
    }
    // Enqueue
    if ((spu as any).voices && (spu as any).voices[vL] && (spu as any).voices[vL].pending?.length > 0) {
      spu.appendPCM(vL, outL);
    } else {
      spu.enqueuePCM(vL, outL);
    }
    if ((spu as any).voices && (spu as any).voices[vR] && (spu as any).voices[vR].pending?.length > 0) {
      spu.appendPCM(vR, outR);
    } else {
      spu.enqueuePCM(vR, outR);
    }
    spu.setVoiceKeyOn(vL, true);
    spu.setVoiceKeyOn(vR, true);
  }

  read8(addr: number): number {
    const off = ((addr >>> 0) - CD_BASE) & 3;
    switch (off) {
      case 0: // Index/Status
        return this.computeStatus() & 0xff;
      case 1: // Response FIFO or status by index
        if ((this.index & 3) === 0) return (this.resp.length ? this.resp.shift()! : 0) & 0xff;
        if ((this.index & 3) === 1) return this.computeStatus() & 0xff;
        return 0;
      case 2: // Data FIFO pop or reserved
        if ((this.index & 3) === 0) return (this.data.length ? this.data.shift()! : 0) & 0xff;
        return 0;
      case 3: // Control/IRQ flags by index
        if ((this.index & 3) === 1) return this.irqLatch & 0x1f;
        return 0;
      default:
        return 0;
    }
  }

  write8(addr: number, v: number): void {
    const off = ((addr >>> 0) - CD_BASE) & 3;
    v &= 0xff;
    switch (off) {
      case 0: // set index (0..3)
        this.index = v & 3;
        break;
      case 1: // index 0: command write; read pops resp
        if ((this.index & 3) === 0) this.command(v & 0xff);
        break;
      case 2: // parameter write or control depending on index
        if ((this.index & 3) === 0) {
          this.param.push(v & 0xff);
        }
        break;
      case 3:
        // index 1: IRQ acknowledge mask
        if ((this.index & 3) === 1) {
          const mask = v & 0x1f;
          this.irqLatch &= ~mask;
          // Clear error flag on INT5 ack (bit0)
          if ((mask & 0x01) !== 0) this.error = 0;
        }
        break;
    }
  }

  private command(cmd: number) {
    // GETSTAT -> push one status byte
    if (cmd === 0x01) { this.resp.push(this.computeStatus() & 0xff); this.raise(); return; }

    // SETLOC mm,ss,ff
    if (cmd === 0x19) {
      if (this.param.length >= 3) {
        const mm = this.param.shift()! & 0xff;
        const ss = this.param.shift()! & 0xff;
        const ff = this.param.shift()! & 0xff;
        this.targetLBA = msfToLba(mm, ss, ff);
      }
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // SEEKL
    if (cmd === 0x1b) {
      const delay = 20000 + Math.abs(this.targetLBA - this.curLBA); // deterministic
      this.scheduleSeek(delay);
      return;
    }
    // GETID -> push 8-byte fake ID after status
    if (cmd === 0x1a) {
      this.resp.push(this.computeStatus() & 0xff);
      const id = [0x41,0x49,0x2d,0x50,0x53,0x58,0x00,0x00]; // "AI-PSX\0\0"
      for (const b of id) this.resp.push(b & 0xff);
      this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // GETQ -> position report (status + 9 bytes)
    if (cmd === 0x15) {
      if (!this.discPresent) {
        // No disc: error
        this.error = 1;
        this.resp.push(this.computeStatus() & 0xff);
        for (let i=0;i<9;i++) this.resp.push(0);
        this.irqLatch |= 0x01; // INT5
        this.raise();
        return;
      }
      this.resp.push(this.computeStatus() & 0xff);
      const lba = Math.max(0, this.curLBA|0);
      const { m, s, f } = this.lbaToMSF(lba);
      const { track, index, control } = this.getQTrackIndexControl(lba);
      // Layout: mm, ss, ff, track(1), index(1), control, pad, pad, pad
      const bytes = [m & 0xff, s & 0xff, f & 0xff, track & 0xff, index & 0xff, control & 0xff, 0, 0, 0];
      for (const b of bytes) this.resp.push(b & 0xff);
      this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // SETFILTER (2 params: file, channel)
    if (cmd === 0x0b) {
      if (this.param.length >= 2) {
        this.filterFile = this.param.shift()! & 0xff;
        this.filterChannel = this.param.shift()! & 0xff;
      }
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // SETMODE (1 param)
    if (cmd === 0x0e) {
      if (this.param.length >= 1) this.mode = this.param.shift()! & 0xff;
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // MUTE
    if (cmd === 0x0f) {
      this.xaMuted = true;
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // DEMUTE
    if (cmd === 0x10) {
      this.xaMuted = false;
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // READN
    if (cmd === 0x06) {
      if (this.shellOpen || !this.discPresent) {
        // Error: cannot start read when shell is open or disc absent
        this.error = 1;
        this.reading = false;
        this.resp.push(this.computeStatus() & 0xff);
        // Latch INT5 (bit0)
        this.irqLatch |= 0x01; this.raise();
        return;
      }
      this.readFmt = 'user2048';
      this.reading = true;
      this.scheduleRead(this.readInterval); // deterministic interval per sector
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // READS -> raw 2352 delivery
    if (cmd === 0x0d) {
      if (this.shellOpen || !this.discPresent) {
        this.error = 1;
        this.reading = false;
        this.resp.push(this.computeStatus() & 0xff);
        this.irqLatch |= 0x01; this.raise();
        return;
      }
      this.readFmt = 'raw2352';
      this.reading = true;
      this.scheduleRead(this.readInterval);
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3); this.raise();
      return;
    }
    // PAUSE (stop reading)
    if (cmd === 0x08) {
      const wasReading = this.reading;
      this.reading = false; this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3);
      if (wasReading) this.irqLatch |= (1<<4); // INT4: read ended
      this.raise(); return;
    }
    // STOP (stop and flush data FIFO)
    if (cmd === 0x1e) {
      const wasReading = this.reading;
      this.reading = false;
      this.data.length = 0; // flush
      this.resp.push(this.computeStatus() & 0xff); this.irqLatch |= (1<<3);
      if (wasReading) this.irqLatch |= (1<<4); // INT4: read ended
      this.raise();
      return;
    }

    // INIT command (0x0a) - reinitialize CD-ROM
    if (cmd === 0x0a) {
      // Reset state but keep disc
      this.curLBA = 0;
      this.targetLBA = 0;
      this.reading = false;
      this.mode = 0x00;
      this.resp.push(this.computeStatus() & 0xff); 
      this.irqLatch |= (1<<3); // INT3
      this.raise();
      return;
    }
    
    // TEST command (0x1d) - various test functions
    if (cmd === 0x1d) {
      const subFunc = this.param.length > 0 ? this.param.shift()! : 0;
      
      if (subFunc === 0x20) {
        // Get CDROM BIOS version date/version
        this.resp.push(0x94); // Year (BCD) - 1994
        this.resp.push(0x09); // Month (BCD) - September  
        this.resp.push(0x19); // Day (BCD) - 19th
        this.resp.push(0xc0); // Version
      } else if (subFunc === 0x00) {
        // Get status
        this.resp.push(this.computeStatus() & 0xff);
      } else {
        // Other test functions - just return success
        this.resp.push(this.computeStatus() & 0xff);
      }
      
      this.irqLatch |= (1<<3); // INT3
      this.raise();
      return;
    }
    
    // RESET command (0x1c) - reset CD-ROM
    if (cmd === 0x1c) {
      // Full reset
      this.curLBA = 0;
      this.targetLBA = 0;
      this.reading = false;
      this.mode = 0x00;
      this.readFmt = 'user2048';
      this.filterFile = 0;
      this.filterChannel = 0;
      this.xaMuted = false;
      this.param = [];
      this.data = [];
      this.resp.push(this.computeStatus() & 0xff);
      this.irqLatch |= (1<<3); // INT3
      this.raise();
      return;
    }
    
    // GETTN command (0x13) - get number of tracks
    if (cmd === 0x13) {
      this.resp.push(this.computeStatus() & 0xff);
      
      if (this.toc && this.toc.tracks.length > 0) {
        // Return first and last track numbers in BCD
        const firstTrack = 0x01; // Track 1
        const lastTrack = Math.min(99, this.toc.tracks.length);
        this.resp.push(firstTrack);
        this.resp.push(this.toBCD(lastTrack));
      } else {
        // Default: 1 track
        this.resp.push(0x01); // First track
        this.resp.push(0x01); // Last track
      }
      
      this.irqLatch |= (1<<3); // INT3
      this.raise();
      return;
    }
    
    // GETTD command (0x14) - get track start position
    if (cmd === 0x14) {
      const trackBCD = this.param.length > 0 ? this.param.shift()! : 0;
      const track = this.fromBCD(trackBCD);
      
      this.resp.push(this.computeStatus() & 0xff);
      
      if (track === 0) {
        // Track 0 = lead-out position
        // Return end of disc (approximate)
        const totalSectors = 74 * 60 * 75; // 74 minute disc
        const msf = this.lbaToMSF(totalSectors);
        this.resp.push(this.toBCD(msf.m));
        this.resp.push(this.toBCD(msf.s));
      } else if (this.toc && track <= this.toc.tracks.length) {
        // Return track start position
        const t = this.toc.tracks[track - 1];
        const msf = this.lbaToMSF(t.startLBA);
        this.resp.push(this.toBCD(msf.m));
        this.resp.push(this.toBCD(msf.s));
      } else {
        // Default: track starts at 00:02 (after 2-second pregap)
        this.resp.push(0x00); // MM
        this.resp.push(0x02); // SS
      }
      
      this.irqLatch |= (1<<3); // INT3
      this.raise();
      return;
    }
    
    // Unsupported - return error
    this.resp.push(this.computeStatus() & 0xff | 0x01); // Set error bit
    this.irqLatch |= (1<<5); // INT5 error
    this.error = 1;
    this.raise();
  }

  private computeStatus(): number {
    // Compose status bits (stub mapping):
    // bit0 (0x01): busy (seek or reading)
    // bit1 (0x02): ready
    // bit2 (0x04): parameter FIFO not empty
    // bit3 (0x08): response FIFO not empty
    // bit4 (0x10): data FIFO not empty
    // bit5 (0x20): reading active
    // bit6 (0x40): error (set when INT5 latched, cleared on INT5 ack)
    // bit7 (0x80): shell open
    let st = 0x02;
    const busy = this.reading || !!this.seekEvt;
    if (busy) st |= 0x01;
    if (this.param.length > 0) st |= 0x04;
    if (this.resp.length > 0) st |= 0x08;
    if (this.data.length > 0) st |= 0x10;
    if (this.reading) st |= 0x20;
    if (this.error) st |= 0x40;
    if (this.shellOpen) st |= 0x80;
    return st & 0xff;
  }

  private getReadInterval(): number {
    // 1x => readInterval; 2x (mode bit 0x80) halves the interval deterministically
    const dbl = (this.mode & 0x80) !== 0;
    return dbl ? Math.max(1, this.readInterval >> 1) : this.readInterval;
  }

  private lbaToMSF(lba: number): { m: number; s: number; f: number } {
    const m = Math.floor(lba / (60 * 75));
    const rem = lba - m * 60 * 75;
    const s = Math.floor(rem / 75);
    const f = rem - s * 75;
    return { m, s, f };
  }

  private toBCD(n: number): number {
    const tens = Math.floor(n / 10) % 10;
    const ones = n % 10;
    return (tens << 4) | ones;
  }
  
  private fromBCD(bcd: number): number {
    return ((bcd >> 4) & 0x0f) * 10 + (bcd & 0x0f);
  }
  
  private getQTrackIndexControl(lba: number): { track: number; index: number; control: number } {
    const def = { track: 1, index: 1, control: 0x04 };
    if (!(this.toc && Array.isArray(this.toc.tracks) && this.toc.tracks.length > 0)) return def;

    // Check pregap of each track first: index=0 in [startLBA-150, startLBA)
    for (const t of this.toc.tracks) {
      const pregapStart = Math.max(0, (t.startLBA|0) - 150);
      if (lba >= pregapStart && lba < (t.startLBA|0)) {
        return { track: t.track|0, index: 0, control: t.control|0 };
      }
    }
    // Otherwise choose last track whose startLBA <= lba, index=1
    let chosen = this.toc.tracks[0];
    for (const t of this.toc.tracks) {
      if (t.startLBA <= lba && t.startLBA >= chosen.startLBA) chosen = t;
    }
    return { track: chosen.track|0, index: 1, control: chosen.control|0 };
  }

  dmaReadWords(n: number): Uint32Array {
    const out = new Uint32Array(Math.max(0, n|0));
    for (let i=0;i<out.length;i++) {
      if (this.data.length >= 4) {
        const b0 = this.data.shift()!;
        const b1 = this.data.shift()!;
        const b2 = this.data.shift()!;
        const b3 = this.data.shift()!;
        out[i] = (b0 | (b1<<8) | (b2<<16) | (b3<<24)) >>> 0;
      } else {
        out[i] = ((0xc0d0c0d0 ^ ((this.sectorCounter<<4) + i)) >>> 0);
      }
    }
    this.sectorCounter = (this.sectorCounter + 1) | 0;
    return out;
  }
}
