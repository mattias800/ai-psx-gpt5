#!/usr/bin/env node
import fs from 'node:fs';
import zlib from 'node:zlib';
import { PSXSystem } from '@ai-psx/core';

function readBIOS() {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) {
    try { return fs.readFileSync(n); } catch {}
  }
  console.error('Error: BIOS not found at repo root');
  process.exit(1);
}

function bgr555ToRgba(px) {
  const r5 = (px >>> 10) & 0x1f;
  const g5 = (px >>> 5) & 0x1f;
  const b5 = px & 0x1f;
  const r = (r5 << 3) | (r5 >>> 2);
  const g = (g5 << 3) | (g5 >>> 2);
  const b = (b5 << 3) | (b5 >>> 2);
  return [r, g, b, 255];
}

// Minimal CRC32 for PNG
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf, off = 0, len = buf.length) {
  let c = 0xffffffff >>> 0;
  for (let i = 0; i < len; i++) c = CRC_TABLE[(c ^ buf[off + i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function writePNG(path, width, height, rgba /* Uint8Array length width*height*4 */) {
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);
  const chunks = [];
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width >>> 0, 0);
  ihdr.writeUInt32BE(height >>> 0, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  function chunk(typeStr, data) {
    const type = Buffer.from(typeStr, 'ascii');
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length >>> 0, 0);
    const body = Buffer.concat([type, data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
    return Buffer.concat([len, body, crc]);
  }

  // Build IDAT payload: each scanline prefixed with filter byte 0
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });

  const out = Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  fs.writeFileSync(path, out);
}

function hasNonBlack(vram) {
  // Any non-zero pixel indicates content
  const len = vram.length;
  for (let i = 0; i < len; i++) if ((vram[i] & 0xffff) !== 0) return true;
  return false;
}

function vramToRgbaFull(gpu) {
  const W = 1024, H = 512;
  const out = Buffer.alloc(W * H * 4);
  let di = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const px = gpu.vram[y * W + x] & 0xffff;
      const [r,g,b,a] = bgr555ToRgba(px);
      out[di++] = r; out[di++] = g; out[di++] = b; out[di++] = a;
    }
  }
  return out;
}

async function main() {
  const bios = readBIOS();
  const psx = new PSXSystem();
  psx.loadBIOS(bios);
  psx.attachDisplay();
  // Entry
  psx.cpu.s.pc = 0xbfc00000 >>> 0;
  psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

  const maxIters = 200; // up to ~200 chunks
  const instrPerIter = 200_000; // CPU instructions per iteration
  const stepChunk = 1000; // sub-chunk granularity for scheduler sync
  for (let iter = 0; iter < maxIters; iter++) {
    let left = instrPerIter;
    while (left > 0) {
      const n = Math.min(stepChunk, left);
      for (let i = 0; i < n; i++) psx.cpu.step();
      psx.stepCycles(n); // approx 1 cycle/inst for scheduling
      left -= n;
    }
    // Check for content
    if (hasNonBlack(psx.gpu.vram)) {
      const rgba = vramToRgbaFull(psx.gpu);
      const outPath = `bios-vram-${String(iter).padStart(3,'0')}.png`;
      writePNG(outPath, 1024, 512, rgba);
      console.log(`content-detected ${outPath}`);
      return;
    }
  }
  console.log('no-content-detected');
}

main().catch(e => { console.error(e?.stack||String(e)); process.exit(1); });

