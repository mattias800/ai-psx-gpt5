import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// Minimal GETID multi-byte response test

describe('CDROM GETID response bytes', () => {
  it('returns status followed by 8 ID bytes', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801;

    // Issue GETID
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x1a);

    // Read 9 bytes: status + 8 ID bytes
    const b0 = psx.as.read8(REG1) & 0xff;
    const id: number[] = [];
    for (let i = 0; i < 8; i++) id.push(psx.as.read8(REG1) & 0xff);

    // Verify status ready bit and ID content prefix "AI-PSX\0\0"
    expect((b0 & 0x02) !== 0).toBe(true);
    const expected = [0x41,0x49,0x2d,0x50,0x53,0x58,0x00,0x00];
    for (let i = 0; i < 8; i++) expect(id[i]).toBe(expected[i]);

    // IRQ should be raised
    const istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.CDROM)) !== 0).toBe(true);
  });
});

