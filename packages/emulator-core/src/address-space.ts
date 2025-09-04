import { toPhysical, BIOSRegion, type BIOSProvider } from './memmap.js';
import type { MemoryRegion, Bus } from './bus.js';

export class MappedRAM implements MemoryRegion {
  private data: Uint8Array;
  private mirrorSize: number;
  constructor(
    public base: number,
    public size: number,
    mirrorSize?: number, // Total mirrored region size
  ) {
    if ((size & (size - 1)) !== 0) throw new Error('size must be power of two');
    this.data = new Uint8Array(size);
    // PSX main RAM: 2MB mirrored across 8MB region
    this.mirrorSize = mirrorSize ?? size;
  }
  private containsPhysical(p: number): boolean {
    // Check if in the mirrored region
    return p >= this.base && p < this.base + this.mirrorSize;
  }
  contains(addr: number): boolean {
    return this.containsPhysical(toPhysical(addr));
  }
  private idx(addr: number): number {
    const p = toPhysical(addr) - this.base;
    // Wrap within actual RAM size
    return p & (this.size - 1);
  }
  read8(addr: number): number {
    return this.data[this.idx(addr)];
  }
  read16(addr: number): number {
    const i = this.idx(addr);
    const d = this.data;
    return d[i] | (d[(i + 1) & (this.size - 1)] << 8);
  }
  read32(addr: number): number {
    const i = this.idx(addr);
    const d = this.data;
    return (
      (d[i] |
        (d[(i + 1) & (this.size - 1)] << 8) |
        (d[(i + 2) & (this.size - 1)] << 16) |
        (d[(i + 3) & (this.size - 1)] << 24)) >>>
      0
    );
  }
  write8(addr: number, v: number): void {
    this.data[this.idx(addr)] = v & 0xff;
  }
  write16(addr: number, v: number): void {
    const i = this.idx(addr);
    const d = this.data;
    d[i] = v & 0xff;
    d[(i + 1) & (this.size - 1)] = (v >>> 8) & 0xff;
  }
  write32(addr: number, v: number): void {
    const i = this.idx(addr);
    const d = this.data;
    d[i] = v & 0xff;
    d[(i + 1) & (this.size - 1)] = (v >>> 8) & 0xff;
    d[(i + 2) & (this.size - 1)] = (v >>> 16) & 0xff;
    d[(i + 3) & (this.size - 1)] = (v >>> 24) & 0xff;
  }
}

export interface GPURegs {
  writeGP0(val: number): void;
  writeGP1(val: number): void;
  readGP0(): number;
  readGP1(): number;
}

export interface TimerPort {
  readCount(): number;
  writeCount(v: number): void;
  readMode(): number;
  writeMode(v: number): void;
  readTarget(): number;
  writeTarget(v: number): void;
}

export interface IODevices {
  gpu?: GPURegs;
  intc?: {
    readStatus(): number;
    readMask(): number;
    writeMask(v: number): void;
    ackMask(v: number): void;
  };
  timers?: [TimerPort, TimerPort, TimerPort];
  dma?: { read32(addr: number): number; write32(addr: number, v: number): void };
  spu?: { read16(addr: number): number; write16(addr: number, v: number): void };
  sio?: { read8(addr: number): number; write8(addr: number, v: number): void };
  cdrom?: { read8(addr: number): number; write8(addr: number, v: number): void };
  mdec?: { read32(addr: number): number; write32(addr: number, v: number): void };
}

