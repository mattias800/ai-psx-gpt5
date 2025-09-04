#!/usr/bin/env node
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';
import * as fs from 'fs';

const biosPath = 'scph1001.bin';
const bios = fs.readFileSync(biosPath);

const sys = new PSXSystem();
sys.loadBIOS(bios);

// Enable DMA timing for realistic transfers
sys.attachDMATiming({ cyclesPerWord: 1 });

// Track GPU accesses
let gpuCommands = [];
let vblankCount = 0;
let lastPC = 0;
let instrCount = 0;

// Hook into GPU to capture commands
const origGP0 = sys.gpu.writeGP0.bind(sys.gpu);
const origGP1 = sys.gpu.writeGP1.bind(sys.gpu);

sys.gpu.writeGP0 = function(val) {
  gpuCommands.push(`GP0: 0x${val.toString(16).padStart(8, '0')}`);
  console.log(`[GPU GP0] Command: 0x${val.toString(16).padStart(8, '0')}`);
  return origGP0(val);
};

sys.gpu.writeGP1 = function(val) {
  gpuCommands.push(`GP1: 0x${val.toString(16).padStart(8, '0')}`);
  console.log(`[GPU GP1] Command: 0x${val.toString(16).padStart(8, '0')}`);
  return origGP1(val);
};

// Track VBLANK interrupts
const origRaise = sys.intc.raise.bind(sys.intc);
sys.intc.raise = function(irq) {
  if (irq === 0) { // VBLANK is IRQ 0
    vblankCount++;
    if (vblankCount % 10 === 0) {
      console.log(`[VBLANK] Count: ${vblankCount}`);
    }
  }
  return origRaise(irq);
};

// Track memory accesses to GPU registers
sys.enableMemTrace({
  output: (line) => {
    if (line.includes('1f801810') || line.includes('1f801814')) {
      console.log(`[GPU REG] ${line}`);
    }
  },
  filter: (op, addr) => {
    const ph = addr >>> 0;
    // Only GPU registers
    return ph === 0x1f801810 || ph === 0x1f801814;
  }
});

// Run for a million cycles (should include several frames)
const maxCycles = 1000000;
let cycleCount = 0;
const cyclesPerStep = 1000;

console.log('Testing BIOS GPU initialization...');
console.log('Looking for GPU commands that would draw the PlayStation logo...\n');

// Step the system
while (cycleCount < maxCycles) {
  sys.stepCycles(cyclesPerStep);
  cycleCount += cyclesPerStep;
  
  // Check if we've seen GPU activity
  if (gpuCommands.length > 0 && gpuCommands.length % 100 === 0) {
    console.log(`\n[Progress] ${cycleCount} cycles, ${gpuCommands.length} GPU commands`);
  }
  
  // Early exit if we see significant GPU activity
  if (gpuCommands.length > 500) {
    console.log('\n[SUCCESS] Significant GPU activity detected!');
    break;
  }
}

// Report results
console.log('\n=== BIOS GPU Test Results ===');
console.log(`Total cycles executed: ${cycleCount}`);
console.log(`VBLANK interrupts: ${vblankCount}`);
console.log(`GPU commands captured: ${gpuCommands.length}`);

if (gpuCommands.length > 0) {
  console.log('\nFirst 20 GPU commands:');
  gpuCommands.slice(0, 20).forEach(cmd => console.log('  ' + cmd));
  
  // Save full command log
  fs.writeFileSync('gpu-commands.log', gpuCommands.join('\n'));
  console.log('\nFull GPU command log saved to gpu-commands.log');
  
  // Analyze commands for logo drawing
  const drawCommands = gpuCommands.filter(cmd => {
    const cmdHex = cmd.split('0x')[1];
    const cmdByte = parseInt(cmdHex.substring(0, 2), 16);
    // Check for polygon/sprite drawing commands
    return (cmdByte >= 0x20 && cmdByte <= 0x7F) || // Drawing primitives
           (cmdByte >= 0xA0 && cmdByte <= 0xDF);   // Image transfer
  });
  
  console.log(`\nDrawing commands found: ${drawCommands.length}`);
  if (drawCommands.length > 0) {
    console.log('Sample drawing commands:');
    drawCommands.slice(0, 10).forEach(cmd => console.log('  ' + cmd));
  }
} else {
  console.log('\n[WARNING] No GPU commands detected!');
  console.log('The BIOS may still be in early initialization.');
  console.log('Try running for more cycles or check hardware initialization.');
}
