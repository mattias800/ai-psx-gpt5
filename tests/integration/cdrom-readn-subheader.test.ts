import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify READN subheader delivery when SETMODE bit 0x10 is set (8-byte subheader + 2048 user bytes).

describe('CDROM READN with subheader delivery via SETMODE bit0x10', () => {
  it('copies 2056 bytes and matches 8-byte subheader then user data', () => {
    const psx = new PSXSystem();

    const disc: DiscSource = {
      readSector2352(lba: number): Uint8Array {
        const u8 = new Uint8Array(2352);
        for (let i = 0; i < 12; i++) u8[i] = 0xaa; // sync
        u8[15] = 0x02; // mode
        for (let i = 16; i < 24; i++) u8[i] = 0x5c; // subheader marker
        for (let i = 0; i < 2048; i++) u8[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff; // user data
        return u8;
      },
    };
    psx.attachDisc(disc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Enable subheader delivery (bit 0x10)
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x10);
    psx.as.write8(REG1, 0x0e);

    // LBA=2, SEEKL, READN
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(15000);

    // DMA 2056 bytes = 514 words
    const MADR3 = 0x1f8010b0, BCR3 = 0x1f8010b4, CHCR3 = 0x1f8010b8;
    const dst = 0x7400 >>> 0;
    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 514);
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    const lba = 2;
    // First 8 bytes are subheader 0x5c
    for (let i = 0; i < 8; i++) expect(psx.as.read8(dst + i) & 0xff).toBe(0x5c);
    // Next 2048 bytes are user data
    for (let i = 0; i < 2048; i++) {
      const b = psx.as.read8(dst + 8 + i) & 0xff;
      expect(b).toBe(((lba & 0xff) ^ (i & 0xff)) & 0xff);
    }
  });
});

