#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { compareTraces, formatDivergenceReport } from './trace-compare/src/compare.js';
import { parsePcsxLog } from './trace-compare/src/parser/pcsx.js';

const parseArgvFlag = (name, defaultValue = true) => {
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === `--${name}`) return true;
    if (a === `--no-${name}`) return false;
    if (a.startsWith(`--${name}=`)) {
      const v = a.slice(name.length + 3).toLowerCase();
      if (v === '1' || v === 'true' || v === 'yes' || v === 'on') return true;
      if (v === '0' || v === 'false' || v === 'no' || v === 'off') return false;
    }
  }
  return defaultValue;
};

const main = async () => {
  const cwd = process.cwd();
  const pcsxLogPath = path.join(cwd, 'pcsx-redux-bios.log');
  if (!fs.existsSync(pcsxLogPath)) {
    console.error('pcsx-redux-bios.log not found. Run: npm run trace:pcsx-redux:bios');
    process.exit(1);
  }
  const biosPath = path.join(cwd, 'scph1001.bin');
  if (!fs.existsSync(biosPath)) {
    console.error('BIOS file scph1001.bin not found');
    process.exit(1);
  }

  console.log('Loading PCSX-Redux trace...');
  const pcsxTrace = parsePcsxLog(pcsxLogPath);
  console.log(`Loaded ${pcsxTrace.events.length} PCSX events`);

  console.log('\nRunning emulator to generate trace...');
  const biosBytes = fs.readFileSync(biosPath);
  const sys = new PSXSystem();
  sys.loadBIOS(new Uint8Array(biosBytes));

  // Ensure reset PC matches
  sys.cpu.s.pc = 0xbfc00000 >>> 0;
  sys.cpu.s.nextPc = 0xbfc00004 >>> 0;

  const emuEvents = [];
  sys.enableCpuTrace({
    style: 'redux',
    includeDisasm: true,
    includeRegsParens: true,
    output: (line) => {
      const m = /^([0-9a-f]{8})\s+([0-9a-f]{8}):\s*(.*)$/i.exec(line);
      if (m) {
        emuEvents.push({ kind: 'cpu', pc: parseInt(m[1], 16) >>> 0, instr: parseInt(m[2], 16) >>> 0, disasm: m[3] || '' });
      }
    }
  });

  // Optional targeted memory trace for low RAM (system vars) and KSEG1 window where handler data lives
  const envMem = process.env.PSX_MEM_TRACE;
  const defaultMemTrace = envMem === '0' || envMem?.toLowerCase() === 'false' ? false : true;
  const enableMemTrace = parseArgvFlag('mem-trace', defaultMemTrace);
  if (enableMemTrace) {
    sys.enableMemTrace({
      format: 'redux',
      attachPc: true,
      filter: (_op, addr) => {
        const a = addr >>> 0;
        return (a <= 0x00000200) || (a >= 0xA0000000 && a <= 0xA000FFFF);
      },
      output: (line) => {
        // Stream mem trace to stdout so the user can inspect if needed
        console.log(line);
      }
    });
  }

  // Parse max instructions
  const parseMaxFromArgv = () => {
    const argv = process.argv.slice(2);
    for (let i = 0; i < argv.length; i++) {
      const a = argv[i];
      if (a === '--max' && argv[i + 1]) {
        const v = Number(argv[i + 1]);
        if (Number.isFinite(v) && v > 0) return Math.floor(v);
      }
      if (a.startsWith('--max=')) {
        const v = Number(a.slice('--max='.length));
        if (Number.isFinite(v) && v > 0) return Math.floor(v);
      }
    }
    return 0;
  };
  const envMax = Number(process.env.MAX_STEPS || '') || 0;
  const argMax = parseMaxFromArgv();
  const cpuEventCount = pcsxTrace.events.filter(e => e.kind === 'cpu').length;
  const stepCap = (envMax > 0 ? envMax : (argMax > 0 ? argMax : 2_000_000));
  const maxSteps = Math.min(stepCap, cpuEventCount);
  console.log(`Running ${maxSteps} instructions... (cap=${stepCap}, available=${cpuEventCount})`);

  try {
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
      if (i % 10000 === 0 && i > 0) {
        console.log(`Progress: ${i} instructions...`);
      }
    }
  } catch (e) {
    console.log(`\nEmulator crashed at instruction ${emuEvents.length}: ${e.message}`);
  }

  console.log(`\nGenerated ${emuEvents.length} emulator events`);

  const emuTrace = { events: emuEvents, source: 'emu', meta: { source: 'emu', totalLines: emuEvents.length } };

  console.log('\nComparing traces...');
  const report = compareTraces(pcsxTrace, emuTrace, { startLine: 1, context: 10 });
  console.log('\n' + formatDivergenceReport(report));
  process.exit(report.diverged ? 1 : 0);
};

main().catch(err => {
  console.error('Error:', err);
  process.exit(2);
});

