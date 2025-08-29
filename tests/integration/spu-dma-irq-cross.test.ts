import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { IRQ } from '../../packages/emulator-core/src/timing';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// DMA ch4 (SPU) registers
const CH4_MADR = 0x1f8010c0;
const CH4_BCR  = 0x1f8010c4;
const CH4_CHCR = 0x1f8010c8;

// SPU
const SPU_BASE = 0x1f801c00;

describe('SPU IRQ triggers during DMA when xferAddr crosses IRQ address', () => {
  it('memory->SPU (DMA ch4) raises IRQ9 on crossing', () => {
    const psx = new PSXSystem();
    const as = psx.as;

    // Enable SPU IRQ and set xfer/irq addresses
    // Set transfer address to units: 0x0100 -> halfword addr = 0x0400
    write16(as, SPU_BASE + 0x1a6, 0x0100);
    // IRQ address = base + 5
    write16(as, SPU_BASE + 0x1a2, 0x0405);
    // Enable SPU IRQ in CTRL
    write16(as, SPU_BASE + 0x1aa, 0x0040);

    // Prepare source data in RAM at 0x00002000
    const src = 0x2000;
    const halfwords = 32;
    for (let i=0;i<halfwords;i++) as.write16((src + i*2) >>> 0, (0x1000 + i) & 0xffff);

    // Program DMA ch4: dir=fromMem, sync=0 (burst), start
    write32(as, CH4_MADR, src>>>0);
    write32(as, CH4_BCR, halfwords>>>0);
    write32(as, CH4_CHCR, (1<<0) | (0<<1) | (0<<9) | (1<<24));

    // After DMA completes synchronously, IRQ.SPU should be set
    expect((psx.intc.status & (1<<IRQ.SPU)) !== 0).toBe(true);
  });
});

