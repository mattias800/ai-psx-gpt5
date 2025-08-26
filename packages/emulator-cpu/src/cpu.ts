export interface CPUState {
  regs: Int32Array; // r0..r31 (r0 hardwired 0)
  hi: number;
  lo: number;
  pc: number;
  nextPc: number; // for delay slots
  cycles: number;
}

export function createResetState(entry: number = 0xBFC00000): CPUState {
  return {
    regs: new Int32Array(32),
    hi: 0,
    lo: 0,
    pc: entry >>> 0,
    nextPc: (entry + 4) >>> 0,
    cycles: 0,
  };
}

export interface CPUHost {
  read32(addr: number): number;
  read16(addr: number): number;
  read8(addr: number): number;
  write32(addr: number, val: number): void;
  write16(addr: number, val: number): void;
  write8(addr: number, val: number): void;
}

export class R3000A {
  constructor(public s: CPUState, private mem: CPUHost) {}

  step(): void {
    const pc = this.s.pc >>> 0;
    const instr = this.mem.read32(pc) >>> 0;
    this.s.pc = this.s.nextPc >>> 0;
    this.s.nextPc = (this.s.pc + 4) >>> 0;

    const op = instr >>> 26;
    const rs = (instr >>> 21) & 31;
    const rt = (instr >>> 16) & 31;
    const rd = (instr >>> 11) & 31;
    const sh = (instr >>> 6) & 31;
    const fn = instr & 0x3f;
    const imm = instr & 0xffff;
    const simm = (imm << 16) >> 16; // sign-extend 16
    const target = (pc & 0xf0000000) | ((instr & 0x03ffffff) << 2);

    const r = this.s.regs;
    const writeReg = (i: number, v: number) => { if (i !== 0) r[i] = v | 0; };

    const addr = (r[rs] + simm) | 0;
    const lwl = (addr: number, cur: number): number => {
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      switch (addr & 3) {
        case 0: return w | 0;
        case 1: return ((cur & 0x000000ff) | (w & 0xffffff00)) | 0;
        case 2: return ((cur & 0x0000ffff) | (w & 0xffff0000)) | 0;
        case 3: return ((cur & 0x00ffffff) | (w & 0xff000000)) | 0;
        default: return cur;
      }
    };
    const lwr = (addr: number, cur: number): number => {
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      switch (addr & 3) {
        case 0: return ((cur & 0xffffff00) | (w & 0x000000ff)) | 0;
        case 1: return ((cur & 0xffff0000) | (w & 0x0000ffff)) | 0;
        case 2: return ((cur & 0xff000000) | (w & 0x00ffffff)) | 0;
        case 3: return w | 0;
        default: return cur;
      }
    };
    const swl = (addr: number, val: number): void => {
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      let nw: number;
      switch (addr & 3) {
        case 0: nw = val >>> 0; break;
        case 1: nw = ((w & 0x000000ff) | (val & 0xffffff00)) >>> 0; break;
        case 2: nw = ((w & 0x0000ffff) | (val & 0xffff0000)) >>> 0; break;
        case 3: nw = ((w & 0x00ffffff) | (val & 0xff000000)) >>> 0; break;
        default: nw = w; break;
      }
      this.mem.write32(a, nw >>> 0);
    };
    const swr = (addr: number, val: number): void => {
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      let nw: number;
      switch (addr & 3) {
        case 0: nw = ((w & 0xffffff00) | (val & 0x000000ff)) >>> 0; break;
        case 1: nw = ((w & 0xffff0000) | (val & 0x0000ffff)) >>> 0; break;
        case 2: nw = ((w & 0xff000000) | (val & 0x00ffffff)) >>> 0; break;
        case 3: nw = val >>> 0; break;
        default: nw = w; break;
      }
      this.mem.write32(a, nw >>> 0);
    };

    switch (op) {
      case 0x00: { // SPECIAL
        switch (fn) {
          case 0x00: // SLL
            writeReg(rd, r[rt] << sh);
            break;
          case 0x02: // SRL
            writeReg(rd, r[rt] >>> sh);
            break;
          case 0x03: // SRA
            writeReg(rd, r[rt] >> sh);
            break;
          case 0x08: // JR
            this.s.nextPc = r[rs] >>> 0; // delay slot already scheduled
            break;
          case 0x09: // JALR
            writeReg(rd, this.s.pc);
            this.s.nextPc = r[rs] >>> 0;
            break;
          case 0x20: // ADD
            writeReg(rd, (r[rs] + r[rt]) | 0);
            break;
          case 0x21: // ADDU
            writeReg(rd, (r[rs] + r[rt]) | 0);
            break;
          case 0x22: // SUB
            writeReg(rd, (r[rs] - r[rt]) | 0);
            break;
          case 0x23: // SUBU
            writeReg(rd, (r[rs] - r[rt]) | 0);
            break;
          case 0x24: // AND
            writeReg(rd, r[rs] & r[rt]);
            break;
          case 0x25: // OR
            writeReg(rd, r[rs] | r[rt]);
            break;
          case 0x26: // XOR
            writeReg(rd, r[rs] ^ r[rt]);
            break;
          case 0x27: // NOR
            writeReg(rd, ~(r[rs] | r[rt]));
            break;
          case 0x2a: // SLT
            writeReg(rd, r[rs] < r[rt] ? 1 : 0);
            break;
          case 0x2b: // SLTU
            writeReg(rd, (r[rs] >>> 0) < (r[rt] >>> 0) ? 1 : 0);
            break;
          case 0x10: // MFHI
            writeReg(rd, this.s.hi | 0);
            break;
          case 0x12: // MFLO
            writeReg(rd, this.s.lo | 0);
            break;
          case 0x11: // MTHI
            this.s.hi = r[rs] | 0;
            break;
          case 0x13: // MTLO
            this.s.lo = r[rs] | 0;
            break;
          case 0x18: { // MULT (signed)
            const a = BigInt(r[rs] | 0);
            const b = BigInt(r[rt] | 0);
            const p = a * b;
            this.s.lo = Number(p & 0xffffffffn) | 0;
            this.s.hi = Number((p >> 32n) & 0xffffffffn) | 0;
            break;
          }
          case 0x19: { // MULTU (unsigned)
            const a = BigInt(r[rs] >>> 0);
            const b = BigInt(r[rt] >>> 0);
            const p = a * b;
            this.s.lo = Number(p & 0xffffffffn) | 0;
            this.s.hi = Number((p >> 32n) & 0xffffffffn) | 0;
            break;
          }
          case 0x1a: { // DIV (signed)
            const num = r[rs] | 0; const den = r[rt] | 0;
            if (den === 0) {
              // Implementation-defined; keep deterministic
              this.s.lo = num >= 0 ? -1 : 1; // common convention
              this.s.hi = num | 0;
            } else if (num === -2147483648 && den === -1) {
              this.s.lo = -2147483648; this.s.hi = 0;
            } else {
              const q = (num / den) | 0; // trunc toward zero
              const rmd = (num - q * den) | 0;
              this.s.lo = q | 0; this.s.hi = rmd | 0;
            }
            break;
          }
          case 0x1b: { // DIVU (unsigned)
            const num = r[rs] >>> 0; const den = r[rt] >>> 0;
            if (den === 0) {
              this.s.lo = -1; // 0xffffffff
              this.s.hi = num | 0;
            } else {
              const q = Math.floor(num / den) >>> 0;
              const rmd = (num - q * den) >>> 0;
              this.s.lo = (q | 0);
              this.s.hi = (rmd | 0);
            }
            break;
          }
          default:
            // reserved - in accuracy pass raise exception
            break;
        }
        break;
      }
      case 0x02: // J
        this.s.nextPc = target >>> 0;
        break;
      case 0x03: // JAL
        writeReg(31, this.s.pc);
        this.s.nextPc = target >>> 0;
        break;
      case 0x04: // BEQ
        if (r[rs] === r[rt]) this.s.nextPc = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        break;
      case 0x05: // BNE
        if (r[rs] !== r[rt]) this.s.nextPc = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        break;
      case 0x06: // BLEZ
        if (r[rs] <= 0) this.s.nextPc = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        break;
      case 0x07: // BGTZ
        if (r[rs] > 0) this.s.nextPc = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        break;
      case 0x08: // ADDI
        writeReg(rt, (r[rs] + simm) | 0);
        break;
      case 0x09: // ADDIU
        writeReg(rt, (r[rs] + simm) | 0);
        break;
      case 0x0c: // ANDI
        writeReg(rt, r[rs] & (imm >>> 0));
        break;
      case 0x0d: // ORI
        writeReg(rt, r[rs] | (imm >>> 0));
        break;
      case 0x0e: // XORI
        writeReg(rt, r[rs] ^ (imm >>> 0));
        break;
      case 0x0a: // SLTI
        writeReg(rt, r[rs] < simm ? 1 : 0);
        break;
      case 0x0b: // SLTIU
        writeReg(rt, (r[rs] >>> 0) < (imm >>> 0) ? 1 : 0);
        break;
      case 0x20: { // LB
        const v = this.mem.read8(addr) & 0xff;
        writeReg(rt, (v << 24) >> 24);
        break;
      }
      case 0x24: { // LBU
        const v = this.mem.read8(addr) & 0xff;
        writeReg(rt, v >>> 0);
        break;
      }
      case 0x21: { // LH
        const v = this.mem.read16(addr) & 0xffff;
        writeReg(rt, (v << 16) >> 16);
        break;
      }
      case 0x25: { // LHU
        const v = this.mem.read16(addr) & 0xffff;
        writeReg(rt, v >>> 0);
        break;
      }
      case 0x23: { // LW
        const v = this.mem.read32(addr) >>> 0;
        writeReg(rt, v | 0);
        break;
      }
      case 0x28: // SB
        this.mem.write8(addr, r[rt] & 0xff);
        break;
      case 0x29: // SH
        this.mem.write16(addr, r[rt] & 0xffff);
        break;
      case 0x2b: // SW
        this.mem.write32(addr, r[rt] >>> 0);
        break;
      case 0x22: // LWL
        writeReg(rt, lwl(addr, r[rt]));
        break;
      case 0x26: // LWR
        writeReg(rt, lwr(addr, r[rt]));
        break;
      case 0x2a: // SWL
        swl(addr, r[rt]);
        break;
      case 0x2e: // SWR
        swr(addr, r[rt]);
        break;
      default:
        // unimplemented
        break;
    }
    this.s.regs[0] = 0; // enforce r0
    this.s.cycles += 1; // placeholder timing
  }
}