export class IOHub implements MemoryRegion {
  // Latches for PSX memory control/BIU registers. BIOS probes these; reads should return last written values.
  private memctrl = new Map<number, number>([
    [0x1f801000, 0x1f000000], // EXP1 Base Address
    [0x1f801004, 0x1f802000], // EXP2 Base Address
    [0x1f801008, 0x0013243f], // EXP1 Delay/Size
    [0x1f80100c, 0x00003022], // EXP3 Delay/Size
    [0x1f801010, 0x0013243f], // BIOS ROM Delay/Size
    [0x1f801014, 0x200931e1], // SPU Delay/Size
    [0x1f801018, 0x00020843], // CDROM Delay/Size
    [0x1f80101c, 0x00070777], // EXP2 Delay/Size
    [0x1f801020, 0x00031125], // COM Delay/Size
    [0x1f801060, 0x00000b88], // RAM Size/Control
  ]);
  constructor(private devs: IODevices) {}
  contains(addr: number): boolean {
    const p = toPhysical(addr);
    return p >= 0x1f801000 && p <= 0x1f803fff;
  }
  read8(addr: number): number {
    const p = toPhysical(addr);
    // EXP2 open bus default: 0x1f802000..0x1f802fff -> 0xff
    if (p >= 0x1f802000 && p <= 0x1f802fff) return 0xff;
    // SIO0 byte range: 0x1f801040..0x1f80105f
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      return (this.devs.sio?.read8(p) ?? 0) & 0xff;
    }
    // CDROM 0x1f801800..0x1f801803 (4 bytes)
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      return (this.devs.cdrom?.read8(p) ?? 0) & 0xff;
    }
    const v = this.read32(addr);
    return (v >>> ((addr & 3) * 8)) & 0xff;
  }
  read16(addr: number): number {
    const p = toPhysical(addr);
    // EXP2 open bus default
    if (p >= 0x1f802000 && p <= 0x1f802fff) return 0xffff;
    // SPU: direct 16-bit access to avoid data port side effects from 32-bit aggregation
    if (p >= 0x1f801c00 && p <= 0x1f801dff) {
      return (this.devs.spu?.read16(p) ?? 0) & 0xffff;
    }
    // SIO: read two bytes via byte interface
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      const lo = (this.devs.sio?.read8(p) ?? 0) & 0xff;
      const hi = (this.devs.sio?.read8((p + 1) >>> 0) ?? 0) & 0xff;
      return ((lo) | (hi << 8)) & 0xffff;
    }
    // CDROM: two bytes
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      const lo = (this.devs.cdrom?.read8(p) ?? 0) & 0xff;
      const hi = (this.devs.cdrom?.read8((p + 1) >>> 0) ?? 0) & 0xff;
      return ((lo) | (hi << 8)) & 0xffff;
    }
    const base = addr & ~3;
    const v = this.read32(base);
    return (v >>> ((addr & 2) * 8)) & 0xffff;
  }
  read32(addr: number): number {
    const p = toPhysical(addr);
    const t = this.devs.timers;
    // EXP2 open bus default: return 0xffffffff
    if (p >= 0x1f802000 && p <= 0x1f802fff) return 0xffffffff >>> 0;
    // MDEC registers 0x1f801820..0x1f801827 (word-aligned)
    if (p >= 0x1f801820 && p <= 0x1f801827 && (p & 3) === 0) {
      return (this.devs.mdec?.read32(p) ?? 0) >>> 0;
    }
    // SIO region handled by byte reads/aggregation
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      const b0 = (this.devs.sio?.read8(p) ?? 0) & 0xff;
      const b1 = (this.devs.sio?.read8((p + 1) >>> 0) ?? 0) & 0xff;
      const b2 = (this.devs.sio?.read8((p + 2) >>> 0) ?? 0) & 0xff;
      const b3 = (this.devs.sio?.read8((p + 3) >>> 0) ?? 0) & 0xff;
      return (b0 | (b1 << 8) | (b2 << 16) | (b3 << 24)) >>> 0;
    }
    // CDROM region handled by byte aggregation
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      const b0 = (this.devs.cdrom?.read8(p) ?? 0) & 0xff;
      const b1 = (this.devs.cdrom?.read8((p + 1) >>> 0) ?? 0) & 0xff;
      const b2 = (this.devs.cdrom?.read8((p + 2) >>> 0) ?? 0) & 0xff;
      const b3 = (this.devs.cdrom?.read8((p + 3) >>> 0) ?? 0) & 0xff;
      return (b0 | (b1 << 8) | (b2 << 16) | (b3 << 24)) >>> 0;
    }
    // Memory control latches
    if (this.memctrl.has(p)) {
      return (this.memctrl.get(p)!) >>> 0;
    }
    switch (p) {
      // INTC
      case 0x1f801070:
        return (this.devs.intc?.readStatus() ?? 0) >>> 0; // I_STAT
      case 0x1f801074:
        return (this.devs.intc?.readMask() ?? 0) >>> 0; // I_MASK
      // Timers 0..2: COUNT, MODE, TARGET
      case 0x1f801100:
        return t ? t[0].readCount() & 0xffff : 0;
      case 0x1f801104:
        return t ? t[0].readMode() & 0xffff : 0;
      case 0x1f801108:
        return t ? t[0].readTarget() & 0xffff : 0;
      case 0x1f801110:
        return t ? t[1].readCount() & 0xffff : 0;
      case 0x1f801114:
        return t ? t[1].readMode() & 0xffff : 0;
      case 0x1f801118:
        return t ? t[1].readTarget() & 0xffff : 0;
      case 0x1f801120:
        return t ? t[2].readCount() & 0xffff : 0;
      case 0x1f801124:
        return t ? t[2].readMode() & 0xffff : 0;
      case 0x1f801128:
        return t ? t[2].readTarget() & 0xffff : 0;
      // GPU
      case 0x1f801810:
        return (this.devs.gpu?.readGP0() ?? 0) >>> 0; // GPUREAD (GP0 read)
      case 0x1f801814:
        return (this.devs.gpu?.readGP1() ?? 0) >>> 0; // GPUSTAT (GP1 read)
      default:
        // DMA: channels 0..6 (0x1f801080..0x1f8010e8), DPCR (0x1f8010f0), DICR (0x1f8010f4)
        if (p >= 0x1f801080 && p <= 0x1f8010f4 && (p & 3) === 0) {
          return this.devs.dma?.read32(p) ?? 0;
        }
        // SPU registers: 0x1f801c00..0x1f801dff (16-bit regs)
        if (p >= 0x1f801c00 && p <= 0x1f801dff) {
          const lo = (this.devs.spu?.read16(p) ?? 0) & 0xffff;
          const hi = (this.devs.spu?.read16((p + 2) >>> 0) ?? 0) & 0xffff;
          return ((lo) | (hi << 16)) >>> 0;
        }
        return 0;
    }
  }
  write8(addr: number, v: number): void {
    const p = toPhysical(addr);
    // EXP2 open bus: ignore writes
    if (p >= 0x1f802000 && p <= 0x1f802fff) return;
    // MDEC registers
    if (p >= 0x1f801820 && p <= 0x1f801827 && (p & 3) === 0) {
      this.devs.mdec?.write32(p, v >>> 0);
      return;
    }
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      this.devs.sio?.write8(p, v & 0xff);
      return;
    }
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      this.devs.cdrom?.write8(p, v & 0xff);
      return;
    }
    const shift = (addr & 3) * 8;
    const cur = this.read32(addr);
    const nv = (cur & ~(0xff << shift)) | ((v & 0xff) << shift);
    this.write32(addr & ~3, nv >>> 0);
  }
  write16(addr: number, v: number): void {
    const p = toPhysical(addr);
    // EXP2 open bus: ignore writes
    if (p >= 0x1f802000 && p <= 0x1f802fff) return;
    // SPU: direct 16-bit access
    if (p >= 0x1f801c00 && p <= 0x1f801dff) {
      this.devs.spu?.write16(p, v & 0xffff);
      return;
    }
    // SIO: split into two byte writes
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      this.devs.sio?.write8(p, v & 0xff);
      this.devs.sio?.write8((p + 1) >>> 0, (v >>> 8) & 0xff);
      return;
    }
    // CDROM: split low/high byte
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      this.devs.cdrom?.write8(p, v & 0xff);
      this.devs.cdrom?.write8((p + 1) >>> 0, (v >>> 8) & 0xff);
      return;
    }
    const base = addr & ~3;
    const shift = (addr & 2) * 8;
    const cur = this.read32(base);
    const nv = (cur & ~(0xffff << shift)) | ((v & 0xffff) << shift);
    this.write32(base, nv >>> 0);
  }
  write32(addr: number, v: number): void {
    const p = toPhysical(addr);
    const t = this.devs.timers;
    // EXP2 open bus: ignore writes
    if (p >= 0x1f802000 && p <= 0x1f802fff) return;
    // MDEC registers
    if (p >= 0x1f801820 && p <= 0x1f801827 && (p & 3) === 0) {
      this.devs.mdec?.write32(p, v >>> 0);
      return;
    }
    // SIO: split into four byte writes
    if (p >= 0x1f801040 && p <= 0x1f80105f) {
      this.devs.sio?.write8(p, v & 0xff);
      this.devs.sio?.write8((p + 1) >>> 0, (v >>> 8) & 0xff);
      this.devs.sio?.write8((p + 2) >>> 0, (v >>> 16) & 0xff);
      this.devs.sio?.write8((p + 3) >>> 0, (v >>> 24) & 0xff);
      return;
    }
    // CDROM
    if (p >= 0x1f801800 && p <= 0x1f801803) {
      this.devs.cdrom?.write8(p, v & 0xff);
      this.devs.cdrom?.write8((p + 1) >>> 0, (v >>> 8) & 0xff);
      this.devs.cdrom?.write8((p + 2) >>> 0, (v >>> 16) & 0xff);
      this.devs.cdrom?.write8((p + 3) >>> 0, (v >>> 24) & 0xff);
      return;
    }
    // Memory control latches
    if (this.memctrl.has(p)) {
      this.memctrl.set(p, (v >>> 0));
      return;
    }
    switch (p) {
      // INTC
      case 0x1f801070:
        this.devs.intc?.ackMask(v >>> 0);
        break; // I_STAT
      case 0x1f801074:
        this.devs.intc?.writeMask(v >>> 0);
        break; // I_MASK
      // Timers 0..2: COUNT, MODE, TARGET
      case 0x1f801100:
        if (t) t[0].writeCount(v);
        break;
      case 0x1f801104:
        if (t) t[0].writeMode(v);
        break;
      case 0x1f801108:
        if (t) t[0].writeTarget(v);
        break;
      case 0x1f801110:
        if (t) t[1].writeCount(v);
        break;
      case 0x1f801114:
        if (t) t[1].writeMode(v);
        break;
      case 0x1f801118:
        if (t) t[1].writeTarget(v);
        break;
      case 0x1f801120:
        if (t) t[2].writeCount(v);
        break;
      case 0x1f801124:
        if (t) t[2].writeMode(v);
        break;
      case 0x1f801128:
        if (t) t[2].writeTarget(v);
        break;
      // GPU
      case 0x1f801810:
        this.devs.gpu?.writeGP0(v >>> 0);
        break; // GP0
      case 0x1f801814:
        this.devs.gpu?.writeGP1(v >>> 0);
        break; // GP1
      default:
        // DMA: channels 0..6 (0x1f801080..0x1f8010e8), DPCR (0x1f8010f0), DICR (0x1f8010f4)
        if (p >= 0x1f801080 && p <= 0x1f8010f4 && (p & 3) === 0) {
          this.devs.dma?.write32(p, v >>> 0);
          break;
        }
        // SPU registers: 0x1f801c00..0x1f801dff (16-bit regs)
        if (p >= 0x1f801c00 && p <= 0x1f801dff) {
          this.devs.spu?.write16(p, v & 0xffff);
          this.devs.spu?.write16((p + 2) >>> 0, (v >>> 16) & 0xffff);
          break;
        }
        // ignore
        break;
    }
  }
}

