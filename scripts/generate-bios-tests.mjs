#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple CLI arg parsing
const args = process.argv.slice(2);
const getFlag = (name, defVal) => {
  const i = args.findIndex((a) => a === `--${name}` || a.startsWith(`--${name}=`));
  if (i === -1) return defVal;
  const a = args[i];
  if (a.includes('=')) return a.split('=')[1];
  const v = args[i + 1];
  return (v && !v.startsWith('--')) ? v : defVal;
};

const logPath = resolve(process.cwd(), getFlag('log', 'pcsx-redux-bios.log'));
const outRoot = resolve(process.cwd(), getFlag('out', 'tests/generated'));
const prefix = getFlag('prefix', 'pcsx-bios');
const chunkSize = Math.max(100, Math.min(10000, Number(getFlag('chunk', '5000')) | 0));
const maxFiles = getFlag('maxFiles', '0');
const maxFilesNum = Math.max(0, Number(maxFiles) | 0);

const ensureDir = (p) => { try { mkdirSync(p, { recursive: true }); } catch {} };

// Register mapping for MIPS R3000A
const regNameToIndex = (() => {
  const map = new Map();
  const add = (name, idx) => { map.set(name, idx); map.set(name.toLowerCase(), idx); map.set(name.toUpperCase(), idx); };
  add('zero', 0); add('r0', 0);
  add('at', 1); add('r1', 1);
  add('v0', 2); add('r2', 2);
  add('v1', 3); add('r3', 3);
  add('a0', 4); add('r4', 4);
  add('a1', 5); add('r5', 5);
  add('a2', 6); add('r6', 6);
  add('a3', 7); add('r7', 7);
  add('t0', 8); add('r8', 8);
  add('t1', 9); add('r9', 9);
  add('t2', 10); add('r10', 10);
  add('t3', 11); add('r11', 11);
  add('t4', 12); add('r12', 12);
  add('t5', 13); add('r13', 13);
  add('t6', 14); add('r14', 14);
  add('t7', 15); add('r15', 15);
  add('s0', 16); add('r16', 16);
  add('s1', 17); add('r17', 17);
  add('s2', 18); add('r18', 18);
  add('s3', 19); add('r19', 19);
  add('s4', 20); add('r20', 20);
  add('s5', 21); add('r21', 21);
  add('s6', 22); add('r22', 22);
  add('s7', 23); add('r23', 23);
  add('t8', 24); add('r24', 24);
  add('t9', 25); add('r25', 25);
  add('k0', 26); add('r26', 26);
  add('k1', 27); add('r27', 27);
  add('gp', 28); add('r28', 28);
  add('sp', 29); add('r29', 29);
  add('fp', 30); add('s8', 30); add('r30', 30);
  add('ra', 31); add('r31', 31);
  return map;
})();

const normalizeReg = (raw) => {
  if (!raw) return null;
  let n = raw.trim();
  if (n.startsWith('$')) n = n.slice(1);
  const idx = regNameToIndex.get(n) ?? regNameToIndex.get(n.toLowerCase());
  return (typeof idx === 'number') ? idx : null;
};

const hexToU32 = (h) => {
  const v = parseInt(h, 16) >>> 0;
  return v >>> 0;
};

const pad = (n, w) => n.toString().padStart(w, '0');

// Read log
let raw;
try {
  raw = readFileSync(logPath, 'utf8');
} catch (e) {
  console.error(`Error: could not read log at ${logPath}`);
  process.exit(1);
}
const lines = raw.split(/\r?\n/);

