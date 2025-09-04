#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

// Extract a CPU snapshot JSON from a PCSX-Redux BIOS trace log at the first
// occurrence of the specified PC.
// Usage:
//   node tools/extract-cpu-snapshot.mjs --log pcsx-redux-bios.log --pc 0x3ee0 --out cpu.json
// Defaults:
//   --log defaults to ./pcsx-redux-bios.log
//   --pc required
//   --out defaults to ./cpu-snapshot.json

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const [k, vRaw] = a.includes('=') ? a.split('=') : [a, argv[++i]];
    const key = k.replace(/^--/, '');
    out[key] = vRaw;
  }
  return out;
}

const args = parseArgs(process.argv);
const logPath = path.resolve(process.cwd(), args.log || 'pcsx-redux-bios.log');
const pcHex = args.pc || '';
const outPath = path.resolve(process.cwd(), args.out || 'cpu-snapshot.json');

if (!pcHex) {
  console.error('Error: --pc is required (e.g., --pc 0x3ee0)');
  process.exit(1);
}

function toU32Hex(n) { return '0x' + ((n >>> 0).toString(16).padStart(8, '0')); }

function parseHex(s) {
  const t = String(s || '').trim();
  if (t.startsWith('0x') || t.startsWith('0X')) return Number.parseInt(t.slice(2), 16) >>> 0;
  return Number.parseInt(t, 16) >>> 0;
}

const targetPc = parseHex(pcHex);

let raw = '';
try { raw = fs.readFileSync(logPath, 'utf8'); }
catch (e) {
  console.error(`Error: could not read log at ${logPath}: ${e?.message || e}`);
  process.exit(1);
}

const lines = raw.split(/\r?\n/);
const reLine = /^\s*([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):\s*(.*)$/;
const reRegVal = /\$([A-Za-z0-9]+)\(([0-9A-Fa-f]{1,8})\)/g;
const reHi = /\bhi\s*[:=]\s*(0x)?([0-9A-Fa-f]+)/i;
const reLo = /\blo\s*[:=]\s*(0x)?([0-9A-Fa-f]+)/i;
const reSR = /\bsr\s*[:=]\s*(0x)?([0-9A-Fa-f]+)/i;
const reCause = /\bcause\s*[:=]\s*(0x)?([0-9A-Fa-f]+)/i;

const regIndexMap = new Map([
  ['zero',0],['r0',0],['at',1],['r1',1],['v0',2],['r2',2],['v1',3],['r3',3],
  ['a0',4],['r4',4],['a1',5],['r5',5],['a2',6],['r6',6],['a3',7],['r7',7],
  ['t0',8],['r8',8],['t1',9],['r9',9],['t2',10],['r10',10],['t3',11],['r11',11],
  ['t4',12],['r12',12],['t5',13],['r13',13],['t6',14],['r14',14],['t7',15],['r15',15],
  ['s0',16],['r16',16],['s1',17],['r17',17],['s2',18],['r18',18],['s3',19],['r19',19],
  ['s4',20],['r20',20],['s5',21],['r21',21],['s6',22],['r22',22],['s7',23],['r23',23],
  ['t8',24],['r24',24],['t9',25],['r25',25],['k0',26],['r26',26],['k1',27],['r27',27],
  ['gp',28],['r28',28],['sp',29],['r29',29],['fp',30],['s8',30],['r30',30],['ra',31],['r31',31],
]);

function regNameToIndex(raw) {
  if (!raw) return null;
  let n = String(raw).trim();
  if (n.startsWith('$')) n = n.slice(1);
  const idx = regIndexMap.get(n) || regIndexMap.get(n.toLowerCase()) || null;
  return typeof idx === 'number' ? idx : null;
}

let foundIndex = -1;
for (let i = 0; i < lines.length; i++) {
  const m = reLine.exec(lines[i]);
  if (!m) continue;
  const pc = parseHex(m[1]);
  if (pc === targetPc) { foundIndex = i; break; }
}

if (foundIndex < 0) {
  console.error(`Error: PC 0x${targetPc.toString(16)} not found in ${logPath}`);
  process.exit(1);
}

const line = lines[foundIndex];
const m = reLine.exec(line);
const instr = m ? parseHex(m[2]) : 0;
const tail = m ? (m[3] || '') : '';

const regs = new Array(32).fill(0);
let hi = 0, lo = 0, sr = 0, cause = 0;

// Extract $reg(value) tokens from tail if present
let rm;
reRegVal.lastIndex = 0;
while ((rm = reRegVal.exec(tail)) !== null) {
  const name = rm[1];
  const val = parseHex(rm[2]);
  const idx = regNameToIndex(name);
  if (idx !== null) regs[idx] = val >>> 0;
}

// Try to parse hi/lo/sr/cause tokens if present in line
const mHi = reHi.exec(line); if (mHi) hi = parseHex(mHi[2] || '0');
const mLo = reLo.exec(line); if (mLo) lo = parseHex(mLo[2] || '0');
const mSR = reSR.exec(line); if (mSR) sr = parseHex(mSR[2] || '0');
const mCause = reCause.exec(line); if (mCause) cause = parseHex(mCause[2] || '0');

const nextLine = lines[foundIndex + 1] || '';
const mNext = reLine.exec(nextLine);
const nextPc = mNext ? parseHex(mNext[1]) : ((targetPc + 4) >>> 0);

const snap = {
  regs: regs.map((v) => toU32Hex(v >>> 0)),
  pc: toU32Hex(targetPc),
  nextPc: toU32Hex(nextPc),
  hi: toU32Hex(hi),
  lo: toU32Hex(lo),
  sr: toU32Hex(sr),
  cause: toU32Hex(cause),
  instr: toU32Hex(instr),
  source: path.basename(logPath),
  lineIndex0: foundIndex
};

fs.writeFileSync(outPath, JSON.stringify(snap, null, 2));
console.log(`Wrote CPU snapshot for pc=${toU32Hex(targetPc)} to ${outPath} (line ${foundIndex+1})`);

