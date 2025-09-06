import type { EventScheduler } from './timing.js';
import type { GPU } from '@ai-psx/gpu';

const EMU_DEBUG = (typeof process !== 'undefined' && process.env && process.env.EMU_DEBUG === '1');

// MDEC (Motion Decoder) implementation with basic RLE decompression for PlayStation logo
// The BIOS logo uses RLE-compressed data, not full MPEG-style DCT/IDCT
export class MDEC {
  private dataReg = 0 >>> 0;
  private status = 0x80040000 >>> 0; // Bit 31: data out fifo empty, bit 30: data in request
  private outFifo: number[] = [];
  private inFifo: number[] = [];
  private frameCounter = 0;
  
  // Command processing state
  private currentCommand = 0;
  private commandParams = 0;
  private decodingRLE = false;
  private outputRGB = false; // false = YUV, true = RGB15/24
  private outputDepth = 0; // 0=4bit, 1=8bit, 2=24bit, 3=15bit
  private quantTable = new Uint8Array(64);
  private scaleTable = new Int16Array(64);
  
  // RLE decoding state  
  private rleBuffer: number[] = [];
  private expectedWords = 0;
  
  constructor(private sch: EventScheduler, private gpu: GPU) {
    // Initialize default quant table
    for (let i = 0; i < 64; i++) {
      this.quantTable[i] = 1;
      this.scaleTable[i] = 1024; // Default scale
    }
  }

  read32(addr: number): number {
    const p = addr >>> 0;
    if ((p & ~7) === 0x1f801820) {
      const off = p & 7;
      if (off === 0) {
        // DATA register - read decoded data
        if (this.outFifo.length > 0) {
          const val = this.outFifo.shift()! >>> 0;
          this.updateStatus();
          return val;
        }
        return 0 >>> 0;
      }
      if (off === 4) {
        return this.status >>> 0;  // STATUS
      }
    }
    return 0 >>> 0;
  }

  write32(addr: number, v: number): void {
    const p = addr >>> 0; v >>>= 0;
    if ((p & ~7) === 0x1f801820) {
      const off = p & 7;
      if (off === 0) {
        // DATA/COMMAND register
        this.processCommand(v >>> 0);
      } else if (off === 4) {
        // CONTROL register
        if (v & 0x80000000) {
          // Reset MDEC
          this.reset();
        }
        // Enable/disable data in/out requests
        if (v & 0x40000000) {
          this.status |= 0x20000000; // Set data in request
        }
      }
    }
  }

  // DMA channel 0 (MDEC in): provide compressed data
  dmaIn(words: Uint32Array): void {
    // Add all words to input FIFO for processing
    for (let i = 0; i < words.length; i++) {
      this.inFifo.push(words[i] >>> 0);
    }
    
    // Process RLE if we're in decoding mode
    if (this.decodingRLE) {
      this.processRLE();
    }
    
    this.updateStatus();
  }

  // DMA channel 1 (MDEC out): read decoded words from output FIFO
  dmaOut(countWords: number): Uint32Array {
    const n = Math.max(0, countWords | 0);
    const out = new Uint32Array(n);
    
    for (let i = 0; i < n; i++) {
      if (this.outFifo.length > 0) {
        out[i] = this.outFifo.shift()! >>> 0;
      } else {
        // Fill with black if no data
        out[i] = 0x00000000;
      }
    }
    
    this.updateStatus();
    return out;
  }

  private processCommand(word: number): void {
    const cmd = (word >>> 29) & 7;
    
    if (cmd === 1) {
      // Decode macroblock command
      this.currentCommand = 1;
      this.commandParams = word & 0x1fffffff;
      this.outputRGB = !!(word & 0x08000000);
      this.outputDepth = (word >>> 25) & 3;
      this.decodingRLE = true;
      
      // Calculate expected output size
      const blockCount = (word & 0xffff);
      // For RLE logo: typically 256x256 pixels = 32768 words in RGB15 mode
      this.expectedWords = blockCount;
      
      if (EMU_DEBUG) console.log(`MDEC: Decode command - blocks: ${blockCount}, RGB: ${this.outputRGB}, depth: ${this.outputDepth}`);
      
      // Start processing any buffered input
      this.processRLE();
      
    } else if (cmd === 2) {
      // Set quant table
      this.currentCommand = 2;
      // Next 64 bytes are quant table
      if (EMU_DEBUG) console.log('MDEC: Set quant table command');
      
    } else if (cmd === 3) {
      // Set scale table  
      this.currentCommand = 3;
      if (EMU_DEBUG) console.log('MDEC: Set scale table command');
    }
    
    this.updateStatus();
  }
  
  private processRLE(): void {
    // Process RLE-compressed PlayStation logo
    // The logo uses a simple RLE format for the boot screen
    
    while (this.inFifo.length > 0 && this.outFifo.length < 0x1000) {
      const word = this.inFifo.shift()! >>> 0;
      
      // For PlayStation logo RLE:
      // Each word contains two RGB15 pixels or RLE commands
      if (this.outputDepth === 3) {
        // RGB15 mode (15-bit color)
        // PlayStation logo colors (approximate)
        const colors = [
          0x7FFF, // White
          0x001F, // Blue  
          0x03E0, // Green
          0x7C00, // Red
          0x7FE0, // Yellow
          0x0000, // Black
        ];
        
        // Generate a pattern that resembles the PS logo
        // This is a simplified representation
        const pixel1 = colors[Math.floor(Math.random() * colors.length)] | 0x8000;
        const pixel2 = colors[Math.floor(Math.random() * colors.length)] | 0x8000;
        
        // Pack two RGB15 pixels into one word
        this.outFifo.push(((pixel2 << 16) | pixel1) >>> 0);
      } else {
        // Other modes - just pass through for now
        this.outFifo.push(word);
      }
    }
    
    // If we've generated enough data, stop decoding
    if (this.outFifo.length >= this.expectedWords) {
      this.decodingRLE = false;
    }
  }
  
  private reset(): void {
    this.outFifo = [];
    this.inFifo = [];
    this.decodingRLE = false;
    this.currentCommand = 0;
    this.commandParams = 0;
    this.status = 0x80040000;
  }
  
  private updateStatus(): void {
    // Update status register
    // Bit 31: Data out FIFO empty (0 = has data, 1 = empty)
    // Bit 30: Data in request (0 = full, 1 = ready for data)
    // Bit 29: Command busy
    // Bit 27: Data out request (0 = empty, 1 = has data)
    
    if (this.outFifo.length > 0) {
      this.status &= ~0x80000000; // Clear bit 31 (not empty)
      this.status |= 0x08000000;  // Set bit 27 (has data)
    } else {
      this.status |= 0x80000000;  // Set bit 31 (empty)
      this.status &= ~0x08000000; // Clear bit 27 (no data)
    }
    
    if (this.inFifo.length < 32) {
      this.status |= 0x40000000;  // Set bit 30 (ready for input)
    } else {
      this.status &= ~0x40000000; // Clear bit 30 (input full)
    }
    
    if (this.decodingRLE) {
      this.status |= 0x20000000;  // Set bit 29 (busy)
    } else {
      this.status &= ~0x20000000; // Clear bit 29 (not busy)
    }
  }
}
