import { describe, it, expect } from 'vitest';
import { compareTraces } from '../src/compare.js';

const cpu = (pc: number, instr: number, disasm: string = '') => ({ kind: 'cpu', pc, instr, disasm } as const);

describe('compareTraces (ts)', () => {
  it('detects no divergence when matching', () => {
    const lhs = { source: 'pcsx' as const, meta: { source: 'pcsx' as const }, events: [cpu(0x10, 0), cpu(0x14, 0x3c010000)] };
    const rhs = { source: 'emu' as const, meta: { source: 'emu' as const }, events: [cpu(0x10, 0), cpu(0x14, 0x3c010000)] };
    const r = compareTraces(lhs as any, rhs as any, { startLine: 1, context: 2 });
    expect(r.diverged).toBe(false);
  });
});
