import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Test per-voice start address register (voice 0 at base+0x0C) triggers streaming on key-on

describe('SPU voice start address register triggers streaming', () => {
  it('starts streaming from SPU RAM when KeyOn and no PCM pending', () => {
    const psx = new PSXSystem();
    const as = psx.as;

    // Build a simple ADPCM block with all zeros (shift=12, filter0) so decoded is 0s
    const block = new Uint8Array(16);
    block[0] = 0x00; block[1] = 0x00;
    for (let i = 0; i < 14; i++) block[2+i] = 0;

    // Put block into system RAM and DMA to SPU RAM at units=0x0400
    const src = 0x780;
    for (let i = 0; i < 8; i++) {
      const lo = block[i*2]; const hi = block[i*2+1];
      write16(as, src + i*2, lo | (hi << 8));
    }
    const units = 0x0400;
    write16(as, 0x1f801da6, units);
    write32(as, 0x1f8010c0, src >>> 0);
    write32(as, 0x1f8010c4, 8);
    write32(as, 0x1f8010c8, (1<<0)|(0<<1)|(0<<9)|(1<<24));

    // Write voice0 start address register at base+0x0C
    const VOICE0_START = 0x1f801c0c;
    write16(as, VOICE0_START, units);

    // Kick voice0
    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoicePitch(0, 1<<16);
    v.setVoiceKeyOn(0, true);

    const out = v.mix(4);
    // Should be near zero since block decodes to zeros
    for (let i = 0; i < 8; i++) expect(Math.abs(out[i])).toBeLessThanOrEqual(1e-5);
  });
});

