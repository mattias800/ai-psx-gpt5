import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify INT4 read-end latch on PAUSE and STOP

describe('CDROM INT4 latched on PAUSE/STOP', () => {
  it('latches INT4 when PAUSE stops an active read', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;
    psx.as.write8(IDX, 0x00);
    // Set LBA and start READN
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19); // SETLOC
    psx.as.write8(REG1, 0x1b); // SEEKL
    psx.stepCycles(30000);
    psx.as.write8(REG1, 0x06); // READN

    // PAUSE
    psx.as.write8(REG1, 0x08);

    // Check INT4 (bit 0x10) latched
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x10) !== 0).toBe(true);

    // Ack INT4
    psx.as.write8(REG3, 0x10);
    const flags2 = psx.as.read8(REG3) & 0xff;
    expect((flags2 & 0x10) === 0).toBe(true);
  });

  it('latches INT4 when STOP stops an active read and flushes FIFO', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;
    psx.as.write8(IDX, 0x00);
    // Start read
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(30000);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);

    // STOP
    psx.as.write8(REG1, 0x1e);

    // INT4 latched
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x10) !== 0).toBe(true);

    // Data FIFO should be flushed: reading returns 0
    const b0 = psx.as.read8(REG2) & 0xff;
    expect(b0).toBe(0);
  });
});

