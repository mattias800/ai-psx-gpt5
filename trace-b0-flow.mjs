import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Tracing B0 call execution flow...\n');

let instructionCount = 0;
let b0CallCount = 0;
let traceNextInstructions = 0;
let lastT1 = 0;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Extract PC from trace
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Check for B0 entry point
      if (pc === 0x000000b0) {
        b0CallCount++;
        // Extract T1 register (function number) if available
        const t1Match = line.match(/t1=([0-9a-f]{8})/i);
        if (t1Match) {
          lastT1 = parseInt(t1Match[1], 16);
        }
        
        if (b0CallCount <= 5) {
          console.log(`\n[${instructionCount}] B0 CALL #${b0CallCount} (function=0x${lastT1.toString(16)})`);
          console.log('Tracing next 50 instructions to see where it goes...');
          traceNextInstructions = 50;
        }
      }
      
      // If we're tracing after a B0 call, show the flow
      if (traceNextInstructions > 0) {
        const pcHex = pc.toString(16).padStart(8, '0');
        
        // Highlight important addresses
        let annotation = '';
        if (pc >= 0x5e0 && pc < 0x600) annotation = ' <- B0 dispatcher';
        else if (pc >= 0xbfc06ff0 && pc < 0xbfc07100) annotation = ' <- BIOS malloc area';
        else if (pc >= 0x1174 && pc < 0x1200) annotation = ' <- RAM malloc area';
        else if (pc === 0xbfc00434) annotation = ' <- Common wait loop';
        
        console.log(`  [${traceNextInstructions}] PC=0x${pcHex}${annotation}`);
        traceNextInstructions--;
        
        if (traceNextInstructions === 0) {
          console.log('  ...');
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: false,
  includeRegisters: true
});

console.log('Running first 100k instructions...');

try {
  for (let i = 0; i < 100000; i++) {
    sys.stepCpu(1);
    
    // Step scheduler
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total instructions: ${instructionCount}`);
console.log(`Total B0 calls: ${b0CallCount}`);
