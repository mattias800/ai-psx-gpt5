import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import type { BIOSProvider } from '../../packages/emulator-core/src/memmap';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU VRAM image load/store via IOHub', () => {
  it('loads a 3x2 rectangle into VRAM and reads it back', () => {
    const gpu = new GPU();
    const io = new IOHub({
      gpu: {
        writeGP0: (v: number) => gpu.writeGP0(v),
        writeGP1: (v: number) => gpu.writeGP1(v),
        readGP0: () => gpu.readGP0(),
        readGP1: () => gpu.readGP1(),
      }
    });
    const as = new AddressSpace();
    as.addRegion(io);

    // Prepare a 3x2 image of 16bpp pixels
    const x = 10, y = 20, w = 3, h = 2;
    const pixels = [
      0x0001, 0x0002, 0x0003,
      0x1001, 0x1002, 0x1003,
    ];
    // Issue GP0 A0 (Image Load) sequence: cmd, XY, Size, then packed pixel words
    as.write32(0x1f801810, (0xa0 << 24) >>> 0);
    as.write32(0x1f801810, ((y & 0x1ff) << 16) | (x & 0x3ff));
    as.write32(0x1f801810, ((h & 0x1ff) << 16) | (w & 0x3ff));
    // Pack pixels two per word (low, high)
    const words: number[] = [];
    for (let i = 0; i < pixels.length; i += 2) {
      const p0 = pixels[i] & 0xffff;
      const p1 = (i + 1 < pixels.length) ? (pixels[i + 1] & 0xffff) : 0;
      words.push((p1 << 16) | p0);
    }
    for (const w32 of words) as.write32(0x1f801810, w32 >>> 0);

    // Now request Image Store (C0) for same rect and read back
    as.write32(0x1f801810, (0xc0 << 24) >>> 0);
    as.write32(0x1f801810, ((y & 0x1ff) << 16) | (x & 0x3ff));
    as.write32(0x1f801810, ((h & 0x1ff) << 16) | (w & 0x3ff));

    const outWords: number[] = [];
    for (let i = 0; i < words.length; i++) {
      outWords.push(as.read32(0x1f801810) >>> 0);
    }
    const outPixels: number[] = [];
    for (const w32 of outWords) {
      outPixels.push(w32 & 0xffff, (w32 >>> 16) & 0xffff);
    }
    outPixels.length = pixels.length; // trim possible extra

    expect(outPixels).toEqual(pixels);
  });
});

