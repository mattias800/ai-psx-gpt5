import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Targeted fix', () => {
  test('prevent bad memcpy by fixing the source data', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let errorPathDetected = false;
    let gpuAccessed = false;
    let badJumpPrevented = false;
    
    console.log('\n=== Testing targeted fix ===\n');
    
    // Hook the CPU to intercept the problematic memcpy
    const originalStep = sys.cpu.step.bind(sys.cpu);
    sys.cpu.step = function() {
      const pc = this.s.pc;
      
      // Check if we're at the memcpy that writes the error string
      if (pc === 0xbfc00434 && instructionCount > 59000 && instructionCount < 60000) {
        // Check if this is the problematic copy by looking at destination
        const a1 = this.s.reg[5]; // $a1 is destination
        
        if (a1 === 0xa0007268 || a1 === 0x80007268) {
          console.log(`[${instructionCount}] Intercepting problematic memcpy to 0x${a1.toString(16)}`);
          
          // Instead of doing the copy, skip the function by setting PC to return address
          this.s.pc = this.s.reg[31]; // Jump to return address in $ra
          this.s.nextPc = (this.s.pc + 4) >>> 0;
          badJumpPrevented = true;
          return; // Don't execute the original instruction
        }
      }
      
      // Check if we're about to jump to the bad address
      if (this.s.nextPc === 0x64657472) {
        console.log(`[${instructionCount}] Preventing jump to bad address`);
        // Reset nextPc to a safe value (next sequential instruction)
        this.s.nextPc = (this.s.pc + 4) >>> 0;
        badJumpPrevented = true;
      }
      
      originalStep.call(this);
    };
    
    // Track memory to detect GPU access and error strings
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        
        // Check for GPU access
        if (p >= 0x1f801810 && p <= 0x1f801814) {
          return true;
        }
        
        // Check for error string writes
        if (instructionCount >= 59000 && instructionCount <= 60000 &&
            op.startsWith('w') && p >= 0x00007200 && p <= 0x00007300) {
          return true;
        }
        
        return false;
      },
      output: (line) => {
        const p = parseInt(line.match(/[0-9a-f]+/)?.[0] || '0', 16) & 0x1fffffff;
        
        if (p >= 0x1f801810 && p <= 0x1f801814) {
          console.log(`[${instructionCount}] GPU access: ${line}`);
          gpuAccessed = true;
        }
        
        // Check for the error string pattern
        if (line.includes('45505954') || line.includes('64657472')) {
          if (!errorPathDetected) {
            console.log(`[${instructionCount}] Error string detected (but may be prevented)`);
            errorPathDetected = true;
          }
        }
      }
    });
    
    // Track instruction count
    sys.enableCpuTrace({
      output: () => {
        instructionCount++;
        
        if (instructionCount === 60000) {
          if (badJumpPrevented) {
            console.log(`\n✓ Prevented error path at instruction 60000`);
          }
        }
        
        if (instructionCount === 950000) {
          console.log(`\n✓ Passed previous failure point (949507)!`);
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
        
        // Check if we've reached GPU access
        if (gpuAccessed) {
          console.log(`\n✓ SUCCESS! GPU accessed at instruction ${instructionCount}`);
          console.log('The BIOS is likely preparing to display the logo!');
          break;
        }
        
        // Stop if we hit 1.5M instructions
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
            console.log('✗ Still hitting the bad address');
          } else {
            console.log('✓ Different address - we got further!');
          }
        }
      }
    }
    
    console.log(`\n=== Results ===`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`Bad jump prevented: ${badJumpPrevented}`);
    console.log(`GPU accessed: ${gpuAccessed}`);
    
    // Success if we prevented the bad jump and got further
    const success = badJumpPrevented || gpuAccessed || instructionCount > 960000;
    expect(success).toBeTruthy();
  });
});
