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
const OR   = (rs: number, rt: number, rd: number) => (0x00<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x25;
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;

// Draw a textured triangle with flat red over white texture. Expect red at all three vertices via modulation.
describe('Integration: textured flat triangle over white texture (0x24 + 0xE1)', () => {
  it('uploads 2x2 white texture and draws red triangle via command color modulation', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    const prog: number[] = [];

    // Upload 2x2 white texture at (60,70)
    const baseX=60, baseY=70;
    const WHITE=0x7fff;
    prog.push(LUI(1, gp0_hi), ORI(1,1,gp0_lo));
    // GP0 0xA0 (image load)
    prog.push(LUI(2, 0xa000), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));
    prog.push(LUI(4, 2), ORI(4,4, 2), SW(1,4,0));
    // Two words of white
    prog.push(LUI(5, (WHITE>>>16)&0xffff), ORI(5,5, WHITE & 0xffff), SW(1,5,0));
    prog.push(LUI(5, (WHITE>>>16)&0xffff), ORI(5,5, WHITE & 0xffff), SW(1,5,0));

    // Set texture base (0xE1)
    prog.push(LUI(2, 0xe100), SW(1,2,0));
    prog.push(LUI(3, baseY), ORI(3,3, baseX), SW(1,3,0));

    // Issue GP0 0x24 textured triangle with flat color REDc=0x0000ff (RRGGBB)
    const x=220,y=120;
    const REDc = 0x0000ff;
    // cmd = (0x24<<24) | REDc
    prog.push(LUI(2, 0x2400));
    prog.push(ORI(0,4, REDc & 0xffff)); // r4 = 0x0000ff (fits in low 16)
    prog.push(OR(2,4,2), SW(1,2,0));
    // xy1, uv1
    prog.push(LUI(6, (XY(y,x)>>>16)&0xffff), ORI(6,6, XY(y,x) & 0xffff), SW(1,6,0));
    prog.push(LUI(3,0), ORI(3,3,UV(0,0)), SW(1,3,0));
    // xy2, uv2
    prog.push(LUI(7, (XY(y, x+2)>>>16)&0xffff), ORI(7,7, XY(y, x+2) & 0xffff), SW(1,7,0));
    prog.push(LUI(3,0), ORI(3,3,UV(1,0)), SW(1,3,0));
    // xy3, uv3
    prog.push(LUI(8, (XY(y+2, x)>>>16)&0xffff), ORI(8,8, XY(y+2, x) & 0xffff), SW(1,8,0));
    prog.push(LUI(3,0), ORI(3,3,UV(0,1)), SW(1,3,0));

    const bytes = emit(prog);
    psx.loadProgram(bytes, 0);
    psx.stepCpu(bytes.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const RED555=0x7c00;
    const anyInArea = (cx:number,cy:number,color:number,rad:number)=>{
      for (let dy=-rad; dy<=rad; dy++) for (let dx=-rad; dx<=rad; dx++) {
        const px = psx.gpu.vram[idx((cy+dy)&0x1ff, (cx+dx)&0x3ff)] & 0xffff;
        if (px === color) return true;
      }
      return false;
    };
    expect(anyInArea(x,y,RED555,3)).toBe(true);
    expect(anyInArea(x+2,y,RED555,3)).toBe(true);
    expect(anyInArea(x,y+2,RED555,3)).toBe(true);
  });
});

