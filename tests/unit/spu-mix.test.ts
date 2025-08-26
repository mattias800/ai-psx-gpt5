import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function approx(a: number, b: number, eps = 1e-4) {
  expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

describe('SPU mixer skeleton', () => {
  it('mixes two voices with volumes and clamps to [-1,1]', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);

    // Voice 0: 0.5 volume both channels
    spu.setVoiceVolume(0, 0x2000, 0x2000);
    spu.setVoiceKeyOn(0, true);
    spu.enqueuePCM(0, Int16Array.from([32767, -32768, 16384, -16384]));

    // Voice 1: 0.5 volume both channels, same samples
    spu.setVoiceVolume(1, 0x2000, 0x2000);
    spu.setVoiceKeyOn(1, true);
    spu.enqueuePCM(1, Int16Array.from([32767, -32768, 16384, -16384]));

    const out = spu.mix(4);
    // Sample 0: two voices each ~1.0 * 0.5 => ~1.0, clamped to 1.0
    approx(out[0], 1.0); // L0
    approx(out[1], 1.0); // R0
    // Sample 1: two voices each ~-1.0 * 0.5 => ~-1.0
    approx(out[2], -1.0); // L1
    approx(out[3], -1.0); // R1
    // Sample 2: 16384/32768=0.5 -> each 0.25; sum=0.5
    approx(out[4], 0.5);
    approx(out[5], 0.5);
    // Sample 3: -0.5 -> each -0.25; sum=-0.5
    approx(out[6], -0.5);
    approx(out[7], -0.5);
  });
});
