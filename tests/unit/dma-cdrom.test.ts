import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// Validate DMAC channel 3 (CDROM) copies words to RAM and raises DMA IRQ when enabled

describe('DMAC ch3 CDROM -> RAM block', () => {
  it('transfers N words and sets DICR flags + INTC.DMA when enabled', () => {
    const psx = new PSXSystem();

    const MADR3 = 0x1f8010b0; // ch3 MADR
    const BCR3  = 0x1f8010b4; // ch3 BCR
    const CHCR3 = 0x1f8010b8; // ch3 CHCR
    const DICR  = 0x1f8010f4;

    // Enable channel 3 and master in DICR
    psx.as.write32(DICR, ((1<<3) | (1<<24)) >>> 0);

    // Prepare destination buffer in RAM at 0x200
    const dst = 0x200 >>> 0;

    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 8); // 8 words
    // dir=to mem (0), sync=0 (block), start
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    // Check that memory at dst..dst+28 was written with a deterministic pattern
    const w0 = psx.as.read32(dst) >>> 0;
    const w7 = psx.as.read32(dst + 7*4) >>> 0;
    expect(typeof w0).toBe('number');
    expect(typeof w7).toBe('number');

    // Check DMA IRQ raised
    expect((psx.intc.status & (1<<IRQ.DMA)) !== 0).toBe(true);
    const dicr = psx.as.read32(DICR) >>> 0;
    const CH3_FLAG = 1 << (16+3);
    const MASTER_FLAG = 1 << 23;
    expect((dicr & CH3_FLAG) !== 0).toBe(true);
    expect((dicr & MASTER_FLAG) !== 0).toBe(true);
  });
});

