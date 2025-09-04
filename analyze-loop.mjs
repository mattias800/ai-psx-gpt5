import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Analyzing BIOS execution pattern...\n');

let instructionCount = 0;
const pcHistory = [];
const pcCounts = new Map();
let lastPC = 0;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      lastPC = pc;
      
      // Track PC frequency
      pcCounts.set(pc, (pcCounts.get(pc) || 0) + 1);
      
      // Keep recent PC history
      pcHistory.push(pc);
      if (pcHistory.length > 100) {
        pcHistory.shift();
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run for 500k instructions to see patterns
const maxInstructions = 500000;

console.log('Running BIOS for analysis...');

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Step scheduler periodically 
    if (i % 100 === 0) {
      sys.stepCycles(100);
    }
    
    // Check for potential infinite loops every 100k
    if ((i + 1) % 100000 === 0) {
      console.log(`\n[${i + 1}] Analysis at instruction ${instructionCount}:`);
      
      // Find most frequent PCs (potential loops)
      const sorted = Array.from(pcCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
      
      console.log('Top 10 most visited addresses:');
      sorted.forEach(([pc, count]) => {
        const pct = ((count / instructionCount) * 100).toFixed(2);
        console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times (${pct}%)`);
      });
      
      // Check if we're in a tight loop
      const recentUnique = new Set(pcHistory.slice(-20));
      if (recentUnique.size < 5) {
        console.log('\n⚠️ Detected tight loop in last 20 instructions:');
        console.log('  Unique addresses:', recentUnique.size);
        console.log('  Loop addresses:', Array.from(recentUnique).map(p => '0x' + p.toString(16)).join(', '));
      }
      
      console.log(`\nCurrent PC: 0x${lastPC.toString(16).padStart(8, '0')}`);
    }
  }
} catch (error) {
  console.log(`\n❌ Crashed at instruction ${instructionCount}: ${error.message}`);
  console.log(`Last PC: 0x${lastPC.toString(16).padStart(8, '0')}`);
}

console.log('\n=== FINAL ANALYSIS ===');
console.log(`Total instructions: ${instructionCount}`);

// Show final hot spots
const finalSorted = Array.from(pcCounts.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

console.log('\nTop 20 hottest addresses (potential infinite loops):');
finalSorted.forEach(([pc, count]) => {
  const pct = ((count / instructionCount) * 100).toFixed(2);
  if (parseFloat(pct) > 1.0) { // Only show significant ones
    console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times (${pct}%)`);
  }
});
