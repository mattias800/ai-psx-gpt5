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

// Track important BIOS milestones
const milestones = {
  kernelCopyStart: false,
  kernelCopyEnd: false,
  exceptionHandlersInstalled: false,
  memoryInitialized: false,
  deviceInit: false,
  cdromInit: false,
  gpuInit: false,
  controllerInit: false,
  biosMenuReached: false
};

// Track PC history for loop detection
const pcHistory = [];
const maxHistory = 1000;
let instructionCount = 0;

// Enable detailed tracing
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})\s+([0-9a-f]{8}):/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Track PC history
      pcHistory.push(pc);
      if (pcHistory.length > maxHistory) {
        pcHistory.shift();
      }
      
      // Check for important BIOS milestones
      if (pc === 0xbfc067f0 && !milestones.kernelCopyStart) {
        console.log(`[${instructionCount}] Kernel copy starting (PC=0xbfc067f0)`);
        milestones.kernelCopyStart = true;
      }
      
      if (pc === 0xbfc06de0 && !milestones.exceptionHandlersInstalled) {
        console.log(`[${instructionCount}] Installing exception handlers (PC=0xbfc06de0)`);
        milestones.exceptionHandlersInstalled = true;
      }
      
      if (pc === 0xbfc06ea0 && !milestones.memoryInitialized) {
        console.log(`[${instructionCount}] Memory system initialization (PC=0xbfc06ea0)`);
        milestones.memoryInitialized = true;
      }
      
      if (pc === 0xbfc05000 && !milestones.cdromInit) {
        console.log(`[${instructionCount}] CD-ROM initialization (PC=0xbfc05000)`);
        milestones.cdromInit = true;
      }
      
      if (pc === 0x80030000) {
        console.log(`[${instructionCount}] Reached shell/game entry point (PC=0x80030000)`);
        milestones.biosMenuReached = true;
      }
      
      // Detect infinite loops
      if (pcHistory.length >= 100) {
        // Check if we're stuck in a small loop
        const last20 = pcHistory.slice(-20);
        const last40 = pcHistory.slice(-40, -20);
        if (JSON.stringify(last20) === JSON.stringify(last40)) {
          console.log(`[${instructionCount}] Detected potential infinite loop!`);
          console.log(`Loop PCs: ${last20.map(p => '0x' + p.toString(16)).join(' -> ')}`);
          
          // Dump current register state
          const cpuAny = sys.cpu;
          if (cpuAny && cpuAny.regs) {
            const regs = cpuAny.regs;
            console.log('\nRegister state:');
            console.log(`  PC: 0x${pc.toString(16).padStart(8, '0')}`);
            console.log(`  RA: 0x${(regs[31] >>> 0).toString(16).padStart(8, '0')}`);
            console.log(`  SP: 0x${(regs[29] >>> 0).toString(16).padStart(8, '0')}`);
            console.log(`  A0: 0x${(regs[4] >>> 0).toString(16).padStart(8, '0')}`);
            console.log(`  V0: 0x${(regs[2] >>> 0).toString(16).padStart(8, '0')}`);
          }
          
          process.exit(0);
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run for a long time
console.log('Running BIOS and monitoring for milestones...\n');
const maxInstructions = 10000000;

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Report progress
    if ((i + 1) % 500000 === 0) {
      console.log(`[${i + 1}] Still running...`);
      
      // Check if we've reached all milestones
      const reached = Object.entries(milestones)
        .filter(([k, v]) => v)
        .map(([k, v]) => k);
      console.log(`  Milestones reached: ${reached.join(', ') || 'none'}`);
    }
    
    // Check for BIOS menu
    if (milestones.biosMenuReached) {
      console.log('\n✅ Successfully reached BIOS menu/shell entry point!');
      console.log(`Total instructions executed: ${instructionCount}`);
      break;
    }
  }
} catch (error) {
  console.log(`\nError at instruction ${instructionCount}: ${error.message}`);
  
  // Show last few PCs
  console.log('\nLast 10 PCs executed:');
  pcHistory.slice(-10).forEach((pc, i) => {
    console.log(`  [${instructionCount - 10 + i}] 0x${pc.toString(16).padStart(8, '0')}`);
  });
}

console.log('\n=== Final Summary ===');
console.log(`Total instructions executed: ${instructionCount}`);
console.log('Milestones reached:');
Object.entries(milestones).forEach(([name, reached]) => {
  console.log(`  ${name}: ${reached ? '✓' : '✗'}`);
});
