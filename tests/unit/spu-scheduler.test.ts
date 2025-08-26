import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { PSX_CLOCK } from '@ai-psx/shared';

function approx(a: number, b: number, eps = 1e-4) {
  expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

describe('SPU scheduler-driven mixing', () => {
  it('fills ring buffer at ~44.1kHz cadence (chunked)', () => {
    const psx = new PSXSystem();
    const chunk = 8;
    psx.attachSPUAudio({ sampleRate: 44100, chunkFrames: chunk });

    // Constant PCM for voice 0
    const pcm = Int16Array.from(new Array(128).fill(32767));
    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.enqueuePCM(0, pcm);
    v.setVoicePitch(0, 1 << 16);
    v.setVoiceKeyOn(0, true);

    const cyclesPerFrame = Math.floor(PSX_CLOCK / 44100);
    const cyclesPerChunk = cyclesPerFrame * chunk;

    // After 5 chunks worth of cycles, we expect ~5*chunk frames ready
    psx.stepCycles(cyclesPerChunk * 5);
    expect(v.availableFrames()).toBeGreaterThanOrEqual(5 * chunk);

    // Pull and verify samples are ~1.0
    const frames = v.pullStereo(5 * chunk);
    for (let i = 0; i < frames.length; i += 2) {
      approx(frames[i], 1.0, 2e-2);
      approx(frames[i + 1], 1.0, 2e-2);
    }
  });
});
