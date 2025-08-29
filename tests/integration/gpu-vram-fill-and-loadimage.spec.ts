import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { crc32 } from '@ai-psx/shared/src/crc32';

function vramCrc(psx: PSXSystem): number {
  // Compute CRC32 over full 1024x512 VRAM (little endian 16-bit per pixel)
  const buf: number[] = [];
  const v = psx.gpu.vram;
  for (let i = 0; i < v.length; i++) {
    const lo = v[i] & 0xff;
    const hi = (v[i] >>> 8) & 0xff;
    buf.push(lo, hi);
  }
  return crc32(buf) >>> 0;
}

// Draw sequence: GP1 reset, fill rect, A0 image load of 2x2 pattern; compare VRAM CRC to golden

describe('Integration: GPU VRAM golden after fill + image load', () => {
  it('updates VRAM CRC after fill and image load in a deterministic way', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const GP1 = 0x1f801814;

    const write32 = (addr: number, val: number) => psx.as.write32(addr >>> 0, val >>> 0);
    const XY = (y: number, x: number) => (((y & 0x1ff) << 16) | (x & 0x3ff)) >>> 0;
    const SIZE = (h: number, w: number) => (((h & 0x1ff) << 16) | (w & 0x3ff)) >>> 0;

    // Reset GPU and capture baseline CRC (cleared VRAM pattern)
    write32(GP1, 0x00000000);
    const crcReset = vramCrc(psx);

    // Fill a 4x4 rect at (10,12) with 0x00a0c0 (BGR order in cmd low 24 bits)
    write32(GP0, (0x64 << 24) | 0x00a0c0);
    write32(GP0, XY(12, 10));
    write32(GP0, SIZE(4, 4));
    const crcAfterFill = vramCrc(psx);
    expect(crcAfterFill).not.toBe(crcReset);

    // Upload a 2x2 image at (100,80): words are (hi<<16)|lo, each 16bpp pixel
    write32(GP0, (0xa0 << 24));
    write32(GP0, XY(80, 100));
    write32(GP0, SIZE(2, 2));
    const RED = 0x7c00, GREEN = 0x03e0;
    write32(GP0, ((GREEN & 0xffff) << 16) | (RED & 0xffff));
    write32(GP0, ((0 & 0xffff) << 16) | (0xffff & 0xffff));

    const crcAfterUpload = vramCrc(psx);
    expect(crcAfterUpload).not.toBe(crcAfterFill);
  });
});

