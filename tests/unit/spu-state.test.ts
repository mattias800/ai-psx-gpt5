import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function approx(a: number, b: number, eps = 1e-5) { expect(Math.abs(a - b)).toBeLessThanOrEqual(eps); }

// Verify SPU serialize/deserialize preserves voice state and mixing output

describe('SPU snapshot (serialize/deserialize)', () => {
  it('restores voice PCM, envelope, and mixing continuity', () => {
    const makeSPU = () => { const s = new SPU(); s.setMasterVolume(0x3fff, 0x3fff); return s; };

    // Build a PCM buffer for voice 0
    const pcm = Int16Array.from([32767, 16384, 0, -16384, -32768, 0, 1000, -1000]);

    // Setup original SPU
    const s1 = makeSPU();
    s1.setVoiceVolume(0, 0x3fff, 0x3fff);
    s1.enqueuePCM(0, pcm);
    s1.setVoicePitch(0, 1<<16);
    s1.setVoiceADSR(0, 2, 2, 0.5, 2);
    s1.setVoiceKeyOn(0, true);

    // Take snapshot and create a new SPU from it
    const snap = s1.serialize();
    const s2 = makeSPU();
    s2.deserialize(snap);

    // Mix same amount on both and compare
    const A = s1.mix(8);
    const B = s2.mix(8);
    expect(A.length).toBe(B.length);
    for (let i = 0; i < A.length; i++) approx(A[i], B[i], 1e-4);
  });
});

