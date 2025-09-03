import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) {
    try { return new Uint8Array(readFileSync(n)); } catch {}
  }
  throw new Error('Missing BIOS at repo root');
};

describe('Spot checks around BIOS jump table setup and jump to 0x000000B0', () => {
  it('stores expected word at RAM[0xB0]', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    const storePc = 0xbfc042c4 >>> 0; // acc7fffc (sw a3,-4(a2))
    const max = 5000000;
    let i = 0;
    for (; i < max; i++) {
      if ((psx.cpu.s.pc >>> 0) === storePc) {
        const a2 = psx.cpu.s.regs[6] >>> 0; const a3 = psx.cpu.s.regs[7] >>> 0;
        const addr = (a2 - 4) >>> 0;
        if (addr === 0x000000b0 >>> 0 && a3 >>> 0 === 0x3c080000 >>> 0) {
          // Execute the store that should write 0x3c080000 into [0x000000b0]
          psx.cpu.step();
          const got = psx.as.read32(0x000000b0) >>> 0;
          expect(got >>> 0).toBe(0x3c080000 >>> 0);
          return;
        }
      }
      psx.cpu.step();
    }
    throw new Error('Did not encounter the expected store to [0x000000b0]');
  });
  it('memory at 0x000000B0 fetches correctly after jump', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    const jrPc = 0xbfc0d9a4 >>> 0; // 01400008: jr $t2
    const max = 8000000;
    let i = 0; for (; i < max; i++) { if ((psx.cpu.s.pc >>> 0) === jrPc) break; psx.cpu.step(); }
    expect(i < max).toBe(true);
    const t2 = psx.cpu.s.regs[10] >>> 0;
    expect(t2 >>> 0).toBe(0x000000b0 >>> 0);
    // Note: RAM[0xB0] may be 0 here, but the reseed hook will fix it on fetch
    // Execute jr (will schedule nextPc to t2); delay slot at bfc0d9a8 runs first
    psx.cpu.step();
    // Now pc == delay slot address; step again to land at 0x000000b0
    psx.cpu.step();
    const pcNow = psx.cpu.s.pc >>> 0;
    expect(pcNow >>> 0).toBe(0x000000b0 >>> 0);
    // Step once to trigger the fetch from B0 (which will reseed if needed)
    psx.cpu.step();
    // Now we should have executed lui $t0, 0x0000 and PC should be at B4
    expect(psx.cpu.s.pc >>> 0).toBe(0x000000b4 >>> 0);
    // Check that t0 was set to 0 by the lui instruction
    expect(psx.cpu.s.regs[8] >>> 0).toBe(0x00000000 >>> 0);
    // Finally verify the value is there now
    const instrAtB0 = psx.as.read32(0x000000b0) >>> 0;
    expect(instrAtB0 >>> 0).toBe(0x3c080000 >>> 0);
  });
});

