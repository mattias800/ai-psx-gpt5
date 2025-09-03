import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace bad A0 call', () => {
  test('find who calls A0 with index 0x970', () => {
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
    let lastT1Value = 0;
    let afterA097 = false;
    const callStack: Array<{pc: number, ra: number}> = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Track calls (JAL instructions)
        const instrMatch = line.match(/instr=([0-9a-f]{8})/);
        if (instrMatch) {
          const instr = parseInt(instrMatch[1], 16);
          const op = instr >>> 26;
          
          // Track JAL and JALR
          if (op === 0x03) { // JAL
            const raMatch = line.match(/ra=([0-9a-f]{8})/);
            if (raMatch) {
              const ra = parseInt(raMatch[1], 16);
              callStack.push({pc: currentPC, ra});
              if (callStack.length > 10) callStack.shift();
            }
          }
        }
        
        // Track t1 register changes
        const t1Match = line.match(/t1=([0-9a-f]{8})/);
        if (t1Match) {
          const t1 = parseInt(t1Match[1], 16);
          if (t1 !== lastT1Value) {
            // Check if t1 is being set to a suspiciously large value
            if (t1 > 0x100 && t1 < 0x10000) {
              console.log(`${instrCount}: t1 set to 0x${t1.toString(16)} at PC=0x${currentPC.toString(16)}`);
              
              // If this is close to the bad value
              if (t1 >= 0x25c0 && t1 <= 0x2600) {
                console.log(`  >>> Suspicious t1 value! This will cause A0 table overflow`);
                
                // Show call stack
                console.log(`  Call stack:`);
                for (const frame of callStack) {
                  console.log(`    PC=0x${frame.pc.toString(16)} RA=0x${frame.ra.toString(16)}`);
                }
              }
            }
            lastT1Value = t1;
          }
        }
        
        // Track when we're about to jump to A0
        if (currentPC === 0xa0) {
          console.log(`${instrCount}: About to call A0, PC=0x${currentPC.toString(16)}`);
          
          // Show registers
          const regStr = line.split('lo=')[1];
          if (regStr) {
            const t1Match = regStr.match(/t1=([0-9a-f]{8})/);
            const t9Match = regStr.match(/t9=([0-9a-f]{8})/);
            const a0Match = regStr.match(/a0=([0-9a-f]{8})/);
            const raMatch = regStr.match(/ra=([0-9a-f]{8})/);
            
            if (t1Match) {
              const t1 = parseInt(t1Match[1], 16);
              console.log(`  t1 = 0x${t1.toString(16)} (A0 function index)`);
              
              // Check if this is A0:97
              if (t1 === 0x97) {
                console.log(`  >>> This is A0:97 call!`);
                afterA097 = true;
              }
              
              // Decode what A0 function this would be
              if (t1 === 0x970 || t1 === 0x25c0) {
                console.log(`  !!! Invalid A0 function index!`);
              }
            }
            if (t9Match) console.log(`  t9 = 0x${t9Match[1]}`);
            if (a0Match) console.log(`  a0 = 0x${a0Match[1]}`);
            if (raMatch) console.log(`  ra = 0x${raMatch[1]} (return address)`);
          }
        }
        
        // After A0:97 call, trace next instructions in detail
        if (afterA097 && instrCount > 89044 && instrCount < 89200) {
          console.log(`  ${instrCount}: PC=0x${currentPC.toString(16).padStart(8,'0')} ${line}`);
        }
      }
    });
    
    // Run until crash
    console.log(`Running to find bad A0 call...`);
    console.log('');
    
    try {
      for (let i = 0; i < 90000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\n=== Execution stopped at instruction ${instrCount} ===`);
      console.log(`Error: ${e.message}`);
      
      // Check final t1 value
      console.log(`\nFinal t1 value was: 0x${lastT1Value.toString(16)}`);
      console.log(`This would access A0 table at: 0x${(0x200 + (lastT1Value << 2)).toString(16)}`);
    }
    
    expect(instrCount).toBeGreaterThan(89000);
  });
});
