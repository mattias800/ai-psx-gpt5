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
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;

// Integration: Use NCDT (0x2A) to compute three colors, then draw 0x30 Gouraud triangle

describe('Integration: GTE NCDT + GPU Gouraud (0x30)', () => {
  it('lights three vertices via NCDT and renders vertex colors', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // GTE gains diag (128,128,128) in cr[0],cr[4],cr[8]
    prog.push(ORI(0,1,128), CTC2(1,0));
    prog.push(ORI(0,1,128), CTC2(1,4));
    prog.push(ORI(0,1,128), CTC2(1,8));

    // Provide three vectors N0=(255,0,0), N1=(0,255,0), N2=(0,0,255) in dr[0..8]
    prog.push(
      ORI(0,2,255), ORI(0,3,0),   ORI(0,4,0),   MTC2(2,0), MTC2(3,1), MTC2(4,2),
      ORI(0,2,0),   ORI(0,3,255), ORI(0,4,0),   MTC2(2,3), MTC2(3,4), MTC2(4,5),
      ORI(0,2,0),   ORI(0,3,0),   ORI(0,4,255), MTC2(2,6), MTC2(3,7), MTC2(4,8),
      GTEop(0x2a),
    );

    // Fetch dr20..22 to r10,r11,r12 (0xRRGGBB)
    prog.push(MFC2(10,20), MFC2(11,21), MFC2(12,22));

    // Repack 0xRRGGBB -> 0x00BBGGRR in-place for each
    const repack = (inReg:number, tmpB:number, tmpG:number, tmpR:number, outReg:number) => {
      prog.push(ANDI(inReg, tmpB, 0x00ff)); // B
      prog.push(SLL(tmpB, tmpB, 16));
      prog.push(ANDI(inReg, tmpG, 0xff00)); // G
      prog.push(SRL(inReg, tmpR, 16));      // R
      prog.push(OR(tmpB, tmpG, outReg));
      prog.push(OR(outReg, tmpR, outReg));
    };
    repack(10, 13,14,15, 10);
    repack(11, 13,14,15, 11);
    repack(12, 13,14,15, 12);

    // Issue GP0 0x30 Gouraud triangle: color1, xy1, color2, xy2, color3, xy3
    const x=200,y=100;
    prog.push(LUI(1,gp0_hi), ORI(1,1,gp0_lo));
    // cmd word
    prog.push(LUI(2,0x3000), OR(2,10,2), SW(1,2,0));
    // xy1
    prog.push(LUI(3,(XY(y,x)>>>16)&0xffff), ORI(3,3,XY(y,x)&0xffff), SW(1,3,0));
    // color2, xy2
    prog.push(SW(1,11,0));
    prog.push(LUI(3,(XY(y,x+2)>>>16)&0xffff), ORI(3,3,XY(y,x+2)&0xffff), SW(1,3,0));
    // color3, xy3
    prog.push(SW(1,12,0));
    prog.push(LUI(3,(XY(y+2,x)>>>16)&0xffff), ORI(3,3,XY(y+2,x)&0xffff), SW(1,3,0));

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f;
    expect(psx.gpu.vram[idx(y,x)] & 0xffff).toBe(RED);
    expect(psx.gpu.vram[idx(y,x+2)] & 0xffff).toBe(GREEN);
    expect(psx.gpu.vram[idx(y+2,x)] & 0xffff).toBe(BLUE);
  });
});

