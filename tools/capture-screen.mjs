#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';
import { createCanvas } from 'canvas';

const biosPath = 'scph1001.bin';
const bios = fs.readFileSync(biosPath);

const sys = new PSXSystem();
sys.loadBIOS(bios);

// Enable DMA timing for realistic transfers
sys.attachDMATiming({ cyclesPerWord: 1 });

// Track progress
let gpuCommandCount = 0;
let vblankCount = 0;
let cycleCount = 0;

// Hook GPU commands to track activity
const origGP0 = sys.gpu.writeGP0.bind(sys.gpu);
const origGP1 = sys.gpu.writeGP1.bind(sys.gpu);

sys.gpu.writeGP0 = function(val) {
  gpuCommandCount++;
  return origGP0(val);
};

sys.gpu.writeGP1 = function(val) {
  gpuCommandCount++;
  return origGP1(val);
};

// Track VBLANK interrupts
const origRaise = sys.intc.raise.bind(sys.intc);
sys.intc.raise = function(irq) {
  if (irq === 0) { // VBLANK
    vblankCount++;
    if (vblankCount % 60 === 0) { // Every second (60 Hz)
      const seconds = vblankCount / 60;
      console.log(`[Progress] ${seconds.toFixed(1)}s - ${cycleCount.toLocaleString()} cycles, ${gpuCommandCount} GPU commands`);
    }
  }
  return origRaise(irq);
};

// Allow duration override via CLI or env (default 5 seconds)
const parseSeconds = () => {
  const arg = process.argv.find(a => a.startsWith('--seconds='));
  const cli = arg ? Number(arg.split('=')[1]) : NaN;
  const env = Number(process.env.CAPTURE_SEC || process.env.SECONDS || '');
  const s = Number.isFinite(cli) && cli > 0 ? Math.floor(cli) : (Number.isFinite(env) && env > 0 ? Math.floor(env) : 5);
  return s;
};
const secondsToRun = parseSeconds();

console.log(`Running BIOS for ${secondsToRun} hardware seconds...`);
console.log('PSX CPU runs at 33.8688 MHz\n');

// Run for N seconds worth of cycles (33.8688 MHz * seconds)
const targetCycles = Math.floor(33.8688 * 1_000_000 * secondsToRun);

const startTime = Date.now();
const startCpuCycles = (sys.cpu.s.cycles >>> 0);
const targetCpuCycles = (startCpuCycles + targetCycles) >>> 0;
let nextProgressAt = 10_000_000; // cycles

while ((sys.cpu.s.cycles >>> 0) < targetCpuCycles) {
  const before = (sys.cpu.s.cycles >>> 0);
  // Step one instruction; CPU updates its internal cycle counter
  sys.cpu.step();
  const after = (sys.cpu.s.cycles >>> 0);
  const delta = (after - before) >>> 0;
  if (delta > 0) {
    sys.stepCycles(delta); // advance hardware timers/DMAs by actual CPU cycles
    cycleCount += delta;
  } else {
    // Fallback to avoid infinite loop on unexpected zero-delta
    sys.stepCycles(1);
    cycleCount += 1;
  }

  // Show progress every 10 million cycles
  if (cycleCount >= nextProgressAt) {
    const elapsed = (Date.now() - startTime) / 1000;
    const percent = (cycleCount / targetCycles * 100).toFixed(1);
    console.log(`[${percent}%] ${cycleCount.toLocaleString()} cycles in ${elapsed.toFixed(1)}s`);
    nextProgressAt += 10_000_000;
  }
}

const elapsed = (Date.now() - startTime) / 1000;
console.log(`\nCompleted ${cycleCount.toLocaleString()} cycles in ${elapsed.toFixed(1)}s`);
console.log(`VBLANKs: ${vblankCount} (${(vblankCount/60).toFixed(1)} seconds)`);
console.log(`GPU commands: ${gpuCommandCount}`);

// Capture VRAM to PNG
console.log('\nCapturing VRAM to PNG...');

// PSX VRAM is 1024x512 16-bit pixels
const VRAM_WIDTH = 1024;
const VRAM_HEIGHT = 512;

// Create canvas for output
const canvas = createCanvas(VRAM_WIDTH, VRAM_HEIGHT);
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(VRAM_WIDTH, VRAM_HEIGHT);

// Get VRAM data from GPU
const vram = sys.gpu.vram;

// Convert 16-bit VRAM to 32-bit RGBA
for (let y = 0; y < VRAM_HEIGHT; y++) {
  for (let x = 0; x < VRAM_WIDTH; x++) {
    const vramIndex = y * VRAM_WIDTH + x;
    const pixel16 = vram[vramIndex] || 0;
    
    // Extract 5-bit RGB components from 16-bit color
    const r5 = (pixel16 & 0x1F);
    const g5 = ((pixel16 >> 5) & 0x1F);
    const b5 = ((pixel16 >> 10) & 0x1F);
    
    // Convert 5-bit to 8-bit
    const r8 = (r5 << 3) | (r5 >> 2);
    const g8 = (g5 << 3) | (g5 >> 2);
    const b8 = (b5 << 3) | (b5 >> 2);
    
    // Set pixel in image data
    const imgIndex = (y * VRAM_WIDTH + x) * 4;
    imageData.data[imgIndex] = r8;
    imageData.data[imgIndex + 1] = g8;
    imageData.data[imgIndex + 2] = b8;
    imageData.data[imgIndex + 3] = 255; // Alpha
  }
}

ctx.putImageData(imageData, 0, 0);

// Save full VRAM
const fullBuffer = canvas.toBuffer('image/png');
fs.writeFileSync('vram-full.png', fullBuffer);
console.log('Saved: vram-full.png (1024x512)');

// Also save just the visible area (typically 0,0 to 640,480 or 320,240)
const visCanvas = createCanvas(640, 480);
const visCtx = visCanvas.getContext('2d');
visCtx.drawImage(canvas, 0, 0, 640, 480, 0, 0, 640, 480);
const visBuffer = visCanvas.toBuffer('image/png');
fs.writeFileSync('screen.png', visBuffer);
console.log('Saved: screen.png (640x480 visible area)');

// Check if there's any non-black content
let hasContent = false;
for (let i = 0; i < vram.length; i++) {
  if (vram[i] !== 0) {
    hasContent = true;
    break;
  }
}

if (hasContent) {
  console.log('\n✅ VRAM contains data! Check the PNG files.');
} else {
  console.log('\n⚠️  VRAM appears to be empty (all black).');
  console.log('The BIOS may need more time or additional hardware emulation.');
}

// Show GPU status
const gpuStatus = sys.gpu.readGP1();
console.log(`\nGPU Status: 0x${gpuStatus.toString(16).padStart(8, '0')}`);
