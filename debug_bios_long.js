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
const gp0Log = [];
const gp1Log = [];

const origWriteGP0 = sys.gpu.writeGP0.bind(sys.gpu);
const origWriteGP1 = sys.gpu.writeGP1.bind(sys.gpu);

sys.gpu.writeGP0 = function(val) {
  gp0Commands++;
  const cmd = (val >>> 24) & 0xff;
  gp0Log.push(`GP0[${gp0Commands}]: cmd=0x${cmd.toString(16)} val=0x${val.toString(16)}`);
  return origWriteGP0(val);
};

sys.gpu.writeGP1 = function(val) {
  gp1Commands++;
  const cmd = (val >>> 24) & 0xff;
  gp1Log.push(`GP1[${gp1Commands}]: cmd=0x${cmd.toString(16)} val=0x${val.toString(16)}`);
  return origWriteGP1(val);
};

// Track IO writes
const ioLog = new Map();
const origAsWrite32 = sys.as.write32.bind(sys.as);
sys.as.write32 = function(addr, val) {
  const a = addr >>> 0;
  if (a >= 0x1f801800 && a <= 0x1f801820) { // GPU/DMA region
    const count = ioLog.get(a) || 0;
    ioLog.set(a, count + 1);
    if (count === 0) { // First write to this address
      console.log(`IO Write: [0x${a.toString(16)}] = 0x${val.toString(16)}`);
    }
  }
  return origAsWrite32(addr, val);
};

sys.loadBIOS(biosBytes);

// Don't override PC - loadBIOS should set it correctly
console.log(`BIOS loaded. Initial PC: 0x${sys.cpu.pc.toString(16)}`);

// Monitor interrupts
let interruptCount = 0;
const origIntcRaise = sys.intc.raise.bind(sys.intc);
sys.intc.raise = function(irq) {
  interruptCount++;
  if (interruptCount <= 10) {
    console.log(`Interrupt raised: IRQ ${irq} (total: ${interruptCount})`);
  }
  return origIntcRaise(irq);
};

console.log('Starting BIOS execution (10 seconds)...');
console.log('----------------------------------------');

const CYCLES_PER_SECOND = 33_868_800;
const TOTAL_SECONDS = 10;
const CYCLES_PER_UPDATE = 1000000; // 1M cycles per update
const INSTRUCTIONS_PER_BATCH = 10000;

let totalCycles = 0;
let instructionCount = 0;

// Track PC progression
let lastPC = sys.cpu.pc;
let pcStuckCount = 0;

const totalUpdates = Math.floor((TOTAL_SECONDS * CYCLES_PER_SECOND) / CYCLES_PER_UPDATE);
console.log(`Will run ${totalUpdates} updates (${TOTAL_SECONDS} seconds)`);

for (let i = 0; i < totalUpdates; i++) {
  // Run batch (approximation: ~1 instruction per cycle)
  for (let j = 0; j < INSTRUCTIONS_PER_BATCH; j++) {
    sys.stepCpu(1);
  }
  sys.stepCycles(CYCLES_PER_UPDATE);
  instructionCount += INSTRUCTIONS_PER_BATCH;
  totalCycles += CYCLES_PER_UPDATE;
  
  // Check progress every second
  if (totalCycles % CYCLES_PER_SECOND === 0) {
    const seconds = totalCycles / CYCLES_PER_SECOND;
    console.log(`\n=== After ${seconds} second(s) ===`);
    console.log(`PC: 0x${sys.cpu.pc.toString(16)}`);
    console.log(`Instructions: ~${instructionCount}`);
    console.log(`GP0 commands: ${gp0Commands}`);
    console.log(`GP1 commands: ${gp1Commands}`);
    console.log(`Interrupts: ${interruptCount}`);
    console.log(`GPU Status: 0x${sys.gpu.status.toString(16)}`);
    console.log(`INTC Status: 0x${sys.intc.status.toString(16)}`);
    console.log(`INTC Mask: 0x${sys.intc.mask.toString(16)}`);
    
    // Check for GPU commands
    if (gp0Commands > 0 || gp1Commands > 0) {
      console.log('GPU COMMANDS DETECTED!');
      break;
    }
    
    // Check if stuck
    if (sys.cpu.pc === lastPC) {
      pcStuckCount++;
      if (pcStuckCount >= 3) {
        console.log('WARNING: PC appears stuck at 0x' + lastPC.toString(16));
      }
    } else {
      pcStuckCount = 0;
      lastPC = sys.cpu.pc;
    }
    
    // Check VRAM for any content
    const vram = sys.gpu.getVRAM();
    let nonZero = 0;
    for (let k = 0; k < Math.min(vram.length, 10000); k++) {
      if (vram[k] !== 0) nonZero++;
    }
    if (nonZero > 0) {
      console.log(`VRAM has ${nonZero} non-zero pixels!`);
      const img = vramToPNG(vram);
      fs.writeFileSync(`vram_at_${seconds}s.png`, img);
      console.log(`Saved vram_at_${seconds}s.png`);
      break;
    }
  }
  
  // Early exit if GPU activity
  if (gp0Commands > 0 || gp1Commands > 0) {
    break;
  }
}

console.log('\n========================================');
console.log('Final Summary:');
console.log(`Total cycles: ${totalCycles}`);
console.log(`Estimated instructions: ${instructionCount}`);
console.log(`Final PC: 0x${sys.cpu.pc.toString(16)}`);
console.log(`Total GP0 commands: ${gp0Commands}`);
console.log(`Total GP1 commands: ${gp1Commands}`);
console.log(`Total interrupts: ${interruptCount}`);

// Show first few GPU commands if any
if (gp0Log.length > 0) {
  console.log('\nFirst GP0 commands:');
  gp0Log.slice(0, 10).forEach(l => console.log('  ' + l));
}
if (gp1Log.length > 0) {
  console.log('\nFirst GP1 commands:');
  gp1Log.slice(0, 10).forEach(l => console.log('  ' + l));
}

// Show IO writes
if (ioLog.size > 0) {
  console.log('\nIO writes to GPU/DMA region:');
  for (const [addr, count] of ioLog.entries()) {
    console.log(`  0x${addr.toString(16)}: ${count} writes`);
  }
}

// Save final VRAM
const vram = sys.gpu.getVRAM();
const img = vramToPNG(vram);
fs.writeFileSync('vram_final.png', img);
console.log('\nFinal VRAM saved to vram_final.png');
