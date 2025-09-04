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

let instructionCount = 0;
let lastT1Value = 0;
let t1History = [];

// Track t1 changes
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Get current t1 value
    const cpuAny = sys.cpu;
    if (cpuAny && cpuAny.regs) {
      const currentT1 = cpuAny.regs[9]; // t1 is register 9
      
      // Check if t1 changed
      if (currentT1 !== lastT1Value) {
        const newEntry = {
          instruction: instructionCount,
          oldValue: lastT1Value,
          newValue: currentT1,
          line: line
        };
        t1History.push(newEntry);
        
        // Keep only last 50 changes
        if (t1History.length > 50) {
          t1History.shift();
        }
        
        lastT1Value = currentT1;
      }
    }
    
    // Check for our problem point
    if (instructionCount === 138212) {
      console.log('=== At instruction 138212 (about to jump to A0 dispatcher) ===');
      console.log(`Current $t1 value: 0x${lastT1Value.toString(16).padStart(8, '0')}`);
      console.log('\nLast 20 changes to $t1:');
      t1History.slice(-20).forEach(entry => {
        console.log(`  [${entry.instruction}] t1: 0x${(entry.oldValue >>> 0).toString(16).padStart(8, '0')} -> 0x${(entry.newValue >>> 0).toString(16).padStart(8, '0')}`);
        console.log(`    ${entry.line.substring(0, 80)}`);
      });
      process.exit(0);
    }
  },
  style: 'redux',
  includeDisasm: false
});

console.log('Tracing $t1 register changes...\n');

try {
  // Run until we hit the problem
  for (let i = 0; i < 140000; i++) {
    sys.stepCpu(1);
  }
} catch (error) {
  console.log(`\nCrashed at instruction ${instructionCount}: ${error.message}`);
  console.log('\nLast changes to $t1 before crash:');
  t1History.slice(-10).forEach(entry => {
    console.log(`  [${entry.instruction}] t1: 0x${(entry.oldValue >>> 0).toString(16).padStart(8, '0')} -> 0x${(entry.newValue >>> 0).toString(16).padStart(8, '0')}`);
  });
}
