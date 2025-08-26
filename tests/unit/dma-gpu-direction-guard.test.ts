import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';
import { InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

// Ensure DMAC ch2 respects GPU GP1 DMA direction

describe('DMAC ch2 GPU direction enforcement', () => {
  it('does not perform mem->GPU when GP1 set to FIFO read', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const intc = new InterruptController();
    const dmac = new DMAC(as, gpu, intc);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) }
    });
    as.addRegion(ram);
    as.addRegion(io);

    // GP1: set FIFO read (2), which forbids mem->GPU transfers
    as.write32(0x1f801814, ((0x04<<24) | 0x2) >>> 0);

    // Enable ch2 and master in DICR
    as.write32(0x1f8010f4, ((1<<2) | (1<<24)) >>> 0);

    // Prepare a GP0 Image Load command list in RAM
    const base = 0x80;
    const x=5,y=7,w=2,h=2;
    const words = [
      (0xa0<<24)>>>0,
      ((y&0x1ff)<<16)|(x&0x3ff),
      ((h&0x1ff)<<16)|(w&0x3ff),
      (0x2222<<16)|0x1111,
      (0x4444<<16)|0x3333,
    ];
    for (let i=0;i<words.length;i++) as.write32(base+i*4, words[i]>>>0);

    // Start DMA mem->GPU (should be blocked by GP1)
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, words.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(0<<9)|(1<<24));

    // Try to read back via Image Store: should be zeros
    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));

    const r0 = as.read32(0x1f801810)>>>0;
    const r1 = as.read32(0x1f801810)>>>0;
    expect(r0).toBe(0);
    expect(r1).toBe(0);
    // No DMA IRQ should be raised
    expect((intc.status & (1<<IRQ.DMA)) === 0).toBe(true);
  });

  it('does not perform GPU->mem when GP1 set to FIFO write', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const intc = new InterruptController();
    const dmac = new DMAC(as, gpu, intc);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) }
    });
    as.addRegion(ram);
    as.addRegion(io);

    // Fill VRAM region and queue Image Store
    const x=3,y=4,w=2,h=2;
    const px=[0x1111,0x2222,0x3333,0x4444];
    as.write32(0x1f801810, (0xa0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));
    as.write32(0x1f801810, (px[1]<<16)|px[0]);
    as.write32(0x1f801810, (px[3]<<16)|px[2]);

    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));

    // GP1: set FIFO write (1), which forbids GPU->mem transfers
    as.write32(0x1f801814, ((0x04<<24) | 0x1) >>> 0);

    // Enable ch2 and master in DICR
    as.write32(0x1f8010f4, ((1<<2) | (1<<24)) >>> 0);

    const dst = 0x100;
    as.write32(0x1f8010a0, dst>>>0);
    as.write32(0x1f8010a4, Math.ceil((w*h)/2)>>>0);
    as.write32(0x1f8010a8, (0<<0)|(0<<9)|(1<<24));

    // RAM should remain zero
    expect(as.read32(dst+0)>>>0).toBe(0);
    expect(as.read32(dst+4)>>>0).toBe(0);
    // No DMA IRQ should be raised
    expect((intc.status & (1<<IRQ.DMA)) === 0).toBe(true);
  });
});

