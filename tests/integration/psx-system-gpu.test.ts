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
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

// Build a program that issues GP0 0x64 filled rect for a 2x2 at (100,50) with color 0x00ff00
function buildDrawRectProgram(): Uint8Array {
  const GP0 = 0x1f801810;
  const gp0_hi = (GP0 >>> 16) & 0xffff;
  const gp0_lo = GP0 & 0xffff;
  const cmd = (0x64 << 24) | 0x00ff00; // opcode high byte + color
  const cmd_hi = (cmd >>> 16) & 0xffff;
  const cmd_lo = cmd & 0xffff;
  const xy = (50 << 16) | 100; // y=50, x=100
  const xy_hi = (xy >>> 16) & 0xffff;
  const xy_lo = xy & 0xffff;
  const size = (2 << 16) | 2; // h=2, w=2
  const size_hi = (size >>> 16) & 0xffff;
  const size_lo = size & 0xffff;
  const code = [
    // r1 = GP0 address
    LUI(1, gp0_hi), ORI(1,1,gp0_lo),
    // r2 = cmd word
    LUI(2, cmd_hi), ORI(2,2,cmd_lo), SW(1,2,0),
    // r3 = xy word
    LUI(3, xy_hi), ORI(3,3,xy_lo), SW(1,3,0),
    // r4 = size word
    LUI(4, size_hi), ORI(4,4,size_lo), SW(1,4,0),
  ];
  return emit(code);
}

describe('PSXSystem GPU draw via CPU IO writes', () => {
  it('fills VRAM as expected after executing draw program', () => {
    const psx = new PSXSystem();
    const prog = buildDrawRectProgram();
    psx.loadProgram(prog, 0);

    // Execute enough instructions to perform the stores
    psx.stepCpu(prog.length / 4);

    const idx = (yy: number, xx: number) => yy * 1024 + xx;
    const y = 50, x = 100;
    const bgr555 = 0x03e0; // green
    expect(psx.gpu.vram[idx(y, x)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y, x+1)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y+1, x)] & 0xffff).toBe(bgr555);
    expect(psx.gpu.vram[idx(y+1, x+1)] & 0xffff).toBe(bgr555);
  });
});

