import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function approx(a: number, b: number, eps = 1e-3) {
  expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

describe('SPU pitch and loop', () => {
  it('linear interpolation with half-speed pitch (step=0.5)', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    // samples: 0, 1.0, 0
    const pcm = Int16Array.from([0, 32767, 0, 0, 0]);
    spu.enqueuePCM(0, pcm);
    spu.setVoicePitch(0, 0x8000); // 0.5 in 16.16
    spu.setVoiceKeyOn(0, true);
    const out = spu.mix(3); // 3 frames -> positions 0.0, 0.5, 1.0
    approx(out[0], 0.0);
    approx(out[2], 0.5);
    approx(out[4], 1.0, 2e-3);
  });

  it('loop wraps within [start,end)', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    const pcm = Int16Array.from([0, 32767, 0]);
    spu.enqueuePCM(0, pcm);
    spu.setVoiceLoop(0, 0, 2, true); // loop first two samples
    spu.setVoicePitch(0, 1 << 16);
    spu.setVoiceKeyOn(0, true);
    const out = spu.mix(4);
    // Expect: 0.0, 1.0, 0.0 (looped), 1.0 (looped)
    approx(out[0], 0.0);
    approx(out[2], 1.0, 2e-3);
    approx(out[4], 0.0, 2e-3);
    approx(out[6], 1.0, 2e-3);
  });
});
