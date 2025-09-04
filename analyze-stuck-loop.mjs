import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Finding where BIOS gets stuck...\n');

let instructionCount = 0;
const pcHistory = [];
const pcFrequency = new Map();
let inLoop = false;
let loopStart = 0;
let loopEnd = 0;
let loopInstructions = [];

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Track PC frequency
      pcFrequency.set(pc, (pcFrequency.get(pc) || 0) + 1);
      
      // Keep sliding window of recent PCs
      pcHistory.push({ pc, line });
      if (pcHistory.length > 100) {
        pcHistory.shift();
      }
      
      // Detect when we enter a tight loop (PC repeats within 20 instructions)
      if (!inLoop && pcFrequency.get(pc) > 100) {
        // Find loop boundaries
        const recentPCs = pcHistory.slice(-50).map(h => h.pc);
        const firstOccurrence = recentPCs.indexOf(pc);
        const secondOccurrence = recentPCs.lastIndexOf(pc);
        
        if (firstOccurrence !== -1 && secondOccurrence !== -1 && firstOccurrence !== secondOccurrence) {
          inLoop = true;
          loopStart = Math.min(...recentPCs.slice(firstOccurrence, secondOccurrence + 1));
          loopEnd = Math.max(...recentPCs.slice(firstOccurrence, secondOccurrence + 1));
          loopInstructions = pcHistory.slice(-50).slice(firstOccurrence, secondOccurrence + 1);
          
          console.log(`\n🔄 INFINITE LOOP DETECTED at instruction ${instructionCount}!`);
          console.log(`Loop range: 0x${loopStart.toString(16)} - 0x${loopEnd.toString(16)}`);
          console.log(`Loop size: ${loopEnd - loopStart} bytes, ${secondOccurrence - firstOccurrence} instructions\n`);
          
          console.log('Loop instructions:');
          loopInstructions.forEach((inst, idx) => {
            // Extract just the essential parts from the trace line
            const pcStr = inst.pc.toString(16).padStart(8, '0');
            const instrMatch = inst.line.match(/([0-9a-f]{8})\s+([0-9a-f]{8})/i);
            if (instrMatch) {
              console.log(`  [${idx}] 0x${pcStr}: ${instrMatch[2]}`);
            }
          });
          
          // Try to identify what the loop is checking
          console.log('\nAnalyzing loop behavior...');
          analyzeLoop(loopInstructions);
          
          // Stop after finding first major loop
          throw new Error('LOOP_FOUND');
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: false,
  includeRegisters: true
});

function analyzeLoop(instructions) {
  // Look for memory loads/stores in the loop
  const memAccess = [];
  const branches = [];
  
  instructions.forEach(inst => {
    const line = inst.line;
    
    // Look for load/store instructions
    if (line.includes('lw ') || line.includes('sw ') || line.includes('lb ') || line.includes('sb ')) {
      memAccess.push(inst);
    }
    
    // Look for branch instructions
    if (line.includes('beq ') || line.includes('bne ') || line.includes('jr ') || line.includes('jal ')) {
      branches.push(inst);
    }
    
    // Look for register values that might indicate what's being checked
    const regMatch = line.match(/v0=([0-9a-f]{8})|a0=([0-9a-f]{8})|t0=([0-9a-f]{8})/gi);
    if (regMatch) {
      console.log(`  Register values: ${regMatch.join(', ')}`);
    }
  });
  
  if (memAccess.length > 0) {
    console.log(`\n  Memory operations in loop: ${memAccess.length}`);
    console.log('  The loop is likely polling a memory location or hardware register');
  }
  
  if (branches.length > 0) {
    console.log(`  Branch instructions: ${branches.length}`);
    console.log('  The loop is checking a condition and branching based on it');
  }
  
  // Check if this looks like a wait-for-interrupt loop
  const pcValues = instructions.map(i => i.pc);
  if (pcValues.includes(0xbfc00434) || pcValues.includes(0xbfc00438)) {
    console.log('\n⚠️  This appears to be the BIOS wait-for-interrupt loop!');
    console.log('  The BIOS is waiting for an interrupt that never arrives.');
    console.log('  Possible causes:');
    console.log('    • Timer interrupts not firing');
    console.log('    • VBLANK interrupts not working');
    console.log('    • Interrupt controller not properly configured');
  }
}

console.log('Running BIOS until we find the stuck loop (max 500k instructions)...\n');

try {
  for (let i = 0; i < 500000; i++) {
    sys.stepCpu(1);
    
    // Step scheduler more aggressively
    if (i % 10 === 0) {
      sys.stepCycles(100);
    }
  }
} catch (error) {
  if (error.message !== 'LOOP_FOUND') {
    console.log(`Error: ${error.message}`);
  }
}

if (!inLoop) {
  console.log('\nNo tight infinite loop found.');
  console.log('The BIOS may be stuck in a larger loop or waiting for events.');
  
  // Show most frequent addresses
  const topAddrs = Array.from(pcFrequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  console.log('\nMost frequently executed addresses:');
  topAddrs.forEach(([pc, count]) => {
    console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times`);
  });
}
