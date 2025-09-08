import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUState } from '@ai-psx/cpu';

interface CPUHost {
  read32(addr: number): number;
  read16(addr: number): number;
  read8(addr: number): number;
  write32(addr: number, val: number): void;
  write16(addr: number, val: number): void;
  write8(addr: number, val: number): void;
}

class MemHost implements CPUHost {
  private mem: Uint8Array;
  constructor(size = 0x100000) { this.mem = new Uint8Array(size); }
  clear(): void { this.mem.fill(0); }
  read8(addr: number): number { return this.mem[addr >>> 0] ?? 0; }
  read16(addr: number): number {
    const a = addr >>> 0;
    return (this.mem[a] | (this.mem[a + 1] << 8)) >>> 0;
  }
  read32(addr: number): number {
    const a = addr >>> 0;
    return (this.mem[a] | (this.mem[a + 1] << 8) | (this.mem[a + 2] << 16) | (this.mem[a + 3] << 24)) >>> 0;
  }
  write8(addr: number, val: number): void { this.mem[addr >>> 0] = val & 0xff; }
  write16(addr: number, val: number): void {
    const a = addr >>> 0; const v = val >>> 0;
    this.mem[a] = v & 0xff; this.mem[a + 1] = (v >>> 8) & 0xff;
  }
  write32(addr: number, val: number): void {
    const a = addr >>> 0; const v = val >>> 0;
    this.mem[a] = v & 0xff; this.mem[a + 1] = (v >>> 8) & 0xff; this.mem[a + 2] = (v >>> 16) & 0xff; this.mem[a + 3] = (v >>> 24) & 0xff;
  }
}

const encI = (op: number, rs: number, rt: number, imm: number): number => {
  return ((op & 0x3f) << 26) | ((rs & 31) << 21) | ((rt & 31) << 16) | (imm & 0xffff);
};

const toHex = (x: number) => (x >>> 0).toString(16).padStart(8, '0');

describe('Unaligned partial loads/stores (little-endian)', () => {
  it('LWL+LWR across all alignments reconstructs the 32-bit value at address p', () => {
    const mem = new MemHost(0x10000);
    const s: CPUState = createResetState(0x00000000);
    const cpu = new R3000A(s, mem as any);

    // Place two instructions at PC=0x0: LWL r2, 3(r1); LWR r2, 0(r1)
    const rs = 1; // base
    const rt = 2; // target
    const LWL = 0x22; const LWR = 0x26;

    const codeBase = 0x0000;
    mem.write32(codeBase + 0x0, encI(LWL, rs, rt, 3));
    mem.write32(codeBase + 0x4, encI(LWR, rs, rt, 0));

    // Data pattern across two words starting at aligned base
    const baseAligned = 0x3000;
    const bytes = [0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88];
    for (let i = 0; i < bytes.length; i++) mem.write8(baseAligned + i, bytes[i]);

    for (let k = 0; k < 4; k++) {
      // Reset state and target register for each alignment
      s.pc = codeBase >>> 0; s.nextPc = (codeBase + 4) >>> 0;
      s.regs.fill(0); // zero regs
      const p = (baseAligned + k) >>> 0; // unaligned address
      s.regs[rs] = p | 0;
      s.regs[rt] = 0x12345678 | 0; // seed with non-zero to ensure proper merging

      // Expected 32-bit little-endian value at address p
      const b0 = mem.read8(p);
      const b1 = mem.read8(p + 1);
      const b2 = mem.read8(p + 2);
      const b3 = mem.read8(p + 3);
      const expected = ((b0) | (b1 << 8) | (b2 << 16) | (b3 << 24)) >>> 0;

      cpu.step(); // LWL
      cpu.step(); // LWR

      const got = s.regs[rt] >>> 0;
      if (got !== expected) {
        throw new Error(`k=${k} expected=${toHex(expected)} got=${toHex(got)}`);
      }
    }

    // If we reach here without throwing, all 4 alignments matched
    expect(true).toBe(true);
  });

  it('SWL+SWR across all alignments writes the 32-bit value at address p', () => {
    const mem = new MemHost(0x10000);
    const s: CPUState = createResetState(0x00000000);
    const cpu = new R3000A(s, mem as any);

    // Place two instructions at PC=0x0: SWL r2, 3(r1); SWR r2, 0(r1)
    const rs = 1; // base
    const rt = 2; // source
    const SWL = 0x2a; const SWR = 0x2e;

    const codeBase = 0x0100;
    mem.write32(codeBase + 0x0, encI(SWL, rs, rt, 3));
    mem.write32(codeBase + 0x4, encI(SWR, rs, rt, 0));

    const baseAligned = 0x4000;
    const value = 0xA1B2C3D4 >>> 0;

    for (let k = 0; k < 4; k++) {
      // Clear data region around target to sentinel values, include guard bytes on both sides
      for (let i = -1; i <= 8; i++) mem.write8(baseAligned + i, 0xcc);

      s.pc = codeBase >>> 0; s.nextPc = (codeBase + 4) >>> 0;
      s.regs.fill(0);
      const p = (baseAligned + k) >>> 0;
      s.regs[rs] = p | 0;
      s.regs[rt] = value | 0;

      cpu.step(); // SWL
      cpu.step(); // SWR

      const e0 = (value >>> 0) & 0xff;
      const e1 = (value >>> 8) & 0xff;
      const e2 = (value >>> 16) & 0xff;
      const e3 = (value >>> 24) & 0xff;

      const got0 = mem.read8(p + 0);
      const got1 = mem.read8(p + 1);
      const got2 = mem.read8(p + 2);
      const got3 = mem.read8(p + 3);

      if (got0 !== e0 || got1 !== e1 || got2 !== e2 || got3 !== e3) {
        throw new Error(`k=${k} store mismatch: got=[${got0.toString(16)},${got1.toString(16)},${got2.toString(16)},${got3.toString(16)}] expected=[${e0.toString(16)},${e1.toString(16)},${e2.toString(16)},${e3.toString(16)}]`);
      }

      // Note: Depending on alignment, SWL/SWR may write into the previous or next aligned word.
      // We only assert correctness of the [p..p+3] target window here.
    }

    expect(true).toBe(true);
  });
});
