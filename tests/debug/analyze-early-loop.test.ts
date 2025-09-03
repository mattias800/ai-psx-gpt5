import { describe, test } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Analyze early BIOS loop', () => {
  test('traces execution around 0xbfc003b8', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Connect controller and memory card
    sys.setPadButtons(0xFFFF);
    sys.setMemcardPresent(true);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let inLoop = false;
    let loopStarted = 0;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Start detailed logging when we approach the loop
        if (pc === 0xbfc003b8 && !inLoop) {
          console.log('\\n=== Entering loop at 0xbfc003b8 ===');
          inLoop = true;
          loopStarted = instrCount;
        }
        
        // Log the loop instructions in detail
        if (inLoop && instrCount < loopStarted + 20) {
          // Parse registers
          const regStr = line.split('lo=')[1];
          if (regStr) {
            const t0Match = regStr.match(/t0=([0-9a-f]{8})/);
            const t1Match = regStr.match(/t1=([0-9a-f]{8})/);
            const t2Match = regStr.match(/t2=([0-9a-f]{8})/);
            const v0Match = regStr.match(/v0=([0-9a-f]{8})/);
            const v1Match = regStr.match(/v1=([0-9a-f]{8})/);
            const a0Match = regStr.match(/a0=([0-9a-f]{8})/);
            
            console.log(`[${instrCount}] PC=0x${pc.toString(16).padStart(8,'0')}`);
            if (t0Match) console.log(`  t0=0x${t0Match[1]}`);
            if (t1Match) console.log(`  t1=0x${t1Match[1]}`);
            if (t2Match) console.log(`  t2=0x${t2Match[1]}`);
            if (v0Match) console.log(`  v0=0x${v0Match[1]}`);
            if (v1Match) console.log(`  v1=0x${v1Match[1]}`);
            if (a0Match) console.log(`  a0=0x${a0Match[1]}`);
            
            // Decode instruction
            const instrMatch = line.match(/instr=([0-9a-f]{8})/);
            if (instrMatch) {
              const instr = parseInt(instrMatch[1], 16);
              const op = instr >>> 26;
              const rs = (instr >>> 21) & 0x1f;
              const rt = (instr >>> 16) & 0x1f;
              const imm = instr & 0xffff;
              
              // Decode common instructions
              if (op === 0x23) { // LW
                console.log(`  -> LW $${rt}, 0x${imm.toString(16)}($${rs})`);
              } else if (op === 0x04) { // BEQ
                console.log(`  -> BEQ $${rs}, $${rt}, 0x${imm.toString(16)}`);
              } else if (op === 0x05) { // BNE
                console.log(`  -> BNE $${rs}, $${rt}, 0x${imm.toString(16)}`);
              } else if (op === 0x08) { // ADDI
                console.log(`  -> ADDI $${rt}, $${rs}, 0x${imm.toString(16)}`);
              } else if (op === 0x0c) { // ANDI
                console.log(`  -> ANDI $${rt}, $${rs}, 0x${imm.toString(16)}`);
              } else if (instr === 0) {
                console.log(`  -> NOP`);
              } else {
                console.log(`  -> instr=0x${instr.toString(16).padStart(8,'0')}`);
              }
            }
          }
        }
        
        // Stop after a few loop iterations
        if (inLoop && instrCount > loopStarted + 50) {
          throw new Error('Loop analysis complete');
        }
      }
    });
    
    // Also trace memory accesses during the loop
    sys.enableMemTrace({
      filter: (op, addr) => {
        return inLoop && instrCount < loopStarted + 20;
      },
      output: (line) => {
        console.log(`    MEM: ${line}`);
      }
    });
    
    console.log('Tracing BIOS execution to analyze loop...');
    
    try {
      for (let i = 0; i < 10000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\\nAnalysis stopped: ${e.message}`);
    }
    
    console.log(`\\nTotal instructions: ${instrCount}`);
    
    // Now let's look at the BIOS code at 0xbfc003b8
    console.log('\\n=== BIOS code at loop location ===');
    const baseAddr = 0xbfc003b8;
    for (let i = 0; i < 10; i++) {
      const addr = baseAddr + i * 4;
      const instr = sys.as.read32(addr);
      console.log(`0x${addr.toString(16)}: 0x${instr.toString(16).padStart(8,'0')}`);
      
      // Basic disassembly
      const op = instr >>> 26;
      if (op === 0x23) { // LW
        const rs = (instr >>> 21) & 0x1f;
        const rt = (instr >>> 16) & 0x1f;
        const imm = instr & 0xffff;
        const signExt = (imm & 0x8000) ? (imm | 0xffff0000) : imm;
        console.log(`        LW $${rt}, 0x${signExt.toString(16)}($${rs})`);
      } else if (op === 0x04 || op === 0x05) { // BEQ/BNE
        const rs = (instr >>> 21) & 0x1f;
        const rt = (instr >>> 16) & 0x1f;
        const imm = instr & 0xffff;
        const signExt = (imm & 0x8000) ? (imm | 0xffff0000) : imm;
        const target = addr + 4 + (signExt << 2);
        console.log(`        ${op === 0x04 ? 'BEQ' : 'BNE'} $${rs}, $${rt}, 0x${target.toString(16)}`);
      }
    }
  });
});
