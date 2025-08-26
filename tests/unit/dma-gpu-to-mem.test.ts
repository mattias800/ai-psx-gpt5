import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validate GPU -> memory DMA (ch2, dir=to memory, sync=0) using Image Store queue

describe('DMAC GPU block to memory (ch2, dir=to mem, sync=0)', () => {
  it('copies words from GPUREAD queue into RAM', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const dmac = new DMAC(as, gpu);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) },
    });
    as.addRegion(ram);
    as.addRegion(io);

    // Write a 3x2 rectangle of pixels into VRAM via Image Load
    const x = 4, y = 6, w = 3, h = 2;
    const px = [0x1111,0x2222,0x3333,0x4444,0x5555,0x6666];
    as.write32(0x1f801810, (0xa0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));
    as.write32(0x1f801810, (px[1]<<16)|px[0]);
    as.write32(0x1f801810, (px[3]<<16)|px[2]);
    as.write32(0x1f801810, (px[5]<<16)|px[4]);

    // Queue Image Store from same region; GPU will fill its read queue
    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));

    // DMA ch2: dir=to memory (bit0=0), sync=0, start
    const dst = 0x80;
    as.write32(0x1f8010a0, dst>>>0);
    as.write32(0x1f8010a4, Math.ceil((w*h)/2) >>> 0);
    as.write32(0x1f8010a8, (0<<0) | (0<<9) | (1<<24));

    const r0 = as.read32(dst+0)>>>0;
    const r1 = as.read32(dst+4)>>>0;
    const r2 = as.read32(dst+8)>>>0;

    expect(r0 & 0xffff).toBe(px[0]);
    expect((r0>>>16)&0xffff).toBe(px[1]);
    expect(r1 & 0xffff).toBe(px[2]);
    expect((r1>>>16)&0xffff).toBe(px[3]);
    expect(r2 & 0xffff).toBe(px[4]);
    expect((r2>>>16)&0xffff).toBe(px[5]);
  });
});

