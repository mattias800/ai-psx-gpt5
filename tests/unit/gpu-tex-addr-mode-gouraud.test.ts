import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Tests for UV addressing modes with textured Gouraud (0x34): use white vertex colors to preserve texture sampling
// 0xE6 config: bit0 wrap, [15:8] width-1, [23:16] height-1

describe('GPU 0x34 UV addressing (wrap/clamp) with neutral colors', () => {
  const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
  const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;
  const idx = (yy: number, xx: number) => (yy * 1024 + xx);

  it('clamp and wrap behave as expected for 2x2 texture', () => {
    const gpu = new GPU();
    // Upload 2x2 tex [R G; B W] at (40,50)
    const baseX=40, baseY=50;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f, WHITE=0x7fff;
    gpu.writeGP0((0xa0<<24));
    gpu.writeGP0(XY(baseY, baseX));
    gpu.writeGP0(XY(2,2));
    gpu.writeGP0((GREEN<<16)|RED);
    gpu.writeGP0((WHITE<<16)|BLUE);
    // Set base
    gpu.writeGP0(0xe1000000); gpu.writeGP0(XY(baseY, baseX));

    const x=200, y=100;
    const WHITE24 = 0x00ffffff; // neutral color per-vertex

    // Clamp mode, size=2x2
    const confClamp = (0<<0) | ((2-1)<<8) | ((2-1)<<16);
    gpu.writeGP0(0xe6000000); gpu.writeGP0(confClamp >>> 0);
    // 0x34: c1, xy1, uv1, c2, xy2, uv2, c3, xy3, uv3
    gpu.writeGP0((0x34<<24) | (WHITE24 & 0x00ffffff));
    gpu.writeGP0(XY(y,x));       gpu.writeGP0(UV(0,0));
    gpu.writeGP0(WHITE24 & 0x00ffffff); gpu.writeGP0(XY(y,x+2)); gpu.writeGP0(UV(2,0)); // clamp u=2->1 (G)
    gpu.writeGP0(WHITE24 & 0x00ffffff); gpu.writeGP0(XY(y+2,x)); gpu.writeGP0(UV(0,2)); // clamp v=2->1 (B)
    expect(gpu.vram[idx(y,x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y,x+2)] & 0xffff).toBe(GREEN);
    expect(gpu.vram[idx(y+2,x)] & 0xffff).toBe(BLUE);

    // Wrap mode
    const confWrap = (1<<0) | ((2-1)<<8) | ((2-1)<<16);
    gpu.writeGP0(0xe6000000); gpu.writeGP0(confWrap >>> 0);
    gpu.writeGP0((0x34<<24) | (WHITE24 & 0x00ffffff));
    gpu.writeGP0(XY(y+10,x));       gpu.writeGP0(UV(0,0)); // R
    gpu.writeGP0(WHITE24 & 0x00ffffff); gpu.writeGP0(XY(y+10,x+2)); gpu.writeGP0(UV(2,0)); // wrap u=2->0 -> R
    gpu.writeGP0(WHITE24 & 0x00ffffff); gpu.writeGP0(XY(y+12,x));   gpu.writeGP0(UV(0,2)); // wrap v=2->0 -> R
    expect(gpu.vram[idx(y+10,x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y+10,x+2)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y+12,x)] & 0xffff).toBe(RED);
  });
});

