import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace memcpy parameters', () => {
  test('trace what gets copied to stack', () => {
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
    
    let instructionCount = 0;
    let memcpyCalls = 0;
    
    console.log('\n=== Tracing memcpy calls at 0xbfc00434 ===\n');
    
    // Track CPU execution
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Parse the trace
        const pcMatch = line.match(/pc=([0-9a-f]{8})/i);
        if (!pcMatch) return;
        
        const pc = parseInt(pcMatch[1], 16);
        
        // Check if we're at the memcpy function
        if (pc === 0xbfc00434) {
          memcpyCalls++;
          
          // Get registers a0 (src), a1 (dst), a2 (size)
          const a0Match = line.match(/a0=([0-9a-f]{8})/i);
          const a1Match = line.match(/a1=([0-9a-f]{8})/i);
          const a2Match = line.match(/a2=([0-9a-f]{8})/i);
          const raMatch = line.match(/ra=([0-9a-f]{8})/i);
          
          if (a0Match && a1Match && a2Match) {
            const src = parseInt(a0Match[1], 16);
            const dst = parseInt(a1Match[1], 16);
            const size = parseInt(a2Match[1], 16);
            const ra = raMatch ? parseInt(raMatch[1], 16) : 0;
            
            console.log(`\n[${instructionCount}] Memcpy call #${memcpyCalls}:`);
            console.log(`  Called from: 0x${ra.toString(16)}`);
            console.log(`  Source: 0x${src.toString(16)}`);
            console.log(`  Dest:   0x${dst.toString(16)}`);
            console.log(`  Size:   0x${size.toString(16)} (${size} bytes)`);
            
            // Read first few words from source to see what's being copied
            if (size > 0 && size < 1000) {
              console.log('  First words being copied:');
              try {
                for (let i = 0; i < Math.min(8, size / 4); i++) {
                  const addr = (src + i * 4) >>> 0;
                  const value = sys.cpu.memory.read32(addr);
                  const ascii = String.fromCharCode(
                    (value >> 24) & 0xFF,
                    (value >> 16) & 0xFF,
                    (value >> 8) & 0xFF,
                    value & 0xFF
                  );
                  const isPrintable = ascii.split('').every(c => 
                    c === '\0' || (c.charCodeAt(0) >= 32 && c.charCodeAt(0) < 127)
                  );
                  
                  if (isPrintable && value !== 0) {
                    console.log(`    [${i}] 0x${addr.toString(16)}: 0x${value.toString(16)} ("${ascii}")`);
                  } else {
                    console.log(`    [${i}] 0x${addr.toString(16)}: 0x${value.toString(16)}`);
                  }
                  
                  // Check for the bad value
                  if (value === 0x64657472) {
                    console.log('      ^ This is the bad value "detr"!');
                  }
                }
              } catch (e) {
                console.log('  Could not read source data');
              }
            }
            
            // Check if destination is on the stack
            if (dst >= 0x80007000 && dst <= 0x80008000) {
              console.log('  ⚠️  Copying to stack area!');
            }
            
            // For the problematic call
            if (memcpyCalls === 2 && dst === 0xa0007268) {
              console.log('\n  !!! This is the problematic memcpy that writes strings to stack !!!');
            }
          }
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      // Run until we've seen a few memcpy calls
      for (let i = 0; i < 62000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 10000 === 0 && instructionCount > 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Stop after we've seen the problematic memcpy
        if (instructionCount >= 60000) {
          console.log('\nStopping after problematic memcpy');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`Memcpy calls: ${memcpyCalls}`);
    
    expect(instructionCount).toBeGreaterThan(10000);
  });
});
