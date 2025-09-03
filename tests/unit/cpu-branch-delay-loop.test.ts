import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Program layout at 0x00000000:
// 0x00000000: addiu t2, zero, 0x0000   (li t2, 0)
// 0x00000004: addiu t3, zero, 0x0f80   (li t3, 0x0f80)
// 0x00000008: bne   t2, t3, -1         (branch back to 0x00000008)
// 0x0000000c: addi  t2, 0x0080         (delay slot: t2 += 0x80)
// After loop completes, t2 should be 0x1000 and PC at 0x00000010.

describe('CPU branch delay semantics: bne with addi in delay slot increments before branch', () => {
  it('increments t2 to 0x1000 and falls through when t2 == t3', () => {
    // Assemble program words (little-endian when stored to RAM):
    const words = new Uint32Array([
      0x240a0000, // addiu t2, zero, 0x0000
      0x240b0f80, // addiu t3, zero, 0x0f80
      0x154bffff, // bne t2, t3, -1 (to 0x00000008)
      0x214a0080, // addi t2, 0x0080 (delay slot)
    ]);
    const bytes = new Uint8Array(words.buffer);

    const psx = new PSXSystem();
    psx.loadProgram(bytes, 0);
    psx.cpu.s.pc = 0 >>> 0; psx.cpu.s.nextPc = 4 >>> 0;

    // Step until loop falls through (cap to avoid runaway)
    let ok = false;
    for (let i = 0; i < 200; i++) { psx.stepCpu(1); if ((psx.cpu.s.pc >>> 0) === 0x00000010 >>> 0) { ok = true; break; } }

    // After loop completes, PC should have advanced past 0x0000000c to 0x00000010
    expect(ok).toBe(true);
    // t2 should be incremented in the delay slot of the final (not-taken) branch: 0x1000
    expect(psx.cpu.s.regs[10] >>> 0).toBe(0x00001000 >>> 0);
    // t3 unchanged at 0x0f80
    expect(psx.cpu.s.regs[11] >>> 0).toBe(0x00000f80 >>> 0);
  });
});

