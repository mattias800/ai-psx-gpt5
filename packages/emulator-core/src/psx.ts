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

class CPUHostBus implements CPUHost {
  private currentPc: number = 0;
  
  constructor(
    private as: AddressSpace,
    private memTrace?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number, pc: number) => void,
    private preRead32?: (addr: number) => void,
  ) {}
  setMemTrace(t?: (op: 'r8'|'r16'|'r32'|'w8'|'w16'|'w32', addr: number, val: number, pc: number) => void) { this.memTrace = t; }
  setPreRead32Hook(h?: (addr: number) => void) { this.preRead32 = h; }
  setCurrentPc(pc: number) { this.currentPc = pc; }
  
  read32(a: number): number {
    if (this.preRead32) this.preRead32(a >>> 0);
    const v = this.as.read32(a) >>> 0;
    if (this.memTrace) this.memTrace('r32', a >>> 0, v >>> 0, this.currentPc);
    return v >>> 0;
  }
  read16(a: number): number {
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
  public readonly ram = new MappedRAM(0x00000000, 2 * 1024 * 1024);
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
  if (this.addrInBiosStubRegion(addr >>> 0)) this.ensureBiosCallStubsPresent();
});
    // Set BEV=1 at boot so exceptions use BIOS vectors (0xBFC00180/0xBFC00100) until BIOS clears it
    const cpuAny = this.cpu as any;
    if (cpuAny && cpuAny.cop0) {
      cpuAny.cop0[12] = ((cpuAny.cop0[12] >>> 0) | 0x00400000) | 0;
    }

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
    // DON'T install BIOS call stubs here - BIOS will clear memory 0x000-0xF80 early on
    // We'll install them lazily after the BIOS clear loop completes
    // Initialize hardware to expected state to prevent BIOS errors
    initializeHardware(this);
    // Install bad jump prevention
    this.installBadJumpPrevention();
    // Attach display controller for VBLANK interrupts (essential for BIOS animation)
    if (!this.display) {
      this.attachDisplay({ cyclesPerLine: 3413, linesPerFrame: 263 }); // NTSC timings
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
    // CRITICAL FIX: Check t1 is valid before using it as an index
    // If t1 >= 0x100, it's invalid - just return
    // sltiu at, t1, 0x100; beq at, zero, +20; nop
    // li t0, 0x0200; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    // jr ra; nop (for invalid case)
    w(0x000005c4, 0x2d210100);  // sltiu at, t1, 0x100
    w(0x000005c8, 0x10200005);  // beq at, zero, +20 (skip to jr ra)
    w(0x000005cc, 0x24080200);  // li t0, 0x0200 (delay slot)
    w(0x000005d0, 0x00094880);  // sll t1,t1,2
    w(0x000005d4, 0x01094020);  // add t0,t0,t1
    w(0x000005d8, 0x8d080000);  // lw t0,0(t0)
    w(0x000005dc, 0x00000000);  // nop
    w(0x000005e0, 0x01000008);  // jr t0
    w(0x000005e4, 0x00000000);  // nop
    w(0x000005e8, 0x03e00008);  // jr ra (for invalid case)
    w(0x000005ec, 0x00000000);  // nop

    // B0 entry: lui t0, 0; addiu t0, t0, 0x05F0; jr t0; nop
    w(0x000000b0, 0x3c080000);
    w(0x000000b4, 0x250805f0);
    w(0x000000b8, 0x01000008);
    w(0x000000bc, 0x00000000);
    // B0 dispatcher at 0x05F0:
    //  lui t0, 0; addiu t0, t0, 0x0874; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    w(0x000005f0, 0x3c080000);
    w(0x000005f4, 0x25080874);
    w(0x000005f8, 0x00094880);
    w(0x000005fc, 0x01094020);
    w(0x00000600, 0x8d080000);  // Note: This overlaps with C0 entry
    w(0x00000604, 0x00000000);
    w(0x00000608, 0x01000008);
    w(0x0000060c, 0x00000000);

    // C0 entry: lui t0, 0; addiu t0, t0, 0x0620; jr t0; nop
    w(0x000000c0, 0x3c080000);
    w(0x000000c4, 0x25080620);
    w(0x000000c8, 0x01000008);
    w(0x000000cc, 0x00000000);
    // C0 dispatcher at 0x0620:
    //  lui t0, 0; addiu t0, t0, 0x0674; sll t1,t1,2; add t0,t0,t1; lw t0,0(t0); nop; jr t0; nop
    w(0x00000620, 0x3c080000);
    w(0x00000624, 0x25080674);
    w(0x00000628, 0x00094880);
    w(0x0000062c, 0x01094020);
    w(0x00000630, 0x8d080000);
    w(0x00000634, 0x00000000);
    w(0x00000638, 0x01000008);
    w(0x0000063c, 0x00000000);
    
    // Critical B0 function table entry at 0x8D4 (B0:0x18)
    // The BIOS dispatcher will load from 0x874 + (0x18 << 2) = 0x8D4
    // This should point to a stub handler at 0xF2C
    w(0x000008d4, 0x00000f2c);
    
    // Stub handler at 0xF2C that returns immediately
    // This is the OpenBoot function stub
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
      0x3f: 0xbfc01a70,  // printf
      0x40: 0xbfc04750,  // SystemErrorUnresolvedException
      0x44: 0xbfc01920,  // FlushCache
      0x45: 0xbfc0329c,  // init_a0_b0_c0_vectors
      0x47: 0xbfc031a4,  // GPU_dw
      0x48: 0xbfc0331c,  // gpu_send_dma
      0x49: 0xbfc03400,  // SendGP1Command
      0x4a: 0xbfc03454,  // GPU_cw
      0x4b: 0xbfc034b4,  // GPU_cwp
      0x4c: 0xbfc03544,  // send_gpu_linked_list
      0x4d: 0xbfc035ec,  // gpu_abort_dma
      0x4e: 0xbfc03670,  // GetGPUStatus
      0x70: 0xbfc056a4,  // _bu_init
      0x71: 0xbfc057f0,  // _96_init
      0x72: 0xbfc057fc,  // _96_remove
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
      0xa3: 0xbfc04a18,  // FileGetc
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
      0x17: 0xbfc01bb8,  // PAD_dr
      0x18: 0x00000f2c,  // ReturnFromException (stub)
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
    // C0 dispatcher at new location
    if (a >= 0x00000620 && a <= 0x0000063c) return true;
    // A0 function table entry at 0x2a8
    if (a === 0x000002a8) return true;
    // A0 function table entry at 0x310
    if (a === 0x00000310) return true;
    // A0 function table entry at 0x464
    if (a === 0x00000464) return true;
    // C0 function table entry at 0x6BC
    if (a === 0x000006bc) return true;
    // B0 function table entry at 0x8D4
    if (a === 0x000008d4) return true;
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
    
    console.log('[BIOS Stub Hook] Installing hook to detect clear loop completion');
    
    // Save any existing tracer function
    const existingTracer = cpuAny.tracer;
    
    cpuAny.setTracer((pc: number, instr: number, s: import('@ai-psx/cpu').CPUState) => {
      // Check if we've passed the early memory clear loop (exits to 0xbfc00278)
      if (!clearLoopCompleted && pc === 0xbfc00278) {
        clearLoopCompleted = true;
        console.log('[BIOS Stub Hook] Memory clear loop completed at PC=0xbfc00278, installing BIOS call stubs');
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
        console.warn('[Bad Jump Prevention] Prevented read from ASCII text address');
        return 0; 
      }
      read16(_addr: number): number { 
        console.warn('[Bad Jump Prevention] Prevented read from ASCII text address');
        return 0; 
      }
      read32(_addr: number): number { 
        console.warn('[Bad Jump Prevention] Prevented fetch from ASCII text address');
        // Return a jr ra; nop sequence to safely return
        return 0x03e00008; // jr ra
      }
      write8(_addr: number, _v: number): void {
        console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
      write16(_addr: number, _v: number): void {
        console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
      write32(_addr: number, _v: number): void {
        console.warn('[Bad Jump Prevention] Prevented write to ASCII text address');
      }
    })());
    console.log('[Bad Jump Prevention] Installed ASCII text address handler');
  }

  // Ensure BIOS stubs exist; if any sentinel word is missing, reinstall all stubs.
  private ensureBiosCallStubsPresent(): void {
    const r = this.ram;
    const okA0 = (r.read32(0x000000a0) >>> 0) === (0x3c080000 >>> 0);
    const okB0 = (r.read32(0x000000b0) >>> 0) === (0x3c080000 >>> 0);
    const okC0 = (r.read32(0x000000c0) >>> 0) === (0x3c080000 >>> 0);
    const okAD = (r.read32(0x000005c4) >>> 0) === (0x24080200 >>> 0);
    const okBD = (r.read32(0x000005e0) >>> 0) === (0x3c080000 >>> 0);
    const okCD = (r.read32(0x00000620) >>> 0) === (0x3c080000 >>> 0);
    
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
    const okB0Table = (r.read32(0x000008d4) >>> 0) === (0x00000f2c >>> 0);
    const okB047Table = (r.read32(0x00000990) >>> 0) === (0x00003c2c >>> 0);
    const okStubHandler = (r.read32(0x00000f2c) >>> 0) === (0x3c020000 >>> 0);
    
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
      0x0a: { rom: 0xbfc012f4, ram: 0x00002a4c },  // OpenEvent
      0x0b: { rom: 0xbfc01474, ram: 0x00002bcc },  // CloseEvent
      0x0c: { rom: 0xbfc014c8, ram: 0x00002c20 },  // WaitEvent
      0x0d: { rom: 0xbfc01578, ram: 0x00002cd0 },  // TestEvent
      0x0e: { rom: 0xbfc01614, ram: 0x00002d6c },  // EnableEvent
      0x0f: { rom: 0xbfc01674, ram: 0x00002dcc },  // DisableEvent
      0x10: { rom: 0xbfc016d4, ram: 0x00002e2c },  // OpenThread
      0x11: { rom: 0xbfc01754, ram: 0x00002eac },  // CloseThread
      0x12: { rom: 0xbfc01780, ram: 0x00002ed8 },  // ChangeThread
      0x20: { rom: 0xbfc02150, ram: 0x000033a8 },  // UnDeliverEvent
      0x54: { rom: 0xbfc07a10, ram: 0x00001c68 },  // SysEnqIntRP
      0x55: { rom: 0xbfc079e0, ram: 0x00001c38 },  // SysDeqIntRP
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
      0x00: { rom: 0xbfc06310, ram: 0x00000a68 },  // EnqueueTimerAndVblankIrqs
      0x01: { rom: 0xbfc063b0, ram: 0x00001b20 },  // EnqueueSyscallHandler (corrected)
      0x02: { rom: 0xbfc067f0, ram: 0x00000f48 },  // SysEnqIntRP
      0x03: { rom: 0xbfc06808, ram: 0x00000f60 },  // SysDeqIntRP  
      0x07: { rom: 0xbfc06de0, ram: 0x00001538 },  // InstallExceptionHandlers
      0x08: { rom: 0xbfc06ea0, ram: 0x0000113c },  // SysInitMemory (already handled above)
      0x09: { rom: 0xbfc06f30, ram: 0x00001688 },  // SysInitKMem
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
