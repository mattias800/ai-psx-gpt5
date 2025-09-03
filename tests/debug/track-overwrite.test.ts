import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Track kernel code overwrites', () => {
  test('detects when kernel code at 0x2844/0x4370 gets overwritten', () => {
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
    let copiedYet = false;
    const overwrites: any[] = [];
    
    // Expected values after copy
    const expectedVals = new Map([
      [0x2844, 0x3c010000],
      [0x4370, 0x0c0009e8],
      [0x4378, 0x8fbf0014],
      [0x27a0, 0x3c020001]
    ]);
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Check if we've done the copy yet (after instruction ~50000)
        if (instrCount === 50000) {
          copiedYet = true;
          console.log('\\nChecking memory after copy (instruction 50000)...');
          for (const [addr, expected] of expectedVals) {
            const actual = sys.ram.read32(addr);
            if (actual === expected) {
              console.log(`  ✓ RAM[0x${addr.toString(16)}] = 0x${actual.toString(16).padStart(8,'0')}`);
            } else {
              console.log(`  ✗ RAM[0x${addr.toString(16)}] = 0x${actual.toString(16).padStart(8,'0')} (expected 0x${expected.toString(16).padStart(8,'0')})`);
            }
          }
        }
      }
    });
    
    // Track writes to our target addresses
    sys.enableMemTrace({
      filter: (op, addr) => {
        if (!op.startsWith('w')) return false;
        const physAddr = addr & 0x1fffffff;
        return expectedVals.has(physAddr);
      },
      output: (line) => {
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        const physAddr = addr & 0x1fffffff;
        
        if (copiedYet) {
          const expected = expectedVals.get(physAddr);
          if (val !== expected) {
            overwrites.push({
              instr: instrCount,
              pc: currentPC.toString(16).padStart(8, '0'),
              addr: physAddr.toString(16).padStart(4, '0'),
              oldVal: expected?.toString(16).padStart(8, '0'),
              newVal: val.toString(16).padStart(8, '0')
            });
            console.log(`\\n*** OVERWRITE at instr ${instrCount}, PC=0x${currentPC.toString(16).padStart(8,'0')}:`);
            console.log(`    Address 0x${physAddr.toString(16)} changed from 0x${expected?.toString(16).padStart(8,'0')} to 0x${val.toString(16).padStart(8,'0')}`);
          }
        }
      }
    });
    
    // Run until instruction 87005 (where divergence happens)
    const maxSteps = 87010;
    console.log(`Running ${maxSteps} instructions...`);
    
    for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
      sys.cpu.step();
    }
    
    console.log(`\\n=== Summary ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Overwrites detected: ${overwrites.length}`);
    
    if (overwrites.length > 0) {
      console.log('\\nOverwrite details:');
      for (const ow of overwrites) {
        console.log(`  Instr ${ow.instr}: PC=0x${ow.pc} overwrote 0x${ow.addr} from 0x${ow.oldVal} to 0x${ow.newVal}`);
      }
    }
    
    // Final check
    console.log('\\n=== Final memory values (at instr 87005) ===');
    for (const [addr, expected] of expectedVals) {
      const actual = sys.ram.read32(addr);
      if (actual === expected) {
        console.log(`  ✓ RAM[0x${addr.toString(16)}] = 0x${actual.toString(16).padStart(8,'0')}`);
      } else {
        console.log(`  ✗ RAM[0x${addr.toString(16)}] = 0x${actual.toString(16).padStart(8,'0')} (expected 0x${expected.toString(16).padStart(8,'0')})`);
      }
    }
    
    expect(overwrites.length).toBe(0);
  });
});
