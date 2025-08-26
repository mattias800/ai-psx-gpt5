import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU draw clipping and offset', () => {
  const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
  const idx = (yy: number, xx: number) => (yy * 1024 + xx);

  it('clamps rectangle fill to clip area', () => {
    const gpu = new GPU();
    const x = 100, y = 50;
    const color24 = 0x00ff00; // green
    // Set draw area TL=(100,50), BR=(100,50)
    gpu.writeGP0(0xe3000000); gpu.writeGP0(XY(y, x));
    gpu.writeGP0(0xe4000000); gpu.writeGP0(XY(y, x));
    // Draw 2x2 rect at (100,50); only 1 pixel should be set
    gpu.writeGP0((0x64<<24) | (color24 & 0x00ffffff));
    gpu.writeGP0(XY(y, x));
    gpu.writeGP0(XY(2, 2));

    const bgr555_green = 0x03e0;
    expect(gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555_green);
    expect(gpu.vram[idx(y, x+1)] & 0xffff).toBe(0);
    expect(gpu.vram[idx(y+1, x)] & 0xffff).toBe(0);
  });

  it('applies offset and clip for triangles', () => {
    const gpu = new GPU();
    const baseX = 10, baseY = 10;
    // Set clip to a small 2x2 box at (baseX+5, baseY+5) .. (baseX+6, baseY+6)
    gpu.writeGP0(0xe3000000); gpu.writeGP0(XY(baseY+5, baseX+5));
    gpu.writeGP0(0xe4000000); gpu.writeGP0(XY(baseY+6, baseX+6));
    // Set draw offset to (baseX, baseY)
    gpu.writeGP0(0xe5000000); gpu.writeGP0(XY(baseY, baseX));

    // Draw a right triangle with vertices relative to offset: (5,5), (7,5), (5,7)
    const color24 = 0x0000ff; // red
    gpu.writeGP0((0x20<<24) | (color24 & 0x00ffffff));
    gpu.writeGP0(XY(5,5));
    gpu.writeGP0(XY(5,7));
    gpu.writeGP0(XY(7,5));

    const red555 = 0x7c00;
    // Only pixels within clip box should be set
    expect(gpu.vram[idx(baseY+5, baseX+5)] & 0xffff).toBe(red555);
    // Edge inside
    expect(gpu.vram[idx(baseY+6, baseX+6)] & 0xffff).not.toBe(0);
    // Outside should remain 0
    expect(gpu.vram[idx(baseY+4, baseX+5)] & 0xffff).toBe(0);
    expect(gpu.vram[idx(baseY+7, baseX+7)] & 0xffff).toBe(0);
  });
});

