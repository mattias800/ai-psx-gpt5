#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { PSXSystem } from '@ai-psx/core';

function readBIOS() {
  const names = ['pc1001.bin','PC1001.BIN','scph1001.bin','SCPH1001.BIN'];
  for (const n of names) {
    try { return readFileSync(n); } catch {}
  }
  console.error('Error: BIOS not found. Place scph1001.bin at repo root.');
  process.exit(1);
}

function loadRam(psx, path) {
  const buf = readFileSync(path);
  const maxLen = 0x00200000; // 2 MiB
  const len = Math.min(buf.length, maxLen);
  const mode = (process.env.PSX_RAM_SNAPSHOT_MODE || 'bytes').toLowerCase();
  const DEBUG = process.env.BIOS_HARNESS_DEBUG === '1';
  if (mode === 'words') {
    const endian = (process.env.PSX_RAM_SNAPSHOT_ENDIAN || 'le').toLowerCase();
    const view = new DataView(buf.buffer, buf.byteOffset, len);
    const wordCount = (len >>> 2);
    for (let i = 0; i < wordCount; i++) {
      const v = view.getUint32(i << 2, endian !== 'le');
      try { psx.ram.write32((i << 2) >>> 0, v >>> 0); } catch {}
    }
    const rem = len & 3;
    if (rem) {
      const base = len - rem;
      for (let i = 0; i < rem; i++) {
        try { psx.ram.write8((base + i) >>> 0, buf[base + i] >>> 0); } catch {}
      }
    }
    if (DEBUG) console.log(`[sanity] loaded RAM snapshot ${path} (${len} bytes) mode=words endian=${endian}`);
  } else {
    for (let i = 0; i < len; i++) {
      try { psx.ram.write8(i >>> 0, buf[i] >>> 0); } catch {}
    }
    if (DEBUG) console.log(`[sanity] loaded RAM snapshot ${path} (${len} bytes) mode=bytes`);
  }
}

function loadCpu(psx, path) {
  const txt = readFileSync(path, 'utf8');
  const s = JSON.parse(txt);
  const toU32 = (x) => (typeof x === 'string' && x.startsWith('0x')) ? (Number.parseInt(x, 16) >>> 0) : ((x >>> 0));
  if (s?.regs && Array.isArray(s.regs)) {
    for (let i = 0; i < Math.min(32, s.regs.length); i++) {
      try { psx.cpu.s.regs[i] = toU32(s.regs[i]); } catch {}
    }
  }
  if (s?.pc !== undefined) { try { psx.cpu.s.pc = toU32(s.pc); } catch {} }
  if (s?.nextPc !== undefined) { try { psx.cpu.s.nextPc = toU32(s.nextPc); } catch {} }
  if (s?.hi !== undefined) { try { psx.cpu.s.hi = toU32(s.hi); } catch {} }
  if (s?.lo !== undefined) { try { psx.cpu.s.lo = toU32(s.lo); } catch {} }
  if (s?.sr !== undefined) { try { psx.cpu.s.sr = toU32(s.sr); } catch {} }
  if (s?.cause !== undefined) { try { psx.cpu.s.cause = toU32(s.cause); } catch {} }
}

function hex(n, w=8) { return '0x' + (n >>> 0).toString(16).padStart(w, '0'); }

function dumpAround(psx, addr, bytes=64) {
  const start = (addr >>> 0);
  const end = (start + bytes) >>> 0;
  const lines = [];
  for (let a = start; a < end; a += 16) {
    const chunk = [];
    for (let i = 0; i < 16; i++) {
      const b = psx.as.read8((a + i) >>> 0) & 0xff;
      chunk.push(b.toString(16).padStart(2, '0'));
    }
    lines.push(`${hex(a, 8)}  ${chunk.join(' ')}`);
  }
  return lines.join('\n');
}

function main() {
  const DEBUG = process.env.BIOS_HARNESS_DEBUG === '1';
  const ramSnap = process.env.PSX_RAM_SNAPSHOT || '';
  const cpuSnap = process.env.PSX_CPU_SNAPSHOT || '';

  const bios = readBIOS();
  const psx = new PSXSystem();
  psx.loadBIOS(new Uint8Array(bios));
  psx.cpu.s.pc = 0xbfc00000 >>> 0;
  psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

  if (ramSnap) {
    try { loadRam(psx, ramSnap); } catch (e) { console.error(`[sanity] RAM load failed: ${e?.message ?? e}`); }
  }
  if (cpuSnap) {
    try { loadCpu(psx, cpuSnap); if (DEBUG) console.log(`[sanity] applied CPU snapshot ${cpuSnap}`); } catch (e) { console.error(`[sanity] CPU load failed: ${e?.message ?? e}`); }
  }

  const s = psx.cpu.s;
  console.log('[sanity] CPU state:');
  console.log(`  pc=${hex(s.pc)} nextPc=${hex(s.nextPc)} sr=${hex(s.sr)} cause=${hex(s.cause)} hi=${hex(s.hi)} lo=${hex(s.lo)}`);
  const regs = Array.from({length:32}, (_,i)=>hex(s.regs[i]>>>0)).join(' ');
  console.log(`  regs: ${regs}`);

  const pc = s.pc >>> 0;
  console.log(`[sanity] Memory dump around pc (${hex(pc)}):`);
  console.log(dumpAround(psx, pc, 64));
}

main();

