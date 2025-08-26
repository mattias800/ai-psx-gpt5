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

describe('GTE GPF/GPL (simplified)', () => {
  it('GPF maps IR>>7 to RGB0 (dr[20])', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // IR = (12800, 19200, 25600) -> (100, 150, 200) after >>7
    const code = emit([
      ORI(0,1,12800), MTC2(1,9),
      ORI(0,1,19200), MTC2(1,10),
      ORI(0,1,25600), MTC2(1,11),
      GTEop(0x3c),
      MFC2(2,20),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[2]>>>0).toBe(packRGB(100,150,200)>>>0);
  });

  it('GPL accumulates IR>>7 into RGB0 and clamps to 255', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    // Set base color to (10,20,30)
    const base = packRGB(10,20,30)>>>0;
    const code = emit([
      // Write base color into dr[20]
      LUI(1, base>>>16), ORI(1,1, base & 0xffff), MTC2(1,20),
      // Set IR increments (20,30,40) via >>7 mapping
      ORI(0,2, 20*128), MTC2(2,9),
      ORI(0,2, 30*128), MTC2(2,10),
      ORI(0,2, 40*128), MTC2(2,11),
      GTEop(0x3d),
      MFC2(3,20),
      // Now test clamp: add (250,250,250)
      ORI(0,2, 250*128), MTC2(2,9), MTC2(2,10), MTC2(2,11),
      GTEop(0x3d),
      MFC2(4,20),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[3]>>>0).toBe(packRGB(30,50,70)>>>0);
    expect(cpu.s.regs[4]>>>0).toBe(packRGB(255,255,255)>>>0);
  });
});

