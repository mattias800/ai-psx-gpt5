#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { PSXSystem } from '@ai-psx/core';

// Simple BIOS tracer. Usage:
//   node tools/trace-bios.mjs [instrCount]
// Requires a BIOS at ./pc1001.bin (or PC1001.BIN/scph1001.bin/scph1001.BIN)

function readBIOS() {
  const names = ['pc1001.bin','PC1001.BIN','scph1001.bin','SCPH1001.BIN'];
  for (const n of names) {
    try { return readFileSync(n); } catch {}
  }
  console.error('Error: BIOS not found. Place pc1001.bin at repo root.');
  process.exit(1);
}

const count = Number(process.argv[2] ?? '20000') | 0;
const bios = readBIOS();

const psx = new PSXSystem();
psx.loadBIOS(bios);

const instrLines = [];
const memLines = [];
psx.enableCpuTrace({ output: (s) => instrLines.push(s), regsFormat: 'named' });
psx.enableMemTrace({ output: (s) => memLines.push(s) });

// Start at BIOS entry
(psx).cpu.s.pc = 0xbfc00000 >>> 0;
(psx).cpu.s.nextPc = 0xbfc00004 >>> 0;

for (let i = 0; i < count; i++) psx.cpu.step();

writeFileSync('bios.trace', instrLines.join('\n'));
writeFileSync('bios-mem.trace', memLines.join('\n'));

console.log(`Wrote bios.trace (${instrLines.length} lines) and bios-mem.trace (${memLines.length} lines).`);

