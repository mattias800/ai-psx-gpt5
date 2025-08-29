import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function mixLeft(spu: SPU, n: number): number[] { const out = spu.mix(n); const L: number[] = []; for (let i=0;i<n;i++) L.push(out[i*2]); return L; }

function approx(a: number, b: number, eps = 1e-5) { expect(Math.abs(a - b)).toBeLessThanOrEqual(eps); }

describe('SPU snapshot: reverb LP filter state continuity', () => {
  it('restores identical output mid-tail with non-zero LP coefficient', () => {
    const s1 = new SPU();
    s1.setMasterVolume(0x3fff, 0x3fff);
    s1.setVoiceVolume(0, 0x3fff, 0x3fff);

    // Noise excitation
    write16(s1, SPU_BASE + 0x194, 0x0001);
    write16(s1, SPU_BASE + 0x1aa, (10<<2));
    s1.setVoiceADSR(0, 0, 0, 1.0, 0);
    s1.setVoiceKeyOn(0, true);

    // Reverb + LP filter configured
    write16(s1, SPU_BASE + 0x184, 0x3000);
    write16(s1, SPU_BASE + 0x186, 0x3000);
    write16(s1, SPU_BASE + 0x198, 0x0001);
    write16(s1, SPU_BASE + 0x1c0, 0x0020);
    write16(s1, SPU_BASE + 0x1c2, 0x2800);
    write16(s1, SPU_BASE + 0x1c4, 0x3fff);
    write16(s1, SPU_BASE + 0x1c8, 0x3000); // non-zero LP

    // Warm up and start tail
    mixLeft(s1, 256);
    // Stop sending energy
    write16(s1, SPU_BASE + 0x198, 0x0000);
    s1.setVoiceKeyOn(0, false);

    // Snapshot
    const snap = s1.serialize();

    // Reference tail window from original
    const ref = mixLeft(s1, 128);

    // Restore and reproduce
    const s2 = new SPU();
    s2.deserialize(snap);
    const out = mixLeft(s2, 128);

    expect(out.length).toBe(ref.length);
    for (let i=0;i<ref.length;i++) approx(out[i], ref[i], 1e-4);
  });
});

