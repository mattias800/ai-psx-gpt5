import { AddressSpace, createDefaultPSXAddressSpace } from './address-space';
import type { BIOSProvider } from './memmap';
import type { Bus } from './bus';
import { R3000A, createResetState, type CPUHost } from '@ai-psx/cpu/src/cpu';

class CPUHostAdapter implements CPUHost {
  constructor(private bus: Bus) {}
  read32(a: number): number { return this.bus.read32(a); }
  read16(a: number): number { return this.bus.read16(a); }
  read8(a: number): number { return this.bus.read8(a); }
  write32(a: number, v: number): void { this.bus.write32(a, v); }
  write16(a: number, v: number): void { this.bus.write16(a, v); }
  write8(a: number, v: number): void { this.bus.write8(a, v); }
}

export class Emulator {
  readonly bus: AddressSpace;
  readonly cpu: R3000A;

  constructor(bios: BIOSProvider, entry: number = 0xbfc00000) {
    this.bus = createDefaultPSXAddressSpace(bios);
    this.cpu = new R3000A(createResetState(entry >>> 0), new CPUHostAdapter(this.bus));
  }

  loadRAM(at: number, bytes: Uint8Array): void {
    for (let i = 0; i < bytes.length; i++) this.bus.write8(at + i, bytes[i]);
  }

  setPC(pc: number): void {
    this.cpu.s.pc = pc >>> 0; this.cpu.s.nextPc = (pc + 4) >>> 0;
  }

  stepInstructions(n: number): void { for (let i=0;i<n;i++) this.cpu.step(); }
}

