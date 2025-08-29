import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function makeAltPCM(n: number): Int16Array {
  const arr = new Int16Array(n);
  for (let i = 0; i < n; i++) arr[i] = (i % 2 === 0) ? 32767 : -32768;
  return arr;
}

function mixLeft(spu: SPU, n: number): number[] { const out = spu.mix(n); const L: number[] = []; for (let i=0;i<n;i++) L.push(out[i*2]); return L; }

function derivEnergy(xs: number[]): number { let e=0; for (let i=1;i<xs.length;i++){ const d=xs[i]-xs[i-1]; e+=Math.abs(d);} return e; }

describe('SPU gaussian vs linear interpolation on PCM buffer (smoothness)', () => {
  it('gaussian interpolation yields lower derivative energy than linear for alternating PCM', () => {
    const n = 128;
    const pcm = makeAltPCM(n);

    const lin = new SPU();
    lin.setMasterVolume(0x3fff, 0x3fff);
    lin.setVoiceVolume(0, 0x3fff, 0x3fff);
    lin.enqueuePCM(0, pcm);
    lin.setVoicePitch(0, 0x8000); // 0.5 speed
    lin.setVoiceKeyOn(0, true);

    const gau = new SPU();
    gau.setMasterVolume(0x3fff, 0x3fff);
    gau.setVoiceVolume(0, 0x3fff, 0x3fff);
    gau.enqueuePCM(0, pcm);
    gau.setVoicePitch(0, 0x8000);
    gau.setVoiceKeyOn(0, true);
    gau.setInterpolationMode('gaussian');

    const outLin = mixLeft(lin, 128);
    const outGau = mixLeft(gau, 128);

    const eLin = derivEnergy(outLin.slice(16, 112));
    const eGau = derivEnergy(outGau.slice(16, 112));

    expect(eGau).toBeLessThan(eLin);
  });
});

