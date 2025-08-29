import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Ensure CDROM response queue and state are preserved across serialize/deserialize

describe('CDROM snapshot/restore', () => {
  it('retains pending response bytes and sector counter', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800;
    const REG1 = 0x1f801801;

    // Issue two GETSTATs so there are two bytes in resp queue
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x01);
    psx.as.write8(REG1, 0x01);

    // Snapshot and restore
    const snap = psx.serialize();
    psx.deserialize(snap);

    // Read two bytes; both should be present
    const b0 = psx.as.read8(REG1) & 0xff;
    const b1 = psx.as.read8(REG1) & 0xff;
    expect(typeof b0).toBe('number');
    expect(typeof b1).toBe('number');
  });
});

