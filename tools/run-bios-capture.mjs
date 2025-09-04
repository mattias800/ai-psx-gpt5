#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';
import { createCanvas } from 'canvas';

console.log('Starting PSX BIOS emulation for 2 seconds...\n');

// Create PSX system
const sys = new PSXSystem();

// Load BIOS
const biosPath = 'scph1001.bin';
if (!fs.existsSync(biosPath)) {
  console.error(`BIOS not found at ${biosPath}`);
  process.exit(1);
}

const bios = fs.readFileSync(biosPath);
sys.loadBIOS(bios);

// Track GPU commands for debugging
let gpuCommandCount = 0;
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

// Run for approximately 2 seconds
// PSX CPU runs at ~33.8MHz, so 2 seconds = ~67,600,000 cycles
// We'll run in chunks and check time periodically
const startTime = Date.now();
const targetDuration = 2000; // 2 seconds in milliseconds
let totalCycles = 0;
let iterations = 0;

console.log('Running BIOS...');
while (Date.now() - startTime < targetDuration) {
  // Run 100,000 cycles at a time (about 3ms of emulated time)
  sys.stepCpu(100000);
  totalCycles += 100000;
  iterations++;
  
  // Show progress every 200ms
  if (iterations % 67 === 0) {
    const elapsed = Date.now() - startTime;
    console.log(`  ${(elapsed/1000).toFixed(1)}s elapsed, ${totalCycles.toLocaleString()} cycles executed`);
  }
}

const actualDuration = Date.now() - startTime;
console.log(`\nEmulation complete:`);
console.log(`  Duration: ${(actualDuration/1000).toFixed(2)} seconds`);
console.log(`  Total cycles: ${totalCycles.toLocaleString()}`);
console.log(`  GPU commands: ${gpuCommandCount.toLocaleString()}`);

// Capture VRAM to PNG
console.log('\nCapturing VRAM...');

const VRAM_WIDTH = 1024;
const VRAM_HEIGHT = 512;
const canvas = createCanvas(VRAM_WIDTH, VRAM_HEIGHT);
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(VRAM_WIDTH, VRAM_HEIGHT);

// Get VRAM data
const vram = sys.gpu.vram;

// Convert 16-bit BGR555 to 32-bit RGBA
let hasContent = false;
let nonZeroPixels = 0;
for (let y = 0; y < VRAM_HEIGHT; y++) {
  for (let x = 0; x < VRAM_WIDTH; x++) {
    const vramIndex = y * VRAM_WIDTH + x;
    const pixel16 = vram[vramIndex] || 0;
    
    if (pixel16 !== 0) {
      hasContent = true;
      nonZeroPixels++;
    }
    
    // PSX uses BGR555 format
    const b5 = (pixel16 & 0x1F);
    const g5 = ((pixel16 >> 5) & 0x1F);
    const r5 = ((pixel16 >> 10) & 0x1F);
    
    // Convert 5-bit to 8-bit
    const r8 = (r5 << 3) | (r5 >> 2);
    const g8 = (g5 << 3) | (g5 >> 2);
    const b8 = (b5 << 3) | (b5 >> 2);
    
    const imgIndex = (y * VRAM_WIDTH + x) * 4;
    imageData.data[imgIndex] = r8;
    imageData.data[imgIndex + 1] = g8;
    imageData.data[imgIndex + 2] = b8;
    imageData.data[imgIndex + 3] = 255;
  }
}

ctx.putImageData(imageData, 0, 0);

// Save full VRAM
const fullBuffer = canvas.toBuffer('image/png');
fs.writeFileSync('bios-2sec-vram.png', fullBuffer);
console.log('Saved: bios-2sec-vram.png (1024x512)');

// Save visible area (640x480)
const visCanvas = createCanvas(640, 480);
const visCtx = visCanvas.getContext('2d');
visCtx.drawImage(canvas, 0, 0, 640, 480, 0, 0, 640, 480);
const visBuffer = visCanvas.toBuffer('image/png');
fs.writeFileSync('bios-2sec-screen.png', visBuffer);
console.log('Saved: bios-2sec-screen.png (640x480)');

// Save a 512x240 region that might contain the logo
const logoCanvas = createCanvas(512, 240);
const logoCtx = logoCanvas.getContext('2d');
// Try different offsets where the logo might be
logoCtx.drawImage(canvas, 0, 0, 512, 240, 0, 0, 512, 240);
const logoBuffer = logoCanvas.toBuffer('image/png');
fs.writeFileSync('bios-2sec-logo.png', logoBuffer);
console.log('Saved: bios-2sec-logo.png (512x240)');

if (hasContent) {
  console.log(`\n✅ VRAM contains graphics data! (${nonZeroPixels.toLocaleString()} non-zero pixels)`);
} else {
  console.log('\n⚠️  VRAM appears to be empty.');
}

// Also check CPU state
console.log(`\nCPU state:`);
if (sys.cpu.s) {
  console.log(`  PC: 0x${sys.cpu.s.pc.toString(16).padStart(8, '0')}`);
  console.log(`  SP: 0x${sys.cpu.s.regs[29].toString(16).padStart(8, '0')}`);
}

console.log('\nDone!');
