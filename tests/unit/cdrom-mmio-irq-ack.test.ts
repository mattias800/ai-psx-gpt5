import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// Verify CDROM index-port IRQ flags (index=1, port3) and acknowledge semantics.

describe('CDROM MMIO IRQ flags and acknowledge (index port)', () => {
  it('latches INT3 on command complete and allows ack via index=1,port3', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

    // Issue SETLOC (command complete should latch INT3)
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x10);
    psx.as.write8(REG1, 0x19);
    // Pop response
    const resp = psx.as.read8(REG1) & 0xff; expect(typeof resp).toBe('number');

    // Switch to index 1 and read IRQ latch on port3
    psx.as.write8(IDX, 0x01);
    const flagsBefore = psx.as.read8(REG3) & 0xff;
    // INT3 is bit (1<<3)
    expect((flagsBefore & 0x08) !== 0).toBe(true);

    // Ack INT3 via writing mask to port3 (index=1)
    psx.as.write8(REG3, 0x08);
    const flagsAfter = psx.as.read8(REG3) & 0xff;
    expect((flagsAfter & 0x08) === 0).toBe(true);

    // Note: INTC.CDROM is still set until I_STAT ack; clear it now to avoid leaking
    psx.as.write32(0x1f801070, (1<<IRQ.CDROM) >>> 0);
  });

  it('latches INT2 on data ready and allows ack via index=1,port3', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

    // READN setup
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);

    // data ready
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x04) !== 0).toBe(true);

    // Ack INT2
    psx.as.write8(REG3, 0x04);
    const flags2 = psx.as.read8(REG3) & 0xff;
    expect((flags2 & 0x04) === 0).toBe(true);

    // clean up INTC
    psx.as.write32(0x1f801070, (1<<IRQ.CDROM) >>> 0);
  });
});

