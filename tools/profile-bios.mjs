#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';

const biosPath = 'scph1001.bin';
const bios = fs.readFileSync(biosPath);

const sys = new PSXSystem();
sys.loadBIOS(bios);

// Profile execution
const pcCounts = new Map();
let instrCount = 0;
const maxInstr = 1000000;

sys.enableCpuTrace({
  output: (line) => {
    instrCount++;
    
    // Extract PC
    const pcMatch = line.match(/pc=([0-9a-f]+)/);
    if (pcMatch) {
      const pc = pcMatch[1];
      pcCounts.set(pc, (pcCounts.get(pc) || 0) + 1);
    }
    
    if (instrCount >= maxInstr) {
      // Analyze results
      console.log(`\nExecuted ${instrCount} instructions\n`);
      
      // Find hot spots
      const sorted = Array.from(pcCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20);
      
      console.log('Top 20 most executed addresses:');
      console.log('Address    | Count  | %');
      console.log('-----------|--------|-------');
      
      for (const [pc, count] of sorted) {
        const percent = (count / instrCount * 100).toFixed(2);
        const region = 
          pc.startsWith('bfc') ? 'BIOS' :
          pc.startsWith('a00') ? 'KSEG1' :
          pc.startsWith('800') ? 'KSEG0' :
          pc.startsWith('000') ? 'RAM' : 'OTHER';
        console.log(`${pc} | ${count.toString().padStart(6)} | ${percent.padStart(5)}% [${region}]`);
      }
      
      // Check for tight loops
      const loopThreshold = instrCount * 0.01; // 1% threshold
      const loops = sorted.filter(([_, count]) => count > loopThreshold);
      
      if (loops.length > 0) {
        console.log('\n⚠️  Potential loops detected (>1% of execution):');
        for (const [pc, count] of loops) {
          const percent = (count / instrCount * 100).toFixed(2);
          console.log(`  ${pc}: ${percent}% of execution`);
        }
      }
      
      // Analyze PC distribution
      let biosCount = 0;
      let ramCount = 0;
      let otherCount = 0;
      
      for (const [pc, count] of pcCounts.entries()) {
        if (pc.startsWith('bfc')) biosCount += count;
        else if (pc.startsWith('000') || pc.startsWith('800') || pc.startsWith('a00')) ramCount += count;
        else otherCount += count;
      }
      
      console.log('\nExecution distribution:');
      console.log(`  BIOS ROM: ${(biosCount / instrCount * 100).toFixed(1)}%`);
      console.log(`  RAM:      ${(ramCount / instrCount * 100).toFixed(1)}%`);
      console.log(`  Other:    ${(otherCount / instrCount * 100).toFixed(1)}%`);
      
      process.exit(0);
    }
  }
});

console.log('Profiling BIOS execution (1M instructions)...\n');

// Run
for (let i = 0; i < maxInstr; i++) {
  sys.stepCpu(1);
}
