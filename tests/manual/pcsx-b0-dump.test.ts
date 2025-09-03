import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import type { CPUState } from '@ai-psx/cpu';
import { readFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { try { return new Uint8Array(readFileSync(n)); } catch {} }
  throw new Error('Missing BIOS at repo root');
};

function sign16(n: number): number { const x = n & 0xffff; return (x & 0x8000) ? (x | 0xffff0000) : x; }

describe('Dump context at the instruction that clears RAM[0x000000B0]', () => {
  it('finds and decodes the exact instruction that clears RAM[0xB0] after seeding', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

    const seedPc = 0xbfc042c4 >>> 0; // acc7fffc (store of 0x3c080000 to [0xB0])

    let steps = 0; const max = 12_000_000;
    let seeded = false;
    let lastB0 = psx.as.read32(0x000000b0) >>> 0;

    while (steps++ < max) {
      const pc = psx.cpu.s.pc >>> 0;
      const instr = psx.as.read32(pc) >>> 0;
      // Execute one instruction
      psx.cpu.step();
      const newB0 = psx.as.read32(0x000000b0) >>> 0;

      if (!seeded && pc === seedPc) {
        seeded = true;
      }

      if (seeded && lastB0 === 0x3c080000 >>> 0 && newB0 === 0) {
        // The instruction at pc just executed cleared 0xB0. Decode it.
        const op = (instr >>> 26) & 0x3f;
        const rs = (instr >>> 21) & 0x1f; // base
        const rt = (instr >>> 16) & 0x1f; // src
        const imm = sign16(instr & 0xffff);
        const baseVal = psx.cpu.s.regs[rs] >>> 0; // after step; approximate
        const rtVal = psx.cpu.s.regs[rt] >>> 0;   // after step; approximate
        const addr = (baseVal + imm) >>> 0;
        throw new Error(`cleared at pc=0x${pc.toString(16)} instr=0x${instr.toString(16)} op=${op.toString(16)} rs=r${rs} base=0x${baseVal.toString(16)} rt=r${rt} rtVal=0x${rtVal.toString(16)} imm=${imm} addr=0x${addr.toString(16)} newB0=0x${newB0.toString(16)}`);
      }

      lastB0 = newB0 >>> 0;
    }
    throw new Error('Did not observe clearing of 0xB0 after seed within max steps');
  });
});

