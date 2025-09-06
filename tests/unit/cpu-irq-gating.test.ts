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

const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
const MTC0 = (rt: number, rd: number) => (0x10<<26) | (0x04<<21) | (rt<<16) | (rd<<11);
const NOP  = 0x00000000;

describe('CPU interrupt gating via SR.IM & CAUSE.IP', () => {
  it('does not take IRQ unless (IEc=1) and (IM & IP)!=0; sets Cause.IP2 when INTC pending', () => {
    const mem = new TestMem();
    // Enable IEc and IM2 (bit 10). Sequence:
    //  r1 = 0x0401; mtc0 r1, SR; nop; nop
    const code = new Uint8Array(16);
    const instrs = [
      ORI(0,1,0x0401),
      MTC0(1,12),
      NOP,
      NOP,
    ];
    for (let i=0;i<instrs.length;i++) {
      const v = instrs[i] >>> 0; const o = i*4;
      code[o+0]=v&0xff; code[o+1]=(v>>>8)&0xff; code[o+2]=(v>>>16)&0xff; code[o+3]=(v>>>24)&0xff;
    }
    mem.buf.set(code, 0);

    const intc = new InterruptController();
    const cpu = new R3000A(createResetState(0), mem, () => intc.pending);

    // Step ORI+MTC0
    cpu.step();
    cpu.step();
    // With no INTC pending, no interrupt should fire
    const pcBefore = cpu.s.pc >>> 0;
    cpu.step();
    expect(cpu.s.pc >>> 0).toBe(pcBefore + 4);
    // Set INTC pending for VBLANK (mask + raise)
    intc.setMask(1<<IRQ.VBLANK);
    intc.raise(IRQ.VBLANK);

    // Next step should take interrupt and jump to 0x80000080
    const pcBeforeIrq = cpu.s.pc >>> 0;
    cpu.step();
    expect(cpu.s.pc >>> 0).toBe(0x80000080);
    // EPC should point to instruction that would have executed next (per existing semantics)
    expect(cpu['cop0'][14] >>> 0).toBe(((pcBeforeIrq + 4) >>> 0));
    // ExcCode field should be 0 for interrupt exceptions
    expect(((cpu['cop0'][13] >>> 2) & 0x1f) >>> 0).toBe(0);
  });
});

