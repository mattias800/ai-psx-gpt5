import { describe, it, expect } from 'vitest';
import { R3000A, createResetState, type CPUHost } from '../../packages/emulator-cpu/src/cpu';
import { InterruptController, IRQ } from '../../packages/emulator-core/src/timing';

class TestMem implements CPUHost {
  buf = new Uint8Array(256).fill(0);
  read32(a: number): number { return (this.buf[a] | (this.buf[a+1]<<8) | (this.buf[a+2]<<16) | (this.buf[a+3]<<24)) >>> 0; }
  read16(a: number): number { return this.buf[a] | (this.buf[a+1]<<8); }
  read8(a: number): number { return this.buf[a]; }
  write32(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; this.buf[a+2]=(v>>>16)&0xff; this.buf[a+3]=(v>>>24)&0xff; }
  write16(a: number, v: number): void { this.buf[a]=v&0xff; this.buf[a+1]=(v>>>8)&0xff; }
  write8(a: number, v: number): void { this.buf[a]=v&0xff; }
}

function ORI(rs: number, rt: number, imm: number) { return (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff); }
function MTC0(rt: number, rd: number) { return (0x10<<26) | (0x04<<21) | (rt<<16) | (rd<<11); }

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

describe('CPU interrupts and exception entry', () => {
  it('jumps to 0x80000080 with EPC set and SR mode rotated when IE=1 and IRQ pending', () => {
    const mem = new TestMem();
    // Program: ORI r1, r0, 1; MTC0 r1, SR(12); (just enabling IE)
    const code = emit([
      ORI(0,1,0x0401), // IEc=1 and IM2=1 (enable external IRQ line)
      MTC0(1,12),
    ]);
    mem.buf.set(code, 0);

    const intc = new InterruptController();
    const cpu = new R3000A(createResetState(0), mem, () => intc.pending);

    // Step enable IE
    cpu.step(); // ORI
    cpu.step(); // MTC0
    expect(cpu['cop0'][12] & 1).toBe(1);

    // Raise VBLANK and mask it
    intc.setMask(1<<IRQ.VBLANK);
    intc.raise(IRQ.VBLANK);

    // Next step should take interrupt before fetching
    const pcBefore = cpu.s.pc >>> 0;
    cpu.step();
    expect(cpu.s.pc >>> 0).toBe(0x80000080);
    expect(cpu['cop0'][14] >>> 0).toBe(((pcBefore + 4) >>> 0)); // EPC points to instruction after the one just executed
    expect((cpu['cop0'][12] & 0x3f) >>> 0).toBe(0x04); // rotated mode bits
  });
});

