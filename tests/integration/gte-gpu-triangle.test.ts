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
const OR   = (rs: number, rt: number, rd: number) => (0x00<<26) | (rs<<21) | (rt<<16) | (rd<<11) | (0<<6) | 0x25;
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

// COP2
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);

describe('Integration: GTE SXY -> GPU triangle (0x20)', () => {
  it('projects 3 vertices with RTPT and draws a small red triangle at (100,50)', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810;
    const gp0_hi = (GP0 >>> 16) & 0xffff;
    const gp0_lo = GP0 & 0xffff;

    // Triangle at (100,50), (102,50), (100,52)
    // Set GTE to identity, H=1, OFX=100, OFY=50
    const prog = emit([
      // R=I
      ORI(0,1,1), CTC2(1,0), CTC2(1,4), CTC2(1,8),
      // TR=0
      ORI(0,1,0), CTC2(1,9), CTC2(1,10), CTC2(1,11),
      // H=1, OFX=100, OFY=50
      ORI(0,1,1), CTC2(1,12), ORI(0,1,100), CTC2(1,13), ORI(0,1,50), CTC2(1,14),
      // V0=(0,0,1)
      ORI(0,2,0), ORI(0,3,0), ORI(0,4,1), MTC2(2,0), MTC2(3,1), MTC2(4,2),
      // V1=(2,0,1) -> at (102,50)
      ORI(0,2,2), ORI(0,3,0), ORI(0,4,1), MTC2(2,3), MTC2(3,4), MTC2(4,5),
      // V2=(0,2,1) -> at (100,52)
      ORI(0,2,0), ORI(0,3,2), ORI(0,4,1), MTC2(2,6), MTC2(3,7), MTC2(4,8),
      // RTPT projects and fills SXY FIFO
      GTEop(0x11),
      // Read SXY0/1/2
      MFC2(8,24), MFC2(9,25), MFC2(10,30),
      // Build and write GP0 0x20 triangle with color red (0x0000ff)
      // r1 = GP0 address
      LUI(1, gp0_hi), ORI(1,1,gp0_lo),
      // r2 = cmd = (0x20<<24) | 0x0000ff
      LUI(2, 0x2000), ORI(2,2,0x00ff), SW(1,2,0),
      // XY1, XY2, XY3 are already packed in r8,r9,r10
      SW(1,8,0), SW(1,9,0), SW(1,10,0),
    ]);

    psx.loadProgram(prog, 0);
    psx.stepCpu(prog.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const red555 = 0x7c00;
    // Check a few pixels
    expect(psx.gpu.vram[idx(50, 100)] & 0xffff).toBe(red555);
    expect(psx.gpu.vram[idx(51, 101)] & 0xffff).toBe(red555);
    expect(psx.gpu.vram[idx(53, 103)] & 0xffff).toBe(0);
  });
});

