import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Debug BIOS trace failure', () => {
  it('traces execution around line 84120', async () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(__dirname, '../../tests/fixtures/SCPH1001.BIN');
    const biosData = fs.readFileSync(biosPath);
    sys.loadBIOS(biosData);

    // Enable CPU tracing
    let lineCount = 0;
    let lastInstructions: string[] = [];
    const maxHistory = 50;
    
    sys.enableCpuTrace({
      output: (line) => {
        lineCount++;
        lastInstructions.push(line);
        if (lastInstructions.length > maxHistory) {
          lastInstructions.shift();
        }
        
        // Check for suspicious jumps or PC=0
        if (line.includes('pc=00000000') || lineCount === 84122) {
          console.log('\n=== Context around failure ===');
          console.log(`Line ${lineCount}: ${line}`);
          console.log('\n=== Previous ${Math.min(20, lastInstructions.length-1)} instructions ===');
          const start = Math.max(0, lastInstructions.length - 21);
          for (let i = start; i < lastInstructions.length - 1; i++) {
            console.log(`Line ${lineCount - (lastInstructions.length - 1 - i)}: ${lastInstructions[i]}`);
          }
          
          // Check memory at critical locations
          console.log('\n=== Memory check ===');
          const ram = sys.ram;
          
          // Check function table entries that might be relevant
          console.log(`B0:0x47 table @ 0x990: 0x${ram.read32(0x990).toString(16).padStart(8,'0')}`);
          console.log(`Memory @ 0x3c2c: 0x${ram.read32(0x3c2c).toString(16).padStart(8,'0')}`);
          console.log(`Memory @ 0x3c30: 0x${ram.read32(0x3c30).toString(16).padStart(8,'0')}`);
          console.log(`Memory @ 0x3c34: 0x${ram.read32(0x3c34).toString(16).padStart(8,'0')}`);
          console.log(`Memory @ 0x3c38: 0x${ram.read32(0x3c38).toString(16).padStart(8,'0')}`);
          
          // Check if any function pointers in the B0 table are zero
          console.log('\n=== B0 function table scan (0x874-0xA73) ===');
          for (let addr = 0x874; addr <= 0xA73; addr += 4) {
            const val = ram.read32(addr);
            if (val === 0) {
              const index = (addr - 0x874) >> 2;
              console.log(`B0:0x${index.toString(16)} @ 0x${addr.toString(16)}: NULL`);
            }
          }
          
          throw new Error('Reached failure point');
        }
      },
      regsFormat: 'named'
    });

    // Run until failure or max instructions
    const maxInstructions = 84125;
    for (let i = 0; i < maxInstructions; i++) {
      sys.stepCpu(1);
      if (lineCount >= 84122) break;
    }
  });
});
