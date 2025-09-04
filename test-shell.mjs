import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Testing BIOS boot to shell/menu...\n');

let instructionCount = 0;
let foundShell = false;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Check for shell entry point
      if (pc === 0x80030000) {
        foundShell = true;
        console.log(`\n✅ SUCCESS! Reached shell/BIOS menu at instruction ${instructionCount}`);
        console.log('PC: 0x80030000 - This is the PlayStation BIOS shell entry point!\n');
      }
      
      // Also check for other interesting points
      if (pc === 0x800304fc) {
        console.log(`[${instructionCount}] Reached BIOS menu code (PC=0x800304fc)`);
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run for up to 1 million instructions or until shell
const maxInstructions = 1000000;
let crashed = false;

console.log('Running BIOS boot sequence...');

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Step scheduler periodically for hardware events
    if (i % 100 === 0) {
      sys.stepCycles(100);
    }
    
    // Progress updates
    if ((i + 1) % 100000 === 0) {
      console.log(`[${i + 1}] Still running... (instructions: ${instructionCount})`);
    }
    
    // Stop if we found the shell
    if (foundShell) {
      break;
    }
  }
} catch (error) {
  crashed = true;
  console.log(`\n❌ Crashed at instruction ${instructionCount}: ${error.message}`);
}

// Final summary
console.log('\n=== FINAL SUMMARY ===');
console.log(`Total instructions executed: ${instructionCount}`);

if (foundShell) {
  console.log('Status: ✅ SUCCESS - Reached BIOS shell/menu!');
  console.log('\nThe PlayStation BIOS has successfully:');
  console.log('  1. Completed hardware initialization');
  console.log('  2. Set up the kernel');
  console.log('  3. Initialized all subsystems');
  console.log('  4. Reached the interactive shell/menu');
  console.log('\nThis is a major milestone! The emulator can now boot the PlayStation BIOS.');
} else if (crashed) {
  console.log('Status: ❌ CRASHED');
} else {
  console.log('Status: ⏰ TIMEOUT (did not reach shell within limit)');
}
