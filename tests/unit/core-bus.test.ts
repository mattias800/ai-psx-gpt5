import { describe, it, expect } from 'vitest';
import { SimpleRAM, FlatBus } from '../../packages/emulator-core/src/bus';

describe('core bus and SimpleRAM', () => {
  it('read/write 8/16/32 with wrapping', () => {
    const ram = new SimpleRAM(1024);
    const bus = new FlatBus(ram);

    bus.write8(0, 0x12);
    bus.write16(1, 0x3456);
    bus.write32(3, 0x89abcdef);

    expect(bus.read8(0)).toBe(0x12);
    expect(bus.read16(1)).toBe(0x3456);
    expect(bus.read32(3) >>> 0).toBe(0x89abcdef);

    // wrapping
    bus.write8(1023, 0xaa);
    expect(bus.read8(1023)).toBe(0xaa);
    // wrap to 0
    expect(bus.read8(1024)).toBe(0x12);
  });
});

