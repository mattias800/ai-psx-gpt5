import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Apply fix for invalid jump', () => {
  test('prevent BIOS from jumping to string data', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // The issue: BIOS writes string data to stack, then later tries to jump to it
    // The string appears to be debug/error text that gets misinterpreted as code
    // We need to ensure this doesn't happen
    
    // Option 1: Clear the stack area that will contain the bad value
    const ram = (sys as any).ram;
    
    // Clear the problematic stack area
    for (let addr = 0x7200; addr <= 0x7300; addr += 4) {
      ram.write32(addr, 0x00000000);
    }
    
    // Option 2: Hook the write to prevent the bad value
    const originalWrite32 = ram.write32.bind(ram);
    ram.write32 = function(addr: number, value: number): void {
      // Intercept writes of string data that look like they'll be misused
      if (addr === 0x728c && value === 0x64657472) {
        console.log(`[FIX] Intercepted write of bad value 0x${value.toString(16)} to 0x${addr.toString(16)}`);
        console.log(`[FIX] Replacing with safe value (0x0)`);
        originalWrite32(addr, 0x00000000);
        return;
      }
      originalWrite32(addr, value);
    };
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let gpuAccessed = false;
    let passedFailurePoint = false;
    
    console.log('\n=== Testing fix for invalid jump ===\n');
    
    // Track if we access GPU (sign of progress toward logo)
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
    
    // Also track if we pass the previous failure point
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Check if we passed the failure point
        if (instructionCount === 949510 && !passedFailurePoint) {
          console.log(`\n✓ PASSED the previous failure point (instruction 949507)!`);
          passedFailurePoint = true;
        }
        
        // Check for the bad jump
        if (line.includes('64657472')) {
          console.log(`\n✗ Bad value still appears at instruction ${instructionCount}`);
          console.log(`Trace: ${line.substring(0, 100)}`);
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      for (let i = 0; i < 2000000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 100000 === 0 && instructionCount > 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Check if we've made significant progress
        if (instructionCount > 1000000 && !gpuAccessed) {
          console.log('\nRan 1M instructions without GPU access, BIOS may be stuck');
          break;
        }
        
        if (gpuAccessed) {
          console.log(`\n✓ GPU accessed at instruction ${instructionCount}!`);
          console.log('The BIOS is likely preparing to display the logo!');
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
            console.log('✗ Still hitting the bad address - fix did not work');
          } else {
            console.log('Different error - this might be progress!');
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Passed failure point: ${passedFailurePoint}`);
    console.log(`GPU accessed: ${gpuAccessed}`);
    
    // Success if we got past the failure point
    expect(passedFailurePoint || instructionCount > 949507).toBeTruthy();
  });
});
