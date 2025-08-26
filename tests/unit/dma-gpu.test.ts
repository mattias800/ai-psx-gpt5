import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import { MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAController } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('DMAController -> GPU GP0 streaming', () => {
  it('streams GP0 words for image load from RAM', () => {
    const ramBase = 0x00000000;
    const ram = new MappedRAM(ramBase, 1 << 12); // 4KB
    const gpu = new GPU();
    const io = new IOHub({
      writeGP0: (v) => gpu.writeGP0(v),
      writeGP1: (v) => gpu.writeGP1(v),
      readGP0: () => gpu.readGP0(),
      readGP1: () => gpu.readGP1(),
    });
    const as = new AddressSpace();
    as.addRegion(ram);
    as.addRegion(io);

    // Build a GP0 Image Load sequence in RAM starting at 0x100
    const base = 0x100;
    const x = 5, y = 6, w = 2, h = 2;
    const pixels = [0x00aa, 0x00bb, 0x00cc, 0x00dd];
    const words: number[] = [
      (0xa0 << 24) >>> 0,
      ((y & 0x1ff) << 16) | (x & 0x3ff),
      ((h & 0x1ff) << 16) | (w & 0x3ff),
      (pixels[1] << 16) | pixels[0],
      (pixels[3] << 16) | pixels[2],
    ];
    for (let i = 0; i < words.length; i++) {
      const addr = base + i * 4;
      as.write32(addr, words[i] >>> 0);
    }

    // DMA transfer words to GPU GP0
    const dma = new DMAController(as, gpu as any);
    dma.transferToGPU(base, words.length);

    // Read back via Image Store
    as.write32(0x1f801810, (0xc0 << 24) >>> 0);
    as.write32(0x1f801810, ((y & 0x1ff) << 16) | (x & 0x3ff));
    as.write32(0x1f801810, ((h & 0x1ff) << 16) | (w & 0x3ff));
    const out0 = as.read32(0x1f801810) >>> 0;
    const out1 = as.read32(0x1f801810) >>> 0;

    expect(out0 & 0xffff).toBe(0x00aa);
    expect((out0 >>> 16) & 0xffff).toBe(0x00bb);
    expect(out1 & 0xffff).toBe(0x00cc);
    expect((out1 >>> 16) & 0xffff).toBe(0x00dd);
  });
});

