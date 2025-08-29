import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// When memcard is absent, respond with a single 0xff and no further payload.

describe('SIO0 memcard absent: graceful response', () => {
  it('returns 0xff when memcard is not present', () => {
    const psx = new PSXSystem();
    psx.setMemcardPresent(false);
    const DATA = 0x1f801040;

    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // Try a read command
    w8(DATA, 0x81); w8(DATA, 0x52); w8(DATA, 0x00); w8(DATA, 0x00); w8(DATA, 0x00);

    const b0 = r8(DATA);
    expect(b0).toBe(0xff);

    // RX should be empty now; next read returns 0xff placeholder
    const b1 = r8(DATA);
    expect(b1).toBe(0xff);
  });
});

