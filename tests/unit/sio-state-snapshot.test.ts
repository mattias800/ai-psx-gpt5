import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify SIO0 state snapshot/restore retains RX/TX buffers and pad settings deterministically

describe('SIO0 snapshot/restore', () => {
  it('retains pending RX bytes and pad mask across serialize/deserialize', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;

    const setButtons = (m:number)=> psx.setPadButtons(m>>>0);
    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    const mask = 0x0F0F;
    setButtons(mask);

    // Start a poll and consume one byte to leave pending RX
    w8(DATA, 0x01);
    w8(DATA, 0x42);
    w8(DATA, 0x00);
    const first = r8(DATA); // 0xff
    expect(first).toBe(0xff);

    // Snapshot and restore
    const snap = psx.serialize();
    psx.deserialize(snap);

    // Remaining bytes should still be present and match mask
    const b1 = r8(DATA);
    const b2 = r8(DATA);
    const b3 = r8(DATA);
    const b4 = r8(DATA);
    expect([b1,b2,b3,b4]).toEqual([0x41, 0x5a, mask & 0xff, (mask>>>8)&0xff]);
  });
});

