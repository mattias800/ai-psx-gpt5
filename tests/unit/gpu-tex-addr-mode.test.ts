import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Tests for UV addressing modes (wrap/clamp) via GP0 0xE6 on 0x24 textured triangle
// 0xE6 config word: bit0=wrap(1)/clamp(0); bits[15:8]=width-1; bits[23:16]=height-1

describe('GPU textured 0x24 UV addressing (wrap/clamp)', () => {
  const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
  const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;
  const idx = (yy: number, xx: number) => (yy * 1024 + xx);

  it('clamp: UV beyond size clamps to edges; wrap: UV wraps modulo size', () => {
    const gpu = new GPU();
    // Upload a 2x2 texture at (20,30): [R G; B W]
    const baseX=20, baseY=30;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f, WHITE=0x7fff;
    gpu.writeGP0((0xa0<<24));
    gpu.writeGP0(XY(baseY, baseX));
    gpu.writeGP0(XY(2,2));
    gpu.writeGP0((GREEN<<16) | RED);
    gpu.writeGP0((WHITE<<16) | BLUE);
    // Set texture base
    gpu.writeGP0(0xe1000000); gpu.writeGP0(XY(baseY, baseX));

    const x=120,y=60;

    // 1) Clamp mode, size=2x2 (wrap bit=0)
    const confClamp = (0<<0) | ((2-1)<<8) | ((2-1)<<16);
    gpu.writeGP0(0xe6000000); gpu.writeGP0(confClamp >>> 0);
    // Draw with UVs intentionally outside [0..1] to force clamp to edge (1)
    gpu.writeGP0((0x24<<24) | 0x000000);
    gpu.writeGP0(XY(y,x));      gpu.writeGP0(UV(0,0));   // -> R
    gpu.writeGP0(XY(y,x+2));    gpu.writeGP0(UV(2,0));   // clamp u=2 -> 1 -> G
    gpu.writeGP0(XY(y+2,x));    gpu.writeGP0(UV(0,2));   // clamp v=2 -> 1 -> B
    expect(gpu.vram[idx(y,x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y,x+2)] & 0xffff).toBe(GREEN);
    expect(gpu.vram[idx(y+2,x)] & 0xffff).toBe(BLUE);

    // 2) Wrap mode, size=2x2 (wrap bit=1)
    const confWrap = (1<<0) | ((2-1)<<8) | ((2-1)<<16);
    gpu.writeGP0(0xe6000000); gpu.writeGP0(confWrap >>> 0);
    // Draw another triangle shifted down; UVs at 2 should wrap to 0
    gpu.writeGP0((0x24<<24) | 0x000000);
    gpu.writeGP0(XY(y+10,x));    gpu.writeGP0(UV(0,0));  // -> R
    gpu.writeGP0(XY(y+10,x+2));  gpu.writeGP0(UV(2,0));  // wrap u=2 -> 0 -> R
    gpu.writeGP0(XY(y+12,x));    gpu.writeGP0(UV(0,2));  // wrap v=2 -> 0 -> R
    expect(gpu.vram[idx(y+10,x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y+10,x+2)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y+12,x)] & 0xffff).toBe(RED);
  });
});

