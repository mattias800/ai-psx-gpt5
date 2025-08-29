import { describe, it, expect } from 'vitest';
import { PSXSystem, type DiscSource } from '@ai-psx/core';

// Verify XA audio stub: detect XA sector from in-memory disc, route PCM to SPU,
// while still delivering 2048-byte user data via READN and DMA ch3.

describe('CDROM XA audio stub -> SPU + READN user data', () => {
  it('routes XA to SPU and copies 2048 user bytes via DMA', () => {
    const psx = new PSXSystem();

    // Attach a simple in-memory disc that returns Mode2 sector with AUDIO submode.
    const disc: DiscSource = {
      readSector2352(lba: number): Uint8Array {
        const u8 = new Uint8Array(2352);
        // Mode 2
        u8[15] = 0x02;
        // Subheader at 16..23; set submode byte (index 3 of subheader) to AUDIO flag 0x20
        u8[19] = 0x20;
        // Fill user data [24..24+2048) deterministically as (lba ^ i)
        for (let i = 0; i < 2048; i++) u8[24 + i] = ((lba & 0xff) ^ (i & 0xff)) & 0xff;
        return u8;
      },
    };
    psx.attachDisc(disc);

    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // Enable XA mode in SETMODE (we use bit 0x20 as a stub)
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x20);
    psx.as.write8(REG1, 0x0e);
    // Ack any pending IRQ
    psx.as.write32(0x1f801070, (1 << 2) >>> 0);

    // Set location to LBA 2 and seek
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);

    // Start READN and allow first sector to arrive
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(15000);

    // DMA ch3 copy 2048 bytes to RAM
    const MADR3 = 0x1f8010b0, BCR3 = 0x1f8010b4, CHCR3 = 0x1f8010b8;
    const dst = 0x6000 >>> 0;
    psx.as.write32(MADR3, dst);
    psx.as.write32(BCR3, 512);
    psx.as.write32(CHCR3, ((0<<0) | (0<<9) | (1<<24)) >>> 0);

    const lba = 2;
    for (let i = 0; i < 2048; i++) {
      const b = psx.as.read8(dst + i) & 0xff;
      expect(b).toBe(((lba & 0xff) ^ (i & 0xff)) & 0xff);
    }

    // Mix a small number of frames from SPU; expect some non-zero output
    const out = (psx as any).spu.mix(32) as Float32Array;
    const sumAbs = out.reduce((acc, x) => acc + Math.abs(x), 0);
    expect(sumAbs).toBeGreaterThan(0);
  });
});

