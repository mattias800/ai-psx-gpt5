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

// helpers to assemble a few ops
const SLL = (rt: number, rd: number, sh: number) => (0<<26) | (0<<21) | (rt<<16) | (rd<<11) | (sh<<6) | 0x00;
const ORI = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const ADDI = (rs: number, rt: number, imm: number) => (0x08<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const BEQ = (rs: number, rt: number, off: number) => (0x04<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const J = (addr: number) => (0x02<<26) | ((addr>>>2) & 0x03ffffff);
const JR = (rs: number) => (0<<26) | (rs<<21) | 0x08;


describe('R3000A basic ops', () => {
  it('ALU and r0 enforcement', () => {
    const mem = new TestMem();
    // ori r1, r0, 5; sll r2, r1, 1; addi r0, r1, 7 (ignored writes to r0)
    const code = emit([
      ORI(0,1,5),
      SLL(1,2,1),
      ADDI(1,0,7),
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.step(); cpu.step(); cpu.step();
    expect(cpu.s.regs[1]).toBe(5);
    expect(cpu.s.regs[2]).toBe(10);
    expect(cpu.s.regs[0]).toBe(0);
  });

  it('branches and delay slot', () => {
    const mem = new TestMem();
    // ori r1, r0, 1; beq r1, r0, +1; ori r2, r0, 0x1234; ori r3, r0, 0xbeef
    const code = emit([
      ORI(0,1,1),
      BEQ(1,0,1),
      ORI(0,2,0x1234), // delay slot executes
      ORI(0,3,0xbeef), // branch target (skipped because beq false)
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.step(); // ori r1
    cpu.step(); // beq (not taken), schedules nextPc
    cpu.step(); // ori r2 executes
    expect(cpu.s.regs[2]).toBe(0x1234);
    expect(cpu.s.pc >>> 0).toBe(12);
  });

  it('jump and link', () => {
    const mem = new TestMem();
    // ori r1, r0, 0; j 0x10; ori r1, r0, 1; ori r2, r31, 0
    const code = emit([
      ORI(0,1,0),
      J(0x10),
      ORI(0,1,1), // delay slot executes
      ORI(31,2,0),
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    cpu.step(); // ori r1, 0
    cpu.step(); // j -> schedules nextPc=0x10
    cpu.step(); // delay slot ori r1,1 executes
    expect(cpu.s.regs[1]).toBe(1);
    expect(cpu.s.pc >>> 0).toBe(0x10);
  });
});

