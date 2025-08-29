import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify XA stereo routing using coding info stereo bit (subheader[2] -> raw[18] bit0).
// Ensures both channels produce non-zero and differ due to different nibble patterns per frame.

describe('CDROM XA stereo decode -> SPU left/right', () => {
  it('produces non-zero and different L/R channel energy', () => {
    const psx = new PSXSystem();

    // Build a DiscSource with Mode 2, submode audio bit set, coding info stereo bit set.
    const disc: DiscSource = {
      readSector2352(lba: number): Uint8Array {
        const raw = new Uint8Array(2352);
        raw[15] = 0x02; // mode 2
        raw[18] = 0x01; // coding info: stereo bit0
        raw[19] = 0x20; // submode: audio flag
        // Fill user data (2048 bytes) with 16-byte ADPCM frames
        const userOff = 24;
        const frames = 2048 / 16;
        for (let i = 0; i < frames; i++) {
          const off = userOff + i * 16;
          // header: filter=0, shift=0 => 0x00; flags=0
          raw[off + 0] = 0x00;
          raw[off + 1] = 0x00;
          // data nibbles: even frames use 0x11 pattern, odd frames use 0xEE pattern
          const val = (i & 1) === 0 ? 0x11 : 0xee;
          for (let j = 2; j < 16; j++) raw[off + j] = val;
        }
        return raw;
      },
    };
    psx.attachDisc(disc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Enable XA mode (bit 0x20)
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

    // Mix a chunk and compute per-channel energy
    const out = (psx as any).spu.mix(128) as Float32Array;
    let sumL = 0, sumR = 0;
    for (let i = 0; i < out.length; i += 2) {
      sumL += Math.abs(out[i]);
      sumR += Math.abs(out[i + 1]);
    }
    expect(sumL).toBeGreaterThan(0);
    expect(sumR).toBeGreaterThan(0);
    // With different nibble patterns per channel, energies should differ
    expect(Math.abs(sumL - sumR)).toBeGreaterThan(1e-6);
  });
});

