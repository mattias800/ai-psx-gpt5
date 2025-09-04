import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Fix stack corruption', () => {
  test('prevent bad value from being on stack', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // The bad value 0x64657472 is being loaded from stack address 0x8000728c
    // This happens when the BIOS loads $t9 from offset 0x2c($sp)
    // We need to trace where this value gets written to the stack
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let stackWrites: Array<{instr: number, pc: number, addr: number, value: number}> = [];
    let foundBadWrite = false;
    
    console.log('\n=== Tracing stack writes to find corruption source ===\n');
    
    // Track memory writes to find when the bad value gets written
    sys.enableMemTrace({
      filter: (op, addr) => {
        // Track writes to the stack area around where bad value appears
        const p = addr & 0x1fffffff;
        return op.startsWith('w') && p >= 0x00007200 && p <= 0x00007300;
      },
      output: (line) => {
        // Parse the memory trace
        const match = line.match(/w32 ([0-9a-f]+) -> ([0-9a-f]+)/);
        if (match) {
          const addr = parseInt(match[1], 16);
          const value = parseInt(match[2], 16);
          
          stackWrites.push({
            instr: instructionCount,
            pc: sys.cpu.s.pc,
            addr,
            value
          });
          
          // Check if this is the bad value
          if (value === 0x64657472) {
            console.log(`\n!!! Found bad value write at instruction ${instructionCount} !!!`);
            console.log(`PC: 0x${sys.cpu.s.pc.toString(16)}`);
            console.log(`Writing 0x${value.toString(16)} to address 0x${addr.toString(16)}`);
            console.log(`ASCII: "${String.fromCharCode((value >> 24) & 0xFF, (value >> 16) & 0xFF, (value >> 8) & 0xFF, value & 0xFF)}"`);
            foundBadWrite = true;
            
            // Show recent stack writes
            console.log('\nRecent stack writes:');
            const recent = stackWrites.slice(-10);
            recent.forEach(w => {
              const ascii = String.fromCharCode((w.value >> 24) & 0xFF, (w.value >> 16) & 0xFF, (w.value >> 8) & 0xFF, w.value & 0xFF);
              console.log(`  [${w.instr}] 0x${w.addr.toString(16)} = 0x${w.value.toString(16)} ("${ascii}")`);
            });
          }
        }
      }
    });
    
    // Also enable CPU trace near the bad write
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // If we found the bad write, capture some context
        if (foundBadWrite && instructionCount < stackWrites[stackWrites.length - 1].instr + 20) {
          console.log(`[${instructionCount}] ${line.substring(0, 100)}`);
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      for (let i = 0; i < 950000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 100000 === 0 && instructionCount > 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Stop if we found where the bad value gets written
        if (foundBadWrite && instructionCount > stackWrites[stackWrites.length - 1].instr + 100) {
          console.log('\nFound the source of stack corruption');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Total stack writes tracked: ${stackWrites.length}`);
    console.log(`Found bad value write: ${foundBadWrite}`);
    
    if (!foundBadWrite && stackWrites.length > 0) {
      // Show what was written to the critical address
      const criticalWrites = stackWrites.filter(w => w.addr === 0x8000728c);
      if (criticalWrites.length > 0) {
        console.log(`\nWrites to critical address 0x8000728c:`);
        criticalWrites.forEach(w => {
          console.log(`  [${w.instr}] Value: 0x${w.value.toString(16)}`);
        });
      }
    }
    
    expect(instructionCount).toBeGreaterThan(100000);
  });
});
