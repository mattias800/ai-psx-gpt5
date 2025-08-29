import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function makeBlock(shift: number, filter: number, nibbles: number[]): Uint8Array {
  const block = new Uint8Array(16);
  block[0] = ((filter & 0x0f) << 4) | (shift & 0x0f);
  block[1] = 0x00; // flags
  for (let i = 0; i < 14; i++) {
    const n0 = nibbles[i * 2] ?? 0;
    const n1 = nibbles[i * 2 + 1] ?? 0;
    block[2 + i] = ((n1 & 0x0f) << 4) | (n0 & 0x0f);
  }
  return block;
}
function signExtend4(n: number): number { return (n & 0x8) ? (n - 16) : n; }
function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Stream ADPCM from SPU RAM: load one block via DMA, stream decode on-the-fly, verify output

describe('SPU ADPCM streaming from RAM (on-the-fly decode)', () => {
  it('decodes a single block (filter0 shift=12) to PCM while mixing', () => {
    const psx = new PSXSystem();
    psx.attachDMATiming({ cyclesPerWord: 2 });

    const nibbles = Array.from({ length: 28 }, (_, i) => i % 16);
    const block = makeBlock(12, 0, nibbles);

    // Write block bytes into system RAM as little-endian halfwords
    const src = 0x700;
    for (let i = 0; i < 8; i++) {
      const lo = block[i * 2];
      const hi = block[i * 2 + 1];
      write16(psx.as, src + i * 2, lo | (hi << 8));
    }

    // Set SPU transfer address and DMA into SPU RAM
    const SPU_XFER = 0x1f801da6; const dstUnits = 0x0123;
    write16(psx.as, SPU_XFER, dstUnits);
    write32(psx.as, 0x1f8010c0, src >>> 0);
    write32(psx.as, 0x1f8010c4, 8); // halfwords
    write32(psx.as, 0x1f8010c8, (1<<0) | (0<<1) | (0<<9) | (1<<24));
    psx.stepCycles(8 * 2);

    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoicePitch(0, 1 << 16);
    v.setVoiceStreamFromRAM(0, dstUnits);
    v.setVoiceKeyOn(0, true);

    const out = v.mix(28);
    for (let i = 0; i < 28; i++) {
      const expected = signExtend4(nibbles[i]) / 32768;
      expect(Math.abs(out[i * 2] - expected)).toBeLessThanOrEqual(1e-3);
      expect(Math.abs(out[i * 2 + 1] - expected)).toBeLessThanOrEqual(1e-3);
    }
  });
});

