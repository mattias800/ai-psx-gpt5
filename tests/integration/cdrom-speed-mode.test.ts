import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Compare 1x vs 2x double-speed sector pacing via SETMODE bit 0x80.
// After same cycles, 2x should accumulate more data in FIFO.

describe('CDROM double-speed timing', () => {
  function countDrain(psx: PSXSystem): number {
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;
    let count = 0;
    for (let i = 0; i < 50000; i++) {
      // Check data FIFO not empty via status bit 0x10 using index=1
      psx.as.write8(IDX, 0x01);
      const st = psx.as.read8(REG1) & 0xff;
      if ((st & 0x10) === 0) break;
      // Pop one byte via index=0
      psx.as.write8(IDX, 0x00);
      void psx.as.read8(REG2);
      count++;
    }
    return count;
  }

  it('2x mode (SETMODE bit 0x80) yields more bytes than 1x after equal cycles', () => {
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    const psx1x = new PSXSystem();
    // 1x: SETMODE = 0x00
    psx1x.as.write8(IDX, 0x00);
    psx1x.as.write8(REG2, 0x00);
    psx1x.as.write8(REG1, 0x0e); // SETMODE
    // Set LBA and READN
    psx1x.as.write8(REG2, 0x00); psx1x.as.write8(REG2, 0x00); psx1x.as.write8(REG2, 0x00);
    psx1x.as.write8(REG1, 0x19);
    psx1x.as.write8(REG1, 0x1b);
    psx1x.stepCycles(30000);
    psx1x.as.write8(REG1, 0x06);

    const psx2x = new PSXSystem();
    // 2x: SETMODE = 0x80
    psx2x.as.write8(IDX, 0x00);
    psx2x.as.write8(REG2, 0x80);
    psx2x.as.write8(REG1, 0x0e);
    // Set LBA and READN
    psx2x.as.write8(REG2, 0x00); psx2x.as.write8(REG2, 0x00); psx2x.as.write8(REG2, 0x00);
    psx2x.as.write8(REG1, 0x19);
    psx2x.as.write8(REG1, 0x1b);
    psx2x.stepCycles(30000);
    psx2x.as.write8(REG1, 0x06);

    // Advance same cycles to accumulate sectors
    const advance = 25000;
    psx1x.stepCycles(advance);
    psx2x.stepCycles(advance);

    const n1x = countDrain(psx1x);
    const n2x = countDrain(psx2x);

    // 2x should be noticeably larger; with our scheduling it's ~5 sectors vs ~3 sectors.
    expect(n2x).toBeGreaterThan(n1x);
    expect(n2x).toBeGreaterThan(Math.floor(n1x * 3 / 2));
  });
});

