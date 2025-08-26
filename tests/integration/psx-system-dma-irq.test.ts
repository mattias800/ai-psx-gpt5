import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import { IRQ } from '../../packages/emulator-core/src/timing';

function emit(instrs: number[]): Uint8Array {
  const u8 = new Uint8Array(instrs.length * 4);
  for (let i = 0; i < instrs.length; i++) {
    const v = instrs[i] >>> 0;
    u8[i*4+0] = v & 0xff;
    u8[i*4+1] = (v >>> 8) & 0xff;
    u8[i*4+2] = (v >>> 16) & 0xff;
    u8[i*4+3] = (v >>> 24) & 0xff;
  }
  return u8;
}
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

// E2E: CPU programs DICR and DMA ch2 linked-list; expects VRAM draw and vector on DMA IRQ

describe('E2E: PSXSystem DMA IRQ vectoring (GPU ch2 linked-list)', () => {
  it('draws and vectors to 0x80000080 when IE and I_MASK.DMA set', () => {
    const psx = new PSXSystem();

    // Build a linked-list packet at 0x100
    const base = 0x100;
    const color = 0x00ff00;
    const x=20, y=22, w=2, h=2;
    const header = ((3 & 0xff) << 24) | 0x00ffffff;
    const cmd = (0x64 << 24) | color;
    const xy = ((y & 0x1ff) << 16) | (x & 0x3ff);
    const size = ((h & 0x1ff) << 16) | (w & 0x3ff);
    psx.as.write32(base + 0, header>>>0);
    psx.as.write32(base + 4, cmd>>>0);
    psx.as.write32(base + 8, xy>>>0);
    psx.as.write32(base + 12, size>>>0);

    // Program to enable IE, set I_MASK DMA, set DICR (enable ch2 + master), program ch2
    const IMASK = 0x1f801074;
    const DICR = 0x1f8010f4;
    const CH2_MADR = 0x1f8010a0; const CH2_BCR = 0x1f8010a4; const CH2_CHCR = 0x1f8010a8;
    const dmaMask = 1 << IRQ.DMA;
    const dicrVal = (1<<2) | (1<<24); // enable ch2 and master

    const code = emit([
      ORI(0,1,0x0001), // r1=1 (IE)
      // SR = r1
      (0x10<<26) | (0x04<<21) | (1<<16) | (12<<11),
      // r2 = DMA mask
      LUI(2, (dmaMask>>>16)&0xffff), ORI(2,2,dmaMask&0xffff),
      // r3 = IMASK address
      LUI(3, (IMASK>>>16)&0xffff), ORI(3,3,IMASK&0xffff),
      SW(3,2,0),
      // r4 = DICR address; r5 = dicrVal; store it
      LUI(4, (DICR>>>16)&0xffff), ORI(4,4,(DICR&0xffff)),
      LUI(5, (dicrVal>>>16)&0xffff), ORI(5,5,(dicrVal&0xffff)),
      SW(4,5,0),
      // Set GPU GP1 DMA direction: FIFO write (CPU->GP0)
      LUI(8, (0x1f801814>>>16)&0xffff), ORI(8,8,(0x1f801814&0xffff)),
      LUI(9, ( (0x04<<24 | 0x1)>>>16)&0xffff), ORI(9,9,((0x04<<24 | 0x1)&0xffff)),
      SW(8,9,0),
      // ch2 MADR = base
      LUI(6, (CH2_MADR>>>16)&0xffff), ORI(6,6,(CH2_MADR&0xffff)),
      LUI(7, (base>>>16)&0xffff), ORI(7,7,(base&0xffff)),
      SW(6,7,0),
      // ch2 BCR = 0 (ignored for linked-list)
      LUI(6, (CH2_BCR>>>16)&0xffff), ORI(6,6,(CH2_BCR&0xffff)),
      ORI(7,7,0), SW(6,7,0),
      // ch2 CHCR = dir=fromMem|sync=2|start
      LUI(6, (CH2_CHCR>>>16)&0xffff), ORI(6,6,(CH2_CHCR&0xffff)),
      LUI(7, 0), ORI(7,7, (1<<0) | (2<<9) | (1<<24) ),
      SW(6,7,0),
      // spin
      (0x02<<26) | 0,
    ]);

    psx.loadProgram(code, 0);

    // Execute program (sets SR, I_MASK, DICR)
    psx.loadProgram(code, 0);
    psx.stepCpu(code.length / 4);

    // Start DMA via MMIO to ensure transfer (linked-list)
    psx.as.write32(0x1f8010a0, base >>> 0);
    psx.as.write32(0x1f8010a4, 0);
    psx.as.write32(0x1f8010a8, (1<<0) | (2<<9) | (1<<24));

    // Drawing should have occurred already (DMA runs synchronously)
    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const bgr555 = 0x03e0;
    expect(psx.gpu.vram[idx(y,x)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y,x+1)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y+1,x)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y+1,x+1)] & 0xffff).toBe(bgr555);
    // DICR should have channel enable and master enable set
    const dicr = psx.as.read32(0x1f8010f4) >>> 0;
    expect((dicr & (1<<2)) !== 0).toBe(true);
    expect((dicr & (1<<24)) !== 0).toBe(true);
    // Ensure DMA IRQ is raised
    expect((psx.intc.status & (1<<IRQ.DMA)) !== 0).toBe(true);
    // Next step should vector to 0x80000080 due to DMA IRQ
    psx.stepCpu(1);
    expect(psx.cpu.s.pc>>>0).toBe(0x80000080);

  });
});

