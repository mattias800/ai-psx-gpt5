import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

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

// Create trace file
const traceFile = 'emu-trace.txt';
const traceStream = fs.createWriteStream(traceFile);
let instructionCount = 0;

// Enable CPU tracing with Redux format
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    traceStream.write(line + '\n');
  },
  style: 'redux',
  includeDisasm: true,
  includeRegsParens: true
});

console.log('Starting trace generation...');

// Run up to 140k instructions (to capture divergence)
const maxInstructions = 140000;
try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.cpu.step();
    if (i % 10000 === 0) {
      console.log(`Progress: ${i} instructions`);
    }
  }
  console.log(`Successfully traced ${instructionCount} instructions`);
} catch (error) {
  console.log(`Traced ${instructionCount} instructions before crash:`, error.message);
}

traceStream.end();
console.log(`Trace written to ${traceFile}`);

// Now compare with PCSX-Redux trace
console.log('\nComparing with PCSX-Redux trace...');

// Check if Redux trace exists
const reduxTracePath = path.join(process.cwd(), 'tools/trace-compare/traces/redux-bios.trace');
if (!fs.existsSync(reduxTracePath)) {
  console.log('Redux trace not found, trying to generate it...');
  process.exit(0);
}

// Read both traces and compare
const compareTraces = async () => {
  const reduxStream = readline.createInterface({
    input: fs.createReadStream(reduxTracePath),
    crlfDelay: Infinity
  });

  const emuStream = readline.createInterface({
    input: fs.createReadStream(traceFile),
    crlfDelay: Infinity
  });

  const reduxLines = [];
  const emuLines = [];

  for await (const line of reduxStream) {
    reduxLines.push(line);
  }
  for await (const line of emuStream) {
    emuLines.push(line);
  }

  console.log(`Redux trace: ${reduxLines.length} lines`);
  console.log(`Emu trace: ${emuLines.length} lines`);

  // Find first divergence
  for (let i = 0; i < Math.min(reduxLines.length, emuLines.length); i++) {
    const reduxParts = reduxLines[i].split(' ');
    const emuParts = emuLines[i].split(' ');
    
    // Compare PC and instruction
    if (reduxParts[0] !== emuParts[0] || reduxParts[1] !== emuParts[1]) {
      console.log(`\nDIVERGENCE at instruction ${i + 1}:`);
      console.log('Redux:', reduxLines[i]);
      console.log('Emu:  ', emuLines[i]);
      
      // Show context
      console.log('\nContext (5 instructions before):');
      for (let j = Math.max(0, i - 5); j < i; j++) {
        console.log(`[${j + 1}] Redux: ${reduxLines[j]}`);
        console.log(`[${j + 1}] Emu:   ${emuLines[j]}`);
      }
      break;
    }
    
    if (i % 10000 === 0) {
      console.log(`Compared ${i} instructions, no divergence yet...`);
    }
  }
};

compareTraces().catch(console.error);
