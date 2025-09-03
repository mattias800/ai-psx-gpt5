import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { try { return new Uint8Array(readFileSync(n)); } catch {} }
  throw new Error('Missing BIOS at repo root');
};

describe('Check t2/t3 at bfc01a30 (should be equal 0x00000f80)', () => {
  it('matches reference at bfc01a30', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    const target = 0xbfc01a30 >>> 0;
    const max = 2000000;
    let i = 0; for (; i < max; i++) { if ((psx.cpu.s.pc >>> 0) === target) break; psx.cpu.step(); }
    expect(i < max).toBe(true);
    const t2 = psx.cpu.s.regs[10] >>> 0; // r10
    const t3 = psx.cpu.s.regs[11] >>> 0; // r11
    expect(t2 >>> 0).toBe(0x00000f80 >>> 0);
    expect(t3 >>> 0).toBe(0x00000f80 >>> 0);
  });
});

