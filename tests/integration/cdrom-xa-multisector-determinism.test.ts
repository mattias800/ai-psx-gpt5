import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Deterministic XA multi-sector: two independent systems with same disc and steps produce identical mix output.

describe('CDROM XA multi-sector determinism', () => {
  const makeDisc = (): DiscSource => ({
    readSector2352(lba: number): Uint8Array {
      const raw = new Uint8Array(2352);
      raw[15] = 0x02; // mode 2
      raw[18] = 0x00; // coding: mono, low rate
      raw[19] = 0x20; // submode audio
      const userOff = 24;
      const frames = 2048 / 16;
      for (let i = 0; i < frames; i++) {
        const off = userOff + i * 16;
        raw[off + 0] = 0x00;
        raw[off + 1] = 0x00;
        // vary nibble pattern with frame and lba for diversity
        const val = ((i + (lba & 7)) & 1) === 0 ? 0x22 : 0xdd;
        for (let j = 2; j < 16; j++) raw[off + j] = val;
      }
      return raw;
    },
  });

  const setupAndRun = () => {
    const psx = new PSXSystem();
    psx.attachDisc(makeDisc());
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
    // Step across multiple sector ticks
    psx.stepCycles(5 * 15000);
    // Mix fixed-size window
    const mix = (psx as any).spu.mix(2048) as Float32Array;
    return mix;
  };

  it('two runs match exactly (bitwise) for the mix buffer', () => {
    const a = setupAndRun();
    const b = setupAndRun();
    expect(a.length).toBe(b.length);
    for (let i = 0; i < a.length; i++) {
      expect(Object.is(a[i], b[i])).toBe(true);
    }
  });
});

