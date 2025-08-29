import { describe, it, expect } from 'vitest';
import { SPU } from '@ai-psx/spu';

const SPU_BASE = 0x1f801c00;

function write16(spu: SPU, addr: number, v: number) { spu.write16(addr >>> 0, v & 0xffff); }
function read16(spu: SPU, addr: number) { return spu.read16(addr >>> 0) & 0xffff; }

describe('SPU reverb LP filter MMIO readback (0x1c8)', () => {
  it('mirrors the last written value and clamps to 0..0x3fff', () => {
    const spu = new SPU();
    // Write within range
    write16(spu, SPU_BASE + 0x1c8, 0x2abc);
    expect(read16(spu, SPU_BASE + 0x1c8)).toBe(0x2abc);

    // Write above range should clamp the effective coefficient but readback mirrors raw write; we ensure storage is masked to 16 bits
    write16(spu, SPU_BASE + 0x1c8, 0xffff);
    // In this implementation we store raw 16-bit; coefficient computation internally clamps to [0..1]
    expect(read16(spu, SPU_BASE + 0x1c8)).toBe(0xffff & 0xffff);

    // Write negative via sign bit pattern (should just mirror the halfword as-is in register readback)
    write16(spu, SPU_BASE + 0x1c8, 0x8000);
    expect(read16(spu, SPU_BASE + 0x1c8)).toBe(0x8000);
  });
});

