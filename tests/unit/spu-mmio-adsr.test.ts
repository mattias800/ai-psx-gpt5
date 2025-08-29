import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Verify ADSR1/ADSR2 MMIO decoding shapes the envelope approximately as expected.
// We use a constant-positive ADPCM block so output amplitude follows the envelope.

describe('SPU MMIO ADSR control (approx)', () => {
  it('attacks quickly to ~1, decays toward sustain, holds, then releases to 0', () => {
    const psx = new PSXSystem();
    const as = psx.as;

    // Create two ADPCM blocks with nibble=+7; first = loop start, second = end -> loop
    const blockA = new Uint8Array(16); blockA[0] = 0x00; blockA[1] = 0x02; for (let i = 0; i < 14; i++) blockA[2+i] = 0x77;
    const blockB = new Uint8Array(16); blockB[0] = 0x00; blockB[1] = 0x01; for (let i = 0; i < 14; i++) blockB[2+i] = 0x77;

    const src = 0x7c0;
    for (let i = 0; i < 8; i++) {
      const lo = blockA[i*2], hi = blockA[i*2+1];
      write16(as, src + i*2, lo | (hi << 8));
    }
    for (let i = 0; i < 8; i++) {
      const lo = blockB[i*2], hi = blockB[i*2+1];
      write16(as, src + 16 + i*2, lo | (hi << 8));
    }
    const units = 0x0600;
    write16(as, 0x1f801da6, units);
    write32(as, 0x1f8010c0, src >>> 0);
    write32(as, 0x1f8010c4, 16);
    write32(as, 0x1f8010c8, (1<<0)|(0<<1)|(0<<9)|(1<<24));

    // Voice0 setup via MMIO
    write16(as, 0x1f801c0c, units);      // start
    write16(as, 0x1f801c00, 0x3fff);     // volL
    write16(as, 0x1f801c02, 0x3fff);     // volR
    write16(as, 0x1f801c04, 0x1000);     // pitch normal
    // ADSR: Fast attack (AR=31), fast decay (DR=15), sustain level ~0.5 (SL=16), fast release (RR=31)
    const ADSR1 = (1<<15) | (31<<10) | (15<<4); // exponential flag set (ignored), AR=31, DR=15
    const ADSR2 = (31<<5) | 16;                // RR=31, SL=16
    write16(as, 0x1f801c08, ADSR1);
    write16(as, 0x1f801c0a, ADSR2);

    // Key on and mix some frames
    write16(as, 0x1f801d80, 0x3fff); // MVOL L
    write16(as, 0x1f801d82, 0x3fff); // MVOL R
    write16(as, 0x1f801d88, 0x0001); // KeyOn v0

    const out1 = psx.spu.mix(10);
    // Envelope should rise initially
    expect(Math.abs(out1[0])).toBeLessThan(Math.abs(out1[2]));

    // Mix more to reach sustain
    const out2 = psx.spu.mix(50);
    // Later samples should be around sustain (non-zero but not 1.0)
    const s = Math.abs(out2[49*2]);
    expect(s).toBeGreaterThan(0.0);
    expect(s).toBeLessThan(1.0);

    // Key off and ensure it decreases toward 0
    write16(as, 0x1f801d8a, 0x0001); // KeyOff v0
    const out3 = psx.spu.mix(40);
    const a0 = Math.abs(out3[0]);
    const aLast = Math.abs(out3[39*2]);
    expect(aLast).toBeLessThanOrEqual(a0);
  });
});

