import fs from 'node:fs';
import { TraceEvent, TraceStream } from '../types.js';

// Redux CPU: "pppppppp iiiiiiii: <disasm>"
const reduxCpuRe = /^([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):\s*(.*)$/;

// Raw CPU: "pc=pppppppp instr=iiiiiiii ..."
const rawCpuRe = /pc=([0-9A-Fa-f]{8})\s+instr=([0-9A-Fa-f]{8})/i;

// Memory lines
// Legacy: "r32 aaaaaaaa -> vvvvvvvv @pc=pppppppp"
const legacyMemRe = /(r|w)(8|16|32)\s+([0-9A-Fa-f]+)\s+->\s+([0-9A-Fa-f]+)(?:\s+@pc=([0-9A-Fa-f]+))?/i;

// Redux mem: "MEM w32 [aaaaaaaa] = vvvvvvvv @pc=pppppppp"
const reduxMemRe = /MEM\s+(r|w)(8|16|32)\s+\[([0-9A-Fa-f]+)\]\s+(->|=)\s+([0-9A-Fa-f]+)(?:\s+@pc=([0-9A-Fa-f]+))?/i;

export const parseEmuLine = (line: string): TraceEvent | null => {
  // Try redux CPU
  let m = reduxCpuRe.exec(line);
  if (m) {
    const pc = parseInt(m[1], 16) >>> 0;
    const instr = parseInt(m[2], 16) >>> 0;
    const disasm = m[3] ?? '';
    return { kind: 'cpu', pc, instr, disasm };
  }

  // Try raw CPU
  m = rawCpuRe.exec(line);
  if (m) {
    const pc = parseInt(m[1], 16) >>> 0;
    const instr = parseInt(m[2], 16) >>> 0;
    return { kind: 'cpu', pc, instr };
  }

  // Try redux memory
  m = reduxMemRe.exec(line);
  if (m) {
    const op = m[1] as 'r' | 'w';
    const sizeNum = parseInt(m[2], 10);
    const size: 1 | 2 | 4 = sizeNum === 8 ? 1 : sizeNum === 16 ? 2 : 4;
    const addr = parseInt(m[3], 16) >>> 0;
    const value = parseInt(m[5], 16) >>> 0;
    const pcHex = m[6];
    const ev: TraceEvent = {
      kind: 'mem',
      mem: { op, size, addr, value },
    };
    if (pcHex) ev.pc = parseInt(pcHex, 16) >>> 0;
    return ev;
  }

  // Try legacy memory
  m = legacyMemRe.exec(line);
  if (m) {
    const op = m[1] as 'r' | 'w';
    const size = parseInt(m[2], 10);
    const addr = parseInt(m[3], 16) >>> 0;
    const value = parseInt(m[4], 16) >>> 0;
    const pcHex = m[5];
    const ev: TraceEvent = {
      kind: 'mem',
      mem: { op, size: size === 8 ? 1 : size === 16 ? 2 : 4, addr, value },
    };
    if (pcHex) ev.pc = parseInt(pcHex, 16) >>> 0;
    return ev;
  }

  return null;
};

export const parseEmuLog = (absPath: string): TraceStream => {
  const text = fs.readFileSync(absPath, 'utf8');
  const lines = text.split(/\r?\n/);
  const events: TraceEvent[] = [];
  
  let lastCpuPc: number | undefined;
  
  for (const line of lines) {
    if (!line.trim()) continue;
    const ev = parseEmuLine(line);
    if (!ev) continue;
    
    // Track last CPU PC for attaching memory ops
    if (ev.kind === 'cpu') {
      lastCpuPc = ev.pc;
    }
    
    // Attach PC to memory ops if not present
    if (ev.kind === 'mem' && ev.pc === undefined && lastCpuPc !== undefined) {
      ev.pc = lastCpuPc;
    }
    
    events.push(ev);
  }
  
  return { events, source: 'emu', meta: { source: 'emu', totalLines: events.length } };
};
