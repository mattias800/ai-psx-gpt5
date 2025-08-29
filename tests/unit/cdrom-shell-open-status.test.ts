import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify shell-open status bit toggles via PSXSystem.openCdLid()

describe('CDROM shell-open status bit', () => {
  it('toggles bit 0x80 in status', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801;

    // Ensure closed => bit not set
    psx.as.write8(IDX, 0x01);
    const s0 = psx.as.read8(REG1) & 0xff;
    expect((s0 & 0x80) === 0).toBe(true);

    // Open and read again
    psx.openCdLid(true);
    const s1 = psx.as.read8(REG1) & 0xff;
    expect((s1 & 0x80) !== 0).toBe(true);

    // Close and read again
    psx.openCdLid(false);
    const s2 = psx.as.read8(REG1) & 0xff;
    expect((s2 & 0x80) === 0).toBe(true);
  });
});

