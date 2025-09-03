import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Verify copy writes', () => {
  test('tracks writes to 0x2844 and other key addresses', () => {
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
    
    let instrCount = 0;
    let currentPC = 0;
    const keyWrites: any[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
      }
    });
    
    // Track writes to specific addresses
    const targetAddrs = new Set([0x2844, 0x4370, 0x4378, 0x27a0]);
    
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = toPhysical(addr);
        return op.startsWith('w') && targetAddrs.has(p);
      },
      output: (line) => {
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        
        keyWrites.push({
          instr: instrCount,
          pc: currentPC.toString(16).padStart(8, '0'),
          addr: toPhysical(addr).toString(16).padStart(8, '0'),
          val: val.toString(16).padStart(8, '0')
        });
        
        console.log(`Instr ${instrCount} PC=0x${currentPC.toString(16).padStart(8,'0')}: Write to 0x${toPhysical(addr).toString(16).padStart(4,'0')} = 0x${val.toString(16).padStart(8,'0')}`);
      }
    });
    
    // Run for a long time to catch all copies
    const maxSteps = 100000;
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
    }
    
    console.log(`\n=== Write summary ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Key writes captured: ${keyWrites.length}`);
    
    // Check final values
    console.log('\n=== Final memory values ===');
    for (const addr of targetAddrs) {
      const val = sys.ram.read32(addr);
      const writes = keyWrites.filter(w => parseInt(w.addr, 16) === addr);
      console.log(`RAM[0x${addr.toString(16).padStart(4, '0')}] = 0x${val.toString(16).padStart(8, '0')} (${writes.length} writes)`);
      if (writes.length > 0) {
        console.log(`  Last write: instr ${writes[writes.length-1].instr} value=0x${writes[writes.length-1].val}`);
      }
    }
    
    // Check if we ever hit the copy loop  
    const copyLoopWrites = keyWrites.filter(w => w.pc === 'bfc00448');
    console.log(`\nCopy loop writes (PC=0xbfc00448): ${copyLoopWrites.length}`);
    
    expect(keyWrites.length).toBeGreaterThan(0);
  });
});

function toPhysical(addr: number): number {
  const a = addr >>> 0;
  // KUSEG/KSEG0/KSEG1 -> physical
  if (a < 0x80000000) return a;
  if (a < 0xa0000000) return a & 0x1fffffff;
  if (a < 0xc0000000) return a & 0x1fffffff;
  return a;
}
