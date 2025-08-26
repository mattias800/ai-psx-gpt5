export interface Bus {
  read8(addr: number): number;
  read16(addr: number): number;
  read32(addr: number): number;
  write8(addr: number, val: number): void;
  write16(addr: number, val: number): void;
  write32(addr: number, val: number): void;
  loadBlock(addr: number, length: number): Uint8Array; // inclusive of wrapping
  storeBlock(addr: number, data: Uint8Array): void;
}

export interface MemoryRegion {
  contains(addr: number): boolean;
  read8(addr: number): number;
  read16(addr: number): number;
  read32(addr: number): number;
  write8(addr: number, val: number): void;
  write16(addr: number, val: number): void;
  write32(addr: number, val: number): void;
}

export class SimpleRAM implements MemoryRegion {
  private data: Uint8Array;
  private mask: number;

  constructor(sizeBytes: number) {
    if ((sizeBytes & (sizeBytes - 1)) !== 0) throw new Error('size must be power of two');
    this.data = new Uint8Array(sizeBytes);
    this.mask = sizeBytes - 1;
  }
  private idx(addr: number): number { return addr & this.mask; }
  contains(_addr: number): boolean { return true; }
  read8(addr: number): number { return this.data[this.idx(addr)]; }
  write8(addr: number, val: number): void { this.data[this.idx(addr)] = val & 0xff; }
  read16(addr: number): number {
    const i = this.idx(addr);
    return this.data[i] | (this.data[this.idx(addr + 1)] << 8);
  }
  write16(addr: number, val: number): void {
    const i = this.idx(addr);
    this.data[i] = val & 0xff; this.data[this.idx(addr + 1)] = (val >>> 8) & 0xff;
  }
  read32(addr: number): number {
    const i = this.idx(addr);
    return (this.data[i] | (this.data[this.idx(addr + 1)] << 8) | (this.data[this.idx(addr + 2)] << 16) | (this.data[this.idx(addr + 3)] << 24)) >>> 0;
  }
  write32(addr: number, val: number): void {
    const i = this.idx(addr);
    this.data[i] = val & 0xff;
    this.data[this.idx(addr + 1)] = (val >>> 8) & 0xff;
    this.data[this.idx(addr + 2)] = (val >>> 16) & 0xff;
    this.data[this.idx(addr + 3)] = (val >>> 24) & 0xff;
  }
}

export class FlatBus implements Bus {
  constructor(private region: MemoryRegion) {}
  read8(addr: number): number { return this.region.read8(addr); }
  read16(addr: number): number { return this.region.read16(addr); }
  read32(addr: number): number { return this.region.read32(addr); }
  write8(addr: number, val: number): void { this.region.write8(addr, val); }
  write16(addr: number, val: number): void { this.region.write16(addr, val); }
  write32(addr: number, val: number): void { this.region.write32(addr, val); }
  loadBlock(addr: number, length: number): Uint8Array {
    const out = new Uint8Array(length);
    for (let i = 0; i < length; i++) out[i] = this.read8(addr + i);
    return out;
  }
  storeBlock(addr: number, data: Uint8Array): void {
    for (let i = 0; i < data.length; i++) this.write8(addr + i, data[i]);
  }
}

