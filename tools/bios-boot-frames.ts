import { PSXSystem } from '../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';
import { createCanvas } from 'canvas';

// PSX runs at 33.8688 MHz
const PSX_CLOCK = 33868800;
const CYCLES_PER_SECOND = PSX_CLOCK;
const TOTAL_SECONDS = 3;
const TOTAL_CYCLES = CYCLES_PER_SECOND * TOTAL_SECONDS;

// Frame capture settings
const FRAMES_PER_SECOND = 60;
const CYCLES_PER_FRAME = Math.floor(CYCLES_PER_SECOND / FRAMES_PER_SECOND);

function saveFrameAsPNG(vram: Uint16Array, frameNumber: number, outputDir: string) {
  // PSX VRAM is 1024x512 16-bit pixels
  const VRAM_WIDTH = 1024;
  const VRAM_HEIGHT = 512;
  
  // Create canvas for the frame
  const canvas = createCanvas(VRAM_WIDTH, VRAM_HEIGHT);
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(VRAM_WIDTH, VRAM_HEIGHT);
  
  // Convert 16-bit BGR555 to 32-bit RGBA
  for (let y = 0; y < VRAM_HEIGHT; y++) {
    for (let x = 0; x < VRAM_WIDTH; x++) {
      const vramIndex = y * VRAM_WIDTH + x;
      const pixel = vram[vramIndex];
      
      // Extract BGR555 components
      const b = (pixel & 0x7C00) >> 10;
      const g = (pixel & 0x03E0) >> 5;
      const r = (pixel & 0x001F);
      
      // Convert 5-bit to 8-bit
      const r8 = (r << 3) | (r >> 2);
      const g8 = (g << 3) | (g >> 2);
      const b8 = (b << 3) | (b >> 2);
      
      // Write to image data
      const imgIndex = (y * VRAM_WIDTH + x) * 4;
      imageData.data[imgIndex] = r8;
      imageData.data[imgIndex + 1] = g8;
      imageData.data[imgIndex + 2] = b8;
      imageData.data[imgIndex + 3] = 255; // Alpha
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Save as PNG
  const filename = path.join(outputDir, `frame_${frameNumber.toString().padStart(4, '0')}.png`);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  
  return filename;
}

async function main() {
  console.log('=== PSX BIOS Boot Frame Capture ===');
  console.log(`Running for ${TOTAL_SECONDS} seconds (${TOTAL_CYCLES.toLocaleString()} cycles)`);
  console.log(`Capturing at ${FRAMES_PER_SECOND} FPS\n`);
  
  // Create output directory
  const outputDir = path.join(process.cwd(), 'bios-frames');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Initialize system
  const sys = new PSXSystem();
  
  // Load BIOS
  const biosPath = path.join(process.cwd(), 'scph1001.bin');
  if (!fs.existsSync(biosPath)) {
    console.error('BIOS file not found at:', biosPath);
    process.exit(1);
  }
  
  const biosBytes = fs.readFileSync(biosPath);
  sys.loadBIOS(biosBytes);
  
  // Connect controller and memory card
  sys.setPadButtons(0xFFFF); // No buttons pressed
  sys.setMemcardPresent(true);
  
  // Attach display for proper timing
  sys.attachDisplay();
  
  // Set initial PC
  sys.cpu.s.pc = 0xbfc00000;
  sys.cpu.s.nextPc = 0xbfc00004;
  
  let totalCycles = 0;
  let frameNumber = 0;
  let nextFrameCapture = 0;
  let instructionCount = 0;
  let lastProgress = 0;
  
  // Track key events
  let reachedShell = false;
  let memClearDone = false;
  
  sys.enableCpuTrace({
    output: (line) => {
      instructionCount++;
      const pc = parseInt(line.split(' ')[0].split('=')[1], 16);
      
      // Track milestones
      if (pc === 0xbfc00150 && !reachedShell) {
        console.log(`[${(totalCycles/1000000).toFixed(2)}ms] BIOS reached shell/monitor entry point`);
        reachedShell = true;
      }
      if (pc === 0xbfc003cc && !memClearDone) {
        console.log(`[${(totalCycles/1000000).toFixed(2)}ms] Memory clear completed`);
        memClearDone = true;
      }
    }
  });
  
  console.log('Starting BIOS execution...\n');
  
  try {
    while (totalCycles < TOTAL_CYCLES) {
      // Step the CPU
      try {
        sys.cpu.step();
      } catch (cpuError: any) {
        // Ignore unmapped address errors and continue
        if (!cpuError.message?.includes('Unmapped')) {
          throw cpuError;
        }
      }
      
      // Step the scheduler (handles timing, interrupts, etc.)
      const cyclesThisStep = 1; // Simplified - each instruction = 1 cycle
      sys.stepCycles(cyclesThisStep);
      totalCycles += cyclesThisStep;
      
      // Capture frame if it's time
      if (totalCycles >= nextFrameCapture) {
        // Get VRAM contents from GPU
        const vram = sys.gpu.getVRAM();
        const filename = saveFrameAsPNG(vram, frameNumber, outputDir);
        
        // Show progress every second
        const currentSecond = Math.floor(frameNumber / FRAMES_PER_SECOND);
        if (currentSecond > lastProgress) {
          console.log(`[${currentSecond}s] Captured frame ${frameNumber} -> ${path.basename(filename)}`);
          lastProgress = currentSecond;
        }
        
        frameNumber++;
        nextFrameCapture += CYCLES_PER_FRAME;
      }
      
      // Limit instructions per iteration to prevent blocking
      if (instructionCount % 100000 === 0) {
        // Allow event loop to run
        await new Promise(resolve => setImmediate(resolve));
        
        // Show detailed progress
        const percent = (totalCycles / TOTAL_CYCLES * 100).toFixed(1);
        process.stdout.write(`\rProgress: ${percent}% | Instructions: ${instructionCount.toLocaleString()} | Cycles: ${totalCycles.toLocaleString()}`);
      }
    }
  } catch (error: any) {
    console.error('\n\nError during execution:', error.message);
  }
  
  console.log('\n\n=== Execution Complete ===');
  console.log(`Total instructions executed: ${instructionCount.toLocaleString()}`);
  console.log(`Total cycles: ${totalCycles.toLocaleString()}`);
  console.log(`Frames captured: ${frameNumber}`);
  console.log(`Output directory: ${outputDir}`);
  
  // Check if any visible content was rendered
  const vram = sys.gpu.getVRAM();
  let hasContent = false;
  for (let i = 0; i < vram.length; i++) {
    if (vram[i] !== 0) {
      hasContent = true;
      break;
    }
  }
  
  if (hasContent) {
    console.log('\n✓ VRAM contains rendered content');
  } else {
    console.log('\n⚠ VRAM is still blank - BIOS may need more time or MDEC implementation');
  }
  
  // Generate summary image showing first, middle, and last frames
  if (frameNumber >= 3) {
    console.log('\nGenerating summary image...');
    const summaryCanvas = createCanvas(VRAM_WIDTH * 3, VRAM_HEIGHT);
    const ctx = summaryCanvas.getContext('2d');
    
    // Load first, middle, and last frames
    const frames = [
      path.join(outputDir, 'frame_0000.png'),
      path.join(outputDir, `frame_${Math.floor(frameNumber/2).toString().padStart(4, '0')}.png`),
      path.join(outputDir, `frame_${(frameNumber-1).toString().padStart(4, '0')}.png`)
    ];
    
    // Note: canvas doesn't support loading images in Node.js directly
    // We'll just save what we have
    console.log('Summary frames saved in:', outputDir);
  }
}

// Simplified VRAM getter for GPU (we'll need to add this method)
declare module '../packages/gpu/src/gpu' {
  interface GPU {
    getVRAM(): Uint16Array;
  }
}

main().catch(console.error);
