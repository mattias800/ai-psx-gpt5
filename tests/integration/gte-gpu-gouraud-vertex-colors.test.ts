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

// MIPS helpers
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

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;

function buildColor(program: number[], rR:number, rG:number, rB:number, outReg:number, tmpR:number, tmpG:number, tmpB:number) {
  // Set IR via MVMVA (we use direct IR inputs via MTC2(0..2)), then GPF (IR>>7) -> dr20=RRGGBB
  program.push(MTC2(rR,0), MTC2(rG,1), MTC2(rB,2));
  program.push(GTEop(0x02), GTEop(0x3c)); // MVMVA + GPF
  // Read dr20 and repack 0xRRGGBB -> 0x00BBGGRR
  program.push(MFC2(outReg,20));
  program.push(ANDI(outReg, tmpB, 0x00ff), SLL(tmpB, tmpB, 16));
  program.push(ANDI(outReg, tmpG, 0xff00));
  program.push(SRL(outReg, tmpR, 16));
  program.push(OR(tmpB, tmpG, outReg), OR(outReg, tmpR, outReg));
}

describe('Integration: GTE-built colors -> GPU Gouraud triangle vertex colors (0x30)', () => {
  it('projects vertices and renders exact vertex colors at the three corners', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // GTE setup: R=I, TR=0, H=1, OFX=200, OFY=100
    prog.push(
      ORI(0,1,1), CTC2(1,0), CTC2(1,4), CTC2(1,8),
      ORI(0,1,0), CTC2(1,9), CTC2(1,10), CTC2(1,11),
      ORI(0,1,1), CTC2(1,12), ORI(0,1,200), CTC2(1,13), ORI(0,1,100), CTC2(1,14),
    );

    // Vertices V0=(0,0,1), V1=(2,0,1), V2=(0,2,1)
    prog.push(
      ORI(0,2,0), ORI(0,3,0), ORI(0,4,1), MTC2(2,0), MTC2(3,1), MTC2(4,2),
      ORI(0,2,2), ORI(0,3,0), ORI(0,4,1), MTC2(2,3), MTC2(3,4), MTC2(4,5),
      ORI(0,2,0), ORI(0,3,2), ORI(0,4,1), MTC2(2,6), MTC2(3,7), MTC2(4,8),
      GTEop(0x11),
      MFC2(8,24), MFC2(9,25), MFC2(10,30),
    );

    // Colors: R, G, B using IR=32640 (255<<7)
    const IRMAX=32640;
    // red
    prog.push(ORI(0,11,IRMAX), ORI(0,12,0), ORI(0,13,0));
    buildColor(prog, 11,12,13, /*out*/14, /*tmpR*/15, /*tmpG*/16, /*tmpB*/17);
    // green
    prog.push(ORI(0,11,0), ORI(0,12,IRMAX), ORI(0,13,0));
    buildColor(prog, 11,12,13, /*out*/18, /*tmpR*/15, /*tmpG*/16, /*tmpB*/17);
    // blue
    prog.push(ORI(0,11,0), ORI(0,12,0), ORI(0,13,IRMAX));
    buildColor(prog, 11,12,13, /*out*/19, /*tmpR*/15, /*tmpG*/16, /*tmpB*/17);

    // Issue GP0 0x30: [cmd(color1)], xy1, color2, xy2, color3, xy3
    prog.push(
      LUI(1, gp0_hi), ORI(1,1,gp0_lo),
      LUI(2,0x3000), OR(2,14,2), SW(1,2,0),
      SW(1,8,0),
      SW(1,18,0), SW(1,9,0),
      SW(1,19,0), SW(1,10,0),
    );

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    // Expect vertex pixels to be exact primary colors
    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f;
    // V0 at (100,200) -> red
    expect(psx.gpu.vram[idx(100,200)] & 0xffff).toBe(RED);
    // V1 at (100,202) -> green
    expect(psx.gpu.vram[idx(100,202)] & 0xffff).toBe(GREEN);
    // V2 at (102,200) -> blue
    expect(psx.gpu.vram[idx(102,200)] & 0xffff).toBe(BLUE);
  });
});

