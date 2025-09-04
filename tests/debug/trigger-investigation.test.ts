import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trigger investigation', () => {
  test('find what triggers error message building', () => {
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
    let ioOps: Array<{instr: number, device: string, op: string, addr: number, value?: number}> = [];
    let branches: Array<{instr: number, pc: number, taken: boolean, target: number}> = [];
    
    console.log('\n=== Investigating trigger for error message ===\n');
    
    // Track I/O operations before the error
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        return instructionCount >= 59700 && instructionCount <= 59900 &&
               p >= 0x1f801000 && p <= 0x1f801fff;
      },
      output: (line) => {
        const match = line.match(/([rw]\d+) ([0-9a-f]+)(?: -> ([0-9a-f]+))?/);
        if (match) {
          const op = match[1];
          const addr = parseInt(match[2], 16);
          const value = match[3] ? parseInt(match[3], 16) : undefined;
          
          const p = addr & 0x1fffffff;
          let device = 'Unknown';
          
          if (p >= 0x1f801040 && p <= 0x1f80104f) device = 'SIO0';
          else if (p >= 0x1f801050 && p <= 0x1f80105f) device = 'SIO1';
          else if (p >= 0x1f801070 && p <= 0x1f801077) device = 'INTC';
          else if (p >= 0x1f801080 && p <= 0x1f8010ff) device = 'DMA';
          else if (p >= 0x1f801100 && p <= 0x1f80112f) device = 'Timers';
          else if (p >= 0x1f801800 && p <= 0x1f801803) device = 'CD-ROM';
          else if (p >= 0x1f801810 && p <= 0x1f801817) device = 'GPU';
          else if (p >= 0x1f801c00 && p <= 0x1f801dff) device = 'SPU';
          
          ioOps.push({
            instr: instructionCount,
            device,
            op,
            addr,
            value
          });
          
          console.log(`[${instructionCount}] ${device} ${op} 0x${addr.toString(16)}${value !== undefined ? ` = 0x${value.toString(16)}` : ''}`);
        }
      }
    });
    
    // Track CPU execution focusing on control flow
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Focus on the range right before error message building
        if (instructionCount >= 59800 && instructionCount <= 59880) {
          const pcMatch = line.match(/pc=([0-9a-f]{8})/i);
          const instrMatch = line.match(/i(?:nstr)?=([0-9a-f]{8})/i);
          
          if (pcMatch && instrMatch) {
            const pc = parseInt(pcMatch[1], 16);
            const instr = parseInt(instrMatch[1], 16);
            const op = (instr >>> 26) & 0x3F;
            
            // Track branches
            if (op >= 0x04 && op <= 0x07) { // BEQ, BNE, BLEZ, BGTZ
              const rs = (instr >>> 21) & 0x1F;
              const rt = (instr >>> 16) & 0x1F;
              const imm = instr & 0xFFFF;
              const offset = (imm & 0x8000) ? (imm | 0xFFFF0000) : imm;
              const target = (pc + 4 + (offset << 2)) >>> 0;
              
              // Check if branch was taken by looking at next PC
              const nextPcMatch = line.match(/nextpc=([0-9a-f]{8})/i);
              const taken = nextPcMatch ? (parseInt(nextPcMatch[1], 16) === target) : false;
              
              branches.push({
                instr: instructionCount,
                pc,
                taken,
                target
              });
              
              // Decode branch type
              let branchType = '';
              if (op === 0x04) branchType = 'BEQ';
              else if (op === 0x05) branchType = 'BNE';
              else if (op === 0x06) branchType = 'BLEZ';
              else if (op === 0x07) branchType = 'BGTZ';
              
              console.log(`[${instructionCount}] ${branchType} at 0x${pc.toString(16)} to 0x${target.toString(16)}: ${taken ? 'TAKEN' : 'NOT TAKEN'}`);
              
              // Get register values for branch condition
              if (op === 0x04 || op === 0x05) { // BEQ/BNE
                const regNames = ['zero','at','v0','v1','a0','a1','a2','a3',
                                 't0','t1','t2','t3','t4','t5','t6','t7',
                                 's0','s1','s2','s3','s4','s5','s6','s7',
                                 't8','t9','k0','k1','gp','sp','fp','ra'];
                const rsName = regNames[rs];
                const rtName = regNames[rt];
                const rsMatch = line.match(new RegExp(`${rsName}=([0-9a-f]{8})`, 'i'));
                const rtMatch = line.match(new RegExp(`${rtName}=([0-9a-f]{8})`, 'i'));
                
                if (rsMatch && rtMatch) {
                  const rsVal = parseInt(rsMatch[1], 16);
                  const rtVal = parseInt(rtMatch[1], 16);
                  console.log(`    $${rs}(${rsName})=0x${rsVal.toString(16)}, $${rt}(${rtName})=0x${rtVal.toString(16)}`);
                }
              }
            }
            
            // Check for specific PCs
            if (pc === 0xbfc00434) {
              console.log(`[${instructionCount}] At memcpy function 0xbfc00434`);
            }
            
            // Track system calls
            if (op === 0x00 && (instr & 0x3F) === 0x0C) { // SYSCALL
              console.log(`[${instructionCount}] SYSCALL at PC 0x${pc.toString(16)}`);
            }
          }
        }
        
        // Check if we're at the point where string writing starts
        if (instructionCount === 59823) {
          console.log('\n!!! String writing is about to start !!!');
          console.log('Recent branches:');
          branches.slice(-5).forEach(b => {
            console.log(`  [${b.instr}] PC: 0x${b.pc.toString(16)} -> 0x${b.target.toString(16)}: ${b.taken ? 'TAKEN' : 'NOT TAKEN'}`);
          });
          
          console.log('\nRecent I/O operations:');
          ioOps.slice(-10).forEach(io => {
            console.log(`  [${io.instr}] ${io.device} ${io.op} 0x${io.addr.toString(16)}${io.value !== undefined ? ` = 0x${io.value.toString(16)}` : ''}`);
          });
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      // Run until just after string writing starts
      for (let i = 0; i < 60000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 10000 === 0 && instructionCount > 0 && instructionCount < 59000) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        if (instructionCount > 59900) {
          console.log('\nStopping after error trigger point');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
    }
    
    console.log(`\n=== Analysis ===`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`I/O operations tracked: ${ioOps.length}`);
    console.log(`Branches tracked: ${branches.length}`);
    
    // Analyze branch patterns
    if (branches.length > 0) {
      const takenCount = branches.filter(b => b.taken).length;
      console.log(`\nBranch statistics:`);
      console.log(`  Taken: ${takenCount}/${branches.length}`);
      
      // Look for error condition checks
      const errorBranches = branches.filter(b => b.taken && b.instr > 59810 && b.instr < 59823);
      if (errorBranches.length > 0) {
        console.log(`\nPotential error detection branches:`);
        errorBranches.forEach(b => {
          console.log(`  [${b.instr}] PC: 0x${b.pc.toString(16)} -> 0x${b.target.toString(16)}`);
        });
      }
    }
    
    expect(instructionCount).toBeGreaterThan(59800);
  });
});
