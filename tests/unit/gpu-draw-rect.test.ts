import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU draw rect (0x64)', () => {
  it('fills a small rectangle with expected BGR555 color', () => {
    const gpu = new GPU();
    const x = 100, y = 50, w = 2, h = 2;
    const color24 = 0x00ff00; // R=0,G=255,B=0 -> BGR555 = 0x03E0
    // GP0 0x64 flow: cmd=color, then XY, Size
    gpu.writeGP0((0x64 << 24) | (color24 & 0xffffff));
    gpu.writeGP0(((y & 0x1ff) << 16) | (x & 0x3ff));
    gpu.writeGP0(((h & 0x1ff) << 16) | (w & 0x3ff));

    const idx = (yy: number, xx: number) => (yy * 1024 + xx);
    const bgr555 = 0x03e0;
    expect(gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y, x + 1)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y + 1, x)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y + 1, x + 1)] & 0xffff).toBe(bgr555);
  });
});

