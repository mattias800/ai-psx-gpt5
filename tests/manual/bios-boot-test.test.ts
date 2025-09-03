import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('BIOS boot test', () => {
  it('runs BIOS until animation or failure', () => {
    const sys = new PSXSystem();
    
    // Try to load real BIOS if available
    const biosPath = path.join(process.cwd(), 'SCPH1001.BIN');
    let biosData: Uint8Array;
    
    if (fs.existsSync(biosPath)) {
      console.log('Using real BIOS from', biosPath);
      biosData = new Uint8Array(fs.readFileSync(biosPath));
    } else {
      console.log('Using minimal test BIOS');
      // Create a minimal test BIOS
      biosData = new Uint8Array(512 * 1024);
      const view = new DataView(biosData.buffer);
      // Set reset vector to simple infinite loop
      view.setUint32(0x0, 0x1000ffff, true); // b -4
      view.setUint32(0x4, 0x00000000, true); // nop
    }
    
    sys.loadBIOS(biosData);
    sys.attachDisplay();
    
    // Track GPU state changes
    let frameCount = 0;
    let lastVramHash = '';
    let animationDetected = false;
    
    const checkVram = () => {
      const gpu = sys.gpu as any;
      if (gpu && gpu.vram) {
        // Simple hash of VRAM to detect changes
        const vram = gpu.vram as Uint16Array;
        let hash = 0;
        for (let i = 0; i < Math.min(1024, vram.length); i += 64) {
          hash = ((hash << 5) - hash + vram[i]) | 0;
        }
        const hashStr = hash.toString(16);
        
        if (hashStr !== lastVramHash && lastVramHash !== '') {
          frameCount++;
          console.log(`Frame ${frameCount}: VRAM changed (hash: ${hashStr})`);
          if (frameCount >= 3) {
            animationDetected = true;
            console.log('✓ BIOS animation detected!');
          }
        }
        lastVramHash = hashStr;
      }
    };
    
    // Track execution
    let stepCount = 0;
    let lastPC = 0;
    let jumpToZeroCount = 0;
    const maxSteps = 1000000; // Run for up to 1M instructions
    const maxJumpToZero = 5; // Stop after 5 jumps to zero
    
    sys.enableCpuTrace({
      output: (line) => {
        const pcMatch = line.match(/pc=([0-9a-f]{8})/);
        if (pcMatch) {
          const pc = parseInt(pcMatch[1], 16);
          lastPC = pc;
          
          // Check for jump to zero
          if (pc === 0) {
            jumpToZeroCount++;
            console.log(`⚠️  Jump to 0 detected (count: ${jumpToZeroCount})`);
            if (jumpToZeroCount >= maxJumpToZero) {
              console.log(`❌ Too many jumps to zero, likely missing function entries`);
            }
          }
        }
      }
    });
    
    // Run the emulator
    console.log('Starting BIOS boot...');
    for (let i = 0; i < maxSteps; i++) {
      stepCount++;
      
      // Step CPU
      sys.stepCpu(1);
      
      // Check for animation every 10000 instructions
      if (i % 10000 === 0) {
        checkVram();
        sys.stepCycles(1000); // Also step timing
        
        if (animationDetected) {
          console.log(`✅ BIOS animation working! (after ${stepCount} instructions)`);
          break;
        }
      }
      
      // Stop if too many failures
      if (jumpToZeroCount >= maxJumpToZero) {
        console.log(`Stopped after ${stepCount} instructions due to failures`);
        break;
      }
    }
    
    // Final status
    console.log(`\n=== Final Status ===`);
    console.log(`Steps executed: ${stepCount}`);
    console.log(`Last PC: 0x${lastPC.toString(16).padStart(8, '0')}`);
    console.log(`Frames detected: ${frameCount}`);
    console.log(`Jump to zero count: ${jumpToZeroCount}`);
    console.log(`Animation detected: ${animationDetected}`);
    
    // Check if we have the real animation
    if (animationDetected) {
      console.log('\n🎉 SUCCESS: BIOS animation is functioning!');
    } else if (jumpToZeroCount > 0) {
      console.log('\n⚠️  PARTIAL: BIOS boots but hits missing function entries');
    } else {
      console.log('\n❓ UNKNOWN: BIOS may be running but no animation detected yet');
    }
    
    expect(jumpToZeroCount).toBeLessThan(maxJumpToZero);
  });
});
