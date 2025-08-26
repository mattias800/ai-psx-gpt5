import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { InterruptController, IRQ } from '../../packages/emulator-core/src/timing';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validate DICR and INTC behavior on DMA completion

describe('DMAC DICR + INTC', () => {
  it('sets per-channel flag and master flag, and raises INTC.DMA on completion when enabled', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const intc = new InterruptController();
    const gpu = new GPU();
    const dmac = new DMAC(as as any, gpu as any, intc);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) }
    });
    as.addRegion(ram);
    as.addRegion(io);

    // Prepare a small block at 0x80
    const base = 0x80;
    as.write32(base+0, 0x11111111);
    as.write32(base+4, 0x22222222);

    // Set GPU DMA direction: FIFO write required for mem->GPU
    as.write32(0x1f801814, ((0x04<<24) | 0x1) >>> 0);

    // Enable ch2 and master in DICR
    // Bit map used: enable bits 0..6; flags 16..22; master flag 23; master enable 24
    const DICR_ENABLE_CH2 = 1<<2;
    const DICR_MASTER_EN = 1<<24;
    as.write32(0x1f8010f4, (DICR_ENABLE_CH2 | DICR_MASTER_EN) >>> 0);

    // Program ch2 block DMA: MADR, BCR=2, CHCR start (sync=0)
    as.write32(0x1f8010a0, base >>> 0);
    as.write32(0x1f8010a4, 2 >>> 0);
    as.write32(0x1f8010a8, (1<<0) | (0<<9) | (1<<24));
    // Check INTC DMA raised
    expect((intc.status & (1<<IRQ.DMA)) !== 0).toBe(true);

    // Check DICR flags
    const dicr = as.read32(0x1f8010f4) >>> 0;
    const CH2_FLAG = 1 << (16+2);
    const MASTER_FLAG = 1 << 23;
    expect((dicr & CH2_FLAG) !== 0).toBe(true);
    expect((dicr & MASTER_FLAG) !== 0).toBe(true);

    // Clear flags by writing 1s to their bits
    as.write32(0x1f8010f4, (CH2_FLAG | MASTER_FLAG) >>> 0);
    const dicr2 = as.read32(0x1f8010f4) >>> 0;
    expect((dicr2 & CH2_FLAG) === 0).toBe(true);
    expect((dicr2 & MASTER_FLAG) === 0).toBe(true);
  });
});

