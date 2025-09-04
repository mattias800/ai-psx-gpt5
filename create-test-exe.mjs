#!/usr/bin/env node
import * as fs from 'fs';

// MIPS instruction encoders
const LUI  = (rt, imm) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
const ORI  = (rs, rt, imm) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const SW   = (rs, rt, off) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const J    = (target) => (0x02<<26) | ((target >>> 2) & 0x3ffffff);
const NOP  = () => 0x00000000;

// Emit instructions to byte array
function emit(instrs) {
  const u8 = new Uint8Array(instrs.length * 4);
  for (let i = 0; i < instrs.length; i++) {
    const v = instrs[i] >>> 0;
    u8[i*4+0] = v & 0xff;
    u8[i*4+1] = (v >>> 8) & 0xff;
    u8[i*4+2] = (v >>> 16) & 0xff;
    u8[i*4+3] = (v >>> 24) & 0xff;
  }
  return u8;
}

// Build the program
const GP0 = 0x1f801810;
const GP1 = 0x1f801814;
const gp0_hi = (GP0 >>> 16) & 0xffff;
const gp0_lo = GP0 & 0xffff;
const gp1_hi = (GP1 >>> 16) & 0xffff;
const gp1_lo = GP1 & 0xffff;

const code = [
  // r1 = GP1 address
  LUI(1, gp1_hi), ORI(1, 1, gp1_lo),
  // Reset GPU
  LUI(2, 0x0000), ORI(2, 2, 0x0000),
  SW(1, 2, 0),
  // Display disable
  LUI(2, 0x0300), ORI(2, 2, 0x0000), 
  SW(1, 2, 0),

  // r1 = GP0 address
  LUI(1, gp0_hi), ORI(1, 1, gp0_lo),
  
  // Set draw area top-left (0,0)
  LUI(2, 0xe300), ORI(2, 2, 0x0000),
  SW(1, 2, 0),
  LUI(2, 0x0000), ORI(2, 2, 0x0000),  // Parameter: (0,0)
  SW(1, 2, 0),
  
  // Set draw area bottom-right (1023,511) 
  LUI(2, 0xe400), ORI(2, 2, 0x0000),
  SW(1, 2, 0),
  LUI(2, 0x01ff), ORI(2, 2, 0x03ff),  // Parameter: (1023,511)
  SW(1, 2, 0),

  // Draw blue rectangle at (100,100) size (200,150)
  LUI(2, 0x6000), ORI(2, 2, 0x00ff),  // Command 0x60 with color 0x0000ff (blue)
  SW(1, 2, 0),
  LUI(2, 0x0064), ORI(2, 2, 0x0064),  // XY: (100,100)
  SW(1, 2, 0),
  LUI(2, 0x0096), ORI(2, 2, 0x00c8),  // Size: (200,150)
  SW(1, 2, 0),

  // Draw green rectangle at (200,200) size (100,100)
  LUI(2, 0x6000), ORI(2, 2, 0xff00),  // Command 0x60 with color 0x00ff00 (green)
  SW(1, 2, 0),
  LUI(2, 0x00c8), ORI(2, 2, 0x00c8),  // XY: (200,200)
  SW(1, 2, 0),
  LUI(2, 0x0064), ORI(2, 2, 0x0064),  // Size: (100,100)
  SW(1, 2, 0),

  // Draw white rectangle at (50,250) size (150,50)
  LUI(2, 0x6000), ORI(2, 2, 0xffff),  // Command 0x60 with color 0x00ffff (cyan)
  SW(1, 2, 0),
  LUI(2, 0x00fa), ORI(2, 2, 0x0032),  // XY: (50,250)
  SW(1, 2, 0),
  LUI(2, 0x0032), ORI(2, 2, 0x0096),  // Size: (150,50)
  SW(1, 2, 0),

  // Infinite loop (placeholder, will fix later)
  NOP(),
  NOP(),
];

// Fix the jump instruction to point to itself
const loopAddr = 0x80010000 + (code.length - 2) * 4;
code[code.length - 2] = J(loopAddr);

const prog = emit(code);

// Create PSX-EXE header
const exe = Buffer.alloc(2048 + prog.length);

// Header
exe.write('PS-X EXE', 0, 'ascii');
exe.writeUInt32LE(0x80010000, 0x10); // Initial PC
exe.writeUInt32LE(0x80010000, 0x14); // Initial GP 
exe.writeUInt32LE(0x80010000, 0x18); // Load address
exe.writeUInt32LE(prog.length, 0x1C); // File size
exe.writeUInt32LE(0x801fff00, 0x30); // Stack pointer
exe.write('North America', 0x4C, 'ascii');

// Copy code
exe.set(prog, 2048);

// Write file
fs.writeFileSync('test-fixed.exe', exe);
console.log('Created test-fixed.exe');
console.log(`Code size: ${prog.length} bytes`);
console.log(`Total commands: ${code.length}`);
