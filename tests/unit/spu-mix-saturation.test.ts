import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function makeConstPCM(n: number, val: number): Int16Array {
  return Int16Array.from(new Array(n).fill(val|0));
}

function mixLeft(spu: SPU, n: number): number[] { const out = spu.mix(n); const L: number[] = []; for (let i=0;i<n;i++) L.push(out[i*2]); return L; }

describe('SPU mixer saturation (int16 quantization)', () => {
  it('saturates positive overdrive to +32767/32768 (ring path)', () => {
    const s = new SPU();
    s.configureRing(64);
    s.setMasterVolume(0x3fff, 0x3fff);
    s.setVoiceVolume(0, 0x3fff, 0x3fff);
    s.setVoiceVolume(1, 0x3fff, 0x3fff);
    const pcm = makeConstPCM(16, 32767);
    s.enqueuePCM(0, pcm);
    s.enqueuePCM(1, pcm);
    s.setVoiceKeyOn(0, true);
    s.setVoiceKeyOn(1, true);
    s.stepMix(8);
    const frames = s.pullStereo(8);
    const max = 32767/32768;
    for (let i=0;i<frames.length;i+=2) expect(frames[i]).toBeCloseTo(max, 0);
  });

  it('saturates negative overdrive to -1.0 (ring path)', () => {
    const s = new SPU();
    s.configureRing(64);
    s.setMasterVolume(0x3fff, 0x3fff);
    s.setVoiceVolume(0, 0x3fff, 0x3fff);
    s.setVoiceVolume(1, 0x3fff, 0x3fff);
    const pcm = makeConstPCM(16, -32768);
    s.enqueuePCM(0, pcm);
    s.enqueuePCM(1, pcm);
    s.setVoiceKeyOn(0, true);
    s.setVoiceKeyOn(1, true);
    s.stepMix(8);
    const frames = s.pullStereo(8);
    for (let i=0;i<frames.length;i+=2) expect(frames[i]).toBe(-1.0);
  });

  it('reverb return also saturates when combined with dry (ring path)', () => {
    const s = new SPU();
    s.configureRing(256);
    s.setMasterVolume(0x3fff, 0x3fff);
    s.setVoiceVolume(0, 0x3fff, 0x3fff);
    // Enable reverb with strong return and send
    s.write16(0x1f801c00 + 0x184, 0x3fff); // RVB_VOLL
    s.write16(0x1f801c00 + 0x186, 0x3fff); // RVB_VOLR
    s.write16(0x1f801c00 + 0x198, 0x0001); // RVB_ON v0
    s.write16(0x1f801c00 + 0x1c0, 0x0001); // small delay
    s.write16(0x1f801c00 + 0x1c2, 0x3000); // feedback
    s.write16(0x1f801c00 + 0x1c4, 0x3fff); // send

    const pcm = makeConstPCM(64, 32767);
    s.enqueuePCM(0, pcm);
    s.setVoiceKeyOn(0, true);
    s.stepMix(128);
    const frames = s.pullStereo(128);
    const max = 32767/32768;
    const saturated = (() => { for (let i=0;i<frames.length;i+=2){ if (Math.abs(frames[i]-max) < 1e-12) return true; } return false; })();
    expect(saturated).toBe(true);
  });
});

