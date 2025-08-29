import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// Minimal PAD poll: write 0x01,0x42,0x00 to DATA and read back 5 bytes: 0xff, 0x41, 0x5a, 0xff, 0xff

describe('SIO0 PAD poll stub', () => {
  it('responds to 0x01 0x42 0x00 with digital pad header and no buttons pressed; raises IRQ7', () => {
    const psx = new PSXSystem();
    const DATA = 0x1f801040;

    const w8 = (a:number,v:number)=> psx.as.write8(a>>>0, v & 0xff);
    const r8 = (a:number)=> psx.as.read8(a>>>0) & 0xff;

    // Issue command
    w8(DATA, 0x01);
    w8(DATA, 0x42);
    w8(DATA, 0x00);

    // Read response bytes
    const b0 = r8(DATA);
    const b1 = r8(DATA);
    const b2 = r8(DATA);
    const b3 = r8(DATA);
    const b4 = r8(DATA);

    expect([b0,b1,b2,b3,b4]).toEqual([0xff, 0x41, 0x5a, 0xff, 0xff]);

    // INTC I_STAT should have PAD bit set
    const istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.PAD_MEMCARD)) !== 0).toBe(true);

    // Ack and verify cleared
    psx.as.write32(0x1f801070, (1<<IRQ.PAD_MEMCARD) >>> 0);
    const istat2 = psx.as.read32(0x1f801070) >>> 0;
    expect((istat2 & (1<<IRQ.PAD_MEMCARD)) === 0).toBe(true);
  });
});

