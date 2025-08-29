import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync, writeFileSync } from 'fs';

// Manual harness to step BIOS and dump a CPU trace. Run with:
//   npx vitest --run tests/manual/bios-trace.test.ts
// The file pc1001.bin must be present in repo root.

describe('BIOS trace harness', () => {
  it('steps BIOS and writes bios.trace', () => {
    let bios: Buffer;
    try { bios = readFileSync('pc1001.bin'); }
    catch {
      try { bios = readFileSync('PC1001.BIN'); }
      catch {
        try { bios = readFileSync('scph1001.bin'); }
        catch (e) {
          throw new Error('Could not find BIOS file. Place pc1001.bin (or PC1001.BIN/scph1001.bin) in the repo root.');
        }
      }
    }
    const psx = new PSXSystem();

    // Map BIOS and set CPU entry to 0xBFC00000
    psx.loadBIOS(bios);

    // Enable CPU trace and memory trace: capture lines in arrays
    const lines: string[] = [];
    const mem: string[] = [];
    psx.enableCpuTrace({ output: (s) => lines.push(s), regsFormat: 'named' });
    psx.enableMemTrace({ output: (s) => mem.push(s) });

    // Force CPU PC to BIOS entry
    (psx as any).cpu.s.pc = 0xbfc00000 >>> 0;
    (psx as any).cpu.s.nextPc = 0xbfc00004 >>> 0;

    // Step a bounded number of instructions to avoid runaway
    const maxInstr = 20000;
    for (let i = 0; i < maxInstr; i++) {
      try { (psx as any).cpu.step(); }
      catch (e) { break; }
    }

    // Write traces to files in repo root
    writeFileSync('bios.trace', lines.join('\n'));
    writeFileSync('bios-mem.trace', mem.join('\n'));

    // Sanity check: we produced at least some lines
    expect(lines.length).toBeGreaterThan(0);
  });
});

