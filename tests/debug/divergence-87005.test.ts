import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Divergence at line 87005 debug', () => {
  test('traces execution around line 87005', () => {
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
    const cpuAny = sys.cpu as any;
    cpuAny.pc = 0xbfc00000;
    cpuAny.nextPc = 0xbfc00004;
    
    // Count instructions
    let instrCount = 0;
    const targetInstr = 87000;  // Start capturing before divergence
    const captureWindow = 20;
    const trace: any[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        
        if (instrCount >= targetInstr && instrCount < targetInstr + captureWindow) {
          const parts = line.split(' ');
          const pc = parseInt(parts[0].split('=')[1], 16);
          const instr = parseInt(parts[1].split('=')[1], 16);
          
          // Extract ra register value
          const raMatch = line.match(/ra=([0-9a-f]{8})/);
          const ra = raMatch ? raMatch[1] : 'unknown';
          
          trace.push({
            num: instrCount,
            pc: pc.toString(16).padStart(8, '0'),
            instr: instr.toString(16).padStart(8, '0'),
            ra
          });
          
          // Log jr $ra instructions specially
          if ((instr & 0xfc1fffff) === 0x03e00008) {
            console.log(`Instruction ${instrCount}: jr $ra at PC 0x${pc.toString(16).padStart(8, '0')}, ra=0x${ra}`);
          }
        }
      }
    });
    
    // Run until we reach the divergence point
    const maxSteps = 90000;
    for (let i = 0; i < maxSteps && instrCount < targetInstr + captureWindow; i++) {
      sys.cpu.step();
    }
    
    console.log('\n=== Execution trace around line 87005 ===');
    for (const t of trace) {
      console.log(`${t.num}: PC=0x${t.pc} INSTR=0x${t.instr} ra=0x${t.ra}`);
    }
    
    // Check what happened at instruction 87005
    const instr87005 = trace.find(t => t.num === 87005);
    if (instr87005) {
      console.log(`\n=== Instruction 87005 ===`);
      console.log(`PC: 0x${instr87005.pc} (should be 0x00004380 continuing from RAM)`);
      console.log(`ra: 0x${instr87005.ra} (should be 0x00002844)`);
      
      if (instr87005.pc === 'bfc059c4') {
        console.log('ERROR: Jumped to CdRemove BIOS function instead of RAM!');
        
        // Check what's in the A0 function table at index 0x96
        const a0_96_addr = 0x200 + (0x96 << 2);
        const a0_96_val = sys.ram.read32(a0_96_addr);
        console.log(`A0:0x96 table entry at 0x${a0_96_addr.toString(16)} = 0x${a0_96_val.toString(16).padStart(8, '0')}`);
      }
    }
    
    // Check memory at key addresses
    console.log('\n=== Memory check ===');
    const addr_4378 = sys.ram.read32(0x4378);
    const addr_2844 = sys.ram.read32(0x2844);
    const addr_4370 = sys.ram.read32(0x4370);
    const addr_27a0 = sys.ram.read32(0x27a0);
    console.log(`RAM[0x4378] = 0x${addr_4378.toString(16).padStart(8, '0')}`);
    console.log(`RAM[0x2844] = 0x${addr_2844.toString(16).padStart(8, '0')}`);
    console.log(`RAM[0x4370] = 0x${addr_4370.toString(16).padStart(8, '0')} (should be 0x0c0009e8 - jal 0x27a0)`);
    console.log(`RAM[0x27a0] = 0x${addr_27a0.toString(16).padStart(8, '0')} (should be 0x3c020001 - lui v0, 1)`);
    
    // Check if kernel code was copied to RAM
    console.log('\n=== BIOS kernel in RAM check ===');
    const kernelStart = 0x500;  // Approximate kernel start in RAM
    let hasCode = false;
    for (let i = 0; i < 0x5000; i += 4) {
      const val = sys.ram.read32(i);
      if (val !== 0) {
        hasCode = true;
        if (i < kernelStart + 20) {
          console.log(`RAM[0x${i.toString(16).padStart(4, '0')}] = 0x${val.toString(16).padStart(8, '0')}`);
        }
      }
    }
    console.log(`Has non-zero code in RAM: ${hasCode}`);
    
    expect(instrCount).toBeGreaterThanOrEqual(87005);
  });
});
