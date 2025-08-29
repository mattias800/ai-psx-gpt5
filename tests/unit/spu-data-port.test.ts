import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function read16(as: any, addr: number) { return as.read16(addr >>> 0) & 0xffff; }

// Test SPU data port (0x1f801da8) increments transfer address and writes/reads RAM

describe('SPU data port read/write', () => {
  it('writes to SPU RAM and increments address; read also increments', () => {
    const psx = new PSXSystem();
    const as = psx.as;
    const XFER = 0x1f801da6;
    const DATA = 0x1f801da8;

    // Set transfer address units
    write16(as, XFER, 0x0040); // -> hw index 0x100

    // Write three halfwords via data port
    write16(as, DATA, 0x1111);
    write16(as, DATA, 0x2222);
    write16(as, DATA, 0x3333);

    // Read back from the initial address after setting again
    write16(as, XFER, 0x0040);
    expect(read16(as, DATA)).toBe(0x1111);
    expect(read16(as, DATA)).toBe(0x2222);
    expect(read16(as, DATA)).toBe(0x3333);
  });
});

