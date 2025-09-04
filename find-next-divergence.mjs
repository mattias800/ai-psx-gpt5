import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

// Load BIOS
const biosPath = path.join(process.cwd(), 'scph1001.bin');
if (!fs.existsSync(biosPath)) {
  console.error('BIOS file not found:', biosPath);
  process.exit(1);
}
const bios = fs.readFileSync(biosPath);

// Path to PCSX-Redux trace
const pcsxTracePath = 'tests/bios-traces/pcsx-bios-trace.txt';
if (!fs.existsSync(pcsxTracePath)) {
  console.error('PCSX trace file not found:', pcsxTracePath);
  console.error('Please ensure you have the PCSX-Redux trace file');
  process.exit(1);
}

// Read PCSX trace
console.log('Reading PCSX-Redux trace...');
const pcsxTrace = fs.readFileSync(pcsxTracePath, 'utf-8').split('\n')
  .filter(line => line.trim())
  .map(line => {
    // Parse PCSX format: "pppppppp iiiiiiii: <disasm>"
    const match = line.match(/^([0-9a-f]{8})\s+([0-9a-f]{8}):/i);
    if (match) {
      return { pc: match[1], instr: match[2] };
    }
    return null;
  })
  .filter(Boolean);

console.log(`Loaded ${pcsxTrace.length} instructions from PCSX-Redux trace`);

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

// Enable tracing in Redux format
const emuTrace = [];
sys.enableCpuTrace({
  output: (line) => {
    const match = line.match(/^([0-9a-f]{8})\s+([0-9a-f]{8}):/i);
    if (match) {
      emuTrace.push({ pc: match[1], instr: match[2] });
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run and compare
console.log('Running emulator and comparing with PCSX-Redux...');
const maxInstructions = Math.min(pcsxTrace.length, 10000000);
let divergenceFound = false;
let firstDivergence = null;

for (let i = 0; i < maxInstructions; i++) {
  // Step CPU
  sys.stepCpu(1);
  
  // Compare with PCSX trace
  if (i < emuTrace.length && i < pcsxTrace.length) {
    const emu = emuTrace[i];
    const pcsx = pcsxTrace[i];
    
    if (emu.pc !== pcsx.pc || emu.instr !== pcsx.instr) {
      if (!firstDivergence) {
        firstDivergence = {
          instruction: i + 1,
          emu: emu,
          pcsx: pcsx
        };
      }
      divergenceFound = true;
    }
  }
  
  // Report progress
  if ((i + 1) % 100000 === 0) {
    console.log(`Progress: ${i + 1} instructions processed...`);
    if (divergenceFound) {
      console.log(`First divergence found at instruction ${firstDivergence.instruction}`);
      console.log(`  Emulator:    PC=${firstDivergence.emu.pc} INSTR=${firstDivergence.emu.instr}`);
      console.log(`  PCSX-Redux:  PC=${firstDivergence.pcsx.pc} INSTR=${firstDivergence.pcsx.instr}`);
      break;
    }
  }
}

if (!divergenceFound) {
  console.log(`✅ No divergence found in first ${emuTrace.length} instructions!`);
} else {
  console.log('\n=== Divergence Details ===');
  console.log(`First divergence at instruction ${firstDivergence.instruction}:`);
  console.log(`  Emulator:    PC=${firstDivergence.emu.pc} INSTR=${firstDivergence.emu.instr}`);
  console.log(`  PCSX-Redux:  PC=${firstDivergence.pcsx.pc} INSTR=${firstDivergence.pcsx.instr}`);
  
  // Show context around divergence
  console.log('\n=== Context (5 instructions before divergence) ===');
  const startIdx = Math.max(0, firstDivergence.instruction - 6);
  for (let i = startIdx; i < Math.min(startIdx + 10, emuTrace.length, pcsxTrace.length); i++) {
    const emu = emuTrace[i];
    const pcsx = pcsxTrace[i];
    const marker = (i + 1) === firstDivergence.instruction ? '>>>' : '   ';
    if (emu && pcsx) {
      if (emu.pc === pcsx.pc && emu.instr === pcsx.instr) {
        console.log(`${marker} [${i + 1}] ${emu.pc} ${emu.instr} ✓`);
      } else {
        console.log(`${marker} [${i + 1}] EMU: ${emu.pc} ${emu.instr}`);
        console.log(`${marker} [${i + 1}] PCX: ${pcsx.pc} ${pcsx.instr} ❌`);
      }
    }
  }
}
