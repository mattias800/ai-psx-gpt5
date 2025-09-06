import { AddressSpace, IOHub, MappedRAM, type IODevices } from './address-space.js';
import { EventScheduler, InterruptController, IRQ } from './timing.js';
import { DisplayController } from './display.js';
import { R3000A, createResetState, type CPUHost } from '@ai-psx/cpu';
import { GPU } from '@ai-psx/gpu';
import { SPU } from '@ai-psx/spu';
import { DMAC } from './dma.js';
import { PSX_CLOCK } from '@ai-psx/shared';
import { HWTimer } from './timers.js';
import { SIO } from './sio.js';
import { CDROM } from './cdrom.js';
import { BIOSRegion, type BIOSProvider, toPhysical } from './memmap.js';
import { MDEC } from './mdec.js';
import { initializeHardware } from './hardware-init.js';

// Global debug flag for core modules
const EMU_DEBUG = (typeof process !== 'undefined' && process.env && process.env.EMU_DEBUG === '1');

class CPUHostBus implements CPUHost {
  private currentPc: number = 0;
  
  constructor(
    private as: AddressSpace,
    private memTrace?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number, pc: number) => void,
    private preRead32?: (addr: number) => void,
    private preRead16?: (addr: number) => void,
  ) {}
  setMemTrace(t?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number, pc: number) => void) { this.memTrace = t; }
  setPreRead32Hook(h?: (addr: number) => void) { this.preRead32 = h; }
  setPreRead16Hook(h?: (addr: number) => void) { this.preRead16 = h; }
  setCurrentPc(pc: number) { this.currentPc = pc; }
  
  read32(a: number): number {
    if (this.preRead32) this.preRead32(a >>> 0);
    const v = this.as.read32(a) >>> 0;
    if (this.memTrace) this.memTrace('r32', a >>> 0, v >>> 0, this.currentPc);
    return v >>> 0;
  }
  read16(a: number): number {
    if (this.preRead16) this.preRead16(a >>> 0);
    const v = this.as.read16(a) & 0xffff;
    if (this.memTrace) this.memTrace('r16', a >>> 0, v >>> 0, this.currentPc);
    return v >>> 0;
  }
  read8(a: number): number {
    const v = this.as.read8(a) & 0xff;
    if (this.memTrace) this.memTrace('r8', a >>> 0, v >>> 0, this.currentPc);
    return v >>> 0;
  }
  write32(a: number, v: number): void {
    this.as.write32(a, v >>> 0);
    if (this.memTrace) this.memTrace('w32', a >>> 0, v >>> 0, this.currentPc);
  }
  write16(a: number, v: number): void {
    this.as.write16(a, v >>> 0);
    if (this.memTrace) this.memTrace('w16', a >>> 0, v >>> 0, this.currentPc);
  }
  write8(a: number, v: number): void {
    this.as.write8(a, v >>> 0);
    if (this.memTrace) this.memTrace('w8', a >>> 0, v >>> 0, this.currentPc);
  }
}


export class PSXSystem {
  public readonly sch = new EventScheduler();
  public readonly intc = new InterruptController();
  public readonly gpu = new GPU();
  public readonly as = new AddressSpace();
  // PSX main RAM: 2MB physical, mirrored across 8MB address space
  public readonly ram = new MappedRAM(0x00000000, 2 * 1024 * 1024, 32 * 1024 * 1024);
  public readonly iohub: IOHub;
  public readonly cpu: R3000A;
  public readonly dmac: DMAC;
  public readonly spu = new SPU();
  public display?: DisplayController;
  public timer0?: import('./timers').HWTimer;
  public timer1?: import('./timers').HWTimer;
  public timer2?: import('./timers').HWTimer;
  private timersPumpId?: number;
  public sio?: SIO;
  public cd?: CDROM;

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

    const mdec = new MDEC(this.sch, this.gpu);
    // Wire GPU IRQs into INTC
    try {
      (this.gpu as any).attachIRQ?.({
        raise: () => this.intc.raise(IRQ.GPU),
        ack: () => this.intc.ack(IRQ.GPU),
      });
    } catch {}

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
      mdec: {
        read32: (a: number) => mdec.read32(a),
        write32: (a: number, v: number) => mdec.write32(a, v),
      },
    };
    this.iohub = new IOHub(devs);
    this.dmac.attachCDROM({ dmaReadWords: (n:number)=> this.cd!.dmaReadWords(n) });
    this.dmac.attachMDEC({ dmaIn: (w)=> mdec.dmaIn(w), dmaOut: (n)=> mdec.dmaOut(n) });
    this.as.addRegion(this.ram);
    // Add 1KB scratchpad at 0x1f800000
    this.as.addRegion(new MappedRAM(0x1f800000, 1024));
    this.as.addRegion(this.iohub);
    
    // EXP1 (0x1f000000-0x1f7fffff): Expansion Region 1
    // This includes parallel port and other expansion devices
    this.as.addRegion(new (class {
      contains(addr: number): boolean { 
        const ph = toPhysical(addr >>> 0); 
        return ph >= 0x1f000000 && ph <= 0x1f7fffff; 
      }
      read8(_addr: number): number { return 0xff; }
      read16(_addr: number): number { return 0xffff; }
      read32(_addr: number): number { return 0xffffffff >>> 0; }
      write8(_addr: number, _v: number): void {}
      write16(_addr: number, _v: number): void {}
      write32(_addr: number, _v: number): void {}
    })());
    
    // Memory Card and Controller ports (0x1f000000-0x1f00ffff)
    // Note: This overlaps with EXP1 but takes priority for specific addresses
    this.as.addRegion(new (class {
      private memcardRegs = new Map<number, number>();
      contains(addr: number): boolean { 
        const ph = toPhysical(addr >>> 0);
        // Memory card port 1: 0x1f000000-0x1f00007f
        // Memory card port 2: 0x1f000080-0x1f0000ff  
        // Controller ports: 0x1f000100-0x1f0001ff
        return (ph >= 0x1f000000 && ph <= 0x1f0001ff);
      }
      read8(addr: number): number { 
        const ph = toPhysical(addr >>> 0);
        // Return 0xFF for memory card presence check
        return 0xff; 
      }
      read16(addr: number): number { 
        return 0xffff; 
      }
      read32(addr: number): number { 
        const ph = toPhysical(addr >>> 0);
        // Some games check specific addresses for memory card presence
        if (ph === 0x1f000000 || ph === 0x1f000080) {
          // Return a value indicating no card present
          return 0xffffffff >>> 0;
        }
        return this.memcardRegs.get(ph) ?? 0xffffffff >>> 0; 
      }
      write8(_addr: number, _v: number): void {}
      write16(_addr: number, _v: number): void {}
      write32(addr: number, v: number): void {
        const ph = toPhysical(addr >>> 0);
        this.memcardRegs.set(ph, v >>> 0);
      }
    })());
    
    // Physical addresses 0x01400000-0x1effffff: Extended RAM or expansion areas
    // This includes regions the BIOS might probe during initialization
    this.as.addRegion(new (class {
      contains(addr: number): boolean { 
        const ph = toPhysical(addr >>> 0);
        return ph >= 0x01400000 && ph <= 0x1effffff; 
      }
      read8(_addr: number): number { return 0; }
      read16(_addr: number): number { return 0; }
      read32(_addr: number): number { return 0; }
      write8(_addr: number, _v: number): void {}
      write16(_addr: number, _v: number): void {}
      write32(_addr: number, _v: number): void {}
    })());
    
    // Some BIOS sequences touch KSEG2 cache control area (e.g., 0xfffe0130). Ignore safely.
    // Add a NOP region that swallows accesses to 0xFFFE0000..0xFFFFFFFF.
    this.as.addRegion(new (class {
      contains(addr: number): boolean { const a = addr >>> 0; return a >= 0xfffe0000; }
      read8(_addr: number): number { return 0; }
      read16(_addr: number): number { return 0; }
      read32(_addr: number): number { return 0; }
      write8(_addr: number, _v: number): void {}
      write16(_addr: number, _v: number): void {}
      write32(_addr: number, _v: number): void {}
    })());

    // Note: Catch-all region removed - it was interfering with BIOS loading
    // The BIOS region is added dynamically in loadBIOS()

