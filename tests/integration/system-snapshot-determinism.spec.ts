import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { crc32 } from '@ai-psx/shared/src/crc32';

function vramCRC(psx: PSXSystem): number {
  const buf: number[] = [];
  const v = psx.gpu.vram;
  for (let i = 0; i < v.length; i++) { buf.push(v[i] & 0xff, (v[i]>>>8)&0xff); }
  return crc32(buf)>>>0;
}

// Draw then snapshot, draw again, then restore and verify VRAM matches the snapshot baseline.

describe('Integration: PSXSystem snapshot determinism (GPU VRAM)', () => {
  it('restores VRAM to the exact prior state after deserialize', () => {
    const psx = new PSXSystem();
    const GP0 = 0x1f801810; const GP1 = 0x1f801814;
    const write32 = (a:number,v:number)=> psx.as.write32(a>>>0, v>>>0);
    const XY = (y:number,x:number)=>(((y&0x1ff)<<16)|(x&0x3ff))>>>0;
    const SIZE = (h:number,w:number)=>(((h&0x1ff)<<16)|(w&0x3ff))>>>0;

    // Reset GPU and draw a baseline rectangle
    write32(GP1, 0x00000000);
    write32(GP0, (0x64<<24) | 0x0000ff); // blue rect
    write32(GP0, XY(20,30)); write32(GP0, SIZE(8,8));

    const snap = psx.serialize();
    const crcBefore = vramCRC(psx);

    // Mutate VRAM
    write32(GP0, (0x64<<24) | 0x00ff00); // green rect elsewhere
    write32(GP0, XY(50,60)); write32(GP0, SIZE(6,6));
    const crcMut = vramCRC(psx);
    expect(crcMut).not.toBe(crcBefore);

    // Restore
    psx.deserialize(snap);
    const crcAfter = vramCRC(psx);
    expect(crcAfter).toBe(crcBefore);
  });
});

