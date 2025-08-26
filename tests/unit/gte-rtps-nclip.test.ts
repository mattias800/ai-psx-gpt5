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

describe('GTE RTPS and NCLIP (minimal)', () => {
  it('RTPS projects a point with identity matrix and writes SXY2,SZ', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // Load V = (10,20,100) into dr[0..2] via MTC2: put values into r1, r2, r3
    const code = emit([
      ORI(0,1,10), ORI(0,2,20), ORI(0,3,100),
      MTC2(1,0), MTC2(2,1), MTC2(3,2),
      // Identity matrix in cr[0..8], TR=0
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      // H=100, OFX=320, OFY=240
      ORI(0,5,100), CTC2(5,12), ORI(0,6,320), CTC2(6,13), ORI(0,7,240), CTC2(7,14),
      // GTE op RTPS (fn=0x01)
      GTEop(0x01),
      // Read SXY2 (dr[30]) and SZ (dr[31]) to r8,r9
      MFC2(8,30), MFC2(9,31),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    const sxy2 = cpu.s.regs[8]>>>0;
    const sx = (sxy2 & 0xffff) << 16 >> 16;
    const sy = (sxy2 >>> 16) << 16 >> 16;
    expect(sx).toBe(330);
    expect(sy).toBe(260);
    expect(cpu.s.regs[9] | 0).toBe(100);
  });

  it('NCLIP computes signed area into MAC0', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // SXY0=(0,0), SXY1=(10,0), SXY2=(0,10)
    // We'll directly write SXY regs using MTC2 with packed values
    mem.buf.fill(0);
    const code2 = emit([
      // SXY0 = (0,0)
      LUI(1,0), ORI(0,1,0), MTC2(1,24),
      // SXY1 = (10,0)
      LUI(1,0), ORI(0,1,10), MTC2(1,25),
      // SXY2 = (0,10)
      LUI(1,10), MTC2(1,30),
      // Sanity: read back SXY regs
      MFC2(10,24), MFC2(11,25), MFC2(12,30),
      // NCLIP
      GTEop(0x06),
      // Read MAC0 (dr[16])
      MFC2(2,16),
    ]);
    mem.buf.set(code2, 0);
    for (let i=0;i<code2.length/4;i++) cpu.step();
    const s0 = cpu.s.regs[10] >>> 0;
    const s1 = cpu.s.regs[11] >>> 0;
    const s2 = cpu.s.regs[12] >>> 0;
    const x0 = (s0 & 0xffff) << 16 >> 16; const y0 = (s0 >>> 16) << 16 >> 16;
    const x1 = (s1 & 0xffff) << 16 >> 16; const y1 = (s1 >>> 16) << 16 >> 16;
    const x2 = (s2 & 0xffff) << 16 >> 16; const y2 = (s2 >>> 16) << 16 >> 16;
    expect([x0,y0,x1,y1,x2,y2]).toEqual([0,0,10,0,0,10]);
    expect(cpu.s.regs[2] | 0).toBe(100);
  });
});

