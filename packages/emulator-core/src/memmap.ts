export const KUSEG = 0x00000000; // 0x00000000-0x7fffffff (user)
export const KSEG0 = 0x80000000; // 0x80000000-0x9fffffff (cached kernel)
export const KSEG1 = 0xa0000000; // 0xa0000000-0xbfffffff (uncached kernel)

export function toPhysical(addr: number): number {
  addr >>>= 0;
  const seg = addr >>> 29; // top 3 bits
  if (seg === 0b100 || seg === 0b101) return addr & 0x1fffffff; // KSEG0/1 mirror
  return addr & 0x7fffffff; // KUSEG (and others not used)
}

export interface BIOSProvider {
  read8(offset: number): number;
  read16(offset: number): number;
  read32(offset: number): number;
  size(): number;
}

export class BIOSRegion {
  constructor(private provider: BIOSProvider) {}
  contains(addr: number): boolean {
    const p = toPhysical(addr);
    return p >= 0x1fc00000 && p < 0x1fc00000 + this.provider.size();
  }
  private off(addr: number): number { return (toPhysical(addr) - 0x1fc00000) >>> 0; }
  read8(addr: number): number { return this.provider.read8(this.off(addr)); }
  read16(addr: number): number { return this.provider.read16(this.off(addr)); }
  read32(addr: number): number { return this.provider.read32(this.off(addr)); }
  write8(_addr: number, _val: number): void {}
  write16(_addr: number, _val: number): void {}
  write32(_addr: number, _val: number): void {}
}

