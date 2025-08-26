import type { Bus } from './bus';
import type { GPURegs } from './address-space';

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

// Minimal DMA controller MMIO for GPU channel (ch2) only.
// Maps:
//   0x1f8010a0: MADR (base address)
//   0x1f8010a4: BCR  (word count lower 16 for sync mode 0)
//   0x1f8010a8: CHCR (bit24 start)
// Does immediate, incrementing transfer, sync mode 0 only.
export class DMAC {
  private ch2_madr = 0 >>> 0;
  private ch2_bcr = 0 >>> 0;
  private ch2_chcr = 0 >>> 0;
  constructor(private bus: Bus, private gpu: GPURegs) {}

  read32(addr: number): number {
    switch (addr >>> 0) {
      case 0x1f8010a0: return this.ch2_madr >>> 0;
      case 0x1f8010a4: return this.ch2_bcr >>> 0;
      case 0x1f8010a8: return this.ch2_chcr >>> 0;
      default: return 0;
    }
  }
  write32(addr: number, v: number): void {
    v >>>= 0;
    switch (addr >>> 0) {
      case 0x1f8010a0: this.ch2_madr = v; break;
      case 0x1f8010a4: this.ch2_bcr = v; break;
      case 0x1f8010a8:
        this.ch2_chcr = v;
        if ((v & (1 << 24)) !== 0) { // start/trigger
          this.doCh2Transfer();
          // clear start bit after completion
          this.ch2_chcr &= ~(1 << 24);
        }
        break;
      default: break;
    }
  }

  private doCh2Transfer() {
    const words = this.ch2_bcr & 0xffff;
    let addr = this.ch2_madr >>> 0;
    for (let i = 0; i < words; i++) {
      const w = this.bus.read32(addr) >>> 0;
      this.gpu.writeGP0(w);
      addr = (addr + 4) >>> 0;
    }
    this.ch2_madr = addr >>> 0;
  }
}

