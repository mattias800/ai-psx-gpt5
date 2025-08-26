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

// Build per-vertex color via GTE: IR set by MVMVA from dr[0..2]; GPF maps IR>>7 -> 0xRRGGBB in dr20
function buildColorViaGTE(program: number[], rTmpVec: number, outReg: number, rTmpPackR: number, rTmpPackG: number, rTmpPackB: number) {
  // Expect rTmpVec holds (rx,ry,rz) values via separate assigns below; here we just call MVMVA+GPF and pack
  // After MVMVA, GPF -> dr20=RRGGBB; then repack to 0x00BBGGRR in outReg
  program.push(
    // MVMVA then GPF
    GTEop(0x02), GTEop(0x3c),
    // Read dr20 to outReg temp (we'll pack directly into outReg)
    MFC2(outReg, 20),
    // outReg currently 0xRRGGBB; repack to 0x00BBGGRR in outReg
    // rTmpPackB = (B << 16)
    ANDI(outReg, rTmpPackB, 0x00ff), SLL(rTmpPackB, rTmpPackB, 16),
    // rTmpPackG = (G << 8)
    ANDI(outReg, rTmpPackG, 0xff00),
    // rTmpPackR = R
    SRL(outReg, rTmpPackR, 16),
    OR(rTmpPackB, rTmpPackG, outReg), OR(outReg, rTmpPackR, outReg),
  );
}

describe('Integration: GTE RTPT + GPF/GPL -> GPU Gouraud triangle (0x30)', () => {
  it('projects 3 vertices and shades them with per-vertex colors from GTE', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];
    // GTE setup: R=I, TR=0, H=1, OFX=120, OFY=60
    prog.push(
      ORI(0,1,1), CTC2(1,0), CTC2(1,4), CTC2(1,8),
      ORI(0,1,0), CTC2(1,9), CTC2(1,10), CTC2(1,11),
      ORI(0,1,1), CTC2(1,12), ORI(0,1,120), CTC2(1,13), ORI(0,1,60), CTC2(1,14),
    );
    // Provide vertices V0=(0,0,1), V1=(2,0,1), V2=(0,2,1)
    prog.push(
      ORI(0,2,0), ORI(0,3,0), ORI(0,4,1), MTC2(2,0), MTC2(3,1), MTC2(4,2),
      ORI(0,2,2), ORI(0,3,0), ORI(0,4,1), MTC2(2,3), MTC2(3,4), MTC2(4,5),
      ORI(0,2,0), ORI(0,3,2), ORI(0,4,1), MTC2(2,6), MTC2(3,7), MTC2(4,8),
      GTEop(0x11),
      // Read SXY0/1/2 to r8,r9,r10
      MFC2(8,24), MFC2(9,25), MFC2(10,30),
    );
    // Per-vertex colors via GTE IR->GPF (IR>>7 -> color): target 255 requires IR=255<<7=32640
    const IR_MAX = 32640;
    // Color1 = red (255,0,0)
    prog.push(ORI(0,11,IR_MAX), ORI(0,12,0), ORI(0,13,0), MTC2(11,0), MTC2(12,1), MTC2(13,2));
    buildColorViaGTE(prog, 11, /*outReg*/11, /*tmpR*/14, /*tmpG*/15, /*tmpB*/16);
    // Color2 = green (0,255,0)
    prog.push(ORI(0,11,0), ORI(0,12,IR_MAX), ORI(0,13,0), MTC2(11,0), MTC2(12,1), MTC2(13,2));
    buildColorViaGTE(prog, 11, /*outReg*/12, /*tmpR*/14, /*tmpG*/15, /*tmpB*/16);
    // Color3 = blue (0,0,255)
    prog.push(ORI(0,11,0), ORI(0,12,0), ORI(0,13,IR_MAX), MTC2(11,0), MTC2(12,1), MTC2(13,2));
    buildColorViaGTE(prog, 11, /*outReg*/13, /*tmpR*/14, /*tmpG*/15, /*tmpB*/16);

    // Issue GPU G3 triangle: cmd(color1), xy1, color2, xy2, color3, xy3
    prog.push(
      LUI(1, gp0_hi), ORI(1,1,gp0_lo),
      // cmd word
      LUI(2, 0x3000), OR(2,11,2), SW(1,2,0),
      // xy1, color2, xy2, color3, xy3
      SW(1,8,0), SW(1,12,0), SW(1,9,0), SW(1,13,0), SW(1,10,0),
    );

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    // Expect some interior coverage and a far pixel unset
    const interior = psx.gpu.vram[idx(61, 121)] & 0xffff;
    expect(interior).not.toBe(0);
    expect(psx.gpu.vram[idx(65, 125)] & 0xffff).toBe(0);
  });
});

