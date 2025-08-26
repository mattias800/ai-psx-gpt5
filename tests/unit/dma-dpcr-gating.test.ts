import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';
import { InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

// DPCR gating and CHCR start-bit semantics

describe('DMAC DPCR gating and CHCR start semantics', () => {
  it('does not run ch2 when DPCR ch2 disabled; clears start; no IRQ/flags', () => {
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

    // Prepare mem->GPU list in RAM and set GPU dir to FIFO write
    const base = 0x80; const x=4,y=5,w=2,h=2;
    const words = [ (0xa0<<24)>>>0, ((y&0x1ff)<<16)|(x&0x3ff), ((h&0x1ff)<<16)|(w&0x3ff), (0x2222<<16)|0x1111, (0x4444<<16)|0x3333 ];
    for (let i=0;i<words.length;i++) as.write32(base+i*4, words[i]);
    as.write32(0x1f801814, ((0x04<<24)|0x1)>>>0);

    // DPCR: disable ch2 (clear bit2); enable others and master in DICR
    as.write32(0x1f8010f0, (~(1<<2))>>>0);
    as.write32(0x1f8010f4, ((1<<2)|(1<<24))>>>0);

    // Start DMA and then read CHCR back
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, words.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(0<<9)|(1<<24));

    // CHCR start should be cleared since gated; and no IRQ
    const chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<24)) === 0).toBe(true);
    expect((intc.status & (1<<IRQ.DMA)) === 0).toBe(true);
    const dicr = as.read32(0x1f8010f4)>>>0;
    expect((dicr & (1<<(16+2))) === 0).toBe(true);

    // VRAM should be unchanged (read back via store)
    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));
    const r0 = as.read32(0x1f801810)>>>0;
    const r1 = as.read32(0x1f801810)>>>0;
    expect(r0).toBe(0);
    expect(r1).toBe(0);
  });

  it('runs ch2 when DPCR enabled; raises flags/IRQ and writes VRAM', () => {
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

    // Prepare mem->GPU list in RAM and set GPU dir to FIFO write
    const base = 0x80; const x=10,y=12,w=2,h=2;
    const words = [ (0xa0<<24)>>>0, ((y&0x1ff)<<16)|(x&0x3ff), ((h&0x1ff)<<16)|(w&0x3ff), (0x2222<<16)|0x1111, (0x4444<<16)|0x3333 ];
    for (let i=0;i<words.length;i++) as.write32(base+i*4, words[i]);
    as.write32(0x1f801814, ((0x04<<24)|0x1)>>>0);

    // DPCR: enable all; DICR enable ch2 + master
    as.write32(0x1f8010f0, 0xffffffff>>>0);
    as.write32(0x1f8010f4, ((1<<2)|(1<<24))>>>0);

    // Start DMA
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, words.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(0<<9)|(1<<24));

    // INTC and flags
    expect((intc.status & (1<<IRQ.DMA)) !== 0).toBe(true);
    const dicr = as.read32(0x1f8010f4)>>>0;
    expect((dicr & (1<<(16+2))) !== 0).toBe(true);

    // VRAM should contain pixels
    as.write32(0x1f801810, (0xc0<<24)>>>0);
    as.write32(0x1f801810, ((y&0x1ff)<<16)|(x&0x3ff));
    as.write32(0x1f801810, ((h&0x1ff)<<16)|(w&0x3ff));
    const r0 = as.read32(0x1f801810)>>>0;
    const r1 = as.read32(0x1f801810)>>>0;
    expect((r0 & 0xffff)).toBe(0x1111);
    expect((r0>>>16)&0xffff).toBe(0x2222);
    expect((r1 & 0xffff)).toBe(0x3333);
    expect((r1>>>16)&0xffff).toBe(0x4444);
  });
});

