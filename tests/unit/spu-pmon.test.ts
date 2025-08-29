import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }

function makePCM(pattern: (i: number) => number, n: number): Int16Array {
  const a = new Int16Array(n);
  for (let i=0;i<n;i++) a[i] = pattern(i);
  return a;
}

describe('SPU pitch modulation (PMON) basic effect', () => {
  it('enabling PMON for voice1 (modulated by voice0) alters voice1 output', () => {
    const mk = (enablePMON: boolean) => {
      const spu = new SPU();
      spu.setMasterVolume(0x3fff, 0x3fff);
      // Voice0: fast square (+32767/-32768 alternating) as modulator
      const mod = makePCM(i => (i & 1) ? -32768 : 32767, 4096);
      spu.setVoiceVolume(0, 0x3fff, 0x3fff);
      spu.enqueuePCM(0, mod);
      spu.setVoiceADSR(0, 0, 0, 1.0, 0);
      spu.setVoiceKeyOn(0, true);

      // Voice1: linear ramp carrier, so sample index matters
      const carr = makePCM(i => (i % 1024), 8192);
      spu.setVoiceVolume(1, 0x3fff, 0x3fff);
      spu.enqueuePCM(1, carr);
      spu.setVoiceADSR(1, 0, 0, 1.0, 0);
      spu.setVoiceKeyOn(1, true);

      // Normal pitch
      write16(spu, SPU_BASE + (1<<4) + 0x04, 0x1000); // voice1 pitch normal

      if (enablePMON) {
        // Enable PMON for voice1 (bit1 set in 0x1f801d90)
        write16(spu, SPU_BASE + 0x190, 0x0002);
      }
      // Mix some frames; collect only left channel
      const out = spu.mix(128);
      const left: number[] = [];
      for (let i=0;i<128;i++) left.push(out[i*2]);
      return left;
    };

    const off = mk(false);
    const on = mk(true);

    // Sequences should differ when PMON is enabled
    let diff = 0;
    for (let i=0;i<off.length;i++) diff += Math.abs(on[i] - off[i]);
    expect(diff).toBeGreaterThan(1e-6);
  });
});

