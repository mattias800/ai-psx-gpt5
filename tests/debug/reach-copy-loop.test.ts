import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Check if copy loop is reached', () => {
  test('tracks if we reach PC 0xbfc00434-0xbfc00448', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Set initial PC - use the correct CPU state property
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let hitCopyLoop = false;
    const copyLoopPCs: any[] = [];
    
    // Track memory writes
    let writeCount = 0;
    const targetWrites: any[] = [];
    sys.enableMemTrace({
      filter: (op, addr) => {
        return op.startsWith('w') && hitCopyLoop;
      },
      output: (line) => {
        writeCount++;
        if (writeCount <= 10 || (writeCount % 1000 === 0)) {
          console.log(`Write #${writeCount}: ${line}`);
        }
        // Check for writes to our target addresses
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const physAddr = addr & 0x1fffffff;
        if (physAddr === 0x2844 || physAddr === 0x4370) {
          targetWrites.push({ count: writeCount, addr: physAddr, line });
          console.log(`*** TARGET WRITE: ${line}`);
        }
      }
    });
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Check if we're in the copy loop range
        if (pc >= 0xbfc00434 && pc <= 0xbfc00448) {
          if (!hitCopyLoop) {
            console.log(`\n*** HIT COPY LOOP at instruction ${instrCount}, PC=0x${pc.toString(16).padStart(8,'0')} ***\n`);
            hitCopyLoop = true;
          }
          
          if (copyLoopPCs.length < 20) {
            copyLoopPCs.push({
              instr: instrCount,
              pc: pc.toString(16).padStart(8, '0'),
              line: line.substring(0, 120)
            });
          }
        }
        
        // Also check addresses around the copy loop
        if (pc >= 0xbfc00400 && pc <= 0xbfc00460 && instrCount % 100 === 0) {
          console.log(`Instr ${instrCount}: Near copy loop, PC=0x${pc.toString(16).padStart(8,'0')}`);
        }
      }
    });
    
    // Run for a long time
    const maxSteps = 100000;
    console.log(`Running ${maxSteps} instructions...`);
    
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
      
      // Stop after we've done enough copying
      if (hitCopyLoop && writeCount >= 5000) {
        console.log(`Stopping after ${writeCount} writes at instruction ${instrCount}`);
        break;
      }
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`Total instructions executed: ${instrCount}`);
    console.log(`Hit copy loop: ${hitCopyLoop}`);
    console.log(`Total writes: ${writeCount}`);
    console.log(`Target writes found: ${targetWrites.length}`);
    
    // Check final memory values
    console.log('\n=== Final memory check ===');
    const importantAddrs = [0x2844, 0x4370, 0x4378, 0x27a0];
    for (const addr of importantAddrs) {
      const val = sys.ram.read32(addr);
      console.log(`  RAM[0x${addr.toString(16).padStart(4,'0')}] = 0x${val.toString(16).padStart(8,'0')}`);
    }
    
    if (hitCopyLoop) {
      console.log(`\nFirst copy loop instructions:`);
      for (const entry of copyLoopPCs) {
        console.log(`  ${entry.instr}: PC=0x${entry.pc}`);
        console.log(`    ${entry.line}`);
      }
    } else {
      // Check where we are stuck or what we're doing instead
      console.log(`\nNever reached copy loop. Checking current state...`);
      const currentPC = (sys.cpu as any).pc;
      console.log(`Final PC: 0x${currentPC.toString(16).padStart(8,'0')}`);
      
      // Check some memory values
      console.log(`\nMemory check:`);
      const checkAddrs = [0x0, 0xa0, 0xb0, 0xc0, 0x5c4, 0x2844];
      for (const addr of checkAddrs) {
        const val = sys.ram.read32(addr);
        console.log(`  RAM[0x${addr.toString(16).padStart(4,'0')}] = 0x${val.toString(16).padStart(8,'0')}`);
      }
    }
    
    expect(hitCopyLoop).toBe(true);
  });
});
