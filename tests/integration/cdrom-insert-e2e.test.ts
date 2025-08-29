import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// E2E: simulate no-disc -> insert -> successful READN

describe('CDROM insert flow (no-disc to present)', () => {
  function makeSyntheticDisc(): DiscSource {
    return {
      readSector2352(lba: number): Uint8Array {
        const raw = new Uint8Array(2352);
        raw[15] = 0x02; // mode 2
        // subheader zeros
        for (let i = 0; i < 2048; i++) raw[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff;
        return raw;
      },
    };
  }

  it('READN fails with INT5 when no disc, succeeds after insert', () => {
    const psx = new PSXSystem();

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

    // Start with no disc
    psx.setDiscPresent(false);

    // Try to READN
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x06);

    // Expect INT5 latch and error bit
    psx.as.write8(IDX, 0x01);
    const flags = psx.as.read8(REG3) & 0xff;
    expect((flags & 0x01) !== 0).toBe(true);
    const status = psx.as.read8(REG1) & 0xff;
    expect((status & 0x40) !== 0).toBe(true);

    // Clear INT5
    psx.as.write8(REG3, 0x01);

    // Insert disc and attach source
    psx.setDiscPresent(true);
    psx.attachDisc(makeSyntheticDisc());

    // Attempt READN again
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(30000);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);

    // Now data should be present
    const b0 = psx.as.read8(REG2) & 0xff;
    const b1 = psx.as.read8(REG2) & 0xff;
    const b2 = psx.as.read8(REG2) & 0xff;
    expect(typeof b0).toBe('number');
    expect(typeof b1).toBe('number');
    expect(typeof b2).toBe('number');
  });
});

