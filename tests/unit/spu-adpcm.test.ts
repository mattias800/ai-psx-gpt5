import { describe, it, expect } from 'vitest';
import { decodeBlock, type ADPCMState } from '@ai-psx/spu';

function signExtend4(n: number): number {
  return n & 0x8 ? n - 16 : n;
}

function makeBlock(shift: number, filter: number, nibbles: number[]): Uint8Array {
  const block = new Uint8Array(16);
  block[0] = ((filter & 0x0f) << 4) | (shift & 0x0f);
  block[1] = 0x00; // flags unused here
  for (let i = 0; i < 14; i++) {
    const n0 = nibbles[i * 2] ?? 0;
    const n1 = nibbles[i * 2 + 1] ?? 0;
    block[2 + i] = ((n1 & 0x0f) << 4) | (n0 & 0x0f); // low nibble first
  }
  return block;
}

describe('SPU ADPCM decode', () => {
  it('decodes a simple block with filter 0 and shift=12 -> raw 4-bit values', () => {
    const nibbles = Array.from({ length: 28 }, (_, i) => i % 16);
    const block = makeBlock(12, 0, nibbles);
    const st: ADPCMState = { prev1: 0, prev2: 0 };
    const pcm = decodeBlock(block, st);

    expect(pcm.length).toBe(28);
    for (let i = 0; i < 28; i++) {
      expect(pcm[i]).toBe(signExtend4(nibbles[i]));
    }
    // State should hold last two samples
    expect(st.prev1).toBe(signExtend4(nibbles[27]));
    expect(st.prev2).toBe(signExtend4(nibbles[26]));
  });

  it('applies predictor filter 1 (k0=60,k1=0) with shift=12', () => {
    const nibbles = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const block = makeBlock(12, 1, nibbles);
    const st: ADPCMState = { prev1: 0, prev2: 0 };
    const pcm = decodeBlock(block, st);
    // First sample equals nibble (no history)
    expect(pcm[0]).toBe(1);
    // With k0=60, s(n) grows roughly by floor(prev1*60/64)+1 for constant nibble=1
    const expectedFirst10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
    for (let i = 0; i < expectedFirst10.length; i++) expect(pcm[i]).toBe(expectedFirst10[i]);
  });
});
