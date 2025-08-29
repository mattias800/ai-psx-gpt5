import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;
const VOICE0 = SPU_BASE + 0x00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }
function read16(spu: SPU, addr: number) { return spu.read16(addr >>> 0) & 0xffff; }

function makeConstPCM(n: number, amp=32767): Int16Array { return Int16Array.from(new Array(n).fill(amp|0)); }

describe('SPU reverb & pitch-mod MMIO (no-op mixing)', () => {
  it('reverb volumes and masks are writable/readable and add echo to output', () => {
    const spu = new SPU();
    spu.setMasterVolume(0x3fff, 0x3fff);
    spu.setVoiceVolume(0, 0x3fff, 0x3fff);
    const pcm = makeConstPCM(1024);
    spu.enqueuePCM(0, pcm);
    spu.setVoiceADSR(0, 0, 0, 1.0, 0);
    spu.setVoiceKeyOn(0, true);

    // baseline dry
    const baseDry = spu.mix(64);

    write16(spu, SPU_BASE + 0x184, 0x2000); // RVB_VOLL
    write16(spu, SPU_BASE + 0x186, 0x2000); // RVB_VOLR
    write16(spu, SPU_BASE + 0x198, 0x0001); // RVB_ON v0

    // verify readback
    expect(read16(spu, SPU_BASE + 0x184)).toBe(0x2000);
    expect(read16(spu, SPU_BASE + 0x186)).toBe(0x2000);

    // mix enough frames to pass the internal reverb delay
    const wet = spu.mix(256);
    // wet tail should differ from dry baseline
    let diff = 0;
    for (let i = 240; i < 256; i++) diff += Math.abs(wet[i*2] - baseDry[(i-240)*2]);
    expect(diff).toBeGreaterThan(0);
  });

  it('pitch-mod masks are writable/readable (no mixing effect yet)', () => {
    const spu = new SPU();
    write16(spu, SPU_BASE + 0x190, 0xffff);
    write16(spu, SPU_BASE + 0x192, 0x00ff);
    expect(read16(spu, SPU_BASE + 0x190)).toBe(0xffff);
    expect(read16(spu, SPU_BASE + 0x192)).toBe(0x00ff);
  });
});

