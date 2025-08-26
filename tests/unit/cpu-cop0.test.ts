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

const MFC0 = (rt: number, rd: number) => (0x10<<26) | (0x00<<21) | (rt<<16) | (rd<<11);
const MTC0 = (rt: number, rd: number) => (0x10<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const RFE  = () => (0x10<<26) | (0x10<<21) | 0x10; // COP0, CO=1, RFE fn=0x10
const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);


describe('COP0 basic', () => {
  it('MTC0/MFC0 and RFE mode bit rotation', () => {
    const mem = new TestMem();
    // SR is reg12. Start with mode bits = b'abcxyz' in SR[5:0] to see rotation by 2
    const code = emit([
      ORI(0,1,0x003f),      // r1=0x003f
      MTC0(1,12),           // SR = 0x003f
      RFE(),                // rotate: 0b111111 -> 0b111111 (no change, but test chain)
      MFC0(2,12),           // r2 = SR
    ]);
    mem.buf.set(code, 0);
    const cpu = new R3000A(createResetState(0), mem);
    for (let i=0;i<code.length/4;i++) cpu.step();
    expect(cpu['cop0'][12] & 0x3f).toBe(0x3f);
    expect(cpu.s.regs[2] & 0x3f).toBe(0x3f);

    // Now set SR mode bits to 0b01_10_00 (0x18) and expect rotate >>2 -> 0b00_01_10 (0x06)
    const code2 = emit([
      ORI(0,1,0x0018),
      MTC0(1,12),
      RFE(),
      MFC0(2,12),
    ]);
    mem.buf.fill(0); mem.buf.set(code2, 0);
    for (let i=0;i<code2.length/4;i++) cpu.step();
    expect(cpu['cop0'][12] & 0x3f).toBe(0x06);
    expect(cpu.s.regs[2] & 0x3f).toBe(0x06);
  });
});

