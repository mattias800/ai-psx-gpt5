import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Fix memory regions', () => {
  test('add proper memory mirroring to prevent invalid jump', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // The PSX has complex memory mirroring
    // Physical address regions get mapped to multiple virtual addresses
    // This might be causing issues if the BIOS expects certain mirrors
    
    // Hook memory reads to see what unmapped addresses are accessed
    const originalRead32 = sys.memory.read32.bind(sys.memory);
    let unmappedReads: Set<number> = new Set();
    
    sys.memory.read32 = function(addr: number): number {
      try {
        return originalRead32(addr);
      } catch (e: any) {
        if (e.message.includes('Unmapped')) {
          unmappedReads.add(addr >>> 0);
          
          // Return a safe value instead of crashing
          // This helps us see what addresses are being accessed
          console.log(`Unmapped read from 0x${(addr >>> 0).toString(16)}`);
          
          // For addresses that look like they might be in KSEG0/KSEG1 range
          // but with wrong upper bits, try to fix them
          const physical = addr & 0x1FFFFFFF;
          
          // Check if this might be RAM
          if (physical < 0x200000) {
            console.log(`  -> Treating as RAM at 0x${physical.toString(16)}`);
            try {
              return originalRead32(0x80000000 | physical);
            } catch (e2) {
              return 0;
            }
          }
          
          // Check if this might be scratchpad
          if (physical >= 0x1F800000 && physical < 0x1F800400) {
            console.log(`  -> Treating as scratchpad at 0x${physical.toString(16)}`);
            try {
              return originalRead32(0x80000000 | physical);
            } catch (e2) {
              return 0;
            }
          }
          
          // Check if this might be I/O
          if (physical >= 0x1F801000 && physical < 0x1F802000) {
            console.log(`  -> Treating as I/O at 0x${physical.toString(16)}`);
            return 0; // Return 0 for unmapped I/O
          }
          
          // Unknown region, return 0
          console.log(`  -> Unknown region, returning 0`);
          return 0;
        }
        throw e;
      }
    };
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let lastGoodPC = 0;
    
    console.log('\n=== Testing memory region fix ===\n');
    
    try {
      for (let i = 0; i < 1000000; i++) {
        lastGoodPC = sys.cpu.s.pc;
        sys.cpu.step();
        instructionCount++;
        
        if (instructionCount % 100000 === 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Check if we've hit the problematic address
        if (sys.cpu.s.pc === 0x64657472 || sys.cpu.s.nextPc === 0x64657472) {
          console.log(`\n!!! About to jump to bad address at instruction ${instructionCount} !!!`);
          console.log(`Last good PC: 0x${lastGoodPC.toString(16)}`);
          console.log(`Current PC: 0x${sys.cpu.s.pc.toString(16)}`);
          console.log(`Next PC: 0x${sys.cpu.s.nextPc.toString(16)}`);
          
          // Check what instruction caused this
          try {
            const instr = sys.memory.read32(lastGoodPC);
            console.log(`Last instruction: 0x${instr.toString(16)}`);
            
            const op = (instr >>> 26) & 0x3F;
            const rs = (instr >>> 21) & 0x1F;
            const rt = (instr >>> 16) & 0x1F;
            const funct = instr & 0x3F;
            
            if (op === 0) {
              if (funct === 0x08) {
                console.log(`Was a JR $${rs}`);
                console.log(`Register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
              } else if (funct === 0x09) {
                console.log(`Was a JALR $${rs}`);
                console.log(`Register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
              }
            }
            
            // Look for where this register got loaded
            console.log('\nChecking recent memory accesses...');
            if (unmappedReads.size > 0) {
              console.log('Unmapped addresses that were accessed:');
              unmappedReads.forEach(addr => {
                console.log(`  0x${addr.toString(16)}`);
              });
            }
          } catch (e) {
            console.log('Could not decode last instruction');
          }
          
          break;
        }
        
        // Stop at 950k to see if we get past the failure point
        if (instructionCount > 950000) {
          console.log('\n✓ Passed the previous failure point!');
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
            console.log('This is the "detr" address');
            console.log(`Last good PC was: 0x${lastGoodPC.toString(16)}`);
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Unmapped addresses accessed: ${unmappedReads.size}`);
    
    if (unmappedReads.size > 0 && unmappedReads.size < 20) {
      console.log('List of unmapped addresses:');
      unmappedReads.forEach(addr => {
        console.log(`  0x${addr.toString(16)}`);
      });
    }
    
    expect(instructionCount).toBeGreaterThan(949000);
  });
});
