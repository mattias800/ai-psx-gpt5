import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Test A0:99 function pointer fix', () => {
  test('verifies A0:99 is properly restored after BIOS clears it', () => {
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
    let divergenceFound = false;
    
    // Track A0:99 value changes
    const a099History: Array<{ instr: number; value: number }> = [];
    let lastA099Value = -1;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Check A0:99 value periodically
        if (instrCount % 1000 === 0 || 
            (instrCount >= 78000 && instrCount <= 88000) ||
            (instrCount >= 45000 && instrCount <= 46000)) {
          const a099Val = sys.ram.read32(0x00000464);
          if (a099Val !== lastA099Value) {
            lastA099Value = a099Val;
            a099History.push({ instr: instrCount, value: a099Val });
            console.log(`A0:99 changed at instr ${instrCount}: 0x${a099Val.toString(16).padStart(8, '0')}`);
          }
        }
        
        // Check if we reach the problematic instruction 87005
        if (instrCount === 87005) {
          console.log(`\nInstruction 87005 reached at PC=0x${currentPC.toString(16)}`);
          
          // Check register state
          const regStr = line.split('lo=')[1];
          if (regStr) {
            const t0Match = regStr.match(/t0=([0-9a-f]{8})/);
            const t1Match = regStr.match(/t1=([0-9a-f]{8})/);
            if (t0Match && t1Match) {
              const t0 = parseInt(t0Match[1], 16);
              const t1 = parseInt(t1Match[1], 16);
              console.log(`  t0 = 0x${t0.toString(16).padStart(8, '0')}`);
              console.log(`  t1 = 0x${t1.toString(16).padStart(8, '0')}`);
              
              // Check what A0:99 points to now
              const a099Current = sys.ram.read32(0x00000464);
              console.log(`  A0:99 = 0x${a099Current.toString(16).padStart(8, '0')}`);
              
              // If A0:99 is not 0, we fixed the issue!
              if (a099Current !== 0) {
                console.log(`  SUCCESS: A0:99 is not zero! Points to 0x${a099Current.toString(16)}`);
                
                // Check if it points to valid code
                if (a099Current === 0x000086b0 || a099Current === 0xbfc086b0) {
                  console.log(`  Valid pointer to ${a099Current === 0x000086b0 ? 'RAM' : 'ROM'} kernel function`);
                }
              } else {
                console.log(`  FAILURE: A0:99 is still zero!`);
                divergenceFound = true;
              }
            }
          }
        }
        
        // Also check A0:96
        if (instrCount === 87005) {
          const a096Val = sys.ram.read32(0x00000458);
          console.log(`  A0:96 = 0x${a096Val.toString(16).padStart(8, '0')}`);
        }
      }
    });
    
    // Run to past the problematic instruction
    const maxSteps = 88000;
    console.log(`Running ${maxSteps} instructions to test A0:99 fix...`);
    console.log('');
    
    for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
      sys.cpu.step();
    }
    
    console.log(`\n=== A0:99 Value History ===`);
    for (const entry of a099History) {
      console.log(`  Instr ${entry.instr}: 0x${entry.value.toString(16).padStart(8, '0')}`);
    }
    
    // Final check
    const finalA099 = sys.ram.read32(0x00000464);
    const finalA096 = sys.ram.read32(0x00000458);
    
    console.log(`\n=== Final State ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`A0:99 final value: 0x${finalA099.toString(16).padStart(8, '0')}`);
    console.log(`A0:96 final value: 0x${finalA096.toString(16).padStart(8, '0')}`);
    
    // Check if kernel code exists at expected locations
    const kernelAt86b0 = sys.ram.read32(0x000086b0);
    const kernelAt85b0 = sys.ram.read32(0x000085b0);
    console.log(`Kernel at 0x86b0: 0x${kernelAt86b0.toString(16).padStart(8, '0')}`);
    console.log(`Kernel at 0x85b0: 0x${kernelAt85b0.toString(16).padStart(8, '0')}`);
    
    // Test should pass if A0:99 is not zero and points to valid location
    expect(divergenceFound).toBe(false);
    expect(finalA099).not.toBe(0);
    expect([0x000086b0, 0xbfc086b0].includes(finalA099)).toBe(true);
  });
});
