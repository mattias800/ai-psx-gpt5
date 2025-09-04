import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import { createCanvas } from 'canvas';

// Load the BIOS
const biosBytes = fs.readFileSync('./scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(biosBytes);

// Set CPU to start at BIOS reset vector
sys.cpu.pc = 0xbfc00000;

// Function to convert VRAM to PNG
function vramToPNG(vram) {
  const canvas = createCanvas(1024, 512);
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(1024, 512);
  const data = imageData.data;
  
  // Convert 16-bit VRAM pixels to RGBA
  for (let y = 0; y < 512; y++) {
    for (let x = 0; x < 1024; x++) {
      const idx = y * 1024 + x;
      const pixel = vram[idx];
      
      // Extract 5-bit RGB components from 16-bit BGR555 format
      const r = ((pixel & 0x001f) << 3) | ((pixel & 0x001c) >> 2);
      const g = ((pixel & 0x03e0) >> 2) | ((pixel & 0x0380) >> 7);
      const b = ((pixel & 0x7c00) >> 7) | ((pixel & 0x7000) >> 12);
      
      const dataIdx = idx * 4;
      data[dataIdx] = r;
      data[dataIdx + 1] = g;
      data[dataIdx + 2] = b;
      data[dataIdx + 3] = 255;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  return canvas.toBuffer('image/png');
}

// Function to capture VRAM to PNG
let frameCount = 0;
function captureFrame() {
  const vram = sys.gpu.getVRAM();
  const imageData = vramToPNG(vram);
  const filename = `vram_frame_${String(frameCount).padStart(4, '0')}.png`;
  fs.writeFileSync(filename, imageData);
  console.log(`Captured frame ${frameCount} to ${filename}`);
  frameCount++;
}

console.log('Starting BIOS execution...');
const CYCLES_PER_SECOND = 33_868_800; // PSX clock rate
const CYCLES_PER_FRAME = Math.floor(CYCLES_PER_SECOND / 60); // ~60 FPS
const TOTAL_FRAMES = 120; // 2 seconds at 60 FPS

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  // Run CPU for one frame worth of cycles
  for (let i = 0; i < CYCLES_PER_FRAME; i += 100) {
    // Step CPU in smaller chunks
    sys.stepCpu(100);
    sys.stepCycles(100);
  }
  
  // Capture VRAM every 10 frames (~6 FPS capture rate)
  if (frame % 10 === 0) {
    captureFrame();
  }
  
  // Progress indicator
  if (frame % 30 === 0) {
    console.log(`Progress: ${Math.round((frame / TOTAL_FRAMES) * 100)}%`);
  }
}

console.log('BIOS execution complete!');
console.log(`Captured ${frameCount} frames`);
