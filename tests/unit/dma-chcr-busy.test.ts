import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validate CHCR busy bit behavior (bit28 assumed), and start auto-clear

describe('DMAC CHCR busy and start bits', () => {
  it('busy clears after synchronous completion; start auto-clears', () => {
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

    // Set GPU dir FIFO write; DPCR enable
    as.write32(0x1f801814, ((0x04<<24)|0x1)>>>0);
    as.write32(0x1f8010f0, 0xffffffff>>>0);

    // Build a tiny GP0 sequence in RAM
    const base=0x80; const words=[(0xa0<<24)>>>0, 0, (1<<16)|2, (0x2222<<16)|0x1111];
    for (let i=0;i<words.length;i++) as.write32(base+i*4, words[i]>>>0);

    // Trigger DMA
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, words.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(1<<24));

    // Read CHCR: busy and start should both be 0 after synchronous completion
    const chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<28))===0).toBe(true);
    expect((chcr & (1<<24))===0).toBe(true);
  });

  it('does not set busy when transfer is gated by DPCR', () => {
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

    // Set GPU dir FIFO write; DPCR disable ch2
    as.write32(0x1f801814, ((0x04<<24)|0x1)>>>0);
    as.write32(0x1f8010f0, (~(1<<2))>>>0);

    const base=0x80; as.write32(base,0);
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, 1);
    as.write32(0x1f8010a8, (1<<0)|(1<<24));

    const chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<28))===0).toBe(true);
    expect((chcr & (1<<24))===0).toBe(true);
  });
});

