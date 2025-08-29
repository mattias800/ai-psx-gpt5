import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify STAT IRQ bit reflects RX readiness while RX FIFO has bytes and clears when emptied.

describe('SIO0 STAT IRQ bit behavior', () => {
  it('sets IRQ while RX has data and clears when RX is drained', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;
    const STAT = 0x1f801044;

    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // After first byte 0x01, implementation pushes 0xff to RX and raises IRQ
    w8(DATA, 0x01);
    const stat1 = psx.as.read16(STAT) & 0xffff;
    expect((stat1 & (1<<7)) !== 0).toBe(true); // IRQ bit set

    // Consume that byte -> RX empty -> IRQ bit should clear
    const b0 = r8(DATA);
    expect(b0).toBe(0xff);
    const stat2 = psx.as.read16(STAT) & 0xffff;
    expect((stat2 & (1<<7)) === 0).toBe(true);

    // Complete header -> response bytes enqueued -> IRQ set again
    w8(DATA, 0x42); w8(DATA, 0x00);
    const stat3 = psx.as.read16(STAT) & 0xffff;
    expect((stat3 & (1<<7)) !== 0).toBe(true);

    // Drain remaining 4 bytes -> IRQ clears
    for (let i=0;i<4;i++) r8(DATA);
    const stat4 = psx.as.read16(STAT) & 0xffff;
    expect((stat4 & (1<<7)) === 0).toBe(true);
  });
});

