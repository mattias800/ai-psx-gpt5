import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;
const VOICE0 = SPU_BASE + 0x00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function mixAbs(spu: SPU, frames: number): number[] {
  const out = spu.mix(frames);
  const arr: number[] = [];
  for (let i=0;i<frames;i++) arr.push(Math.abs(out[i*2]));
  return arr;
}

describe('SPU noise generator', () => {
  it('noise off is silent when no PCM/stream', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    // key on but no buffer, no noise
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);
    const a = mixAbs(spu, 8);
    expect(a.every(x => x === 0)).toBe(true);
  });

  it('enabling noise via MMIO produces non-zero output with variation', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    // Enable noise for voice 0: write to 0x1f801d94
    write16(spu, SPU_BASE + 0x194, 0x0001);
    // Set CTRL noise frequency to a mid value
    write16(spu, SPU_BASE + 0x1aa, (16<<2));
    // Instant full envelope
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);
    const a = mixAbs(spu, 64);
    const nonZero = a.some(x => x > 0);
    const distinct = new Set(a.map(x => x.toFixed(3))).size;
    expect(nonZero).toBe(true);
    expect(distinct).toBeGreaterThan(4);
  });

  it('noise respects ADSR release', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    write16(spu, SPU_BASE + 0x194, 0x0001);
    write16(spu, SPU_BASE + 0x1aa, (8<<2));
    // Quick attack then release
    spu.setVoiceADSR(0, 1, 0, 1.0, 8);
    spu.setVoiceKeyOn(0, true);
    // reach high amplitude
    spu.mix(10);
    // capture level then key off
    const before = Math.abs(spu.mix(1)[0]);
    spu.setVoiceKeyOn(0, false);
    const after = Math.abs(spu.mix(30)[29*2]);
    expect(after).toBeLessThan(before);
  });
});

