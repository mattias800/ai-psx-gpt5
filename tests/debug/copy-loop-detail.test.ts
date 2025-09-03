import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS copy loop detailed trace', () => {
  test('traces exact copy loop execution', () => {
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
    let inCopyLoop = false;
    const copyOps: any[] = [];
    
    // Track CPU state around instruction 45657
    const targetRange = { start: 45650, end: 45670 };
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        
        if (instrCount >= targetRange.start && instrCount <= targetRange.end) {
          const parts = line.split(' ');
          const pc = parseInt(parts[0].split('=')[1], 16);
          
          // Extract register values we care about
          const a0Match = line.match(/a0=([0-9a-f]{8})/);
          const a1Match = line.match(/a1=([0-9a-f]{8})/);
          const a2Match = line.match(/a2=([0-9a-f]{8})/);
          const a3Match = line.match(/a3=([0-9a-f]{8})/);
          
          const state = {
            instr: instrCount,
            pc: pc.toString(16).padStart(8, '0'),
            a0: a0Match ? a0Match[1] : 'unknown',
            a1: a1Match ? a1Match[1] : 'unknown',  
            a2: a2Match ? a2Match[1] : 'unknown',
            a3: a3Match ? a3Match[1] : 'unknown'
          };
          
          copyOps.push(state);
          
          console.log(`${instrCount}: PC=${state.pc} a0=${state.a0} a1=${state.a1} a2=${state.a2} a3=${state.a3}`);
        }
      }
    });
    
    // Track memory writes
    const memWrites: any[] = [];
    sys.enableMemTrace({
      filter: (op, addr) => {
        return op.startsWith('w') && instrCount >= targetRange.start && instrCount <= targetRange.end;
      },
      output: (line) => {
        memWrites.push({ instr: instrCount, line });
        console.log(`  MEM: ${line}`);
      }
    });
    
    // Run until past the copy loop
    const maxSteps = 46000;
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
      if (instrCount > targetRange.end) break;
    }
    
    console.log('\n=== Copy loop analysis ===');
    console.log(`Instructions executed: ${instrCount}`);
    console.log(`Memory writes in range: ${memWrites.length}`);
    
    // Analyze the copy operation
    if (copyOps.length > 0) {
      const firstOp = copyOps[0];
      const lastOp = copyOps[copyOps.length - 1];
      
      console.log('\nCopy source/dest analysis:');
      console.log(`First: a0=0x${firstOp.a0} (src) a1=0x${firstOp.a1} (dst) a2=0x${firstOp.a2} (count)`);
      console.log(`Last:  a0=0x${lastOp.a0} (src) a1=0x${lastOp.a1} (dst) a2=0x${lastOp.a2} (count)`);
      
      // Calculate how much should have been copied
      if (firstOp.a2 !== 'unknown' && lastOp.a2 !== 'unknown') {
        const startCount = parseInt(firstOp.a2, 16);
        const endCount = parseInt(lastOp.a2, 16);
        const bytesCopied = startCount - endCount;
        console.log(`Bytes copied: ${bytesCopied} (0x${bytesCopied.toString(16)})`);
      }
    }
    
    // Check if the expected addresses got written
    console.log('\n=== Check target addresses ===');
    const targetAddrs = [0x500, 0x1000, 0x2000, 0x2844, 0x4370, 0x4378];
    for (const addr of targetAddrs) {
      const val = sys.ram.read32(addr);
      console.log(`RAM[0x${addr.toString(16).padStart(4, '0')}] = 0x${val.toString(16).padStart(8, '0')}`);
    }
    
    expect(instrCount).toBeGreaterThan(45670);
  });
});
