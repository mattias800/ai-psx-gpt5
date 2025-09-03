import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import type { CPUState } from '@ai-psx/cpu';
import fs from 'node:fs';
import path from 'node:path';

// Accuracy test: compare our BIOS CPU trace against a reference log from PCSX-Redux.
// Requirements at repo root:
// - pcsx-redux-bios.log (reference CPU trace produced by PCSX-Redux)
// - BIOS file: one of scph1001.bin, SCPH1001.BIN, pc1001.bin, PC1001.BIN
// Options:
// - BIOS_TRACE_MAX_LINES: number to cap how many lines to compare
// - OUR_BIOS_LOG_PATH: if set, write our produced trace to this file during the test

interface TraceRecord {
  pc: number;
  instr: number;
  hi: number;
  lo: number;
  regs: Uint32Array;
}

type FieldKind = 'pc' | 'instr' | 'hi' | 'lo' | 'reg';

interface TraceFieldSpec {
  start: number;
  end: number; // exclusive
  kind: FieldKind;
  regIndex?: number;
  base: 16 | 10;
  width: number; // length of numeric substring (no 0x)
  uppercase: boolean;
  prefix0x: boolean;
}

interface TraceLineSpec {
  original: string;
  fields: TraceFieldSpec[];
  isCpuLine: boolean;
}

const repoRoot: string = process.cwd();

const tryBiosNames: string[] = ['scph1001.bin', 'SCPH1001.BIN', 'pc1001.bin', 'PC1001.BIN'];

