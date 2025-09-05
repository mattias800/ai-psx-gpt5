import { describe, it, expect } from 'vitest';
import { compareTraces } from '../src/compare.js';

const cpu = (pc: number, instr: number, disasm: string = '') => ({ kind: 'cpu', pc, instr, disasm } as const);

describe('compareTraces', () => {
  it('detects no divergence when matching', () => {
    const lhs = { source: 'pcsx', meta: { source: 'pcsx' }, events: [cpu(0x10, 0), cpu(0x14, 0x3c010000)] } as const;
    const rhs = { source: 'emu', meta: { source: 'emu' }, events: [cpu(0x10, 0), cpu(0x14, 0x3c010000)] } as const;
    const r = compareTraces(lhs as any, rhs as any, { startLine: 1, context: 2 });
    expect(r.diverged).toBe(false);
  });

  it('detects pc mismatch', () => {
    const lhs = { source: 'pcsx', meta: { source: 'pcsx' }, events: [cpu(0x10, 0), cpu(0x14, 0x3c010000)] } as const;
    const rhs = { source: 'emu', meta: { source: 'emu' }, events: [cpu(0x10, 0), cpu(0x18, 0x3c010000)] } as const;
    const r = compareTraces(lhs as any, rhs as any, { startLine: 1, context: 2 });
    expect(r.diverged).toBe(true);
    expect(r.reason).toBe('pc-mismatch');
  });
});
