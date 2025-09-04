import { InterruptController, IRQ } from './timing.js';

// Minimal SIO0 (controller) stub to support basic PAD poll over 0x1f801040..0x1f80105f
// Scope: byte-addressable DATA/STAT/MODE/CTRL/BAUD with a digital pad response and host-injected state.

const SIO_BASE = 0x1f801040;

export class SIO {
  private mode = 0;   // 16-bit
  private ctrl = 0;   // 16-bit
  private baud = 0;   // 16-bit
  private tx: number[] = [];
  private rx: number[] = [];
  private cmdBuf: number[] = [];
  private padButtons = 0xffff; // active-low: 1=not pressed

  // Deterministic memcard stub
  private mcPresent = true;
  private mcData = new Uint8Array(128 * 1024); // 128KB card, zero-initialized deterministically
  private mcWrite?: { offset: number; remaining: number; buf: number[] };

  constructor(private intc: InterruptController) {}

  setPadButtons(mask: number) { this.padButtons = (mask >>> 0) & 0xffff; }
  setMemcardPresent(present: boolean) { this.mcPresent = !!present; }

  serialize(): any {
    return {
      mode: this.mode>>>0,
      ctrl: this.ctrl>>>0,
      baud: this.baud>>>0,
      tx: [...this.tx],
      rx: [...this.rx],
      cmd: [...this.cmdBuf],
      pad: this.padButtons>>>0,
      mcPresent: this.mcPresent ? 1 : 0,
      // mcData not serialized to keep snapshots compact; card is deterministic zero-fill
    };
  }
  deserialize(s: any): void {
    this.mode = s.mode>>>0; this.ctrl = s.ctrl>>>0; this.baud = s.baud>>>0;
    this.tx = Array.isArray(s.tx) ? s.tx.map((x:number)=>x&0xff) : [];
    this.rx = Array.isArray(s.rx) ? s.rx.map((x:number)=>x&0xff) : [];
    this.cmdBuf = Array.isArray(s.cmd) ? s.cmd.map((x:number)=>x&0xff) : [];
    this.padButtons = (s.pad>>>0) & 0xffff;
    this.mcPresent = !!(s.mcPresent);
  }

  private raisePadIRQ() { this.intc.raise(IRQ.PAD_MEMCARD); }

  private updateStatus(): number {
    // Minimal STAT bits: bit0=RXRDY, bit2=TXRDY, bit7=IRQ (when RX has data)
    const RXRDY = (this.rx.length > 0) ? 1 : 0;
    const TXRDY = 1 << 2; // always ready to accept
    const IRQBIT = (this.rx.length > 0) ? (1 << 7) : 0;
    return (RXRDY | TXRDY | IRQBIT) & 0xffff;
  }

