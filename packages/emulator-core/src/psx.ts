import { AddressSpace, IOHub, MappedRAM, type IODevices } from './address-space';
import { EventScheduler, InterruptController, IRQ } from './timing';
import { DisplayController } from './display';
import { R3000A, createResetState, type CPUHost } from '@ai-psx/cpu';
import { GPU } from '../../emulator-gpu/src/gpu';
import { SPU } from '../../emulator-spu/src/spu';
import { DMAC } from './dma';
import { PSX_CLOCK } from '@ai-psx/shared';
import { HWTimer } from './timers';
import { SIO } from './sio';
import { CDROM } from './cdrom';
import { BIOSRegion, type BIOSProvider } from './memmap';

class CPUHostBus implements CPUHost {
  constructor(private as: AddressSpace, private memTrace?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number) => void) {}
  setMemTrace(t?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number) => void) { this.memTrace = t; }
  read32(a: number): number {
    const v = this.as.read32(a) >>> 0;
    if (this.memTrace) this.memTrace('r32', a >>> 0, v >>> 0);
    return v >>> 0;
  }
  read16(a: number): number {
    const v = this.as.read16(a) & 0xffff;
    if (this.memTrace) this.memTrace('r16', a >>> 0, v >>> 0);
    return v >>> 0;
  }
  read8(a: number): number {
    const v = this.as.read8(a) & 0xff;
    if (this.memTrace) this.memTrace('r8', a >>> 0, v >>> 0);
    return v >>> 0;
  }
  write32(a: number, v: number): void {
    this.as.write32(a, v >>> 0);
    if (this.memTrace) this.memTrace('w32', a >>> 0, v >>> 0);
  }
  write16(a: number, v: number): void {
    this.as.write16(a, v >>> 0);
    if (this.memTrace) this.memTrace('w16', a >>> 0, v >>> 0);
  }
  write8(a: number, v: number): void {
    this.as.write8(a, v >>> 0);
    if (this.memTrace) this.memTrace('w8', a >>> 0, v >>> 0);
  }
}

export class PSXSystem {
  public readonly sch = new EventScheduler();
  public readonly intc = new InterruptController();
  public readonly gpu = new GPU();
  public readonly as = new AddressSpace();
  public readonly ram = new MappedRAM(0x00000000, 2 * 1024 * 1024);
  public readonly iohub: IOHub;
  public readonly cpu: R3000A;
  public readonly dmac: DMAC;
  public readonly spu = new SPU();
  public display?: DisplayController;
  private timer0?: import('./timers').HWTimer;
  private timer1?: import('./timers').HWTimer;
  private timer2?: import('./timers').HWTimer;
  private timersPumpId?: number;
  private sio?: SIO;
  private cd?: CDROM;

