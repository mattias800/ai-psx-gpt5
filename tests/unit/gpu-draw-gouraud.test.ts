import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// GP0 0x30: Gouraud triangle
// Sequence: [cmd(color1)], xy1, color2, xy2, color3, xy3

describe('GPU draw Gouraud triangle (0x30)', () => {
  it('fills vertex pixels with their respective colors', () => {
    const gpu = new GPU();
    const x = 120, y = 60;
    const c1 = 0x0000ff; // red (R=255,G=0,B=0)
    const c2 = 0x00ff00; // green (R=0,G=255,B=0)
    const c3 = 0xff0000; // blue (R=0,G=0,B=255)
    const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;

    // Issue command
    gpu.writeGP0((0x30 << 24) | (c1 & 0x00ffffff));
    gpu.writeGP0(XY(y, x));           // v1
    gpu.writeGP0(c2);
    gpu.writeGP0(XY(y, x + 2));       // v2
    gpu.writeGP0(c3);
    gpu.writeGP0(XY(y + 2, x));       // v3

    const idx = (yy: number, xx: number) => (yy * 1024 + xx);
    const RED = 0x7c00, GREEN = 0x03e0, BLUE = 0x001f;

    expect(gpu.vram[idx(y, x)] & 0xffff).toBe(RED);
    expect(gpu.vram[idx(y, x + 2)] & 0xffff).toBe(GREEN);
    expect(gpu.vram[idx(y + 2, x)] & 0xffff).toBe(BLUE);
  });
});