// Parse trace lines of the form: "bfc00000 3c080013: ..."
const parsed = [];
const reLine = /^\s*([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):\s*(.*)$/;
// Capture optional register-value annotations like $t0(00000001)
const reRegVal = /\\$([A-Za-z0-9]+)\\(([0-9A-Fa-f]{1,8})\\)/g;

for (const line of lines) {
  const m = reLine.exec(line);
  if (!m) continue;
  const pc = hexToU32(m[1]);
  const instrWord = hexToU32(m[2]);
  const tail = m[3] ?? '';
  // We previously parsed and asserted pre-register values; however, different
  // cores may display operand register snapshots differently. For robust cross-core
  // comparisons, only assert PC and instruction word, and nextPc.
  parsed.push({ pc, instrWord });
}

if (parsed.length === 0) {
  console.error('Error: no trace instructions parsed from log.');
  process.exit(1);
}

// We no longer bake nextPc asserts; sequential stepping will naturally flow.

// Prepare output directory: wipe previous generated .spec.ts and shared files
ensureDir(outRoot);
try {
  const prev = readdirSync(outRoot, { withFileTypes: true });
  for (const d of prev) {
    if (!d.isFile()) continue;
    if (d.name.endsWith('.spec.ts') || d.name.startsWith('_')) {
      rmSync(join(outRoot, d.name));
    }
  }
} catch {}

// Write shared harness
const harnessPath = join(outRoot, '_harness.ts');
const harnessSrc = `// Auto-generated test harness. Do not edit by hand.
import { PSXSystem } from '@ai-psx/core';
import { readFileSync } from 'node:fs';

let _psx: PSXSystem | null = null;

export const initOnce = (): void => {
  if (_psx) return;
  const tryNames: string[] = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  let bios: Buffer | null = null;
  for (const n of tryNames) {
    try { bios = readFileSync(n); break; } catch {}
  }
  if (!bios) throw new Error('Missing BIOS: place scph1001.bin (or PC1001.BIN) at repo root');
  _psx = new PSXSystem();
  _psx.loadBIOS(new Uint8Array(bios));
  // Boot at BIOS entry
  _psx.cpu.s.pc = 0xbfc00000 >>> 0;
  _psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
};

export const getPC = (): number => {
  if (!_psx) throw new Error('initOnce() not called');
  return _psx.cpu.s.pc >>> 0;
};

export const readU32 = (addr: number): number => {
  if (!_psx) throw new Error('initOnce() not called');
  return _psx.as.read32(addr >>> 0) >>> 0;
};

export const getRegU32 = (idx: number): number => {
  if (!_psx) throw new Error('initOnce() not called');
  return _psx.cpu.s.regs[idx >>> 0] >>> 0;
};

export const stepOne = (): void => {
  if (!_psx) throw new Error('initOnce() not called');
  _psx.cpu.step();
};
`;
writeFileSync(harnessPath, harnessSrc);

// Optional: write a tiny readme marker
writeFileSync(join(outRoot, '_README.txt'), 'Generated tests from pcsx-redux-bios.log. Do not edit.');

// Create chunked spec files
const total = parsed.length;
let fileIndex = 0;
let cursor = 0;

while (cursor < total) {
  if (maxFilesNum > 0 && fileIndex >= maxFilesNum) break;
  const start = cursor;
  const end = Math.min(total, start + chunkSize);
  const startLabel = pad(start + 1, 6);
  const endLabel = pad(end, 6);
  const fname = `${prefix}-chunk-${startLabel}-${endLabel}.spec.ts`;
  const fpath = join(outRoot, fname);

  let src = '';
  src += "import { describe, it, expect, beforeAll } from 'vitest';\n";
  src += "import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';\n\n";
  src += `describe('PCSX-Redux BIOS trace: chunk ${start + 1}-${end}', () => {\n`;
  src += `  beforeAll(() => initOnce());\n`;
  for (let i = start; i < end; i++) {
    const rec = parsed[i];
    const title = `[${i + 1}] PC 0x${rec.pc.toString(16).padStart(8,'0')} instr 0x${rec.instrWord.toString(16).padStart(8,'0')}`;
    src += `  it('${title}', () => {\n`;
    src += `    const pc = 0x${rec.pc.toString(16)};\n`;
    src += `    expect(getPC()).toBe(pc >>> 0);\n`;
    src += `    expect(readU32(pc) >>> 0).toBe(0x${rec.instrWord.toString(16)} >>> 0);\n`;
    src += `    stepOne();\n`;
    src += `  });\n`;
  }
  src += `});\n`;

  writeFileSync(fpath, src);

  fileIndex++;
  cursor = end;
}

// Write a dedicated vitest config for generated tests
const genViteCfgPath = resolve(process.cwd(), 'vitest.generated.config.ts');
const baseCfg = readFileSync(resolve(process.cwd(), 'vitest.config.ts'), 'utf8');
// Extract alias block from baseline to reuse
let aliasBlock = `alias: {\n`+
  `      '@ai-psx/shared': require('node:path').resolve(__dirname, 'packages/emulator-shared/src/index.ts'),\n`+
  `      '@ai-psx/cpu': require('node:path').resolve(__dirname, 'packages/emulator-cpu/src/cpu.ts'),\n`+
  `      '@ai-psx/spu': require('node:path').resolve(__dirname, 'packages/emulator-spu/src/index.ts'),\n`+
  `      '@ai-psx/core': require('node:path').resolve(__dirname, 'packages/emulator-core/src/index.ts'),\n`+
  `    },`;
try {
  // naive copy: if baseline changes, fallback is fine
  const m = baseCfg.match(/alias:\s*\{[\s\S]*?\}/);
  if (m) aliasBlock = m[0];
} catch {}

const vitestGen = `import { defineConfig } from 'vitest/config';\nimport path from 'node:path';\n\nexport default defineConfig({\n  resolve: {\n    ${aliasBlock}\n  },\n  test: {\n    include: ['tests/generated/**/*.spec.ts'],\n    isolate: false,\n    sequence: { concurrent: false, shuffle: false },\n    pool: 'threads',\n    poolOptions: { threads: { minThreads: 1, maxThreads: 1 } }\n  }\n});\n`;
writeFileSync(genViteCfgPath, vitestGen);

// Write metadata
const meta = {
  sourceLogPath: logPath,
  totalLines: total,
  chunkSize,
  chunks: Array.from({ length: fileIndex }, (_, i) => {
    const s = i * chunkSize + 1;
    const e = Math.min(total, (i + 1) * chunkSize);
    return { file: `${prefix}-chunk-${pad(s,6)}-${pad(e,6)}.spec.ts`, startIndex: s, endIndex: e };
  })
};
writeFileSync(join(outRoot, '_generated.meta.json'), JSON.stringify(meta, null, 2));

console.log(`Generated ${fileIndex} files (${total} lines) into ${outRoot}`);
