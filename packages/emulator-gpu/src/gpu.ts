export class GPU {
  // 1MB VRAM: 1024x512 16bpp
  vram = new Uint16Array(1024 * 512);

  // Status register (minimal)
  status = 0x1c000000; // basic status init value placeholder

  // GP0 command decoding state
  private inCmd = 0; // current GP0 command opcode (low 8 bits)
  private parmWordsNeeded = 0; // number of parameter words remaining before payload
  private parms: number[] = []; // collected parameter words
  private imageWordsRemaining = 0; // words remaining for image load/store
  private imageStoreQueue: number[] = []; // queue for GPUREAD on image store

  writeGP0(val: number) {
    val >>>= 0;
    if (this.inCmd === 0) {
      // Start of a new command
      this.inCmd = val & 0xff;
      this.parms.length = 0;
      switch (this.inCmd) {
        case 0x00: // NOP
          this.inCmd = 0;
          break;
        case 0x01: // Clear cache (ignored)
          this.inCmd = 0;
          break;
        case 0xa0: // Image Load (CPU -> VRAM)
          this.parmWordsNeeded = 2; // xy, size
          break;
        case 0xc0: // Image Store (VRAM -> CPU)
          this.parmWordsNeeded = 2; // xy, size
          break;
        case 0x64: // Rectangle (variable) filled, opaque
          this.parmWordsNeeded = 2; // xy, size (color was the command word)
          this.parms.push(val); // store color as parms[0] for convenience
          break;
        default:
          // Unimplemented GP0 command; ignore for now
          this.inCmd = 0;
          break;
      }
      return;
    }

    // Continuation: parameters or payload
    if (this.parmWordsNeeded > 0) {
      this.parms.push(val);
      this.parmWordsNeeded--;
      if (this.parmWordsNeeded === 0) {
        if (this.inCmd === 0xa0) {
          const { w, h } = this.decodeSize(this.parms[1]);
          this.imageWordsRemaining = Math.ceil((w * h) / 2);
        } else if (this.inCmd === 0xc0) {
          // Prepare store queue from VRAM
          const { x, y } = this.decodeXY(this.parms[0]);
          const { w, h } = this.decodeSize(this.parms[1]);
          this.imageStoreQueue = this.readRectToWords(x, y, w, h);
          this.inCmd = 0; // No payload for store; GPUREAD will fetch
        } else if (this.inCmd === 0x64) {
          const color = this.parms[0] >>> 0;
          const xy = this.parms[1] >>> 0;
          const size = this.parms[2] >>> 0;
          const { x, y } = this.decodeXY(xy);
          const { w, h } = this.decodeSize(size);
          this.fillRect(x, y, w, h, color);
          this.inCmd = 0;
          this.parms.length = 0;
        }
      }
      return;
    }

    // Payload for Image Load
    if (this.inCmd === 0xa0 && this.imageWordsRemaining > 0) {
      this.writeImageWord(val);
      this.imageWordsRemaining--;
      if (this.imageWordsRemaining === 0) {
        this.inCmd = 0;
        this.parms.length = 0;
      }
      return;
    }

    // Any other case: ignore and reset
    this.inCmd = 0;
    this.parms.length = 0;
  }

  writeGP1(val: number) {
    val >>>= 0;
    const op = (val >>> 24) & 0xff;
    switch (op) {
      case 0x00: // Reset GPU
        this.reset();
        break;
      case 0x04: { // DMA direction
        const dir = val & 0x3;
        this.status = (this.status & ~(0x3 << 29)) | ((dir & 0x3) << 29);
        break;
      }
      default:
        // ignore for now
        break;
    }
  }

  readGP0(): number {
    // Used by Image Store (VRAM->CPU)
    if (this.imageStoreQueue.length > 0) {
      return this.imageStoreQueue.shift()! >>> 0;
    }
    return 0 >>> 0;
  }

  readGP1(): number { return this.status >>> 0; }

  clearVRAM(color: number = 0) {
    this.vram.fill(color & 0xffff);
  }

  private reset() {
    this.status = 0x1c000000;
    this.inCmd = 0;
    this.parms.length = 0;
    this.parmWordsNeeded = 0;
    this.imageWordsRemaining = 0;
    this.imageStoreQueue.length = 0;
  }

  private decodeXY(word: number) {
    const x = word & 0xffff; // lower 16 used: actually 10 bits
    const y = (word >>> 16) & 0xffff;
    return { x: x & 0x3ff, y: y & 0x1ff };
  }
  private decodeSize(word: number) {
    const w = word & 0xffff; // lower 16: actually 10 bits
    const h = (word >>> 16) & 0xffff;
    return { w: (w & 0x3ff) || 0x400, h: (h & 0x1ff) || 0x200 };
  }

  private vramIndex(x: number, y: number) {
    const X = ((x % 1024) + 1024) % 1024;
    const Y = ((y % 512) + 512) % 512;
    return Y * 1024 + X;
  }

  private fillRect(x: number, y: number, w: number, h: number, color24: number) {
    const r = (color24) & 0xff;
    const g = (color24 >>> 8) & 0xff;
    const b = (color24 >>> 16) & 0xff;
    const bgr555 = ((r >>> 3) << 10) | ((g >>> 3) << 5) | (b >>> 3);
    for (let j = 0; j < h; j++) {
      const vy = (y + j) & 0x1ff;
      for (let i = 0; i < w; i++) {
        const vx = (x + i) & 0x3ff;
        this.vram[this.vramIndex(vx, vy)] = bgr555 & 0xffff;
      }
    }
  }

  private writeImageWord(word: number) {
    // Each word contains two pixels: low 16 then high 16
    const { x, y } = this.decodeXY(this.parms[0]);
    const { w, h } = this.decodeSize(this.parms[1]);
    // Track how many pixels have been written so far in this transfer
    const totalPixels = Math.ceil((Math.ceil((w * h) / 2) - this.imageWordsRemaining + 1) * 2);
    // Compute the index of the first pixel in this word
    const pixelIndex = (totalPixels - 2);
    const px0 = word & 0xffff;
    const px1 = (word >>> 16) & 0xffff;
    const writePixel = (pi: number, px: number) => {
      if (pi < w * h) {
        const row = Math.floor(pi / w);
        const col = pi % w;
        const vx = (x + col) & 0x3ff;
        const vy = (y + row) & 0x1ff;
        this.vram[this.vramIndex(vx, vy)] = px & 0xffff;
      }
    };
    writePixel(pixelIndex, px0);
    writePixel(pixelIndex + 1, px1);
  }

  private readRectToWords(x: number, y: number, w: number, h: number): number[] {
    const out: number[] = [];
    let pi = 0;
    const total = w * h;
    while (pi < total) {
      const row = Math.floor(pi / w);
      const col = pi % w;
      const px0 = this.vram[this.vramIndex((x + col) & 0x3ff, (y + row) & 0x1ff)] & 0xffff;
      let px1 = 0;
      if (pi + 1 < total) {
        const col1 = (pi + 1) % w;
        const row1 = Math.floor((pi + 1) / w);
        px1 = this.vram[this.vramIndex((x + col1) & 0x3ff, (y + row1) & 0x1ff)] & 0xffff;
      }
      out.push((px1 << 16) | px0);
      pi += 2;
    }
    return out;
  }
}

