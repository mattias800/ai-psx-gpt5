import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Track A0:96 and A0:99 updates', () => {
  test('monitors why A0:96 and A0:99 get cleared', () => {
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
    let currentCode = '';
    const importantUpdates: any[] = [];
    
    // Track important instruction ranges
    const keyRanges = [
      { start: 78970, end: 79000, desc: 'Setting A0:96/99 to ROM' },
      { start: 80070, end: 80090, desc: 'First clear of A0:96/99' },
      { start: 85260, end: 85280, desc: 'Second clear of A0:96/99' }
    ];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        currentCode = parts.slice(1).join(' ');
        
        // Check if we're in a key range
        for (const range of keyRanges) {
          if (instrCount >= range.start && instrCount <= range.end) {
            console.log(`[${range.desc}] ${instrCount}: PC=0x${currentPC.toString(16).padStart(8, '0')} ${currentCode}`);
          }
        }
        
        // Track specific PCs that write to these addresses
        if (currentPC === 0xbfc042f4 || currentPC === 0xbfc01a08 || currentPC === 0xbfc01a14) {
          console.log(`>>> Key PC ${instrCount}: 0x${currentPC.toString(16).padStart(8, '0')} ${currentCode}`);
          
          // Show register state (if GPRs are available)
          if (sys.cpu.s && sys.cpu.s.gpr) {
            console.log(`    Regs: t0=${sys.cpu.s.gpr[8].toString(16)} t1=${sys.cpu.s.gpr[9].toString(16)} t2=${sys.cpu.s.gpr[10].toString(16)}`);
          }
        }
      }
    });
    
    // Track writes to A0:96 and A0:99
    sys.enableMemTrace({
      filter: (op, addr) => {
        if (!op.startsWith('w')) return false;
        const physAddr = addr & 0x1fffffff;
        return physAddr === 0x458 || physAddr === 0x464; // A0:96 and A0:99
      },
      output: (line) => {
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        const physAddr = addr & 0x1fffffff;
        
        const index = physAddr === 0x458 ? '0x96' : '0x99';
        const update = {
          instr: instrCount,
          pc: currentPC.toString(16).padStart(8, '0'),
          index,
          val: val.toString(16).padStart(8, '0'),
          isRAM: val > 0 && val < 0x00200000,
          isROM: val >= 0xbfc00000,
          code: currentCode
        };
        
        importantUpdates.push(update);
        
        console.log(`\n=== WRITE A0:${index} = 0x${update.val} ${update.isROM ? '(ROM)' : update.isRAM ? '(RAM)' : '(CLEAR)'} ===`);
        console.log(`    Instr: ${instrCount}, PC: 0x${update.pc}`);
        console.log(`    Code: ${currentCode}`);
        
        // Check what instruction is causing the clear
        if (val === 0) {
          console.log(`    !!! CLEARING A0:${index} at PC 0x${update.pc}`);
          
          // Look at context around this instruction
          if (instrCount >= 80070 && instrCount <= 80090) {
            console.log(`    Context: During first clear phase`);
          } else if (instrCount >= 85260 && instrCount <= 85280) {
            console.log(`    Context: During second clear phase`);
          }
        }
      }
    });
    
    // Run until after the second clear
    const maxSteps = 86000;
    console.log(`Running ${maxSteps} instructions to track A0:96 and A0:99...`);
    console.log('');
    
    for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
      sys.cpu.step();
    }
    
    console.log(`\n=== Summary of A0:96 and A0:99 Updates ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Important updates: ${importantUpdates.length}`);
    
    for (const update of importantUpdates) {
      console.log(`  ${update.instr}: A0:${update.index} = 0x${update.val} ${update.isROM ? '(ROM)' : update.isRAM ? '(RAM)' : '(CLEAR)'} at PC=0x${update.pc}`);
    }
    
    // Check final state
    const a096Addr = 0x00000458;
    const a099Addr = 0x00000464;
    const a096Val = sys.memRead32(a096Addr);
    const a099Val = sys.memRead32(a099Addr);
    
    console.log(`\n=== Final State ===`);
    console.log(`A0:0x96 (0x458) = 0x${a096Val.toString(16).padStart(8, '0')}`);
    console.log(`A0:0x99 (0x464) = 0x${a099Val.toString(16).padStart(8, '0')}`);
    
    // These should eventually point to RAM after kernel copy
    expect(importantUpdates.length).toBeGreaterThan(0);
  });
});
