#!/usr/bin/env node
import fs from 'node:fs';
import zlib from 'node:zlib';
import { PSXSystem } from '../packages/emulator-core/src/psx.js';

function readBIOS() {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { try { return fs.readFileSync(n); } catch {} }
  console.error('Missing BIOS at repo root'); process.exit(1);
}

const CRC_TABLE = (()=>{ const t=new Uint32Array(256); for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++) c=(c&1)?(0xedb88320^(c>>>1)):(c>>>1); t[n]=c>>>0;} return t; })();
const crc32 = (buf)=>{ let c=0xffffffff>>>0; for(let i=0;i<buf.length;i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8); return (c^0xffffffff)>>>0; };
function writePNG(path, width, height, rgba){
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(width>>>0,0); ihdr.writeUInt32BE(height>>>0,4); ihdr[8]=8; ihdr[9]=6; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  const mkChunk=(type,data)=>{ const len=Buffer.alloc(4); len.writeUInt32BE(data.length>>>0,0); const body=Buffer.concat([Buffer.from(type,'ascii'),data]); const crc=Buffer.alloc(4); crc.writeUInt32BE(crc32(body),0); return Buffer.concat([len,body,crc]); };
  const stride = width*4; const raw=Buffer.alloc((stride+1)*height);
  for(let y=0;y<height;y++){ raw[y*(stride+1)]=0; rgba.copy(raw, y*(stride+1)+1, y*stride, y*stride+stride); }
  const out = Buffer.concat([sig,mkChunk('IHDR',ihdr),mkChunk('IDAT',zlib.deflateSync(raw,{level:9})),mkChunk('IEND',Buffer.alloc(0))]);
  fs.writeFileSync(path,out);
}

function bgr555ToRgba(px){ const r5=(px>>>10)&0x1f, g5=(px>>>5)&0x1f, b5=px&0x1f; const r=(r5<<3)|(r5>>>2), g=(g5<<3)|(g5>>>2), b=(b5<<3)|(b5>>>2); return [r,g,b,255]; }
function vramToRgba(gpu){ const W=1024,H=512; const out=Buffer.alloc(W*H*4); let di=0; for(let y=0;y<H;y++){ for(let x=0;x<W;x++){ const px=gpu.vram[y*W+x]&0xffff; const [r,g,b,a]=bgr555ToRgba(px); out[di++]=r; out[di++]=g; out[di++]=b; out[di++]=a; } } return out; }

(async ()=>{
  const psx = new PSXSystem(); psx.loadBIOS(readBIOS()); psx.attachDisplay();
  psx.cpu.s.pc = 0xbfc00000>>>0; psx.cpu.s.nextPc = 0xbfc00004>>>0;
  const frames = 12; const stepPerKick = 50_000;
  for(let i=0;i<frames;i++){
    // Kick MDEC control to trigger stub frames; then run CPU a bit and scheduler
    psx.as.write32(0x1f801824>>>0, 1>>>0);
    for(let k=0;k<stepPerKick;k++){ try{ psx.cpu.step(); }catch{} }
    psx.stepCycles(stepPerKick);
    const rgba = vramToRgba(psx.gpu);
    const out = `bios-anim-sim-${String(i).padStart(2,'0')}.png`;
    writePNG(out,1024,512,rgba);
    console.log(`frame ${i} -> ${out}`);
  }
})();

