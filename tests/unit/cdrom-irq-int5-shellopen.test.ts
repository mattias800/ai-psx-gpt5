import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify INT5 (error) on shell open while reading, and that ack clears error bit in status

describe('CDROM INT5 error and ack clearing', () => {
  it('raises INT5 and sets error bit when lid opens during READN, then clears on ack', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

    // Start a READN at LBA=0
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19); // SETLOC
    psx.as.write8(REG1, 0x1b); // SEEKL
    psx.stepCycles(30000);
    psx.as.write8(REG1, 0x06); // READN

    // Open lid while reading
    psx.openCdLid(true);

    // Read IRQ latch flags (index=1, port3)
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    // INT5 mapped to bit0
    expect((flags & 0x01) !== 0).toBe(true);

    // Status should have error bit 0x40
    const status = psx.as.read8(REG1) & 0xff;
    expect((status & 0x40) !== 0).toBe(true);

    // Ack INT5 via writing mask 0x01 to port3 at index=1
    psx.as.write8(REG3, 0x01);
    const flagsAfter = psx.as.read8(REG3) & 0xff;
    expect((flagsAfter & 0x01) === 0).toBe(true);

    // Error bit should be cleared after ack
    const statusAfter = psx.as.read8(REG1) & 0xff;
    expect((statusAfter & 0x40) === 0).toBe(true);
  });
});

