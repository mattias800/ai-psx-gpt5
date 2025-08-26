import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function approx(a: number, b: number, eps = 1e-4) {
  expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

describe('SPU ADSR (simplified)', () => {
  it('steps through attack->decay->sustain then release on key off', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu.setVoiceADSR(0, /*attack*/ 2, /*decay*/ 2, /*sustain*/ 0.5, /*release*/ 2);

    // Constant full-scale PCM to observe envelope directly
    const pcm = Int16Array.from(new Array(16).fill(32767));
    spu.enqueuePCM(0, pcm);

    // Key on: start envelope
    spu.setVoiceKeyOn(0, true);
    const a = spu.mix(6); // 6 frames: 2 attack, 2 decay, 2 sustain
    // First two frames: attack to 0.5 then 1.0
    approx(a[0], 0.5);
    approx(a[1], 0.5);
    approx(a[2], 1.0);
    approx(a[3], 1.0);
    // Next two frames: decay to 0.75 then 0.5
    approx(a[4], 0.75);
    approx(a[5], 0.75);
    approx(a[6], 0.5);
    approx(a[7], 0.5);
    // Key off -> release over 2 frames to 0
    spu.setVoiceKeyOn(0, false);
    const b = spu.mix(4);
    approx(b[0], 0.0);
    approx(b[1], 0.0);
    approx(b[2], 0.0);
    approx(b[3], 0.0);
    approx(b[4], 0.0);
    approx(b[5], 0.0);
    approx(b[6], 0.0);
    approx(b[7], 0.0);
  });
});
