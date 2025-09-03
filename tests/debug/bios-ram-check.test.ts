import { describe, test, expect, beforeEach } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS RAM check debug', () => {
  test('traces BIOS RAM check loop', () => {
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
    if (cpuAny.pc !== undefined) {
      cpuAny.pc = 0xbfc00000;
      cpuAny.nextPc = 0xbfc00004;
    } else if (cpuAny.state) {
      cpuAny.state.pc = 0xbfc00000;
      cpuAny.state.nextPc = 0xbfc00004;
    } else {
      // Create initial state
      cpuAny.regs = new Uint32Array(32);
      cpuAny.pc = 0xbfc00000;
      cpuAny.nextPc = 0xbfc00004;
      cpuAny.hi = 0;
      cpuAny.lo = 0;
    }
    
    // Trace specific instructions in the loop
    const loopTrace: any[] = [];
    let prevPC = 0;
    let loopCount = 0;
    const targetPC = 0xbfc003b8;
    
    sys.enableCpuTrace({
      output: (line) => {
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        const instr = parseInt(parts[1].split('=')[1], 16);
        
        // Track when we hit the loop start
        if (pc === targetPC) {
          loopCount++;
          if (loopCount > 10) return; // Stop after 10 iterations
        }
        
        // Capture loop instructions
        if (pc >= targetPC && pc <= 0xbfc003c8) {
          const cpuState = (sys.cpu as any).state;
          loopTrace.push({
            pc: pc.toString(16).padStart(8, '0'),
            instr: instr.toString(16).padStart(8, '0'),
            v0: (cpuState.regs[2] >>> 0).toString(16).padStart(8, '0'),
            v1: (cpuState.regs[3] >>> 0).toString(16).padStart(8, '0'),
            t0: (cpuState.regs[8] >>> 0).toString(16).padStart(8, '0'),
            t1: (cpuState.regs[9] >>> 0).toString(16).padStart(8, '0'),
            t2: (cpuState.regs[10] >>> 0).toString(16).padStart(8, '0'),
            a0: (cpuState.regs[4] >>> 0).toString(16).padStart(8, '0'),
            a1: (cpuState.regs[5] >>> 0).toString(16).padStart(8, '0'),
          });
        }
        
        prevPC = pc;
      }
    });
    
    // Trace memory accesses
    const memTrace: any[] = [];
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = toPhysical(addr);
        // Trace all RAM accesses 
        return p < 0x00200000;
      },
      output: (line) => {
        if (loopCount >= 1 && loopCount <= 3) {
          memTrace.push(line);
        }
      }
    });
    
    // Run until stuck or max steps
    const maxSteps = 50000;
    for (let i = 0; i < maxSteps; i++) {
      sys.cpu.step();
      if (loopCount > 10) break;
    }
    
    console.log('\n=== RAM check loop analysis ===');
    console.log(`Loop iterations captured: ${loopCount}`);
    
    // Show first few loop iterations
    console.log('\n=== First loop iteration ===');
    const firstIter = loopTrace.slice(0, 5);
    for (const t of firstIter) {
      console.log(`PC=${t.pc} INSTR=${t.instr} v0=${t.v0} v1=${t.v1} t0=${t.t0} t1=${t.t1} t2=${t.t2}`);
    }
    
    console.log('\n=== Memory operations during loop ===');
    memTrace.slice(0, 20).forEach(t => console.log(t));
    
    // Check what values are being compared
    const compareInstr = loopTrace.find(t => t.instr === '0343082b');
    if (compareInstr) {
      console.log(`\\n=== Compare instruction state ===`);
      console.log(`t0=${compareInstr.t0} v1=${compareInstr.v1}`);
    }
    
    expect(loopCount).toBeLessThan(10);
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
