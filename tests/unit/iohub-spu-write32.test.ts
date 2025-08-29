import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Ensure IOHub write32 to SPU splits into two 16-bit register writes

describe('IOHub SPU write32 split', () => {
  it('writing 32-bit splits into two 16-bit writes', () => {
    const psx = new PSXSystem();
    const base = 0x1f801c00;

    psx.as.write32(base, 0xaabbccdd >>> 0);
    // read back two halves
    const lo = psx.as.read16(base) & 0xffff;
    const hi = psx.as.read16(base + 2) & 0xffff;
    expect(lo).toBe(0xccdd);
    expect(hi).toBe(0xaabb);
  });
});

