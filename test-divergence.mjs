import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

// Try to find BIOS file
const biosPaths = [
  path.join(process.cwd(), 'scph1001.bin'),
  path.join(process.cwd(), 'scph5502.bin'),
  path.join(process.cwd(), 'traces', 'scph5502.bin'),
  path.join(process.cwd(), 'tools/trace-compare/traces', 'scph5502.bin'),
  '/Users/mattias800/temp/scph5502.bin'
];

let bios = null;
for (const biosPath of biosPaths) {
  if (fs.existsSync(biosPath)) {
    console.log(`Found BIOS at: ${biosPath}`);
    bios = fs.readFileSync(biosPath);
    break;
  }
}

if (!bios) {
  console.log('Warning: No BIOS file found. Creating a minimal test BIOS (512KB of zeros)...');
  // Create a minimal 512KB BIOS for testing
  bios = Buffer.alloc(512 * 1024);
  // Add reset vector at 0xBFC00000 (offset 0 in BIOS)
  // Jump to start of BIOS ROM: j 0xbfc00010
  bios.writeUInt32LE(0x0bf00004, 0); // j 0xbfc00010 
  // At 0xBFC00010: infinite loop
  bios.writeUInt32LE(0x1000ffff, 0x10); // beq zero,zero,-1
}

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

// Run for specified number of instructions
const nInstructions = parseInt(process.argv[2] || '150000', 10);

console.log(`Running emulator for ${nInstructions} instructions...`);

try {
  sys.stepCpu(nInstructions);
  console.log(`Successfully ran ${nInstructions} instructions without crash!`);
} catch (error) {
  console.error(`Crashed after attempting ${nInstructions} instructions:`, error.message);
  process.exit(1);
}
