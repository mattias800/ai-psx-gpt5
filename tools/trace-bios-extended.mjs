#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';

const biosPath = 'scph1001.bin';
const bios = fs.readFileSync(biosPath);

const sys = new PSXSystem();
sys.loadBIOS(bios);

// Track GPU access attempts
let gpuAccesses = [];
let lastPC = 0;
let sameInstructionCount = 0;
const maxSameInstructions = 100;

// Enable more detailed memory tracing
sys.enableMemTrace({
  output: (line) => {
    // Track all I/O access, including GPU
    if (line.includes('1f801810') || line.includes('1f801814')) {
      gpuAccesses.push(line);
      console.log('[GPU Access]', line);
    }
  },
  filter: (op, addr) => {
    const ph = addr >>> 0;
    // Track all I/O including GPU registers
    return (ph >= 0x1f801000 && ph <= 0x1f803fff);
  }
});

// Track instruction execution
let instructionCount = 0;
const maxInstructions = 100000;
let traceLines = [];

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Extract PC from trace
    const pcMatch = line.match(/pc=([0-9a-f]+)/);
    if (pcMatch) {
      const currentPC = parseInt(pcMatch[1], 16);
      
      // Check if stuck in same location
      if (currentPC === lastPC) {
        sameInstructionCount++;
        if (sameInstructionCount >= maxSameInstructions) {
          console.log(`\n[STUCK] BIOS is stuck at PC=${currentPC.toString(16).padStart(8, '0')} after ${instructionCount} instructions`);
          
          // Analyze the situation
          const ra = line.match(/ra=([0-9a-f]+)/)?.[1];
          console.log(`Return address: ${ra}`);
          
          // Save diagnostic info
          fs.writeFileSync('bios-stuck-analysis.txt', [
            `BIOS stuck after ${instructionCount} instructions`,
            `Stuck at PC: 0x${currentPC.toString(16).padStart(8, '0')}`,
            `Return address: 0x${ra}`,
            '',
            'Last 50 instructions:',
            ...traceLines.slice(-50),
            '',
            'GPU accesses:',
            ...gpuAccesses
          ].join('\n'));
          
          console.log('\nAnalysis saved to bios-stuck-analysis.txt');
          process.exit(0);
        }
      } else {
        sameInstructionCount = 0;
        lastPC = currentPC;
      }
    }
    
    // Keep last 100 lines for analysis
    traceLines.push(line);
    if (traceLines.length > 100) {
      traceLines.shift();
    }
    
    // Stop after max instructions
    if (instructionCount >= maxInstructions) {
      console.log(`\n[COMPLETE] Executed ${instructionCount} instructions`);
      
      fs.writeFileSync('bios-extended.trace', traceLines.join('\n'));
      fs.writeFileSync('gpu-accesses.log', gpuAccesses.join('\n'));
      
      console.log('Traces saved to bios-extended.trace and gpu-accesses.log');
      console.log(`Total GPU accesses: ${gpuAccesses.length}`);
      process.exit(0);
    }
  }
});

console.log('Running extended BIOS trace (up to 100,000 instructions)...');
console.log('Will detect if BIOS gets stuck...\n');

// Run the BIOS
try {
  sys.stepCpu(maxInstructions);
} catch (e) {
  console.error('\n[ERROR] Exception during execution:', e.message);
  
  // Save what we have
  fs.writeFileSync('bios-error.trace', traceLines.join('\n'));
  fs.writeFileSync('bios-error-gpu.log', gpuAccesses.join('\n'));
  
  console.log('Error traces saved');
  process.exit(1);
}
