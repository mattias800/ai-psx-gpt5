import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

let instructionCount = 0;
let lastGoodPc = 0;

console.log('Testing BIOS boot progress...\n');

// Track milestones
const milestones = new Map();

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      lastGoodPc = parseInt(match[1], 16);
      
      // Track important PCs
      if (lastGoodPc === 0xbfc00278 && !milestones.has('clear_exit')) {
        milestones.set('clear_exit', instructionCount);
        console.log(`[${instructionCount}] Exited memory clear loop (PC=0xbfc00278)`);
      }
      if (lastGoodPc === 0x000000a0 && !milestones.has('a0_jump')) {
        milestones.set('a0_jump', instructionCount);
        console.log(`[${instructionCount}] Jump to A0 syscall (PC=0x000000a0)`);
      }
      if (lastGoodPc === 0x000000b0 && !milestones.has('b0_jump')) {
        milestones.set('b0_jump', instructionCount);
        console.log(`[${instructionCount}] Jump to B0 syscall (PC=0x000000b0)`);
      }
      if (lastGoodPc === 0x000000c0 && !milestones.has('c0_jump')) {
        milestones.set('c0_jump', instructionCount);
        console.log(`[${instructionCount}] Jump to C0 syscall (PC=0x000000c0)`);
      }
      if (lastGoodPc === 0xbfc067f0 && !milestones.has('kernel_copy')) {
        milestones.set('kernel_copy', instructionCount);
        console.log(`[${instructionCount}] Kernel copy routine (PC=0xbfc067f0)`);
      }
      if (lastGoodPc === 0x80030000 && !milestones.has('shell_entry')) {
        milestones.set('shell_entry', instructionCount);
        console.log(`[${instructionCount}] Shell/game entry point (PC=0x80030000)`);
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run until crash or limit
const maxInstructions = 200000;
let crashed = false;
let crashReason = '';

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Step scheduler periodically for VBLANK
    if (i % 100 === 0) {
      sys.stepCycles(100);
    }
    
    // Progress report
    if ((i + 1) % 10000 === 0) {
      console.log(`[${i + 1}] Still running...`);
    }
    
    // Check for shell entry
    if (milestones.has('shell_entry')) {
      console.log('\n✅ SUCCESS: Reached BIOS shell/game entry point!');
      break;
    }
  }
} catch (error) {
  crashed = true;
  crashReason = error.message;
  console.log(`\n❌ CRASHED at instruction ${instructionCount}: ${crashReason}`);
  console.log(`Last PC: 0x${lastGoodPc.toString(16).padStart(8, '0')}`);
}

// Summary
console.log('\n=== SUMMARY ===');
console.log(`Total instructions executed: ${instructionCount}`);
console.log(`Status: ${crashed ? 'CRASHED' : (milestones.has('shell_entry') ? 'SUCCESS' : 'INCOMPLETE')}`);

if (milestones.size > 0) {
  console.log('\nMilestones reached:');
  for (const [name, count] of milestones) {
    console.log(`  ${name}: instruction ${count}`);
  }
}

if (crashed) {
  // Check crash address
  const crashAddrMatch = crashReason.match(/(\d+)$/);
  if (crashAddrMatch) {
    const addr = parseInt(crashAddrMatch[1]);
    console.log(`\nCrash address: 0x${addr.toString(16)} (${addr})`);
    
    // Common problematic addresses
    if (addr === 0x80200000) {
      console.log('  -> This is the BIOS scratch RAM area');
    } else if (addr >= 0x80000000 && addr < 0x80200000) {
      console.log('  -> This is in main RAM (KSEG0)');
    } else if (addr >= 0x1f800000 && addr < 0x1f801000) {
      console.log('  -> This is scratchpad RAM');
    } else if (addr >= 0x1f801000 && addr < 0x1f802000) {
      console.log('  -> This is I/O port area');
    } else {
      console.log('  -> This address is unmapped');
    }
  }
}

// Compare with expected progress
console.log('\n=== PROGRESS COMPARISON ===');
console.log('PCSX-Redux typically executes ~140,000 instructions before reaching shell');
console.log(`Our emulator: ${instructionCount} instructions ${crashed ? '(crashed)' : ''}`);
const percentage = Math.round((instructionCount / 140000) * 100);
console.log(`Progress: ${percentage}% of expected`);
