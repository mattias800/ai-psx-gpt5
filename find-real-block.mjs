import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Finding the real blocking point (skipping memory clear loops)...\n');

let instructionCount = 0;
const loopDetected = new Set();
const pcFrequency = new Map();

// Run for a while first to get past early init
console.log('Running past early initialization (100k instructions)...');
for (let i = 0; i < 100000; i++) {
  sys.stepCpu(1);
  if (i % 50 === 0) sys.stepCycles(50);
}

console.log('Now monitoring for blocking loops...\n');

// Now start monitoring
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Skip known memory clear loops
      if (pc >= 0xbfc003b8 && pc <= 0xbfc003c8) return;
      if (pc >= 0xbfc00200 && pc <= 0xbfc00280) return; // Early clear loop
      
      pcFrequency.set(pc, (pcFrequency.get(pc) || 0) + 1);
      
      // After 50k more instructions, analyze
      if (instructionCount === 50000) {
        analyzeHotspots();
      }
    }
  },
  style: 'redux', 
  includeDisasm: false
});

function analyzeHotspots() {
  console.log('\n=== HOT SPOT ANALYSIS ===\n');
  
  const sorted = Array.from(pcFrequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  
  console.log('Most frequently executed addresses after initialization:');
  
  let prevAddr = 0;
  let inSequence = false;
  const sequences = [];
  let currentSeq = [];
  
  sorted.forEach(([pc, count]) => {
    const pct = ((count / instructionCount) * 100).toFixed(2);
    
    // Group sequential addresses
    if (prevAddr && Math.abs(pc - prevAddr) <= 8) {
      if (!inSequence) {
        inSequence = true;
        currentSeq = [prevAddr];
      }
      currentSeq.push(pc);
    } else {
      if (inSequence) {
        sequences.push([...currentSeq]);
        currentSeq = [];
        inSequence = false;
      }
    }
    
    console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times (${pct}%)`);
    
    // Identify what this address likely is
    if (pc >= 0xbfc00430 && pc <= 0xbfc00450) {
      console.log(`    ^ WAIT FOR INTERRUPT LOOP`);
    } else if (pc >= 0xbfc01400 && pc <= 0xbfc01600) {
      console.log(`    ^ BIOS system call handler`);
    } else if (pc >= 0x00002000 && pc <= 0x00004000) {
      console.log(`    ^ Kernel function`);
    } else if (pc >= 0x00004000 && pc <= 0x00005000) {
      console.log(`    ^ System service`);
    }
    
    prevAddr = pc;
  });
  
  if (sequences.length > 0) {
    console.log('\n🔄 DETECTED LOOP SEQUENCES:');
    sequences.forEach(seq => {
      const start = Math.min(...seq);
      const end = Math.max(...seq);
      console.log(`  Loop at 0x${start.toString(16)}-0x${end.toString(16)} (${seq.length} addresses)`);
      
      // Identify specific loops
      if (start >= 0xbfc00430 && end <= 0xbfc00450) {
        console.log('    ⚠️  This is the BIOS interrupt wait loop!');
        console.log('    The BIOS is stuck waiting for interrupts.');
        console.log('    SOLUTION: Need to ensure timer/VBLANK interrupts are firing.');
      }
    });
  }
  
  // Find the tightest loop
  const tightLoop = sorted.filter(([pc, count]) => count > instructionCount * 0.05);
  if (tightLoop.length > 0 && tightLoop.length < 10) {
    console.log('\n❌ BLOCKING LOOP FOUND:');
    console.log(`The BIOS is stuck in a ${tightLoop.length}-instruction loop:`);
    tightLoop.forEach(([pc, count]) => {
      console.log(`  0x${pc.toString(16)}`);
    });
  }
}

// Run for 50k more instructions
try {
  for (let i = 0; i < 50000; i++) {
    sys.stepCpu(1);
    if (i % 50 === 0) sys.stepCycles(50);
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
}

analyzeHotspots();
