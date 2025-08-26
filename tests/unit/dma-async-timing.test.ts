import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

// Validate async DMA timing with scheduler: busy persists until completion, IRQ after step

describe('DMAC async timing with EventScheduler', () => {
  it('mem->GPU block: busy set until cycles elapse, then VRAM updated and IRQ set', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const sch = new EventScheduler();
    const intc = new InterruptController();
    const dmac = new DMAC(as, gpu, intc, sch, 5); // 5 cycles per word
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) }
    });
    as.addRegion(ram);
    as.addRegion(io);

    // Set GP1 dir FIFO write, DPCR enable
    as.write32(0x1f801814, ((0x04<<24)|1)>>>0);
    as.write32(0x1f8010f0, 0xffffffff>>>0);
    as.write32(0x1f8010f4, ((1<<2)|(1<<24))>>>0);

    // Build a 2x2 image load sequence in RAM (needs 5 words total)
    const base=0x80; const seq=[(0xa0<<24)>>>0, 0, ((2&0x1ff)<<16)|2, (0x2222<<16)|0x1111, (0x4444<<16)|0x3333];
    for (let i=0;i<seq.length;i++) as.write32(base+i*4, seq[i]>>>0);

    // Start DMA: words=BCR low 16
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, seq.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(0<<9)|(1<<24));

    // Immediately: busy set, start cleared, no IRQ, VRAM zero
    let chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<28))!==0).toBe(true);
    expect((chcr & (1<<24))===0).toBe(true);
    expect((intc.status & (1<<IRQ.DMA))===0).toBe(true);
    as.write32(0x1f801810, (0xc0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    expect(as.read32(0x1f801810)>>>0).toBe(0);

    // Step less than needed cycles: still busy, no IRQ
    sch.step(5*seq.length - 1);
    chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<28))!==0).toBe(true);
    expect((intc.status & (1<<IRQ.DMA))===0).toBe(true);

    // Step 1 more: completes
    sch.step(1);
    chcr = as.read32(0x1f8010a8)>>>0;
    expect((chcr & (1<<28))===0).toBe(true);
    expect((intc.status & (1<<IRQ.DMA))!==0).toBe(true);
    // VRAM now has pixels; queue a fresh Image Store to read back
    as.write32(0x1f801810, (0xc0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    const r0 = as.read32(0x1f801810)>>>0;
    const r1 = as.read32(0x1f801810)>>>0;
    expect((r0&0xffff)).toBe(0x1111);
    expect(((r0>>>16)&0xffff)).toBe(0x2222);
    expect((r1&0xffff)).toBe(0x3333);
    expect(((r1>>>16)&0xffff)).toBe(0x4444);
  });
});

