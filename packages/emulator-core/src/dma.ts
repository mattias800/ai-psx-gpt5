import type { Bus } from './bus';
import type { GPURegs } from './address-space';
import { EventScheduler, InterruptController, IRQ } from './timing';

export class DMAController {
  constructor(private bus: Bus, private gpu: GPURegs) {}
  // Simple immediate transfer: read N words from src and stream to GP0
  transferToGPU(srcAddr: number, wordCount: number) {
    let addr = srcAddr >>> 0;
    for (let i = 0; i < wordCount; i++) {
      const w = this.bus.read32(addr) >>> 0;
      this.gpu.writeGP0(w);
      addr = (addr + 4) >>> 0;
    }
  }
}

// Full DMAC skeleton with channels 0..6 and minimal DPCR/DICR shadow.
// Supported transfers:
//  - GPU (ch2):
//      * sync mode 0 (block), dir=from memory -> stream words to GP0
//      * sync mode 2 (linked-list), dir=from memory -> traverse list and stream to GP0
//  - OTC (ch6):
//      * sync mode 0 (block), dir=to memory, step=decrement -> build ordering table pointers
// Other channels & modes are unimplemented for now.
export interface SPUDMA {
  dmaWriteToRAM(samplesLE: Uint16Array): void;
  dmaReadFromRAM(countHalfwords: number): Uint16Array;
}

export interface CDROMDMA {
  dmaReadWords(countWords: number): Uint32Array;
}

export class DMAC {
  private channels: { madr: number; bcr: number; chcr: number }[] = Array.from({ length: 7 }, () => ({ madr: 0, bcr: 0, chcr: 0 }));
  private dpcr = 0x07654321 >>> 0; // default: realistic PSX power-on value
  private dicr = 0x00000000 >>> 0; // IRQ control (shadow)
  private activeCh: number = -1;
  private pending: Array<{ ch: number; words: number; work: () => void }> = [];
  private spu?: SPUDMA;
  private cdrom?: CDROMDMA;
  private mdec?: { dmaIn(words: Uint32Array): void; dmaOut(countWords: number): Uint32Array };

  constructor(private bus: Bus, private gpu: GPURegs, private intc?: InterruptController, private sch?: EventScheduler, private cyclesPerWord: number = 0) {}

  attachSPU(spu: SPUDMA) {
    this.spu = spu;
  }
  attachCDROM(cd: CDROMDMA) {
    this.cdrom = cd;
  }
  attachMDEC(m: { dmaIn(words: Uint32Array): void; dmaOut(countWords: number): Uint32Array }) {
    this.mdec = m;
  }

  // Configure asynchronous timing; when set, supported DMA transfers will be scheduled
  // to complete after (words * cyclesPerWord) CPU cycles (plus optional DPCR chopping)
  configureTiming(sch: EventScheduler, cyclesPerWord: number) {
    this.sch = sch;
    this.cyclesPerWord = Math.max(1, (cyclesPerWord | 0));
  }

  read32(addr: number): number {
    const a = addr >>> 0;
    // Channel windows: 0x1f801080 + ch*0x10 (MADR,BCR,CHCR)
    if (a >= 0x1f801080 && a <= 0x1f8010e8) {
      const ch = ((a - 0x1f801080) >>> 0) / 0x10 | 0;
      const off = (a - 0x1f801080) & 0x0f;
      const c = this.channels[ch];
      switch (off) {
        case 0x0: return c.madr >>> 0;
        case 0x4: return c.bcr >>> 0;
        case 0x8: return c.chcr >>> 0;
        default: return 0;
      }
    }
    if (a === 0x1f8010f0) return this.dpcr >>> 0;
    if (a === 0x1f8010f4) return this.dicr >>> 0;
    return 0;
  }

