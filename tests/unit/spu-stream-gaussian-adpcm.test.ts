import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

function makeConstADPCMBlock(valueNibble: number): Uint8Array {
  // filter 0, shift 12, constant nibbles -> decoded near-constant
  const block = new Uint8Array(16);
  block[0] = ((0 & 0x0f) << 4) | (12 & 0x0f);
  block[1] = 0x00; // flags
  for (let i = 0; i < 14; i++) block[2 + i] = ((valueNibble & 0x0f) << 4) | (valueNibble & 0x0f);
  return block;
}

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }

const SPU_XFER = 0x1f801da6;

describe('SPU ADPCM gaussian interpolation', () => {
  it('gaussian preserves constant decoded signal across fractional steps', () => {
    const s = new SPU();
    s.setMasterVolume(0x3fff, 0x3fff);
    s.setVoiceVolume(0, 0x3fff, 0x3fff);
    s.setInterpolationMode('gaussian');

    // DMA one block of constant nibbles into SPU RAM at dstUnits
    const dstUnits = 0x0400;
    const as = {
      write16: (a:number,v:number)=>s.write16(a,v),
      write32: (a:number,v:number)=>{ /* not used here */ }
    } as any;

    // Manually write via SPU data port using xfer addr and ram methods
    // We'll use utility: set transfer address and write 8 halfwords (16 bytes)
    write16(s, SPU_XFER, dstUnits);
    const blk = makeConstADPCMBlock(4);
    for (let i = 0; i < 8; i++) {
      const lo = blk[i * 2];
      const hi = blk[i * 2 + 1];
      s.write16(0x1f801c00 + 0x1a8, lo | (hi << 8));
    }

    s.setVoiceStreamFromRAM(0, dstUnits);
    s.setVoicePitch(0, 0x8000); // 0.5 speed -> fractional stepping
    s.setVoiceKeyOn(0, true);

    const out = s.mix(16);
    // All samples should be ~constant (equal left/right)
    const first = out[0];
    for (let i = 0; i < 16; i++) {
      expect(Math.abs(out[i * 2] - first)).toBeLessThanOrEqual(2e-3);
      expect(Math.abs(out[i * 2 + 1] - first)).toBeLessThanOrEqual(2e-3);
    }
  });
});

