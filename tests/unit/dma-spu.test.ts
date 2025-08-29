import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function approx(a: number, b: number, eps = 2e-2) {
  expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

describe('DMAC SPU DMA (ch4) -> SPU RAM -> voice load + scheduler mixing', () => {
  it('completes after scheduled cycles and mixes audio loaded from SPU RAM', () => {
    const psx = new PSXSystem();
    // Configure async DMA timing: cycles per halfword (for SPU)
    psx.attachDMATiming({ cyclesPerWord: 4 });

    const v = psx.spu;
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoicePitch(0, 1 << 16);
    v.setVoiceKeyOn(0, true);

    const as = psx.as;
    const halfwords = 16;
    const srcBase = 0x300;
    // Prepare 16 PCM16 samples at 0x7fff in system RAM
    for (let i = 0; i < halfwords; i++) write16(as, srcBase + i * 2, 0x7fff);

    // Set SPU RAM transfer address to units-of-8 bytes (choose 0x20 -> 0x80 bytes)
    const SPU_XFER = 0x1f801da6;
    const dstUnits = 0x20;
    write16(as, SPU_XFER, dstUnits);

    // Program SPU DMA ch4: from mem, block mode, start
    const CH4_MADR = 0x1f8010c0, CH4_BCR = 0x1f8010c4, CH4_CHCR = 0x1f8010c8;
    write32(as, CH4_MADR, srcBase >>> 0);
    write32(as, CH4_BCR, halfwords >>> 0);
    write32(as, CH4_CHCR, (1 << 0) | (0 << 1) | (0 << 9) | (1 << 24));

    // Before enough cycles, SPU RAM not fully written
    psx.stepCycles(halfwords * 4 - 4);

    // Finish DMA cycles
    psx.stepCycles(4);

    // Load from SPU RAM into voice 0
    v.loadPCMFromRAM(0, dstUnits, halfwords, true);

    // Configure audio mixing schedule and advance one tick
    const chunk = 8;
    psx.attachSPUAudio({ sampleRate: 44100, chunkFrames: chunk });
    // cyclesPerFrame = 33868800/44100 = 768; chunk=8 -> 6144 cycles
    psx.stepCycles(768 * chunk);

    // Ring should have frames, samples ~1.0
    const frames = v.pullStereo(chunk);
    expect(frames.length).toBe(chunk * 2);
    for (let i = 0; i < frames.length; i += 2) {
      approx(frames[i], 1.0);
      approx(frames[i + 1], 1.0);
    }
  });
});
