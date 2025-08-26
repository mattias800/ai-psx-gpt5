import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';

class TestMem implements CPUHost {
  buf = new Uint8Array(256).fill(0);
  read32(a: number): number { return (this.buf[a] | (this.buf[a+1]<<8) | (this.buf[a+2]<<16) | (this.buf[a+3]<<24)) >>> 0; }
  read16(a: number): number { return this.buf[a] | (this.buf[a+1]<<8); }
  read8(a: number): number { return this.buf[a]; }
  write32(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; this.buf[a+2]=(v>>>16)&0xff; this.buf[a+3]=(v>>>24)&0xff; }
  write16(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; }
  write8(a: number, v: number): void { this.buf[a]=v&0xff; }
}

const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const GTEop = (fn: number) => (0x12<<26) | (0x10<<21) | (fn & 0x3f);
const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);

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

describe('GTE MVMVA (simplified)', () => {
  it('MVMVA with identity matrix and zero translation sets IR to V', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // Identity rotation, TR=0
      ORI(0,4,1), CTC2(4,0), CTC2(4,4), CTC2(4,8),
      ORI(0,5,0), CTC2(5,9), ORI(0,6,0), CTC2(6,10), ORI(0,7,0), CTC2(7,11),
      // V=(1,2,3)
      ORI(0,1,1), ORI(0,2,2), ORI(0,3,3), MTC2(1,0), MTC2(2,1), MTC2(3,2),
      // MVMVA
      GTEop(0x02),
      // Read IR1..IR3
      MFC2(8,9), MFC2(9,10), MFC2(10,11),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[8]|0).toBe(1);
    expect(cpu.s.regs[9]|0).toBe(2);
    expect(cpu.s.regs[10]|0).toBe(3);
  });

  it('MVMVA with scale and translation, and saturation', () => {
    const mem = new TestMem();
    const cpu = new R3000A(createResetState(0), mem);
    const code = emit([
      // R = diag(200, -200, 300), TR=(1000, -1000, 20000)
      ORI(0,1,200), CTC2(1,0),
      LUI(2,0xffff), ORI(2,2,0xff38), CTC2(2,4), // -200
      ORI(0,3,300), CTC2(3,8),
      ORI(0,4,1000), CTC2(4,9),
      LUI(5,0xffff), ORI(5,5,0xfc18), CTC2(5,10), // -1000
      ORI(0,6,20000), CTC2(6,11),
      // V=(200, 200, 100)
      ORI(0,7,200), ORI(0,8,200), ORI(0,9,100), MTC2(7,0), MTC2(8,1), MTC2(9,2),
      // MVMVA
      GTEop(0x02),
      MFC2(10,9), MFC2(11,10), MFC2(12,11),
    ]);
    mem.buf.set(code, 0);
    for (let i=0;i<code.length/4;i++) cpu.step();
    // rx = 200*200 + 1000 = 41000 -> saturates to 32767
    // ry = -200*200 + (-1000) = -41000 -> saturates to -32768
    // rz = 300*100 + 20000 = 50000 -> saturates to 32767
    expect(cpu.s.regs[10]|0).toBe(32767);
    expect(cpu.s.regs[11]|0).toBe(-32768);
    expect(cpu.s.regs[12]|0).toBe(32767);
  });
});

