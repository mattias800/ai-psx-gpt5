import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Capture invalid jump instruction', () => {
  test('find the exact instruction causing jump to 0x64657472', () => {
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
    const targetInvalidAddr = 0x64657472;
    let recentInstructions: Array<{pc: number, instr: number, regs: number[]}> = [];
    
    console.log('\n=== Capturing invalid jump instruction ===\n');
    
    // Hook into CPU execution before each step
    const originalStep = sys.cpu.step.bind(sys.cpu);
    
    sys.cpu.step = function() {
      const pc = this.s.pc;
      const nextPc = this.s.nextPc;
      instructionCount++;
      
      // Save state before execution
      const instr = sys.memory ? sys.memory.read32(pc) : 0;
      const regSnapshot = [...this.s.reg];
      
      // Track recent instructions
      recentInstructions.push({pc, instr, regs: regSnapshot});
      if (recentInstructions.length > 50) {
        recentInstructions.shift();
      }
      
      // Check if we're about to execute from invalid address
      if (pc === targetInvalidAddr || (pc & 0xFF000000) === 0x64000000) {
        console.log(`\n!!! About to execute from invalid address !!!`);
        console.log(`Instruction count: ${instructionCount}`);
        console.log(`Current PC: 0x${pc.toString(16)}`);
        console.log(`Next PC: 0x${nextPc.toString(16)}`);
        
        console.log('\n=== Previous instruction that jumped here ===');
        if (recentInstructions.length >= 2) {
          const prev = recentInstructions[recentInstructions.length - 2];
          console.log(`PC: 0x${prev.pc.toString(16)}`);
          console.log(`Instruction: 0x${prev.instr.toString(16)}`);
          
          // Decode the previous instruction
          const opcode = (prev.instr >>> 26) & 0x3F;
          const rs = (prev.instr >>> 21) & 0x1F;
          const rt = (prev.instr >>> 16) & 0x1F;
          const rd = (prev.instr >>> 11) & 0x1F;
          const funct = prev.instr & 0x3F;
          
          if (opcode === 0) {
            if (funct === 0x08) {
              console.log(`Decoded: jr $${rs}`);
              console.log(`Register $${rs} was: 0x${prev.regs[rs].toString(16)}`);
            } else if (funct === 0x09) {
              console.log(`Decoded: jalr $${rs}`);
              console.log(`Register $${rs} was: 0x${prev.regs[rs].toString(16)}`);
            }
          } else if (opcode === 2) {
            const target = ((prev.pc & 0xF0000000) | ((prev.instr & 0x03FFFFFF) << 2)) >>> 0;
            console.log(`Decoded: j 0x${target.toString(16)}`);
          } else if (opcode === 3) {
            const target = ((prev.pc & 0xF0000000) | ((prev.instr & 0x03FFFFFF) << 2)) >>> 0;
            console.log(`Decoded: jal 0x${target.toString(16)}`);
          }
        }
        
        console.log('\n=== Last 20 instructions before invalid jump ===');
        recentInstructions.slice(-20).forEach((entry, idx) => {
          console.log(`[${idx}] PC: 0x${entry.pc.toString(16)}, Instr: 0x${entry.instr.toString(16)}`);
        });
        
        throw new Error('Invalid PC detected');
      }
      
      // Execute the instruction
      try {
        originalStep.call(this);
      } catch (e: any) {
        // Check if this is the unmapped address error we're looking for
        if (e.message.includes('Unmapped address')) {
          const addrMatch = e.message.match(/Unmapped address (\d+)/);
          if (addrMatch) {
            const addr = parseInt(addrMatch[1]);
            if (addr === targetInvalidAddr || (addr & 0xFF000000) === 0x64000000) {
              console.log(`\n!!! Caught unmapped address access at instruction ${instructionCount} !!!`);
              console.log(`Error: ${e.message}`);
              console.log(`Address: 0x${addr.toString(16)} (decimal: ${addr})`);
              console.log(`ASCII interpretation: "${String.fromCharCode((addr >> 24) & 0xFF, (addr >> 16) & 0xFF, (addr >> 8) & 0xFF, addr & 0xFF)}"`);
              
              console.log('\n=== Current state when error occurred ===');
              console.log(`PC: 0x${this.s.pc.toString(16)}`);
              console.log(`NextPC: 0x${this.s.nextPc.toString(16)}`);
              
              console.log('\n=== Last instruction executed ===');
              const lastInstr = recentInstructions[recentInstructions.length - 1];
              if (lastInstr) {
                console.log(`PC: 0x${lastInstr.pc.toString(16)}`);
                console.log(`Instruction: 0x${lastInstr.instr.toString(16)}`);
                
                // Decode it
                const opcode = (lastInstr.instr >>> 26) & 0x3F;
                const rs = (lastInstr.instr >>> 21) & 0x1F;
                const funct = lastInstr.instr & 0x3F;
                
                if (opcode === 0 && (funct === 0x08 || funct === 0x09)) {
                  console.log(`This was a register jump: ${funct === 0x08 ? 'jr' : 'jalr'} $${rs}`);
                  console.log(`Register $${rs} contained: 0x${lastInstr.regs[rs].toString(16)}`);
                  
                  // Trace back where this register got its value
                  console.log(`\nSearching for where $${rs} got value 0x${targetInvalidAddr.toString(16)}...`);
                  for (let i = recentInstructions.length - 2; i >= 0; i--) {
                    const entry = recentInstructions[i];
                    const instr = entry.instr;
                    const op = (instr >>> 26) & 0x3F;
                    const destReg = (op === 0) ? ((instr >>> 11) & 0x1F) : ((instr >>> 16) & 0x1F);
                    
                    // Check if this instruction writes to our register
                    if (destReg === rs) {
                      console.log(`Found at PC 0x${entry.pc.toString(16)}: instruction 0x${instr.toString(16)}`);
                      
                      // Try to decode what this instruction does
                      if (op === 0x0F) { // LUI
                        const imm = instr & 0xFFFF;
                        console.log(`  LUI $${destReg}, 0x${imm.toString(16)}`);
                      } else if (op === 0x23) { // LW
                        const base = (instr >>> 21) & 0x1F;
                        const offset = instr & 0xFFFF;
                        console.log(`  LW $${destReg}, 0x${offset.toString(16)}($${base})`);
                        console.log(`  Base register $${base} was: 0x${entry.regs[base].toString(16)}`);
                        const effectiveAddr = (entry.regs[base] + (offset & 0x8000 ? offset | 0xFFFF0000 : offset)) >>> 0;
                        console.log(`  Effective address: 0x${effectiveAddr.toString(16)}`);
                      }
                      break;
                    }
                  }
                }
              }
              
              console.log('\n=== Last 30 instructions ===');
              recentInstructions.slice(-30).forEach((entry, idx) => {
                const op = (entry.instr >>> 26) & 0x3F;
                const funct = entry.instr & 0x3F;
                let desc = '';
                if (op === 0 && funct === 0x08) desc = ' (jr)';
                if (op === 0 && funct === 0x09) desc = ' (jalr)';
                if (op === 2) desc = ' (j)';
                if (op === 3) desc = ' (jal)';
                if (op === 0x23) desc = ' (lw)';
                if (op === 0x0F) desc = ' (lui)';
                console.log(`[${idx}] PC: 0x${entry.pc.toString(16)}, Instr: 0x${entry.instr.toString(16)}${desc}`);
              });
            }
          }
        }
        throw e;
      }
      
      // Check if nextPc is about to become invalid
      if (this.s.nextPc === targetInvalidAddr || (this.s.nextPc & 0xFF000000) === 0x64000000) {
        console.log(`\n!!! NextPC is about to become invalid after instruction ${instructionCount} !!!`);
        console.log(`Just executed at PC: 0x${pc.toString(16)}`);
        console.log(`Instruction: 0x${instr.toString(16)}`);
        console.log(`NextPC is now: 0x${this.s.nextPc.toString(16)}`);
        
        // This means the current instruction set nextPc to the bad value
        const opcode = (instr >>> 26) & 0x3F;
        const rs = (instr >>> 21) & 0x1F;
        const funct = instr & 0x3F;
        
        if (opcode === 0 && (funct === 0x08 || funct === 0x09)) {
          console.log(`This was a register jump: ${funct === 0x08 ? 'jr' : 'jalr'} $${rs}`);
          console.log(`Register $${rs} contains: 0x${this.s.reg[rs].toString(16)}`);
        }
      }
      
      if (instructionCount % 100000 === 0) {
        console.log(`Progress: ${instructionCount} instructions...`);
      }
    };
    
    try {
      // Run until we hit the problem
      for (let i = 0; i < 1000000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\nExecution stopped: ${e.message}`);
      console.log(`Total instructions: ${instructionCount}`);
    }
    
    expect(instructionCount).toBeGreaterThan(100000);
  });
});
