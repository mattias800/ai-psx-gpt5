import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import { applySafetyPatch } from '../../packages/emulator-cpu/src/cpu-patch';
import * as fs from 'fs';
import * as path from 'path';

describe('Test CPU safety patch', () => {
  test('apply patch to prevent BIOS crash', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Apply the safety patch to the CPU
    applySafetyPatch(sys.cpu);
    console.log('\n=== Applied CPU safety patch ===\n');
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let patchActivated = false;
    let gpuAccessed = false;
    
    // Track GPU access
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        return p >= 0x1f801810 && p <= 0x1f801814;
      },
      output: (line) => {
        console.log(`[${instructionCount}] GPU access: ${line}`);
        gpuAccessed = true;
      }
    });
    
    // Track instruction count
    sys.enableCpuTrace({
      output: () => {
        instructionCount++;
        
        if (instructionCount % 100000 === 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
      }
    });
    
    // Capture console warnings to detect when patch activates
    const originalWarn = console.warn;
    console.warn = function(...args) {
      const msg = args[0]?.toString() || '';
      if (msg.includes('[CPU Safety]')) {
        console.log(...args);
        patchActivated = true;
      } else {
        originalWarn.apply(console, args);
      }
    };
    
    console.log('Starting execution...\n');
    
    try {
      for (let i = 0; i < 2000000; i++) {
        sys.cpu.step();
        
        // Check progress milestones
        if (instructionCount === 950000) {
          console.log('\n✓ Passed previous failure point (949507)!');
        }
        
        if (instructionCount === 1000000) {
          console.log('\n✓ Reached 1M instructions!');
        }
        
        // Stop if GPU accessed
        if (gpuAccessed) {
          console.log(`\n✓ SUCCESS! GPU accessed at instruction ${instructionCount}`);
          console.log('The BIOS is preparing to display the logo!');
          break;
        }
        
        // Stop after 1.5M instructions
        if (instructionCount > 1500000) {
          console.log('\nReached 1.5M instructions');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
      
      if (e.message.includes('Unmapped address')) {
        const addrMatch = e.message.match(/\d+/);
        if (addrMatch) {
          const addr = parseInt(addrMatch[0]);
          console.log(`Unmapped address: 0x${addr.toString(16)}`);
          
          if (addr === 0x64657472) {
            console.log('✗ Still hit the bad address (patch failed)');
          } else {
            console.log('✓ Different address - got further!');
          }
        }
      }
    }
    
    // Restore console.warn
    console.warn = originalWarn;
    
    console.log(`\n=== Results ===`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`Safety patch activated: ${patchActivated}`);
    console.log(`GPU accessed: ${gpuAccessed}`);
    
    // Success if patch activated and we got past the failure point
    const success = patchActivated && instructionCount > 949507;
    expect(success).toBeTruthy();
  });
});
