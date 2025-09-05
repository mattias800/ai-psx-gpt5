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

import { GTE } from './gte.js';

export class R3000A {
  private cop0 = new Int32Array(32);
  private gte = new GTE();
  private tracer?: (pc: number, instr: number, s: CPUState) => void;
  constructor(public s: CPUState, private mem: CPUHost, private intPending?: () => boolean) {}
  
  // Convenience getter for accessing the program counter
  get pc(): number { return this.s.pc; }
  set pc(val: number) { this.s.pc = val >>> 0; }

  setTracer(tr?: (pc: number, instr: number, s: CPUState) => void) {
    this.tracer = tr;
  }

  private enterException(vector: number, excCode: number, inDelay: boolean = false) {
    const sr = this.cop0[12] >>> 0;
    const cause = (excCode & 0x1f) << 2;
    this.cop0[13] = (inDelay ? (cause | (1<<31)) : cause) | 0; // CAUSE.BD in bit31 if in delay
    // When tracing against PCSX-Redux BIOS behavior, EPC appears to reference the instruction
    // prior to the one that triggered the exception in some early boot cases.
    // Provide an opt-in tweak to record EPC as (current PC - 4) to improve trace alignment.
    const tweakEpc = (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_TWEAK_EPC === '1');
    const epcVal = tweakEpc ? (((this.s.pc - 4) >>> 0) | 0) : ((this.s.pc >>> 0) | 0);
    this.cop0[14] = epcVal; // EPC
    // On R3000 exception entry: shift KUc/IEc into KUp/IEp, IEc=0, KUc=0 (kernel)
    const newMode = ((sr & 0x0f) << 2) & 0x3f;
    this.cop0[12] = ((sr & ~0x3f) | newMode) | 0;
    this.s.pc = vector >>> 0;
    this.s.nextPc = (this.s.pc + 4) >>> 0;
  }

