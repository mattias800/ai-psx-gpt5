import fs from 'node:fs';
import path from 'node:path';
import { TraceEvent, TraceStream } from '../types.js';

const cpuLineRe = /^([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):\s*(.*)$/;

const parseUsedRegs = (text: string): Record<string, number> => {
  const used: Record<string, number> = {};
  const regRe = /\$(zero|at|v[01]|a[0-3]|t[0-9]|s[0-7]|k[01]|gp|sp|fp|ra)\(([0-9A-Fa-f]{8})\)/g;
  let m: RegExpExecArray | null;
  while ((m = regRe.exec(text)) !== null) {
    used[m[1]] = parseInt(m[2], 16) >>> 0;
  }
  return used;
};

const parseInlineMem = (text: string): { op: 'r'|'w'; size: 1|2|4; addr: number; value: number } | null => {
  // e.g., ([1f801010] = 00000000) or ([1f801008] -> 00000000)
  const m = /\(\[([0-9A-Fa-f]{8})\]\s*(=|->)\s*([0-9A-Fa-f]+)\)/.exec(text);
  if (!m) return null;
  const addr = parseInt(m[1], 16) >>> 0;
  const isWrite = m[2] === '=';
  const valHex = m[3];
  const value = parseInt(valHex, 16) >>> 0;
  const size: 1|2|4 = (valHex.length <= 2 ? 1 : valHex.length <= 4 ? 2 : 4);
  return { op: isWrite ? 'w' : 'r', size, addr, value };
};

export const parsePcsxLog = (absPath: string): TraceStream => {
  const text = fs.readFileSync(absPath, 'utf8');
  const lines = text.split(/\r?\n/);
  const events: TraceEvent[] = [];
  for (const line of lines) {
    const m = cpuLineRe.exec(line);
    if (!m) continue; // ignore non-CPU lines
    const pc = parseInt(m[1], 16) >>> 0;
    const instr = parseInt(m[2], 16) >>> 0;
    const disasm = m[3] ?? '';
    const usedRegs = parseUsedRegs(disasm);
    const inlineMem = parseInlineMem(disasm);

    const ev: TraceEvent = { kind: 'cpu', pc, instr, disasm, usedRegs };
    if (inlineMem) ev.mem = inlineMem;
    events.push(ev);
  }
  return { events, source: 'pcsx', meta: { source: 'pcsx', totalLines: events.length } };
};

