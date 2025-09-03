import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS boot with controller', () => {
  test('boots BIOS with controller connected', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Connect a controller with no buttons pressed
    // Buttons are active-low: 0xFFFF = no buttons pressed
    sys.setPadButtons(0xFFFF);
    
    // Also set memory card as present
    sys.setMemcardPresent(true);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let loopCount = 0;
    const pcHistory: number[] = [];
    const maxHistorySize = 20;
    
    // Track execution to detect loops
    const pcCounts = new Map<number, number>();
    let lastLoopPC = 0;
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Add to history
        pcHistory.push(pc);
        if (pcHistory.length > maxHistorySize) {
          pcHistory.shift();
        }
        
        // Count PC executions
        const count = (pcCounts.get(pc) || 0) + 1;
        pcCounts.set(pc, count);
        
        // Detect tight loops (same PC executed many times)
        // Ignore the memory clear loop at 0xbfc003b8 which runs 3160 times
        if (count > 5000 && pc !== lastLoopPC) {
          loopCount++;
          lastLoopPC = pc;
          console.log(`\nLoop detected at PC=0x${pc.toString(16)} (executed ${count} times)`);
          console.log('Recent PCs:', pcHistory.map(p => '0x' + p.toString(16)).join(' -> '));
        }
        
        // Log progress periodically
        if (instrCount % 50000 === 0) {
          console.log(`Progress: ${instrCount} instructions executed`);
        }
        
        // Track specific milestones in BIOS boot
        if (pc === 0x00000a0) {
          console.log(`[${instrCount}] Entering A0 syscall dispatcher`);
        }
        if (pc === 0x000000b0) {
          console.log(`[${instrCount}] Entering B0 syscall dispatcher`);
        }
        if (pc === 0x000000c0) {
          console.log(`[${instrCount}] Entering C0 syscall dispatcher`);
        }
        if (pc === 0xbfc00a9c) {
          console.log(`[${instrCount}] Entering std_in_gets (B0:3d) - waiting for controller input`);
        }
        if (pc === 0xbfc00150) {
          console.log(`[${instrCount}] BIOS reached shell/monitor entry point!`);
        }
      }
    });
    
    // Also enable memory trace for SIO access
    sys.enableMemTrace({
      filter: (op, addr) => {
        const a = addr >>> 0;
        // SIO0 registers: 0x1f801040-0x1f80104f
        return a >= 0x1f801040 && a <= 0x1f80104f;
      },
      output: (line) => {
        // Parse the line to detect controller polling
        if (line.includes('1f801040')) {
          console.log(`  SIO: ${line}`);
        }
      }
    });
    
    console.log('Starting BIOS boot with controller connected...');
    console.log('Controller state: 0xFFFF (no buttons pressed)');
    console.log('Memory card: present\\n');
    
    // Run for more instructions to see if it progresses further
    // Need at least 18,000 instructions to get past the memory clear loop
    const maxInstructions = 500000;
    let stuck = false;
    
    try {
      for (let i = 0; i < maxInstructions; i++) {
        sys.cpu.step();
        
        // Check if we're stuck in a very tight loop
        if (loopCount > 3) {
          console.log(`\\nExecution appears stuck after ${instrCount} instructions`);
          stuck = true;
          break;
        }
      }
    } catch (e: any) {
      console.log(`\\nExecution stopped at instruction ${instrCount}`);
      console.log(`Error: ${e.message}`);
    }
    
    console.log(`\\n=== Final Statistics ===`);
    console.log(`Total instructions executed: ${instrCount}`);
    console.log(`Loops detected: ${loopCount}`);
    
    // Show most frequently executed PCs
    const sortedPCs = Array.from(pcCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    console.log('\\nMost frequently executed addresses:');
    for (const [pc, count] of sortedPCs) {
      if (count > 10) {
        console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times`);
      }
    }
    
    // We expect the BIOS to run more instructions with controller connected
    expect(instrCount).toBeGreaterThan(90000);
    expect(stuck).toBe(false);
  });
});
