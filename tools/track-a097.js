import fs from 'fs';
import { PSXSystem } from './packages/emulator-core/dist/psx.js';

const biosBytes = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(new Uint8Array(biosBytes));

// Set initial state
sys.cpu.s.pc = 0xbfc00000;
sys.cpu.s.nextPc = 0xbfc00004;

const A0_97_ADDR = 0x200 + (0x97 << 2); // 0x45c
let lastValue = sys.ram.read32(A0_97_ADDR);
console.log(`Initial A0:97 value: 0x${lastValue.toString(16).padStart(8, '0')}`);

let instrCount = 0;
let changeCount = 0;

// Monitor A0:97 changes
sys.enableMemTrace({
  filter: (op, addr) => {
    // Only track writes to our specific address
    return op.startsWith('w') && addr === A0_97_ADDR;
  },
  output: (line) => {
    instrCount++;
    const newValue = sys.ram.read32(A0_97_ADDR);
    if (newValue !== lastValue) {
      changeCount++;
      console.log(`[${instrCount}] A0:97 changed from 0x${lastValue.toString(16).padStart(8, '0')} to 0x${newValue.toString(16).padStart(8, '0')}`);
      console.log(`  ${line}`);
      lastValue = newValue;
      
      // Stop after finding the problematic change
      if (newValue === 0x80002000) {
        console.log('  ^ Found the bad value!');
        throw new Error('Found bad value');
      }
    }
  }
});

// Also track CPU to see what instruction causes it
sys.enableCpuTrace({
  style: 'redux',
  output: (line) => {
    instrCount++;
    
    // Check periodically
    if (instrCount % 10000 === 0) {
      const currentValue = sys.ram.read32(A0_97_ADDR);
      if (currentValue !== lastValue) {
        changeCount++;
        console.log(`[${instrCount}] A0:97 changed from 0x${lastValue.toString(16).padStart(8, '0')} to 0x${currentValue.toString(16).padStart(8, '0')}`);
        console.log(`  Last instruction: ${line}`);
        lastValue = currentValue;
        
        if (currentValue === 0x80002000) {
          console.log('  ^ Found the bad value!');
          throw new Error('Found bad value');
        }
      }
    }
  }
});

try {
  for (let i = 0; i < 100000; i++) {
    sys.cpu.step();
  }
} catch (e) {
  if (e.message === 'Found bad value') {
    console.log(`\nSummary: A0:97 was changed ${changeCount} times before reaching the bad value at instruction ${instrCount}`);
  } else {
    console.log(`Error: ${e.message}`);
  }
}

// Final check
const finalValue = sys.ram.read32(A0_97_ADDR);
console.log(`Final A0:97 value: 0x${finalValue.toString(16).padStart(8, '0')}`);
