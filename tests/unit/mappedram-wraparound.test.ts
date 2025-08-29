import { describe, it, expect } from 'vitest';
import { AddressSpace, MappedRAM } from '@ai-psx/core';

// Cover MappedRAM wrap-around behavior and AddressSpace block load/store

describe('MappedRAM wrap-around and block IO', () => {
  it('wraps reads across end of region for 16-bit/32-bit', () => {
    const as = new AddressSpace();
    const base = 0x10000000;
    const ram = new MappedRAM(base >>> 0, 1024);
    as.addRegion(ram);

    // Write last byte and first three bytes
    as.write8(base + 1023, 0xaa);
    as.write8(base + 0, 0xbb);
    as.write8(base + 1, 0xcc);
    as.write8(base + 2, 0xdd);

    // read16 at end should wrap to start
    expect(as.read16(base + 1023) & 0xffff).toBe(0xbbaa);
    // read32 at end should wrap around (0xaa,0xbb,0xcc,0xdd)
    expect(as.read32(base + 1023) >>> 0).toBe(0xddccbbaa >>> 0);
  });

  it('storeBlock/loadBlock round trips bytes', () => {
    const as = new AddressSpace();
    const base = 0x20000000;
    const ram = new MappedRAM(base >>> 0, 2048);
    as.addRegion(ram);

    const src = new Uint8Array([1,2,3,4,5,6,7,8,9,10]);
    as.storeBlock(base + 100, src);
    const got = as.loadBlock(base + 100, src.length);
    expect(Array.from(got)).toEqual(Array.from(src));
  });
});

