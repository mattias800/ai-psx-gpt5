import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Minimal test to confirm IOHub mapping for SPU addresses works
// by writing/reading 16-bit registers via AddressSpace

describe('IOHub SPU mapping', () => {
  it('writes and reads 16-bit SPU registers at 0x1f801c00', () => {
    const psx = new PSXSystem();
    const as = psx.as;
    const base = 0x1f801c00;

    as.write16(base, 0x1234);
    as.write16(base + 2, 0xabcd);

    expect(as.read16(base)).toBe(0x1234);
    expect(as.read16(base + 2)).toBe(0xabcd);

    // 32-bit access should combine two words
    const w = as.read32(base);
    expect(w & 0xffff).toBe(0x1234);
    expect((w >>> 16) & 0xffff).toBe(0xabcd);
  });
});