class NopRegion implements MemoryRegion {
  constructor(private containsFn: (addr: number) => boolean) {}
  contains(addr: number): boolean { return this.containsFn(addr >>> 0); }
  read8(_addr: number): number { return 0; }
  read16(_addr: number): number { return 0; }
  read32(_addr: number): number { return 0; }
  write8(_addr: number, _val: number): void {}
  write16(_addr: number, _val: number): void {}
  write32(_addr: number, _val: number): void {}
}

export class AddressSpace implements Bus {
  private regions: MemoryRegion[] = [];
  addRegion(r: MemoryRegion) {
    this.regions.push(r);
  }
  private find(addr: number): MemoryRegion {
    for (const r of this.regions) if (r.contains(addr)) return r;
    throw new Error(`Unmapped address ${addr >>> 0}`);
  }
  read8(addr: number): number {
    return this.find(addr).read8(addr);
  }
  read16(addr: number): number {
    return this.find(addr).read16(addr);
  }
  read32(addr: number): number {
    return this.find(addr).read32(addr);
  }
  write8(addr: number, v: number): void {
    this.find(addr).write8(addr, v);
  }
  write16(addr: number, v: number): void {
    this.find(addr).write16(addr, v);
  }
  write32(addr: number, v: number): void {
    this.find(addr).write32(addr, v);
  }
  loadBlock(addr: number, length: number): Uint8Array {
    const out = new Uint8Array(length);
    for (let i = 0; i < length; i++) out[i] = this.read8(addr + i);
    return out;
  }
  storeBlock(addr: number, data: Uint8Array): void {
    for (let i = 0; i < data.length; i++) this.write8(addr + i, data[i]);
  }
}

export function createDefaultPSXAddressSpace(bios: BIOSProvider, io?: IOHub): AddressSpace {
  const as = new AddressSpace();
  as.addRegion(new MappedRAM(0x00000000, 2 * 1024 * 1024)); // 2MB RAM
  as.addRegion(new MappedRAM(0x1f800000, 1024)); // 1KB scratchpad
  as.addRegion(new BIOSRegion(bios));
  as.addRegion(
    io ??
      new IOHub({
        gpu: { writeGP0: () => {}, writeGP1: () => {}, readGP0: () => 0, readGP1: () => 0 },
      }),
  );
  return as;
}
