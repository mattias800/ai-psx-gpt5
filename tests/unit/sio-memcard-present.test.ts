import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Minimal memcard read sector (stub): 0x81 0x52 0x00 0x00 0x00
// Expect header 0x00 0x5a then 128 zero bytes and 2 zero checksum bytes.

describe('SIO0 memcard present: deterministic read', () => {
  it('returns deterministic zero-filled sector when memcard is present', () => {
    const psx = new PSXSystem();
    psx.setMemcardPresent(true);
    const DATA = 0x1f801040;

    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // Issue memcard read for sector 0
    w8(DATA, 0x81); w8(DATA, 0x52); w8(DATA, 0x00); w8(DATA, 0x00); w8(DATA, 0x00);

    // Read response bytes
    const head0 = r8(DATA);
    const head1 = r8(DATA);
    expect([head0, head1]).toEqual([0x00, 0x5a]);
    const data: number[] = [];
    for (let i = 0; i < 128; i++) data.push(r8(DATA));
    expect(data.every(b => b === 0x00)).toBe(true);
    const c0 = r8(DATA);
    const c1 = r8(DATA);
    expect([c0,c1]).toEqual([0x00, 0x00]);
  });
});

