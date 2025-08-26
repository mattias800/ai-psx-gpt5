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
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

// COP2
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;

describe('Integration: GTE RTPT -> GPU textured triangle (0x24)', () => {
  it('projects 3 vertices, uploads a 2x2 texture, and draws a textured triangle', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // 1) Upload a 2x2 texture at (30,40): [R G; B W]
    const baseX = 30, baseY = 40;
    const RED=0x7c00, GREEN=0x03e0, BLUE=0x001f, WHITE=0x7fff;
    prog.push(
      // r1 = GP0 address
      LUI(1, gp0_hi), ORI(1,1,gp0_lo),
      // GP0 0xA0 (image load) + xy + size
      LUI(2, 0xa000), SW(1,2,0),
      LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0),
      LUI(4, 2), ORI(4,4, 2), SW(1,4,0),
      // Payload: word0 = [RED, GREEN]
      LUI(5, (GREEN>>>16)&0xffff), ORI(5,5, GREEN & 0xffff), // pack high in 5, but we'll recombine with RED
    );
    // Assemble word0 = (GREEN<<16) | RED into r6
    prog.push(LUI(6, (GREEN>>>0) & 0xffff)); // temp usage; we will OR properly below
    // Simpler: load hi GREEN, then shift via arithmetic? MIPS shift immed only for rt register; our helper uses SLL with rt? We don't have SLL here; avoid complexity.
    // Instead, pre-supply full immediate chunks with LUI/ORI literal 32-bit constants using two regs and OR. We'll compute constants offline would be simpler, but keep simple:

    // For brevity, store constants directly using two writes
    // word0
    prog.push(LUI(7, ( (GREEN<<16) >>>16) & 0xffff), ORI(7,7, RED & 0xffff), SW(1,7,0));
    // word1 = (WHITE<<16) | BLUE
    prog.push(LUI(8, ((WHITE<<16)>>>16) & 0xffff), ORI(8,8, BLUE & 0xffff), SW(1,8,0));

    // 2) Set texture base (0xE1)
    prog.push(LUI(2, 0xe100), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));

    // 3) GTE setup: R=I, TR=0, H=1, OFX=150, OFY=80
    prog.push(
      ORI(0,9,1), CTC2(9,0), CTC2(9,4), CTC2(9,8),
      ORI(0,9,0), CTC2(9,9), CTC2(9,10), CTC2(9,11),
      ORI(0,9,1), CTC2(9,12), ORI(0,9,150), CTC2(9,13), ORI(0,9,80), CTC2(9,14),
    );

    // 4) Provide vertices V0=(0,0,1), V1=(2,0,1), V2=(0,2,1)
    prog.push(
      ORI(0,10,0), ORI(0,11,0), ORI(0,12,1), MTC2(10,0), MTC2(11,1), MTC2(12,2),
      ORI(0,10,2), ORI(0,11,0), ORI(0,12,1), MTC2(10,3), MTC2(11,4), MTC2(12,5),
      ORI(0,10,0), ORI(0,11,2), ORI(0,12,1), MTC2(10,6), MTC2(11,7), MTC2(12,8),
      GTEop(0x11),
      MFC2(13,24), MFC2(14,25), MFC2(15,30),
    );

    // 5) Issue textured triangle 0x24
    prog.push(
      // cmd word with dummy color
      LUI(2, 0x2400), SW(1,2,0),
      // xy1, uv1=(0,0)
      SW(1,13,0), LUI(3,0), ORI(3,3, UV(0,0)), SW(1,3,0),
      // xy2, uv2=(1,0)
      SW(1,14,0), LUI(3,0), ORI(3,3, UV(1,0)), SW(1,3,0),
      // xy3, uv3=(0,1)
      SW(1,15,0), LUI(3,0), ORI(3,3, UV(0,1)), SW(1,3,0),
    );

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    // Validate vertex pixels mapped as expected
    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const px1 = psx.gpu.vram[idx(80, 150)] & 0xffff; // uv (0,0) -> RED
    const px2 = psx.gpu.vram[idx(80, 152)] & 0xffff; // uv (1,0) -> GREEN
    const px3 = psx.gpu.vram[idx(82, 150)] & 0xffff; // uv (0,1) -> BLUE
    expect(px1).toBe(RED);
    expect(px2).toBe(GREEN);
    expect(px3).toBe(BLUE);
  });
});

