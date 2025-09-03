import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS kernel copy to RAM', () => {
  test('tracks when kernel is copied to RAM', () => {
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
    
    // Track writes to kernel area in RAM
    const kernelWrites: any[] = [];
    let instrCount = 0;
    let currentPC = 0;
    
    // Track if we hit the copy loop
    let hitCopyLoop = false;
    let copyLoopCount = 0;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Check if we're in the copy loop
        if (currentPC >= 0xbfc00434 && currentPC <= 0xbfc00448) {
          if (!hitCopyLoop) {
            console.log(`Hit copy loop at instruction ${instrCount}`);
            hitCopyLoop = true;
          }
          copyLoopCount++;
          if (copyLoopCount <= 10) {
            console.log(`Copy loop: ${line}`);
          }
        }
      }
    });
    
    sys.enableMemTrace({
      filter: (op, addr) => {
        // Track writes to RAM area where kernel should be (0x500 - 0x8000)
        const p = toPhysical(addr);
        return op.startsWith('w') && p >= 0x500 && p < 0x8000;
      },
      output: (line) => {
        const parts = line.split(' ');
        const op = parts[0];
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        
        kernelWrites.push({
          instr: instrCount,
          pc: currentPC.toString(16).padStart(8, '0'),
          addr: addr.toString(16).padStart(8, '0'),
          val: val.toString(16).padStart(8, '0')
        });
      }
    });
    
    // Run for a while - need at least 45657 instructions to reach copy loop
    const maxSteps = 46000;
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
      
      // Stop if we've executed the copy loop
      if (hitCopyLoop && copyLoopCount > 1000) {
        console.log(`Stopping after copy loop executed ${copyLoopCount} times`);
        break;
      }
    }
    
    console.log(`\n=== Kernel copy analysis ===`);
    console.log(`Total instructions: ${instrCount}`);
    console.log(`Kernel area writes: ${kernelWrites.length}`);
    
    if (kernelWrites.length > 0) {
      console.log(`\nFirst kernel writes:`);
      for (let i = 0; i < Math.min(10, kernelWrites.length); i++) {
        const w = kernelWrites[i];
        console.log(`  Instr ${w.instr} PC=0x${w.pc}: write to 0x${w.addr} = 0x${w.val}`);
      }
      
      console.log(`\nLast kernel writes:`);
      const start = Math.max(0, kernelWrites.length - 10);
      for (let i = start; i < kernelWrites.length; i++) {
        const w = kernelWrites[i];
        console.log(`  Instr ${w.instr} PC=0x${w.pc}: write to 0x${w.addr} = 0x${w.val}`);
      }
    }
    
    // Check specific addresses that should have code
    console.log(`\n=== Expected kernel code check ===`);
    const checkAddrs = [0x2844, 0x4370, 0x4378, 0x27a0];
    for (const addr of checkAddrs) {
      const val = sys.ram.read32(addr);
      console.log(`RAM[0x${addr.toString(16).padStart(4, '0')}] = 0x${val.toString(16).padStart(8, '0')}`);
    }
    
    // Check if copy loop at 0xbfc00434 was executed
    const copyLoopWrites = kernelWrites.filter(w => w.pc === 'bfc00448');
    console.log(`\nCopy loop writes (PC=0xbfc00448): ${copyLoopWrites.length}`);
    
    expect(kernelWrites.length).toBeGreaterThan(0);
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
