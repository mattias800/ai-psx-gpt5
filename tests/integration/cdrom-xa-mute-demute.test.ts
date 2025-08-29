import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Test MUTE/DEMUTE commands gating XA routing to SPU.

describe('CDROM XA MUTE/DEMUTE', () => {
  function makeXA(): DiscSource {
    return {
      readSector2352(lba: number): Uint8Array {
        const raw = new Uint8Array(2352);
        raw[15] = 0x02; // mode 2
        raw[18] = 0x00; // coding mono
        raw[19] = 0x20; // audio
        const userOff = 24;
        const frames = 2048 / 16;
        for (let i = 0; i < frames; i++) {
          const off = userOff + i * 16;
          raw[off + 0] = 0x00; raw[off + 1] = 0x00;
          for (let j = 2; j < 16; j++) raw[off + j] = 0x33; // decent amplitude
        }
        return raw;
      },
    };
  }

  it('MUTE silences XA routing and DEMUTE restores audio', () => {
    const psx = new PSXSystem();
    psx.attachDisc(makeXA());

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Enable XA mode, issue MUTE before reading
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x20); // XA enable
    psx.as.write8(REG1, 0x0e);
    psx.as.write8(REG1, 0x0f); // MUTE

    // Start reading
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x06); // READN
    psx.stepCycles(15000);

    // Mix should be silent
    const mixMuted = (psx as any).spu.mix(128) as Float32Array;
    let sumMuted = 0;
    for (let i = 0; i < mixMuted.length; i++) sumMuted += Math.abs(mixMuted[i]);
    expect(sumMuted).toBe(0);

    // DEMUTE and allow next sector
    psx.as.write8(REG1, 0x10);
    psx.stepCycles(15000);

    const mixOn = (psx as any).spu.mix(128) as Float32Array;
    let sumOn = 0;
    for (let i = 0; i < mixOn.length; i++) sumOn += Math.abs(mixOn[i]);
    expect(sumOn).toBeGreaterThan(0);
  });
});

