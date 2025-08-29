import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }
function readVRAM(psx: PSXSystem, x: number, y: number): number { return psx.gpu.vram[y * 1024 + x] & 0xffff; }

// Verify that with scheduler-driven DMA timing configured, a GPU block DMA completes
// only after enough cycles have been stepped, then raises DMA IRQ per DICR

describe('DMAC async timing (GPU ch2 block)', () => {
  it('schedules completion after cycles and updates VRAM + IRQ', () => {
    const psx = new PSXSystem();
    psx.attachDMATiming({ cyclesPerWord: 8 });

    const as = psx.as;

    // Prepare a small GP0 command sequence in RAM: filled rect 2x2 at (40,45) in green
    const base = 0x200;
    const color = 0x00ff00;
    const x = 40, y = 45, w = 2, h = 2;
    const cmd = (0x64 << 24) | color;
    const xy = ((y & 0x1ff) << 16) | (x & 0x3ff);
    const size = ((h & 0x1ff) << 16) | (w & 0x3ff);

    write32(as, base + 0, cmd >>> 0);
    write32(as, base + 4, xy >>> 0);
    write32(as, base + 8, size >>> 0);

    // Enable DICR master + channel 2 IRQ signaling
    const DICR = 0x1f8010f4;
    write32(as, DICR, (1 << 2) | (1 << 24));

    // Set GPU DMA direction to FIFO write (CPU->GP0)
    const GP1 = 0x1f801814;
    write32(as, GP1, (0x04 << 24) | 0x1);

    // Program DMA ch2 block mode from memory, 3 words
    const CH2_MADR = 0x1f8010a0; const CH2_BCR = 0x1f8010a4; const CH2_CHCR = 0x1f8010a8;
    write32(as, CH2_MADR, base >>> 0);
    write32(as, CH2_BCR, 3);
    // dir=fromMem(1) | step=inc(0) | sync=0 | start(1<<24)
    write32(as, CH2_CHCR, (1 << 0) | (0 << 1) | (0 << 9) | (1 << 24));

    // Should not have drawn immediately (async)
    const bgr555 = 0x03e0; // green
    expect(readVRAM(psx, x, y)).not.toBe(bgr555);

    // Step fewer cycles than required (3 words * 8 cycles/word = 24)
    psx.stepCycles(16);
    expect(readVRAM(psx, x, y)).not.toBe(bgr555);

    // Step the remaining cycles
    psx.stepCycles(8);
    expect(readVRAM(psx, x, y)).toBe(bgr555);

    // DMA IRQ should be raised (DICR master+ch2 enabled)
    const DMA_BIT = 1 << 3; // IRQ.DMA == 3
    expect((psx.intc.status & DMA_BIT) !== 0).toBe(true);
  });
});
