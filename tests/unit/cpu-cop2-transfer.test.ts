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

const MFC2 = (rt: number, rd: number) => (0x12<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const CFC2 = (rt: number, rd: number) => (0x12<<26) | (0x02<<21) | (rt<<16) | (rd<<11);
const MTC2 = (rt: number, rd: number) => (0x12<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const CTC2 = (rt: number, rd: number) => (0x12<<26) | (0x06<<21) | (rt<<16) | (rd<<11);
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);

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

describe('COP2 transfers (GTE)', () => {
  it('MTC2/MFC2 and CTC2/CFC2 round-trip', () => {
    const mem = new TestMem();
    // r1=0x1234, r2=0xabcd
    const code = emit([
      ORI(0,1,0x1234),
      ORI(0,2,0xabcd),
      // MTC2 r1 -> dr[3]
      MTC2(1,3),
      // CTC2 r2 -> cr[5]
      CTC2(2,5),
      // MFC2 r3 <- dr[3]
      MFC2(3,3),
      // CFC2 r4 <- cr[5]
      CFC2(4,5),
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu.s.regs[3] & 0xffff).toBe(0x1234);
    expect(cpu.s.regs[4] & 0xffff).toBe(0xabcd);
  });
});

