import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }
function read16(as: any, addr: number) { return as.read16(addr >>> 0) & 0xffff; }

// Verify SPU DMA ch4 reverse: SPU RAM -> system RAM, with async timing and IRQ

describe('DMAC SPU DMA reverse (ch4) SPU->Mem', () => {
  it('moves halfwords from SPU RAM into system RAM and raises IRQ', () => {
    const psx = new PSXSystem();
    // Enable async timing: cycles per halfword
    psx.attachDMATiming({ cyclesPerWord: 4 });
    const as = psx.as;

    // Write a pattern into SPU RAM via data port at transfer address units=0x0100
    const XFER = 0x1f801da6, DATA = 0x1f801da8;
    const units = 0x0100;
    write16(as, XFER, units);
    const pattern = [0x1111, 0x2222, 0x3333, 0x4444, 0xABCD, 0x0, 0x7fff, 0x8000];
    for (const hw of pattern) write16(as, DATA, hw);

    // Set transfer address back to start to read from same spot
    write16(as, XFER, units);

    // Program reverse DMA: CH4 dir=toMem, sync=0, count=pattern.length, MADR=0x900
    const dest = 0x900;
    // Pre-fill destination with sentinel
    for (let i = 0; i < pattern.length; i++) write16(as, dest + i*2, 0xDEAD);
    write32(as, 0x1f8010c0, dest >>> 0); // MADR
    write32(as, 0x1f8010c4, pattern.length >>> 0); // BCR (halfwords)
    // CHCR: dir=toMem(0), step inc(0), sync=0, start
    write32(as, 0x1f8010c8, (0<<0) | (0<<1) | (0<<9) | (1<<24));

    // Should not have completed yet
    for (let i = 0; i < pattern.length; i++) expect(read16(as, dest + i*2)).toBe(0xDEAD);

    // Step cycles just enough
    psx.stepCycles(pattern.length * 4);

    // Verify memory contents
    for (let i = 0; i < pattern.length; i++) expect(read16(as, dest + i*2)).toBe(pattern[i] & 0xffff);

    // Enable DICR to ensure IRQ status can be observed (master + ch4)
    write32(as, 0x1f8010f4, (1<<4) | (1<<24));
    // Trigger another small DMA to cause IRQ (2 halfwords)
    write16(as, XFER, units); // reset SRC
    write32(as, 0x1f8010c0, dest >>> 0);
    write32(as, 0x1f8010c4, 2);
    write32(as, 0x1f8010c8, (0<<0) | (0<<1) | (0<<9) | (1<<24));
    psx.stepCycles(8);

    // Check DMA IRQ bit raised
    expect((psx.intc.status & (1<<3)) !== 0).toBe(true);
  });
});

