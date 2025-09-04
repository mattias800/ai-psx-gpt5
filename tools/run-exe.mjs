#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';
import { createCanvas } from 'canvas';

const exePath = process.argv[2] || 'test.exe';

if (!fs.existsSync(exePath)) {
  console.error(`File not found: ${exePath}`);
  process.exit(1);
}

console.log(`Loading PSX-EXE: ${exePath}`);
const exeData = fs.readFileSync(exePath);

// Parse PSX-EXE header
const magic = exeData.toString('ascii', 0, 8);
if (magic !== 'PS-X EXE') {
  console.error('Not a valid PSX-EXE file!');
  process.exit(1);
}

const initialPC = exeData.readUInt32LE(0x10);
const initialGP = exeData.readUInt32LE(0x14);
const loadAddr = exeData.readUInt32LE(0x18);
const fileSize = exeData.readUInt32LE(0x1C);
const stackPtr = exeData.readUInt32LE(0x30);

console.log(`\nPSX-EXE Header:`);
console.log(`  Entry Point: 0x${initialPC.toString(16).padStart(8, '0')}`);
console.log(`  Load Address: 0x${loadAddr.toString(16).padStart(8, '0')}`);
console.log(`  Code Size: ${fileSize} bytes`);
console.log(`  Stack: 0x${stackPtr.toString(16).padStart(8, '0')}`);

// Create PSX system
const sys = new PSXSystem();

// Load code into RAM (skip the 2048-byte header)
const code = exeData.slice(2048, 2048 + fileSize);
console.log(`\nLoading ${code.length} bytes of code to 0x${loadAddr.toString(16).padStart(8, '0')}`);

// Convert virtual address to physical for RAM loading
const physAddr = loadAddr & 0x1FFFFFFF;
for (let i = 0; i < code.length; i++) {
  sys.ram.write8(physAddr + i, code[i]);
}

// Set CPU registers
const cpuAny = sys.cpu;
// The R3000A has a public 's' property for state
if (cpuAny.s) {
  cpuAny.s.pc = initialPC;
  cpuAny.s.nextPc = initialPC + 4;
  cpuAny.s.regs[28] = initialGP; // GP register  
  cpuAny.s.regs[29] = stackPtr;  // SP register
  console.log(`CPU state initialized: PC=0x${initialPC.toString(16).padStart(8, '0')}`);
} else {
  console.warn('Warning: Could not access CPU state directly');
}

// Track GPU commands
let gpuCommands = [];
const origGP0 = sys.gpu.writeGP0.bind(sys.gpu);
const origGP1 = sys.gpu.writeGP1.bind(sys.gpu);

sys.gpu.writeGP0 = function(val) {
  const cmd = (val >>> 24) & 0xFF;
  gpuCommands.push(`GP0: 0x${val.toString(16).padStart(8, '0')} (cmd: 0x${cmd.toString(16)})`);
  console.log(`[GPU GP0] 0x${val.toString(16).padStart(8, '0')}`);
  return origGP0(val);
};

sys.gpu.writeGP1 = function(val) {
  const cmd = (val >>> 24) & 0xFF;
  gpuCommands.push(`GP1: 0x${val.toString(16).padStart(8, '0')} (cmd: 0x${cmd.toString(16)})`);
  console.log(`[GPU GP1] 0x${val.toString(16).padStart(8, '0')}`);
  return origGP1(val);
};

// Run for 10000 instructions (should be enough for our simple test)
console.log(`\nExecuting from 0x${initialPC.toString(16).padStart(8, '0')}...\n`);

for (let i = 0; i < 10000; i++) {
  const oldPC = cpuAny.s ? cpuAny.s.pc : 0;
  sys.stepCpu(1);
  const newPC = cpuAny.s ? cpuAny.s.pc : 0;
  
  // Check if we're in an infinite loop (jump to self)
  if (newPC === oldPC && oldPC === 0x80010000 + 168) { // Our loop is at the end of the code
    console.log(`\nReached infinite loop at 0x${newPC.toString(16).padStart(8, '0')} after ${i + 1} instructions`);
    break;
  }
}

console.log(`\nGPU Commands executed: ${gpuCommands.length}`);
if (gpuCommands.length > 0) {
  console.log('\nAll GPU commands:');
  gpuCommands.forEach(cmd => console.log('  ' + cmd));
}

// Capture VRAM to PNG
console.log('\nCapturing VRAM...');

const VRAM_WIDTH = 1024;
const VRAM_HEIGHT = 512;
const canvas = createCanvas(VRAM_WIDTH, VRAM_HEIGHT);
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(VRAM_WIDTH, VRAM_HEIGHT);

// Get VRAM data
const vram = sys.gpu.vram;

// Convert 16-bit to 32-bit RGBA
let hasContent = false;
for (let y = 0; y < VRAM_HEIGHT; y++) {
  for (let x = 0; x < VRAM_WIDTH; x++) {
    const vramIndex = y * VRAM_WIDTH + x;
    const pixel16 = vram[vramIndex] || 0;
    
    if (pixel16 !== 0) hasContent = true;
    
    // PSX uses BGR format
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

// Save images
const fullBuffer = canvas.toBuffer('image/png');
fs.writeFileSync('exe-vram.png', fullBuffer);
console.log('Saved: exe-vram.png (1024x512)');

// Save visible area
const visCanvas = createCanvas(640, 480);
const visCtx = visCanvas.getContext('2d');
visCtx.drawImage(canvas, 0, 0, 640, 480, 0, 0, 640, 480);
const visBuffer = visCanvas.toBuffer('image/png');
fs.writeFileSync('exe-screen.png', visBuffer);
console.log('Saved: exe-screen.png (640x480)');

if (hasContent) {
  console.log('\n✅ SUCCESS! VRAM contains graphics data!');
  console.log('Check exe-screen.png to see the output.');
} else {
  console.log('\n⚠️  VRAM is empty. The program may not have drawn anything.');
}
