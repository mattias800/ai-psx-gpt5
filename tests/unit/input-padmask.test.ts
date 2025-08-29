import { describe, it, expect } from 'vitest';
import { padMaskFromButtons } from '../../packages/emulator-core/src/input';

describe('padMaskFromButtons helper', () => {
  it('maps button names to active-low mask', () => {
    const mask = padMaskFromButtons(['start','up','left','cross','circle']);
    // All bits start as 1; pressed ones become 0 per mapping
    expect((mask & (1<<3)) === 0).toBe(true); // start
    expect((mask & (1<<4)) === 0).toBe(true); // up
    expect((mask & (1<<7)) === 0).toBe(true); // left
    expect((mask & (1<<14)) === 0).toBe(true); // cross
    expect((mask & (1<<13)) === 0).toBe(true); // circle

    // Unmentioned stay 1
    expect((mask & (1<<12)) !== 0).toBe(true); // triangle
    expect((mask & (1<<15)) !== 0).toBe(true); // square
  });
});

