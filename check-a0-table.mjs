import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

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

let instructionCount = 0;

// Monitor A0:00 entry
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Check A0 table periodically and at key points
    if (instructionCount === 1 || 
        instructionCount === 100000 || 
        instructionCount === 138000 ||
        instructionCount === 138210) {
      
      console.log(`\n=== At instruction ${instructionCount} ===`);
      console.log('A0 function table entries (first 8):');
      for (let i = 0; i < 8; i++) {
        const addr = 0x200 + (i * 4);
        try {
          const val = sys.ram.read32(addr);
          console.log(`  A0:${i.toString(16).padStart(2, '0')} @ 0x${addr.toString(16).padStart(4, '0')} = 0x${val.toString(16).padStart(8, '0')}`);
        } catch (e) {
          console.log(`  A0:${i.toString(16).padStart(2, '0')} @ 0x${addr.toString(16).padStart(4, '0')} = <error>`);
        }
      }
      
      // Check if A0:00 has been corrupted
      const a0_00 = sys.ram.read32(0x200);
      if (a0_00 === 0x7e006000 || (a0_00 >= 0x7e000000 && a0_00 < 0x7f000000)) {
        console.log('\n!!! FOUND CORRUPTION: A0:00 contains invalid address in 0x7e range!');
        console.log(`A0:00 = 0x${a0_00.toString(16)}`);
        process.exit(0);
      }
      
      if (instructionCount === 138210) {
        console.log('\n=== About to call A0 dispatcher with $t1=0 ===');
        console.log(`This will load from A0:00 which contains: 0x${a0_00.toString(16)}`);
        
        // Check what t0 will become after the calculation
        const t1 = 0; // We know t1 is 0
        const tableAddr = 0x200 + (t1 << 2);
        console.log(`Table lookup address: 0x${tableAddr.toString(16)}`);
        console.log(`Value at that address: 0x${sys.ram.read32(tableAddr).toString(16)}`);
        
        process.exit(0);
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

console.log('Monitoring A0 function table...\n');

try {
  for (let i = 0; i < 140000; i++) {
    sys.stepCpu(1);
  }
} catch (error) {
  console.log(`\nCrashed at instruction ${instructionCount}: ${error.message}`);
}
