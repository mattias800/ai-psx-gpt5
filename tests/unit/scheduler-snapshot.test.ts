import { describe, it, expect } from 'vitest';
import { EventScheduler } from '../../packages/emulator-core/src/timing';

describe('EventScheduler snapshot/restore with key events', () => {
  it('restores queue and preserves ordering/time deterministically', () => {
    const sch1 = new EventScheduler();
    const calls1: Array<{t:number,k:string,p:any}> = [];
    sch1.registerHandler('A', (p)=> calls1.push({t: sch1['now'], k:'A', p}));
    sch1.registerHandler('B', (p)=> calls1.push({t: sch1['now'], k:'B', p}));

    sch1.scheduleKey(5, 'A', 1);
    sch1.scheduleKey(10, 'B', 2);
    sch1.scheduleKey(5, 'B', 3);

    // Take snapshot before stepping
    const snap = sch1.serialize();

    // Restore into a fresh scheduler
    const sch2 = new EventScheduler();
    const calls2: Array<{t:number,k:string,p:any}> = [];
    sch2.registerHandler('A', (p)=> calls2.push({t: sch2['now'], k:'A', p}));
    sch2.registerHandler('B', (p)=> calls2.push({t: sch2['now'], k:'B', p}));
    sch2.deserialize(snap);

    sch1.step(10);
    sch2.step(10);

    expect(calls1).toEqual([
      {t:5,k:'A',p:1},
      {t:5,k:'B',p:3},
      {t:10,k:'B',p:2},
    ]);
    expect(calls2).toEqual(calls1);
  });
});

