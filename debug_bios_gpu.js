import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import { createCanvas } from 'canvas';

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

// Load the BIOS
const biosBytes = fs.readFileSync('./scph1001.bin');
const sys = new PSXSystem();

// Hook into GPU to monitor commands
let gp0Commands = 0;
let gp1Commands = 0;
let lastGp0Cmd = 0;
let lastGp1Cmd = 0;

const origWriteGP0 = sys.gpu.writeGP0.bind(sys.gpu);
const origWriteGP1 = sys.gpu.writeGP1.bind(sys.gpu);

sys.gpu.writeGP0 = function(val) {
  gp0Commands++;
  lastGp0Cmd = val >>> 0;
  const cmd = (val >>> 24) & 0xff;
  if (cmd === 0x60 || cmd === 0x64) {
    console.log(`GP0 Rectangle: cmd=0x${cmd.toString(16)} color=0x${(val & 0xffffff).toString(16)}`);
  } else if (cmd === 0xa0) {
    console.log(`GP0 Image Load (CPU->VRAM)`);
  } else if (cmd === 0xc0) {
    console.log(`GP0 Image Store (VRAM->CPU)`);
  } else if (cmd === 0xe1) {
    console.log(`GP0 Set Texture Base`);
  } else if (cmd === 0xe3 || cmd === 0xe4) {
    console.log(`GP0 Set Draw Area: cmd=0x${cmd.toString(16)}`);
  } else if (cmd === 0xe5) {
    console.log(`GP0 Set Drawing Offset`);
  }
  return origWriteGP0(val);
};

sys.gpu.writeGP1 = function(val) {
  gp1Commands++;
  lastGp1Cmd = val >>> 0;
  const cmd = (val >>> 24) & 0xff;
  if (cmd === 0x00) {
    console.log(`GP1 Reset GPU`);
  } else if (cmd === 0x01) {
    console.log(`GP1 Reset Command Buffer`);
  } else if (cmd === 0x02) {
    console.log(`GP1 Acknowledge IRQ`);
  } else if (cmd === 0x03) {
    console.log(`GP1 Display Enable: ${val & 1 ? 'OFF' : 'ON'}`);
  } else if (cmd === 0x04) {
    console.log(`GP1 DMA Direction: 0x${(val & 3).toString(16)}`);
  } else if (cmd === 0x05) {
    console.log(`GP1 Display Area Start: x=${val & 0x3ff}, y=${(val >> 10) & 0x1ff}`);
  } else if (cmd === 0x06) {
    const x1 = val & 0xfff;
    const x2 = (val >> 12) & 0xfff;
    console.log(`GP1 Horizontal Display Range: ${x1}-${x2}`);
  } else if (cmd === 0x07) {
    const y1 = val & 0x3ff;
    const y2 = (val >> 10) & 0x3ff;
    console.log(`GP1 Vertical Display Range: ${y1}-${y2}`);
  } else if (cmd === 0x08) {
    console.log(`GP1 Display Mode: 0x${val.toString(16)}`);
  }
  return origWriteGP1(val);
};

sys.loadBIOS(biosBytes);

// Set CPU to start at BIOS reset vector
sys.cpu.pc = 0xbfc00000;

// Monitor DMA activity
let dmaTransfers = 0;
const origDmaWrite32 = sys.dmac.write32.bind(sys.dmac);
sys.dmac.write32 = function(addr, val) {
  const result = origDmaWrite32(addr, val);
  if ((addr & 0xf) === 0x8) { // Control register
    const channel = (addr >>> 4) & 0x7;
    if (val & 0x01000000) { // Start bit
      dmaTransfers++;
      console.log(`DMA${channel} transfer started: control=0x${val.toString(16)}`);
    }
  }
  return result;
};

console.log('Starting BIOS execution with GPU monitoring...');
console.log('----------------------------------------');

const CYCLES_PER_SECOND = 33_868_800;
const CYCLES_PER_FRAME = Math.floor(CYCLES_PER_SECOND / 60);
const TOTAL_FRAMES = 60; // Run for 1 second

let frameCount = 0;
let nonZeroPixels = 0;

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  // Run CPU for one frame worth of cycles
  for (let i = 0; i < CYCLES_PER_FRAME; i += 100) {
    sys.stepCpu(100);
    sys.stepCycles(100);
  }
  
  // Check VRAM content every 10 frames
  if (frame % 10 === 0) {
    const vram = sys.gpu.getVRAM();
    nonZeroPixels = 0;
    for (let i = 0; i < vram.length; i++) {
      if (vram[i] !== 0) nonZeroPixels++;
    }
    
    if (nonZeroPixels > 0) {
      console.log(`Frame ${frame}: ${nonZeroPixels} non-zero pixels in VRAM`);
      // Capture frame if there's content
      const imageData = vramToPNG(vram);
      const filename = `debug_frame_${frame}.png`;
      fs.writeFileSync(filename, imageData);
      console.log(`  -> Captured to ${filename}`);
      frameCount++;
    }
  }
  
  // Progress report every 20 frames
  if (frame % 20 === 0) {
    console.log(`\nFrame ${frame}/60:`);
    console.log(`  GP0 commands: ${gp0Commands}`);
    console.log(`  GP1 commands: ${gp1Commands}`);
    console.log(`  DMA transfers: ${dmaTransfers}`);
    console.log(`  GPU Status: 0x${sys.gpu.status.toString(16)}`);
    if (lastGp0Cmd) console.log(`  Last GP0: 0x${lastGp0Cmd.toString(16)}`);
    if (lastGp1Cmd) console.log(`  Last GP1: 0x${lastGp1Cmd.toString(16)}`);
  }
}

console.log('\n========================================');
console.log('BIOS execution complete!');
console.log(`Total GP0 commands: ${gp0Commands}`);
console.log(`Total GP1 commands: ${gp1Commands}`);
console.log(`Total DMA transfers: ${dmaTransfers}`);
console.log(`Frames with content captured: ${frameCount}`);
console.log(`Final VRAM non-zero pixels: ${nonZeroPixels}`);

// Capture final frame regardless
const vram = sys.gpu.getVRAM();
const imageData = vramToPNG(vram);
fs.writeFileSync('final_vram.png', imageData);
console.log('Final VRAM saved to final_vram.png');
