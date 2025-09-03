import { describe, test } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Analyze second BIOS loop', () => {
  test('traces execution around 0xbfc00434', () => {
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
    let inSecondLoop = false;
    let loopStarted = 0;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Start detailed logging when we reach the second loop
        if (pc === 0xbfc00434 && !inSecondLoop && instrCount > 20000) {
          console.log('\\n=== Entering second loop at 0xbfc00434 ===');
          inSecondLoop = true;
          loopStarted = instrCount;
        }
        
        // Log the loop instructions in detail
        if (inSecondLoop && instrCount < loopStarted + 30) {
          // Parse registers
          const regStr = line.split('lo=')[1];
          if (regStr) {
            const t0Match = regStr.match(/t0=([0-9a-f]{8})/);
            const t1Match = regStr.match(/t1=([0-9a-f]{8})/);
            const v0Match = regStr.match(/v0=([0-9a-f]{8})/);
            const v1Match = regStr.match(/v1=([0-9a-f]{8})/);
            const a0Match = regStr.match(/a0=([0-9a-f]{8})/);
            const a1Match = regStr.match(/a1=([0-9a-f]{8})/);
            
            console.log(`[${instrCount}] PC=0x${pc.toString(16).padStart(8,'0')}`);
            if (t0Match) console.log(`  t0=0x${t0Match[1]}`);
            if (t1Match) console.log(`  t1=0x${t1Match[1]}`);
            if (v0Match) console.log(`  v0=0x${v0Match[1]}`);
            if (v1Match) console.log(`  v1=0x${v1Match[1]}`);
            if (a0Match) console.log(`  a0=0x${a0Match[1]}`);
            if (a1Match) console.log(`  a1=0x${a1Match[1]}`);
            
            // Decode instruction
            const instrMatch = line.match(/instr=([0-9a-f]{8})/);
            if (instrMatch) {
              const instr = parseInt(instrMatch[1], 16);
              console.log(`  instr=0x${instr.toString(16).padStart(8,'0')}`);
            }
          }
        }
        
        // Stop after analyzing the loop
        if (inSecondLoop && instrCount > loopStarted + 100) {
          throw new Error('Loop analysis complete');
        }
      }
    });
    
    // Also trace memory accesses during the second loop
    sys.enableMemTrace({
      filter: (op, addr) => {
        return inSecondLoop && instrCount < loopStarted + 30;
      },
      output: (line) => {
        console.log(`    MEM: ${line}`);
      }
    });
    
    console.log('Tracing BIOS execution to reach second loop...');
    console.log('First loop at 0xbfc003b8 clears memory (3160 iterations)');
    console.log('Looking for second loop at 0xbfc00434...');
    
    try {
      for (let i = 0; i < 50000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\\nAnalysis stopped: ${e.message}`);
    }
    
    console.log(`\\nTotal instructions: ${instrCount}`);
    
    // Disassemble the loop code
    console.log('\\n=== BIOS code at second loop location ===');
    const baseAddr = 0xbfc00434;
    for (let i = 0; i < 8; i++) {
      const addr = baseAddr + i * 4;
      const instr = sys.as.read32(addr);
      console.log(`0x${addr.toString(16)}: 0x${instr.toString(16).padStart(8,'0')}`);
    }
  });
});
