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
      default:
        // loads/stores and others in later steps
        break;
    }
    this.s.regs[0] = 0; // enforce r0
    this.s.cycles += 1; // placeholder timing
  }
}

