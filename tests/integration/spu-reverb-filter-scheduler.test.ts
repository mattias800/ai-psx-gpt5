import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { PSX_CLOCK } from '@ai-psx/shared';

const SPU_BASE = 0x1f801c00;

function write16(spuOrAs: any, addr: number, v: number) {
  // Works with either SPU or AddressSpace wrapper via PSXSystem
  if (typeof spuOrAs.write16 === 'function' && spuOrAs.write16.length >= 2) {
    spuOrAs.write16(addr >>> 0, v & 0xffff);
  } else {
    throw new Error('write16 requires a write-capable object');
  }
}

function derivEnergy(xs: number[]): number {
  let e = 0; for (let i=1;i<xs.length;i++){ const d = xs[i]-xs[i-1]; e += Math.abs(d);} return e;
}

describe('SPU reverb LP filter with scheduler (ring-based mixing)', () => {
  function measureTailDerivativeEnergy(lpCoeff01: number): number {
    const psx = new PSXSystem();
    const chunk = 32;
    psx.attachSPUAudio({ sampleRate: 44100, chunkFrames: chunk });

    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);

    // Enable noise on voice 0 as excitation
    write16(psx.iohub, SPU_BASE + 0x194, 0x0001);
    // mid noise frequency
    write16(psx.iohub, SPU_BASE + 0x1aa, (12<<2));
    v.setVoiceADSR(0, 0, 0, 1.0, 0);
    v.setVoiceKeyOn(0, true);

    // Reverb enabled and configured
    write16(psx.iohub, SPU_BASE + 0x184, 0x3000); // RVB_VOLL
    write16(psx.iohub, SPU_BASE + 0x186, 0x3000); // RVB_VOLR
    write16(psx.iohub, SPU_BASE + 0x198, 0x0001); // RVB_ON v0
    write16(psx.iohub, SPU_BASE + 0x1c0, 0x0020); // delay 32
    write16(psx.iohub, SPU_BASE + 0x1c2, 0x3000); // feedback high
    write16(psx.iohub, SPU_BASE + 0x1c4, 0x3fff); // send max
    write16(psx.iohub, SPU_BASE + 0x1c8, Math.floor(Math.max(0,Math.min(1,lpCoeff01)) * 0x3fff));

    // Warm-up: step ~256 frames
    const cyclesPerFrame = Math.floor(PSX_CLOCK / 44100);
    psx.stepCycles(cyclesPerFrame * 256);

    // Drain any built-up frames so tail window is clean
    v.pullStereo(v.availableFrames());

    // Stop sending new energy
    write16(psx.iohub, SPU_BASE + 0x198, 0x0000); // RVB_OFF
    v.setVoiceKeyOn(0, false);

    // Generate tail frames
    psx.stepCycles(cyclesPerFrame * 256);
    const frames = v.pullStereo(v.availableFrames());
    if (frames.length < 2) return 0;
    const n = Math.floor(frames.length / 2);
    const left: number[] = [];
    for (let i=0;i<n;i++) left.push(frames[i*2]);
    // Use middle window to avoid any boundary artifacts
    const start = Math.max(0, Math.floor(n * 0.25));
    const end = Math.min(n, Math.floor(n * 0.9));
    const window = left.slice(start, end);
    return derivEnergy(window);
  }

  it('higher 0x1c8 coefficient reduces high-frequency tail energy under scheduler', () => {
    const eBypass = measureTailDerivativeEnergy(0.0);
    const eMild   = measureTailDerivativeEnergy(0.3);
    const eStrong = measureTailDerivativeEnergy(0.8);
    expect(eMild).toBeLessThan(eBypass);
    expect(eStrong).toBeLessThan(eMild);
  });
});

