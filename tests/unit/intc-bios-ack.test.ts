import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import { IRQ } from '../../packages/emulator-core/src/timing';

// BIOS-style I_STAT/I_MASK behavior: ensure reads reflect pending IRQ and write-ack clears it

describe('INTC: BIOS-style I_STAT/I_MASK ack semantics', () => {
  it('I_STAT reflects pending VBLANK and is cleared by write-ack', () => {
    const psx = new PSXSystem();

    const I_STAT = 0x1f801070;
    const I_MASK = 0x1f801074;

    // Enable VBLANK in mask
    psx.as.write32(I_MASK, (1 << IRQ.VBLANK) >>> 0);

    // Raise VBLANK
    psx.intc.raise(IRQ.VBLANK);

    // Read I_STAT via 32-bit path -> should have bit set
    const istatBefore = psx.as.read32(I_STAT) >>> 0;
    expect((istatBefore & (1 << IRQ.VBLANK)) !== 0).toBe(true);

    // BIOS ack: write the bit to I_STAT to clear it
    psx.as.write32(I_STAT, (1 << IRQ.VBLANK) >>> 0);

    // Read again -> cleared
    const istatAfter = psx.as.read32(I_STAT) >>> 0;
    expect((istatAfter & (1 << IRQ.VBLANK)) === 0).toBe(true);
  });
});
