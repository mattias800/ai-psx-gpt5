#!/usr/bin/env node

import fs from 'fs';

// Script to extract BIOS function addresses from PCSX-Redux trace
// Look for patterns where A0/B0/C0 table addresses are populated

const logFile = 'pcsx-redux-bios.log';
console.log('Extracting BIOS function addresses from', logFile);

// Map to store function table entries
const a0Functions = new Map();
const b0Functions = new Map();
const c0Functions = new Map();

// Read file line by line
const lines = fs.readFileSync(logFile, 'utf8').split('\n');

for (const line of lines) {
  // Look for stores to A0 table (0x200-0x3FF)
  // Pattern: sw $reg(value), offset(base)([address] = stored_value)
  const swMatch = line.match(/sw\s+\$\w+\(([0-9a-f]+)\),.*\(\[([0-9a-f]+)\]\s*=\s*([0-9a-f]+)\)/i);
  
  if (swMatch) {
    const storeAddr = parseInt(swMatch[2], 16);
    const value = parseInt(swMatch[3], 16);
    
    // A0 table: 0x200-0x3FF
    if (storeAddr >= 0x200 && storeAddr < 0x400) {
      const index = (storeAddr - 0x200) >> 2;
      if (value >= 0xbfc00000 && value <= 0xbfc80000) {
        a0Functions.set(index, value);
      }
    }
    
    // B0 table: 0x874-0xA73
    if (storeAddr >= 0x874 && storeAddr < 0xA74) {
      const index = (storeAddr - 0x874) >> 2;
      if (value >= 0xbfc00000 && value <= 0xbfc80000) {
        b0Functions.set(index, value);
      }
    }
    
    // C0 table: 0x674-0x773
    if (storeAddr >= 0x674 && storeAddr < 0x774) {
      const index = (storeAddr - 0x674) >> 2;
      if (value >= 0xbfc00000 && value <= 0xbfc80000) {
        c0Functions.set(index, value);
      }
    }
  }
  
  // Also look for direct loads from these addresses
  const lwMatch = line.match(/lw\s+\$\w+\(([0-9a-f]+)\),.*\(\[([0-9a-f]+)\]\s*=\s*([0-9a-f]+)\)/i);
  if (lwMatch) {
    const loadAddr = parseInt(lwMatch[2], 16);
    const value = parseInt(lwMatch[1], 16);
    
    if (loadAddr >= 0x200 && loadAddr < 0x400 && value >= 0xbfc00000) {
      const index = (loadAddr - 0x200) >> 2;
      a0Functions.set(index, value);
    }
  }
}

// Print sorted A0 functions
console.log('\n// A0 Function Table:');
const sortedA0 = Array.from(a0Functions.entries()).sort((a, b) => a[0] - b[0]);
for (const [index, addr] of sortedA0) {
  console.log(`  0x${index.toString(16).padStart(2, '0')}: 0x${addr.toString(16)},  // A0:${index.toString(16)}`);
}

// Print sorted B0 functions
console.log('\n// B0 Function Table:');
const sortedB0 = Array.from(b0Functions.entries()).sort((a, b) => a[0] - b[0]);
for (const [index, addr] of sortedB0) {
  console.log(`  0x${index.toString(16).padStart(2, '0')}: 0x${addr.toString(16)},  // B0:${index.toString(16)}`);
}

// Print sorted C0 functions
console.log('\n// C0 Function Table:');
const sortedC0 = Array.from(c0Functions.entries()).sort((a, b) => a[0] - b[0]);
for (const [index, addr] of sortedC0) {
  console.log(`  0x${index.toString(16).padStart(2, '0')}: 0x${addr.toString(16)},  // C0:${index.toString(16)}`);
}

console.log('\nTotal functions found:');
console.log(`  A0: ${a0Functions.size}`);
console.log(`  B0: ${b0Functions.size}`);
console.log(`  C0: ${c0Functions.size}`);