  constructor() {
    // Initialize DMAC before IOHub so we can pass it into devs
    this.dmac = new DMAC(this.as, this.gpu, this.intc);
    this.dmac.attachSPU(this.spu);
    // Wire SPU IRQ to INTC bit 9
    this.spu.attachIRQ(() => this.intc.raise(IRQ.SPU));

    // Create timers (simple clock-div=1) and wire INTC for TIMER0..2
    this.timer0 = new HWTimer(this.sch, 1, () => this.intc.raise(IRQ.TIMER0));
    this.timer1 = new HWTimer(this.sch, 1, () => this.intc.raise(IRQ.TIMER1));
    this.timer2 = new HWTimer(this.sch, 1, () => this.intc.raise(IRQ.TIMER2));

    // SIO0
    this.sio = new SIO(this.intc);
    // CDROM
    this.cd = new CDROM(this.intc);
    this.cd.attachScheduler(this.sch);
    // Wire SPU into CDROM for XA audio stub
    this.cd.attachSPU(this.spu);

    const devs: IODevices = {
      gpu: {
        writeGP0: (v) => this.gpu.writeGP0(v),
        writeGP1: (v) => this.gpu.writeGP1(v),
        readGP0: () => this.gpu.readGP0(),
        readGP1: () => this.gpu.readGP1(),
      },
      intc: {
        readStatus: () => this.intc.status,
        readMask: () => this.intc.mask,
        writeMask: (v: number) => this.intc.setMask(v),
        ackMask: (v: number) => this.intc.ackMask(v),
      },
      timers: [
        {
          readCount: () => this.timer0!.readCount(),
          writeCount: (v: number) => this.timer0!.writeCount(v),
          readMode: () => this.timer0!.readMode(),
          writeMode: (v: number) => this.timer0!.writeMode(v),
          readTarget: () => this.timer0!.readTarget(),
          writeTarget: (v: number) => this.timer0!.writeTarget(v),
        },
        {
          readCount: () => this.timer1!.readCount(),
          writeCount: (v: number) => this.timer1!.writeCount(v),
          readMode: () => this.timer1!.readMode(),
          writeMode: (v: number) => this.timer1!.writeMode(v),
          readTarget: () => this.timer1!.readTarget(),
          writeTarget: (v: number) => this.timer1!.writeTarget(v),
        },
        {
          readCount: () => this.timer2!.readCount(),
          writeCount: (v: number) => this.timer2!.writeCount(v),
          readMode: () => this.timer2!.readMode(),
          writeMode: (v: number) => this.timer2!.writeMode(v),
          readTarget: () => this.timer2!.readTarget(),
          writeTarget: (v: number) => this.timer2!.writeTarget(v),
        },
      ],
      dma: {
        read32: (a: number) => this.dmac.read32(a),
        write32: (a: number, v: number) => this.dmac.write32(a, v),
      },
      spu: {
        read16: (a: number) => this.spu.read16(a),
        write16: (a: number, v: number) => this.spu.write16(a, v),
      },
      sio: {
        read8: (a: number) => this.sio!.read8(a),
        write8: (a: number, v: number) => this.sio!.write8(a, v),
      },
      cdrom: {
        read8: (a: number) => this.cd!.read8(a),
        write8: (a: number, v: number) => this.cd!.write8(a, v),
      },
    };
    this.iohub = new IOHub(devs);
    this.dmac.attachCDROM({ dmaReadWords: (n:number)=> this.cd!.dmaReadWords(n) });
    this.as.addRegion(this.ram);
    // Add 1KB scratchpad at 0x1f800000
    this.as.addRegion(new MappedRAM(0x1f800000, 1024));
    this.as.addRegion(this.iohub);

    this.cpu = new R3000A(createResetState(0), new CPUHostBus(this.as), () => this.intc.pending);

    // Schedule periodic timer ticking for determinism
    const pumpInterval = 64; // cycles between timer updates
    const pump = () => {
      this.timer0!.tick(pumpInterval);
      this.timer1!.tick(pumpInterval);
      this.timer2!.tick(pumpInterval);
      this.timersPumpId = this.sch.schedule(pumpInterval, pump);
    };
    this.timersPumpId = this.sch.schedule(pumpInterval, pump);
  }

  attachDisc(disc: import('./cdrom').DiscSource) {
    this.cd?.attachDisc(disc);
  }
  openCdLid(open: boolean) {
    (this.cd as any)?.setShellOpen(!!open);
  }
  setDiscPresent(present: boolean) {
    (this.cd as any)?.setDiscPresent(!!present);
  }
  attachDiscTOC(toc: import('./cdrom').DiscTOC) {
    (this.cd as any)?.attachTOC(toc);
  }

  attachDisplay(cfg?: Partial<{ cyclesPerLine: number; linesPerFrame: number }>) {
    this.display = new DisplayController(this.sch, this.intc, cfg);
    this.display.start();
  }

  loadBIOS(bytes: Uint8Array) {
    // Map BIOS region at 0x1fc0_0000 using a simple provider
    const provider = {
      _d: bytes,
      size(): number { return this._d.length >>> 0; },
      read8(off: number): number { return this._d[off >>> 0] & 0xff; },
      read16(off: number): number {
        const d = this._d; const i = off >>> 0;
        return ((d[i] & 0xff) | ((d[(i + 1) >>> 0] & 0xff) << 8)) >>> 0;
      },
      read32(off: number): number {
        const d = this._d; const i = off >>> 0;
        return ((d[i] & 0xff) | ((d[(i + 1) >>> 0] & 0xff) << 8) | ((d[(i + 2) >>> 0] & 0xff) << 16) | ((d[(i + 3) >>> 0] & 0xff) << 24)) >>> 0;
      },
    } as BIOSProvider & { _d: Uint8Array };
    this.as.addRegion(new BIOSRegion(provider));
  }

