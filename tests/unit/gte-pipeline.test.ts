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

describe('GTE pipeline: SXY and SZ FIFOs', () => {
  it('RTPS updates SXY FIFO; NCLIP uses SXY0/1/2 from pipeline', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // Identity rotation, zero translation
    const code = emit([
      // Setup: Identity matrix and H=1, OFX=0, OFY=0
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      ORI(0,5,1), CTC2(5,12), // H=1
      ORI(0,6,0), CTC2(6,13), // OFX=0
      ORI(0,7,0), CTC2(7,14), // OFY=0
      // V0=(0,0,1)
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,1), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      // V1=(10,0,1)
      ORI(0,1,10), ORI(0,2,0), ORI(0,3,1), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      // V2=(0,10,1)
      ORI(0,1,0), ORI(0,2,10), ORI(0,3,1), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      // Read SXY0/1/2
      MFC2(8,24), MFC2(9,25), MFC2(10,30),
      // NCLIP should compute area2 = 100
      GTEop(0x06), MFC2(11,16),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    const s0 = cpu.s.regs[8]>>>0, s1 = cpu.s.regs[9]>>>0, s2 = cpu.s.regs[10]>>>0;
    const xy = (p:number)=>[(p&0xffff)<<16>>16, (p>>>16)<<16>>16] as const;
    expect([...xy(s0),...xy(s1),...xy(s2)]).toEqual([0,0,10,0,0,10]);
    expect(cpu.s.regs[11]|0).toBe(100);
  });

  it('RTPS updates SZ FIFO; AVSZ4 averages SZ0..SZ3', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation & H=0 to ignore screen projection, offsets unused
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      ORI(0,5,0), CTC2(5,12),
      // 4 vertices with z = 100,200,400,500 and x=y=0
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,100), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,200), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,400), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,500), MTC2(1,0), MTC2(2,1), MTC2(3,2), GTEop(0x01),
      // AVSZ4 and read OTZ
      GTEop(0x31), MFC2(12,23),
      // Also read SZ0..SZ3 for sanity
      MFC2(13,26), MFC2(14,27), MFC2(15,28), MFC2(16,29),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[12]|0).toBe(300);
    expect([cpu.s.regs[13]|0,cpu.s.regs[14]|0,cpu.s.regs[15]|0,cpu.s.regs[16]|0]).toEqual([100,200,400,500]);
  });
});

