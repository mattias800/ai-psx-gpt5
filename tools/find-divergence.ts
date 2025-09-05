#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';
import * as path from 'path';
import { compareTraces, formatDivergenceReport } from './trace-compare/src/compare.js';
import { parsePcsxLog } from './trace-compare/src/parser/pcsx.js';

const findDivergence = async () => {
  // Check for PCSX log
  const pcsxLogPath = path.join(process.cwd(), 'pcsx-redux-bios.log');
  if (!fs.existsSync(pcsxLogPath)) {
    console.error('pcsx-redux-bios.log not found. Run: npm run trace:pcsx-redux:bios');
    process.exit(1);
  }
  
  // Check for BIOS
  const biosPath = path.join(process.cwd(), 'scph1001.bin');
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
  
  // Set initial state
  sys.cpu.s.pc = 0xbfc00000;
  sys.cpu.s.nextPc = 0xbfc00004;
  
  // Capture emulator trace
  const emuEvents = [];
  sys.enableCpuTrace({
    style: 'redux',
    includeDisasm: true,
    output: (line) => {
      // Parse redux format: "pppppppp iiiiiiii: <disasm>"
      const m = /^([0-9a-f]{8})\s+([0-9a-f]{8}):\s*(.*)$/i.exec(line);
      if (m) {
        emuEvents.push({
          kind: 'cpu',
          pc: parseInt(m[1], 16),
          instr: parseInt(m[2], 16),
          disasm: m[3] || ''
        });
      }
    }
  });

  // Also enable a targeted memory trace to inspect low RAM system vars and KSEG1 handler area
  sys.enableMemTrace({
    format: 'redux',
    attachPc: true,
    filter: (_op, addr) => {
      const a = (addr >>> 0);
      // Low RAM system vars 0x00000000..0x00000200 and KSEG1 window 0xA0000000..0xA000FFFF
      return (a <= 0x00000200) || (a >= 0xA0000000 && a <= 0xA000FFFF);
    },
    output: (line) => {
      // Print memory trace lines directly (they will be tailed at the end)
      console.log(line);
    }
  });
  
  // Determine step cap (env MAX_STEPS or --max flag), default higher than before
  const cpuEventCount = pcsxTrace.events.filter(e => e.kind === 'cpu').length;
  const parseMaxFromArgv = (): number => {
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
  
  // Create emulator trace stream
  const emuTrace = {
    events: emuEvents,
    source: 'emu',
    meta: { source: 'emu', totalLines: emuEvents.length }
  };
  
  // Compare traces
  console.log('\nComparing traces...');
  const report = compareTraces(pcsxTrace, emuTrace, {
    startLine: 1,
    context: 10
  });
  
  // Output results
  console.log('\n' + formatDivergenceReport(report));
  
  if (report.diverged) {
    console.log('\n=== ANALYSIS ===');
    console.log(`Divergence occurs at absolute instruction #${report.index + 1}`);
    
    if (report.lhsEvent && report.rhsEvent) {
      const pcsxPc = report.lhsEvent.pc;
      const emuPc = report.rhsEvent.pc;
      
      if (pcsxPc !== emuPc) {
        console.log(`\nPC divergence detected:`);
        console.log(`  PCSX continues at: 0x${pcsxPc.toString(16)}`);
        console.log(`  EMU  jumps to:     0x${emuPc.toString(16)}`);
        
        // Check if it's in BIOS or RAM
        if (pcsxPc >= 0xbfc00000 && emuPc < 0x10000) {
          console.log(`\n⚠️  PCSX stays in BIOS while emulator jumps to RAM!`);
          console.log(`This suggests a problem with BIOS call handling or function table.`);
        }
      }
      
      if (report.lhsEvent.instr !== report.rhsEvent.instr) {
        console.log(`\nInstruction divergence at same PC:`);
        console.log(`  This suggests memory content differs (corruption or incorrect initialization)`);
      }
    }
    
    // Look for patterns in the context
    if (report.matchedContext.length > 0) {
      const lastMatched = report.matchedContext[report.matchedContext.length - 1];
      console.log(`\nLast matching instruction:`);
      console.log(`  PC: 0x${lastMatched.pc.toString(16)}`);
      console.log(`  Instruction: 0x${lastMatched.instr.toString(16)}`);
      console.log(`  Disasm: ${lastMatched.disasm || 'N/A'}`);
      
      // Check if it was a jump/branch
      const instr = lastMatched.instr;
      const op = (instr >>> 26) & 0x3f;
      if (op === 0x02 || op === 0x03) {
        console.log(`  → This was a J/JAL instruction`);
      } else if (op === 0x00) {
        const fn = instr & 0x3f;
        if (fn === 0x08 || fn === 0x09) {
          console.log(`  → This was a JR/JALR instruction`);
        }
      }
    }
  }
  
  process.exit(report.diverged ? 1 : 0);
};

findDivergence().catch(err => {
  console.error('Error:', err);
  process.exit(2);
});