  step(): void {
    const pc = this.s.pc >>> 0;
    const instr = this.mem.read32(pc) >>> 0;
    if (this.tracer) this.tracer(pc >>> 0, instr >>> 0, this.s);
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

    // Debug instrumentation for early BIOS clear-loop divergence
    if (pc === 0xbfc003c0 || pc === 0xbfc003c4) {
      // rs/rt/rd are not yet decoded here for this log's purpose
      // Log key regs: $at=1, $v0=2, $v1=3, $zero=0
      // Using unsigned hex for clarity
      const z = (r[0] >>> 0).toString(16).padStart(8,'0');
      const at = (r[1] >>> 0).toString(16).padStart(8,'0');
      const v0r = (r[2] >>> 0).toString(16).padStart(8,'0');
      const v1r = (r[3] >>> 0).toString(16).padStart(8,'0');
      // eslint-disable-next-line no-console
      console.log(`[DBG] pc=${pc.toString(16)} at=${at} zero=${z} v0=${v0r} v1=${v1r}`);
    }

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
          case 0x04: // SLLV
            writeReg(rd, r[rt] << (r[rs] & 31));
            break;
          case 0x06: // SRLV
            writeReg(rd, r[rt] >>> (r[rs] & 31));
            break;
          case 0x07: // SRAV
            writeReg(rd, r[rt] >> (r[rs] & 31));
            break;
          case 0x08: // JR
            this.s.nextPc = r[rs] >>> 0; // delay slot already scheduled
            break;
          case 0x09: // JALR
            // Return address is instruction after the delay slot: P + 8.
            // At this point s.pc == P + 4 (we advanced earlier), so store pc+4.
            writeReg(rd, (this.s.pc + 4) >>> 0);
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
          case 0x2a: { // SLT (signed)
            // Signed comparison per MIPS I: set rd = (rs < rt) ? 1 : 0 using 32-bit signed values
            const val = (r[rs] | 0) < (r[rt] | 0) ? 1 : 0;
            writeReg(rd, val);
            break;
          }
          case 0x2b: // SLTU (unsigned)
            {
              const val = (r[rs] >>> 0) < (r[rt] >>> 0) ? 1 : 0;
              // eslint-disable-next-line no-console
              if (pc === 0xbfc003c0) console.log(`[DBG-SLTU] rs=${(r[rs]>>>0).toString(16)} rt=${(r[rt]>>>0).toString(16)} -> ${val}`);
              writeReg(rd, val);
            }
            break;
          case 0x0c: { // SYSCALL
            // Raise a system call exception (ExcCode=8) to the general exception vector
            const sr = this.cop0[12] >>> 0;
            const bev = (sr >>> 22) & 1;
            const vec = bev ? 0xbfc00180 : 0x80000080;
            this.enterException(vec >>> 0, 8 /*Syscall*/, false);
            return; // exception changes flow
          }
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
      case 0x10: { // COP0
        const copOp = (instr >>> 21) & 0x1f;
        const rdSel = (instr >>> 11) & 31;
        if (copOp === 0x00) { // MFC0
          writeReg(rt, this.cop0[rdSel] | 0);
        } else if (copOp === 0x04) { // MTC0
          this.cop0[rdSel] = r[rt] | 0;
        } else if (copOp === 0x10 && (fn === 0x10)) { // RFE
          // Rotate SR mode bits (KUc,IEc,KUp,IEp,KUo,IEo) right by 2
          const sr = this.cop0[12] >>> 0; // SR is reg12
          const mode = sr & 0x3f;
          const nmode = ((mode >>> 2) | ((mode & 0x3) << 4)) & 0x3f;
          this.cop0[12] = ((sr & ~0x3f) | nmode) | 0;
        } else {
          // other COP0 ops not implemented
        }
        break;
      }
      case 0x12: { // COP2 (GTE)
        const copOp = (instr >>> 21) & 0x1f;
        const rdSel = (instr >>> 11) & 31;
        if (copOp === 0x00) { // MFC2
          writeReg(rt, this.gte.mfc2(rdSel));
        } else if (copOp === 0x02) { // CFC2
          writeReg(rt, this.gte.cfc2(rdSel));
        } else if (copOp === 0x04) { // MTC2
          this.gte.mtc2(rdSel, r[rt]);
        } else if (copOp === 0x06) { // CTC2
          this.gte.ctc2(rdSel, r[rt]);
        } else if (copOp === 0x10) { // GTE arithmetic op
          this.gte.exec(instr);
        } else {
          // unimplemented
        }
        break;
      }
      case 0x03: // JAL
        // Return address is instruction after the delay slot: P + 8.
        // At this point s.pc == P + 4 (we advanced earlier), so store pc+4.
        writeReg(31, (this.s.pc + 4) >>> 0);
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
      case 0x01: { // REGIMM group
        const rtField = (instr >>> 16) & 31;
        const offset = (simm << 2) | 0;
        if (rtField === 0x00) { // BLTZ
          if (r[rs] < 0) this.s.nextPc = (this.s.pc + offset) >>> 0;
        } else if (rtField === 0x01) { // BGEZ
          if (r[rs] >= 0) this.s.nextPc = (this.s.pc + offset) >>> 0;
        } else if (rtField === 0x10) { // BLTZAL
          writeReg(31, (this.s.pc + 4) >>> 0);
          if (r[rs] < 0) this.s.nextPc = (this.s.pc + offset) >>> 0;
        } else if (rtField === 0x11) { // BGEZAL
          writeReg(31, (this.s.pc + 4) >>> 0);
          if (r[rs] >= 0) this.s.nextPc = (this.s.pc + offset) >>> 0;
        }
        break;
      }
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
      case 0x0f: // LUI
        writeReg(rt, (imm << 16) | 0);
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
    // After executing the instruction (including any delay slot), handle pending interrupts.
    if (this.intPending && this.intPending()) {
      const sr = this.cop0[12] >>> 0;
      const IEc = sr & 1;
      if (IEc) {
        // Respect BEV (SR bit 22): when set, use boot vectors in KSEG1 (0xBFC00180), otherwise KSEG0 (0x80000080)
        const bev = (sr >>> 22) & 1;
        const vec = bev ? 0xbfc00180 : 0x80000080;
        this.enterException(vec >>> 0, 0 /*Int*/);
        this.s.cycles += 1; // cost for exception entry
        this.s.regs[0] = 0; // enforce r0
        return;
      }
    }
    this.s.regs[0] = 0; // enforce r0
    this.s.cycles += 1; // placeholder timing
  }
}

