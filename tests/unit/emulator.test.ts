import { describe, it, expect } from 'vitest';
import { Emulator } from '../../packages/emulator-core/src';
import type { BIOSProvider } from '../../packages/emulator-core/src/memmap';

class ZeroBIOS implements BIOSProvider {
  size(): number { return 512*1024; }
  read8(_o: number): number { return 0; }
  read16(_o: number): number { return 0; }
  read32(_o: number): number { return 0; }
}

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

const ORI = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const SW = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LW = (rs: number, rt: number, off: number) => (0x23<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);


describe('Emulator orchestration', () => {
  it('runs a tiny program that stores/loads via AddressSpace', () => {
    const emu = new Emulator(new ZeroBIOS(), 0x80000000);
    const prog = emit([
      ORI(0,1,0x100), // r1 = 0x100
      ORI(0,2,0xABCD), // r2 = 0xABCD
      SW(1,2,0),       // [0x100] = 0x0000ABCD
      LW(1,3,0),       // r3 = [0x100]
    ]);
    emu.loadRAM(0x80000000, prog);
    emu.setPC(0x80000000);
    emu.stepInstructions(prog.length/4);
    expect(emu.cpu.s.regs[3]>>>0).toBe(0x0000abcd >>> 0);
  });
});

