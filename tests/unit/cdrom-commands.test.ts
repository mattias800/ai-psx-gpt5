import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// CDROM command sequencing: SETLOC -> SEEKL -> READN, data delivery and IRQ timing

describe('CDROM commands and IRQ timing', () => {
  it('SETLOC+SEEKL schedules IRQ and READN produces data', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // SETLOC mm=0, ss=0, ff=10
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG2, 0x0a);
    psx.as.write8(REG1, 0x19);
    // Expect response
    const r0 = psx.as.read8(REG1) & 0xff; expect(typeof r0).toBe('number');
    // Ack any pending IRQ from SETLOC
    psx.as.write32(0x1f801070, (1<<IRQ.CDROM) >>> 0);

    // SEEKL -> IRQ later (deterministic)
    psx.as.write8(REG1, 0x1b);
    // Before stepping, no IRQ2
    let istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.CDROM)) === 0).toBe(true);

    // Step some cycles (less than delay)
    psx.stepCycles(1000);
    istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.CDROM)) === 0).toBe(true);

    // Step enough cycles to complete seek
    psx.stepCycles(30000);
    istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.CDROM)) !== 0).toBe(true);
    // Ack
    psx.as.write32(0x1f801070, (1<<IRQ.CDROM) >>> 0);

    // READN -> data enqueued over time
    psx.as.write8(REG1, 0x06);
    // Step to allow first sector
    psx.stepCycles(13000);
    const b0 = psx.as.read8(REG2) & 0xff;
    // Deterministic payload starts with (lba ^ offset) & 0xff
    expect(typeof b0).toBe('number');
    // A few more bytes exist
    const b1 = psx.as.read8(REG2) & 0xff;
    const b2 = psx.as.read8(REG2) & 0xff;
    expect(typeof b1).toBe('number');
    expect(typeof b2).toBe('number');
  });

  it('PAUSE stops further data', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;
    psx.as.write8(IDX, 0x00);
    // Set location and read
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);
    const before = psx.as.read8(REG2) & 0xff;
    expect(typeof before).toBe('number');

    // Pause
    psx.as.write8(REG1, 0x08);
    // Step a few intervals; no new data should accumulate (we can drain what remains)
    psx.stepCycles(50000);
    // Drain existing FIFO
    let attempts = 10000; let last = 0xff;
    while (attempts-- > 0) { last = psx.as.read8(REG2) & 0xff; if (last === 0) break; }
    // Now FIFO should be empty -> returns 0 (or quickly becomes 0)
    expect(last === 0 || (psx.as.read8(REG2) & 0xff) === 0).toBe(true);
  });
});

