import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscTOC } from '@ai-psx/core';

// Verify GETQ reports track/control based on an attached TOC.

describe('CDROM GETQ with TOC', () => {
  it('reports track=2 and control=0x04 when LBA at start of track 2', () => {
    const psx = new PSXSystem();
    const toc: DiscTOC = {
      tracks: [
        { track: 1, startLBA: 0, control: 0x04 },
        { track: 2, startLBA: 60 * 75, control: 0x04 }, // 1:00:00
      ],
    };
    psx.attachDiscTOC(toc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // SETLOC to 01:00:00 (LBA=4500), SEEKL
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x01);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG2, 0x00);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(30000);

    // Flush any pending responses before GETQ
    psx.as.write8(IDX, 0x01);
    for (let i = 0; i < 8; i++) {
      const st = psx.as.read8(REG1) & 0xff;
      if ((st & 0x08) === 0) break;
      psx.as.write8(IDX, 0x00);
      void psx.as.read8(REG1);
      psx.as.write8(IDX, 0x01);
    }

    // Issue GETQ
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x15);
    // status + 9 bytes
    const _status = psx.as.read8(REG1) & 0xff;
    const resp: number[] = [];
    for (let i = 0; i < 9; i++) resp.push(psx.as.read8(REG1) & 0xff);

    const track = resp[3] & 0xff;
    const index = resp[4] & 0xff;
    const control = resp[5] & 0xff;
    expect(track).toBe(2);
    expect(index).toBe(1);
    expect(control).toBe(0x04);
  });
});

