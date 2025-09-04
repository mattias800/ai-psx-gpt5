import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Tracking BIOS boot progress with detailed milestones...\n');

let instructionCount = 0;
const milestones = new Set();
let lastPC = 0;

// Track specific BIOS progress points
const knownMilestones = {
  0xbfc00000: 'BIOS entry point',
  0xbfc00180: 'Exception handler',
  0xbfc00278: 'Memory clear loop exit',
  0xbfc01a60: 'Kernel copy start',
  0xbfc01e7c: 'Device initialization',
  0x80030000: '🎯 BIOS SHELL/MENU',
  0x800304fc: 'Shell menu code',
  0x00004000: 'Kernel area active',
  0x00002000: 'System functions area',
  0x00003000: 'Device drivers area',
  0xbfc03000: 'BIOS late init',
  0xbfc04000: 'BIOS functions',
  0xbfc05000: 'BIOS utilities',
  0xbfc06000: 'BIOS device code',
  0xbfc07000: 'BIOS font/graphics'
};

// Track syscalls
const syscalls = new Map();

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      lastPC = pc;
      
      // Check for known milestones
      Object.entries(knownMilestones).forEach(([addr, desc]) => {
        const address = parseInt(addr, 16);
        if (pc === address && !milestones.has(address)) {
          milestones.add(address);
          console.log(`[${instructionCount}] MILESTONE: ${desc} (PC=0x${addr})`);
          
          if (address === 0x80030000) {
            console.log('\n🎉🎉🎉 SUCCESS! REACHED BIOS SHELL! 🎉🎉🎉\n');
            throw new Error('SHELL_FOUND'); // Stop execution
          }
        }
      });
      
      // Track A0/B0/C0 syscalls
      if (pc === 0x000000a0 || pc === 0x000000b0 || pc === 0x000000c0) {
        const funcNum = syscalls.get(pc) || 0;
        syscalls.set(pc, funcNum + 1);
        if (funcNum % 100 === 0) {
          console.log(`[${instructionCount}] System call at ${pc.toString(16)} (count: ${funcNum})`);
        }
      }
      
      // Look for specific patterns indicating progress
      if (pc >= 0x80000000 && pc < 0x80200000) {
        // Running from RAM
        if ((pc & 0xFFFF0000) === 0x80030000 && !milestones.has('ram_exec')) {
          milestones.add('ram_exec');
          console.log(`[${instructionCount}] ⚡ Executing from RAM 0x8003xxxx area`);
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run for up to 2M instructions
const maxInstructions = 2000000;
let foundShell = false;

console.log('Running BIOS boot sequence (up to 2M instructions)...\n');

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Step scheduler more frequently for better interrupt timing
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
    
    // Status updates
    if ((i + 1) % 250000 === 0) {
      console.log(`\n[${i + 1}] Status check at instruction ${instructionCount}:`);
      console.log(`  Current PC: 0x${lastPC.toString(16).padStart(8, '0')}`);
      console.log(`  Milestones reached: ${milestones.size}`);
      
      if (syscalls.size > 0) {
        console.log('  System calls:');
        syscalls.forEach((count, addr) => {
          console.log(`    ${addr.toString(16)}: ${count} calls`);
        });
      }
    }
  }
} catch (error) {
  if (error.message === 'SHELL_FOUND') {
    foundShell = true;
  } else {
    console.log(`\n❌ Crashed at instruction ${instructionCount}: ${error.message}`);
    console.log(`Last PC: 0x${lastPC.toString(16).padStart(8, '0')}`);
  }
}

// Final report
console.log('\n=== FINAL REPORT ===');
console.log(`Total instructions executed: ${instructionCount}`);
console.log(`Milestones reached: ${milestones.size}`);

if (foundShell) {
  console.log('\n✅ SUCCESS: PlayStation BIOS has booted to shell!');
} else {
  console.log('\n⏰ TIMEOUT: Did not reach shell within 2M instructions');
  console.log('The BIOS may need additional hardware emulation or features.');
}
