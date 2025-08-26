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

