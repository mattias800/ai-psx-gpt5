import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub, MappedRAM } from '../../packages/emulator-core/src/address-space';
import { DMAC } from '../../packages/emulator-core/src/dma';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Verify GPU channel linked-list DMA streams a small draw packet

describe('DMAC GPU linked-list (ch2, sync=2) -> GP0', () => {
  it('draws a 2x2 rect via linked-list packet', () => {
    const as = new AddressSpace();
    const ram = new MappedRAM(0x00000000, 1<<12);
    const gpu = new GPU();
    const dmac = new DMAC(as, gpu);
    const io = new IOHub({
      gpu: { writeGP0: (v)=>gpu.writeGP0(v), writeGP1: (v)=>gpu.writeGP1(v), readGP0: ()=>gpu.readGP0(), readGP1: ()=>gpu.readGP1() },
      dma: { read32: (a)=>dmac.read32(a), write32: (a,v)=>dmac.write32(a,v) },
    });
    as.addRegion(ram);
    as.addRegion(io);

    const base = 0x80;
    const color = 0x00ff00; // green
    const x=10,y=12,w=2,h=2;
    const header = ((3 & 0xff) << 24) | 0x00ffffff; // 3 words follow; end-of-list
    const cmd = (0x64 << 24) | color;
    const xy = ((y & 0x1ff) << 16) | (x & 0x3ff);
    const size = ((h & 0x1ff) << 16) | (w & 0x3ff);

    as.write32(base + 0, header >>> 0);
    as.write32(base + 4, cmd >>> 0);
    as.write32(base + 8, xy >>> 0);
    as.write32(base + 12, size >>> 0);

    // Program DMA ch2: MADR, (BCR unused), CHCR dir=from mem (bit0=1), sync=2 (bits9-10=10), start (bit24)
    as.write32(0x1f8010a0, base >>> 0);
    as.write32(0x1f8010a4, 0);
    as.write32(0x1f8010a8, (1<<0) | (2<<9) | (1<<24));

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const bgr555 = 0x03e0; // green in BGR555
    expect(gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y, x+1)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y+1, x)] & 0xffff).toBe(bgr555);
    expect(gpu.vram[idx(y+1, x+1)] & 0xffff).toBe(bgr555);
  });
});

