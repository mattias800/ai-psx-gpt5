import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// When memcard is absent, a write command should not enter data phase; respond 0xff

describe('SIO0 memcard write absent', () => {
  it('returns 0xff when card not present', () => {
    const psx = new PSXSystem();
    psx.setMemcardPresent(false);
    const DATA = 0x1f801040;
    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // Attempt write sector
    w8(DATA, 0x81); w8(DATA, 0x57); w8(DATA, 0x00); w8(DATA, 0x00); w8(DATA, 0x00);
    // Expect a single 0xff response and no data phase consumption
    expect(r8(DATA)).toBe(0xff);
  });
});