  enableCpuTrace(opts?: Partial<{ output: (line: string) => void; regsFormat: 'named' | 'index' }>) {
    const out = opts?.output ?? ((s: string) => console.log(s));
    const fmt = opts?.regsFormat ?? 'named';
    const names = ['r0','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7','s0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
    const cpuAny = this.cpu as any;
    if (cpuAny.setTracer) {
      cpuAny.setTracer((pc: number, instr: number, s: import('@ai-psx/cpu').CPUState) => {
        const r = s.regs; const regStr = fmt === 'named'
          ? names.map((n, i) => `${n}=${(r[i] >>> 0).toString(16).padStart(8,'0')}`).join(' ')
          : Array.from({ length: 32 }, (_, i) => `r${i.toString().padStart(2,'0')}=${(r[i]>>>0).toString(16).padStart(8,'0')}`).join(' ');
        const line = `pc=${pc.toString(16).padStart(8,'0')} instr=${instr.toString(16).padStart(8,'0')} hi=${(s.hi>>>0).toString(16).padStart(8,'0')} lo=${(s.lo>>>0).toString(16).padStart(8,'0')} ${regStr}`;
        out(line);
      });
    }
  }

  enableMemTrace(opts?: Partial<{ output: (line: string) => void; filter: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number) => boolean }>) {
    const out = opts?.output ?? ((s: string) => console.log(s));
    const filter = opts?.filter ?? ((op: any, addr: number) => {
      const p = addr >>> 0;
      // Default: only IO range (0x1f801000..0x1f803fff) and scratch (0x1f800000..0x1f8003ff)
      const inIO = p >= 0x1f801000 && p <= 0x1f803fff;
      const inScratch = p >= 0x1f800000 && p <= 0x1f8003ff;
      return inIO || inScratch;
    });
    const busAny = (this.cpu as any).mem as CPUHostBus;
    if (busAny && busAny.setMemTrace) {
      busAny.setMemTrace((op, addr, val) => {
        if (!filter(op, addr)) return;
        out(`${op} ${addr.toString(16).padStart(8,'0')} -> ${val.toString(16).padStart(8,'0')}`);
      });
    }
  }

  loadProgram(bytes: Uint8Array, addr: number = 0) {
    // Write program into RAM
    for (let i = 0; i < bytes.length; i++) this.ram.write8(addr + i, bytes[i]);
  }

  stepCpu(nInstr: number) {
    for (let i = 0; i < nInstr; i++) this.cpu.step();
  }

  stepCycles(cycles: number) {
    this.sch.step(cycles);
  }

  setPadButtons(mask: number) {
    this.sio?.setPadButtons(mask >>> 0);
  }
  setMemcardPresent(present: boolean) {
    this.sio?.setMemcardPresent(!!present);
  }

  attachSPUAudio(opts?: Partial<{ sampleRate: number; chunkFrames: number }>) {
    const sampleRate = opts?.sampleRate ?? 44100;
    const chunkFrames = opts?.chunkFrames ?? 64;
    const cyclesPerFrame = Math.floor(PSX_CLOCK / sampleRate);
    const cyclesPerChunk = cyclesPerFrame * chunkFrames;
    const scheduleNext = () => {
      // mix and reschedule
      this.spu.stepMix(chunkFrames);
      this.sch.schedule(cyclesPerChunk, scheduleNext);
    };
    // seed
    this.sch.schedule(cyclesPerChunk, scheduleNext);
  }

  attachDMATiming(opts?: Partial<{ cyclesPerWord: number }>) {
    const cyclesPerWord = Math.max(1, (opts?.cyclesPerWord ?? 8) | 0);
    this.dmac.configureTiming(this.sch, cyclesPerWord);
  }

  serialize(): any {
    return {
      intc: this.intc.serialize(),
      dmac: this.dmac.serialize(),
      sch: this.sch.serialize(),
      spu: this.spu.serialize(),
      gpu: this.gpu.serialize(),
      timers: [this.timer0!.serialize(), this.timer1!.serialize(), this.timer2!.serialize()],
      sio: this.sio ? this.sio.serialize() : undefined,
      cd: this.cd ? this.cd.serialize() : undefined,
    };
  }

  deserialize(s: any): void {
    if (s.intc) this.intc.deserialize(s.intc);
    if (s.dmac) this.dmac.deserialize(s.dmac);
    if (s.sch) this.sch.deserialize(s.sch);
    if (s.spu) this.spu.deserialize(s.spu);
    if (s.gpu) this.gpu.deserialize(s.gpu);
    if (Array.isArray(s.timers)) {
      if (s.timers[0]) this.timer0!.deserialize(s.timers[0]);
      if (s.timers[1]) this.timer1!.deserialize(s.timers[1]);
      if (s.timers[2]) this.timer2!.deserialize(s.timers[2]);
    }
    if (s.sio && this.sio) this.sio.deserialize(s.sio);
    if (s.cd && this.cd) this.cd.deserialize(s.cd);
  }
}
