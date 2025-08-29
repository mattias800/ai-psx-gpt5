import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function makePCM(n: number, amp=32767): Int16Array { return Int16Array.from(new Array(n).fill(amp|0)); }

function mixN(spu: SPU, n: number): number[] {
  const out = spu.mix(n);
  const left: number[] = [];
  for (let i=0;i<n;i++) left.push(out[i*2]);
  return left;
}

describe('SPU state: consistency across serialize/deserialize with reverb, noise, PMON', () => {
  it('produces identical output after restoring mid-tail', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);

    // Voice0: noise modulator
    write16(spu, SPU_BASE + 0x194, 0x0001); // noise on v0
    write16(spu, SPU_BASE + 0x1aa, (12<<2)); // noise freq mid
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu.setVoiceKeyOn(0, true);

    // Voice1: PCM carrier with PMON
    const carr = makePCM(4096, 20000);
    spu.setVoiceVolume(1, 0x3fff, 0x3fff);
    spu.enqueuePCM(1, carr);
    spu.setVoiceADSR(1, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(1, true);
    // Normal pitch
    write16(spu, SPU_BASE + (1<<4) + 0x04, 0x1000);
    // Enable PMON for voice1
    write16(spu, SPU_BASE + 0x190, 0x0002);

    // Reverb on both voices
    write16(spu, SPU_BASE + 0x184, 0x2000);
    write16(spu, SPU_BASE + 0x186, 0x2000);
    write16(spu, SPU_BASE + 0x198, 0x0003);

    // Pre-fill some frames to start reverb tail
    mixN(spu, 200);

    // Snapshot
    const snap = spu.serialize();
    // Produce a reference tail
    const ref = mixN(spu, 128);

    // Restore and re-produce
    const spu2 = new SPU();
    spu2.deserialize(snap);
    const test = mixN(spu2, 128);

    expect(test.length).toBe(ref.length);
    for (let i=0;i<ref.length;i++) expect(test[i]).toBeCloseTo(ref[i], 1e-6);
  });
});