  write32(addr: number, v: number): void {
    const a = addr >>> 0; v >>>= 0;
    if (a >= 0x1f801080 && a <= 0x1f8010e8) {
      const ch = ((a - 0x1f801080) >>> 0) / 0x10 | 0;
      const off = (a - 0x1f801080) & 0x0f;
      const c = this.channels[ch];
      switch (off) {
        case 0x0: c.madr = v >>> 0; break;
        case 0x4: c.bcr = v >>> 0; break;
        case 0x8:
          c.chcr = v >>> 0;
          if ((v & (1 << 24)) !== 0) this.runChannel(ch);
          break;
      }
      return;
    }
    if (a === 0x1f8010f0) { this.dpcr = v >>> 0; return; }
    if (a === 0x1f8010f4) {
      // DICR write: update enables (bits0..6) and master enable (bit24),
      // clear per-channel flags (bits16..22) and master flag (bit23) when written as 1
      let d = this.dicr >>> 0;
      const clrFlags = (v >>> 16) & 0x7f; // bits16..22
      d &= ~((clrFlags & 0x7f) << 16);
      if (v & (1<<23)) d &= ~(1<<23); // clear master flag on write-1
      d = (d & ~0x7f) | (v & 0x7f); // channel enables
      d = (d & ~(1<<24)) | (v & (1<<24)); // master enable
      this.dicr = d >>> 0;
      return;
    }
  }

