import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU textured triangle (0x24) with texture base (0xE1)', () => {
  const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
  const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;
  const idx = (yy: number, xx: number) => (yy * 1024 + xx);

  it('samples 2x2 texture at base and maps to vertices', () => {
    const gpu = new GPU();
    // Upload a 2x2 texture at (10,20): [R G; B W]
    const baseX = 10, baseY = 20;
    gpu.writeGP0((0xa0<<24));
    gpu.writeGP0(XY(baseY, baseX));
    gpu.writeGP0(XY(2,2));
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f, WHITE=0x7fff;
    // First word: low=RED, high=GREEN
    gpu.writeGP0((GREEN<<16) | RED);
    // Second word: low=BLUE, high=WHITE
    gpu.writeGP0((WHITE<<16) | BLUE);

    // Set texture base (0xE1)
    gpu.writeGP0(0xe1000000); gpu.writeGP0(XY(baseY, baseX));

    // Draw textured triangle mapping UVs to the 2x2 tex
    const x=100,y=50;
    gpu.writeGP0((0x24<<24) | 0x000000); // color ignored
    gpu.writeGP0(XY(y,x));      gpu.writeGP0(UV(0,0)); // -> RED
    gpu.writeGP0(XY(y,x+2));    gpu.writeGP0(UV(1,0)); // -> GREEN
    gpu.writeGP0(XY(y+2,x));    gpu.writeGP0(UV(0,1)); // -> BLUE

    expect(gpu.vram[idx(y,x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y,x+2)] & 0xffff).toBe(GREEN);
    expect(gpu.vram[idx(y+2,x)] & 0xffff).toBe(BLUE);
  });
});

