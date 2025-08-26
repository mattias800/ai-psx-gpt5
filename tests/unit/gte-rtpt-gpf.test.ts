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
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
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

const packRGB = (r:number,g:number,b:number)=>((r&0xff)<<16)|((g&0xff)<<8)|(b&0xff);
const xy = (p:number)=>[(p&0xffff)<<16>>16, (p>>>16)<<16>>16] as const;

describe('GTE RTPT + GPF pipeline (simplified)', () => {
  it('After RTPT with R=diag(128), GPF maps IR>>7 of last vertex to RGB0', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // R=diag(128), TR=0, H=1, OFX=OFY=0
      ORI(0,1,128), CTC2(1,0),
      ORI(0,2,128), CTC2(2,4),
      ORI(0,3,128), CTC2(3,8),
      ORI(0,4,0), CTC2(4,9), ORI(0,5,0), CTC2(5,10), ORI(0,6,0), CTC2(6,11),
      ORI(0,7,1), CTC2(7,12), ORI(0,8,0), CTC2(8,13), ORI(0,9,0), CTC2(9,14),
      // V0=(0,0,1), V1=(10,0,1), V2=(0,10,1)
      ORI(0,10,0), ORI(0,11,0), ORI(0,12,1), MTC2(10,0), MTC2(11,1), MTC2(12,2),
      ORI(0,10,10), ORI(0,11,0), ORI(0,12,1), MTC2(10,3), MTC2(11,4), MTC2(12,5),
      ORI(0,10,0), ORI(0,11,10), ORI(0,12,1), MTC2(10,6), MTC2(11,7), MTC2(12,8),
      // RTPT -> last vertex yields IR=(128*0,128*10,128*1)=(0,1280,128) -> >>7=(0,10,1)
      GTEop(0x11),
      // GPF sets RGB0 from IR>>7
      GTEop(0x3c),
      MFC2(13,20),
      // Also ensure SXY0/1/2 updated
      MFC2(14,24), MFC2(15,25), MFC2(16,30),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[13]>>>0).toBe(packRGB(0,10,1)>>>0);
    const [x0,y0] = xy(cpu.s.regs[14]>>>0);
    const [x1,y1] = xy(cpu.s.regs[15]>>>0);
    const [x2,y2] = xy(cpu.s.regs[16]>>>0);
    expect([x0,y0,x1,y1,x2,y2]).toEqual([0,0,10,0,0,10]);
  });
});

