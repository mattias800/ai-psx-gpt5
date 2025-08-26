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
const OR   = (rs: number, rt: number, rd: number) => (0x00<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x25;
const SLL  = (rt: number, rd: number, sh: number) => (0x00<<26) | (0<<21) | (rt<<16) | (rd<<11) | ((sh & 31)<<6) | 0x00;
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;

// Integration test: 0x34 textured Gouraud with UV clamp/wrap via 0xE6; white vertex colors preserve sampling

describe('Integration: 0x34 textured Gouraud UV addressing (wrap/clamp)', () => {
  it('clamps and wraps UV against a 2x2 texture', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // r1 = GP0 address
    prog.push(LUI(1, gp0_hi), ORI(1,1,gp0_lo));

    // Upload 2x2 texture at (70,80): [R G; B W]
    const baseX=70, baseY=80;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f, WHITE=0x7fff;
    prog.push(LUI(2,0xa000), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));
    prog.push(LUI(4, 2), ORI(4,4, 2), SW(1,4,0));
    // word0 = (GREEN<<16)|RED; word1 = (WHITE<<16)|BLUE
    prog.push(LUI(5, (GREEN>>>16)&0xffff), ORI(5,5, GREEN & 0xffff)); // build hi-green, but we use simpler path below
    prog.push(LUI(6, ((GREEN<<16)>>>16)&0xffff), ORI(6,6, RED & 0xffff), SW(1,6,0));
    prog.push(LUI(7, ((WHITE<<16)>>>16)&0xffff), ORI(7,7, BLUE & 0xffff), SW(1,7,0));

    // Set texture base (0xE1)
    prog.push(LUI(2,0xe100), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));

    const x=220, y=120;
    const WHITE24 = 0x00ffffff;

    // Configure clamp via 0xE6: wrap=0, w-1=1, h-1=1
    const confClamp = 0x00010100;
    prog.push(LUI(2,0xe600), SW(1,2,0));
    prog.push(LUI(3, (confClamp>>>16)&0xffff), ORI(3,3, confClamp & 0xffff), SW(1,3,0));

    // Draw 0x34 with white colors: construct cmd word (0x34<<24) | 0x00ffffff
    // Build color 0x00ffffff in r4
    prog.push(ORI(0,4, 0xffff), SLL(4,4,8), ORI(4,4,0x00ff)); // r4=0x00ffffff
    // r2 = (0x34<<24)
    prog.push(LUI(2,0x3400));
    // r2 |= r4
    prog.push(OR(2,4,2), SW(1,2,0));
    // xy1, uv1
    prog.push(LUI(5,(XY(y,x)>>>16)&0xffff), ORI(5,5,XY(y,x)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(0,0)), SW(1,6,0));
    // color2, xy2, uv2 (u=2-> clamp to 1 => G)
    prog.push(LUI(7,(WHITE24>>>16)&0xffff), ORI(7,7, WHITE24 & 0xffff), SW(1,7,0));
    prog.push(LUI(5,(XY(y,x+2)>>>16)&0xffff), ORI(5,5,XY(y,x+2)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(2,0)), SW(1,6,0));
    // color3, xy3, uv3 (v=2-> clamp to 1 => B)
    prog.push(LUI(7,(WHITE24>>>16)&0xffff), ORI(7,7, WHITE24 & 0xffff), SW(1,7,0));
    prog.push(LUI(5,(XY(y+2,x)>>>16)&0xffff), ORI(5,5,XY(y+2,x)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(0,2)), SW(1,6,0));

    // Configure wrap via 0xE6: wrap=1, w-1=1,h-1=1
    const confWrap = 0x00010101;
    prog.push(LUI(2,0xe600), SW(1,2,0));
    prog.push(LUI(3, (confWrap>>>16)&0xffff), ORI(3,3, confWrap & 0xffff), SW(1,3,0));
    // Draw again shifted down: uv (2,0)-> wrap to (0,0) -> R; (0,2)-> wrap to (0,0) -> R
    prog.push(LUI(2,0x3400));
    prog.push(OR(2,4,2), SW(1,2,0));
    prog.push(LUI(5,(XY(y+10,x)>>>16)&0xffff), ORI(5,5,XY(y+10,x)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(0,0)), SW(1,6,0));
    prog.push(LUI(7,(WHITE24>>>16)&0xffff), ORI(7,7, WHITE24 & 0xffff), SW(1,7,0));
    prog.push(LUI(5,(XY(y+10,x+2)>>>16)&0xffff), ORI(5,5,XY(y+10,x+2)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(2,0)), SW(1,6,0));
    prog.push(LUI(7,(WHITE24>>>16)&0xffff), ORI(7,7, WHITE24 & 0xffff), SW(1,7,0));
    prog.push(LUI(5,(XY(y+12,x)>>>16)&0xffff), ORI(5,5,XY(y+12,x)&0xffff), SW(1,5,0));
    prog.push(LUI(6,0), ORI(6,6, UV(0,2)), SW(1,6,0));

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const anyInArea = (cx:number,cy:number,color:number,rad:number)=>{
      for (let dy=-rad; dy<=rad; dy++) for (let dx=-rad; dx<=rad; dx++) {
        const px = psx.gpu.vram[idx((cy+dy)&0x1ff, (cx+dx)&0x3ff)] & 0xffff;
        if (px === color) return true;
      }
      return false;
    };
    // Clamp triangle
    expect(anyInArea(x,y,RED,3)).toBe(true);
    expect(anyInArea(x+2,y,GREEN,3)).toBe(true);
    expect(anyInArea(x,y+2,BLUE,3)).toBe(true);
    // Wrap triangle
    expect(anyInArea(x,y+10,RED,3)).toBe(true);
    expect(anyInArea(x+2,y+10,RED,3)).toBe(true);
    expect(anyInArea(x,y+12,RED,3)).toBe(true);
  });
});

