import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';

class TestMem implements CPUHost {
  buf = new Uint8Array(1024).fill(0);
  read32(a: number): number { return (this.buf[a] | (this.buf[a+1]<<8) | (this.buf[a+2]<<16) | (this.buf[a+3]<<24)) >>> 0; }
  read16(a: number): number { return this.buf[a] | (this.buf[a+1]<<8); }
  read8(a: number): number { return this.buf[a]; }
  write32(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; this.buf[a+2]=(v>>>16)&0xff; this.buf[a+3]=(v>>>24)&0xff; }
  write16(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; }
  write8(a: number, v: number): void { this.buf[a]=v&0xff; }
}

function emit(instrs: number[]): Uint8Array {
  const u8 = new Uint8Array(instrs.length * 4);
  for (let i = 0; i < instrs.length; i++) {
    const v = instrs[i] >>> 0;
    u8[i*4+0] = v & 0xff;
    u8[i*4+1] = (v >>> 8) & 0xff;
    u8[i*4+2] = (v >>> 16) & 0xff;
    u8[i*4+3] = (v >>> 24) & 0xff;
  }
  return u8;
}

const ORI = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const LB = (rs: number, rt: number, off: number) => (0x20<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LBU = (rs: number, rt: number, off: number) => (0x24<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LH = (rs: number, rt: number, off: number) => (0x21<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LHU = (rs: number, rt: number, off: number) => (0x25<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LW = (rs: number, rt: number, off: number) => (0x23<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const SB = (rs: number, rt: number, off: number) => (0x28<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const SH = (rs: number, rt: number, off: number) => (0x29<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const SW = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LWL = (rs: number, rt: number, off: number) => (0x22<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const LWR = (rs: number, rt: number, off: number) => (0x26<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const SWL = (rs: number, rt: number, off: number) => (0x2a<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);
const SWR = (rs: number, rt: number, off: number) => (0x2e<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);


describe('R3000A loads/stores', () => {
  it('LB/LBU/LH/LHU/LW and SB/SH/SW', () => {
    const mem = new TestMem();
    // Set base in r1 = 100
    const code = emit([
      ORI(0,1,100),
      // stores from r2 value 0x8899AABB
      ORI(0,2,0xAABB), // low 16
      // high 16 into place via ORI r0,r3 + shifts not implemented; write via SW after we write full mem directly
      SW(1,2,0),
      LB(1,3,0), // should sign-extend 0xBB -> -0x45
      LBU(1,4,0), // 0xBB
      LH(1,5,0), // 0xAABB -> -0x5545
      LHU(1,6,0), // 0xAABB
      LW(1,7,0), // 0x??AABB (we only set low 16 by SW)
    ]);
    mem.buf.set(code, 0);
    // Preload memory word at 100 = 0x8899AABB
    mem.write32(100, 0x8899aabb >>> 0);
    const cpu = new R3000A(createResetState(0), mem);
    for (let i = 0; i < code.length/4; i++) cpu.step();
    expect(cpu.s.regs[3] | 0).toBe(((0xbb << 24) >> 24) | 0);
    expect(cpu.s.regs[4] >>> 0).toBe(0xbb);
    expect(cpu.s.regs[5] | 0).toBe(((0xaabb << 16) >> 16) | 0);
    expect(cpu.s.regs[6] >>> 0).toBe(0xaabb);
    expect(cpu.s.regs[7] >>> 0).toBe(0x8899aabb >>> 0);
    // SB/SH overwrite
    mem.write32(100, 0);
    const code2 = emit([
      ORI(0,1,100),
      ORI(0,2,0xCCDD),
      SB(1,2,0), // store 0xDD
      SH(1,2,2), // store 0xCCDD at +2
      LW(1,7,0),
    ]);
    mem.buf.fill(0); mem.buf.set(code2, 0);
    const cpu2 = new R3000A(createResetState(0), mem);
    for (let i = 0; i < code2.length/4; i++) cpu2.step();
    // memory bytes [100..103] expected: [DD,00,DD,CC]
    expect(mem.read32(100) >>> 0).toBe(0xccdd00dd >>> 0);
    expect(cpu2.s.regs[7] >>> 0).toBe(0xccdd00dd >>> 0);
  });

  it('LWL/LWR combine unaligned loads; SWL/SWR unaligned stores (little-endian)', () => {
    const mem = new TestMem();
    // bytes at 200..203 = [11,22,33,44]
    mem.buf[200]=0x11; mem.buf[201]=0x22; mem.buf[202]=0x33; mem.buf[203]=0x44;

    // Test LWL/LWR patterns into r2 starting rt preset
    const code = emit([
      ORI(0,1,200),
      ORI(0,2,0xFFFF), // preset lower bits for merge visibility
      LWL(1,2,1),      // b=1: expect bytes 1..3 loaded -> high 3 bytes
      LWR(1,2,0),      // b=0: expect byte0 loaded -> complete word 0x44332211
    ]);
    mem.buf.fill(0); mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    for (let i = 0; i < code.length/4; i++) cpu.step();
    expect(cpu.s.regs[2] >>> 0).toBe(0x44332211 >>> 0);

    // Test SWL/SWR to write 0xA1B2C3D4 at 300 with base+1 and base+0
    const code2 = emit([
      ORI(0,1,300),
      ORI(0,2,0xC3D4),
      // Preload high via direct memory, as ORI can't set upper 16 here; we'll write via SW to aligned then unaligned pieces
    ]);
    mem.buf.fill(0); mem.buf.set(code2, 0);
    const cpu2 = new R3000A(createResetState(0), mem);
    // Manually set r2 full 32-bit
    cpu2.s.regs[2] = 0xa1b2c3d4 | 0;
    // Perform SWL at addr+1 then SWR at addr+0
    // Encode SWL r1+1,r2 and SWR r1+0,r2, then LW to verify
    const code3 = emit([
      SWL(1,2,1),
      SWR(1,2,0),
      LW(1,3,0),
    ]);
    mem.buf.set(code3, code2.length);
    for (let i = 0; i < code3.length/4; i++) cpu2.step();
    expect(mem.read32(300) >>> 0).toBe(0xa1b2c3d4 >>> 0);
    expect(cpu2.s.regs[3] >>> 0).toBe(0xa1b2c3d4 >>> 0);
  });
});

