import type { Bus } from './bus';
import type { GPURegs } from './address-space';
import { InterruptController, IRQ } from './timing';

export class DMAController {
  constructor(private bus: Bus, private gpu: GPURegs) {}
  // Simple immediate transfer: read N words from src and stream to GP0
  transferToGPU(srcAddr: number, wordCount: number) {
    let addr = srcAddr >>> 0;
    for (let i = 0; i < wordCount; i++) {
      const w = this.bus.read32(addr) >>> 0;
      this.gpu.writeGP0(w);
      addr = (addr + 4) >>> 0;
    }
  }
}

// Full DMAC skeleton with channels 0..6 and minimal DPCR/DICR shadow.
// Supported transfers:
//  - GPU (ch2):
//      * sync mode 0 (block), dir=from memory -> stream words to GP0
//      * sync mode 2 (linked-list), dir=from memory -> traverse list and stream to GP0
//  - OTC (ch6):
//      * sync mode 0 (block), dir=to memory, step=decrement -> build ordering table pointers
// Other channels & modes are unimplemented for now.
export class DMAC {
  private channels: { madr: number; bcr: number; chcr: number }[] = Array.from({ length: 7 }, () => ({ madr: 0, bcr: 0, chcr: 0 }));
  private dpcr = 0xffffffff >>> 0; // default all enabled (for simplicity)
  private dicr = 0 >>> 0; // IRQ control (shadow)

  constructor(private bus: Bus, private gpu: GPURegs, private intc?: InterruptController) {}

  read32(addr: number): number {
    const a = addr >>> 0;
    // Channel windows: 0x1f801080 + ch*0x10 (MADR,BCR,CHCR)
    if (a >= 0x1f801080 && a <= 0x1f8010e8) {
      const ch = ((a - 0x1f801080) >>> 0) / 0x10 | 0;
      const off = (a - 0x1f801080) & 0x0f;
      const c = this.channels[ch];
      switch (off) {
        case 0x0: return c.madr >>> 0;
        case 0x4: return c.bcr >>> 0;
        case 0x8: return c.chcr >>> 0;
        default: return 0;
      }
    }
    if (a === 0x1f8010f0) return this.dpcr >>> 0;
    if (a === 0x1f8010f4) return this.dicr >>> 0;
    return 0;
  }

  write32(addr: number, v: number): void {
    const a = addr >>> 0; v >>>= 0;
    if (a >= 0x1f801080 && a <= 0x1f8010e8) {
      const ch = ((a - 0x1f801080) >>> 0) / 0x10 | 0;
      const off = (a - 0x1f801080) & 0x0f;
      const c = this.channels[ch];
      switch (off) {
        case 0x0: c.madr = v >>> 0; break;
        case 0x4: c.bcr = v >>> 0; break;
        case 0x8:
          c.chcr = v >>> 0;
          if ((v & (1 << 24)) !== 0) this.runChannel(ch);
          break;
      }
      return;
    }
    if (a === 0x1f8010f0) { this.dpcr = v >>> 0; return; }
    if (a === 0x1f8010f4) {
      // DICR write: update enables (bits0..6) and master enable (bit24),
      // clear per-channel flags (bits16..22) and master flag (bit23) when written as 1
      let d = this.dicr >>> 0;
      const clrFlags = (v >>> 16) & 0x7f; // bits16..22
      d &= ~((clrFlags & 0x7f) << 16);
      if (v & (1<<23)) d &= ~(1<<23); // clear master flag on write-1
      d = (d & ~0x7f) | (v & 0x7f); // channel enables
      d = (d & ~(1<<24)) | (v & (1<<24)); // master enable
      this.dicr = d >>> 0;
      return;
    }
  }

  private runChannel(ch: number) {
    const c = this.channels[ch];
    const chcr = c.chcr >>> 0;
    const dirFromMem = (chcr & 1) !== 0;
    const stepDec = (chcr & 2) !== 0;
    const sync = (chcr >>> 9) & 3;

    let performed = false;

    // DPCR gating: require channel enabled to perform any transfer
    const dpcrEnabled = (this.dpcr & (1 << ch)) !== 0;
    if (!dpcrEnabled) {
      // Clear start/trigger bit without performing
      c.chcr &= ~(1 << 24);
      return;
    }

    switch (ch) {
      case 2: { // GPU
        const dmaDir = (this.gpu.readGP1() >>> 29) & 0x3; // 1=FIFO write (CPU->GP0), 2=FIFO read (GPUREAD)
        const canWrite = dmaDir === 1;
        const canRead = dmaDir === 2;
        if (sync === 0) {
          if (dirFromMem) {
            if (canWrite) { this.gpuBlock(c, stepDec); performed = true; }
          } else {
            if (canRead) { this.gpuBlockToMem(c, stepDec); performed = true; }
          }
        } else if (dirFromMem && sync === 2) {
          if (canWrite) { this.gpuLinkedList(c); performed = true; }
        }
        break;
      }
      case 6: // OTC
        if (!dirFromMem && sync === 0) { this.otcBuild(c); performed = true; }
        break;
      default:
        // unimplemented for other channels
        break;
    }
    // clear start bit
    c.chcr &= ~(1 << 24);

    // IRQ signaling via DICR/INTC
    const chMask = 1 << ch;
    const chFlagMask = 1 << (16 + ch);
    const masterEnable = (this.dicr & (1<<24)) !== 0;
    const chEnabled = (this.dicr & chMask) !== 0;
    if (performed && masterEnable && chEnabled) {
      this.dicr |= chFlagMask;
      this.dicr |= (1<<23); // master flag
      this.intc?.raise(IRQ.DMA);
    }
  }

  private gpuBlock(c: { madr: number; bcr: number; chcr: number }, stepDec: boolean) {
    const words = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    for (let i = 0; i < words; i++) {
      const w = this.bus.read32(addr) >>> 0;
      this.gpu.writeGP0(w);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  private gpuBlockToMem(c: { madr: number; bcr: number; chcr: number }, stepDec: boolean) {
    const words = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    for (let i = 0; i < words; i++) {
      const w = this.gpu.readGP0() >>> 0;
      this.bus.write32(addr, w);
      addr = (addr + (stepDec ? -4 : 4)) >>> 0;
    }
    c.madr = addr >>> 0;
  }

  private gpuLinkedList(c: { madr: number; bcr: number; chcr: number }) {
    // MADR points to first header: [count:8 | next:24], then count words payload
    let addr = c.madr >>> 0;
    for (let safety = 0; safety < 1_000_000; safety++) {
      const header = this.bus.read32(addr) >>> 0;
      const count = (header >>> 24) & 0xff;
      const next = header & 0x00ffffff;
      addr = (addr + 4) >>> 0;
      for (let i = 0; i < count; i++) {
        const w = this.bus.read32(addr) >>> 0;
        this.gpu.writeGP0(w);
        addr = (addr + 4) >>> 0;
      }
      if (next === 0x00ffffff) break;
      addr = next >>> 0; // next points to next header
    }
    c.madr = addr >>> 0;
  }

  private otcBuild(c: { madr: number; bcr: number; chcr: number }) {
    let n = c.bcr & 0xffff;
    let addr = c.madr >>> 0;
    while (n > 0) {
      const val = (n === 1) ? 0x00ffffff : ((addr - 4) & 0x00ffffff);
      this.bus.write32(addr, val >>> 0);
      addr = (addr - 4) >>> 0;
      n--;
    }
    c.madr = addr >>> 0;
  }
}

