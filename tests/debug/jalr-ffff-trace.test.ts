import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

// Debug-only tracer for JALR to 0xffffffff. Excluded by default via vitest.config.ts
// Run explicitly with:
//   npm run test -- tests/debug/jalr-ffff-trace.test.ts
// Optional env: PSX_EXEC_GUARD=1 to avoid taking bad jumps

describe('Trace JALR to 0xffffffff', () => {
  test('capture first occurrence and context', () => {
    const sys = new PSXSystem();
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);

    // Reset PC
    sys.cpu.s.pc = 0xbfc00000 >>> 0;
    sys.cpu.s.nextPc = 0xbfc00004 >>> 0;

    type TraceRec = { pc: number, instr: number, ra: number, sp: number };
    const ring: TraceRec[] = new Array(64).fill(0).map(() => ({ pc:0, instr:0, ra:0, sp:0 }));
    let rHead = 0;

    let found = false;
    let foundAt = 0;
    let foundPc = 0;
    let foundInstr = 0;
    let foundRs = 0;

    sys.cpu.setTracer((pc: number, instr: number, s: import('@ai-psx/cpu').CPUState) => {
      // Record ring buffer of recent ops
      ring[rHead] = { pc: pc >>> 0, instr: instr >>> 0, ra: s.regs[31] >>> 0, sp: s.regs[29] >>> 0 };
      rHead = (rHead + 1) & (ring.length - 1);
      // Decode
      const op = (instr >>> 26) & 0x3f;
      const fn = instr & 0x3f;
      if (op === 0 && fn === 0x09) { // JALR
        const rs = (instr >>> 21) & 31;
        const dest = s.regs[rs] >>> 0;
        if (dest === 0xffffffff) {
          found = true;
          foundPc = pc >>> 0;
          foundInstr = instr >>> 0;
          foundRs = rs;
        }
      }
    });

    let steps = 0;
    try {
      for (; steps < 1000000; steps++) {
        sys.cpu.step();
        if (found) break;
      }
    } catch (e: any) {
      console.log(`Execution stopped at ${steps}: ${e?.message ?? e}`);
    }

    if (found) {
      console.log(`\n=== Detected JALR to 0xffffffff at pc=0x${(foundPc>>>0).toString(16)} instr=0x${(foundInstr>>>0).toString(16)} rs=${foundRs} ===`);
      console.log('Recent context (most recent last):');
      for (let i = 0; i < ring.length; i++) {
        const idx = (rHead + i) & (ring.length - 1);
        const r = ring[idx];
        if (r.pc === 0 && r.instr === 0) continue;
        console.log(`  pc=0x${(r.pc>>>0).toString(16).padStart(8,'0')} instr=0x${(r.instr>>>0).toString(16).padStart(8,'0')} ra=0x${(r.ra>>>0).toString(16).padStart(8,'0')} sp=0x${(r.sp>>>0).toString(16).padStart(8,'0')}`);
      }
    }

    // The test is informational; ensure it actually executed for a bit
    expect(steps).toBeGreaterThan(1000);
  });
});

