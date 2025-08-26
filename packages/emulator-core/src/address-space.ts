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

export interface GPURegs {
  writeGP0(val: number): void;
  writeGP1(val: number): void;
  readGP0(): number;
  readGP1(): number;
}

export class IOHub implements MemoryRegion {
  constructor(private gpu: GPURegs) {}
  contains(addr: number): boolean { const p = toPhysical(addr); return p >= 0x1f801000 && p <= 0x1f803fff; }
  read8(addr: number): number { const v = this.read32(addr); return (v >>> ((addr & 3) * 8)) & 0xff; }
  read16(addr: number): number { const v = this.read32(addr); return (v >>> ((addr & 2) * 8)) & 0xffff; }
  read32(addr: number): number {
    const p = toPhysical(addr);
    switch (p) {
      case 0x1f801810: // GPUREAD (GP0 read)
        return this.gpu.readGP0() >>> 0;
      case 0x1f801814: // GPUSTAT (GP1 read)
        return this.gpu.readGP1() >>> 0;
      default:
        return 0;
    }
  }
  write8(addr: number, v: number): void { const shift = (addr & 3) * 8; const cur = this.read32(addr); const nv = (cur & ~(0xff << shift)) | ((v & 0xff) << shift); this.write32(addr & ~3, nv >>> 0); }
  write16(addr: number, v: number): void { const shift = (addr & 2) * 8; const cur = this.read32(addr); const nv = (cur & ~(0xffff << shift)) | ((v & 0xffff) << shift); this.write32(addr & ~3, nv >>> 0); }
  write32(addr: number, v: number): void {
    const p = toPhysical(addr);
    switch (p) {
      case 0x1f801810: // GP0
        this.gpu.writeGP0(v >>> 0); break;
      case 0x1f801814: // GP1
        this.gpu.writeGP1(v >>> 0); break;
      default:
        // ignore
        break;
    }
  }
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

export function createDefaultPSXAddressSpace(bios: BIOSProvider, io?: IOHub): AddressSpace {
  const as = new AddressSpace();
  as.addRegion(new MappedRAM(0x00000000, 2 * 1024 * 1024)); // 2MB RAM
  as.addRegion(new MappedRAM(0x1f800000, 1024)); // 1KB scratchpad
  as.addRegion(new BIOSRegion(bios));
  as.addRegion(io ?? new IOHub({
    writeGP0: () => {}, writeGP1: () => {}, readGP0: () => 0, readGP1: () => 0,
  }));
  return as;
}

