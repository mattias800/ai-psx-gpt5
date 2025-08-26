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
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);

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

describe('GTE IR1..IR3 via RTPS (with saturation)', () => {
  it('RTPS writes IR1..3 (identity, no saturation)', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation rows and TR=0
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      // H=0 to avoid affecting SXY; OFX/OFY=0
      ORI(0,5,0), CTC2(5,12), ORI(0,6,0), CTC2(6,13), ORI(0,7,0), CTC2(7,14),
      // V=(10,20,100)
      ORI(0,1,10), ORI(0,2,20), ORI(0,3,100), MTC2(1,0), MTC2(2,1), MTC2(3,2),
      GTEop(0x01),
      // Read IR1..3 (dr[9..11])
      MFC2(8,9), MFC2(9,10), MFC2(10,11),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[8]|0).toBe(10);
    expect(cpu.s.regs[9]|0).toBe(20);
    expect(cpu.s.regs[10]|0).toBe(100);
  });

  it('RTPS IR saturation positive', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Diagonal rotation with large scale, TR=0
      ORI(0,1,100000), CTC2(1,0), // r[0]=100000
      ORI(0,2,100000), CTC2(2,4), // r[4]=100000
      ORI(0,3,100000), CTC2(3,8), // r[8]=100000
      ORI(0,5,0), CTC2(5,12), // H=0
      // V=(1000,1000,1)
      ORI(0,6,1000), ORI(0,7,1000), ORI(0,8,1), MTC2(6,0), MTC2(7,1), MTC2(8,2),
      GTEop(0x01),
      MFC2(9,9), MFC2(10,10), MFC2(11,11),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[9]|0).toBe(32767);
    expect(cpu.s.regs[10]|0).toBe(32767);
    expect(cpu.s.regs[11]|0).toBe(32767);
  });

  it('RTPS IR saturation negative', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Diagonal rotation with large negative scale, TR=0
      LUI(1,0xfffe), ORI(1,1,0x7960), CTC2(1,0),
      LUI(2,0xfffe), ORI(2,2,0x7960), CTC2(2,4),
      LUI(3,0xfffe), ORI(3,3,0x7960), CTC2(3,8),
      ORI(0,5,0), CTC2(5,12), // H=0
      // V=(1000,1000,1)
      ORI(0,6,1000), ORI(0,7,1000), ORI(0,8,1), MTC2(6,0), MTC2(7,1), MTC2(8,2),
      GTEop(0x01),
      MFC2(9,9), MFC2(10,10), MFC2(11,11),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[9]|0).toBe(-32768);
    expect(cpu.s.regs[10]|0).toBe(-32768);
    expect(cpu.s.regs[11]|0).toBe(-32768);
  });
});

