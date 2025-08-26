import { describe, it, expect } from 'vitest';
import { toPhysical, BIOSRegion, type BIOSProvider } from '../../packages/emulator-core/src/memmap';

class TestBIOS implements BIOSProvider {
  data = new Uint8Array(512 * 1024).map((_, i) => (i & 0xff));
  read8(o: number): number { return this.data[o]; }
  read16(o: number): number { return this.data[o] | (this.data[o+1]<<8); }
  read32(o: number): number { return (this.data[o] | (this.data[o+1]<<8) | (this.data[o+2]<<16) | (this.data[o+3]<<24))>>>0; }
  size(): number { return this.data.length; }
}

describe('memmap', () => {
  it('toPhysical mirrors segments', () => {
    expect(toPhysical(0x8000_1234) >>> 0).toBe(0x0000_1234);
    expect(toPhysical(0xA000_1234) >>> 0).toBe(0x0000_1234);
    expect(toPhysical(0x0000_1234) >>> 0).toBe(0x0000_1234);
  });
  it('BIOS region mapping', () => {
    const bios = new BIOSRegion(new TestBIOS());
    const a = 0xBFC00000; // KSEG1 mirror of 0x1FC00000
    expect(bios.contains(a)).toBe(true);
    expect(bios.read8(a)).toBe(0);
    expect(bios.read8(a+1)).toBe(1);
    expect(bios.read16(a)).toBe(0x0100);
  });
});

