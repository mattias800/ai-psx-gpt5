import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';

class TestMem implements CPUHost {
  buf = new Uint8Array(1024).fill(0);
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

const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const SLLV = (rs: number, rt: number, rd: number) => (0<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x04;
const SRLV = (rs: number, rt: number, rd: number) => (0<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x06;
const SRAV = (rs: number, rt: number, rd: number) => (0<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x07;
const REGIMM = (rs: number, rtField: number, off: number) => (0x01<<26) | (rs<<21) | (rtField<<16) | (off & 0xffff);


describe('R3000A extended ALU and branches', () => {
  it('LUI and variable shifts', () => {
    const mem = new TestMem();
    const code = emit([
      LUI(1, 0x1234),         // r1 = 0x12340000
      ORI(0,2,0x0003),        // r2 = 3
      SLLV(2,1,3),            // r3 = r1 << (r2=3) => 0x91a00000
      SRLV(2,3,4),            // r4 = r3 >>> 3 => back to 0x12340000
      SRAV(2,3,5),            // r5 = r3 >> 3  => same as r4 (positive)
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[1]>>>0).toBe(0x12340000>>>0);
    expect(cpu.s.regs[3]>>>0).toBe(0x91a00000>>>0);
    expect(cpu.s.regs[4]>>>0).toBe(0x12340000>>>0);
    expect(cpu.s.regs[5]>>>0).toBe(0xF2340000>>>0);
  });

  it('BLTZ/BGEZ and link variants', () => {
    const mem = new TestMem();
    // r1 = -1; bltz r1, +1; (delay) ori r2,0,0xbeef; ori r3,0,0x7777 (branch target)
    const code = emit([
      ORI(0,1,0xffff),
      REGIMM(1,0x00,1),
      ORI(0,2,0xbeef),
      ORI(0,3,0x7777),
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.s.regs[1] = -1;
    cpu.step(); // ori r1
    cpu.step(); // bltz taken, set nextPc
    cpu.step(); // delay slot executes (ori r2)
    expect(cpu.s.pc>>>0).toBe(16);
    expect(cpu.s.regs[2]>>>0).toBe(0xbeef);
    // Test BGEZAL sets r31
    const code2 = emit([
      ORI(0,1,1),
      REGIMM(1,0x11,1), // bgezal
      ORI(0,4,0x1234),  // delay
      ORI(0,5,0x9999),  // target
    ]);
    mem.buf.fill(0); mem.buf.set(code2, 0);
    cpu.s.pc = 0; cpu.s.nextPc = 4;
    for (let i=0;i<code2.length/4;i++) cpu.step();
    expect(cpu.s.regs[31]>>>0).toBe(12>>>0);
    expect(cpu.s.pc>>>0).toBe(12);
    expect(cpu.s.regs[4]>>>0).toBe(0x1234);
  });
});

