import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();

// Add a simple heap allocator for BIOS
let heapPtr = 0x00100000; // Start heap at 1MB mark
let mallocCount = 0;

// Hook into CPU to intercept BIOS calls
const cpuAny = sys.cpu;
const origTracer = cpuAny.tracer;

cpuAny.setTracer((pc, instr, state) => {
  // Check if we're at a BIOS call entry point
  if (pc === 0x000000b0) {
    const t1 = state.gpr[9]; // T1 register holds function number
    
    if (t1 === 0x00) { // SysMalloc
      mallocCount++;
      const size = state.gpr[4]; // A0 holds size parameter
      
      // Simple bump allocator
      const allocAddr = heapPtr;
      heapPtr += (size + 15) & ~15; // Align to 16 bytes
      
      // Return allocated address in V0
      state.gpr[2] = allocAddr;
      
      // Skip to return address (in RA)
      state.pc = state.gpr[31] - 8; // Set PC to RA - 8 (will be incremented by 4)
      
      if (mallocCount <= 10) {
        console.log(`[${mallocCount}] SysMalloc(size=0x${size.toString(16)}) = 0x${allocAddr.toString(16)}`);
      }
      
      return; // Skip normal execution
    }
  }
  
  // Call original tracer if present
  if (origTracer) origTracer(pc, instr, state);
});

sys.loadBIOS(bios);

console.log('Testing BIOS boot with SysMalloc hook...\n');

let instructionCount = 0;
let foundShell = false;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Check for shell entry
      if (pc === 0x80030000) {
        foundShell = true;
        console.log(`\n✅ Reached shell at instruction ${instructionCount}!`);
        throw new Error('SHELL_FOUND');
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run for up to 500k instructions
console.log('Running BIOS with malloc handler...');

try {
  for (let i = 0; i < 500000; i++) {
    sys.stepCpu(1);
    
    // Step scheduler
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
    
    // Progress
    if ((i + 1) % 100000 === 0) {
      console.log(`[${i + 1}] Instructions: ${instructionCount}, Malloc calls: ${mallocCount}`);
    }
  }
} catch (error) {
  if (error.message !== 'SHELL_FOUND') {
    console.log(`Error: ${error.message}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total instructions: ${instructionCount}`);
console.log(`Total malloc calls: ${mallocCount}`);
console.log(`Heap usage: 0x${(heapPtr - 0x00100000).toString(16)} bytes`);

if (foundShell) {
  console.log('✅ Successfully reached BIOS shell!');
} else {
  console.log('⏰ Did not reach shell in time limit');
}
