#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
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

const instrLines = [];
psx.enableCpuTrace({ output: (s) => instrLines.push(s), regsFormat: 'named' });

// Start at BIOS entry
(psx).cpu.s.pc = 0xbfc00000 >>> 0;
(psx).cpu.s.nextPc = 0xbfc00004 >>> 0;

// Run until just before the bad A0 call
for (let i = 0; i < 138210; i++) psx.cpu.step();

// Get the last 20 instructions before the bad call
const lastLines = instrLines.slice(-20);
console.log('Last 20 instructions before A0 call with bad t1:');
console.log('=================================================');
for (const line of lastLines) {
  console.log(line);
}

console.log('\nNext instruction would be the A0 call with t1=' + 
            (psx.cpu.s.regs[9] >>> 0).toString(16));
console.log('Current PC: 0x' + (psx.cpu.s.pc >>> 0).toString(16));
