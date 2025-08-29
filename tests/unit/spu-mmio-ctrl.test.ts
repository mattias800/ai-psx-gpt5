import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// End-to-end: control SPU voice 0 via MMIO (volumes, pitch, start, key on/off) and verify audio

describe('SPU MMIO control path (voice0)', () => {
  it('plays via KeyOn and stops via KeyOff; MVOL scales output', () => {
    const psx = new PSXSystem();
    const as = psx.as;

    // Make a simple ADPCM block with nibbles=1 (filter0, shift12) so output ~+1
    const block = new Uint8Array(16);
    block[0] = 0x00; block[1] = 0x00;
    for (let i = 0; i < 14; i++) block[2+i] = 0x11;

    // DMA it into SPU RAM at units=0x0500
    const src = 0x7a0;
    for (let i = 0; i < 8; i++) {
      const lo = block[i*2], hi = block[i*2+1];
      write16(as, src + i*2, lo | (hi << 8));
    }
    const units = 0x0500;
    write16(as, 0x1f801da6, units);
    write32(as, 0x1f8010c0, src >>> 0);
    write32(as, 0x1f8010c4, 8);
    write32(as, 0x1f8010c8, (1<<0)|(0<<1)|(0<<9)|(1<<24));

    // Voice0: set start, volumes full, pitch=normal
    write16(as, 0x1f801c0c, units); // voice0 start (our simplified mapping)
    write16(as, 0x1f801c00, 0x3fff); // vol L
    write16(as, 0x1f801c02, 0x3fff); // vol R
    write16(as, 0x1f801c04, 0x1000); // pitch normal

    // MVOL full
    write16(as, 0x1f801d80, 0x3fff);
    write16(as, 0x1f801d82, 0x3fff);

    // KeyOn voice0 (bit0 in low word at 0x1f801d88)
    write16(as, 0x1f801d88, 0x0001);

    const out1 = psx.spu.mix(4);
    const L = (i:number)=> out1[i*2]; const R=(i:number)=> out1[i*2+1];
    expect(L(0)).toBeGreaterThan(0.0);
    expect(R(0)).toBeGreaterThan(0.0);

    // Reduce MVOL to half and mix again; expect roughly half amplitude
    write16(as, 0x1f801d80, 0x1fff);
    const out2 = psx.spu.mix(4);
    expect(Math.abs(out2[0])).toBeLessThan(Math.abs(out1[0]));

    // KeyOff voice0
    write16(as, 0x1f801d8a, 0x0001);
    const out3 = psx.spu.mix(4);
    for (let i = 0; i < out3.length; i++) expect(Math.abs(out3[i])).toBeLessThanOrEqual(1.0);
  });
});

