import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify INT5 and error bit when disc is not present for GETQ and READN

describe('CDROM no-disc behavior (INT5/error)', () => {
  it('GETQ with no disc present latches INT5 and sets error bit', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG3 = 0x1f801803;

    // Mark disc as not present
    psx.setDiscPresent(false);

    // Issue GETQ
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x15);

    // Check INT5 latch and error bit
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x01) !== 0).toBe(true);
    const status = psx.as.read8(REG1) & 0xff;
    expect((status & 0x40) !== 0).toBe(true);

    // Ack INT5 and verify cleared
    psx.as.write8(REG3, 0x01);
    const flags2 = psx.as.read8(REG3) & 0xff;
    expect((flags2 & 0x01) === 0).toBe(true);
    const status2 = psx.as.read8(REG1) & 0xff;
    expect((status2 & 0x40) === 0).toBe(true);
  });

  it('READN with no disc present latches INT5 immediately', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

    // No disc
    psx.setDiscPresent(false);

    // Attempt to READN
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);// SETLOC
    psx.as.write8(REG1, 0x06);// READN

    // Should have INT5 and error bit set immediately
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x01) !== 0).toBe(true);
    const status = psx.as.read8(REG1) & 0xff;
    expect((status & 0x40) !== 0).toBe(true);
  });
});

