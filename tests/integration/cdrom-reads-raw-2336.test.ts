import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify READS with SETMODE bit0 selects 2336-byte slice (skip 12 sync + 4 header).

describe('CDROM READS 2336-byte mode via SETMODE bit0', () => {
  it('copies 2336 bytes [16..2351] and matches subheader and user data', () => {
    const psx = new PSXSystem();

    const disc: DiscSource = {
      readSector2352(lba: number): Uint8Array {
        const u8 = new Uint8Array(2352);
        for (let i = 0; i < 12; i++) u8[i] = 0xaa; // sync
        u8[15] = 0x02; // mode
        for (let i = 16; i < 24; i++) u8[i] = 0xee; // subheader
        for (let i = 0; i < 2048; i++) u8[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff; // user
        for (let i = 24 + 2048; i < 2352; i++) u8[i] = 0x55; // tail
        return u8;
      },
    };
    psx.attachDisc(disc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // SETMODE bit0=1 to select 2336 slice
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x01);
    psx.as.write8(REG1, 0x0e);

    // LBA=2, SEEKL, READS
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x0d);
    psx.stepCycles(15000);

    // DMA 2336 bytes = 584 words
    const MADR3 = 0x1f8010b0, BCR3 = 0x1f8010b4, CHCR3 = 0x1f8010b8;
    const dst = 0x7200 >>> 0;
    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 584);
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    const lba = 2;
    // Start with subheader (8 bytes all 0xee)
    for (let i = 0; i < 8; i++) expect(psx.as.read8(dst + i) & 0xff).toBe(0xee);
    // Then user data (2048)
    for (let i = 0; i < 2048; i++) {
      const b = psx.as.read8(dst + 8 + i) & 0xff;
      expect(b).toBe(((lba & 0xff) ^ (i & 0xff)) & 0xff);
    }
    // Last byte in 2336 slice should be 0x55
    expect(psx.as.read8(dst + 2335) & 0xff).toBe(0x55);
  });
});

