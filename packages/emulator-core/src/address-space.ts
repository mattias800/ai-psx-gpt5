import { toPhysical, BIOSRegion, type BIOSProvider } from './memmap';
import type { MemoryRegion, Bus } from './bus';

export class MappedRAM implements MemoryRegion {
  private data: Uint8Array;
  constructor(public base: number, public size: number) {
    if ((size & (size - 1)) !== 0) throw new Error('size must be power of two');
    this.data = new Uint8Array(size);
  }
  private containsPhysical(p: number): boolean {
    return p >= this.base && p < (this.base + this.size);
  }
  contains(addr: number): boolean { return this.containsPhysical(toPhysical(addr)); }
  private idx(addr: number): number { const p = toPhysical(addr) - this.base; return p & (this.size - 1); }
  read8(addr: number): number { return this.data[this.idx(addr)]; }
  read16(addr: number): number { const i = this.idx(addr); const d = this.data; return d[i] | (d[(i+1)&(this.size-1)]<<8); }
  read32(addr: number): number { const i = this.idx(addr); const d = this.data; return (d[i]|(d[(i+1)&(this.size-1)]<<8)|(d[(i+2)&(this.size-1)]<<16)|(d[(i+3)&(this.size-1)]<<24))>>>0; }
  write8(addr: number, v: number): void { this.data[this.idx(addr)] = v & 0xff; }
  write16(addr: number, v: number): void { const i = this.idx(addr); const d=this.data; d[i]=v&0xff; d[(i+1)&(this.size-1)]=(v>>>8)&0xff; }
  write32(addr: number, v: number): void { const i=this.idx(addr); const d=this.data; d[i]=v&0xff; d[(i+1)&(this.size-1)]=(v>>>8)&0xff; d[(i+2)&(this.size-1)]=(v>>>16)&0xff; d[(i+3)&(this.size-1)]=(v>>>24)&0xff; }
}

export class IOStubRegion implements MemoryRegion {
  contains(addr: number): boolean { const p = toPhysical(addr); return p >= 0x1f801000 && p <= 0x1f803fff; }
  read8(_addr: number): number { return 0; }
  read16(_addr: number): number { return 0; }
  read32(_addr: number): number { return 0; }
  write8(_addr: number, _v: number): void {}
  write16(_addr: number, _v: number): void {}
  write32(_addr: number, _v: number): void {}
}

export class AddressSpace implements Bus {
  private regions: MemoryRegion[] = [];
  addRegion(r: MemoryRegion) { this.regions.push(r); }
  private find(addr: number): MemoryRegion {
    for (const r of this.regions) if (r.contains(addr)) return r;
    throw new Error(`Unmapped address ${addr>>>0}`);
  }
  read8(addr: number): number { return this.find(addr).read8(addr); }
  read16(addr: number): number { return this.find(addr).read16(addr); }
  read32(addr: number): number { return this.find(addr).read32(addr); }
  write8(addr: number, v: number): void { this.find(addr).write8(addr, v); }
  write16(addr: number, v: number): void { this.find(addr).write16(addr, v); }
  write32(addr: number, v: number): void { this.find(addr).write32(addr, v); }
  loadBlock(addr: number, length: number): Uint8Array { const out=new Uint8Array(length); for (let i=0;i<length;i++) out[i]=this.read8(addr+i); return out; }
  storeBlock(addr: number, data: Uint8Array): void { for (let i=0;i<data.length;i++) this.write8(addr+i, data[i]); }
}

export function createDefaultPSXAddressSpace(bios: BIOSProvider): AddressSpace {
  const as = new AddressSpace();
  as.addRegion(new MappedRAM(0x00000000, 2 * 1024 * 1024)); // 2MB RAM
  as.addRegion(new MappedRAM(0x1f800000, 1024)); // 1KB scratchpad
  as.addRegion(new BIOSRegion(bios));
  as.addRegion(new IOStubRegion());
  return as;
}