  private onByteWritten(b: number) {
    this.tx.push(b & 0xff);

    // If in the middle of a memcard write data phase, consume bytes
    if (this.mcWrite) {
      this.mcWrite.buf.push(b & 0xff);
      this.mcWrite.remaining--;
      if (this.mcWrite.remaining <= 0) {
        // Commit first 128 bytes; ignore last 2 checksum bytes
        for (let i = 0; i < 128; i++) this.mcData[(this.mcWrite.offset + i) % this.mcData.length] = this.mcWrite.buf[i] & 0xff;
        this.rx.push(0x00, 0x5c, 0x00, 0x00); // simple ack
        this.raisePadIRQ();
        this.mcWrite = undefined;
        this.cmdBuf = [];
      }
      return;
    }

    this.cmdBuf.push(b & 0xff);
    const n = this.cmdBuf.length;

    // Branch on device: PAD (0x01) or MEMCARD (0x81)
    const dev = this.cmdBuf[0];

    // Memory Card stub: 0x81 0x52 addrHi addrLo 0x00 -> read 128 bytes
    if (dev === 0x81) {
      if (n === 2) {
        const cmd = this.cmdBuf[1];
        if (cmd !== 0x52 && cmd !== 0x57) {
          // unsupported memcard command; respond with 0xff if present, else also 0xff
          this.rx.push(0xff);
          this.raisePadIRQ();
          this.cmdBuf = [];
        }
        return;
      }
      if (n === 5 && this.cmdBuf[1] === 0x52) {
        const hi = this.cmdBuf[2] & 0xff;
        const lo = this.cmdBuf[3] & 0xff;
        // const term = this.cmdBuf[4] & 0xff; // ignored in stub
        if (!this.mcPresent) {
          this.rx.push(0xff);
          this.raisePadIRQ();
          this.cmdBuf = [];
          return;
        }
        // Deterministic zero-filled data, ignore term
        const sector = ((hi << 8) | lo) >>> 0;
        const offset = (sector * 128) % this.mcData.length;
        // Header: 0x00, 0x5A
        this.rx.push(0x00, 0x5a);
        for (let i = 0; i < 128; i++) this.rx.push(this.mcData[(offset + i) % this.mcData.length]);
        // Simple zero checksums
        this.rx.push(0x00, 0x00);
        this.raisePadIRQ();
        this.cmdBuf = [];
        return;
      }
      // Write sector: 0x81 0x57 addrHi addrLo 0x00 then 128 bytes + 2 checksum bytes
      if (n === 5 && this.cmdBuf[1] === 0x57) {
        const hi = this.cmdBuf[2] & 0xff;
        const lo = this.cmdBuf[3] & 0xff;
        if (!this.mcPresent) {
          this.rx.push(0xff);
          this.raisePadIRQ();
          this.cmdBuf = [];
          return;
        }
        const sector = ((hi << 8) | lo) >>> 0;
        const offset = (sector * 128) % this.mcData.length;
        this.mcWrite = { offset, remaining: 130, buf: [] };
        return;
      }
      // Wait for more bytes
      return;
    }

    // PAD: Detect start of PAD poll: 0x01,0x42,0x00
    if (dev !== 0x01) {
      // not a recognized device; clear
      this.cmdBuf = [];
      return;
    }
    if (n === 1) {
      // optionally emit idle 0xff first (many pads echo 0xff)
      this.rx.push(0xff);
      this.raisePadIRQ();
      return;
    }
    if (n === 2 && this.cmdBuf[1] !== 0x42) {
      // unexpected second byte; reset
      this.cmdBuf = [];
      return;
    }
    if (n === 3 && this.cmdBuf[2] === 0x00) {
      // Complete header seen; push a minimal digital pad response: 0x41, 0x5A, buttons lo, buttons hi
      const lo = this.padButtons & 0xff;
      const hi = (this.padButtons >>> 8) & 0xff;
      this.rx.push(0x41, 0x5a, lo, hi);
      this.raisePadIRQ();
      this.cmdBuf = [];
    }
  }

  read8(addr: number): number {
    const off = (addr >>> 0) - SIO_BASE;
    switch (off & 0x3f) {
      case 0x00: { // DATA (low byte)
        const v = (this.rx.length > 0) ? this.rx.shift()! : 0xff;
        return v & 0xff;
      }
      case 0x01: // DATA hi (unused)
        return 0x00;
      case 0x04: // STAT low
        return this.updateStatus() & 0xff;
      case 0x05: // STAT hi
        return (this.updateStatus() >>> 8) & 0xff;
      case 0x08: // MODE low
        return this.mode & 0xff;
      case 0x09: // MODE hi
        return (this.mode >>> 8) & 0xff;
      case 0x0a: // CTRL low
        return this.ctrl & 0xff;
      case 0x0b: // CTRL hi
        return (this.ctrl >>> 8) & 0xff;
      case 0x0e: // BAUD low
        return this.baud & 0xff;
      case 0x0f: // BAUD hi
        return (this.baud >>> 8) & 0xff;
      default:
        return 0;
    }
  }

  write8(addr: number, v: number): void {
    const off = (addr >>> 0) - SIO_BASE;
    v &= 0xff;
    switch (off & 0x3f) {
      case 0x00: // DATA
        this.onByteWritten(v);
        break;
      case 0x01: // DATA hi ignored
        break;
      case 0x08: // MODE low
        this.mode = (this.mode & 0xff00) | v;
        break;
      case 0x09: // MODE hi
        this.mode = ((v << 8) | (this.mode & 0x00ff)) & 0xffff;
        break;
      case 0x0a: // CTRL low
        this.ctrl = (this.ctrl & 0xff00) | v;
        break;
      case 0x0b: // CTRL hi
        this.ctrl = ((v << 8) | (this.ctrl & 0x00ff)) & 0xffff;
        break;
      case 0x0e: // BAUD low
        this.baud = (this.baud & 0xff00) | v;
        break;
      case 0x0f: // BAUD hi
        this.baud = ((v << 8) | (this.baud & 0x00ff)) & 0xffff;
        break;
      default:
        // ignore other addresses in range for now
        break;
    }
  }
}

