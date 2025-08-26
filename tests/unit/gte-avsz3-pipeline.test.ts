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

describe('GTE AVSZ3 with SZ FIFO from RTPS', () => {
  it('Three RTPS fill SZ0..SZ2; AVSZ3 yields average to OTZ', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation, H=0 so screen projection irrelevant
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      ORI(0,5,0), CTC2(5,12),
      // Vz = 90, 120, 150 (x=y=0)
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,90),  MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,120), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,150), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      // AVSZ3 and read OTZ
      GTEop(0x30), MFC2(8,23),
      // Read SZ1..SZ3
      MFC2(9,27), MFC2(10,28), MFC2(11,29),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[8]|0).toBe(Math.trunc((90+120+150)/3));
    expect([cpu.s.regs[9]|0, cpu.s.regs[10]|0, cpu.s.regs[11]|0]).toEqual([90,120,150]);
  });
});

