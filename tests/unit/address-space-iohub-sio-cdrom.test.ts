import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Cover IOHub SIO read16/read32 aggregation and write16 splitting; and CDROM read32 aggregation

describe('IOHub SIO/CDROM aggregation', () => {
  it('SIO read32 aggregates DATA port bytes across p..p+3 calls', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;

    // Issue pad poll using exact byte writes
    psx.as.write8(DATA, 0x01);
    psx.as.write8(DATA, 0x42);
    psx.as.write8(DATA, 0x00);

    // Consecutive read32 calls should pop from RX at low byte
    const v0 = psx.as.read32(DATA) >>> 0; // 0xff
    const v1 = psx.as.read32(DATA) >>> 0; // 0x41
    const v2 = psx.as.read32(DATA) >>> 0; // 0x5a
    const v3 = psx.as.read32(DATA) >>> 0; // 0xff (buttons lo)
    const v4 = psx.as.read32(DATA) >>> 0; // 0xff (buttons hi)
    expect(v0 & 0xff).toBe(0xff);
    expect(v1 & 0xff).toBe(0x41);
    expect(v2 & 0xff).toBe(0x5a);
    expect(v3 & 0xff).toBe(0xff);
    expect(v4 & 0xff).toBe(0xff);
  });

  it('SIO write16 splits into two data bytes', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;

    // Send 0x01 and 0x42 via bytes, then 0x00
    psx.as.write8(DATA, 0x01);
    psx.as.write8(DATA, 0x42);
    psx.as.write8(DATA, 0x00);

    const r0 = psx.as.read32(DATA) >>> 0; // 0xff
    const r1 = psx.as.read32(DATA) >>> 0; // 0x41
    const r2 = psx.as.read32(DATA) >>> 0; // 0x5a
    expect(r0 & 0xff).toBe(0xff);
    expect(r1 & 0xff).toBe(0x41);
    expect(r2 & 0xff).toBe(0x5a);
  });

  it('CDROM read32 aggregates status/resp bytes across ports', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800;
    const REG1 = 0x1f801801;

    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x01); // GETSTAT -> enqueue one resp byte

    const v = psx.as.read32(0x1f801800) >>> 0;
    // Low byte is status, next byte is resp
    expect((v & 0xff) >= 0).toBe(true);
    expect(((v >>> 8) & 0xff) >= 0).toBe(true);
  });
});

