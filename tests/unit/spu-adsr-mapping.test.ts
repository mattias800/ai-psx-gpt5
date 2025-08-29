import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function makeConstantPCM(len: number, amp: number = 32767): Int16Array {
  return Int16Array.from(new Array(len).fill(amp|0));
}

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

// Base addresses
const SPU_BASE = 0x1f801c00;
const VOICE0 = SPU_BASE + 0x00;

describe('SPU ADSR bitfield mapping and modes', () => {
  it('attack mode: exponential rises more slowly than linear for same rate', () => {
    // linear attack
    const spuLin = new SPU();
    spuLin.setMasterVolume(0x3fff, 0x3fff);
    spuLin.setVoiceVolume(0, 0x3fff, 0x3fff);
    spuLin.enqueuePCM(0, makeConstantPCM(256));
    // ADSR1: AM=0 (linear), AR=16, DR=0, SR=0
    const ADSR1_lin = (0<<15) | (16<<10) | (0<<4) | 0;
    // ADSR2: RM=0, RR=0, SL=31 (1.0), SM=0 (linear sustain)
    const ADSR2_lin = (0<<15) | (0<<10) | (0<<5) | 31;
    write16(spuLin, VOICE0 + 0x08, ADSR1_lin);
    write16(spuLin, VOICE0 + 0x0a, ADSR2_lin);
    spuLin.setVoiceKeyOn(0, true);
    const outLin = spuLin.mix(20);
    const aLin = Math.abs(outLin[19*2]);

    // exponential attack
    const spuExp = new SPU();
    spuExp.setMasterVolume(0x3fff, 0x3fff);
    spuExp.setVoiceVolume(0, 0x3fff, 0x3fff);
    spuExp.enqueuePCM(0, makeConstantPCM(256));
    const ADSR1_exp = (1<<15) | (16<<10) | (0<<4) | 0;
    const ADSR2_exp = (0<<15) | (0<<10) | (0<<5) | 31;
    write16(spuExp, VOICE0 + 0x08, ADSR1_exp);
    write16(spuExp, VOICE0 + 0x0a, ADSR2_exp);
    spuExp.setVoiceKeyOn(0, true);
    const outExp = spuExp.mix(20);
    const aExp = Math.abs(outExp[19*2]);

    expect(aExp).toBeLessThan(aLin);
  });

  it('release mode: exponential retains more tail than linear for same rate window', () => {
    // First reach near-peak, then key off and compare at a later time.
    const mk = (rmExp: boolean) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, makeConstantPCM(512));
      const AR = 31; const DR = 0; const SR = 0; const SL = 31; const RR = 16;
      const ADSR1 = (0<<15) | (AR<<10) | (DR<<4) | SR;
      const ADSR2 = ((rmExp?1:0)<<10) | (RR<<5) | SL; // SM=0
      write16(spu, VOICE0 + 0x08, ADSR1);
      write16(spu, VOICE0 + 0x0a, ADSR2);
      spu.setVoiceKeyOn(0, true);
      // mix to reach high level
      spu.mix(40);
      // key off and capture tail
      spu.setVoiceKeyOn(0, false);
      const tail = spu.mix(50);
      return Math.abs(tail[49*2]);
    };
    const tailLin = mk(false);
    const tailExp = mk(true);
    expect(tailExp).toBeGreaterThanOrEqual(tailLin);
  });

  it('sustain: sustain level and mode affect drift speed toward new target', () => {
    const spuLin = new SPU();
    spuLin.setMasterVolume(0x3fff, 0x3fff);
    spuLin.setVoiceVolume(0, 0x3fff, 0x3fff);
    spuLin.enqueuePCM(0, makeConstantPCM(512));
    // Quick attack to 1.0, decay to 0.6 sustain, SR=8 (moderate), SM=0 (linear)
    const ADSR1 = (0<<15) | (31<<10) | (15<<4) | 8;
    const ADSR2_lin = (0<<15) | (0<<10) | (0<<5) | 19; // SL=19 (~0.6129)
    write16(spuLin, VOICE0 + 0x08, ADSR1);
    write16(spuLin, VOICE0 + 0x0a, ADSR2_lin);
    spuLin.setVoiceKeyOn(0, true);
    // reach sustain
    spuLin.mix(80);
    // Now change sustain level lower and compare drift after N frames for linear vs exp
    const ADSR2_new_lin = (0<<15) | (0<<10) | (0<<5) | 8; // SL=8 (~0.258)
    write16(spuLin, VOICE0 + 0x0a, ADSR2_new_lin);
    const beforeLin = Math.abs(spuLin.mix(1)[0]);
    const afterLin = Math.abs(spuLin.mix(10)[9*2]);

    const spuExp = new SPU();
    spuExp.setMasterVolume(0x3fff, 0x3fff);
    spuExp.setVoiceVolume(0, 0x3fff, 0x3fff);
    spuExp.enqueuePCM(0, makeConstantPCM(512));
    write16(spuExp, VOICE0 + 0x08, ADSR1);
    // SM=1 (exp)
    const ADSR2_exp = (1<<15) | (0<<10) | (0<<5) | 19;
    write16(spuExp, VOICE0 + 0x0a, ADSR2_exp);
    spuExp.setVoiceKeyOn(0, true);
    spuExp.mix(80);
    const ADSR2_new_exp = (1<<15) | (0<<10) | (0<<5) | 8;
    write16(spuExp, VOICE0 + 0x0a, ADSR2_new_exp);
    const beforeExp = Math.abs(spuExp.mix(1)[0]);
    const afterExp = Math.abs(spuExp.mix(10)[9*2]);

    // Linear should move more per same window than exponential
    const dLin = beforeLin - afterLin;
    const dExp = beforeExp - afterExp;
    expect(dLin).toBeGreaterThanOrEqual(dExp);
  });
});

