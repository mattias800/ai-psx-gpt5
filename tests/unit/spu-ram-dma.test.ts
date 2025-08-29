import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

function write16(as: any, addr: number, v: number) { as.write16(addr >>> 0, v & 0xffff); }
function write32(as: any, addr: number, v: number) { as.write32(addr >>> 0, v >>> 0); }
function read16(as: any, addr: number) { return as.read16(addr >>> 0) & 0xffff; }

// Validate that SPU ch4 DMA writes halfwords into SPU RAM at the transfer address,
// incrementing with wrap, and that the transfer address register is in units of 8 bytes.

describe('SPU RAM DMA write and address register (units of 8 bytes)', () => {
  it('writes halfwords at xfer address and can be read back by loading into voice', () => {
    const psx = new PSXSystem();
    psx.attachDMATiming({ cyclesPerWord: 2 });

    const as = psx.as;
    const v = psx.spu;

    // Choose destination units (8-byte units)
    const SPU_XFER = 0x1f801da6;
    const dstUnits = 0x0010; // 16 * 8 = 128 bytes -> halfword index 64
    write16(as, SPU_XFER, dstUnits);

    // Prepare a small pattern of 8 halfwords in system RAM
    const srcBase = 0x600;
    const hw = [0x0000, 0x7fff, 0x8000, 0x1234, 0xabcd, 0x5555, 0xaaaa, 0xffff];
    for (let i = 0; i < hw.length; i++) write16(as, srcBase + i*2, hw[i]);

    // DMA ch4 block from system RAM -> SPU RAM
    write32(as, 0x1f8010c0, srcBase >>> 0);
    write32(as, 0x1f8010c4, hw.length >>> 0);
    write32(as, 0x1f8010c8, (1<<0) | (0<<1) | (0<<9) | (1<<24));

    // Step cycles to finish
    psx.stepCycles(hw.length * 2);

    // Load back from SPU RAM into voice and verify samples match
    v.loadPCMFromRAM(0, dstUnits, hw.length, true);
    v.setMasterVolume(0x3fff, 0x3fff);
    v.setVoiceVolume(0, 0x3fff, 0x3fff);
    v.setVoicePitch(0, 1<<16);
    v.setVoiceKeyOn(0, true);

    const out = v.mix(hw.length);
    // Expect signed interpretation of halfwords
    const toS16 = (x:number) => (x & 0x8000) ? (x - 0x10000) : x;
    for (let i = 0; i < hw.length; i++) {
      const s = Math.max(-1, Math.min(1, toS16(hw[i]) / 32768));
      expect(Math.abs(out[i*2] - s)).toBeLessThanOrEqual(1e-3);
      expect(Math.abs(out[i*2+1] - s)).toBeLessThanOrEqual(1e-3);
    }

    // Reading back transfer address should reflect increment by halfwords/4 units
    const expectedUnits = (dstUnits + Math.floor(hw.length / 4)) & 0xffff;
    expect(read16(as, SPU_XFER)).toBe(expectedUnits);
  });
});

