import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function makeBlock(shift: number, filter: number, nib: number, flags=0): Uint8Array {
  const nibbles = new Array(28).fill(nib & 0xf);
  const block = new Uint8Array(16);
  block[0] = ((filter & 0x0f) << 4) | (shift & 0x0f);
  block[1] = flags & 0xff;
  for (let i = 0; i < 14; i++) {
    const n0 = nibbles[i * 2];
    const n1 = nibbles[i * 2 + 1];
    block[2 + i] = ((n1 & 0x0f) << 4) | (n0 & 0x0f);
  }
  return block;
}
function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Verify loop handling using flags: first block marks loop start, second block marks end -> wraps back

describe('SPU streaming loop/end flags', () => {
  it('loops back to the stored loop point when encountering END', () => {
    const psx = new PSXSystem();
    psx.attachDMATiming({ cyclesPerWord: 2 });

    const A = makeBlock(12, 0, 0, 0x02); // loop start, samples ~0
    const B = makeBlock(12, 0, 1, 0x01); // end, samples ~1

    // Write both blocks contiguously into system RAM
    const src = 0x740;
    for (let i = 0; i < 8; i++) {
      write16(psx.as, src + i*2, A[i*2] | (A[i*2+1] << 8));
    }
    for (let i = 0; i < 8; i++) {
      write16(psx.as, src + 16 + i*2, B[i*2] | (B[i*2+1] << 8));
    }

    const SPU_XFER = 0x1f801da6; const dstUnits = 0x0300;
    write16(psx.as, SPU_XFER, dstUnits);
    // DMA both blocks (16 halfwords)
    write32(psx.as, 0x1f8010c0, src >>> 0);
    write32(psx.as, 0x1f8010c4, 16);
    write32(psx.as, 0x1f8010c8, (1<<0) | (0<<1) | (0<<9) | (1<<24));
    psx.stepCycles(16*2);

    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoiceStreamFromRAM(0, dstUnits);
    v.setVoicePitch(0, 1<<16);
    v.setVoiceKeyOn(0, true);

    const frames = 60; // > 2 blocks (28*2=56)
    const out = v.mix(frames);
    const L = (i:number) => out[i*2];
    const approx = (a:number,b:number,eps=1e-3)=> expect(Math.abs(a-b)).toBeLessThanOrEqual(eps);

    // First 28 samples ~0
    approx(L(0), 0.0, 1e-5); approx(L(27), 0.0, 1e-5);
    // Next 28 samples should be significantly larger than 0 (since nib=1)
    expect(L(28)).toBeGreaterThan(1e-5);
    expect(L(55)).toBeGreaterThan(1e-5);
    // Loop back -> near 0 again
    approx(L(56), 0.0, 1e-5); approx(L(59), 0.0, 1e-5);
  });
});

