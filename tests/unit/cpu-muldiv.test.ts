import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';

class TestMem implements CPUHost {
  buf = new Uint8Array(256).fill(0);
  read32(a: number): number { return (this.buf[a] | (this.buf[a+1]<<8) | (this.buf[a+2]<<16) | (this.buf[a+3]<<24)) >>> 0; }
  read16(a: number): number { return this.buf[a] | (this.buf[a+1]<<8); }
  read8(a: number): number { return this.buf[a]; }
  write32(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; this.buf[a+2]=(v>>>16)&0xff; this.buf[a+3]=(v>>>24)&0xff; }
  write16(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; }
  write8(a: number, v: number): void { this.buf[a]=v&0xff; }
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
const MFHI = (rd: number) => (0<<26)|(0<<21)|(0<<16)|(rd<<11)|(0<<6)|0x10;
const MFLO = (rd: number) => (0<<26)|(0<<21)|(0<<16)|(rd<<11)|(0<<6)|0x12;
const MTHI = (rs: number) => (0<<26)|(rs<<21)|(0<<16)|(0<<11)|(0<<6)|0x11;
const MTLO = (rs: number) => (0<<26)|(rs<<21)|(0<<16)|(0<<11)|(0<<6)|0x13;
const MULT = (rs: number, rt: number) => (0<<26)|(rs<<21)|(rt<<16)|(0<<11)|(0<<6)|0x18;
const MULTU = (rs: number, rt: number) => (0<<26)|(rs<<21)|(rt<<16)|(0<<11)|(0<<6)|0x19;
const DIV = (rs: number, rt: number) => (0<<26)|(rs<<21)|(rt<<16)|(0<<11)|(0<<6)|0x1a;
const DIVU = (rs: number, rt: number) => (0<<26)|(rs<<21)|(rt<<16)|(0<<11)|(0<<6)|0x1b;


describe('R3000A mult/div and HI/LO', () => {
  it('MULT signed and MFHI/MFLO', () => {
    const mem = new TestMem();
    const code = emit([
      // r1= 123456, r2= -789
      ORI(0,1,123456 & 0xffff),
      ORI(0,2,(0xffff) & 0xffff), // will set low bits; set full via direct regs
      MULT(1,2),
      MFLO(3),
      MFHI(4),
    ]);
    mem.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.s.regs[1] = 123456 | 0;
    cpu.s.regs[2] = -789 | 0;
    for (let i=0;i<code.length/4;i++) cpu.step();
    const prod = (BigInt(cpu.s.regs[1]) * BigInt(cpu.s.regs[2])) & 0xffffffffffffn;
    const lo = Number(prod & 0xffffffffn) | 0;
    const hi = Number((prod >> 32n) & 0xffffffffn) | 0;
    expect(cpu.s.regs[3]|0).toBe(lo);
    expect(cpu.s.regs[4]|0).toBe(hi);
  });

  it('DIV signed normal and INT_MIN/-1 case', () => {
    const mem = new TestMem();
    const code = emit([
      DIV(1,2), MFLO(3), MFHI(4),
      DIV(5,6), MFLO(7), MFHI(8),
    ]);
    mem.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.s.regs[1] = 7; cpu.s.regs[2] = 3;
    cpu.s.regs[5] = -2147483648; cpu.s.regs[6] = -1;
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[3]|0).toBe(2); // 7/3
    expect(cpu.s.regs[4]|0).toBe(1); // rem
    expect(cpu.s.regs[7]|0).toBe(-2147483648);
    expect(cpu.s.regs[8]|0).toBe(0);
  });

  it('DIVU unsigned', () => {
    const mem = new TestMem();
    const code = emit([ DIVU(1,2), MFLO(3), MFHI(4) ]);
    mem.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.s.regs[1] = 0x80000000 | 0;
    cpu.s.regs[2] = 2;
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[3]>>>0).toBe(0x40000000 >>> 0);
    expect(cpu.s.regs[4]>>>0).toBe(0);
  });
});

