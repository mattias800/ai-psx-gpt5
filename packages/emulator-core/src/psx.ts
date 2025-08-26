import { AddressSpace, IOHub, MappedRAM, type GPURegs, type IODevices, type TimerPort } from './address-space';
import { EventScheduler, InterruptController } from './timing';
import { DisplayController } from './display';
import { R3000A, createResetState, type CPUHost } from '@ai-psx/cpu';
import { GPU } from '../../emulator-gpu/src/gpu';
import { DMAC } from './dma';

class CPUHostBus implements CPUHost {
  constructor(private as: AddressSpace) {}
  read32(a: number): number { return this.as.read32(a); }
  read16(a: number): number { return this.as.read16(a); }
  read8(a: number): number { return this.as.read8(a); }
  write32(a: number, v: number): void { this.as.write32(a, v>>>0); }
  write16(a: number, v: number): void { this.as.write16(a, v>>>0); }
  write8(a: number, v: number): void { this.as.write8(a, v>>>0); }
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
  public display?: DisplayController;

  constructor() {
    // Initialize DMAC before IOHub so we can pass it into devs
    this.dmac = new DMAC(this.as, this.gpu, this.intc);

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
      dma: { read32: (a:number)=>this.dmac.read32(a), write32: (a:number,v:number)=>this.dmac.write32(a,v) },
    };
    this.iohub = new IOHub(devs);
    this.as.addRegion(this.ram);
    this.as.addRegion(this.iohub);

    this.cpu = new R3000A(createResetState(0), new CPUHostBus(this.as), () => this.intc.pending);
  }

  attachDisplay(cfg?: Partial<{ cyclesPerLine: number; linesPerFrame: number }>) {
    this.display = new DisplayController(this.sch, this.intc, cfg);
    this.display.start();
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
}