  private runChannel(ch: number) {
    const c = this.channels[ch];
    const chcr = c.chcr >>> 0;
    const dirFromMem = (chcr & 1) !== 0;
    const stepDec = (chcr & 2) !== 0;
    const sync = (chcr >>> 9) & 3;

    let performed = false;

    // DPCR gating: require channel enabled to perform any transfer
    const dpcrEnabled = (this.dpcr & (1 << ch)) !== 0;
    if (!dpcrEnabled) {
      // Clear start/trigger bit without performing
      c.chcr &= ~(1 << 24);
      return;
    }

    const doWithBusy = (fn: () => void) => {
      // Set busy bit (assume bit 28) while performing
      c.chcr |= (1 << 28);
      try { fn(); } finally { c.chcr &= ~(1 << 28); }
    };

    const tryStartAsync = (words: number, work: () => void): boolean => {
      if (!(this.sch && this.cyclesPerWord > 0 && words > 0)) return false;
      // Clear start bit immediately
      c.chcr &= ~(1 << 24);
      const enqueue = () => { this.pending.push({ ch, words, work }); };
      if (this.activeCh !== -1) { enqueue(); return true; }
      // Start now
      this.activeCh = ch;
      c.chcr |= (1 << 28);
      const total = this.computeTotalCycles(words);
      this.sch!.schedule(total, () => {
        try { work(); } finally {
          c.chcr &= ~(1 << 28);
          this.raiseIrqIfEnabled(ch);
          this.activeCh = -1;
          this.startNextPending();
        }
      });
      return true;
    };

    switch (ch) {
      case 0: { // MDEC in (mem -> MDEC)
        if (!this.mdec) break;
        if (dirFromMem) {
          if (sync === 0) {
            const words = c.bcr & 0xffff;
            const doWork = () => this.mdecIn(c, words, stepDec);
            if (tryStartAsync(words, doWork)) return;
            doWithBusy(doWork); performed = true;
          } else if (sync === 1) {
            const blkSize = c.bcr & 0xffff;
            const blkCount = (c.bcr >>> 16) & 0xffff;
            const words = blkSize * blkCount;
            const doWork = () => this.mdecIn(c, words, stepDec);
            if (blkSize>0 && blkCount>0) {
              if (tryStartAsync(words, doWork)) return;
              doWithBusy(doWork); performed = true;
            }
          }
        }
        break;
      }
      case 1: { // MDEC out (MDEC -> mem)
        if (!this.mdec) break;
        if (!dirFromMem) {
          if (sync === 0) {
            const words = c.bcr & 0xffff;
            const doWork = () => this.mdecOut(c, words, stepDec);
            if (tryStartAsync(words, doWork)) return;
            doWithBusy(doWork); performed = true;
          } else if (sync === 1) {
            const blkSize = c.bcr & 0xffff;
            const blkCount = (c.bcr >>> 16) & 0xffff;
            const words = blkSize * blkCount;
            const doWork = () => this.mdecOut(c, words, stepDec);
            if (blkSize>0 && blkCount>0) {
              if (tryStartAsync(words, doWork)) return;
              doWithBusy(doWork); performed = true;
            }
          }
        }
        break;
      }
      case 2: { // GPU
        const dmaDir = (this.gpu.readGP1() >>> 29) & 0x3; // 1=FIFO write (CPU->GP0), 2=FIFO read (GPUREAD)
        const canWrite = dmaDir === 1;
        const canRead = dmaDir === 2;
        if (sync === 0) {
          if (dirFromMem) {
            if (canWrite) {
              const words = c.bcr & 0xffff;
              if (tryStartAsync(words, () => this.gpuBlock(c, stepDec))) return;
              doWithBusy(() => this.gpuBlock(c, stepDec)); performed = true;
            }
          } else {
            if (canRead) {
              const words = c.bcr & 0xffff;
              if (tryStartAsync(words, () => this.gpuBlockToMem(c, stepDec))) return;
              doWithBusy(() => this.gpuBlockToMem(c, stepDec)); performed = true;
            }
          }
        } else if (sync === 1) {
          const blkSize = c.bcr & 0xffff;
          const blkCount = (c.bcr >>> 16) & 0xffff;
          if (blkSize > 0 && blkCount > 0) {
            const words = blkSize * blkCount;
            if (dirFromMem && canWrite) {
              if (tryStartAsync(words, () => this.gpuMode1_FromMem(c, blkSize, blkCount, stepDec))) return;
              doWithBusy(() => this.gpuMode1_FromMem(c, blkSize, blkCount, stepDec)); performed = true;
            }
            else if (!dirFromMem && canRead) {
              if (tryStartAsync(words, () => this.gpuMode1_ToMem(c, blkSize, blkCount, stepDec))) return;
              doWithBusy(() => this.gpuMode1_ToMem(c, blkSize, blkCount, stepDec)); performed = true;
            }
          }
        } else if (dirFromMem && sync === 2) {
          if (canWrite) {
            const words = this.countGpuLinkedListWords(c.madr >>> 0);
            if (tryStartAsync(words, () => this.gpuLinkedList(c))) return;
            doWithBusy(() => this.gpuLinkedList(c)); performed = true;
          }
        }
        break;
      }
      case 4: { // SPU
        if (this.spu) {
          if (dirFromMem) {
            if (sync === 0) {
              const halfwords = c.bcr & 0xffff;
              const doWork = () => this.spuBlock(c, halfwords, stepDec);
              if (tryStartAsync(halfwords, doWork)) return;
              doWithBusy(doWork); performed = true;
            } else if (sync === 1) {
              const blkSize = c.bcr & 0xffff;
              const blkCount = (c.bcr >>> 16) & 0xffff;
              const halfwords = blkSize * blkCount;
              if (blkSize > 0 && blkCount > 0) {
                const doWork = () => this.spuBlock(c, halfwords, stepDec);
                if (tryStartAsync(halfwords, doWork)) return;
                doWithBusy(doWork); performed = true;
              }
            }
          } else {
            // to memory
            if (sync === 0) {
              const halfwords = c.bcr & 0xffff;
              const doWork = () => this.spuToMem(c, halfwords, stepDec);
              if (tryStartAsync(halfwords, doWork)) return;
              doWithBusy(doWork); performed = true;
            } else if (sync === 1) {
              const blkSize = c.bcr & 0xffff;
              const blkCount = (c.bcr >>> 16) & 0xffff;
              const halfwords = blkSize * blkCount;
              if (blkSize > 0 && blkCount > 0) {
                const doWork = () => this.spuToMem(c, halfwords, stepDec);
                if (tryStartAsync(halfwords, doWork)) return;
                doWithBusy(doWork); performed = true;
              }
            }
          }
        }
        break;
      }
      case 3: { // CDROM -> memory (device to mem), block sync
        if (this.cdrom && !dirFromMem && sync === 0) {
          const words = c.bcr & 0xffff;
          const doWork = () => this.cdromBlockToMem(c, words, stepDec);
          if (tryStartAsync(words, doWork)) return;
          doWithBusy(doWork); performed = true;
        }
        break;
      }
      case 6: // OTC
        if (!dirFromMem && sync === 0) {
          const words = c.bcr & 0xffff;
          if (tryStartAsync(words, () => this.otcBuild(c))) return;
          doWithBusy(() => this.otcBuild(c)); performed = true;
        }
        break;
      default:
        // unimplemented for other channels
        break;
    }
    // clear start bit
    c.chcr &= ~(1 << 24);

    // IRQ signaling via DICR/INTC
    if (performed) this.raiseIrqIfEnabled(ch);
  }

