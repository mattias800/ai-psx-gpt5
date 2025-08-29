import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Validate CDROM computed status bits reflect FIFO and reading/busy state

describe('CDROM status bits', () => {
  it('reflects param FIFO, data FIFO, reading and busy', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Base: read status via index=1
    psx.as.write8(IDX, 0x01);
    const s0 = psx.as.read8(REG1) & 0xff;
    expect((s0 & 0x02) !== 0).toBe(true); // ready

    // Write params (3 bytes) and check param FIFO bit
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG2, 0x10);
    psx.as.write8(IDX, 0x01);
    const sParam = psx.as.read8(REG1) & 0xff;
    expect((sParam & 0x04) !== 0).toBe(true);

    // Consume params via SETLOC
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x19);
    // READN and step to enqueue data
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);

    // Status should indicate reading+data FIFO (index=1)
    psx.as.write8(IDX, 0x01);
    const sRead = psx.as.read8(REG1) & 0xff;
    expect((sRead & 0x20) !== 0).toBe(true); // reading
    expect((sRead & 0x10) !== 0).toBe(true); // data FIFO not empty
    expect((sRead & 0x01) !== 0).toBe(true); // busy (reading)

    // Pause and drain data
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x08);
    let drain = 3000;
    while (drain-- > 0 && (psx.as.read8(REG2) & 0xff) !== 0) {}

    // Now status should have reading off, data FIFO likely empty
    psx.as.write8(IDX, 0x01);
    const sAfter = psx.as.read8(REG1) & 0xff;
    expect((sAfter & 0x20) === 0).toBe(true);
  });
});

