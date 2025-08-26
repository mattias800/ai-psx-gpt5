import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';
import { DisplayController } from '../../packages/emulator-core/src/display';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';

function emit(instrs: number[]): Uint8Array {
  const u8 = new Uint8Array(instrs.length * 4);
  for (let i = 0; i < instrs.length; i++) {
    const v = instrs[i] >>> 0;
    u8[i*4+0] = v & 0xff;
    u8[i*4+1] = (v >>> 8) & 0xff;
    u8[i*4+2] = (v >>> 16) & 0xff;
    u8[i*4+3] = (v >>> 24) & 0xff;
  }
  return u8;
}
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

class CPUHostBus implements CPUHost {
  constructor(private as: AddressSpace) {}
  read32(a: number): number { return this.as.read32(a); }
  read16(a: number): number { return this.as.read16(a); }
  read8(a: number): number { return this.as.read8(a); }
  write32(a: number, v: number): void { this.as.write32(a, v>>>0); }
  write16(a: number, v: number): void { this.as.write16(a, v>>>0); }
  write8(a: number, v: number): void { this.as.write8(a, v>>>0); }
}

describe('E2E: CPU + IOHub + INTC + Display VBlank IRQ', () => {
  it('CPU enables IE and masks VBlank, then vectors on next VBlank', () => {
    const sch = new EventScheduler();
    const intc = new InterruptController();
    const disp = new DisplayController(sch, intc, { cyclesPerLine: 100, linesPerFrame: 5 });

    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const io = new IOHub({ intc: {
      readStatus: () => intc.status,
      readMask: () => intc.mask,
      writeMask: (v:number) => intc.setMask(v),
      ackMask: (v:number) => intc.ackMask(v),
    }});
    as.addRegion(ram);
    as.addRegion(io);

    // Program: Enable IE and set I_MASK for VBlank, then spin
    const mask = 1<<IRQ.VBLANK;
    const code = emit([
      ORI(0,1,0x0001),     // r1=1
      // SR = r1
      (0x10<<26) | (0x04<<21) | (1<<16) | (12<<11),
      // r2 = mask
      LUI(2, (mask>>>16)&0xffff), ORI(2,2,mask&0xffff),
      // r3 = 0x1f801074 (I_MASK)
      LUI(3, 0x1f80), ORI(3,3,0x1074),
      // SW r2, 0(r3)
      SW(3,2,0),
      // loop (do nothing)
      (0x02<<26) | 0, // J 0
    ]);
    // load code at 0
    const u8 = ram['data'] as any as Uint8Array; // access backing for convenience
    u8.set(code, 0);

    const cpu = new R3000A(createResetState(0), new CPUHostBus(as), () => intc.pending);

    // Run instructions to set IE and mask
    cpu.step(); // ORI
    cpu.step(); // MTC0
    cpu.step(); // LUI r2
    cpu.step(); // ORI r2
    cpu.step(); // LUI r3
    cpu.step(); // ORI r3
    cpu.step(); // SW I_MASK

    // Start display and step to next VBlank
    disp.start();
    sch.step(500); // first VBlank

    // Next CPU step should take the interrupt and vector
    const pcBefore = cpu.s.pc >>> 0;
    cpu.step();
    expect(cpu.s.pc>>>0).toBe(0x80000080);
    expect(cpu['cop0'][14]>>>0).toBe(pcBefore>>>0);
  });
});

