import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, type TimerPort } from '../../packages/emulator-core/src/address-space';
import { EventScheduler } from '../../packages/emulator-core/src/timing';
import { HWTimer } from '../../packages/emulator-core/src/timers';

function asPort(t: HWTimer): TimerPort {
  return {
    readCount: () => t.readCount(),
    writeCount: (v: number) => t.writeCount(v),
    readMode: () => t.readMode(),
    writeMode: (v: number) => t.writeMode(v),
    readTarget: () => t.readTarget(),
    writeTarget: (v: number) => t.writeTarget(v),
  };
}

describe('Timer IO mapping', () => {
  it('maps COUNT/MODE/TARGET for timers 0..2', () => {
    const sch = new EventScheduler();
    const t0 = new HWTimer(sch, 1);
    const t1 = new HWTimer(sch, 1);
    const t2 = new HWTimer(sch, 1);
    const io = new IOHub({ timers: [asPort(t0), asPort(t1), asPort(t2)]});
    const as = new AddressSpace();
    as.addRegion(io);

    // Timer0
    as.write32(0x1f801100, 0x1234);
    as.write32(0x1f801104, 0x00f0);
    as.write32(0x1f801108, 0x2000);
    expect(as.read32(0x1f801100) & 0xffff).toBe(0x1234);
    expect(as.read32(0x1f801104) & 0xffff).toBe(0x00f0);
    expect(as.read32(0x1f801108) & 0xffff).toBe(0x2000);

    // Tick and observe COUNT changes
    t0.tick(5);
    expect(as.read32(0x1f801100) & 0xffff).toBe(0x1239);

    // Timer1
    as.write32(0x1f801110, 1);
    t1.tick(9);
    expect(as.read32(0x1f801110) & 0xffff).toBe(10);

    // Timer2
    as.write32(0x1f801124, 0x00ff);
    expect(as.read32(0x1f801124) & 0xffff).toBe(0x00ff);
  });
});

