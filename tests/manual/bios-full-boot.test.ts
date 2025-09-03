import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Full BIOS boot with all systems', () => {
  it('boots BIOS with display, SPU, and DMA', () => {
    const sys = new PSXSystem();
    
    // Try to load real BIOS
    const biosNames = ['SCPH1001.BIN', 'scph1001.bin', 'PC1001.BIN', 'pc1001.bin'];
    let biosData: Uint8Array | null = null;
    
    for (const name of biosNames) {
      const biosPath = path.join(process.cwd(), name);
      if (fs.existsSync(biosPath)) {
        console.log('✓ Found BIOS:', biosPath);
        biosData = new Uint8Array(fs.readFileSync(biosPath));
        break;
      }
    }
    
    if (!biosData) {
      console.log('❌ No BIOS found, using test pattern');
      biosData = new Uint8Array(512 * 1024);
      // This test really needs a real BIOS
      return;
    }
    
    // Load BIOS and initialize all subsystems
    sys.loadBIOS(biosData);
    sys.attachDisplay({ cyclesPerLine: 3413, linesPerFrame: 263 });
    sys.attachSPUAudio({ sampleRate: 44100, chunkFrames: 64 });
    sys.attachDMATiming({ cyclesPerWord: 8 });
    
    // Track GPU commands
    let gpuCommandCount = 0;
    let lastGpuCommand = 0;
    const gpu = sys.gpu as any;
    const originalWriteGP0 = gpu.writeGP0?.bind(gpu);
    const originalWriteGP1 = gpu.writeGP1?.bind(gpu);
    
    if (originalWriteGP0) {
      gpu.writeGP0 = (val: number) => {
        gpuCommandCount++;
        lastGpuCommand = val;
        const cmd = (val >>> 24) & 0xff;
        if (gpuCommandCount <= 10) {
          console.log(`GPU GP0 command #${gpuCommandCount}: 0x${val.toString(16).padStart(8, '0')} (cmd: 0x${cmd.toString(16)})`);
        }
        originalWriteGP0(val);
      };
    }
    
    if (originalWriteGP1) {
      gpu.writeGP1 = (val: number) => {
        const cmd = (val >>> 24) & 0x3f;
        console.log(`GPU GP1 command: 0x${val.toString(16).padStart(8, '0')} (cmd: 0x${cmd.toString(16)})`);
        originalWriteGP1(val);
      };
    }
    
    // Track VRAM changes
    let vramChangeCount = 0;
    let lastVramChecksum = 0;
    
    const checkVram = () => {
      if (gpu && gpu.vram) {
        const vram = gpu.vram as Uint16Array;
        let checksum = 0;
        // Sample VRAM for changes
        for (let i = 0; i < vram.length; i += 512) {
          checksum = (checksum + vram[i]) | 0;
        }
        
        if (checksum !== lastVramChecksum && lastVramChecksum !== 0) {
          vramChangeCount++;
          console.log(`VRAM change #${vramChangeCount} detected (checksum: ${checksum.toString(16)})`);
        }
        lastVramChecksum = checksum;
      }
    };
    
    // Run emulator with proper timing
    console.log('\n=== Starting BIOS boot sequence ===\n');
    
    const targetCycles = 33868800; // 1 second of PSX time
    const cyclesPerStep = 1000;
    let totalCycles = 0;
    let instructionCount = 0;
    
    // Monitor for PSX logo detection
    let psxLogoDetected = false;
    const checkForLogo = () => {
      if (gpu && gpu.vram) {
        const vram = gpu.vram as Uint16Array;
        // Check for typical PSX logo patterns (white on black background)
        // The logo typically has high contrast areas
        let whitePixels = 0;
        let blackPixels = 0;
        
        for (let i = 0; i < Math.min(512*240, vram.length); i++) {
          const pixel = vram[i];
          if (pixel === 0x7FFF || pixel === 0xFFFF) whitePixels++;
          else if (pixel === 0x0000) blackPixels++;
        }
        
        // PSX logo typically has both black background and white text
        if (whitePixels > 100 && blackPixels > 10000) {
          psxLogoDetected = true;
          console.log(`\n🎮 PSX Logo detected! White pixels: ${whitePixels}, Black pixels: ${blackPixels}\n`);
        }
      }
    };
    
    // Run for up to 1 second of emulated time
    while (totalCycles < targetCycles) {
      // Step the system
      sys.stepCycles(cyclesPerStep);
      totalCycles += cyclesPerStep;
      
      // Also step some CPU instructions
      for (let i = 0; i < 100; i++) {
        try {
          sys.stepCpu(1);
          instructionCount++;
        } catch (e) {
          console.log(`CPU error after ${instructionCount} instructions: ${e}`);
          break;
        }
      }
      
      // Check for changes every 100k cycles (about 30 times per second)
      if (totalCycles % 100000 === 0) {
        checkVram();
        checkForLogo();
        
        if (psxLogoDetected) {
          console.log('✅ PSX Logo successfully displayed!');
          break;
        }
      }
      
      // Progress indicator every 10th of a second
      if (totalCycles % 3386880 === 0) {
        const progress = Math.floor((totalCycles / targetCycles) * 100);
        console.log(`Progress: ${progress}% (${totalCycles} cycles, ${instructionCount} instructions)`);
      }
    }
    
    // Final report
    console.log('\n=== BIOS Boot Report ===');
    console.log(`Total cycles: ${totalCycles}`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`GPU commands sent: ${gpuCommandCount}`);
    console.log(`VRAM changes: ${vramChangeCount}`);
    console.log(`PSX Logo detected: ${psxLogoDetected ? 'YES ✅' : 'NO ❌'}`);
    
    // Save a VRAM dump for inspection
    if (gpu && gpu.vram) {
      const vram = gpu.vram as Uint16Array;
      console.log('\nVRAM sample (first 32 pixels):');
      const sample = Array.from(vram.slice(0, 32))
        .map(p => p.toString(16).padStart(4, '0'))
        .join(' ');
      console.log(sample);
    }
    
    // Expectations
    expect(gpuCommandCount).toBeGreaterThan(0);
    expect(vramChangeCount).toBeGreaterThan(0);
    
    if (gpuCommandCount > 100 && vramChangeCount > 5) {
      console.log('\n🎉 BIOS animation appears to be working!');
    } else if (gpuCommandCount > 0) {
      console.log('\n⚠️  BIOS is sending GPU commands but animation may not be complete');
    } else {
      console.log('\n❌ BIOS boot incomplete - no GPU activity detected');
    }
  });
});
