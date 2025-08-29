import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;
const VOICE0 = SPU_BASE + 0x00;
function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function makeConstantPCM(n: number, amp=32767): Int16Array { return Int16Array.from(new Array(n).fill(amp|0)); }

function timeToReach(spu: SPU, target: number, maxFrames: number): number {
  for (let i = 1; i <= maxFrames; i++) {
    const out = spu.mix(1);
    const a = Math.abs(out[0]);
    if (a >= target) return i;
  }
  return maxFrames;
}

function timeToFallBelow(spu: SPU, threshold: number, maxFrames: number): number {
  for (let i = 1; i <= maxFrames; i++) {
    const out = spu.mix(1);
    const a = Math.abs(out[0]);
    if (a <= threshold) return i;
  }
  return maxFrames;
}

describe('SPU ADSR rate tables: monotonic behavior', () => {
  it('AR: higher attack rate reduces time to reach 0.9', () => {
    const mk = (AR: number) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, makeConstantPCM(4096));
      const ADSR1 = (0<<15) | ((AR&31)<<10) | (0<<4) | 0; // linear attack
      const ADSR2 = (0<<15) | (0<<10) | (0<<5) | 31;     // SL=1.0
      write16(spu, VOICE0 + 0x08, ADSR1);
      write16(spu, VOICE0 + 0x0a, ADSR2);
      spu.setVoiceKeyOn(0, true);
      return timeToReach(spu, 0.9, 5000);
    };
    const tSlow = mk(0);
    const tFast = mk(31);
    expect(tFast).toBeLessThan(tSlow);
  });

  it('DR: higher decay rate reduces time to fall from 1.0 to <= sustain', () => {
    const mk = (DR: number) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, makeConstantPCM(4096));
      const SL = 16; // ~0.516
      const ADSR1 = (0<<15) | (31<<10) | ((DR&15)<<4) | 0;
      const ADSR2 = (0<<15) | (0<<10) | (0<<5) | SL;
      write16(spu, VOICE0 + 0x08, ADSR1);
      write16(spu, VOICE0 + 0x0a, ADSR2);
      spu.setVoiceKeyOn(0, true);
      // reach near-peak
      spu.mix(200);
      // time to be within sustain +/- small epsilon
      return timeToFallBelow(spu, (SL/31)+1e-3, 5000);
    };
    const tSlow = mk(0);
    const tFast = mk(15);
    expect(tFast).toBeLessThan(tSlow);
  });

  it('RR: higher release rate reduces time to fall below 0.05 after key off', () => {
    const mk = (RR: number) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, makeConstantPCM(4096));
      const ADSR1 = (0<<15) | (31<<10) | (0<<4) | 0;
      const ADSR2 = (0<<15) | ((RR&31)<<5) | 31;
      write16(spu, VOICE0 + 0x08, ADSR1);
      write16(spu, VOICE0 + 0x0a, ADSR2);
      spu.setVoiceKeyOn(0, true);
      spu.mix(200);
      spu.setVoiceKeyOn(0, false);
      return timeToFallBelow(spu, 0.05, 5000);
    };
    const tSlow = mk(0);
    const tFast = mk(31);
    expect(tFast).toBeLessThan(tSlow);
  });

  it('SR=0 holds sustain; SR>0 drifts toward sustain', () => {
    const spu0 = new SPU();
    spu0.setMasterVolume(0x3fff, 0x3fff);
    spu0.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu0.enqueuePCM(0, makeConstantPCM(4096));
    // Set SL high, then change SL lower and compare drift with SR=0 vs SR=8
    const ADSR1_fast = (0<<15) | (31<<10) | (15<<4) | 0; // quick attack/decay
    const ADSR2_hi = (0<<15) | (0<<10) | (0<<5) | 28; // ~0.903
    write16(spu0, VOICE0 + 0x08, ADSR1_fast);
    write16(spu0, VOICE0 + 0x0a, ADSR2_hi);
    spu0.setVoiceKeyOn(0, true);
    // Ensure we enter sustain by mixing plenty of frames
    for (let i=0;i<5000;i++) { void spu0.mix(1); }
    const before0 = Math.abs(spu0.mix(1)[0]);
    // Change to low SL, SR=0 (no drift)
    const ADSR1_sr0 = (0<<15) | (31<<10) | (15<<4) | 0;
    const ADSR2_lo = (0<<15) | (0<<10) | (0<<5) | 8; // ~0.258
    write16(spu0, VOICE0 + 0x08, ADSR1_sr0);
    write16(spu0, VOICE0 + 0x0a, ADSR2_lo);
    const after0 = Math.abs(spu0.mix(20)[19*2]);
    expect(Math.abs(after0 - before0)).toBeLessThan(1e-3);

    const spu8 = new SPU();
    spu8.setMasterVolume(0x3fff, 0x3fff);
    spu8.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu8.enqueuePCM(0, makeConstantPCM(4096));
    write16(spu8, VOICE0 + 0x08, ADSR1_fast);
    write16(spu8, VOICE0 + 0x0a, ADSR2_hi);
    spu8.setVoiceKeyOn(0, true);
    for (let i=0;i<5000;i++) { void spu8.mix(1); }
    const before8 = Math.abs(spu8.mix(1)[0]);
    const ADSR1_sr8 = (0<<15) | (31<<10) | (15<<4) | 8; // SR=8
    write16(spu8, VOICE0 + 0x08, ADSR1_sr8);
    write16(spu8, VOICE0 + 0x0a, ADSR2_lo);
    const after8 = Math.abs(spu8.mix(20)[19*2]);
    expect(after8).toBeLessThan(before8);
  });
});

