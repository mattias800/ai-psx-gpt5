import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace invalid jump to ASCII address', () => {
  test('find where BIOS jumps to 0x64657472', () => {
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
    
    let instrCount = 0;
    let lastValidPC = 0;
    let jumpHistory: Array<{from: number, to: number, instr: number, count: number}> = [];
    const invalidAddr = 0x64657472;
    
    // Track CPU execution with detailed logging
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        const instr = parseInt(parts[1].split('=')[1], 16);
        
        // Track jumps and branches
        const opcode = (instr >>> 26) & 0x3f;
        const isJump = opcode === 2 || opcode === 3; // j, jal
        const isBranch = opcode === 4 || opcode === 5 || opcode === 6 || opcode === 7; // beq, bne, blez, bgtz
        const isJR = opcode === 0 && ((instr & 0x3f) === 8); // jr
        const isJALR = opcode === 0 && ((instr & 0x3f) === 9); // jalr
        
        if (isJump || isBranch || isJR || isJALR) {
          let target = 0;
          
          if (isJump) {
            // J/JAL: target = (PC & 0xf0000000) | (instr & 0x3ffffff) << 2
            target = ((pc + 4) & 0xf0000000) | ((instr & 0x3ffffff) << 2);
          } else if (isJR || isJALR) {
            // JR/JALR: target is in register
            const rs = (instr >>> 21) & 0x1f;
            // We'd need register values here, which we can get from the trace
            const regMatch = line.match(new RegExp(`r${rs.toString().padStart(2, '0')}=([0-9a-f]{8})`));
            if (regMatch) {
              target = parseInt(regMatch[1], 16);
            }
          } else if (isBranch) {
            // Branch: target = PC + 4 + (sign_extend(imm) << 2)
            const imm = (instr & 0xffff);
            const offset = (imm & 0x8000) ? (imm | 0xffff0000) : imm;
            target = (pc + 4 + (offset << 2)) >>> 0;
          }
          
          if (target !== 0) {
            jumpHistory.push({ from: pc, to: target, instr, count: instrCount });
            
            // Keep only last 100 jumps
            if (jumpHistory.length > 100) {
              jumpHistory = jumpHistory.slice(-100);
            }
          }
        }
        
        // Check if we're about to jump to the invalid address
        if (pc === invalidAddr || sys.cpu.s.nextPc === invalidAddr) {
          console.log(`\n!!! Invalid address detected at instruction ${instrCount} !!!`);
          console.log(`Current PC: 0x${pc.toString(16).padStart(8, '0')}`);
          console.log(`Next PC: 0x${sys.cpu.s.nextPc.toString(16).padStart(8, '0')}`);
          console.log(`Last valid PC: 0x${lastValidPC.toString(16).padStart(8, '0')}`);
          console.log(`Current instruction: 0x${instr.toString(16).padStart(8, '0')}`);
          
          // Decode the instruction
          const op = (instr >>> 26) & 0x3f;
          console.log(`Opcode: ${op} (0x${op.toString(16)})`);
          
          console.log('\n=== Last 20 jumps/branches ===');
          for (const jump of jumpHistory.slice(-20)) {
            const instrStr = jump.instr.toString(16).padStart(8, '0');
            console.log(`  [${jump.count}] 0x${jump.from.toString(16).padStart(8, '0')} -> 0x${jump.to.toString(16).padStart(8, '0')} (instr: 0x${instrStr})`);
          }
          
          // Stop execution
          throw new Error('Invalid jump detected');
        }
        
        // Track last known good PC
        if (pc >= 0x80000000 || (pc >= 0x00000000 && pc < 0x00800000) || (pc >= 0xbfc00000 && pc <= 0xbfc80000)) {
          lastValidPC = pc;
        }
      }
    });
    
    // Also track memory access to see if something is corrupting jump targets
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        // Track writes to low memory where code might be
        return op.startsWith('w') && p >= 0x00000000 && p < 0x00010000;
      },
      output: (line) => {
        // Log writes to low memory
        if (instrCount > 940000 && instrCount < 960000) {
          console.log(`[${instrCount}] MEM: ${line}`);
        }
      }
    });
    
    console.log('\n=== Starting BIOS trace to find invalid jump ===\n');
    
    try {
      // Run until we hit the invalid address or 1M instructions
      for (let i = 0; i < 1000000; i++) {
        sys.cpu.step();
        
        // Progress indicator
        if ((i + 1) % 100000 === 0) {
          console.log(`Progress: ${i + 1} instructions...`);
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped: ${e.message}`);
      console.log(`Total instructions executed: ${instrCount}`);
    }
    
    // The test should have caught the invalid jump
    expect(instrCount).toBeLessThan(1000000);
  });
});
