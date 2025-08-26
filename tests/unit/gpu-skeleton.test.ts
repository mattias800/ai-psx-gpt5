import { describe, it, expect } from 'vitest';
import { GPU } from '../../packages/emulator-gpu/src/gpu';

describe('GPU skeleton', () => {
  it('VRAM clear and GP1 status', () => {
    const gpu = new GPU();
    gpu.clearVRAM(0x7bef);
    let sum = 0;
    for (let i = 0; i < gpu.vram.length; i += 8191) sum = (sum + gpu.vram[i]) & 0xffff;
    expect(sum).toBe((0x7bef * Math.ceil(gpu.vram.length/8191)) & 0xffff);
    expect(gpu.readGP1() >>> 0).toBe(gpu.status >>> 0);
  });
});

