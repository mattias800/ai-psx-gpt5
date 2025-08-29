import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify READS (0x0d) delivers raw 2352-byte sectors via DMA when a DiscSource is attached.

describe('CDROM READS -> raw 2352 bytes via DMA', () => {
  it('copies 2352 bytes and matches raw header, subheader, user data and tail', () => {
    const psx = new PSXSystem();

    // Attach in-memory disc with predictable raw layout
    const disc: DiscSource = {
      readSector2352(lba: number): Uint8Array {
        const u8 = new Uint8Array(2352);
        // sync (12 bytes)
        for (let i = 0; i < 12; i++) u8[i] = 0xaa;
        // header mm:ss:ff (3 bytes) + mode (1 byte)
        u8[15] = 0x02; // mode 2
        // subheader (8 bytes)
        for (let i = 16; i < 24; i++) u8[i] = 0xee;
        // user data (2048 bytes)
        for (let i = 0; i < 2048; i++) u8[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff;
        // trailing ECC/EDC padding
        for (let i = 24 + 2048; i < 2352; i++) u8[i] = 0x55;
        return u8;
      },
    };
    psx.attachDisc(disc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Program SETLOC to LBA 2, SEEKL, then READS
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x0d); // READS
    psx.stepCycles(15000);

    // DMA copy 2352 bytes -> 588 words
    const MADR3 = 0x1f8010b0, BCR3 = 0x1f8010b4, CHCR3 = 0x1f8010b8;
    const dst = 0x7000 >>> 0;
    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 588);
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    const lba = 2;
    // Sync bytes 0..11
    for (let i = 0; i < 12; i++) expect(psx.as.read8(dst + i) & 0xff).toBe(0xaa);
    // Mode byte at 15
    expect(psx.as.read8(dst + 15) & 0xff).toBe(0x02);
    // Subheader 16..23
    for (let i = 16; i < 24; i++) expect(psx.as.read8(dst + i) & 0xff).toBe(0xee);
    // User data 2048 bytes from 24..24+2048
    for (let i = 0; i < 2048; i++) {
      const b = psx.as.read8(dst + 24 + i) & 0xff;
      expect(b).toBe(((lba & 0xff) ^ (i & 0xff)) & 0xff);
    }
    // Last byte
    expect(psx.as.read8(dst + 2351) & 0xff).toBe(0x55);
  });
});

