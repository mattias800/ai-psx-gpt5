import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Debug stuck loop at 0x27bdffe0', () => {
  test('investigate why BIOS gets stuck', () => {
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
    let currentPC = 0;
    let stuckCount = 0;
    let lastPC = 0;
    const visitedPCs = new Map<number, number>();
    let reachedStuckPoint = false;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Track PC visits
        visitedPCs.set(currentPC, (visitedPCs.get(currentPC) || 0) + 1);
        
        // Check if we're stuck
        if (currentPC === lastPC) {
          stuckCount++;
        } else {
          if (stuckCount > 100) {
            console.log(`Was stuck at PC=0x${lastPC.toString(16)} for ${stuckCount} instructions`);
          }
          stuckCount = 0;
        }
        lastPC = currentPC;
        
        // Log when we reach the problematic address
        if ((currentPC & 0x0fffffff) === 0x07bdffe0) {
          if (!reachedStuckPoint) {
            reachedStuckPoint = true;
            console.log(`\n=== Reached 0x27bdffe0 at instruction ${instrCount} ===`);
            
            // Parse and display the instruction
            const instrMatch = line.match(/instr=([0-9a-f]{8})/);
            if (instrMatch) {
              const instr = parseInt(instrMatch[1], 16);
              console.log(`Instruction: 0x${instr.toString(16).padStart(8, '0')}`);
              
              // Decode instruction
              const op = instr >>> 26;
              const rs = (instr >>> 21) & 0x1f;
              const rt = (instr >>> 16) & 0x1f;
              const imm = instr & 0xffff;
              
              if (op === 0x09) { // ADDIU
                console.log(`  ADDIU r${rt}, r${rs}, 0x${imm.toString(16)}`);
              } else if (op === 0x08) { // ADDI
                console.log(`  ADDI r${rt}, r${rs}, 0x${imm.toString(16)}`);
              } else if (op === 0x00) { // R-type
                const funct = instr & 0x3f;
                const rd = (instr >>> 11) & 0x1f;
                if (funct === 0x20) console.log(`  ADD r${rd}, r${rs}, r${rt}`);
                else if (funct === 0x21) console.log(`  ADDU r${rd}, r${rs}, r${rt}`);
                else console.log(`  R-type funct=0x${funct.toString(16)}`);
              } else {
                console.log(`  Opcode: 0x${op.toString(16)}`);
              }
            }
            
            // Show register state
            const regStr = line.split('lo=')[1];
            if (regStr) {
              console.log('\nRegister state:');
              const spMatch = regStr.match(/sp=([0-9a-f]{8})/);
              const raMatch = regStr.match(/ra=([0-9a-f]{8})/);
              const a0Match = regStr.match(/a0=([0-9a-f]{8})/);
              const v0Match = regStr.match(/v0=([0-9a-f]{8})/);
              
              if (spMatch) console.log(`  sp = 0x${spMatch[1]}`);
              if (raMatch) console.log(`  ra = 0x${raMatch[1]}`);
              if (a0Match) console.log(`  a0 = 0x${a0Match[1]}`);
              if (v0Match) console.log(`  v0 = 0x${v0Match[1]}`);
            }
          }
        }
        
        // Log progress
        if (instrCount % 50000 === 0) {
          console.log(`Progress: ${instrCount} instructions, PC=0x${currentPC.toString(16)}`);
        }
      }
    });
    
    // Run until we get stuck or reach limit
    const maxSteps = 200000;
    console.log(`Running up to ${maxSteps} instructions to find stuck point...`);
    console.log('');
    
    try {
      for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
        sys.cpu.step();
        
        // Break if stuck for too long
        if (stuckCount > 10000) {
          console.log(`\n=== Stuck detected at PC=0x${currentPC.toString(16)} ===`);
          break;
        }
      }
    } catch (e) {
      console.log(`\nExecution stopped at instruction ${instrCount}: ${e}`);
    }
    
    console.log(`\n=== Execution Summary ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Final PC: 0x${currentPC.toString(16)}`);
    
    // Find hot spots (most visited PCs)
    const hotspots = Array.from(visitedPCs.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    console.log(`\nTop 10 most visited PCs:`);
    for (const [pc, count] of hotspots) {
      console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times`);
      
      // Check what's at these addresses
      if ((pc & 0xf0000000) === 0x00000000 || (pc & 0xf0000000) === 0x80000000) {
        // It's in RAM, try to read the instruction
        try {
          const physAddr = pc & 0x1fffffff;
          const instr = sys.ram.read32(physAddr);
          console.log(`    Instruction: 0x${instr.toString(16).padStart(8, '0')}`);
        } catch (e) {
          // Ignore read errors
        }
      }
    }
    
    // Check if it's actually stuck
    expect(stuckCount).toBeLessThan(10000);
  });
});
