import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Verify GETQ returns MSF derived from current position after SEEKL

describe('CDROM GETQ position report', () => {
  it('reports mm,ss,ff from current LBA', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Program position to mm=0, ss=1, ff=2
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); // mm
    psx.as.write8(REG2, 0x01); // ss
    psx.as.write8(REG2, 0x02); // ff
    psx.as.write8(REG1, 0x19); // SETLOC

    // Acknowledge any IRQ from SETLOC
    psx.as.write32(0x1f801070, 1 << 3);

    // Seek
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(30000);

    // Flush any pending responses from SETLOC/SEEKL
    psx.as.write8(IDX, 0x01); // select status index
    for (let i = 0; i < 8; i++) {
      const st = psx.as.read8(REG1) & 0xff;
      if ((st & 0x08) === 0) break; // response FIFO empty
      psx.as.write8(IDX, 0x00);
      void psx.as.read8(REG1); // pop one response byte
      psx.as.write8(IDX, 0x01);
    }

    // Issue GETQ
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x15);

    // Read status + 9 bytes
    const status = psx.as.read8(REG1) & 0xff;
    expect((status & 0x02) !== 0).toBe(true);
    const b: number[] = [];
    for (let i = 0; i < 9; i++) b.push(psx.as.read8(REG1) & 0xff);

    // Expect first three bytes to be mm, ss, ff
    expect(b[0]).toBe(0x00);
    expect(b[1]).toBe(0x01);
    expect(b[2]).toBe(0x02);
  });
});

