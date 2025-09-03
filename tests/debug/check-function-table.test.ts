import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Check function table at divergence', () => {
  test('examines A0 function table at instruction 87000', () => {
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
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        
        // At instruction 87000, check function table and registers
        if (instrCount === 87000) {
          const cpuAny = sys.cpu as any;
          const state = cpuAny.s || cpuAny;
          
          console.log('\\n=== At instruction 87000 ===');
          console.log(`PC: 0x${(state.pc >>> 0).toString(16).padStart(8, '0')}`);
          console.log(`t0: 0x${(state.regs[8] >>> 0).toString(16).padStart(8, '0')}`);
          console.log(`t1: 0x${(state.regs[9] >>> 0).toString(16).padStart(8, '0')}`);
          console.log(`ra: 0x${(state.regs[31] >>> 0).toString(16).padStart(8, '0')}`);
          
          // Check A0 function table
          console.log('\\n=== A0 function table check ===');
          // The A0 dispatcher loads from 0x200 + (t1 << 2)
          const t1 = state.regs[9] >>> 0;
          const tableAddr = 0x200 + (t1 << 2);
          const funcPtr = sys.ram.read32(tableAddr);
          console.log(`t1 (function index): 0x${t1.toString(16)}`);
          console.log(`Table address: 0x${tableAddr.toString(16)}`);
          console.log(`Function pointer: 0x${funcPtr.toString(16).padStart(8, '0')}`);
          
          // Check some key function table entries
          console.log('\\nSample A0 table entries:');
          const checkIndices = [0x00, 0x01, 0x02, 0x96, 0x99];
          for (const idx of checkIndices) {
            const addr = 0x200 + (idx << 2);
            const val = sys.ram.read32(addr);
            console.log(`  A0:${idx.toString(16).padStart(2,'0')} at 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')}`);
          }
        }
      }
    });
    
    // Run to instruction 87000
    console.log('Running to instruction 87000...');
    for (let i = 0; i < 87000; i++) {
      sys.cpu.step();
    }
    
    // Now step through the dispatcher
    console.log('\\n=== Stepping through A0 dispatcher ===');
    for (let i = 0; i < 10; i++) {
      const cpuAny = sys.cpu as any;
      const state = cpuAny.s || cpuAny;
      const pc = state.pc >>> 0;
      const instr = sys.ram.read32(pc);
      
      console.log(`Step ${i}: PC=0x${pc.toString(16).padStart(8,'0')} instr=0x${instr.toString(16).padStart(8,'0')}`);
      
      // If we're about to jump, show where
      if ((instr & 0xfc00003f) === 0x00000008) { // jr instruction
        const rs = (instr >>> 21) & 0x1f;
        const target = state.regs[rs] >>> 0;
        console.log(`  -> Will jump to 0x${target.toString(16).padStart(8,'0')} (from register $${rs})`);
      }
      
      sys.cpu.step();
      instrCount++;
    }
    
    expect(instrCount).toBeGreaterThan(87000);
  });
});
