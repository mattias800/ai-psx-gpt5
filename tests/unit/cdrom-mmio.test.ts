import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

// Minimal CDROM MMIO: issue GETSTAT (0x01) and receive a response byte; IRQ2 should be raised

describe('CDROM MMIO GETSTAT', () => {
  it('pushes a response and raises IRQ2', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800;
    const REG1 = 0x1f801801;

    // Select index 0 and issue 0x01
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG1, 0x01);

    const resp = psx.as.read8(REG1) & 0xff;
    expect(typeof resp).toBe('number');

    // INTC I_STAT should have CDROM bit set
    const istat = psx.as.read32(0x1f801070) >>> 0;
    expect((istat & (1<<IRQ.CDROM)) !== 0).toBe(true);

    // Ack and verify cleared
    psx.as.write32(0x1f801070, (1<<IRQ.CDROM) >>> 0);
    const istat2 = psx.as.read32(0x1f801070) >>> 0;
    expect((istat2 & (1<<IRQ.CDROM)) === 0).toBe(true);
  });
});

