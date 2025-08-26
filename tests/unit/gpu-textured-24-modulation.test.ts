import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

// Validates that 0x24 modulates texture color when color != 0 and preserves legacy behavior when color == 0.
describe('GPU 0x24 textured triangle color modulation (simplified)', () => {
  const XY = (yy:number,xx:number)=>(((yy & 0x1ff) << 16) | (xx & 0x3ff)) >>> 0;
  const UV = (u:number,v:number)=>(((v & 0xff) << 8) | (u & 0xff)) >>> 0;
  const idx = (yy: number, xx: number) => (yy * 1024 + xx);

  it('modulates with cmd color when non-zero, raw when zero', () => {
    const gpu = new GPU();
    // Upload 2x2 white texture at (10,10)
    const baseX=10, baseY=10;
    const WHITE=0x7fff;
    gpu.writeGP0((0xa0<<24));
    gpu.writeGP0(XY(baseY, baseX));
    gpu.writeGP0(XY(2,2));
    gpu.writeGP0((WHITE<<16)|WHITE);
    gpu.writeGP0((WHITE<<16)|WHITE);
    // Set texture base (0xE1)
    gpu.writeGP0(0xe1000000); gpu.writeGP0(XY(baseY, baseX));

    // Draw with color=0 (legacy raw sampling)
    const x=100,y=50;
    gpu.writeGP0((0x24<<24) | 0x000000);
    gpu.writeGP0(XY(y,x));      gpu.writeGP0(UV(0,0));
    gpu.writeGP0(XY(y,x+2));    gpu.writeGP0(UV(1,0));
    gpu.writeGP0(XY(y+2,x));    gpu.writeGP0(UV(0,1));
    expect(gpu.vram[idx(y,x)] & 0xffff).toBe(WHITE);

    // Draw with color=red (0x0000ff) -> red output over white texture
    const RED555=0x7c00;
    gpu.writeGP0((0x24<<24) | 0x0000ff);
    gpu.writeGP0(XY(y+10,x));      gpu.writeGP0(UV(0,0));
    gpu.writeGP0(XY(y+10,x+2));    gpu.writeGP0(UV(1,0));
    gpu.writeGP0(XY(y+12,x));      gpu.writeGP0(UV(0,1));
    expect(gpu.vram[idx(y+10,x)] & 0xffff).toBe(RED555);
  });
});

