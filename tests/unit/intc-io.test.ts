import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import { InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

describe('INTC via IOHub mapping', () => {
  it('reads/writes I_STAT and I_MASK correctly', () => {
    const intc = new InterruptController();
    const io = new IOHub({ intc: {
      readStatus: () => intc.status,
      readMask: () => intc.mask,
      writeMask: (v: number) => intc.setMask(v),
      ackMask: (v: number) => intc.ackMask(v),
    }});
    const as = new AddressSpace();
    as.addRegion(io);

    // Initially zero
    expect(as.read32(0x1f801070)>>>0).toBe(0);
    expect(as.read32(0x1f801074)>>>0).toBe(0);

    // Set mask and raise an IRQ bit
    as.write32(0x1f801074, 1<<IRQ.GPU);
    intc.raise(IRQ.GPU);
    expect(as.read32(0x1f801074)>>>0).toBe(1<<IRQ.GPU);
    expect(as.read32(0x1f801070)>>>0).toBe(1<<IRQ.GPU);

    // Ack the bit by writing 1
    as.write32(0x1f801070, 1<<IRQ.GPU);
    expect(as.read32(0x1f801070)>>>0).toBe(0);
  });
});