  private raiseIrqIfEnabled(ch: number) {
    const chMask = 1 << ch;
    const chFlagMask = 1 << (16 + ch);
    const masterEnable = (this.dicr & (1<<24)) !== 0;
    const chEnabled = (this.dicr & chMask) !== 0;
    if (masterEnable && chEnabled) {
      this.dicr |= chFlagMask;
      this.dicr |= (1<<23);
      this.intc?.raise(IRQ.DMA);
    }
  }

  private getPriority(ch: number): number {
    return (this.dpcr >>> (8 + ch*3)) & 0x7;
  }

  private startNextPending() {
    if (!(this.sch && this.cyclesPerWord > 0)) return;
    if (this.activeCh !== -1) return;
    if (this.pending.length === 0) return;
    // pick highest priority
    let bestIdx = 0; let bestPrio = -1;
    for (let i=0;i<this.pending.length;i++) { const p = this.getPriority(this.pending[i].ch); if (p > bestPrio) { bestPrio=p; bestIdx=i; } }
    const next = this.pending.splice(bestIdx,1)[0];
    const nc = this.channels[next.ch];
    this.activeCh = next.ch;
    nc.chcr |= (1<<28);
    const total = this.computeTotalCycles(next.words);
    this.sch!.schedule(total, () => { try { next.work(); } finally { nc.chcr&=~(1<<28); this.raiseIrqIfEnabled(next.ch); this.activeCh=-1; this.startNextPending(); } });
  }

  private computeTotalCycles(words: number): number {
    if (!(this.sch && this.cyclesPerWord > 0)) return 0;
    const chopLog2 = (this.dpcr >>> 29) & 0x7;
    const windowWords = chopLog2 ? (1 << chopLog2) : 0;
    const base = words * this.cyclesPerWord;
    if (!windowWords) return base;
    const windows = Math.ceil(words / windowWords);
    const cpuPause = windowWords * this.cyclesPerWord;
    return base + (windows - 1) * cpuPause;
  }

