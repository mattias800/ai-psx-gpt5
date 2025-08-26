import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';

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

// Instruction builders
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const ANDI = (rs: number, rt: number, imm: number) => (0x0c<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const OR   = (rs: number, rt: number, rd: number) => (0x00<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x25;
const SLL  = (rt: number, rd: number, sh: number) => (0x00<<26) | (0<<21) | (rt<<16) | (rd<<11) | ((sh & 31)<<6) | 0x00;
const SRL  = (rt: number, rd: number, sh: number) => (0x00<<26) | (0<<21) | (rt<<16) | (rd<<11) | ((sh & 31)<<6) | 0x02;
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

// COP2
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

describe('Integration: GTE -> GPU pipeline (color + rect)', () => {
  it('computes color via GTE then draws a 1x1 rect with that color', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const x = 200, y = 100;
    const xy = ((y & 0x1ff) << 16) | (x & 0x3ff);
    const size = (1 << 16) | 1;

    const prog = emit([
      // Setup GTE: R=diag(128), TR=0, H=1, OFX=0, OFY=0
      ORI(0,1,128), CTC2(1,0),
      ORI(0,1,128), CTC2(1,4),
      ORI(0,1,128), CTC2(1,8),
      ORI(0,1,0),   CTC2(1,9), CTC2(1,10), CTC2(1,11),
      ORI(0,1,1),   CTC2(1,12),
      ORI(0,1,0),   CTC2(1,13), CTC2(1,14),
      // Vertices V0=(0,0,1), V1=(10,0,1), V2=(0,10,1)
      ORI(0,2,0), ORI(0,3,0), ORI(0,4,1), MTC2(2,0), MTC2(3,1), MTC2(4,2),
      ORI(0,2,10), ORI(0,3,0), ORI(0,4,1), MTC2(2,3), MTC2(3,4), MTC2(4,5),
      ORI(0,2,0), ORI(0,3,10), ORI(0,4,1), MTC2(2,6), MTC2(3,7), MTC2(4,8),
      // RTPT then GPF => dr20=0xRRGGBB with (R,G,B)=(0,10,1)
      GTEop(0x11), GTEop(0x3c),
      // Move dr20 to r8
      MFC2(8,20),
      // Repack to GPU color 0x00BBGGRR from 0xRRGGBB
      // r9 = (b << 16)
      ANDI(8,9,0x00ff), SLL(9,9,16),
      // r10 = (g << 8)
      ANDI(8,10,0xff00),
      // r11 = r (low 8) = (color >> 16)
      SRL(8,11,16),
      // r12 = gpu_color = r9 | r10 | r11
      OR(9,10,12), OR(12,11,12),
      // r1 = GP0 address
      LUI(1, gp0_hi), ORI(1,1,gp0_lo),
      // r2 = cmd word: (0x64<<24) | gpu_color
      LUI(2, 0x6400), OR(2,12,2), SW(1,2,0),
      // r3 = xy
      LUI(3, (xy>>>16)&0xffff), ORI(3,3, xy & 0xffff), SW(1,3,0),
      // r4 = size
      LUI(4, (size>>>16)&0xffff), ORI(4,4, size & 0xffff), SW(1,4,0),
    ]);

    psx.loadProgram(prog, 0);
    psx.stepCpu(prog.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const px = psx.gpu.vram[idx(y & 0x1ff, x & 0x3ff)] & 0xffff;
    // Expected BGR555 from R=0,G=10,B=1 -> (R>>3)<<10 + (G>>3)<<5 + (B>>3)
    const expected = ((0>>>3)<<10) | ((10>>>3)<<5) | ((1>>>3));
    expect(px).toBe(expected);
  });
});

