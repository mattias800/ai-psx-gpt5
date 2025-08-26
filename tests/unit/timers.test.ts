import { describe, it, expect } from 'vitest';
import { EventScheduler } from '../../packages/emulator-core/src/timing';
import { HWTimer } from '../../packages/emulator-core/src/timers';

describe('HWTimer', () => {
  it('ticks and sets IRQ when passing target', () => {
    const sch = new EventScheduler();
    const t = new HWTimer(sch, 1);
    t.writeCount(0xfff0);
    t.writeTarget(0xfff5);
    t.tick(4);
    expect(t.readCount()).toBe(0xfff4);
    expect(t.irq).toBe(false);
    t.tick(2);
    expect(t.readCount()).toBe(0xfff6);
    expect(t.irq).toBe(true);
  });
});

