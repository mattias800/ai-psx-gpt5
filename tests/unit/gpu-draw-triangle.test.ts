import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU draw triangle (0x20)', () => {
  it('fills pixels within a small right triangle', () => {
    const gpu = new GPU();
    const x = 100, y = 50;
    const color24 = 0x0000ff; // red in our packing (r=0xff,g=0,b=0)
    // GP0 0x20 flow: cmd=color, then XY1, XY2, XY3
    gpu.writeGP0((0x20 << 24) | (color24 & 0x00ffffff));
    const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
    gpu.writeGP0(XY(y, x));           // v1
    gpu.writeGP0(XY(y, x + 2));       // v2
    gpu.writeGP0(XY(y + 2, x));       // v3

    const idx = (yy: number, xx: number) => (yy * 1024 + xx);
    const bgr555_red = 0x7c00;
    // Expect top-left pixel set
    expect(gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555_red);
    // Expect a pixel near center likely set
    expect(gpu.vram[idx(y + 1, x + 1)] & 0xffff).toBe(bgr555_red);
    // Pixel outside bounding box should remain 0
    expect(gpu.vram[idx(y + 3, x + 3)] & 0xffff).toBe(0);
  });
});

