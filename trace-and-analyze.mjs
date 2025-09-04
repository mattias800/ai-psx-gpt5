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

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

// Keep track of trace
const trace = [];
let instructionCount = 0;

// Enable CPU tracing with Redux format
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    trace.push(line);
  },
  style: 'redux',
  includeDisasm: true,
  includeRegsParens: true
});

console.log('Generating trace around known problem areas...');

// Run to just before the crash point we found
const targetInstructions = 138250;
try {
  for (let i = 0; i < targetInstructions; i++) {
    sys.cpu.step();
    
    // Report progress
    if (i % 10000 === 0) {
      console.log(`Progress: ${i} instructions`);
    }
    
    // Check for specific problem points we know about
    if (i >= 121400 && i <= 121500) {
      // Around the C0:0c issue we fixed
      if (i === 121442) {
        console.log(`\nInstruction ${i}: ${trace[trace.length - 1]}`);
      }
    }
    
    if (i >= 138190 && i <= 138210) {
      // Around the crash point
      console.log(`\nInstruction ${i}: ${trace[trace.length - 1]}`);
    }
  }
} catch (error) {
  console.log(`\nCrashed at instruction ${instructionCount}:`, error.message);
  console.log('\nLast 10 instructions before crash:');
  for (let i = Math.max(0, trace.length - 10); i < trace.length; i++) {
    console.log(`[${i}] ${trace[i]}`);
  }
}

// Write last part of trace to file for analysis
const outFile = 'trace-segment.txt';
const startIdx = Math.max(0, trace.length - 1000);
fs.writeFileSync(outFile, trace.slice(startIdx).join('\n'));
console.log(`\nWrote last ${trace.length - startIdx} instructions to ${outFile}`);

// Now let's analyze specific points
console.log('\n=== Analysis ===');

// Check instruction around 121442 (C0:0c issue)
if (trace.length > 121442) {
  console.log('\nAround instruction 121442 (C0:0c function call):');
  for (let i = 121440; i < Math.min(121445, trace.length); i++) {
    console.log(`[${i}] ${trace[i]}`);
  }
}

// Check around the crash point
if (trace.length > 138190) {
  console.log('\nAround crash point (138192):');
  for (let i = 138190; i < Math.min(138210, trace.length); i++) {
    console.log(`[${i}] ${trace[i]}`);
  }
}
