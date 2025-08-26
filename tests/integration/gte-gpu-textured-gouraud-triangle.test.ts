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
const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;

// Build color via GTE: set dr[0..2] to IR, call MVMVA to write IR regs, GPF to write dr20, then repack 0xRRGGBB -> 0x00BBGGRR
function buildColor(program: number[], rR:number, rG:number, rB:number, outReg:number, tmpR:number, tmpG:number, tmpB:number) {
  program.push(ORI(0, rR, 32640), ORI(0, rG, 0), ORI(0, rB, 0));
  program.push(MTC2(rR,0), MTC2(rG,1), MTC2(rB,2));
  program.push(GTEop(0x02), GTEop(0x3c)); // MVMVA + GPF
  // dr20 -> outReg
  program.push(MFC2(outReg,20));
  // outReg is 0xRRGGBB -> repack to 0x00BBGGRR: (B<<16)|(G<<8)|R
  program.push(ANDI(outReg, tmpB, 0x00ff), SLL(tmpB, tmpB, 16));
  program.push(ANDI(outReg, tmpG, 0xff00));
  program.push(SRL(outReg, tmpR, 16));
  program.push(OR(tmpB, tmpG, outReg), OR(outReg, tmpR, outReg));
}

describe('Integration: GTE RTPT + GPF -> GPU textured Gouraud triangle (0x34)', () => {
  it('projects vertices, builds per-vertex color via GTE, and draws textured gouraud triangle', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // Upload 2x2 white texture at (60,70)
    const baseX=60, baseY=70;
    const WHITE=0x7fff;
    prog.push(LUI(1, gp0_hi), ORI(1,1,gp0_lo));
    prog.push(LUI(2, 0xa000), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));
    prog.push(LUI(4, 2), ORI(4,4, 2), SW(1,4,0));
    // Two words of white
    prog.push(LUI(5, (WHITE>>>16)&0xffff), ORI(5,5, WHITE & 0xffff), SW(1,5,0));
    prog.push(LUI(5, (WHITE>>>16)&0xffff), ORI(5,5, WHITE & 0xffff), SW(1,5,0));

    // Set texture base (0xE1)
    prog.push(LUI(2, 0xe100), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));

    // GTE setup: R=I, TR=0, H=1, OFX=220, OFY=120
    prog.push(
      ORI(0,9,1), CTC2(9,0), CTC2(9,4), CTC2(9,8),
      ORI(0,9,0), CTC2(9,9), CTC2(9,10), CTC2(9,11),
      ORI(0,9,1), CTC2(9,12), ORI(0,9,220), CTC2(9,13), ORI(0,9,120), CTC2(9,14),
    );

    // Vertices V0=(0,0,1), V1=(2,0,1), V2=(0,2,1)
    prog.push(
      ORI(0,10,0), ORI(0,11,0), ORI(0,12,1), MTC2(10,0), MTC2(11,1), MTC2(12,2),
      ORI(0,10,2), ORI(0,11,0), ORI(0,12,1), MTC2(10,3), MTC2(11,4), MTC2(12,5),
      ORI(0,10,0), ORI(0,11,2), ORI(0,12,1), MTC2(10,6), MTC2(11,7), MTC2(12,8),
      GTEop(0x11),
      MFC2(13,24), MFC2(14,25), MFC2(15,30),
    );

    // Build per-vertex colors: red, green, blue via GPF (IR>>7)
    // Use regs: out colors in r16,r17,r18; temps r19,r20,r21
    buildColor(prog, 22,23,24, /*out*/16,19,20,21); // red
    // Change IR to (0,32640,0)
    prog.push(ORI(0,22,0), ORI(0,23,32640), ORI(0,24,0));
    prog.push(MTC2(22,0), MTC2(23,1), MTC2(24,2));
    prog.push(GTEop(0x02), GTEop(0x3c), MFC2(17,20));
    prog.push(ANDI(17,19,0x00ff), SLL(19,19,16), ANDI(17,20,0xff00), SRL(17,21,16), OR(19,20,17), OR(17,21,17));
    // Blue
    prog.push(ORI(0,22,0), ORI(0,23,0), ORI(0,24,32640));
    prog.push(MTC2(22,0), MTC2(23,1), MTC2(24,2));
    prog.push(GTEop(0x02), GTEop(0x3c), MFC2(18,20));
    prog.push(ANDI(18,19,0x00ff), SLL(19,19,16), ANDI(18,20,0xff00), SRL(18,21,16), OR(19,20,18), OR(18,21,18));

    // Issue GP0 0x34
    prog.push(LUI(2,0x3400), OR(2,16,2), SW(1,2,0));
    // xy1, uv1
    prog.push(SW(1,13,0), LUI(3,0), ORI(3,3,UV(0,0)), SW(1,3,0));
    // color2, xy2, uv2
    prog.push(SW(1,17,0), SW(1,14,0), LUI(3,0), ORI(3,3,UV(1,0)), SW(1,3,0));
    // color3, xy3, uv3
    prog.push(SW(1,18,0), SW(1,15,0), LUI(3,0), ORI(3,3,UV(0,1)), SW(1,3,0));

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    // Vertex pixels should reflect vertex colors (white texture modulation)
    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f;
    const anyAround = (xx:number,yy:number,color:number)=>{
      for (let dy=-1; dy<=1; dy++) for (let dx=-1; dx<=1; dx++) {
        const px = psx.gpu.vram[idx((yy+dy)&0x1ff, (xx+dx)&0x3ff)] & 0xffff;
        if (px === color) return true;
      }
      return false;
    };
    const anyInArea = (cx:number,cy:number,color:number,rad:number)=>{
      for (let dy=-rad; dy<=rad; dy++) for (let dx=-rad; dx<=rad; dx++) {
        const px = psx.gpu.vram[idx((cy+dy)&0x1ff, (cx+dx)&0x3ff)] & 0xffff;
        if (px === color) return true;
      }
      return false;
    };
    expect(anyAround(220,120,RED)).toBe(true);
    // Ensure some coverage exists in bounding box
    let any = false;
    for (let yy=120; yy<=122; yy++) for (let xx=220; xx<=222; xx++) {
      if ((psx.gpu.vram[idx(yy,xx)] & 0xffff) !== 0) { any = true; break; }
    }
    expect(any).toBe(true);
    expect(anyAround(220,122,BLUE)).toBe(true);
  });
});

