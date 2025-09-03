import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Find first divergence', () => {
  test('binary search for first divergence point', () => {
    // Read reference BIOS trace
    const traceFile = path.join(process.cwd(), 'pcsx-redux-bios.log');
    const traceLines = fs.readFileSync(traceFile, 'utf8').split('\n');
    
    // Binary search to find first diverging line
    let low = 1;
    let high = 87004; // Last known good line
    let firstBad = 87005; // Known bad line
    
    console.log('Binary searching for first divergence...');
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      console.log(`\nTesting line ${mid} (range: ${low}-${high})`);
      
      const sys = new PSXSystem();
      const biosBytes = fs.readFileSync(path.join(process.cwd(), 'scph1001.bin'));
      sys.loadBIOS(biosBytes);
      
      const cpuAny = sys.cpu as any;
      cpuAny.pc = 0xbfc00000;
      cpuAny.nextPc = 0xbfc00004;
      
      let instrCount = 0;
      let diverged = false;
      
      sys.enableCpuTrace({
        output: (line) => {
          instrCount++;
          
          if (instrCount === mid) {
            // Parse our line
            const parts = line.split(' ');
            const pc = parseInt(parts[0].split('=')[1], 16);
            
            // Parse reference line
            const refLine = traceLines[mid + 4]; // Skip header lines
            if (!refLine) return;
            
            const refMatch = refLine.match(/^([0-9a-f]{8})/);
            if (!refMatch) return;
            
            const refPc = parseInt(refMatch[1], 16);
            
            if (pc !== refPc) {
              diverged = true;
              console.log(`  DIVERGED at line ${mid}: our PC=0x${pc.toString(16).padStart(8,'0')}, ref PC=0x${refPc.toString(16).padStart(8,'0')}`);
            } else {
              console.log(`  OK at line ${mid}: PC=0x${pc.toString(16).padStart(8,'0')}`);
            }
          }
        }
      });
      
      // Run until the test line
      for (let i = 0; i < mid && instrCount < mid; i++) {
        sys.cpu.step();
      }
      
      if (diverged) {
        firstBad = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    
    console.log(`\n=== First divergence found at line ${firstBad} ===`);
    
    // Now get details about that line
    const sys = new PSXSystem();
    const biosBytes = fs.readFileSync(path.join(process.cwd(), 'scph1001.bin'));
    sys.loadBIOS(biosBytes);
    
    const cpuAny = sys.cpu as any;
    cpuAny.pc = 0xbfc00000;
    cpuAny.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    const context: any[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        
        // Capture context around divergence
        if (instrCount >= firstBad - 5 && instrCount <= firstBad + 5) {
          const parts = line.split(' ');
          const pc = parseInt(parts[0].split('=')[1], 16);
          const instr = parseInt(parts[1].split('=')[1], 16);
          
          context.push({
            num: instrCount,
            pc: pc.toString(16).padStart(8, '0'),
            instr: instr.toString(16).padStart(8, '0'),
            line: line.substring(0, 100)
          });
        }
      }
    });
    
    // Run until past divergence
    for (let i = 0; i < firstBad + 10; i++) {
      sys.cpu.step();
    }
    
    console.log('\nContext around divergence:');
    for (const c of context) {
      const refLine = traceLines[c.num + 4];
      const refPc = refLine ? refLine.substring(0, 8) : 'N/A';
      const match = c.pc === refPc ? '✓' : '✗';
      console.log(`${c.num}: ${match} PC=${c.pc} (ref=${refPc})`);
    }
    
    expect(firstBad).toBeLessThan(87005);
  });
});
