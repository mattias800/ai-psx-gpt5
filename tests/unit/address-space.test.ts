import { describe, it, expect } from 'vitest';
import { AddressSpace, MappedRAM, createDefaultPSXAddressSpace } from '../../packages/emulator-core/src';
import type { BIOSProvider } from '../../packages/emulator-core/src/memmap';

class TestBIOS implements BIOSProvider {
  data = new Uint8Array(512 * 1024).map((_, i) => (i & 0xff));
  read8(o: number): number { return this.data[o]; }
  read16(o: number): number { return this.data[o] | (this.data[o+1]<<8); }
  read32(o: number): number { return (this.data[o] | (this.data[o+1]<<8) | (this.data[o+2]<<16) | (this.data[o+3]<<24))>>>0; }
  size(): number { return this.data.length; }
}

describe('AddressSpace mapping', () => {
  it('maps RAM, scratchpad, and BIOS across segments', () => {
    const as = createDefaultPSXAddressSpace(new TestBIOS());
    // RAM at 0x0.. write and read via KSEG0 mirror
    as.write32(0x80000000, 0x12345678);
    expect(as.read32(0x00000000)>>>0).toBe(0x12345678);

    // Scratchpad at 0x1f800000, mirrored via KSEG1/KSEG0
    as.write16(0x9f800000, 0x55aa);
    expect(as.read16(0x1f800000)>>>0).toBe(0x55aa);

    // BIOS at 0x1fc00000, KSEG1 mirror 0xbfc00000
    expect(as.read8(0xbfc00000)).toBe(0);
    expect(as.read8(0xbfc00001)).toBe(1);
  });
});

