#!/usr/bin/env node
import { readFileSync } from 'fs';
import { PSXSystem } from '@ai-psx/core';

function readBIOS() {
  const names = ['pc1001.bin','PC1001.BIN','scph1001.bin','SCPH1001.BIN'];
  for (const n of names) {
    try { return readFileSync(n); } catch {}
  }
  console.error('Error: BIOS not found. Place pc1001.bin at repo root.');
  process.exit(1);
}

const bios = readBIOS();
const psx = new PSXSystem();
psx.loadBIOS(bios);

// Start at BIOS entry
(psx).cpu.s.pc = 0xbfc00000 >>> 0;
(psx).cpu.s.nextPc = 0xbfc00004 >>> 0;

let lastPc = 0;
let instrCount = 0;
let lastA0Addrs = [];

// Track A0 function table modifications
psx.enableMemTrace({ 
  output: (s) => {
    // Track writes to A0 function table (0x200-0x400)
    if (s.includes('w32 00000200') || s.includes('w32 00000204') || s.includes('w32 00000208') ||
        s.includes('w32 0000020c') || s.includes('w32 00000210') || s.includes('w32 00000214')) {
      console.log(`[${instrCount}] A0 table write: ${s}`);
    }
  },
  filter: (op, addr) => {
    const a = addr >>> 0;
    // Monitor A0 function table region
    return a >= 0x200 && a < 0x400;
  }
});

// Enable CPU trace to track where we are
psx.enableCpuTrace({ 
  output: (s) => {
    // Extract PC from the trace
    const match = s.match(/pc=([0-9a-f]{8})/);
    if (match) {
      lastPc = parseInt(match[1], 16);
    }
    
    // Log if we're at the A0 entry point
    if (lastPc === 0x000000a0) {
      console.log(`[${instrCount}] Calling A0 with t1=${(psx.cpu.s.regs[9] >>> 0).toString(16)}`);
    }
    
    // Log if we're in the A0 dispatcher
    if (lastPc >= 0x000005c4 && lastPc <= 0x000005dc) {
      const t1Val = (psx.cpu.s.regs[9] >>> 0);
      const tableAddr = 0x200 + (t1Val << 2);
      const funcPtr = psx.ram.read32(tableAddr) >>> 0;
      console.log(`[${instrCount}] A0 dispatcher: t1=0x${t1Val.toString(16)} => table[0x${tableAddr.toString(16)}]=0x${funcPtr.toString(16)}`);
      
      // Check the A0 function table entries around A0:00
      console.log(`  A0:00 => 0x${(psx.ram.read32(0x200) >>> 0).toString(16)}`);
      console.log(`  A0:01 => 0x${(psx.ram.read32(0x204) >>> 0).toString(16)}`);
      console.log(`  A0:02 => 0x${(psx.ram.read32(0x208) >>> 0).toString(16)}`);
      
      // Store last few A0 addresses for debugging
      lastA0Addrs.push({ instr: instrCount, t1: t1Val, ptr: funcPtr });
      if (lastA0Addrs.length > 5) lastA0Addrs.shift();
    }
  }
});

// Run until crash or limit
const maxInstr = 200000;
try {
  for (let i = 0; i < maxInstr; i++) {
    instrCount = i;
    
    // Periodic status
    if (i % 10000 === 0 && i > 0) {
      console.log(`[${i}] Still running at pc=0x${lastPc.toString(16)}`);
      
      // Check A0 table integrity periodically
      const a000 = psx.ram.read32(0x200) >>> 0;
      const a001 = psx.ram.read32(0x204) >>> 0;
      if (a000 === 0 || a001 === 0) {
        console.log(`[${i}] WARNING: A0 table cleared! A0:00=0x${a000.toString(16)}, A0:01=0x${a001.toString(16)}`);
      }
    }
    
    psx.cpu.step();
  }
  console.log(`Completed ${maxInstr} instructions without crash`);
} catch (e) {
  console.log(`\\nCrashed after ${instrCount} instructions at pc=0x${lastPc.toString(16)}`);
  console.log(`Error: ${e.message}`);
  
  if (e.message.includes('2113954304') || e.message.includes('0x7e006200')) {
    console.log('\\nThis is the 0x7e006200 unmapped address issue!');
    console.log('\\nLast A0 calls before crash:');
    for (const call of lastA0Addrs) {
      console.log(`  [${call.instr}] t1=0x${call.t1.toString(16)} => ptr=0x${call.ptr.toString(16)}`);
    }
    
    // Check final state of A0 table
    console.log('\\nFinal A0 table state:');
    for (let i = 0; i < 16; i++) {
      const addr = 0x200 + (i << 2);
      const val = psx.ram.read32(addr) >>> 0;
      if (val !== 0) {
        console.log(`  A0:${i.toString(16).padStart(2, '0')} => 0x${val.toString(16)}`);
      }
    }
  }
}
