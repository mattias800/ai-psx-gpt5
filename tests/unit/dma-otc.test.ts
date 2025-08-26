import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';

// Verify OTC (ch6) builds ordering table pointers with decrement step

describe('DMAC OTC (ch6) ordering table build', () => {
  it('writes descending pointer chain and terminator', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const dummyGPU = { writeGP0: (_:number)=>{}, writeGP1: (_:number)=>{}, readGP0: ()=>0, readGP1: ()=>0 };
    const dmac = new DMAC(as as any, dummyGPU as any);
    const io = new IOHub({ dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) } });
    as.addRegion(ram);
    as.addRegion(io);

    const count = 4;
    const base = 0x40; // ensure base-12 stays within RAM

    // Program ch6: MADR=base, BCR=count, CHCR dir=to mem (bit0=0), step=dec (bit1=1), sync=0, start
    as.write32(0x1f8010e0, base >>> 0);
    as.write32(0x1f8010e4, count >>> 0);
    as.write32(0x1f8010e8, (1<<1) | (0<<9) | (1<<24));

    const w = (a:number) => as.read32(a) >>> 0;
    expect(w(base)).toBe(((base - 4) & 0x00ffffff) >>> 0);
    expect(w(base - 4)).toBe(((base - 8) & 0x00ffffff) >>> 0);
    expect(w(base - 8)).toBe(((base - 12) & 0x00ffffff) >>> 0);
    expect(w(base - 12)).toBe(0x00ffffff >>> 0);
  });
});

