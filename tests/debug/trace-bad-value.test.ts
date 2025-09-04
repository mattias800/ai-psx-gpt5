import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace bad value', () => {
  test('find when 0x64657472 first appears', () => {
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
    const badValue = 0x64657472; // "detr" in ASCII
    let firstAppearance = -1;
    let badValueLocations: Array<{instr: number, pc: number, type: string, details: string}> = [];
    
    console.log('\n=== Tracing bad value 0x64657472 ("detr") ===\n');
    
    // Enable CPU trace to catch register changes
    sys.enableCpuTrace({
      output: (line) => {
        // Check if the bad value appears in any register
        for (let i = 0; i < 32; i++) {
          if (sys.cpu.s.reg[i] === badValue) {
            if (firstAppearance === -1) {
              firstAppearance = instructionCount;
              const pc = sys.cpu.s.pc;
              const instr = sys.memory.read32(pc);
              console.log(`\n!!! Bad value first appeared at instruction ${instructionCount} !!!`);
              console.log(`PC: 0x${pc.toString(16)}`);
              console.log(`Instruction: 0x${instr.toString(16)}`);
              console.log(`Register $${i} = 0x${badValue.toString(16)}`);
              console.log(`ASCII: "${String.fromCharCode((badValue >> 24) & 0xFF, (badValue >> 16) & 0xFF, (badValue >> 8) & 0xFF, badValue & 0xFF)}"`);
              
              // Decode the instruction
              const op = (instr >>> 26) & 0x3F;
              const rs = (instr >>> 21) & 0x1F;
              const rt = (instr >>> 16) & 0x1F;
              const rd = (instr >>> 11) & 0x1F;
              const funct = instr & 0x3F;
              
              if (op === 0x23) { // LW
                const offset = instr & 0xFFFF;
                const signedOffset = (offset & 0x8000) ? (offset | 0xFFFF0000) : offset;
                const addr = (sys.cpu.s.reg[rs] + signedOffset) >>> 0;
                console.log(`Decoded: lw $${rt}, 0x${offset.toString(16)}($${rs})`);
                console.log(`Load address: 0x${addr.toString(16)}`);
                console.log(`Base register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
                
                // Check what's at that address
                try {
                  const valueAtAddr = sys.memory.read32(addr);
                  console.log(`Value at address: 0x${valueAtAddr.toString(16)}`);
                } catch (e) {
                  console.log(`Could not read from address 0x${addr.toString(16)}`);
                }
              } else if (op === 0x0F) { // LUI
                const imm = instr & 0xFFFF;
                console.log(`Decoded: lui $${rt}, 0x${imm.toString(16)}`);
              } else if (op === 0) {
                console.log(`R-type instruction, funct: 0x${funct.toString(16)}`);
              }
              
              badValueLocations.push({
                instr: instructionCount,
                pc,
                type: 'register',
                details: `$${i}`
              });
            }
          }
        }
      }
    });
    
    // Also trace memory to see if the value is stored/loaded
    sys.enableMemTrace({
      filter: (op, addr) => {
        // Track all memory operations during suspicious window
        return instructionCount > 940000 && instructionCount < 950000;
      },
      output: (line) => {
        if (line.includes('64657472')) {
          console.log(`[${instructionCount}] Memory operation with bad value: ${line}`);
          badValueLocations.push({
            instr: instructionCount,
            pc: sys.cpu.s.pc,
            type: 'memory',
            details: line
          });
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      for (let i = 0; i < 1000000; i++) {
        sys.cpu.step();
        instructionCount++;
        
        if (instructionCount % 100000 === 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Stop if we found the bad value
        if (firstAppearance > 0 && instructionCount > firstAppearance + 100) {
          console.log('\nStopping after finding bad value');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
      
      if (e.message.includes('Unmapped address')) {
        const addrMatch = e.message.match(/\d+/);
        if (addrMatch) {
          const addr = parseInt(addrMatch[0]);
          if (addr === badValue) {
            console.log('Error is trying to execute from the bad address!');
            console.log(`PC: 0x${sys.cpu.s.pc.toString(16)}`);
            console.log(`NextPC: 0x${sys.cpu.s.nextPc.toString(16)}`);
            
            // Check registers
            for (let i = 0; i < 32; i++) {
              if (sys.cpu.s.reg[i] === badValue) {
                console.log(`Register $${i} contains bad value`);
              }
            }
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Bad value first appeared at instruction: ${firstAppearance}`);
    
    if (badValueLocations.length > 0) {
      console.log('\nBad value occurrences:');
      badValueLocations.forEach(loc => {
        console.log(`  [${loc.instr}] PC: 0x${loc.pc.toString(16)}, ${loc.type}: ${loc.details}`);
      });
    }
    
    expect(instructionCount).toBeGreaterThan(100000);
  });
});
