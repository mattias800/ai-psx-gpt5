import { describe, it, expect } from 'vitest';
import { mask, signExtend, rotl32, rotr32 } from '@ai-psx/shared';

describe('shared numeric helpers', () => {
  it('mask', () => {
    expect(mask(0)).toBe(0);
    expect(mask(1)).toBe(0b1);
    expect(mask(8)).toBe(0xff);
    expect(mask(16)).toBe(0xffff);
  });
  it('signExtend', () => {
    expect(signExtend(0x7f, 8)).toBe(127);
    expect(signExtend(0x80, 8)).toBe(-128);
    expect(signExtend(0xffff, 16)).toBe(-1);
  });
  it('rotations', () => {
    expect(rotl32(0x80000001, 1) >>> 0).toBe(0x00000003);
    expect(rotr32(0x80000001, 1) >>> 0).toBe(0xc0000000 >>> 0);
  });
});

