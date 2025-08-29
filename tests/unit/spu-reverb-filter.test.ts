import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function makeConstPCM(n: number, amp=32767): Int16Array { return Int16Array.from(new Array(n).fill(amp|0)); }

function mixLeft(spu: SPU, n: number): number[] { const out = spu.mix(n); const L: number[] = []; for (let i=0;i<n;i++) L.push(out[i*2]); return L; }

function derivEnergy(xs: number[]): number {
  let e = 0; for (let i=1;i<xs.length;i++) { const d = xs[i] - xs[i-1]; e += Math.abs(d); } return e;
}

describe('SPU reverb feedback low-pass filter (MMIO 0x1c8)', () => {
  function tailDerivativeEnergy(lpCoeff01: number): number {
    const spu = new SPU();
    // Master and voice setup
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    // Use noise as an excitation source for a short period
    write16(spu, SPU_BASE + 0x194, 0x0001); // NOISE ON v0
    // mid noise frequency
    write16(spu, SPU_BASE + 0x1aa, (12<<2));
    // Envelope full-on, immediate release
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);

    // Reverb on + parameters: strong feedback, short delay, high send
    write16(spu, SPU_BASE + 0x184, 0x3000); // RVB_VOLL
    write16(spu, SPU_BASE + 0x186, 0x3000); // RVB_VOLR
    write16(spu, SPU_BASE + 0x198, 0x0001); // RVB_ON v0
    write16(spu, SPU_BASE + 0x1c0, 0x0020); // delay 32 frames
    write16(spu, SPU_BASE + 0x1c2, 0x3000); // feedback high
    write16(spu, SPU_BASE + 0x1c4, 0x3fff); // send max
    // Low-pass coefficient
    const coeff = Math.max(0, Math.min(1, lpCoeff01));
    write16(spu, SPU_BASE + 0x1c8, Math.floor(coeff * 0x3fff));

    // Excite the reverb for a short while
    mixLeft(spu, 128);
    // Stop sending new energy into the bus: disable reverb send on v0 and key-off voice
    write16(spu, SPU_BASE + 0x198, 0x0000);
    spu.setVoiceKeyOn(0, false);

    // Capture tail frames (should primarily be reverb feedback)
    const tail = mixLeft(spu, 256);
    // Analyze a window well after the delay to avoid early transients
    const window = tail.slice(64, 192);
    return derivEnergy(window);
  }

  it('increasing low-pass coefficient reduces high-frequency energy in the tail', () => {
    const eBypass = tailDerivativeEnergy(0.0);    // bypass (use prev directly)
    const eMild   = tailDerivativeEnergy(0.25);
    const eStrong = tailDerivativeEnergy(0.8);
    // Expect monotonic-ish reduction
    expect(eMild).toBeLessThan(eBypass);
    expect(eStrong).toBeLessThan(eMild);
  });
});

