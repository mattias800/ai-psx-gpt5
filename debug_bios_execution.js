import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

// Load the BIOS
const biosBytes = fs.readFileSync('./scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(biosBytes);

// Set CPU to start at BIOS reset vector
// Note: Must set both pc AND nextPc for MIPS delay slot handling
sys.cpu.s.pc = 0xbfc00000;
sys.cpu.s.nextPc = 0xbfc00004;

// Track execution progress
let instructionCount = 0;
let uniquePCs = new Set();
let pcHistogram = new Map();
let lastPC = 0;
let jumpsToZero = 0;
let exceptionCount = 0;

// Monitor some key memory locations
let ioWrites = new Map();
let ioReads = new Map();

// Hook CPU execution
const origStep = sys.cpu.step.bind(sys.cpu);
sys.cpu.step = function() {
  lastPC = this.pc >>> 0;
  uniquePCs.add(lastPC);
  pcHistogram.set(lastPC, (pcHistogram.get(lastPC) || 0) + 1);
  instructionCount++;
  
  // Check for jumps to 0 or other bad addresses
  if (this.pc === 0) {
    jumpsToZero++;
    console.log(`WARNING: Jump to 0 detected at instruction ${instructionCount}`);
  }
  
  // Check for exception vectors
  if (this.pc === 0xbfc00180 || this.pc === 0x80000080) {
    exceptionCount++;
    console.log(`Exception at PC=0x${this.pc.toString(16)} (count=${exceptionCount})`);
  }
  
  return origStep.call(this);
};

// Monitor IO writes
const origAsWrite32 = sys.as.write32.bind(sys.as);
sys.as.write32 = function(addr, val) {
  const a = addr >>> 0;
  if (a >= 0x1f801000 && a <= 0x1f802fff) {
    ioWrites.set(a, (ioWrites.get(a) || 0) + 1);
    if (a >= 0x1f801810 && a <= 0x1f801814) {
      console.log(`GPU write: [0x${a.toString(16)}] = 0x${val.toString(16)}`);
    }
  }
  return origAsWrite32(addr, val);
};

// Monitor IO reads
const origAsRead32 = sys.as.read32.bind(sys.as);
sys.as.read32 = function(addr) {
  const a = addr >>> 0;
  if (a >= 0x1f801000 && a <= 0x1f802fff) {
    ioReads.set(a, (ioReads.get(a) || 0) + 1);
  }
  return origAsRead32(addr);
};

console.log('Starting BIOS execution monitoring...');
console.log('BIOS entry point: 0xbfc00000');
console.log('----------------------------------------');

const CYCLES_PER_SECOND = 33_868_800;
const INSTRUCTIONS_PER_UPDATE = 100000;
let totalInstructions = 0;

// Run for up to 5 million instructions
for (let batch = 0; batch < 50; batch++) {
  const startCount = instructionCount;
  
  // Execute batch
  for (let i = 0; i < INSTRUCTIONS_PER_UPDATE; i++) {
    sys.stepCpu(1);
    sys.stepCycles(1);
  }
  
  totalInstructions += instructionCount - startCount;
  
  // Report progress
  if (batch % 10 === 0) {
    console.log(`\nAfter ${totalInstructions} instructions:`);
    console.log(`  Current PC: 0x${(sys.cpu.pc >>> 0).toString(16)}`);
    console.log(`  Unique PCs visited: ${uniquePCs.size}`);
    console.log(`  Jumps to 0: ${jumpsToZero}`);
    console.log(`  Exceptions: ${exceptionCount}`);
    
    // Check if we're stuck in a loop
    const topPCs = Array.from(pcHistogram.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    console.log('  Top 5 most executed addresses:');
    for (const [pc, count] of topPCs) {
      const pct = ((count / instructionCount) * 100).toFixed(2);
      console.log(`    0x${pc.toString(16)}: ${count} times (${pct}%)`);
    }
    
    // Check IO activity
    if (ioWrites.size > 0) {
      console.log(`  IO writes to ${ioWrites.size} addresses`);
      const gpuWrites = Array.from(ioWrites.entries())
        .filter(([addr]) => addr >= 0x1f801810 && addr <= 0x1f801814);
      if (gpuWrites.length > 0) {
        console.log('  GPU register writes:');
        for (const [addr, count] of gpuWrites) {
          console.log(`    0x${addr.toString(16)}: ${count} writes`);
        }
      }
    }
  }
  
  // Check if stuck in tight loop
  if (uniquePCs.size < 100 && instructionCount > 1000000) {
    console.log('\nWARNING: Appears to be stuck in a tight loop!');
    console.log('Breaking early...');
    break;
  }
}

console.log('\n========================================');
console.log('Execution analysis complete!');
console.log(`Total instructions executed: ${instructionCount}`);
console.log(`Unique addresses executed: ${uniquePCs.size}`);
console.log(`Final PC: 0x${(sys.cpu.pc >>> 0).toString(16)}`);
console.log(`Total exceptions: ${exceptionCount}`);
console.log(`Jumps to address 0: ${jumpsToZero}`);

// Show PC range
const pcArray = Array.from(uniquePCs);
const minPC = Math.min(...pcArray);
const maxPC = Math.max(...pcArray);
console.log(`PC range: 0x${minPC.toString(16)} - 0x${maxPC.toString(16)}`);

// Check if we reached kernel code
const kernelPCs = pcArray.filter(pc => pc >= 0x80000000 && pc < 0x80200000);
if (kernelPCs.length > 0) {
  console.log(`Reached kernel space: ${kernelPCs.length} addresses`);
} else {
  console.log('Never reached kernel space (0x80000000+)');
}

// Check if we stayed in BIOS ROM
const biosPCs = pcArray.filter(pc => pc >= 0xbfc00000 && pc < 0xbfc80000);
console.log(`BIOS ROM addresses executed: ${biosPCs.length}`);