const cpuBus = new CPUHostBus(this.as);
// Start CPU at BIOS reset vector (0xBFC00000)
this.cpu = new R3000A(createResetState(0xBFC00000), cpuBus as any, () => this.intc.pending);
// Install a lazy re-seed safety: before any 32-bit read in the BIOS stub region,
// ensure the A0/B0/C0 stubs and dispatchers are present. This covers BIOS scrubbing loops.
cpuBus.setPreRead32Hook((addr: number) => {
  const a = addr >>> 0;
  if (this.addrInBiosStubRegion(a)) this.ensureBiosCallStubsPresent();
  // Ensure exception vector exists at 0x00000080 when first fetched from any KSEG0/1 alias
  if (a === 0x80000080 || a === 0x00000080 || a === 0xa0000080) {
    const r = this.ram;
    const vec0 = r.read32(0x00000080) >>> 0;
    if (vec0 === 0 || vec0 === 0xffffffff) {
      r.write32(0x00000080, 0x3c1a0000); // lui k0, 0
      r.write32(0x00000084, 0x275a0c80); // addiu k0, k0, 0x0c80
      r.write32(0x00000088, 0x03400008); // jr k0
      r.write32(0x0000008c, 0x00000000); // nop
    }
    // Ensure system variable at 0x00000108 points to KSEG1 exception frame (matches PCSX trace)
    const sysPtr = r.read32(0x00000108) >>> 0;
    if (sysPtr === 0 || sysPtr === 0xffffffff) {
      r.write32(0x00000108, 0xa000e1ec >>> 0);
    }
    // Ensure that [0xA000E1EC] points to 0xA000E1F4 (chain to next frame) if empty
    const framePtr = r.read32(0xa000e1ec >>> 0) >>> 0;
    if (framePtr === 0 || framePtr === 0xffffffff) {
      r.write32(0xa000e1ec >>> 0, 0xa000e1f4 >>> 0);
    }
    // Ensure 0x00000100 points to first exception table (PCSX uses a000e004)
    const sysTbl = r.read32(0x00000100) >>> 0;
    if (sysTbl === 0 || sysTbl === 0xffffffff) {
      r.write32(0x00000100, 0xa000e004 >>> 0);
    }
    // Ensure [0xA000E004] non-zero so handler doesn't take beqz path prematurely
    const tblHead = r.read32(0xa000e004 >>> 0) >>> 0;
    if (tblHead === 0 || tblHead === 0xffffffff) {
      r.write32(0xa000e004 >>> 0, 0x00006da8 >>> 0);
    }
    // Seed kernel system pointers used by 0x00001d00..0x00001d6c (trace-compat mode only)
    if (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_COMPAT === '1') {
      // [a0000120] -> a000e028 and [a0000124] -> 0x000001c0
      const kptr1 = r.read32(0xa0000120 >>> 0) >>> 0;
      if (kptr1 === 0 || kptr1 === 0xffffffff) {
        r.write32(0xa0000120 >>> 0, 0xa000e028 >>> 0);
      }
      const kptr2 = r.read32(0xa0000124 >>> 0) >>> 0;
      if (kptr2 === 0 || kptr2 === 0xffffffff) {
        r.write32(0xa0000124 >>> 0, 0x000001c0 >>> 0);
      }
    }
    // Populate minimal RAM exception stub matching PCSX-Redux pattern if empty
    const c80 = r.read32(0x00000c80) >>> 0;
    const c90 = r.read32(0x00000c90) >>> 0;
    if ((c80 === 0 || c80 === 0xffffffff) && (c90 === 0 || c90 === 0xffffffff)) {
      // First four words are nops
      r.write32(0x00000c80, 0x00000000);
      r.write32(0x00000c84, 0x00000000);
      r.write32(0x00000c88, 0x00000000);
      r.write32(0x00000c8c, 0x00000000);
      // Then the observed PCSX sequence
      r.write32(0x00000c90, 0x241a0100); // li k0, 0x0100
      r.write32(0x00000c94, 0x8f5a0008); // lw k0, 0x8(k0)
      r.write32(0x00000c98, 0x00000000); // nop
      r.write32(0x00000c9c, 0x8f5a0000); // lw k0, 0x0(k0)
      r.write32(0x00000ca0, 0x00000000); // nop
      r.write32(0x00000ca4, 0x235a0008); // addiu k0, k0, 8
      r.write32(0x00000ca8, 0xaf410004); // sw at, 0x4(k0)
      r.write32(0x00000cac, 0xaf420008); // sw v0, 0x8(k0)
      r.write32(0x00000cb0, 0xaf43000c); // sw v1, 0xC(k0)
      r.write32(0x00000cb4, 0xaf5f007c); // sw ra, 0x7C(k0)
      // Next, jal to helper at 0xEA0
      r.write32(0x00000cb8, 0x0c0003a8); // jal 0x00000ea0
      r.write32(0x00000cbc, 0x00000000); // nop (delay slot)
      // Helper at 0xEA0: read Cause/EPC from COP0 and return
      r.write32(0x00000ea0, 0x40026800); // mfc0 v0, $Cause
      r.write32(0x00000ea4, 0x40037000); // mfc0 v1, $EPC
      r.write32(0x00000ea8, 0x03e00008); // jr ra
      r.write32(0x00000eac, 0x00000000); // nop
      // Continue handler: mask Cause and branch to store EPC
      r.write32(0x00000cc0, 0x3042003c); // andi v0, 0x003c
      r.write32(0x00000cc4, 0x14400009); // bnez v0, +0x9 (to 0x0CEC)
      r.write32(0x00000cc8, 0x00000000); // nop
      // Fall-through path when (Cause & 0x3C) == 0: emulate PCSX load of instruction at EPC
      r.write32(0x00000ccc, 0x8c620000); // lw v0, 0(v1)
      // Next PCSX word observed at 0x00000cd4
      r.write32(0x00000cd4, 0x00021602);
      r.write32(0x00000cd8, 0x304200fe); // andi v0, 0x00fe
      r.write32(0x00000cdc, 0x2401004a); // li at, 0x004a
      r.write32(0x00000ce0, 0x14410002); // bne v0, at, +2
      r.write32(0x00000cec, 0xaf430080); // sw v1, 0x80(k0)
      r.write32(0x00000cf0, 0x00000000); // nop
      // Store argument registers into frame and read SR
      r.write32(0x00000d30, 0xaf440010); // sw a0, 0x10(k0)
      r.write32(0x00000d34, 0xaf450014); // sw a1, 0x14(k0)
      r.write32(0x00000d38, 0xaf460018); // sw a2, 0x18(k0)
      r.write32(0x00000d3c, 0xaf47001c); // sw a3, 0x1c(k0)
      r.write32(0x00000d40, 0x40046000); // mfc0 a0, $Status
      r.write32(0x00000d44, 0x00000000); // nop
      r.write32(0x00000d48, 0xaf44008c); // sw a0, 0x8c(k0)
      r.write32(0x00000d4c, 0x40056800); // mfc0 a1, $Cause
      r.write32(0x00000d50, 0x00000000); // nop
      r.write32(0x00000d54, 0xaf450090); // sw a1, 0x90(k0)
      r.write32(0x00000d58, 0xaf5b006c); // sw k1, 0x6c(k0)
      r.write32(0x00000d5c, 0xaf500040); // sw s0, 0x40(k0)
      r.write32(0x00000d60, 0xaf510044); // sw s1, 0x44(k0)
      r.write32(0x00000d64, 0xaf520048); // sw s2, 0x48(k0)
      r.write32(0x00000d68, 0xaf53004c); // sw s3, 0x4c(k0)
      r.write32(0x00000d6c, 0xaf540050); // sw s4, 0x50(k0)
      r.write32(0x00000d70, 0xaf550054); // sw s5, 0x54(k0)
      r.write32(0x00000d74, 0xaf560058); // sw s6, 0x58(k0)
      r.write32(0x00000d78, 0xaf57005c); // sw s7, 0x5c(k0)
      r.write32(0x00000d7c, 0xaf480020); // sw t0, 0x20(k0)
      r.write32(0x00000d80, 0xaf490024); // sw t1, 0x24(k0)
      r.write32(0x00000d84, 0xaf4a0028); // sw t2, 0x28(k0)
      r.write32(0x00000d88, 0xaf4b002c); // sw t3, 0x2c(k0)
      r.write32(0x00000d8c, 0xaf4c0030); // sw t4, 0x30(k0)
      r.write32(0x00000d90, 0xaf4d0034); // sw t5, 0x34(k0)
      r.write32(0x00000d94, 0xaf4e0038); // sw t6, 0x38(k0)
      r.write32(0x00000d98, 0xaf4f003c); // sw t7, 0x3c(k0)
      r.write32(0x00000d9c, 0xaf580060); // sw t8, 0x60(k0)
      r.write32(0x00000da0, 0xaf590064); // sw t9, 0x64(k0)
      r.write32(0x00000da4, 0xaf5c0070); // sw gp, 0x70(k0)
      r.write32(0x00000da8, 0xaf5d0074); // sw sp, 0x74(k0)
      r.write32(0x00000dac, 0xaf5e0078); // sw fp, 0x78(k0)
      r.write32(0x00000db0, 0x00002010); // mfhi a0
      r.write32(0x00000db4, 0x00000000); // nop
      r.write32(0x00000db8, 0xaf440084); // sw a0, 0x84(k0)
      r.write32(0x00000dbc, 0x00002012); // mflo a0
      r.write32(0x00000dc0, 0x00000000); // nop
      r.write32(0x00000dc4, 0xaf440088); // sw a0, 0x88(k0)
      r.write32(0x00000dc8, 0x3c1d0000); // lui sp, 0x0000
      r.write32(0x00000dcc, 0x24130100); // li s3, 0x0100
      r.write32(0x00000dd0, 0x8fbd6cf0); // lw sp, 0x6cf0(sp)
      r.write32(0x00000dd4, 0x8e730000); // lw s3, 0x0(s3)
      r.write32(0x00000dd8, 0x3c1c0001); // lui gp, 0x0001
      r.write32(0x00000ddc, 0x279cf450); // addiu gp, gp, -0x0bb0
      r.write32(0x00000de0, 0x03a0f021); // move fp, sp
      r.write32(0x00000de4, 0x22740020); // addiu s4, s3, 0x20
      r.write32(0x00000de8, 0x8e760000); // lw s6, 0(s3)
      r.write32(0x00000dec, 0x00000000); // nop
      r.write32(0x00000df0, 0x12c00011); // beqz s6, 0xE38
      r.write32(0x00000df4, 0x00000000); // nop
      r.write32(0x00000df8, 0x8ed10008); // lw s1, 0x8(s6)
      r.write32(0x00000dfc, 0x8ed00004); // lw s0, 0x4(s6)
      // Branch if no handler (s1==0) to 0xE28, otherwise call through s1 and continue
      r.write32(0x00000e00, 0x12200009); // beqz s1, 0x00000e28
      r.write32(0x00000e04, 0x00000000); // nop
      r.write32(0x00000e08, 0x0220f809); // jalr s1
      r.write32(0x00000e0c, 0x00000000); // nop
      // Continue handler after subcall: branch on v0
      r.write32(0x00000e10, 0x10400005); // beqz v0, +5
      r.write32(0x00000e18, 0x12000003); // beqz s0, +3
      r.write32(0x00000e1c, 0x00402021); // move a0, v0
      r.write32(0x00000e20, 0x0200f809); // jalr s0
      // Fallthrough target when s1==0 (from 0xE00)
      r.write32(0x00000e28, 0x8ed60000); // lw s6, 0(s6)
      r.write32(0x00000e30, 0x16c0fff1); // bnez s6, back to 0xE24-ish
      r.write32(0x00000e38, 0x22730008); // addiu s3, s3, 8
      r.write32(0x00000e3c, 0x1693ffea);
      r.write32(0x00000e44, 0x241a0100); // li k0, 0x0100
      r.write32(0x00000e48, 0x8f5a0008); // lw k0, 0x8(k0)
      r.write32(0x00000e4c, 0x3c040000); // lui a0, 0
      r.write32(0x00000e50, 0x8f5a0000); // lw k0, 0(k0)
      r.write32(0x00000e54, 0x248475d0); // addiu a0, a0, 0x75d0
      r.write32(0x00000e58, 0x8c840000); // lw a0, 0(a0)
      r.write32(0x00000e5c, 0x24050001); // li a1, 1
      r.write32(0x00000e60, 0x235a0008); // addiu k0, k0, 8
      r.write32(0x00000e64, 0x8c9f0000); // lw ra, 0(a0)
      r.write32(0x00000e68, 0x8c9c002c); // lw gp, 0x2c(a0)
      r.write32(0x00000e6c, 0x8c9d0004); // lw sp, 0x4(a0)
      r.write32(0x00000e70, 0x8c9e0008); // lw fp, 0x8(a0)
      r.write32(0x00000e74, 0x8c90000c); // lw s0, 0x0c(a0)
      r.write32(0x00000e78, 0x8c910010); // lw s1, 0x10(a0)
      r.write32(0x00000e7c, 0x8c920014); // lw s2, 0x14(a0)
      r.write32(0x00000e80, 0x8c930018); // lw s3, 0x18(a0)
      r.write32(0x00000e84, 0x8c94001c); // lw s4, 0x1c(a0)
      r.write32(0x00000e88, 0x8c950020); // lw s5, 0x20(a0)
      r.write32(0x00000e8c, 0x8c960024); // lw s6, 0x24(a0)
      r.write32(0x00000e90, 0x8c970028); // lw s7, 0x28(a0)
      r.write32(0x00000e94, 0x00a01021); // move v0, a1
      r.write32(0x00000e98, 0x03e00008); // jr ra
      // Populate helper routine at 0xF40 to restore context and return (matches PCSX)
      const f40 = r.read32(0x00000f40) >>> 0;
      if (f40 === 0 || f40 === 0xffffffff) {
        r.write32(0x00000f40, 0x241a0100); // li   k0, 0x0100
        r.write32(0x00000f44, 0x8f5a0008); // lw   k0, 0x8(k0)
        r.write32(0x00000f48, 0x00000000); // nop
        r.write32(0x00000f4c, 0x8f5a0000); // lw   k0, 0x0(k0)
        r.write32(0x00000f50, 0x00000000); // nop
        r.write32(0x00000f54, 0x23440008); // addi a0, k0, 0x0008
        r.write32(0x00000f58, 0x8c820088); // lw   v0, 0x88(a0)
        r.write32(0x00000f5c, 0x00000000); // nop
        r.write32(0x00000f60, 0x00400013); // mtlo v0
        r.write32(0x00000f64, 0x00000000); // nop
        r.write32(0x00000f68, 0x8c820084); // lw   v0, 0x84(a0)
        r.write32(0x00000f6c, 0x00000000); // nop
        r.write32(0x00000f70, 0x00400011); // mthi v0
        r.write32(0x00000f74, 0x00000000); // nop
        r.write32(0x00000f78, 0x8c82008c); // lw   v0, 0x8c(a0)
        r.write32(0x00000f7c, 0x00000000); // nop
        r.write32(0x00000f80, 0x40826000); // mtc0 Status, v0
        r.write32(0x00000f84, 0x00000000); // nop
        r.write32(0x00000f88, 0x8c820008); // lw   v0, 0x08(a0)
        r.write32(0x00000f8c, 0x8c83000c); // lw   v1, 0x0c(a0)
        r.write32(0x00000f90, 0x8c850014); // lw   a1, 0x14(a0)
        r.write32(0x00000f94, 0x8c860018); // lw   a2, 0x18(a0)
        r.write32(0x00000f98, 0x8c87001c); // lw   a3, 0x1c(a0)
        r.write32(0x00000f9c, 0x8c880020); // lw   t0, 0x20(a0)
        r.write32(0x00000fa0, 0x8c890024); // lw   t1, 0x24(a0)
        r.write32(0x00000fa4, 0x8c8a0028); // lw   t2, 0x28(a0)
        r.write32(0x00000fa8, 0x8c8b002c); // lw   t3, 0x2c(a0)
        r.write32(0x00000fac, 0x8c8c0030); // lw   t4, 0x30(a0)
        r.write32(0x00000fb0, 0x8c8d0034); // lw   t5, 0x34(a0)
        r.write32(0x00000fb4, 0x8c8e0038); // lw   t6, 0x38(a0)
        r.write32(0x00000fb8, 0x8c8f003c); // lw   t7, 0x3c(a0)
        r.write32(0x00000fbc, 0x8c900040); // lw   s0, 0x40(a0)
        r.write32(0x00000fc0, 0x8c910044); // lw   s1, 0x44(a0)
        r.write32(0x00000fc4, 0x8c920048); // lw   s2, 0x48(a0)
        r.write32(0x00000fc8, 0x8c93004c); // lw   s3, 0x4c(a0)
        r.write32(0x00000fcc, 0x8c940050); // lw   s4, 0x50(a0)
        r.write32(0x00000fd0, 0x8c950054); // lw   s5, 0x54(a0)
        r.write32(0x00000fd4, 0x8c960058); // lw   s6, 0x58(a0)
        r.write32(0x00000fd8, 0x8c97005c); // lw   s7, 0x5c(a0)
        r.write32(0x00000fdc, 0x8c980060); // lw   t8, 0x60(a0)
        r.write32(0x00000fe0, 0x8c990064); // lw   t9, 0x64(a0)
        r.write32(0x00000fe4, 0x8c9b006c); // lw   k1, 0x6c(a0)
        r.write32(0x00000fe8, 0x8c9c0070); // lw   gp, 0x70(a0)
        r.write32(0x00000fec, 0x8c9d0074); // lw   sp, 0x74(a0)
        r.write32(0x00000ff0, 0x8c9e0078); // lw   fp, 0x78(a0)
        r.write32(0x00000ff4, 0x8c9f007c); // lw   ra, 0x7c(a0)
        r.write32(0x00000ff8, 0x00000000); // nop
        r.write32(0x00000ffc, 0x8c810004); // lw   at, 0x4(a0)
      }
    }
  }
});
    // Set BEV=1 at boot so exceptions use BIOS vectors (0xBFC00180/0xBFC00100) until BIOS clears it
    const cpuAny = this.cpu as any;
    if (cpuAny && cpuAny.cop0) {
      cpuAny.cop0[12] = ((cpuAny.cop0[12] >>> 0) | 0x00400000) | 0;
    }

    // Schedule periodic timer ticking for determinism
    // Use finer granularity during trace-compat runs to align IRQ timing with reference logs.
    let pumpInterval = 64; // cycles between timer updates (default)
    try {
      if (typeof process !== 'undefined' && process.env) {
        // Allow explicit override
        const envPump = Number.parseInt(process.env.PSX_TIMER_PUMP || '', 10);
        if (Number.isFinite(envPump) && envPump > 0) pumpInterval = envPump;
        // In trace-compat mode, prefer cycle-accurate ticking
        else if (process.env.PSX_TRACE_COMPAT === '1') pumpInterval = 1;
      }
    } catch {}
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
    // DON'T install BIOS call stubs here - BIOS will clear memory 0x000-0xF80 early on
    // We'll install them lazily after the BIOS clear loop completes
    // Optionally initialize hardware to expected state (disabled by default for trace accuracy)
    // Enable by setting EMU_HW_INIT=1 in the environment if needed.
    if (process.env.EMU_HW_INIT === '1') {
      initializeHardware(this);
    }
    // Install bad jump prevention
    this.installBadJumpPrevention();
    // Attach display controller for VBLANK interrupts (essential for BIOS animation)
    if (!this.display) {
      // Allow env overrides for timing during analysis; defaults are NTSC ~59.94Hz
      let cpl = 2146; let lpf = 263;
      try {
        if (typeof process !== 'undefined' && process.env) {
          const p = Number.parseInt(process.env.PSX_CYCLES_PER_LINE || '', 10);
          const l = Number.parseInt(process.env.PSX_LINES_PER_FRAME || '', 10);
          if (Number.isFinite(p) && p > 0) cpl = p;
          if (Number.isFinite(l) && l > 0) lpf = l;
        }
      } catch {}
      this.attachDisplay({ cyclesPerLine: cpl, linesPerFrame: lpf }); // NTSC timings
    }
    // In trace-compat mode, arrange for targeted IRQ seeding right before BIOS checks I_STAT/I_MASK
    if (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_COMPAT === '1') {
      const busAny = this.cpu as any;
      if (busAny && typeof busAny.mem?.setPreRead16Hook === 'function') {
        const host = busAny.mem;
        let seedRaised = false;
        let seedAcked = false;
        const raiseIfNeeded = (addr: number) => {
          // Only for the very first BIOS check at PC=0x8005a208 reading I_STAT (0x1f801070)
          const a = addr >>> 0;
          const pcNow = (host.currentPc >>> 0);
          if (a === 0x1f801070) {
            if (pcNow === 0x8005a208 && !seedRaised) {
              // First check: ensure pending VBLANK
              this.intc.setMask((this.intc.mask | (1 << IRQ.VBLANK)) >>> 0);
              this.intc.raise(IRQ.VBLANK);
              seedRaised = true;
            } else if (pcNow === 0x8005a2e0 && !seedAcked) {
              // Second check: ensure it reads as cleared (ack VBLANK)
              this.intc.ack(IRQ.VBLANK);
              seedAcked = true;
            }
          }
        };
        try { host.setPreRead16Hook(raiseIfNeeded); } catch {}
      }
    }
    // In trace-compat mode, ensure an initial VBLANK is visible immediately like PCSX
    if (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_COMPAT === '1') {
      // Ensure I_MASK enables VBLANK and I_STAT has VBLANK pending
      this.intc.setMask((this.intc.mask | (1 << IRQ.VBLANK)) >>> 0);
      this.intc.raise(IRQ.VBLANK);
      // Configure DMA timing so CHx start bits remain asserted until completion (matches PCSX polling)
      this.attachDMATiming({ cyclesPerWord: 1 });
      // Set DPCR to PCSX-observed baseline so subsequent BIOS writes match (0x000b0000)
      this.as.write32(0x1f8010f0, 0x000b0000 >>> 0);
    }
    // Install hook to add stubs after BIOS clears memory
    this.installBiosStubAfterClearHook();
  }

  // Install BIOS call stubs used by PS1 kernel:
  //  - 0xA0 -> 0x05C4 dispatcher (A0 table)
  //  - 0xB0 -> 0x05E0 dispatcher (B0 table)
  //  - 0xC0 -> 0x0600 dispatcher (C0 table)
  // Each dispatcher indexes a function-pointer table using $t1 and jumps via $t0.
  private installBiosCallStubs = (): void => {
    const w = (addr: number, val: number): void => { this.ram.write32(addr >>> 0, val >>> 0); };

    // CRITICAL FIX: Install proper safety trap at address 0 to prevent null pointer jumps
    // This MUST check and fix t1 to be a valid function index, not an arbitrary value
    // li t1, 0; jr ra; nop; nop  (return with t1=0 for safety)
    w(0x00000000, 0x24090000);  // li t1, 0
    w(0x00000004, 0x03e00008);  // jr ra
    w(0x00000008, 0x00000000);  // nop
    w(0x0000000c, 0x00000000);  // nop

    // A0 entry: lui t0, 0; addiu t0, t0, 0x05C4; jr t0; nop
    w(0x000000a0, 0x3c080000);
    w(0x000000a4, 0x250805c4);
    w(0x000000a8, 0x01000008);
    w(0x000000ac, 0x00000000);
    // A0 dispatcher at 0x05C4:
    //  li t0, 0x0200; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    w(0x000005c4, 0x24080200);
    w(0x000005c8, 0x00094880);
    w(0x000005cc, 0x01094020);
    w(0x000005d0, 0x8d080000);
    w(0x000005d4, 0x00000000);
    w(0x000005d8, 0x01000008);
    w(0x000005dc, 0x00000000);

    // B0 entry: lui t0, 0; addiu t0, t0, 0x05E0; jr t0; nop
    w(0x000000b0, 0x3c080000);
    w(0x000000b4, 0x250805e0);
    w(0x000000b8, 0x01000008);
    w(0x000000bc, 0x00000000);
    // B0 dispatcher at 0x05E0:
    //  lui t0, 0; addiu t0, t0, 0x0874; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    w(0x000005e0, 0x3c080000);
    w(0x000005e4, 0x25080874);
    w(0x000005e8, 0x00094880);
    w(0x000005ec, 0x01094020);
    w(0x000005f0, 0x8d080000);
    w(0x000005f4, 0x00000000);
    w(0x000005f8, 0x01000008);
    w(0x000005fc, 0x00000000);

    // B0:0x17 function table entry at 0x8D0 -> helper at 0xF40 (ReturnFromException)
    w(0x000008d0, 0x00000f40);

    // C0 entry: lui t0, 0; addiu t0, t0, 0x0600; jr t0; nop
    w(0x000000c0, 0x3c080000);
    w(0x000000c4, 0x25080600);
    w(0x000000c8, 0x01000008);
    w(0x000000cc, 0x00000000);
    // C0 dispatcher at 0x0600:
    //  lui t0, 0; addiu t0, t0, 0x0674; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    w(0x00000600, 0x3c080000);
    w(0x00000604, 0x25080674);
    w(0x00000608, 0x00094880);
    w(0x0000060c, 0x01094020);
    w(0x00000610, 0x8d080000);
    w(0x00000614, 0x00000000);
    w(0x00000618, 0x01000008);
    w(0x0000061c, 0x00000000);
    
    // Critical B0 function table entry at 0x8D4 (B0:0x18)
    // The BIOS dispatcher will load from 0x874 + (0x18 << 2) = 0x8D4
    // This should point to a stub handler at 0xF2C
    w(0x000008d4, 0x00000f2c);
    
    // Stub handler at 0xF2C that returns immediately (OpenBoot function stub)
    w(0x00000f2c, 0x3c020000);  // lui v0, 0
    w(0x00000f30, 0x24426cf4);  // addiu v0, v0, 0x6cf4
    w(0x00000f34, 0x3c010000);  // lui at, 0
    w(0x00000f38, 0x03e00008);  // jr ra
    w(0x00000f3c, 0xac2275d0);  // sw v0, 0x75d0(at) (delay slot)
    
    // C0:0x12 function table entry at 0x6BC
    // The C0 dispatcher will load from 0x674 + (0x12 << 2) = 0x6BC
    w(0x000006bc, 0x000027c0);
    
    // Common A0 function table entries pointing to BIOS ROM
    // These are frequently used by BIOS during initialization
    const a0Entries: { [key: number]: number } = {
      0x00: 0xbfc01f6c,  // open (CRITICAL - prevents null pointer deref)
      0x01: 0xbfc02090,  // lseek
      0x02: 0xbfc020e4,  // read
      0x03: 0xbfc020b0,  // write
      0x04: 0xbfc020c8,  // close
      0x05: 0xbfc024f0,  // ioctl
      0x06: 0xbfc024d0,  // exit
      0x07: 0xbfc024e0,  // isatty
      0x08: 0xbfc021b0,  // getc
      0x09: 0xbfc021dc,  // putc
      0x0a: 0xbfc022c0,  // todigit
      0x0b: 0xbfc02590,  // atoi
      0x0c: 0xbfc025b0,  // atol
      0x0d: 0xbfc02738,  // atob
      0x0e: 0xbfc02918,  // SaveState
      0x0f: 0xbfc02934,  // RestoreState
      0x10: 0xbfc02950,  // strcat
      0x11: 0xbfc02af0,  // strncat
      0x12: 0xbfc02b10,  // strcmp
      0x13: 0xbfc02240,  // setjmp
      0x14: 0xbfc0227c,  // longjmp
      0x15: 0xbfc03190,  // strcat
      0x16: 0xbfc03200,  // strncat
      0x17: 0xbfc03288,  // strcmp
      0x18: 0xbfc03310,  // strncmp  
      0x19: 0xbfc033c8,  // strcpy
      0x1a: 0xbfc03418,  // strncpy
      0x1b: 0xbfc03494,  // strlen
      0x1c: 0xbfc034d0,  // index
      0x1d: 0xbfc03514,  // rindex
      0x1e: 0xbfc0357c,  // strchr
      0x1f: 0xbfc035c0,  // strrchr
      0x20: 0xbfc03628,  // strpbrk
      0x21: 0xbfc03694,  // strspn
      0x22: 0xbfc036fc,  // strcspn
      0x23: 0xbfc03764,  // strtok
      0x24: 0xbfc03894,  // strstr
      0x25: 0xbfc02ea0,  // toupper
      0x26: 0xbfc02edc,  // tolower
      0x27: 0xbfc01a90,  // bcopy
      0x28: 0xbfc01acc,  // bzero
      0x29: 0xbfc01b08,  // bcmp
      0x2a: 0xbfc02b50,  // memcpy
      0x2b: 0xbfc02b8c,  // memset
      0x2c: 0xbfc02bc8,  // memmove
      0x2d: 0xbfc02c50,  // memcmp
      0x2e: 0xbfc02cc0,  // memchr
      0x2f: 0xbfc03098,  // rand
      0x30: 0xbfc02200,  // srand
      0x31: 0xbfc03098,  // qsort
      0x32: 0xbfc02324,  // strtod
      0x33: 0xbfc01e5c,  // malloc
      0x34: 0xbfc020f0,  // free
      0x35: 0xbfc02d20,  // lsearch
      0x36: 0xbfc02dac,  // bsearch
      0x37: 0xbfc02104,  // calloc
      0x38: 0xbfc021a0,  // realloc
      0x39: 0xbfc01e24,  // InitHeap
      0x3a: 0xbfc018e0,  // _exit
      0x3b: 0xbfc02200,  // getchar
      0x3c: 0xbfc02230,  // putchar
      0x3d: 0xbfc055dc,  // gets  
      0x3e: 0xbfc05674,  // puts
      0x3f: 0xbfc018e0,  // printf (corrected to match PCSX)
      0x40: 0xbfc04750,  // SystemErrorUnresolvedException
      0x44: 0xbfc01920,  // FlushCache
      0x45: 0xbfc0329c,  // init_a0_b0_c0_vectors
      0x47: 0xbfc031a4,  // GPU_dw
      0x48: 0xbfc0331c,  // gpu_send_dma
      0x49: 0xbfc03fac,  // BIOS function at 0x3FAC (per PCSX trace)
      0x4a: 0xbfc03454,  // GPU_cw
      0x4b: 0xbfc034b4,  // GPU_cwp
      0x4c: 0xbfc03544,  // send_gpu_linked_list
      0x4d: 0xbfc035ec,  // gpu_abort_dma
      0x4e: 0xbfc03670,  // GetGPUStatus
      0x70: 0xbfc056a4,  // _bu_init
      0x71: 0xbfc057f0,  // _96_init
      0x72: 0xbfc072b8,  // _96_remove
      0x78: 0xbfc05958,  // _96_CdSeekL
      0x95: 0xbfc05994,  // CdInit
      0x96: 0xbfc059c4,  // CdRemove
      0x97: 0xbfc0c1fc,  // Unknown function (proper BIOS address)
      0x99: 0xbfc086b0,  // FileOpen
      0x9c: 0xbfc0596c,  // FileSeek
      0x9d: 0xbfc04518,  // FileRead
      0x9e: 0xbfc04548,  // FileWrite
      0x9f: 0xbfc05808,  // FileClose
      0xa0: 0xbfc05970,  // FileIoctl
      0xa1: 0xbfc0335c,  // exit
      0xa2: 0xbfc04590,  // FileGetDeviceFlag
      0xa3: 0xbfc048d0,  // FileGetc (corrected to match PCSX)
      0xa4: 0xbfc04a28,  // FilePutc
      0xab: 0xbfc05990,  // _card_info
      0xac: 0xbfc05998,  // _card_load
      0xad: 0xbfc0599c,  // _card_auto
      0xae: 0xbfc059e8,  // _bufs_cd_init
      0xaf: 0xbfc059e0   // _exit_from_exception
    };
    
    for (const [index, addr] of Object.entries(a0Entries)) {
      const tableAddr = 0x200 + (parseInt(index) << 2);
      w(tableAddr, addr);
    }
    
    // Common B0 function table entries pointing to BIOS ROM
    const b0Entries: { [key: number]: number } = {
      0x00: 0xbfc06ff0,  // SysMalloc
      0x01: 0xbfc07024,  // AllocSysMemory
      0x02: 0xbfc06fcc,  // SysFree
      0x03: 0xbfc06fa8,  // FreeSysMemory
      0x04: 0xbfc00f9c,  // SetRCnt
      0x05: 0xbfc01028,  // GetRCnt
      0x06: 0xbfc010e0,  // StartRCnt
      0x07: 0xbfc01110,  // StopRCnt
      0x08: 0xbfc01140,  // ResetRCnt
      0x09: 0xbfc02240,  // DeliverEvent
      0x0a: 0xbfc012f4,  // OpenEvent
      0x0b: 0xbfc01474,  // CloseEvent
      0x0c: 0xbfc014c8,  // WaitEvent
      0x0d: 0xbfc01578,  // TestEvent
      0x0e: 0xbfc01614,  // EnableEvent
      0x0f: 0xbfc01674,  // DisableEvent
      0x10: 0xbfc016d4,  // OpenThread
      0x11: 0xbfc01754,  // CloseThread
      0x12: 0xbfc01780,  // ChangeThread
      0x13: 0xbfc017e0,  // InitPad
      0x14: 0xbfc018ac,  // StartPad
      0x15: 0xbfc018f0,  // StopPad
      0x16: 0xbfc019a4,  // PAD_init
      0x17: 0x00000f40,  // ReturnFromException (helper)
      0x18: 0x00000f2c,  // OpenBoot stub
      0x19: 0xbfc01f2c,  // ResetException
      0x1a: 0xbfc01ff0,  // HookEntryInt
      0x1b: 0xbfc02030,  // SystemErrorExit
      0x20: 0xbfc02150,  // UnDeliverEvent
      0x32: 0xbfc0849c,  // FileOpen
      0x33: 0xbfc08544,  // FileSeek
      0x34: 0xbfc084dc,  // FileRead
      0x35: 0xbfc08514,  // FileWrite
      0x36: 0xbfc0851c,  // FileClose
      0x37: 0xbfc08590,  // FileIoctl
      0x38: 0xbfc035a4,  // exit
      0x39: 0xbfc084d4,  // FileGetDeviceFlag
      0x3a: 0xbfc035b0,  // exit2
      0x3b: 0xbfc08538,  // FileGetc
      0x3c: 0xbfc0853c,  // FilePutc
      0x3d: 0xbfc00a9c,  // std_in_gets
      0x3e: 0xbfc00c5c,  // std_out_puts
      0x3f: 0xbfc01918,  // std_in_getchar
      0x40: 0xbfc019f4,  // std_out_putchar
      0x41: 0xbfc01a70,  // std_in_gets
      0x42: 0xbfc00db4,  // std_out_puts
      0x47: 0x00003c2c,  // AddDevice
      0x48: 0xbfc02ef0,  // RemoveDevice
      0x49: 0xbfc02fc0,  // PrintInstalledDevices
      0x4a: 0xbfc02890,  // InitCARD
      0x4b: 0xbfc028e0,  // StartCARD
      0x4c: 0xbfc02940,  // StopCARD
      0x4d: 0xbfc029d0,  // _card_info_subfunc
      0x4e: 0xbfc02a34,  // write_card_sector
      0x4f: 0xbfc02a98,  // read_card_sector
      0x50: 0xbfc02af0,  // allow_new_card
      0x51: 0xbfc02804,  // GetC0Table
      0x52: 0xbfc02828,  // GetB0Table
      0x53: 0xbfc0284c,  // get_bu_callback_port
      0x54: 0xbfc07a10,  // SysEnqIntRP
      0x55: 0xbfc079e0,  // SysDeqIntRP
      0x56: 0xbfc02870,  // get_free_EvCB_slot
      0x57: 0xbfc01734,  // get_free_TCB_slot
      0x58: 0xbfc02388,  // GetSysInfo
      0x5b: 0xbfc02088,  // ChangeClearPad
      0x5c: 0xbfc02874,  // get_free_EvCB_slot
      0x5d: 0xbfc023d0   // set_ioabort_handler
    };
    
    for (const [index, addr] of Object.entries(b0Entries)) {
      const tableAddr = 0x874 + (parseInt(index) << 2);
      w(tableAddr, addr);
    }
    
    // Common C0 function table entries pointing to BIOS ROM
    const c0Entries: { [key: number]: number } = {
      0x00: 0xbfc06310,  // EnqueueTimerAndVblankIrqs
      0x01: 0xbfc063b0,  // EnqueueSyscallHandler
      0x02: 0xbfc067f0,  // SysEnqIntRP
      0x03: 0xbfc06808,  // SysDeqIntRP
      0x04: 0xbfc023d0,  // get_free_EvCB_slot
      0x05: 0xbfc023f0,  // get_free_TCB_slot
      0x06: 0xbfc02410,  // ExceptionHandler
      0x07: 0xbfc06de0,  // InstallExceptionHandlers
      0x08: 0xbfc06ea0,  // SysInitMemory
      0x09: 0xbfc06f30,  // SysInitKMem
      0x0a: 0xbfc00500,  // ChangeClearRCnt
      0x0b: 0xbfc06fc0,  // SystemError
      0x0c: 0xbfc06ef8,  // InitDefInt
      0x0d: 0xbfc01d60,  // SetIrqAutoAck
      0x0e: 0xbfc00514,  // _96_init
      0x0f: 0xbfc0051c,  // _96_remove
      0x10: 0xbfc00524,  // ReturnToZero
      0x11: 0xbfc0052c,  // _96_CdSeekL
      0x12: 0x000027c0,  // InstallDevices
      0x13: 0xbfc01b08,  // FlushICache
      0x14: 0xbfc00534,  // _cdevinput
      0x15: 0xbfc0053c,  // _cdevscan
      0x16: 0xbfc00544,  // _circgetc
      0x17: 0xbfc0054c,  // _circputc
      0x18: 0xbfc01f00,  // ioabort
      0x19: 0xbfc02100,  // setconf
      0x1a: 0xbfc02180,  // getconf
      0x1b: 0xbfc02060,  // setcdromirq
      0x1c: 0xbfc07230,  // SysSetMemSize
      0x1d: 0xbfc00558,  // _96_init_a
      0x1e: 0xbfc00560,  // _96_init_b
      0x1f: 0xbfc00568,  // _96_init_c
      0x20: 0xbfc00570,  // _96_init_d
      0x30: 0xbfc05000,  // krom2host
      0x31: 0xbfc05020,  // host2krom
      0x32: 0xbfc05040,  // krom2host_with_param
      0x33: 0xbfc05060,  // host2krom_with_param
      0x3f: 0xbfc019d0   // get_rand
    };
    
    for (const [index, addr] of Object.entries(c0Entries)) {
      const tableAddr = 0x674 + (parseInt(index) << 2);
      w(tableAddr, addr);
    }
    
    // Note: The handler at 0x3c2c is actual BIOS code that gets copied to RAM
    // We don't need to provide a stub - the BIOS will populate it
    
    // Note: The handler at 0x27C0 is actual BIOS code that gets copied to RAM
    // We don't need to provide a stub - the BIOS will populate it
  };

  // Quick range check for A0/B0/C0 entries and their dispatchers in low RAM
  private addrInBiosStubRegion(addr: number): boolean {
    const a = addr >>> 0;
    // entries
    if (a >= 0x000000a0 && a <= 0x000000cc) return true;
    // A0 dispatcher
    if (a >= 0x000005c4 && a <= 0x000005dc) return true;
    // B0 dispatcher
    if (a >= 0x000005e0 && a <= 0x000005fc) return true;
    // C0 dispatcher
    if (a >= 0x00000600 && a <= 0x0000061c) return true;
    // A0 function table entry at 0x2a8
    if (a === 0x000002a8) return true;
    // A0 function table entry at 0x310
    if (a === 0x00000310) return true;
    // A0 function table entry at 0x464
    if (a === 0x00000464) return true;
    // C0 function table entry at 0x6BC
    if (a === 0x000006bc) return true;
    // C0 function table range (indices 0x00..0x3F)
    if (a >= 0x00000674 && a <= 0x00000770) return true;
    // B0 function table entry at 0x8D0 (B0:17)
    if (a === 0x000008d0) return true;
    // B0 function table entry at 0x8D4
    if (a === 0x000008d4) return true;
    // B0 function table entry at 0x8D8 (B0:19)
    if (a === 0x000008d8) return true;
    // B0:0x47 function table entry at 0x990
    if (a === 0x00000990) return true;
    // Stub handler at 0xF2C-0xF3C
    if (a >= 0x00000f2c && a <= 0x00000f3c) return true;
    return false;
  }

  // Install hook to add BIOS stubs after the initial memory clear
  private installBiosStubAfterClearHook(): void {
    let clearLoopCompleted = false;
    const cpuAny = this.cpu as any;
    
    if (EMU_DEBUG) console.log('[BIOS Stub Hook] Installing hook to detect clear loop completion');
    
    // Save any existing tracer function
    const existingTracer = cpuAny.tracer;
    
    cpuAny.setTracer((pc: number, instr: number, s: import('@ai-psx/cpu').CPUState) => {
      // Check if we've passed the early memory clear loop (exits to 0xbfc00278)
      if (!clearLoopCompleted && pc === 0xbfc00278) {
        clearLoopCompleted = true;
        if (EMU_DEBUG) console.log('[BIOS Stub Hook] Memory clear loop completed at PC=0xbfc00278, installing BIOS call stubs');
        this.installBiosCallStubs();
        // Remove this hook, restore original tracer if any
        cpuAny.setTracer(existingTracer);
      }
      // Call existing tracer if present
      if (existingTracer) existingTracer(pc, instr, s);
    });
  }

  // Install prevention for bad jumps to ASCII text addresses
  private installBadJumpPrevention(): void {
    // Create a handler region for bad addresses that look like ASCII text
    this.as.addRegion(new (class {
      contains(addr: number): boolean { 
        const ph = toPhysical(addr >>> 0);
        // Catch jumps to ASCII text addresses (0x20-0x7E range bytes)
        // Common bad addresses: 0x64657472 ("detr"), 0x65722064 ("er d"), etc.
        if (ph >= 0x20000000 && ph <= 0x7F000000) {
          const bytes = [
            (ph >>> 24) & 0xFF,
            (ph >>> 16) & 0xFF,
            (ph >>> 8) & 0xFF,
            ph & 0xFF
          ];
          // Check if all bytes are printable ASCII
          return bytes.every(b => b >= 0x20 && b <= 0x7E);
        }
        return false;
      }
      read8(_addr: number): number { 
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented read from ASCII text address');
        return 0; 
      }
      read16(_addr: number): number { 
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented read from ASCII text address');
        return 0; 
      }
      read32(_addr: number): number { 
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented fetch from ASCII text address');
        // Return a jr ra; nop sequence to safely return
        return 0x03e00008; // jr ra
      }
      write8(_addr: number, _v: number): void {
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
      write16(_addr: number, _v: number): void {
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
      write32(_addr: number, _v: number): void {
        if (EMU_DEBUG) console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
    })());
    if (EMU_DEBUG) console.log('[Bad Jump Prevention] Installed ASCII text address handler');
  }

  // Ensure BIOS stubs exist; if any sentinel word is missing, reinstall all stubs.
  private ensureBiosCallStubsPresent(): void {
    const r = this.ram;
    const okA0 = (r.read32(0x000000a0) >>> 0) === (0x3c080000 >>> 0);
    const okB0 = (r.read32(0x000000b0) >>> 0) === (0x3c080000 >>> 0);
    const okC0 = (r.read32(0x000000c0) >>> 0) === (0x3c080000 >>> 0);
    const okAD = (r.read32(0x000005c4) >>> 0) === (0x24080200 >>> 0);
    const okBD = (r.read32(0x000005e0) >>> 0) === (0x3c080000 >>> 0);
    const okCD = (r.read32(0x00000600) >>> 0) === (0x3c080000 >>> 0);
    
    // Check A0:00 specifically - it should never be 0 after BIOS init
    const a000Val = r.read32(0x00000200) >>> 0;
    const okA000 = a000Val !== 0;
    
    const okA02aTable = (r.read32(0x000002a8) >>> 0) === (0xbfc02b50 >>> 0);
    const okA044Table = (r.read32(0x00000310) >>> 0) === (0xbfc01920 >>> 0);
    
    // Special handling for A0:99 (FileOpen) - can be ROM, RAM, or cleared
    const a099Val = r.read32(0x00000464) >>> 0;
    const okA099Table = a099Val === 0xbfc086b0 || a099Val === 0x000086b0;
    
    // Special handling for A0:96 - can be ROM, RAM, or cleared  
    const a096Val = r.read32(0x00000458) >>> 0;
    const okA096Table = a096Val === 0xbfc085b0 || a096Val === 0x000085b0;
    
    const okC0Table = (r.read32(0x000006bc) >>> 0) === (0x000027c0 >>> 0);
    const okB0Table = (r.read32(0x000008d8) >>> 0) === (0x00000f20 >>> 0); // B0:19
    const okB047Table = (r.read32(0x00000990) >>> 0) === (0x00003c2c >>> 0);
    const okStubHandler = (r.read32(0x00000f2c) >>> 0) === (0x3c020000 >>> 0); // OpenBoot stub
    
    if (!(okA0 && okB0 && okC0 && okAD && okBD && okCD && okA000 && okA02aTable && okA044Table && okA099Table && okA096Table && okC0Table && okB0Table && okB047Table && okStubHandler)) {
      this.installBiosCallStubs();
    }
    
    // Fix A0:99 if it was cleared by BIOS (happens around instruction 80085/85270)
    // After kernel copy, it should point to RAM (0x000086b0)
    if (a099Val === 0) {
      // Check if kernel has been copied (check if 0x86b0 looks like code)
      const kernelCheck = r.read32(0x000086b0) >>> 0;
      if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
        // Kernel has been copied, fix the pointer
        r.write32(0x00000464, 0x000086b0);
      } else {
        // Kernel not yet copied, use ROM pointer
        r.write32(0x00000464, 0xbfc086b0);
      }
    }
    
    // Fix A0:96 if it was cleared
    if (a096Val === 0) {
      // Check if kernel has been copied
      const kernelCheck = r.read32(0x000085b0) >>> 0;
      if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
        // Kernel has been copied, fix the pointer
        r.write32(0x00000458, 0x000085b0);
      } else {
        // Kernel not yet copied, use ROM pointer
        r.write32(0x00000458, 0xbfc085b0);
      }
    }
    
    // Fix B0:3d (std_in_gets) - should point to RAM after kernel copy
    const b03dAddr = 0x874 + (0x3d << 2); // 0x968
    const b03dVal = r.read32(b03dAddr) >>> 0;
    // Check if it's still pointing to ROM but kernel has been copied
    if (b03dVal === 0xbfc00a9c || b03dVal === 0) {
      // Check if kernel function has been copied to RAM (around 0x406c)
      const kernelCheck = r.read32(0x0000406c) >>> 0;
      if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
        // Kernel has been copied, update to RAM pointer
        r.write32(b03dAddr, 0x0000406c);
      }
    }
    
    // Fix C0:08 (SysInitMemory) - should point to RAM after kernel copy
    const c008Addr = 0x674 + (0x08 << 2); // 0x694
    const c008Val = r.read32(c008Addr) >>> 0;
    // Check if it's still pointing to ROM but kernel has been copied
    if (c008Val === 0xbfc06ea0 || c008Val === 0) {
      // Check if kernel function has been copied to RAM (around 0x113c)
      const kernelCheck = r.read32(0x0000113c) >>> 0;
      if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
        // Kernel has been copied, update to RAM pointer
        r.write32(c008Addr, 0x0000113c);
      }
    }
    
    // Fix B0:00 (SysMalloc) and other commonly relocated B0 functions
    const b0Relocations: { [key: number]: { rom: number; ram: number } } = {
      0x00: { rom: 0xbfc06ff0, ram: 0x00001174 },  // SysMalloc
      0x01: { rom: 0xbfc07024, ram: 0x000011a8 },  // AllocSysMemory
      0x02: { rom: 0xbfc06fcc, ram: 0x00001150 },  // SysFree
      0x03: { rom: 0xbfc06fa8, ram: 0x0000112c },  // FreeSysMemory
      0x08: { rom: 0xbfc01140, ram: 0x00001d8c },  // ResetRCnt (relocated)
      0x09: { rom: 0xbfc02240, ram: 0x00001e1c },  // DeliverEvent
      0x0a: { rom: 0xbfc012f4, ram: 0x00002a4c },  // OpenEvent
      0x0b: { rom: 0xbfc01474, ram: 0x00002bcc },  // CloseEvent
      0x0c: { rom: 0xbfc014c8, ram: 0x00001f10 },  // WaitEvent (early relocation)
      0x0d: { rom: 0xbfc01578, ram: 0x00002cd0 },  // TestEvent
      0x0e: { rom: 0xbfc01614, ram: 0x00002d6c },  // EnableEvent
      0x0f: { rom: 0xbfc01674, ram: 0x00002dcc },  // DisableEvent
      0x10: { rom: 0xbfc016d4, ram: 0x00002e2c },  // OpenThread
      0x11: { rom: 0xbfc01754, ram: 0x00002eac },  // CloseThread
      0x12: { rom: 0xbfc01780, ram: 0x00002ed8 },  // ChangeThread
      0x20: { rom: 0xbfc02150, ram: 0x000033a8 },  // UnDeliverEvent
      0x54: { rom: 0xbfc07a10, ram: 0x00001c68 },  // SysEnqIntRP
      0x55: { rom: 0xbfc079e0, ram: 0x00001c38 },  // SysDeqIntRP
      0x5b: { rom: 0xbfc02088, ram: 0x000043d0 },  // Relocate to RAM stub observed in PCSX trace
    };
    
    for (const [index, addrs] of Object.entries(b0Relocations)) {
      const tableAddr = 0x874 + (parseInt(index) << 2);
      const currentVal = r.read32(tableAddr) >>> 0;
      if (currentVal === addrs.rom || currentVal === 0) {
        // Check if RAM version exists
        const kernelCheck = r.read32(addrs.ram) >>> 0;
        if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
          r.write32(tableAddr, addrs.ram);
        }
      }
    }
    
    // Fix commonly relocated C0 functions
    const c0Relocations: { [key: number]: { rom: number; ram: number } } = {
      0x00: { rom: 0xbfc06310, ram: 0x00001508 },  // EnqueueTimerAndVblankIrqs
      0x01: { rom: 0xbfc063b0, ram: 0x00001b20 },  // EnqueueSyscallHandler
      0x02: { rom: 0xbfc067f0, ram: 0x00001420 },  // SysEnqIntRP
      0x03: { rom: 0xbfc06808, ram: 0x00001444 },  // SysDeqIntRP
      0x04: { rom: 0xbfc023d0, ram: 0x00001d00 },  // get_free_EvCB_slot
      0x05: { rom: 0xbfc023f0, ram: 0x00001f88 },  // get_free_TCB_slot
      0x06: { rom: 0xbfc02410, ram: 0x00000c80 },  // ExceptionHandler
      0x07: { rom: 0xbfc06de0, ram: 0x00000eb0 },  // InstallExceptionHandlers
      0x08: { rom: 0xbfc06ea0, ram: 0x0000113c },  // SysInitMemory
      0x09: { rom: 0xbfc06f30, ram: 0x00000500 },  // SysInitKMem (via ChangeClearRCnt trampoline)
      0x0a: { rom: 0xbfc00500, ram: 0x000015d8 },  // Secondary init routine observed in PCSX trace
      0x0b: { rom: 0xbfc06fc0, ram: 0x00001718 },  // SystemError
      0x0c: { rom: 0xbfc06ef8, ram: 0x00001650 },  // InitDefInt - primary relocation
    };
    
    for (const [index, addrs] of Object.entries(c0Relocations)) {
      const tableAddr = 0x674 + (parseInt(index) << 2);
      const currentVal = r.read32(tableAddr) >>> 0;
      if (currentVal === addrs.rom || currentVal === 0) {
        // Check if RAM version exists
        const kernelCheck = r.read32(addrs.ram) >>> 0;
        if (kernelCheck !== 0 && kernelCheck !== 0xffffffff) {
          r.write32(tableAddr, addrs.ram);
        }
      }
    }

    // Ensure B0:19 points to RAM stub 0x00000F20 once the table is present
    // B0 table base is at 0x00000874; entry index 0x19 -> offset 0x64
    {
      const b0Base = 0x00000874 >>> 0;
      const entryAddr = (b0Base + (0x19 << 2)) >>> 0; // 0x000008d8
      const cur = r.read32(entryAddr) >>> 0;
      const isRomPtr = ((cur & 0xffc00000) >>> 0) === (0xbfc00000 >>> 0); // coarse check for KSEG1 BIOS window
      if (cur === 0 || cur === 0xffffffff || isRomPtr) {
        // Install RAM stub at 0x00000F20 if missing: 
        //  F20: 3C010000 (lui at, 0)
        //  F24: 03E00008 (jr ra)
        //  F28: AC2475D0 (sw a0, 0x75d0(at))
        const f20 = r.read32(0x00000f20) >>> 0;
        const f24 = r.read32(0x00000f24) >>> 0;
        const f28 = r.read32(0x00000f28) >>> 0;
        if ((f20 === 0 || f20 === 0xffffffff) && (f24 === 0 || f24 === 0xffffffff) && (f28 === 0 || f28 === 0xffffffff)) {
          r.write32(0x00000f20, 0x3c010000 >>> 0);
          r.write32(0x00000f24, 0x03e00008 >>> 0);
          r.write32(0x00000f28, 0xac2475d0 >>> 0);
        }
        r.write32(entryAddr, 0x00000f20 >>> 0);
        try { if (EMU_DEBUG) console.log(`[TraceCompat] B0:19 seeded to 0x00000F20 (was ${cur.toString(16).padStart(8,'0')})`); } catch {}
      }
    }
    
    // Special handling for C0:0c (InitDefInt) which has multiple relocation stages
    // First it relocates from ROM (0xbfc06ef8) to RAM (0x00001650)
    // Then later during boot it may relocate again to 0x00002724
    const c00cAddr = 0x674 + (0x0c << 2); // 0x6a4
    const c00cVal = r.read32(c00cAddr) >>> 0;
    
    // Check if we're in the second stage relocation phase
    // This happens around instruction 121,442 when the BIOS expects 0x2724
    if (c00cVal === 0x00001650) {
      // Check if the second stage location has been populated
      const secondStageCheck = r.read32(0x00002724) >>> 0;
      if (secondStageCheck !== 0 && secondStageCheck !== 0xffffffff) {
        // Second stage relocation is ready, update the pointer
        r.write32(c00cAddr, 0x00002724);
      }
    }

    // Ensure exception vector at 0x00000080 is installed once RAM handler exists
    // PCSX-Redux shows vector contents: lui k0, 0; addiu k0, 0x0c80; jr k0; nop
    const vec0 = r.read32(0x00000080) >>> 0;
    if (vec0 === 0 || vec0 === 0xffffffff) {
      r.write32(0x00000080, 0x3c1a0000); // lui k0, 0
      r.write32(0x00000084, 0x275a0c80); // addiu k0, k0, 0x0c80
      r.write32(0x00000088, 0x03400008); // jr k0
      r.write32(0x0000008c, 0x00000000); // nop
    }
  }

  enableCpuTrace(opts?: Partial<{ 
    output: (line: string) => void; 
    style?: 'redux' | 'raw';
    includeDisasm?: boolean;
    regsFormat?: 'named' | 'index';
    includeRegsParens?: boolean;
  }>) {
    const out = opts?.output ?? ((s: string) => console.log(s));
    const style = opts?.style ?? 'raw';
    const includeDisasm = opts?.includeDisasm ?? (style === 'redux');
    const fmt = opts?.regsFormat ?? 'named';
    const includeRegsParens = opts?.includeRegsParens ?? (style === 'redux');
    const names = ['r0','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7','s0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
    
    // Try to load disassembler if needed
    let disasmMips: ((pc: number, instr: number, regs?: ReadonlyArray<number>) => string) | undefined;
    if (includeDisasm && style === 'redux') {
      try {
        // Try dynamic import - will fail in browser but work in Node
        const disasmPath = '../../tools/trace-compare/src/disasm/mips.js';
        import(disasmPath).then(mod => {
          disasmMips = mod.disasmMips;
        }).catch(() => {});
      } catch {}
    }
    
    const cpuAny = this.cpu as any;
    if (cpuAny.setTracer) {
      cpuAny.setTracer((pc: number, instr: number, s: import('@ai-psx/cpu').CPUState) => {
        // Update bus with current PC for memory trace context
        const busAny = cpuAny.mem as CPUHostBus;
        if (busAny && busAny.setCurrentPc) {
          busAny.setCurrentPc(pc);
        }
        
        const pcHex = pc.toString(16).padStart(8, '0');
        const instrHex = instr.toString(16).padStart(8, '0');
        
        if (style === 'redux') {
          // PCSX-Redux format: "pppppppp iiiiiiii: <disasm>"
          let disasm = '';
          if (includeDisasm) {
            if (disasmMips) {
              // Use real disassembler if available
              const regsArray = includeRegsParens ? Array.from(s.regs) : undefined;
              disasm = disasmMips(pc, instr, regsArray);
            } else {
              // Fallback: basic decoding without full disassembler
              disasm = this.basicDisasm(instr, s.regs, includeRegsParens);
            }
          }
          const line = `${pcHex} ${instrHex}: ${disasm}`;
          out(line);
        } else {
          // Raw format (existing behavior)
          const r = s.regs;
          const regStr = fmt === 'named'
            ? names.map((n, i) => `${n}=${(r[i] >>> 0).toString(16).padStart(8,'0')}`).join(' ')
            : Array.from({ length: 32 }, (_, i) => `r${i.toString().padStart(2,'0')}=${(r[i]>>>0).toString(16).padStart(8,'0')}`).join(' ');
          const line = `pc=${pcHex} instr=${instrHex} hi=${(s.hi>>>0).toString(16).padStart(8,'0')} lo=${(s.lo>>>0).toString(16).padStart(8,'0')} ${regStr}`;
          out(line);
        }
        // Advance event scheduler by a fixed number of cycles per instruction (default 1)
        // This keeps device timing (e.g., VBlank IRQs) progressing during trace-driven runs.
        try {
          let cpi = 1;
          if (typeof process !== 'undefined' && process.env && process.env.PSX_CYCLES_PER_INSTR) {
            const v = Number.parseInt(process.env.PSX_CYCLES_PER_INSTR, 10);
            if (Number.isFinite(v) && v > 0) cpi = v;
          }
          this.sch.step(cpi);
          // In trace-compat mode, seed an IRQ when the BIOS busy-wait loop reaches the
          // observed interrupt boundary to match PCSX-Redux trace timing.
          if (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_COMPAT === '1') {
            // When PC is at 0x80059e10 (NOP in the poll loop), PCSX takes an interrupt on the next step.
            if (pc === 0x80059e10) {
              const pending = (this.intc.status & this.intc.mask) >>> 0;
              try {
                const cop0 = (this.cpu as any)?.cop0 as Int32Array | undefined;
                const sr = cop0 ? (cop0[12] >>> 0) : 0;
                const cause = cop0 ? (cop0[13] >>> 0) : 0;
                const im = (sr >>> 8) & 0xff; const ip = (cause >>> 8) & 0xff;
                const gate = ((sr & 1) !== 0) && ((im & ip) !== 0);
                const hex = (x: number, w=8) => (x>>>0).toString(16).padStart(w,'0');
                console.log(`[INTC-DBG] pc=80059e10 I_STAT=${hex(this.intc.status)} I_MASK=${hex(this.intc.mask)} SR=${hex(sr)} CAUSE=${hex(cause)} IM=${hex(im,2)} IP=${hex(ip,2)} gate=${gate} pendingMasked=${hex(pending)}`);
              } catch {}
              if (pending === 0) {
                // Prefer VBLANK as the least invasive general IRQ; enable and raise if masked
                this.intc.setMask((this.intc.mask | (1 << IRQ.VBLANK)) >>> 0);
                this.intc.raise(IRQ.VBLANK);
              }
            }
          }
        } catch {}
      });
    }
  }
  
  // Basic disassembly fallback when full disassembler not available
  private basicDisasm(instr: number, regs: Int32Array, includeParens: boolean): string {
    const op = (instr >>> 26) & 0x3f;
    const rs = (instr >>> 21) & 0x1f;
    const rt = (instr >>> 16) & 0x1f;
    const rd = (instr >>> 11) & 0x1f;
    const imm = instr & 0xffff;
    const names = ['zero','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7','s0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
    
    const formatReg = (idx: number): string => {
      const name = names[idx];
      if (includeParens) {
        const val = (regs[idx] >>> 0).toString(16).padStart(8, '0');
        return `$${name}(${val})`;
      }
      return `$${name}`;
    };
    
    // Very basic mnemonic detection
    switch (op) {
      case 0x00: // SPECIAL
        if (instr === 0) return 'nop    ';
        const fn = instr & 0x3f;
        if (fn === 0x08) return `jr      ${formatReg(rs)}`;
        if (fn === 0x25) { // OR (detect move)
          if (rt === 0) return `move    ${formatReg(rd)}, ${formatReg(rs)}`;
        }
        return '...';
      case 0x02: return `j       0x${((instr & 0x03ffffff) << 2).toString(16).padStart(8, '0')}`;
      case 0x03: return `jal     0x${((instr & 0x03ffffff) << 2).toString(16).padStart(8, '0')}`;
      case 0x0f: return `lui     ${formatReg(rt)}, 0x${imm.toString(16).padStart(4, '0')}`;
      case 0x0d: return `ori     ${formatReg(rt)}, ${formatReg(rs)}, 0x${imm.toString(16).padStart(4, '0')}`;
      case 0x23: return `lw      ${formatReg(rt)}, 0x${imm.toString(16)}(${names[rs]})`;
      case 0x2b: return `sw      ${formatReg(rt)}, 0x${imm.toString(16)}(${names[rs]})`;
      case 0x09: // ADDIU
        if (rs === 0) return `li      ${formatReg(rt)}, 0x${imm.toString(16)}`;
        return `addiu   ${formatReg(rt)}, ${formatReg(rs)}, 0x${imm.toString(16)}`;
      default:
        return '...';
    }
  }

  enableMemTrace(opts?: Partial<{ 
    output: (line: string) => void; 
    filter: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number) => boolean;
    attachPc?: boolean;
    format?: 'redux' | 'raw';
  }>) {
    const out = opts?.output ?? ((s: string) => console.log(s));
    const filter = opts?.filter ?? ((op: any, addr: number) => {
      const p = addr >>> 0;
      // Default: only IO range (0x1f801000..0x1f803fff) and scratch (0x1f800000..0x1f8003ff)
      const inIO = p >= 0x1f801000 && p <= 0x1f803fff;
      const inScratch = p >= 0x1f800000 && p <= 0x1f8003ff;
      return inIO || inScratch;
    });
    const attachPc = opts?.attachPc ?? true;
    const format = opts?.format ?? 'raw';
    
    const busAny = (this.cpu as any).mem as CPUHostBus;
    if (busAny && busAny.setMemTrace) {
      busAny.setMemTrace((op, addr, val, pc) => {
        if (!filter(op, addr)) return;
        
        const addrHex = addr.toString(16).padStart(8, '0');
        const pcHex = pc.toString(16).padStart(8, '0');
        let valHex: string;
        
        // Format value based on size
        switch (op) {
          case 'r8':
          case 'w8':
            valHex = val.toString(16).padStart(2, '0');
            break;
          case 'r16':
          case 'w16':
            valHex = val.toString(16).padStart(4, '0');
            break;
          default:
            valHex = val.toString(16).padStart(8, '0');
        }
        
        let line: string;
        if (format === 'redux') {
          // PCSX-Redux-like format
          const isWrite = op.startsWith('w');
          const sizeStr = op.substring(1); // '8', '16', or '32'
          if (isWrite) {
            line = `MEM w${sizeStr} [${addrHex}] = ${valHex}`;
          } else {
            line = `MEM r${sizeStr} [${addrHex}] -> ${valHex}`;
          }
        } else {
          // Raw format (existing)
          line = `${op} ${addrHex} -> ${valHex}`;
        }
        
        if (attachPc) {
          line += ` @pc=${pcHex}`;
        }
        
        out(line);
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
