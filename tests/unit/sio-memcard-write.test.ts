import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify memcard write command (0x81 0x57) stores 128 bytes and is acknowledged, and a subsequent read returns data

describe('SIO0 memcard write', () => {
  it('writes a sector and readback matches', () => {
    const psx = new PSXSystem();
    psx.setMemcardPresent(true);
    const DATA = 0x1f801040;

    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // Write sector 1 with 0x11 pattern
    w8(DATA, 0x81); w8(DATA, 0x57); w8(DATA, 0x00); w8(DATA, 0x01); w8(DATA, 0x00);
    for (let i=0;i<128;i++) w8(DATA, 0x11);
    // checksums (ignored)
    w8(DATA, 0x00); w8(DATA, 0x00);

    // Ack should be enqueued: 0x00, 0x5c, 0x00, 0x00
    expect([r8(DATA), r8(DATA), r8(DATA), r8(DATA)]).toEqual([0x00, 0x5c, 0x00, 0x00]);

    // Readback sector 1
    w8(DATA, 0x81); w8(DATA, 0x52); w8(DATA, 0x00); w8(DATA, 0x01); w8(DATA, 0x00);
    expect([r8(DATA), r8(DATA)]).toEqual([0x00, 0x5a]);
    for (let i=0;i<128;i++) expect(r8(DATA)).toBe(0x11);
    // checksums
    expect([r8(DATA), r8(DATA)]).toEqual([0x00,0x00]);
  });
});

