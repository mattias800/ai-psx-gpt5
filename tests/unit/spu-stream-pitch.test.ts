import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function makeBlock(shift: number, filter: number, nibbles: number[], flags=0): Uint8Array {
  const block = new Uint8Array(16);
  block[0] = ((filter & 0x0f) << 4) | (shift & 0x0f);
  block[1] = flags & 0xff;
  for (let i = 0; i < 14; i++) {
    const n0 = nibbles[i * 2] ?? 0;
    const n1 = nibbles[i * 2 + 1] ?? 0;
    block[2 + i] = ((n1 & 0x0f) << 4) | (n0 & 0x0f);
  }
  return block;
}
function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Verify streaming interpolation with half-speed pitch

describe('SPU streaming pitch and interpolation', () => {
  it('produces linear interpolated values at half speed for filter0/shift12 ramp', () => {
    const psx = new PSXSystem();
    psx.attachDMATiming({ cyclesPerWord: 2 });

    // Build a block with nibbles 0,1,2,... wrapping within 0..7 only for simplicity
    const nibbles = Array.from({ length: 28 }, (_, i) => i % 8);
    const block = makeBlock(12, 0, nibbles, 0);

    const src = 0x720;
    for (let i = 0; i < 8; i++) {
      const lo = block[i * 2];
      const hi = block[i * 2 + 1];
      write16(psx.as, src + i * 2, lo | (hi << 8));
    }

    // DMA into SPU RAM
    const SPU_XFER = 0x1f801da6; const dstUnits = 0x0200;
    write16(psx.as, SPU_XFER, dstUnits);
    write32(psx.as, 0x1f8010c0, src >>> 0);
    write32(psx.as, 0x1f8010c4, 8);
    write32(psx.as, 0x1f8010c8, (1<<0) | (0<<1) | (0<<9) | (1<<24));
    psx.stepCycles(8*2);

    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoiceStreamFromRAM(0, dstUnits);
    v.setVoicePitch(0, 0x8000); // 0.5
    v.setVoiceKeyOn(0, true);

    const out = v.mix(3);
    const L = (i:number) => out[i*2];
    const approx = (a:number,b:number,eps=2e-3)=> expect(Math.abs(a-b)).toBeLessThanOrEqual(eps);
    // Expect L(1) approximately halfway between L(0) and L(2)
    approx(L(0), 0.0);
    const mid = (L(0) + L(2)) / 2;
    approx(L(1), mid, 5e-3);
  });
});

