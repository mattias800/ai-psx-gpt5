import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import type { CPUState } from '@ai-psx/cpu';
import { readFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { try { return new Uint8Array(readFileSync(n)); } catch {} }
  throw new Error('Missing BIOS at repo root');
};

describe('Diagnose: who zeros RAM[0x000000B0] after it is set to 0x3c080000', () => {
  it('records PC when 0xB0 becomes 0x3c080000 and when it is later cleared', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

    let lastB0 = psx.as.read32(0x000000b0) >>> 0;
    let setPc = 0, setInstr = 0;
    let clrPc = 0, clrInstr = 0;

    const max = 10_000_000;
    let hitJr = false;

    // Trace PC/instr before each step
    psx.cpu.setTracer((pc: number, instr: number, _s: CPUState) => {
      // no-op; we will read last snapshot via closure if needed
    });

    for (let i = 0; i < max; i++) {
      const pc = psx.cpu.s.pc >>> 0;
      const instr = psx.as.read32(pc) >>> 0;
      // Step
      psx.cpu.step();
      // Observe memory
      const b0 = psx.as.read32(0x000000b0) >>> 0;
      if (b0 !== lastB0) {
        if (b0 === 0x3c080000 >>> 0 && setPc === 0) { setPc = pc; setInstr = instr; }
        if (b0 === 0x00000000 && b0 !== lastB0) { clrPc = pc; clrInstr = instr; }
        lastB0 = b0;
      }
      if (pc === 0xbfc0d9a4 >>> 0) { hitJr = true; break; }
    }

    // Report findings via assertions with messages
    expect(setPc !== 0, 'Never saw 0xB0 set to 0x3c080000').toBe(true);
    // We expect it to remain set until jump; if clrPc is non-zero, we know which instruction cleared it.
    if (clrPc !== 0) {
      throw new Error(`0xB0 was cleared before jr. Last change pcs: set at pc=${setPc.toString(16)} instr=${setInstr.toString(16)}, cleared at pc=${clrPc.toString(16)} instr=${clrInstr.toString(16)}; final=0x${lastB0.toString(16)}`);
    }
    expect(hitJr, 'Did not reach jr $t2 at bfc0d9a4 within limit').toBe(true);
    expect(lastB0 >>> 0).toBe(0x3c080000 >>> 0);
  });
});

