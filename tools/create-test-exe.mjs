#!/usr/bin/env node
import * as fs from 'fs';

// Create a simple PSX-EXE that draws a colored rectangle
// PSX-EXE format: 2048-byte header followed by code

function createPSXExe() {
  // PSX-EXE Header (2048 bytes)
  const header = Buffer.alloc(2048, 0);
  
  // Magic "PS-X EXE"
  header.write('PS-X EXE', 0, 'ascii');
  
  // Initial PC (entry point) - 0x80010000
  header.writeUInt32LE(0x80010000, 0x10);
  
  // Initial GP - 0x80010000
  header.writeUInt32LE(0x80010000, 0x14);
  
  // Load address - 0x80010000
  header.writeUInt32LE(0x80010000, 0x18);
  
  // File size (we'll update this later)
  const codeSize = 512; // bytes
  header.writeUInt32LE(codeSize, 0x1C);
  
  // Stack pointer - 0x801FFF00
  header.writeUInt32LE(0x801FFF00, 0x30);
  
  // Region - "North America" for NTSC
  header.write('North America', 0x4C, 'ascii');
  
  // Now create the MIPS code that draws a rectangle
  // This is simple MIPS assembly converted to machine code
  const code = [];
  
  // GPU commands are sent to 0x1F801810 (GP0) and 0x1F801814 (GP1)
  
  // Reset GPU (GP1 command 0x00000000)
  code.push(0x3C021F80); // lui $v0, 0x1F80
  code.push(0x34421814); // ori $v0, $v0, 0x1814  ; GP1 register
  code.push(0x3C030000); // lui $v1, 0x0000
  code.push(0x34630000); // ori $v1, $v1, 0x0000  ; Command 0x00
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send to GP1
  
  // Enable display (GP1 command 0x03000000)
  code.push(0x3C030300); // lui $v1, 0x0300
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send to GP1
  
  // Set drawing area top left (0,0) - GP0 command 0xE3000000
  code.push(0x3C021F80); // lui $v0, 0x1F80
  code.push(0x34421810); // ori $v0, $v0, 0x1810  ; GP0 register
  code.push(0x3C03E300); // lui $v1, 0xE300
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send to GP0
  
  // Set drawing area bottom right (1023,511) - GP0 command 0xE4000000 | (511<<10) | 1023
  code.push(0x3C03E47F); // lui $v1, 0xE47F
  code.push(0x3463FBFF); // ori $v1, $v1, 0xFBFF
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send to GP0
  
  // Draw a filled rectangle (flat shaded)
  // Command: 0x60RRGGBB (60 = flat rectangle)
  // Color: Bright red (0x600000FF)
  code.push(0x3C036000); // lui $v1, 0x6000      ; Command 0x60 (flat rect)
  code.push(0x346300FF); // ori $v1, $v1, 0x00FF  ; Red color
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send color/command
  
  // X,Y position (100, 100)
  code.push(0x3C030064); // lui $v1, 0x0064       ; Y=100
  code.push(0x34630064); // ori $v1, $v1, 0x0064  ; X=100
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send position
  
  // Width, Height (200, 150)
  code.push(0x3C030096); // lui $v1, 0x0096       ; Height=150
  code.push(0x346300C8); // ori $v1, $v1, 0x00C8  ; Width=200
  code.push(0xAC430000); // sw $v1, 0($v0)        ; Send size
  
  // Draw another rectangle - green
  code.push(0x3C036000); // lui $v1, 0x6000      
  code.push(0x3463FF00); // ori $v1, $v1, 0xFF00  ; Green color
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  code.push(0x3C0300C8); // lui $v1, 0x00C8       ; Y=200
  code.push(0x346300C8); // ori $v1, $v1, 0x00C8  ; X=200
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  code.push(0x3C030064); // lui $v1, 0x0064       ; Height=100
  code.push(0x34630064); // ori $v1, $v1, 0x0064  ; Width=100
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  // Draw blue rectangle
  code.push(0x3C036000); // lui $v1, 0x6000      
  code.push(0x3463FFFF); // ori $v1, $v1, 0xFFFF  ; Blue color (PSX uses BGR)
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  code.push(0x3C030032); // lui $v1, 0x0032       ; Y=50
  code.push(0x346300FA); // ori $v1, $v1, 0x00FA  ; X=250
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  code.push(0x3C030032); // lui $v1, 0x0032       ; Height=50
  code.push(0x34630096); // ori $v1, $v1, 0x0096  ; Width=150
  code.push(0xAC430000); // sw $v1, 0($v0)
  
  // Infinite loop
  code.push(0x08004000); // j 0x80010000  ; Jump to self (infinite loop)
  code.push(0x00000000); // nop (delay slot)
  
  // Convert code array to buffer
  const codeBuffer = Buffer.alloc(2048, 0);
  for (let i = 0; i < code.length; i++) {
    codeBuffer.writeUInt32LE(code[i], i * 4);
  }
  
  // Update file size in header
  header.writeUInt32LE(code.length * 4, 0x1C);
  
  // Combine header and code
  return Buffer.concat([header, codeBuffer]);
}

// Create the PSX-EXE
const exe = createPSXExe();
fs.writeFileSync('test.exe', exe);
console.log('Created test.exe - a simple PSX executable that draws colored rectangles');
console.log('File size:', exe.length, 'bytes');
console.log('\nThis PSX-EXE will:');
console.log('1. Initialize the GPU');
console.log('2. Draw a red rectangle at (100, 100) with size 200x150');
console.log('3. Draw a green rectangle at (200, 200) with size 100x100');
console.log('4. Draw a blue rectangle at (250, 50) with size 150x50');
console.log('\nUse this to test GPU functionality without BIOS complexity!');
