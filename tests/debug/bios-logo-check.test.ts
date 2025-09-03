import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS logo display test', () => {
  test('check if BIOS attempts to display logo', () => {
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
    let mdecAccess = false;
    let gpuDrawCommands = 0;
    const pcHistory = new Map<number, number>();
    
    // Track key events
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        return (p >= 0x1f801820 && p <= 0x1f801827) || // MDEC
               (p >= 0x1f801810 && p <= 0x1f801817) || // GPU
               (p >= 0x1f801080 && p <= 0x1f8010ff);   // DMA
      },
      output: (line) => {
        const parts = line.split(' ');
        const addr = parseInt(parts[1], 16);
        const p = addr & 0x1fffffff;
        
        if (p >= 0x1f801820 && p <= 0x1f801827) {
          mdecAccess = true;
          console.log(`MDEC access at instruction ${instrCount}`);
        }
        
        if (p === 0x1f801810 && parts[0].startsWith('w')) {
          gpuDrawCommands++;
        }
      }
    });
    
    console.log('\\n=== Running BIOS to check for logo display ===\\n');
    
    // Run for a longer period, but with safety checks
    const maxInstr = 1_000_000;
    let stuck = false;
    let lastPC = 0;
    let sameCount = 0;
    
    try {
      for (let i = 0; i < maxInstr; i++) {
        const pc = sys.cpu.s.pc;
        
        // Track PC frequency
        pcHistory.set(pc, (pcHistory.get(pc) || 0) + 1);
        
        // Check if we're stuck in a tight loop
        if (pc === lastPC) {
          sameCount++;
          if (sameCount > 10000) {
            console.log(`Stuck at PC 0x${pc.toString(16).padStart(8, '0')}`);
            stuck = true;
            break;
          }
        } else {
          sameCount = 0;
          lastPC = pc;
        }
        
        // Show progress
        if ((i + 1) % 100000 === 0) {
          console.log(`Progress: ${i + 1} instructions...`);
          if (mdecAccess) {
            console.log('  - MDEC has been accessed!');
          }
          if (gpuDrawCommands > 0) {
            console.log(`  - GPU draw commands: ${gpuDrawCommands}`);
          }
        }
        
        sys.cpu.step();
        instrCount++;
        
        // If we see significant GPU activity, the logo might be displayed
        if (gpuDrawCommands > 100) {
          console.log(`\\nLogo display detected! GPU commands: ${gpuDrawCommands}`);
          break;
        }
      }
    } catch (e) {
      console.log(`\\nException at instruction ${instrCount}: ${e}`);
    }
    
    console.log('\\n=== Results ===');
    console.log(`Total instructions: ${instrCount}`);
    console.log(`MDEC accessed: ${mdecAccess}`);
    console.log(`GPU draw commands: ${gpuDrawCommands}`);
    console.log(`Stuck in loop: ${stuck}`);
    
    // Show hot spots
    const hotspots = Array.from(pcHistory.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    console.log('\\nTop 5 most executed addresses:');
    for (const [pc, count] of hotspots) {
      if (count > 100) {
        console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${count} times`);
      }
    }
    
    // Check if we made progress
    expect(instrCount).toBeGreaterThan(10000);
    expect(stuck).toBe(false);
  });
});
