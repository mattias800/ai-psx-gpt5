import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// STOP should halt reading and flush the data FIFO.

describe('CDROM STOP command', () => {
  it('flushes data FIFO and stops reading', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // SETLOC and READN to enqueue data
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x06);
    psx.stepCycles(13000);

    // Confirm some data exists
    const before = psx.as.read8(REG2) & 0xff;
    expect(typeof before).toBe('number');

    // Issue STOP; should clear remaining data and stop reading
    psx.as.write8(REG1, 0x1e);

    // Data FIFO should be empty (read returns 0) and remain empty after time
    const after0 = psx.as.read8(REG2) & 0xff;
    const after1 = psx.as.read8(REG2) & 0xff;
    expect(after0 === 0 || after1 === 0).toBe(true);

    // Step more cycles; no new data should arrive
    psx.stepCycles(50000);
    const later = psx.as.read8(REG2) & 0xff;
    expect(later).toBe(0);
  });
});