const resolveBiosPath = (): string => {
  for (const n of tryBiosNames) {
    const p = path.join(repoRoot, n);
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Missing BIOS at repo root: place one of scph1001.bin, SCPH1001.BIN, pc1001.bin, or PC1001.BIN');
};

const readBiosBytes = (): Uint8Array => {
  const p = resolveBiosPath();
  const buf = fs.readFileSync(p);
  return new Uint8Array(buf);
};

const resolveReduxLogPath = (): string => {
  const p = path.join(repoRoot, 'pcsx-redux-bios.log');
  if (!fs.existsSync(p)) throw new Error('Missing pcsx-redux-bios.log at repo root. Place the PCSX-Redux BIOS CPU trace there.');
  return p;
};

const readReferenceLines = (absPath: string): string[] => {
  const text = fs.readFileSync(absPath, 'utf8');
  const lines = text.split(/\r?\n/).map((l) => l.replace(/\s+$/, ''));
  return lines.filter((l) => l.length > 0);
};

// Register name mapping
const regNameToIndex = (name: string): number | null => {
  const n = name.toLowerCase();
  if (n === 'zero' || n === 'r0') return 0;
  if (n === 'at' || n === 'r1') return 1;
  if (n === 'v0' || n === 'r2') return 2;
  if (n === 'v1' || n === 'r3') return 3;
  if (n === 'a0' || n === 'r4') return 4;
  if (n === 'a1' || n === 'r5') return 5;
  if (n === 'a2' || n === 'r6') return 6;
  if (n === 'a3' || n === 'r7') return 7;
  if (n === 't0' || n === 'r8') return 8;
  if (n === 't1' || n === 'r9') return 9;
  if (n === 't2' || n === 'r10') return 10;
  if (n === 't3' || n === 'r11') return 11;
  if (n === 't4' || n === 'r12') return 12;
  if (n === 't5' || n === 'r13') return 13;
  if (n === 't6' || n === 'r14') return 14;
  if (n === 't7' || n === 'r15') return 15;
  if (n === 's0' || n === 'r16') return 16;
  if (n === 's1' || n === 'r17') return 17;
  if (n === 's2' || n === 'r18') return 18;
  if (n === 's3' || n === 'r19') return 19;
  if (n === 's4' || n === 'r20') return 20;
  if (n === 's5' || n === 'r21') return 21;
  if (n === 's6' || n === 'r22') return 22;
  if (n === 's7' || n === 'r23') return 23;
  if (n === 't8' || n === 'r24') return 24;
  if (n === 't9' || n === 'r25') return 25;
  if (n === 'k0' || n === 'r26') return 26;
  if (n === 'k1' || n === 'r27') return 27;
  if (n === 'gp' || n === 'r28') return 28;
  if (n === 'sp' || n === 'r29') return 29;
  if (n === 'fp' || n === 's8' || n === 'r30') return 30;
  if (n === 'ra' || n === 'r31') return 31;
  if (n.startsWith('r')) {
    const idx = Number.parseInt(n.slice(1), 10);
    if (!Number.isNaN(idx) && idx >= 0 && idx <= 31) return idx;
  }
  return null;
};

const tokenRegex: RegExp = /(?:\b(pc|PC|instr|INSTR|hi|HI|lo|LO|r\d{1,2}|zero|at|v[01]|a[0-3]|t[0-9]|s[0-8]|k[01]|gp|sp|fp|ra))\s*[:=]\s*(0x)?([0-9A-Fa-f]+)/g;

const buildLineSpec = (line: string): TraceLineSpec | null => {
  // First, support PCSX-Redux disasm header format:
  //   bfc00000 3c080013: ...
  // i.e., 8-hex PC, whitespace, 8-hex instr, colon.
  const mHead = line.match(/^([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):/);
  if (mHead) {
    const pcStr = mHead[1];
    const instrStr = mHead[2];
    const fields: TraceFieldSpec[] = [];
    // pc is at start of line
    fields.push({
      start: 0,
      end: 8,
      kind: 'pc',
      base: 16,
      width: 8,
      uppercase: /[A-F]/.test(pcStr),
      prefix0x: false,
    });
    // instr: find the first occurrence of instrStr followed by ':' to locate accurately
    let instrStart = line.indexOf(instrStr + ':');
    if (instrStart < 0) instrStart = line.indexOf(instrStr);
    if (instrStart >= 0) {
      fields.push({
        start: instrStart,
        end: instrStart + instrStr.length,
        kind: 'instr',
        base: 16,
        width: instrStr.length,
        uppercase: /[A-F]/.test(instrStr),
        prefix0x: false,
      });
      return { original: line, fields, isCpuLine: true };
    }
    // Fallback: ignore if cannot locate instruction token precisely
  }

  // Fallback: labeled key=value or key:value fields (our own trace format, etc.)
  const fields: TraceFieldSpec[] = [];
  let isCpu = false;
  tokenRegex.lastIndex = 0;
  for (;;) {
    const m = tokenRegex.exec(line);
    if (!m) break;
    const labelRaw = m[1];
    const label = labelRaw.toLowerCase();
    const has0x = !!m[2];
    const numRaw = m[3];
    const valueStart = m.index + m[0].lastIndexOf(numRaw);
    const valueEnd = valueStart + numRaw.length;
    const width = numRaw.length;
    const uppercase = /[A-F]/.test(numRaw);
    const prefix0x = has0x;
    let kind: FieldKind | null = null;
    let regIndex: number | undefined;
    if (label === 'pc') { kind = 'pc'; isCpu = true; }
    else if (label === 'instr' || label === 'instr') { kind = 'instr'; isCpu = true; }
    else if (label === 'hi') { kind = 'hi'; isCpu = true; }
    else if (label === 'lo') { kind = 'lo'; isCpu = true; }
    else {
      const idx = regNameToIndex(label);
      if (idx !== null) { kind = 'reg'; regIndex = idx; isCpu = true; }
    }
    if (!kind) continue;
    const base: 16 | 10 = 16; // BIOS logs use hex fields; default to hex
    fields.push({ start: valueStart, end: valueEnd, kind, regIndex, base, width, uppercase, prefix0x });
  }
  if (!isCpu || fields.length === 0) return null;
  return { original: line, fields, isCpuLine: true };
};

const formatHex = (v: number, width: number, uppercase: boolean): string => {
  const u = v >>> 0;
  let s = u.toString(16);
  if (s.length < width) s = '0'.repeat(width - s.length) + s;
  if (s.length > width) s = s.slice(-width);
  return uppercase ? s.toUpperCase() : s.toLowerCase();
};

const applyLineSpec = (spec: TraceLineSpec, rec: TraceRecord): string => {
  const out: string[] = spec.original.split('');
  for (const f of spec.fields) {
    const span = f.end - f.start;
    let val = 0;
    switch (f.kind) {
      case 'pc': val = rec.pc >>> 0; break;
      case 'instr': val = rec.instr >>> 0; break;
      case 'hi': val = rec.hi >>> 0; break;
      case 'lo': val = rec.lo >>> 0; break;
      case 'reg': {
        const idx = f.regIndex ?? 0;
        val = rec.regs[idx] >>> 0;
        break;
      }
    }
    let rep = '';
    if (f.base === 16) rep = formatHex(val, f.width, f.uppercase);
    else rep = String(val);
    if (rep.length !== span) {
      if (rep.length < span) rep = rep.padStart(span, '0');
      else rep = rep.slice(rep.length - span);
    }
    for (let i = 0; i < span; i++) out[f.start + i] = rep[i] ?? ' ';
  }
  return out.join('');
};

const parseMaxLinesEnv = (): number | null => {
  const raw = process.env.BIOS_TRACE_MAX_LINES ?? '';
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : null;
};
const parseStartLineEnv = (): number => {
  const raw = process.env.BIOS_TRACE_START_LINE ?? '';
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 1; // 1-based
};

const getOutPath = (): string | null => {
  const p = process.env.OUR_BIOS_LOG_PATH ?? '';
  return p.trim().length > 0 ? path.resolve(repoRoot, p.trim()) : null;
};
const getMemOutPath = (): string | null => {
  const p = process.env.OUR_BIOS_MEM_LOG_PATH ?? '';
  return p.trim().length > 0 ? path.resolve(repoRoot, p.trim()) : null;
};

describe('Accuracy: PCSX-Redux BIOS CPU trace', () => {
  it('matches pcsx-redux-bios.log', () => {
    const refPath = resolveReduxLogPath();
    const allLines = readReferenceLines(refPath);
    const specsRaw = allLines.map((l) => buildLineSpec(l));
    const specs: TraceLineSpec[] = specsRaw.filter((s): s is TraceLineSpec => !!s);
    const expectedCpuLines: string[] = specs.map((s) => s.original);
    if (expectedCpuLines.length === 0) {
      const preview = allLines.slice(0, 3).join('\n');
      throw new Error(`No CPU lines recognized in pcsx-redux-bios.log. Please verify the format. First lines:\n${preview}`);
    }
    const cap = parseMaxLinesEnv();
    const start1 = parseStartLineEnv();
    const startIdx0 = Math.max(0, start1 - 1);
    const slicedSpecs = expectedCpuLines.slice(startIdx0);
    const count = cap ? Math.min(cap, slicedSpecs.length) : slicedSpecs.length;

    const bios = readBiosBytes();
    const psx = new PSXSystem();
    psx.loadBIOS(bios);
    psx.cpu.s.pc = 0xbfc00000 >>> 0;
    psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

    const records: TraceRecord[] = [];
    let curPC = 0 >>> 0;
    psx.cpu.setTracer((pc: number, instr: number, s: CPUState): void => {
      curPC = pc >>> 0;
      const regs = new Uint32Array(32);
      for (let i = 0; i < 32; i++) regs[i] = s.regs[i] >>> 0;
      records.push({ pc: pc >>> 0, instr: instr >>> 0, hi: s.hi >>> 0, lo: s.lo >>> 0, regs });
    });

    const outPath = getOutPath();
    if (outPath) fs.writeFileSync(outPath, '');
    const memOut = getMemOutPath();
    if (memOut) {
      fs.writeFileSync(memOut, '');
      psx.enableMemTrace({
        output: (line: string) => fs.appendFileSync(memOut, `${line} @pc=${curPC.toString(16)}\n`, 'utf8'),
        filter: (op, addr) => {
          // Trace BOTH reads and writes to low KUSEG region up to 0x2000
          const p = addr >>> 0;
          return p <= 0x2000;
        },
      });
    }

    // Warm-up: skip to startIdx0
    for (let k = 0; k < startIdx0; k++) psx.cpu.step();
    // Compare from startIdx0
    for (let i = 0; i < count; i++) {
      while (records.length < startIdx0 + i + 1) psx.cpu.step();
      const rec = records[startIdx0 + i];
      if (!rec) throw new Error(`Tracer did not record instruction ${startIdx0 + i} (0-based)`);
      const line = applyLineSpec(specs[startIdx0 + i], rec);
      if (outPath) fs.appendFileSync(outPath, line + '\n', 'utf8');
      const pcHex = (rec.pc >>> 0).toString(16);
      expect(line, `Line ${startIdx0 + i + 1} (pc=0x${pcHex}) mismatch`).toBe(slicedSpecs[i]);
    }

    expect(records.length).toBeGreaterThanOrEqual(startIdx0 + count);
  }, 60000);
});

