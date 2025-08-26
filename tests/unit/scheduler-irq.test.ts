import { describe, it, expect, vi } from 'vitest';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

describe('EventScheduler', () => {
  it('fires in order and advances time', () => {
    const sch = new EventScheduler();
    const calls: number[] = [];
    sch.schedule(10, () => calls.push(10));
    sch.schedule(5, () => calls.push(5));
    sch.schedule(5, () => calls.push(5));
    sch.step(4);
    expect(calls).toEqual([]);
    sch.step(1);
    expect(calls).toEqual([5,5]);
    sch.step(4);
    expect(calls).toEqual([5,5]);
    sch.step(1);
    expect(calls).toEqual([5,5,10]);
    expect(sch['now']).toBe(10);
  });
});

describe('InterruptController', () => {
  it('mask and pending semantics', () => {
    const ic = new InterruptController();
    expect(ic.pending).toBe(false);
    ic.raise(IRQ.GPU);
    expect(ic.pending).toBe(false);
    ic.setMask(1<<IRQ.GPU);
    expect(ic.pending).toBe(true);
    ic.ack(IRQ.GPU);
    expect(ic.pending).toBe(false);
  });
});

