import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

// Load BIOS
const biosPath = path.join(process.cwd(), 'scph1001.bin');
const bios = fs.readFileSync(biosPath);

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Testing BIOS stub hook...\n');

// Run and check if hook message appears
let instructionCount = 0;
for (let i = 0; i < 200; i++) {
  sys.stepCpu(1);
  instructionCount++;
  
  // Check memory at 0xA0 to see if stubs are installed
  if (i === 50 || i === 100 || i === 150) {
    const val = sys.ram.read32(0xa0);
    console.log(`[${i}] Value at 0xA0: 0x${val.toString(16).padStart(8, '0')}`);
  }
}

console.log(`\nRan ${instructionCount} instructions`);

// Final check
const valA0 = sys.ram.read32(0xa0);
const valB0 = sys.ram.read32(0xb0);
const valC0 = sys.ram.read32(0xc0);

console.log('\nFinal stub status:');
console.log(`  0xA0: 0x${valA0.toString(16).padStart(8, '0')} (should be 0x3c080000 after hook)`);
console.log(`  0xB0: 0x${valB0.toString(16).padStart(8, '0')} (should be 0x3c080000 after hook)`);
console.log(`  0xC0: 0x${valC0.toString(16).padStart(8, '0')} (should be 0x3c080000 after hook)`);
