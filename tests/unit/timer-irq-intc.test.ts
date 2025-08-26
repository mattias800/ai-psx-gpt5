import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';
import { HWTimer } from '../../packages/emulator-core/src/timers';

function tport(t: HWTimer) {
  return {
    readCount: () => t.readCount(),
    writeCount: (v: number) => t.writeCount(v),
    readMode: () => t.readMode(),
    writeMode: (v: number) => t.writeMode(v),
    readTarget: () => t.readTarget(),
    writeTarget: (v: number) => t.writeTarget(v),
  };
}

describe('Timer IRQ -> INTC', () => {
  it('raises INTC TIMER0 bit on target pass', () => {
    const sch = new EventScheduler();
    const intc = new InterruptController();
    const t0 = new HWTimer(sch, 1, () => intc.raise(IRQ.TIMER0));
    const t1 = new HWTimer(sch, 1);
    const t2 = new HWTimer(sch, 1);
    const io = new IOHub({
      intc: {
        readStatus: () => intc.status,
        readMask: () => intc.mask,
        writeMask: (v: number) => intc.setMask(v),
        ackMask: (v: number) => intc.ackMask(v),
      },
      timers: [tport(t0), tport(t1), tport(t2)]
    });
    const as = new AddressSpace();
    as.addRegion(io);

    // Mask TIMER0 and set target
    as.write32(0x1f801074, 1<<IRQ.TIMER0);
    as.write32(0x1f801100, 0); // COUNT
    as.write32(0x1f801108, 5); // TARGET

    t0.tick(6);

    expect(as.read32(0x1f801070) & (1<<IRQ.TIMER0)).not.toBe(0);

    // Ack
    as.write32(0x1f801070, 1<<IRQ.TIMER0);
    expect(as.read32(0x1f801070) & (1<<IRQ.TIMER0)).toBe(0);
  });
});

