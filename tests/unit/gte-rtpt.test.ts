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

const xy = (p:number)=>[(p&0xffff)<<16>>16, (p>>>16)<<16>>16] as const;

describe('GTE RTPT (simplified)', () => {
  it('Projects three vertices, updates SXY0/1/2 and SZ FIFO', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation, H=1, OFX=0, OFY=0
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      ORI(0,5,1), CTC2(5,12), ORI(0,6,0), CTC2(6,13), ORI(0,7,0), CTC2(7,14),
      // V0=(0,0,1), V1=(10,0,1), V2=(0,10,1) into dr[0..8]
      ORI(0,1,0), ORI(0,2,0), ORI(0,3,1), MTC2(1,0), MTC2(2,1), MTC2(3,2),
      ORI(0,1,10), ORI(0,2,0), ORI(0,3,1), MTC2(1,3), MTC2(2,4), MTC2(3,5),
      ORI(0,1,0), ORI(0,2,10), ORI(0,3,1), MTC2(1,6), MTC2(2,7), MTC2(3,8),
      // RTPT
      GTEop(0x11),
      // Read SXY0/1/2
      MFC2(8,24), MFC2(9,25), MFC2(10,30),
      // Read SZ0..SZ3
      MFC2(11,26), MFC2(12,27), MFC2(13,28), MFC2(14,29),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    const [x0,y0] = xy(cpu.s.regs[8]>>>0);
    const [x1,y1] = xy(cpu.s.regs[9]>>>0);
    const [x2,y2] = xy(cpu.s.regs[10]>>>0);
    expect([x0,y0,x1,y1,x2,y2]).toEqual([0,0,10,0,0,10]);
    expect([cpu.s.regs[11]|0,cpu.s.regs[12]|0,cpu.s.regs[13]|0,cpu.s.regs[14]|0]).toEqual([0,1,1,1]);
  });
});

