#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

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

function fatal(msg) {
  console.error(`[chunk-run] ${msg}`);
  process.exit(1);
}

const args = parseArgs(process.argv);
const specPathInput = args.spec || args.s;
if (!specPathInput) fatal('Usage: node tools/run-chunk-with-cpu-snapshot.mjs --spec tests/generated/pcsx-bios-chunk-XXXXX-YYYYYY.spec.ts [--log pcsx-redux-bios.log]');

const cwd = process.cwd();
const specPath = path.resolve(cwd, specPathInput);
if (!fs.existsSync(specPath)) fatal(`Spec file not found: ${specPath}`);

const logPath = path.resolve(cwd, args.log || 'pcsx-redux-bios.log');
if (!fs.existsSync(logPath)) fatal(`PCSX-Redux log not found: ${logPath}`);

const specTxt = fs.readFileSync(specPath, 'utf8');
let pcHex = args.pc || '';
if (!pcHex) {
  const m = specTxt.match(/const pc = 0x([0-9A-Fa-f]+);/);
  if (!m) fatal('Could not find first "const pc = 0x...;" in spec; provide --pc 0x....');
  pcHex = `0x${m[1]}`;
}

// Choose snapshot output path based on spec name + pc
const baseName = path.basename(specPath).replace(/\.spec\.ts$/, '');
const cpuOut = path.resolve(cwd, `${baseName}-cpu-${pcHex.toLowerCase()}.json`);

console.log(`[chunk-run] extracting CPU snapshot for pc=${pcHex} from ${logPath} -> ${cpuOut}`);
{
  const r = spawnSync('node', ['tools/extract-cpu-snapshot.mjs', '--log', logPath, '--pc', pcHex, '--out', cpuOut], { stdio: 'inherit' });
  if (r.status !== 0) fatal('CPU snapshot extraction failed');
}

console.log(`[chunk-run] running Vitest with follow-spec mode using CPU snapshot`);
{
  const env = { ...process.env, BIOS_HARNESS_DEBUG: '1', PSX_FOLLOW_SPEC_PC: '1', PSX_CPU_SNAPSHOT: cpuOut };
  const r = spawnSync('npx', ['vitest', '-c', 'vitest.generated.config.ts', '--run', specPath], { stdio: 'inherit', env });
  process.exit(r.status || 0);
}

