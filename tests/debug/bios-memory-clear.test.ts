import { describe, test } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS memory clear', () => {
  test('let BIOS complete memory clearing', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Connect controller and memory card
    sys.setPadButtons(0xFFFF);
    sys.setMemcardPresent(true);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let loopCount = 0;
    let lastV0 = 0;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Monitor progress at 0xbfc003b8 (memory clear loop)
        if (pc === 0xbfc003b8) {
          loopCount++;
          // Extract v0 value
          const v0Match = line.match(/v0=([0-9a-f]{8})/);
          if (v0Match) {
            const v0 = parseInt(v0Match[1], 16);
            if (loopCount % 100 === 0) {
              console.log(`[${instrCount}] Loop iteration ${loopCount}: v0=0x${v0.toString(16)} (clearing ${v0 - 0xa0009000} bytes done)`);
            }
            lastV0 = v0;
          }
        }
        
        // Check if we've exited the loop
        if (pc === 0xbfc003cc && loopCount > 0) {
          console.log(`\\nMemory clear complete after ${loopCount} iterations!`);
          console.log(`Cleared from 0xa0009000 to 0x${lastV0.toString(16)}`);
          console.log(`Total bytes cleared: ${lastV0 - 0xa0009000}`);
          loopCount = -1; // Mark as complete
        }
      }
    });
    
    console.log('Starting BIOS boot - waiting for memory clear...');
    console.log('Target range: 0xa0009000 to 0xa000c160 (12,640 bytes)');
    console.log('Expected iterations: ~3160\\n');
    
    // Run enough instructions to complete the memory clear
    // 3160 iterations * 5 instructions per iteration = ~16000 instructions
    const maxInstructions = 20000;
    
    try {
      for (let i = 0; i < maxInstructions; i++) {
        sys.cpu.step();
        
        // Stop after clearing is done
        if (loopCount === -1) {
          console.log(`\\nContinuing BIOS boot after memory clear...`);
          // Run a bit more to see what happens next
          for (let j = 0; j < 1000; j++) {
            sys.cpu.step();
          }
          break;
        }
      }
    } catch (e: any) {
      console.log(`\\nExecution stopped: ${e.message}`);
    }
    
    console.log(`\\nTotal instructions executed: ${instrCount}`);
    
    if (loopCount > 0) {
      console.log('Memory clear did not complete in time');
    } else {
      console.log('BIOS successfully cleared memory and continued!');
    }
  });
});
