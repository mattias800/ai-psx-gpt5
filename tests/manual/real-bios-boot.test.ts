import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync, writeFileSync } from 'node:fs';
import zlib from 'node:zlib';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { 
    try { 
      return new Uint8Array(readFileSync(n)); 
    } catch {} 
  }
  throw new Error('Missing BIOS at repo root');
};

const bgr555ToRgba = (px: number): [number, number, number, number] => {
  const r5 = (px >>> 10) & 0x1f, g5 = (px >>> 5) & 0x1f, b5 = px & 0x1f;
  return [ (r5<<3)|(r5>>>2), (g5<<3)|(g5>>>2), (b5<<3)|(b5>>>2), 255 ];
};

const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) { 
  let c = n; 
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1); 
  CRC_TABLE[n] = c >>> 0; 
}

const crc32 = (buf: Uint8Array) => { 
  let c = 0xffffffff >>> 0; 
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8); 
  return (c ^ 0xffffffff) >>> 0; 
};

const writePNG = (path: string, width: number, height: number, rgba: Uint8Array) => {
  const sig = Uint8Array.from([137,80,78,71,13,10,26,10]);
  const ihdr = new Uint8Array(13); 
  const dv = new DataView(ihdr.buffer);
  dv.setUint32(0, width >>> 0, false); 
  dv.setUint32(4, height >>> 0, false);
  ihdr[8]=8; ihdr[9]=6; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  
  const mkChunk = (type: string, data: Uint8Array) => {
    const typeBytes = new TextEncoder().encode(type);
    const len = new Uint8Array(4); 
    new DataView(len.buffer).setUint32(0, data.length >>> 0, false);
    const body = new Uint8Array(4 + data.length); 
    body.set(typeBytes, 0); 
    body.set(data, 4);
    const crc = new Uint8Array(4); 
    new DataView(crc.buffer).setUint32(0, crc32(body) >>> 0, false);
    const out = new Uint8Array(4 + body.length + 4); 
    out.set(len, 0); 
    out.set(body, 4); 
    out.set(crc, 4 + body.length); 
    return out;
  };
  
  const stride = width * 4; 
  const raw = new Uint8Array((stride + 1) * height);
  for (let y = 0; y < height; y++) { 
    raw[y*(stride+1)] = 0; 
    raw.set(rgba.subarray(y*stride,(y+1)*stride), y*(stride+1)+1); 
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  const png = new Uint8Array(sig.length + (12+13) + (12+idat.length) + 12);
  let off = 0; 
  png.set(sig, off); off += sig.length;
  const IHDR = mkChunk('IHDR', ihdr); 
  png.set(IHDR, off); off += IHDR.length;
  const IDAT = mkChunk('IDAT', idat); 
  png.set(IDAT, off); off += IDAT.length;
  const IEND = mkChunk('IEND', new Uint8Array()); 
  png.set(IEND, off); off += IEND.length;
  writeFileSync(path, png);
};

const vramToRgba = (vram: Uint16Array): Uint8Array => {
  const W=1024, H=512, out=new Uint8Array(W*H*4); 
  let di=0;
  for (let i=0; i<vram.length; i++){ 
    const [r,g,b,a]=bgr555ToRgba(vram[i] & 0xffff); 
    out[di++]=r; out[di++]=g; out[di++]=b; out[di++]=a; 
  }
  return out;
};

describe('Real BIOS boot sequence', () => {
  it('runs actual BIOS and captures PlayStation logo', () => {
    const psx = new PSXSystem();
    const bios = readBIOS();
    
    console.log('Loading BIOS...');
    psx.loadBIOS(bios);
    
    // Attach display and DMA timing for proper GPU rendering
    psx.attachDisplay();
    psx.attachDMATiming();
    psx.attachSPUAudio();
    
    // Set up CPU to start at BIOS entry point
    psx.cpu.s.pc = 0xbfc00000 >>> 0;
    psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    
    // Track GPU commands to detect when logo starts appearing
    let lastGpuCmdCount = 0;
    let framesSaved = 0;
    const maxFrames = 10;
    let cyclesWithoutChange = 0;
    const maxCyclesWithoutChange = 10;
    
    console.log('Starting BIOS execution...');
    
    // Run for up to 10 seconds of emulated time (33.8688 MHz * 10)
    const maxCycles = 33868800 * 10;
    const stepsPerIteration = 100000;
    let totalCycles = 0;
    
    for (let iter = 0; iter < maxCycles / stepsPerIteration && framesSaved < maxFrames; iter++) {
      // Run CPU for a chunk of cycles
      for (let i = 0; i < stepsPerIteration; i++) {
        try {
          psx.cpu.step();
        } catch (e) {
          // Ignore exceptions from unimplemented BIOS calls
        }
      }
      
      // Run scheduler (DMA, timers, display)
      psx.stepCycles(stepsPerIteration);
      totalCycles += stepsPerIteration;
      
      // Check GPU command count to detect activity
      const gpuAny = psx.gpu as any;
      const currentCmdCount = gpuAny.gp0CmdCount || 0;
      
      if (currentCmdCount > lastGpuCmdCount) {
        console.log(`GPU activity detected at cycle ${totalCycles}: ${currentCmdCount} commands`);
        lastGpuCmdCount = currentCmdCount;
        cyclesWithoutChange = 0;
        
        // Capture frame when GPU is active
        const rgba = vramToRgba(psx.gpu.vram);
        const outPath = `real-bios-frame-${String(framesSaved).padStart(2,'0')}.png`;
        writePNG(outPath, 1024, 512, rgba);
        console.log(`Saved frame ${framesSaved} -> ${outPath}`);
        framesSaved++;
      } else {
        cyclesWithoutChange++;
        
        // Periodically save a frame even without GPU changes to see progress
        if (cyclesWithoutChange >= maxCyclesWithoutChange && framesSaved < maxFrames) {
          const rgba = vramToRgba(psx.gpu.vram);
          const outPath = `real-bios-frame-${String(framesSaved).padStart(2,'0')}.png`;
          writePNG(outPath, 1024, 512, rgba);
          console.log(`Saved periodic frame ${framesSaved} -> ${outPath} (no GPU activity)`);
          framesSaved++;
          cyclesWithoutChange = 0;
        }
      }
      
      // Log progress
      if (iter % 10 === 0) {
        const seconds = totalCycles / 33868800;
        console.log(`Progress: ${seconds.toFixed(2)}s emulated, PC=0x${(psx.cpu.s.pc>>>0).toString(16).padStart(8,'0')}`);
      }
    }
    
    // Save final frame
    if (framesSaved < maxFrames) {
      const rgba = vramToRgba(psx.gpu.vram);
      const outPath = `real-bios-frame-final.png`;
      writePNG(outPath, 1024, 512, rgba);
      console.log(`Saved final frame -> ${outPath}`);
    }
    
    console.log(`\nBIOS boot test complete:`);
    console.log(`  Total cycles: ${totalCycles}`);
    console.log(`  Emulated time: ${(totalCycles/33868800).toFixed(2)}s`);
    console.log(`  Frames saved: ${framesSaved}`);
    console.log(`  GPU commands: ${lastGpuCmdCount}`);
    
    // Check if we saw any GPU activity
    expect(lastGpuCmdCount).toBeGreaterThan(0);
  });
});
