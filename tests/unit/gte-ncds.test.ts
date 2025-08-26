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
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

const packRGB = (r:number,g:number,b:number)=>((r&0xff)<<16)|((g&0xff)<<8)|(b&0xff);

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

describe('GTE NCDS (simplified) + GPF', () => {
  it('IR = (N * L)>>7 per channel, then GPF maps to RGB0', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // Set per-channel gains in cr[0],cr[4],cr[8] (via CTC2)
    // We'll use diag gains (128,64,32), and N=(128,128,128) so result IR>>7 -> (128,64,32)
    const code = emit([
      ORI(0,1,128), CTC2(1,0), // cr[0]
      ORI(0,1,64),  CTC2(1,4), // cr[4]
      ORI(0,1,32),  CTC2(1,8), // cr[8]
      // Set N in dr[0..2]
      ORI(0,2,128), MTC2(2,0),
      ORI(0,2,128), MTC2(2,1),
      ORI(0,2,128), MTC2(2,2),
      // NCDS then GPF
      GTEop(0x21), GTEop(0x3c),
      MFC2(3,20),
    ]);
    mem.buf.set(code, 0);
    for (let i=0; i<code.length/4; i++) cpu.step();
    expect(cpu.s.regs[3]>>>0).toBe(packRGB(128,64,32)>>>0);
  });
});

