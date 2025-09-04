import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Testing hook over 500 instructions...\n');

// Run 500 instructions  
for (let i = 0; i < 500; i++) {
  sys.stepCpu(1);
  
  // Check memory periodically
  if (i === 100 || i === 200 || i === 300 || i === 400 || i === 450) {
    const valA0 = sys.ram.read32(0xa0);
    console.log(`[${i}] Value at 0xA0: 0x${valA0.toString(16).padStart(8, '0')}`);
  }
}

// Final check
const valA0 = sys.ram.read32(0xa0);
const valB0 = sys.ram.read32(0xb0);
const valC0 = sys.ram.read32(0xc0);

console.log('\nFinal stub status:');
console.log(`  0xA0: 0x${valA0.toString(16).padStart(8, '0')} (should be 0x3c080000 if hook fired)`);
console.log(`  0xB0: 0x${valB0.toString(16).padStart(8, '0')} (should be 0x3c080000 if hook fired)`);
console.log(`  0xC0: 0x${valC0.toString(16).padStart(8, '0')} (should be 0x3c080000 if hook fired)`);
