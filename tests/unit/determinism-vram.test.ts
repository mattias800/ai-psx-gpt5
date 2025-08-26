import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';
import { crc32 } from '../../packages/emulator-shared/src/crc32';

function vramBytes(vram: Uint16Array): Uint8Array {
  const out = new Uint8Array(vram.length * 2);
  let j = 0;
  for (let i = 0; i < vram.length; i++) {
    const px = vram[i] & 0xffff;
    out[j++] = px & 0xff;
    out[j++] = (px >>> 8) & 0xff;
  }
  return out;
}

describe('Determinism: repeat run VRAM hash equality', () => {
  it('two independent runs produce identical VRAM', () => {
    const run = () => {
      const gpu = new GPU();
      // Draw a couple of rectangles and image loads
      const drawRect = (x:number,y:number,w:number,h:number,color24:number) => {
        gpu.writeGP0((0x64 << 24) | (color24 & 0xffffff));
        gpu.writeGP0(((y & 0x1ff) << 16) | (x & 0x3ff));
        gpu.writeGP0(((h & 0x1ff) << 16) | (w & 0x3ff));
      };
      drawRect(10,10,5,5,0xff0000);
      drawRect(12,12,3,2,0x00ff00);
      drawRect(0,0,2,2,0x0000ff);
      // Image load 3x2 at 100,100
      gpu.writeGP0(0xa0 << 24);
      gpu.writeGP0((100<<16)|100);
      gpu.writeGP0((2<<16)|3);
      gpu.writeGP0((0x1111<<16)|0x0001);
      gpu.writeGP0((0x3333<<16)|0x2222);
      gpu.writeGP0((0x0000<<16)|0x4444);
      return crc32(vramBytes(gpu.vram));
    };
    const h1 = run();
    const h2 = run();
    expect(h1>>>0).toBe(h2>>>0);
  });
});

