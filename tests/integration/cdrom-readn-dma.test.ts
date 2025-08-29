import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Integration: Use CDROM READN to fill data, then DMA ch3 to RAM and verify 2048 bytes pattern copied

describe('CDROM READN -> DMA ch3 -> RAM', () => {
  it('copies one sector to RAM deterministically', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Set MM:SS:FF = 00:00:02 (LBA 2), SEEKL, READN
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(15000);

    // Program DMA ch3 to copy 512 words (2048 bytes)
    const MADR3 = 0x1f8010b0, BCR3 = 0x1f8010b4, CHCR3 = 0x1f8010b8, DICR = 0x1f8010f4;
    const dst = 0x3000 >>> 0;
    psx.as.write32(DICR, ((1<<3) | (1<<24)) >>> 0);
    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 512);
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    // Verify contents pattern equals (lba ^ i) over 2048 bytes
    const lba = 2;
    for (let i=0;i<2048;i++) {
      const b = psx.as.read8(dst + i) & 0xff;
      expect(b).toBe(((lba & 0xff) ^ (i & 0xff)) & 0xff);
    }
  });
});

