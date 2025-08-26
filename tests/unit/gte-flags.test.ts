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

const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const CFC2 = (rt: number, rd: number) => (0x12<<26) | (0x02<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

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

describe('GTE FLAG (simplified)', () => {
  it('IR saturation sets bits 0..2', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Large positive diagonal rotation so IR saturates
      ORI(0,1,100000), CTC2(1,0),
      ORI(0,2,100000), CTC2(2,4),
      ORI(0,3,100000), CTC2(3,8),
      // TR=0, H=0; V=(1000,1000,1000)
      ORI(0,4,0), CTC2(4,9), ORI(0,5,0), CTC2(5,10), ORI(0,6,0), CTC2(6,11),
      ORI(0,7,0), CTC2(7,12),
      ORI(0,8,1000), ORI(0,9,1000), ORI(0,10,1000), MTC2(8,0), MTC2(9,1), MTC2(10,2),
      GTEop(0x01),
      CFC2(2,15),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    const flags = cpu.s.regs[2] >>> 0;
    expect((flags & 0x7) >>> 0).toBe(0x7);
  });

  it('RTPS divide by zero sets bit8', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation
      ORI(0,1,1), CTC2(1,0), CTC2(1,4), CTC2(1,8),
      ORI(0,2,0), CTC2(2,9), CTC2(2,10), CTC2(2,11),
      ORI(0,3,0), CTC2(3,12),
      // Vz=0 triggers div-by-zero condition
      ORI(0,4,0), ORI(0,5,0), ORI(0,6,0), MTC2(4,0), MTC2(5,1), MTC2(6,2),
      GTEop(0x01),
      CFC2(7,15),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    const flags = cpu.s.regs[7] >>> 0;
    expect((flags & (1<<8)) >>> 0).toBe(1<<8);
  });

  it('Flags can be cleared by writing 0 to cr[15]', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Trigger saturation
      ORI(0,1,100000), CTC2(1,0), ORI(0,2,100000), CTC2(2,4), ORI(0,3,100000), CTC2(3,8),
      ORI(0,8,1000), ORI(0,9,1000), ORI(0,10,1000), MTC2(8,0), MTC2(9,1), MTC2(10,2),
      GTEop(0x02),
      CFC2(4,15),
      // Clear
      ORI(0,5,0), CTC2(5,15),
      CFC2(6,15),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect((cpu.s.regs[4]>>>0) !== 0).toBe(true);
    expect(cpu.s.regs[6]>>>0).toBe(0);
  });
});

