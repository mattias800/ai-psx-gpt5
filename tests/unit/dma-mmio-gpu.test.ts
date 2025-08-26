import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import { MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validate minimal DMA MMIO for GPU channel: stream words from RAM via MADR/BCR/CHCR to GP0

describe('DMAC MMIO -> GPU GP0', () => {
  it('streams a GP0 image load command list to GPU', () => {
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const as = new AddressSpace();
    const dmac = new DMAC(as, gpu);
    const io = new IOHub({
      gpu: {
        writeGP0: (v) => gpu.writeGP0(v),
        writeGP1: (v) => gpu.writeGP1(v),
        readGP0: () => gpu.readGP0(),
        readGP1: () => gpu.readGP1(),
      },
      dma: {
        read32: (addr: number) => dmac.read32(addr),
        write32: (addr: number, v: number) => dmac.write32(addr, v),
      }
    });

    as.addRegion(ram);
    as.addRegion(io);

    // Build a GP0 Image Load sequence in RAM starting at 0x80
    const base = 0x80;
    const x = 7, y = 9, w = 3, h = 2;
    const pixels = [0x0a0a, 0x0b0b, 0x0c0c, 0x0d0d, 0x0e0e, 0x0f0f];
    const words: number[] = [
      (0xa0 << 24) >>> 0,
      ((y & 0x1ff) << 16) | (x & 0x3ff),
      ((h & 0x1ff) << 16) | (w & 0x3ff),
      (pixels[1] << 16) | pixels[0],
      (pixels[3] << 16) | pixels[2],
      (pixels[5] << 16) | pixels[4],
    ];
    for (let i = 0; i < words.length; i++) as.write32(base + i*4, words[i]>>>0);

    // Program DMAC GPU channel: MADR, BCR=wordCount, CHCR=dir(from mem)|start
    as.write32(0x1f8010a0, base >>> 0);
    as.write32(0x1f8010a4, words.length >>> 0);
    as.write32(0x1f8010a8, (1<<0) | (1<<24));

    // Read back via Image Store
    as.write32(0x1f801810, (0xc0 << 24) >>> 0);
    as.write32(0x1f801810, ((y & 0x1ff) << 16) | (x & 0x3ff));
    as.write32(0x1f801810, ((h & 0x1ff) << 16) | (w & 0x3ff));

    const out0 = as.read32(0x1f801810) >>> 0;
    const out1 = as.read32(0x1f801810) >>> 0;
    const out2 = as.read32(0x1f801810) >>> 0;

    expect(out0 & 0xffff).toBe(0x0a0a);
    expect((out0 >>> 16) & 0xffff).toBe(0x0b0b);
    expect(out1 & 0xffff).toBe(0x0c0c);
    expect((out1 >>> 16) & 0xffff).toBe(0x0d0d);
    expect(out2 & 0xffff).toBe(0x0e0e);
    expect((out2 >>> 16) & 0xffff).toBe(0x0f0f);
  });
});

