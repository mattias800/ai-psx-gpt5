import { describe, it, expect } from 'vitest';
import { EventScheduler } from '../../packages/emulator-core/src/timing';

// Mid-sequence snapshot determinism: schedule, step partially, snapshot, then complete
// Compare with fresh run without snapshot.
describe('EventScheduler mid-sequence snapshot determinism', () => {
  it('completes to identical outcomes vs fresh run', () => {
    const build = () => {
      const sch = new EventScheduler();
      const calls: number[] = [];
      sch.registerHandler('T', (p)=> calls.push((p as number) + sch['now']));
      sch.scheduleKey(3, 'T', 10);
      sch.scheduleKey(7, 'T', 20);
      sch.scheduleKey(10, 'T', 30);
      return { sch, calls };
    };

    const A = build();
    A.sch.step(5); // fire t=3 only
    const snap = A.sch.serialize();

    const B = build();

    // Finish A from snapshot
    const schA2 = new EventScheduler();
    const callsA2: number[] = [];
    schA2.registerHandler('T', (p)=> callsA2.push((p as number) + schA2['now']));
    schA2.deserialize(snap);
    schA2.step(10); // run to t=15

    // Fresh run B
    B.sch.step(15);

    // Combine calls from A (pre + post)
    const combinedA = [...(A.calls), ...callsA2];

    expect(combinedA).toEqual(B.calls);
  });
});

