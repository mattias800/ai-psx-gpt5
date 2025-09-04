import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace bad pointer source', () => {
  test('find where 0x64657472 comes from', () => {
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
    const badValue = 0x64657472;
    let registerHistory: Array<{instr: number, pc: number, reg: number, value: number}> = [];
    let lastInstructions: Array<{pc: number, instr: number}> = [];
    
    console.log('\n=== Tracing source of bad pointer 0x64657472 ===\n');
    
    // Track CPU execution starting near the failure point
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Only start detailed tracking near the failure point
        if (instructionCount < 949400) return;
        
        // Parse the trace line to get PC and instruction
        const pcMatch = line.match(/pc=([0-9a-f]{8})/i);
        const instrMatch = line.match(/i=([0-9a-f]{8})/i);
        
        if (pcMatch && instrMatch) {
          const pc = parseInt(pcMatch[1], 16);
          const instr = parseInt(instrMatch[1], 16);
          
          // Track last 100 instructions
          lastInstructions.push({pc, instr});
          if (lastInstructions.length > 100) {
            lastInstructions.shift();
          }
          
          // Check if any register contains the bad value
          for (let i = 0; i < 32; i++) {
            if (sys.cpu.s.reg[i] === badValue) {
              // Found the bad value in a register
              registerHistory.push({
                instr: instructionCount,
                pc,
                reg: i,
                value: badValue
              });
              
              // First occurrence - trace where it came from
              if (registerHistory.length === 1) {
                console.log(`\n!!! Bad value first appears in $${i} at instruction ${instructionCount} !!!`);
                console.log(`PC: 0x${pc.toString(16)}`);
                console.log(`Current instruction: 0x${instr.toString(16)}`);
                
                // Decode the instruction to see what loaded this value
                const op = (instr >>> 26) & 0x3F;
                const rs = (instr >>> 21) & 0x1F;
                const rt = (instr >>> 16) & 0x1F;
                const imm = instr & 0xFFFF;
                
                if (op === 0x23) { // LW
                  const offset = (imm & 0x8000) ? (imm | 0xFFFF0000) : imm;
                  console.log(`Instruction: lw $${rt}, 0x${imm.toString(16)}($${rs})`);
                  console.log(`Base register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
                  const loadAddr = (sys.cpu.s.reg[rs] + offset) >>> 0;
                  console.log(`Load address: 0x${loadAddr.toString(16)}`);
                  
                  // Try to read what's at that address
                  try {
                    const valueAtAddr = sys.cpu.memory.read32(loadAddr);
                    console.log(`Value at address: 0x${valueAtAddr.toString(16)}`);
                  } catch (e) {
                    console.log(`Could not read from address`);
                  }
                } else if (op === 0x0F) { // LUI
                  console.log(`Instruction: lui $${rt}, 0x${imm.toString(16)}`);
                } else if (op === 0x09) { // ADDIU
                  console.log(`Instruction: addiu $${rt}, $${rs}, 0x${imm.toString(16)}`);
                } else if (op === 0) { // R-type
                  const funct = instr & 0x3F;
                  const rd = (instr >>> 11) & 0x1F;
                  console.log(`R-type instruction, funct=0x${funct.toString(16)}, rd=$${rd}`);
                }
                
                // Show recent instructions
                console.log('\nLast 10 instructions before bad value appeared:');
                const start = Math.max(0, lastInstructions.length - 11);
                const end = lastInstructions.length - 1;
                for (let j = start; j < end; j++) {
                  const li = lastInstructions[j];
                  console.log(`  [${j-start}] PC: 0x${li.pc.toString(16)}, Instr: 0x${li.instr.toString(16)}`);
                }
              }
            }
          }
        }
        
        // Stop if we're about to jump to the bad address
        if (sys.cpu.s.nextPc === badValue) {
          console.log(`\n!!! About to jump to bad address at instruction ${instructionCount} !!!`);
          console.log(`Current PC: 0x${sys.cpu.s.pc.toString(16)}`);
          console.log(`Next PC: 0x${sys.cpu.s.nextPc.toString(16)}`);
          
          // Find which register contains the bad value
          for (let i = 0; i < 32; i++) {
            if (sys.cpu.s.reg[i] === badValue) {
              console.log(`Register $${i} contains the bad value`);
              
              // Look back through history to find where this register got the value
              const history = registerHistory.filter(h => h.reg === i);
              if (history.length > 0) {
                console.log(`\nHistory of $${i} containing bad value:`);
                history.forEach(h => {
                  console.log(`  Instruction ${h.instr}: PC=0x${h.pc.toString(16)}`);
                });
              }
            }
          }
          
          throw new Error('Stopping before bad jump');
        }
      }
    });
    
    // Also track memory access near the failure point
    sys.enableMemTrace({
      filter: (op, addr) => {
        return instructionCount >= 949400 && instructionCount <= 949510;
      },
      output: (line) => {
        // Check if the bad value is being read or written
        if (line.includes('64657472')) {
          console.log(`[${instructionCount}] Memory access with bad value: ${line}`);
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
      }
    } catch (e: any) {
      console.log(`\nExecution stopped: ${e.message}`);
      
      if (registerHistory.length > 0) {
        console.log(`\nBad value appeared ${registerHistory.length} times in registers`);
        console.log('First appearance:');
        const first = registerHistory[0];
        console.log(`  Instruction ${first.instr}: $${first.reg} at PC=0x${first.pc.toString(16)}`);
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    expect(instructionCount).toBeGreaterThan(949400);
  });
});
