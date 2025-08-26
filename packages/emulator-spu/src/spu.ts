const SPU_BASE = 0x1f801c00;

export class SPU {
  // Simple 16-bit register space covering 0x200 bytes (0x1f801c00..0x1f801dff)
  private regs = new Uint16Array(0x200 / 2);

  read16(addr: number): number {
    const off = ((addr >>> 0) - SPU_BASE) >>> 0;
    if (off >= 0x200) return 0;
    return this.regs[(off >>> 1) & (this.regs.length - 1)] & 0xffff;
  }

  write16(addr: number, v: number): void {
    const off = ((addr >>> 0) - SPU_BASE) >>> 0;
    if (off >= 0x200) return;
    this.regs[(off >>> 1) & (this.regs.length - 1)] = v & 0xffff;
  }
}
