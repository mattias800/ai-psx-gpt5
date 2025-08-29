import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscTOC } from '@ai-psx/core';

// Verify GETQ returns index=0 for 150-sector pregap before a track start (when TOC is attached).

describe('CDROM GETQ pregap index', () => {
  it('reports index=0 within 2s pregap before track 2 start', () => {
    const psx = new PSXSystem();

    const toc: DiscTOC = {
      tracks: [
        { track: 1, startLBA: 0, control: 0x04 },
        { track: 2, startLBA: 60 * 75, control: 0x04 }, // 1:00:00
      ],
    };
    psx.attachDiscTOC(toc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Select LBA at exactly 150 sectors before track 2 start: 4500 - 150 = 4350 => 00:58:00
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); // mm
    psx.as.write8(REG2, 58);   // ss
    psx.as.write8(REG2, 0);    // ff
    psx.as.write8(REG1, 0x19); // SETLOC
    psx.as.write8(REG1, 0x1b); // SEEKL
    psx.stepCycles(30000);

    // Flush pending responses
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
    const _status = psx.as.read8(REG1) & 0xff;

    const resp: number[] = [];
    for (let i = 0; i < 9; i++) resp.push(psx.as.read8(REG1) & 0xff);

    const mm = resp[0] & 0xff;
    const ss = resp[1] & 0xff;
    const ff = resp[2] & 0xff;
    const track = resp[3] & 0xff;
    const index = resp[4] & 0xff;
    const control = resp[5] & 0xff;

    expect(mm).toBe(0);
    expect(ss).toBe(58);
    expect(ff).toBe(0);
    expect(track).toBe(2);
    expect(index).toBe(0);
    expect(control).toBe(0x04);
  });
});

