import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, type GPURegs } from '../../packages/emulator-core/src/address-space';
import type { BIOSProvider } from '../../packages/emulator-core/src/memmap';

class TestBIOS implements BIOSProvider {
  size(): number { return 512*1024; }
  read8(_o: number): number { return 0; }
  read16(_o: number): number { return 0; }
  read32(_o: number): number { return 0; }
}

class DummyGPU implements GPURegs {
  status = 0x1c000000;
  lastGP0 = 0;
  writeGP0(v: number): void { this.lastGP0 = v >>> 0; }
  writeGP1(v: number): void { this.status = (this.status ^ (v>>>0)) >>> 0; }
  readGP0(): number { return this.lastGP0 >>> 0; }
  readGP1(): number { return this.status >>> 0; }
}

describe('IOHub GPU mapping', () => {
  it('routes GP0/GP1 through IO region', () => {
    const gpu = new DummyGPU();
    const io = new IOHub(gpu);
    const as = new AddressSpace();
    // map only IO for this test
    as.addRegion(io);

    // Write to GP0 and GP1
    as.write32(0x1f801810, 0xdeadbeef);
    as.write32(0x1f801814, 0x0000ffff);

    expect(gpu.lastGP0>>>0).toBe(0xdeadbeef>>>0);
    expect(as.read32(0x1f801814)>>>0).toBe(gpu.status>>>0);
    expect(as.read32(0x1f801810)>>>0).toBe(0xdeadbeef>>>0);
  });
});

