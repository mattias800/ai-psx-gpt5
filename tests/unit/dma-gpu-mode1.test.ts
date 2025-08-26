import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validate BCR mode 1 (request) for GPU ch2 in both directions

describe('DMAC GPU mode 1 (request) transfers', () => {
  it('mem->GPU: transfers block_size*block_count words to GP0', () => {
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

    // Set GP1 dir to FIFO write
    as.write32(0x1f801814, ((0x04<<24)|0x1)>>>0);

    // Build two identical GP0 Image Load sequences back-to-back
    const seq = [ (0xa0<<24)>>>0, 0, ((2&0x1ff)<<16)|2, (0x2222<<16)|0x1111, (0x4444<<16)|0x3333 ];
    const base = 0x80;
    for (let i=0;i<seq.length;i++) as.write32(base + i*4, seq[i]>>>0);
    for (let i=0;i<seq.length;i++) as.write32(base + (seq.length+i)*4, seq[i]>>>0);

    // Mode1: blkSize=seq.length, blkCount=2
    const blkSize = seq.length;
    const blkCount = 2;
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, ((blkCount&0xffff)<<16) | (blkSize&0xffff));
    as.write32(0x1f8010a8, (1<<0) | (1<<9) | (1<<24));

    // Verify VRAM received expected pixels (same rect twice -> same result)
    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, 0);
    as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    const r0 = as.read32(0x1f801810)>>>0;
    const r1 = as.read32(0x1f801810)>>>0;
    expect((r0&0xffff)).toBe(0x1111);
    expect(((r0>>>16)&0xffff)).toBe(0x2222);
    expect((r1&0xffff)).toBe(0x3333);
    expect(((r1>>>16)&0xffff)).toBe(0x4444);
  });

  it('GPU->mem: transfers block_size*block_count words from GPUREAD', () => {
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

    // Set GP1 dir to FIFO read
    as.write32(0x1f801814, ((0x04<<24)|0x2)>>>0);

    // Queue an image store of 2x2 => 2 words
    as.write32(0x1f801810, (0xa0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    as.write32(0x1f801810, (0x2222<<16)|0x1111);
    as.write32(0x1f801810, (0x4444<<16)|0x3333);
    as.write32(0x1f801810, (0xc0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);

    const dst = 0x180;
    // Mode1: blkSize=1, blkCount=2 (read two words)
    as.write32(0x1f8010a0, dst>>>0);
    as.write32(0x1f8010a4, (2<<16) | 1);
    as.write32(0x1f8010a8, (0<<0) | (1<<9) | (1<<24));

    const w0 = as.read32(dst+0)>>>0;
    const w1 = as.read32(dst+4)>>>0;
    expect((w0&0xffff)).toBe(0x1111);
    expect(((w0>>>16)&0xffff)).toBe(0x2222);
    expect((w1&0xffff)).toBe(0x3333);
    expect(((w1>>>16)&0xffff)).toBe(0x4444);
  });
});

