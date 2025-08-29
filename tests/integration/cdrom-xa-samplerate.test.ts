import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify XA sample rate affects pitch/energy deterministically via coding info bit2.

describe('CDROM XA sample rate affects playback', () => {
  const makeDisc = (highRate: boolean): DiscSource => ({
    readSector2352(lba: number): Uint8Array {
      const raw = new Uint8Array(2352);
      raw[15] = 0x02; // mode 2
      let coding = 0x00; // mono
      if (highRate) coding |= 0x04; // our mapping: bit2 -> 37.8kHz
      raw[18] = coding;
      raw[19] = 0x20; // audio flag
      const userOff = 24;
      const frames = 2048 / 16;
      for (let i = 0; i < frames; i++) {
        const off = userOff + i * 16;
        raw[off + 0] = 0x00; // header
        raw[off + 1] = 0x00;
        for (let j = 2; j < 16; j++) raw[off + j] = 0x11; // consistent nibble pattern (non-zero)
      }
      return raw;
    },
  });

  const runOnce = (highRate: boolean) => {
    const psx = new PSXSystem();
    psx.attachDisc(makeDisc(highRate));
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;
    // Enable XA mode
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x20);
    psx.as.write8(REG1, 0x0e);
    // LBA=2, SEEKL, READN
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(15000);
    const out = (psx as any).spu.mix(1024) as Float32Array;
    const voices = (psx as any).spu['voices'];
    const step = voices ? (voices[23]?.stepFP >>> 0) : 0;
    return { out, step };
  };

  it('different coding info bit2 leads to different pitch setting', () => {
    const low = runOnce(false);
    const high = runOnce(true);
    // Ensure we have audible content
    let sum = 0;
    for (let i = 0; i < low.out.length; i++) sum += Math.abs(low.out[i]);
    expect(sum).toBeGreaterThan(0);
    // Verify pitch (stepFP) differs
    expect(low.step).not.toBe(high.step);
  });
});

