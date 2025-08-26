import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';

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

// MIPS helpers
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;

// Integration test to verify draw offset (0xE5) applies to flat triangle (0x20)
describe('Integration: flat triangle with draw offset (0x20 + 0xE5)', () => {
  it('applies offset to triangle vertices and draws at shifted location', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // r1 = GP0 addr
    prog.push(LUI(1, gp0_hi), ORI(1,1,gp0_lo));

    // Set draw offset to (50,40)
    const offX=50, offY=40;
    prog.push(LUI(2, 0xe500), SW(1,2,0));
    prog.push(LUI(3, offY), ORI(3,3, offX), SW(1,3,0));

    // Draw a small right triangle at (5,5), (7,5), (5,7) in local coords
    const RED24 = 0x0000ff;
    prog.push(LUI(2, 0x2000), ORI(2,2, RED24 & 0xffff), SW(1,2,0));
    prog.push(LUI(3, XY(5,5)>>>16), ORI(3,3, XY(5,5)&0xffff), SW(1,3,0));
    prog.push(LUI(3, XY(5,7)>>>16), ORI(3,3, XY(5,7)&0xffff), SW(1,3,0));
    prog.push(LUI(3, XY(7,5)>>>16), ORI(3,3, XY(7,5)&0xffff), SW(1,3,0));

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const red555 = 0x7c00;
    // Check a few pixels near the offset-adjusted vertices
    expect(psx.gpu.vram[idx(offY+5, offX+5)] & 0xffff).toBe(red555);
    expect(psx.gpu.vram[idx(offY+5, offX+7)] & 0xffff).not.toBe(0);
    expect(psx.gpu.vram[idx(offY+7, offX+5)] & 0xffff).not.toBe(0);
    // Outside expected area should remain 0
    expect(psx.gpu.vram[idx(offY+3, offX+5)] & 0xffff).toBe(0);
    expect(psx.gpu.vram[idx(offY+8, offX+8)] & 0xffff).toBe(0);
  });
});

