import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify host-injected pad button state is returned in the digital pad poll response
// Sequence: write 0x01, 0x42, 0x00 to DATA; read 5 bytes: 0xff, 0x41, 0x5a, buttons_lo, buttons_hi

describe('SIO0 host input injection', () => {
  it('returns injected button mask in poll response', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;

    const setButtons = (mask:number)=> psx.setPadButtons(mask >>> 0);
    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    const mask1 = 0xAA55; // arbitrary active-low mask
    setButtons(mask1);

    // Issue command
    w8(DATA, 0x01);
    w8(DATA, 0x42);
    w8(DATA, 0x00);

    // Read response bytes
    const b0 = r8(DATA);
    const b1 = r8(DATA);
    const b2 = r8(DATA);
    const b3 = r8(DATA);
    const b4 = r8(DATA);

    expect([b0,b1,b2,b3,b4]).toEqual([0xff, 0x41, 0x5a, mask1 & 0xff, (mask1 >>> 8) & 0xff]);

    // Change buttons and poll again
    const mask2 = 0xF70F;
    setButtons(mask2);
    w8(DATA, 0x01); w8(DATA, 0x42); w8(DATA, 0x00);
    const r0 = r8(DATA); const r1 = r8(DATA); const r2 = r8(DATA); const r3 = r8(DATA); const r4 = r8(DATA);
    expect([r0,r1,r2,r3,r4]).toEqual([0xff, 0x41, 0x5a, mask2 & 0xff, (mask2 >>> 8) & 0xff]);
  });
});

