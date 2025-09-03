import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Track function table updates', () => {
  test('monitors all writes to A0/B0/C0 function tables', () => {
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
    const tableWrites: any[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
      }
    });
    
    // Track writes to function table regions
    sys.enableMemTrace({
      filter: (op, addr) => {
        if (!op.startsWith('w')) return false;
        const physAddr = addr & 0x1fffffff;
        
        // A0 table: 0x200-0x600
        // B0 table: 0x874-0xC74  
        // C0 table: 0x674-0xA74
        return (physAddr >= 0x200 && physAddr < 0x600) ||
               (physAddr >= 0x674 && physAddr < 0xA74) ||
               (physAddr >= 0x874 && physAddr < 0xC74);
      },
      output: (line) => {
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        const physAddr = addr & 0x1fffffff;
        
        // Determine which table
        let table = '';
        let index = -1;
        
        if (physAddr >= 0x200 && physAddr < 0x600) {
          table = 'A0';
          index = (physAddr - 0x200) >> 2;
        } else if (physAddr >= 0x874 && physAddr < 0xC74) {
          table = 'B0';
          index = (physAddr - 0x874) >> 2;
        } else if (physAddr >= 0x674 && physAddr < 0xA74) {
          table = 'C0';
          index = (physAddr - 0x674) >> 2;
        }
        
        const entry = {
          instr: instrCount,
          pc: currentPC.toString(16).padStart(8, '0'),
          table,
          index: index.toString(16),
          addr: physAddr.toString(16).padStart(4, '0'),
          val: val.toString(16).padStart(8, '0'),
          isRAM: val > 0 && val < 0x00200000,
          isROM: val >= 0xbfc00000
        };
        
        tableWrites.push(entry);
        
        // Log significant updates
        if (entry.isRAM || (val !== 0 && !entry.isROM)) {
          console.log(`Instr ${instrCount}: ${table}:${entry.index} = 0x${entry.val} ${entry.isRAM ? '(RAM)' : ''} at PC=0x${entry.pc}`);
        }
      }
    });
    
    // Run through BIOS initialization
    const maxSteps = 100000;
    console.log(`Running ${maxSteps} instructions to track function table updates...`);
    
    for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
      sys.cpu.step();
    }
    
    console.log(`\n=== Function Table Update Summary ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Total table writes: ${tableWrites.length}`);
    
    // Analyze writes by table
    const a0Writes = tableWrites.filter(w => w.table === 'A0');
    const b0Writes = tableWrites.filter(w => w.table === 'B0');
    const c0Writes = tableWrites.filter(w => w.table === 'C0');
    
    console.log(`\nA0 table writes: ${a0Writes.length}`);
    console.log(`B0 table writes: ${b0Writes.length}`);
    console.log(`C0 table writes: ${c0Writes.length}`);
    
    // Show RAM pointer updates
    const ramUpdates = tableWrites.filter(w => w.isRAM);
    console.log(`\n=== RAM Function Pointer Updates (${ramUpdates.length} total) ===`);
    for (const update of ramUpdates.slice(0, 20)) {
      console.log(`  ${update.table}:${update.index} = 0x${update.val} at instruction ${update.instr}`);
    }
    
    // Check specific problematic indices
    console.log(`\n=== Check Specific Indices ===`);
    const checkIndices = [
      { table: 'A0', index: 0x00 },
      { table: 'A0', index: 0x96 },
      { table: 'A0', index: 0x99 },
      { table: 'A0', index: 0x258 }
    ];
    
    for (const check of checkIndices) {
      const writes = tableWrites.filter(w => 
        w.table === check.table && 
        parseInt(w.index, 16) === check.index
      );
      if (writes.length > 0) {
        const last = writes[writes.length - 1];
        console.log(`${check.table}:${check.index.toString(16)} last value: 0x${last.val} at instr ${last.instr}`);
      } else {
        console.log(`${check.table}:${check.index.toString(16)} never written`);
      }
    }
    
    // Save detailed log for analysis
    const logPath = path.join(process.cwd(), 'function-table-updates.json');
    fs.writeFileSync(logPath, JSON.stringify(tableWrites, null, 2));
    console.log(`\nDetailed log saved to: ${logPath}`);
    
    expect(tableWrites.length).toBeGreaterThan(0);
  });
});
