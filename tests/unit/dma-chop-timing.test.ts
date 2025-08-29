import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Verify DPCR chopping increases scheduled DMA completion cycles.
// We check via DMA IRQ timing; data payload does not need to produce visible GPU output.

describe('DMAC timing with DPCR chopping (GPU ch2 block)', () => {
  it('delays completion by additional CPU pause windows', () => {
    const psx = new PSXSystem();
    // Enable async timing
    psx.attachDMATiming({ cyclesPerWord: 8 });

    const as = psx.as;

    // Enable DICR master + channel 2
    const DICR = 0x1f8010f4;
    write32(as, DICR, (1<<2) | (1<<24));

    // Set GPU DMA direction to FIFO write (CPU->GP0)
    const GP1 = 0x1f801814;
    write32(as, GP1, (0x04 << 24) | 0x1);

    // Prepare N words in memory (they can be zeros)
    const base = 0x400; const words = 16;
    for (let i = 0; i < words; i++) write32(as, base + i*4, 0);

    const CH2_MADR = 0x1f8010a0, CH2_BCR = 0x1f8010a4, CH2_CHCR = 0x1f8010a8;

    // Case 1: no chopping (enable ch2 only)
    write32(as, 0x1f8010f0, (1<<2)); // DPCR: ch2 enable, chop=0
    write32(as, CH2_MADR, base >>> 0);
    write32(as, CH2_BCR, words >>> 0);
    write32(as, CH2_CHCR, (1<<0) | (0<<1) | (0<<9) | (1<<24));

    // Step less than base cycles -> no IRQ
    psx.stepCycles(words*8 - 8);
    expect((psx.intc.status & (1<<3)) === 0).toBe(true);
    // Step remaining -> IRQ should assert
    psx.stepCycles(8);
    expect((psx.intc.status & (1<<3)) !== 0).toBe(true);

    // Ack IRQ for next case
    write32(as, 0x1f801070, (1<<3));

    // Case 2: chopping with window=4 (log2=2)
    const chopLog2 = 2; const windowWords = 1<<chopLog2; // 4
    write32(as, 0x1f8010f0, ((1<<2) | (chopLog2 << 29)) >>> 0);

    write32(as, CH2_MADR, base >>> 0);
    write32(as, CH2_BCR, words >>> 0);
    write32(as, CH2_CHCR, (1<<0) | (0<<1) | (0<<9) | (1<<24));

    const baseCycles = words*8;
    const windows = Math.ceil(words / windowWords);
    const extra = (windows - 1) * windowWords * 8;

    // Step only base cycles -> not done yet due to chopping delay
    psx.stepCycles(baseCycles);
    expect((psx.intc.status & (1<<3)) === 0).toBe(true);

    // Step remaining extra cycles -> should complete now
    psx.stepCycles(extra);
    expect((psx.intc.status & (1<<3)) !== 0).toBe(true);
  });
});

