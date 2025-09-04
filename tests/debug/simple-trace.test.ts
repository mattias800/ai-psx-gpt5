import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Simple trace', () => {
  test('capture bad jump with minimal overhead', () => {
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
    let lastTraces: string[] = [];
    let capturedBadJump = false;
    
    console.log('\n=== Simple trace to capture bad jump ===\n');
    
    // Enable tracing only near the failure point
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Start capturing traces near the failure
        if (instructionCount >= 949480) {
          lastTraces.push(line);
          if (lastTraces.length > 30) {
            lastTraces.shift();
          }
          
          // Check if we see the bad address in the trace
          if (line.includes('64657472')) {
            console.log(`\n!!! Found bad address in trace at instruction ${instructionCount} !!!`);
            console.log(`Trace line: ${line}`);
            capturedBadJump = true;
            
            // Print the last 30 traces
            console.log('\nLast 30 instruction traces:');
            lastTraces.forEach((trace, idx) => {
              console.log(`[${idx}] ${trace}`);
            });
          }
        }
      }
    });
    
    // Also capture memory traces near failure
    sys.enableMemTrace({
      filter: (op, addr) => {
        return instructionCount >= 949480 && instructionCount <= 949510;
      },
      output: (line) => {
        console.log(`[${instructionCount}] MEM: ${line}`);
        
        // Check for the bad value
        if (line.includes('64657472')) {
          console.log('  ^ BAD VALUE DETECTED IN MEMORY ACCESS');
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      for (let i = 0; i < 950000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 100000 === 0 && instructionCount > 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Stop if we captured the bad jump
        if (capturedBadJump) {
          console.log('\nStopping after capturing bad jump');
          break;
        }
        
        // Also stop if we passed the expected failure point
        if (instructionCount > 949520) {
          console.log('\nPassed expected failure point without bad jump!');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
      
      if (e.message.includes('Unmapped address')) {
        const addrMatch = e.message.match(/\d+/);
        if (addrMatch) {
          const addr = parseInt(addrMatch[0]);
          console.log(`Unmapped address: 0x${addr.toString(16)}`);
          
          if (addr === 0x64657472) {
            console.log('This is the bad address!');
            
            // Print the last traces
            console.log('\nLast instruction traces before error:');
            lastTraces.forEach((trace, idx) => {
              console.log(`[${idx}] ${trace}`);
            });
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Captured bad jump: ${capturedBadJump}`);
    
    expect(instructionCount).toBeGreaterThan(949000);
  });
});
