import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';
import { EventScheduler } from '../../packages/emulator-core/src/timing';

// Priority arbitration: ch2 should run before ch6 when ch2 priority higher

describe('DMAC priority arbitration (async)', () => {
  it('runs higher-priority channel first, then next', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const sch = new EventScheduler();
    const dmac = new DMAC(as, gpu, undefined, sch, 5);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) }
    });
    as.addRegion(ram);
    as.addRegion(io);

    // Set GP1 dir FIFO write so GPU DMA allowed
    as.write32(0x1f801814, ((0x04<<24)|1)>>>0);
    // Enable both channels in DPCR and set priorities: ch2=7 (high), ch6=0 (low)
    let dpcr = 0;
    dpcr |= (1<<2) | (1<<6); // enable bits
    dpcr |= (7 << (8 + 2*3)); // ch2 prio=7
    dpcr |= (0 << (8 + 6*3)); // ch6 prio=0
    as.write32(0x1f8010f0, dpcr>>>0);

    // Prepare GPU transfer in RAM (5 words) at base
    const base=0x80; const seq=[(0xa0<<24)>>>0, 0, ((2&0x1ff)<<16)|2, (0x2222<<16)|0x1111, (0x4444<<16)|0x3333];
    for (let i=0;i<seq.length;i++) as.write32(base+i*4, seq[i]>>>0);

    // Also set up OTC: BCR=count=3; MADR=0x200
    as.write32(0x1f8010e0, 0x200>>>0);
    as.write32(0x1f8010e4, 3);

    // Trigger both starts back-to-back
    as.write32(0x1f8010a0, base>>>0);
    as.write32(0x1f8010a4, seq.length>>>0);
    as.write32(0x1f8010a8, (1<<0)|(1<<24)); // ch2 start
    as.write32(0x1f8010e8, (1<<1)|(0<<9)|(1<<24)); // ch6 start (dir=to mem)

    // Before stepping, nothing applied
    as.write32(0x1f801810, (0xc0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    expect(as.read32(0x1f801810)>>>0).toBe(0);

    // Step enough cycles to finish ch2 (5 words * 5 cycles = 25)
    sch.step(25);
    // Now VRAM should be updated; OTC not yet
    as.write32(0x1f801810, (0xc0<<24)>>>0); as.write32(0x1f801810, 0); as.write32(0x1f801810, ((2&0x1ff)<<16)|2);
    const r0 = as.read32(0x1f801810)>>>0; const r1 = as.read32(0x1f801810)>>>0;
    expect((r0&0xffff)).toBe(0x1111);
    expect(((r0>>>16)&0xffff)).toBe(0x2222);
    // OTC memory should still be zero
    expect(as.read32(0x200)>>>0).toBe(0);

    // Step enough cycles to finish OTC (assume words=3 -> 15 cycles)
    sch.step(15);
    // Now OTC pointers exist
    expect(as.read32(0x200)>>>0).toBe(((0x200-4) & 0x00ffffff)>>>0);
  });
});

