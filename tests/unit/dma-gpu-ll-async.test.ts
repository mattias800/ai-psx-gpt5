import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

// Verify GPU linked-list DMA (ch2 sync=2) schedules asynchronously when timing enabled.
// We draw a small 2x2 rect and check VRAM updates only after enough cycles.

describe('DMAC GPU linked-list async scheduling', () => {
  it('draws only after scheduled cycles and raises DMA IRQ', () => {
    const psx = new PSXSystem();
    // Enable async timing
    psx.attachDMATiming({ cyclesPerWord: 8 });

    const as = psx.as;

    // Build a linked-list packet at base
    const base = 0x500;
    const color = 0x00ff00;
    const x=60, y=62, w=2, h=2;
    const header = ((3 & 0xff) << 24) | 0x00ffffff;
    const cmd = (0x64 << 24) | color;
    const xy = ((y & 0x1ff) << 16) | (x & 0x3ff);
    const size = ((h & 0x1ff) << 16) | (w & 0x3ff);
    write32(as, base + 0, header>>>0);
    write32(as, base + 4, cmd>>>0);
    write32(as, base + 8, xy>>>0);
    write32(as, base + 12, size>>>0);

    // Enable DICR master + ch2
    write32(as, 0x1f8010f4, (1<<2) | (1<<24));

    // Set GPU DMA direction: FIFO write
    write32(as, 0x1f801814, (0x04<<24) | 0x1);

    // Program ch2 MADR and start linked-list
    write32(as, 0x1f8010a0, base >>> 0);
    write32(as, 0x1f8010a4, 0);
    write32(as, 0x1f8010a8, (1<<0) | (2<<9) | (1<<24));

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const bgr555 = 0x03e0;
    // Should not be drawn before enough cycles (3 words * 8 = 24)
    psx.stepCycles(16);
    expect(psx.gpu.vram[idx(y, x)] & 0xffff).not.toBe(bgr555);

    psx.stepCycles(8);
    expect(psx.gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555);
    expect((psx.intc.status & (1<<3)) !== 0).toBe(true);
  });
});

