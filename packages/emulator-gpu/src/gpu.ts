export class GPU {
  // 1MB VRAM: 1024x512 16bpp
  vram = new Uint16Array(1024 * 512);
  // GP0/GP1 FIFOs (very small soft FIFOs for tests)
  private gp0: number[] = [];
  private gp1: number[] = [];
  status = 0x1c000000; // basic status init value placeholder

  writeGP0(val: number) { this.gp0.push(val >>> 0); }
  writeGP1(val: number) { this.gp1.push(val >>> 0); }
  readGP0(): number { return 0; }
  readGP1(): number { return this.status >>> 0; }

  clearVRAM(color: number = 0) {
    this.vram.fill(color & 0xffff);
  }
}

