import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Monitoring for clear loop exit...\n');

let lastPc = 0;
let loopCount = 0;
let inClearLoop = false;

sys.enableCpuTrace({
  output: (line) => {
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Detect entry to clear loop
      if (pc === 0xbfc00250) {
        if (!inClearLoop) {
          inClearLoop = true;
          console.log(`Entered clear loop at instruction ${loopCount}`);
        }
      }
      
      // Detect exit from clear loop (when we don't loop back)
      if (inClearLoop && lastPc === 0xbfc00274 && pc !== 0xbfc00250) {
        console.log(`EXITED clear loop at instruction ${loopCount}, next PC: 0x${pc.toString(16)}`);
        
        // Check memory state
        const valA0 = sys.ram.read32(0xa0);
        const valB0 = sys.ram.read32(0xb0);  
        const valC0 = sys.ram.read32(0xc0);
        console.log('\nMemory state after clear:');
        console.log(`  0xA0: 0x${valA0.toString(16).padStart(8, '0')}`);
        console.log(`  0xB0: 0x${valB0.toString(16).padStart(8, '0')}`);
        console.log(`  0xC0: 0x${valC0.toString(16).padStart(8, '0')}`);
        
        process.exit(0);
      }
      
      lastPc = pc;
      loopCount++;
      
      if (loopCount > 10000) {
        console.log('Ran 10000 instructions without exiting clear loop');
        process.exit(1);
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run
for (let i = 0; i < 10000; i++) {
  sys.stepCpu(1);
}