  private mdecIn(c: { madr: number; bcr: number; chcr: number }, words: number, stepDec: boolean) {
    if (!this.mdec) return;
    let addr = c.madr >>> 0;
    const u32 = new Uint32Array(words);
    for (let i = 0; i < words; i++) {
      u32[i] = this.bus.read32(addr) >>> 0;
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    this.mdec.dmaIn(u32);
    c.madr = addr >>> 0;
  }

  private mdecOut(c: { madr: number; bcr: number; chcr: number }, words: number, stepDec: boolean) {
    if (!this.mdec) return;
    const u32 = this.mdec.dmaOut(words);
    // Dev override: allow streaming directly to GP0 for quick visibility
    const devToGPU = (typeof process !== 'undefined' && process.env && (process.env.PSX_MDEC_OUT_TO_GPU === '1' || (process.env.PSX_MDEC_OUT_TO_GPU ?? '').toLowerCase() === 'true'));
    if (devToGPU) {
      for (let i = 0; i < u32.length; i++) this.gpu.writeGP0(u32[i] >>> 0);
      return;
    }
    // Default: write decoded words to memory at MADR, honoring stepDec
    let addr = c.madr >>> 0;
    for (let i = 0; i < u32.length; i++) {
      this.bus.write32(addr, u32[i] >>> 0);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  private gpuBlock(c: { madr: number; bcr: number; chcr: number }, stepDec: boolean) {
    const words = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    for (let i = 0; i < words; i++) {
      const w = this.bus.read32(addr) >>> 0;
      this.gpu.writeGP0(w);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  private gpuBlockToMem(c: { madr: number; bcr: number; chcr: number }, stepDec: boolean) {
    const words = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    for (let i = 0; i < words; i++) {
      const w = this.gpu.readGP0() >>> 0;
      this.bus.write32(addr, w);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  private gpuLinkedList(c: { madr: number; bcr: number; chcr: number }) {
    // MADR points to first header: [count:8 | next:24], then count words payload
    let addr = c.madr >>> 0;
    for (let safety = 0; safety < 1_000_000; safety++) {
      const header = this.bus.read32(addr) >>> 0;
      const count = (header >>> 24) & 0xff;
      const next = header & 0x00ffffff;
      addr = (addr + 4) >>> 0;
      for (let i = 0; i < count; i++) {
        const w = this.bus.read32(addr) >>> 0;
        this.gpu.writeGP0(w);
        addr = (addr + 4) >>> 0;
      }
      if (next === 0x00ffffff) break;
      addr = next >>> 0; // next points to next header
    }
    c.madr = addr >>> 0;
  }

  private countGpuLinkedListWords(start: number): number {
    let addr = start >>> 0;
    let total = 0;
    for (let safety = 0; safety < 1_000_000; safety++) {
      const header = this.bus.read32(addr) >>> 0;
      const count = (header >>> 24) & 0xff;
      const next = header & 0x00ffffff;
      addr = (addr + 4 + count * 4) >>> 0;
      total += count;
      if (next === 0x00ffffff) break;
      addr = next >>> 0;
    }
    return total;
  }

  private otcBuild(c: { madr: number; bcr: number; chcr: number }) {
    let n = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    while (n > 0) {
      const val = (n === 1) ? 0x00ffffff : ((addr - 4) & 0x00ffffff);
      this.bus.write32(addr, val >>> 0);
      addr = (addr - 4) >>> 0;
      n--;
    }
    c.madr = addr >>> 0;
  }

  private gpuMode1_FromMem(c: { madr: number; bcr: number; chcr: number }, blkSize: number, blkCount: number, stepDec: boolean) {
    let addr = c.madr >>> 0;
    for (let b = 0; b < blkCount; b++) {
      for (let i = 0; i < blkSize; i++) {
        const w = this.bus.read32(addr) >>> 0;
        this.gpu.writeGP0(w);
        addr = (addr + (stepDec ? -4 : 4)) >>> 0;
      }
    }
    c.madr = addr >>> 0;
  }

  private gpuMode1_ToMem(c: { madr: number; bcr: number; chcr: number }, blkSize: number, blkCount: number, stepDec: boolean) {
    let addr = c.madr >>> 0;
    for (let b = 0; b < blkCount; b++) {
      for (let i = 0; i < blkSize; i++) {
        const w = this.gpu.readGP0() >>> 0;
        this.bus.write32(addr, w);
        addr = (addr + (stepDec ? -4 : 4)) >>> 0;
      }
    }
    c.madr = addr >>> 0;
  }

  private cdromBlockToMem(c: { madr: number; bcr: number; chcr: number }, words: number, stepDec: boolean) {
    if (!this.cdrom) return;
    let addr = c.madr >>> 0;
    const u32 = this.cdrom.dmaReadWords(words);
    for (let i = 0; i < u32.length; i++) {
      this.bus.write32(addr, u32[i] >>> 0);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  serialize(): any {
    return {
      dpcr: this.dpcr>>>0,
      dicr: this.dicr>>>0,
      channels: this.channels.map(c => ({ madr: c.madr>>>0, bcr: c.bcr>>>0, chcr: c.chcr>>>0 })),
    };
  }

  deserialize(s: any): void {
    this.dpcr = s.dpcr>>>0; this.dicr = s.dicr>>>0;
    if (Array.isArray(s.channels)) {
      for (let i=0;i<Math.min(7, s.channels.length); i++) {
        const sc = s.channels[i];
        this.channels[i].madr = sc.madr>>>0;
        this.channels[i].bcr = sc.bcr>>>0;
        this.channels[i].chcr = sc.chcr>>>0;
      }
    }
    // pending/active not restored for simplicity
  }

  private spuBlock(c: { madr: number; bcr: number; chcr: number }, halfwords: number, stepDec: boolean) {
    let addr = c.madr >>> 0;
    const n = Math.max(0, halfwords | 0);
    const u16 = new Uint16Array(n);
    for (let i = 0; i < n; i++) {
      u16[i] = this.bus.read16(addr) & 0xffff;
      addr = (addr + (stepDec ? -2 : 2)) >>> 0;
    }
    c.madr = addr >>> 0;
    this.spu?.dmaWriteToRAM(u16);
  }

  private spuToMem(c: { madr: number; bcr: number; chcr: number }, halfwords: number, stepDec: boolean) {
    let addr = c.madr >>> 0;
    const n = Math.max(0, halfwords | 0);
    const data = this.spu!.dmaReadFromRAM(n);
    for (let i = 0; i < data.length; i++) {
      this.bus.write16(addr, data[i] & 0xffff);
      addr = (addr + (stepDec ? -2 : 2)) >>> 0;
    }
    c.madr = addr >>> 0;
  }
}

