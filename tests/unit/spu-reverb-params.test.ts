import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }
function read16(spu: SPU, addr: number) { return spu.read16(addr >>> 0) & 0xffff; }
function makeConstPCM(n: number, amp=32767): Int16Array { return Int16Array.from(new Array(n).fill(amp|0)); }

function energy(slice: number[]) { return slice.reduce((a,b)=>a + Math.abs(b), 0); }

function mixLeft(spu: SPU, n: number): number[] { const out = spu.mix(n); const L: number[] = []; for (let i=0;i<n;i++) L.push(out[i*2]); return L; }

describe('SPU reverb parameter MMIO (delay/feedback/send/size)', () => {
  it('delay affects when echo appears', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu.enqueuePCM(0, makeConstPCM(2048, 20000));
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);

    // Reverb enabled and return audible
    write16(spu, SPU_BASE + 0x184, 0x2000);
    write16(spu, SPU_BASE + 0x186, 0x2000);
    write16(spu, SPU_BASE + 0x198, 0x0001);

    // Small delay
    write16(spu, SPU_BASE + 0x1c0, 0x0020); // 32 frames delay
    const small = mixLeft(spu, 200);

    // Reset and large delay
    const spu2 = new SPU();
    spu2.setMasterVolume(0x3fff, 0x3fff);
    spu2.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu2.enqueuePCM(0, makeConstPCM(2048, 20000));
    spu2.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu2.setVoiceKeyOn(0, true);
    write16(spu2, SPU_BASE + 0x184, 0x2000);
    write16(spu2, SPU_BASE + 0x186, 0x2000);
    write16(spu2, SPU_BASE + 0x198, 0x0001);
    write16(spu2, SPU_BASE + 0x1c0, 0x0100); // 256 frames delay
    const large = mixLeft(spu2, 200);

    // Compare early window: small delay should have more echo energy than large
    const eSmall = energy(small.slice(64, 96));
    const eLarge = energy(large.slice(64, 96));
    expect(eSmall).toBeGreaterThan(eLarge);
  });

  it('feedback increases tail energy', () => {
    const mk = (fbVal: number) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, makeConstPCM(1024, 20000));
      spu.setVoiceADSR(0, 0, 0, 1.0, 0);
      spu.setVoiceKeyOn(0, true);
      write16(spu, SPU_BASE + 0x184, 0x2000);
      write16(spu, SPU_BASE + 0x186, 0x2000);
      write16(spu, SPU_BASE + 0x198, 0x0001);
      write16(spu, SPU_BASE + 0x1c0, 0x0040); // delay 64
      write16(spu, SPU_BASE + 0x1c2, fbVal);  // feedback
      const out = mixLeft(spu, 256);
      return energy(out.slice(192, 256));
    };
    const low = mk(0x0800);
    const high = mk(0x3000);
    expect(high).toBeGreaterThan(low);
  });

  it('send gain increases early echo magnitude', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu.enqueuePCM(0, makeConstPCM(2048, 20000));
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);
    write16(spu, SPU_BASE + 0x184, 0x2000);
    write16(spu, SPU_BASE + 0x186, 0x2000);
    write16(spu, SPU_BASE + 0x198, 0x0001);
    write16(spu, SPU_BASE + 0x1c0, 0x0030); // delay 48

    write16(spu, SPU_BASE + 0x1c4, 0x0800); // low send
    const low = mixLeft(spu, 128);

    const spu2 = new SPU();
    spu2.setMasterVolume(0x3fff, 0x3fff);
    spu2.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu2.enqueuePCM(0, makeConstPCM(2048, 20000));
    spu2.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu2.setVoiceKeyOn(0, true);
    write16(spu2, SPU_BASE + 0x184, 0x2000);
    write16(spu2, SPU_BASE + 0x186, 0x2000);
    write16(spu2, SPU_BASE + 0x198, 0x0001);
    write16(spu2, SPU_BASE + 0x1c0, 0x0030);
    write16(spu2, SPU_BASE + 0x1c4, 0x3000); // high send
    const high = mixLeft(spu2, 128);

    const eLow = energy(low.slice(64, 80));
    const eHigh = energy(high.slice(64, 80));
    expect(eHigh).toBeGreaterThan(eLow);
  });

  it('size change re-initializes reverb ring', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    spu.enqueuePCM(0, makeConstPCM(4096, 20000));
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);
    write16(spu, SPU_BASE + 0x184, 0x2000);
    write16(spu, SPU_BASE + 0x186, 0x2000);
    write16(spu, SPU_BASE + 0x198, 0x0001);
    write16(spu, SPU_BASE + 0x1c0, 0x0020);
    mixLeft(spu, 100); // build some tail
    const before = mixLeft(spu, 8);
    // change size -> ring resets; immediate frames should differ from continuing echo
    write16(spu, SPU_BASE + 0x1c6, 0x0800); // request size ~2048
    const after = mixLeft(spu, 8);
    let diff = 0; for (let i=0;i<8;i++) diff += Math.abs(after[i] - before[i]);
    expect(diff).toBeGreaterThan(0);
  });
});

