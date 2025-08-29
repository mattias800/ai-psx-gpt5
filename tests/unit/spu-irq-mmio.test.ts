import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function read16(as: any, addr: number): number { return as.read16(addr >>> 0) & 0xffff; }

// Offsets
const SPU_BASE = 0x1f801c00;

describe('SPU IRQ MMIO and INTC integration', () => {
  it('raises IRQ9 when xferAddr matches IRQ address and IRQ enabled', () => {
    const psx = new PSXSystem();
    const as = psx.as;

    // Program SPU CTRL: enable IRQ (bit6)
    write16(as, SPU_BASE + 0x1aa, 0x0040);

    // Set transfer address to units=2 -> halfword addr=8
    write16(as, SPU_BASE + 0x1a6, 0x0002);
    // Set IRQ address to 8
    write16(as, SPU_BASE + 0x1a2, 0x0008);

    // Read SPU data port once; access at xferAddr==8 should trigger IRQ
    void read16(as, SPU_BASE + 0x1a8);

    // Check INTC SPU bit latched
    expect((psx.intc.status & (1<<IRQ.SPU)) !== 0).toBe(true);

    // SPU status bit6 reflects IRQ flag
    const status = read16(as, SPU_BASE + 0x1ae);
    expect((status & 0x0040) !== 0).toBe(true);

    // Acknowledge INTC SPU
    as.write32(0x1f801070, (1<<IRQ.SPU) >>> 0);
    expect((psx.intc.status & (1<<IRQ.SPU)) === 0).toBe(true);

    // Clear SPU status bit by writing 0 to bit6
    write16(as, SPU_BASE + 0x1ae, 0x0000);
    const status2 = read16(as, SPU_BASE + 0x1ae);
    expect((status2 & 0x0040) === 0).toBe(true);
  });
});

