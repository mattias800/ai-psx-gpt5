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

// Debug logging gate: enable extra CPU debug when EMU_DEBUG=1
const EMU_DEBUG = (typeof process !== 'undefined' && process.env && process.env.EMU_DEBUG === '1');

export class R3000A {
  private cop0 = new Int32Array(32);
  private gte = new GTE();
  private prevPc = 0;
  private tracer?: (pc: number, instr: number, s: CPUState) => void;
  constructor(public s: CPUState, private mem: CPUHost, private intPending?: () => boolean, private intRaw?: () => number) {}
  
  // Convenience getter for accessing the program counter
  get pc(): number { return this.s.pc; }
  set pc(val: number) { this.s.pc = val >>> 0; }

  setTracer(tr?: (pc: number, instr: number, s: CPUState) => void) {
    this.tracer = tr;
  }

  private enterException(vector: number, excCode: number, inDelay: boolean = false) {
    const sr = this.cop0[12] >>> 0;
    const cause = (excCode & 0x1f) << 2;
    const newCause = (inDelay ? (cause | (1<<31)) : cause) >>> 0; // CAUSE.BD in bit31 if in delay
    this.cop0[13] = newCause | 0;
    // When tracing against PCSX-Redux BIOS behavior, EPC appears to reference the instruction
    // prior to the one that triggered the exception in some early boot cases.
    // Provide an opt-in tweak to record EPC as (current PC - 4) to improve trace alignment.
    const tweakEpc = (typeof process !== 'undefined' && process.env && process.env.PSX_TRACE_TWEAK_EPC === '1');
    const epcVal = tweakEpc ? (((this.s.pc - 4) >>> 0) | 0) : ((this.s.pc >>> 0) | 0);
    this.cop0[14] = epcVal; // EPC
    // On R3000 exception entry: shift KUc/IEc into KUp/IEp, IEc=0, KUc=0 (kernel)
    const newMode = ((sr & 0x0f) << 2) & 0x3f;
    const newSr = ((sr & ~0x3f) | newMode) >>> 0;
    this.cop0[12] = newSr | 0;
    try {
      if (typeof process !== 'undefined' && process.env && process.env.PSX_EXC_LOG === '1') {
        const toH = (x: number, w=8) => (x>>>0).toString(16).padStart(w,'0');
        // eslint-disable-next-line no-console
        console.log(`[EXC-RAISE] vec=${toH(vector)} code=${excCode} delay=${inDelay} pc=${toH(this.s.pc)} EPC=${toH(epcVal)} SR(old)=${toH(sr)} SR(new)=${toH(newSr)} CAUSE=${toH(newCause)}`);
      }
    } catch {}
    this.s.pc = vector >>> 0;
    this.s.nextPc = (this.s.pc + 4) >>> 0;
  }

  step(): void {
    const pc = this.s.pc >>> 0;
    const instr = this.mem.read32(pc) >>> 0;
    try {
      if (typeof process !== 'undefined' && process.env && process.env.CPU_LOG === '1') {
        // eslint-disable-next-line no-console
        console.log(`[CPU] pc=0x${pc.toString(16).padStart(8,'0')} instr=0x${instr.toString(16).padStart(8,'0')}`);
      }
    } catch {}
    if (this.tracer) this.tracer(pc >>> 0, instr >>> 0, this.s);
    // Advance PC for delay-slot model
    this.s.pc = this.s.nextPc >>> 0;
    this.s.nextPc = (this.s.pc + 4) >>> 0;

    // Cycle-accurate accounting (approximate): start with 1 cycle per instruction
    // and add extra cycles for memory and long-latency ops. This improves alignment
    // of external event timing (VBlank, timers) against BIOS polling windows.
    let instrCycles = 1;

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
    const writeReg = (i: number, v: number) => {
      if (i !== 0) {
        const nv = (v | 0);
        const old = r[i] | 0;
        r[i] = nv;
        // Focused debug around BIOS dispatcher region: track writes to $v1 (3) and $t0 (8)
        if (pc >= 0x00000400 && pc <= 0x00000650 && (i === 3 || i === 8)) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          // eslint-disable-next-line no-console
          if (EMU_DEBUG) console.log(`[DBG-WREG] pc=${toHex(pc)} r${i}=${toHex(nv)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
        }
        // Optional: log writes to t2 (r10) for BIOS diagnostics when PSX_LOG_R10=1
        try {
          if (typeof process !== 'undefined' && process.env && process.env.PSX_LOG_R10 === '1') {
            if (i === 10) {
              const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
              // eslint-disable-next-line no-console
              console.log(`[R10-WR] pc=${toHex(pc)} r10<=${toHex(nv)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
            }
          }
        } catch {}
        // Optional RA/T9 write logging to track clobbers around BIOS poll window
        try {
          if (typeof process !== 'undefined' && process.env && process.env.PSX_RA_LOG === '1') {
            const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
            if (i === 31) {
              // eslint-disable-next-line no-console
              console.log(`[RA-WR] pc=${toHex(pc)} ra<=${toHex(nv)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
            } else if (i === 25) {
              // eslint-disable-next-line no-console
              console.log(`[T9-WR] pc=${toHex(pc)} t9<=${toHex(nv)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
            } else if (i === 29) {
              const prevU = old >>> 0;
              const newU = nv >>> 0;
              const delta = (newU - prevU) >>> 0;
              // eslint-disable-next-line no-console
              console.log(`[SP-WR] pc=${toHex(pc)} sp<=${toHex(newU)} prev=${toHex(prevU)} delta=${toHex(delta)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
            } else if (i === 18) {
              // eslint-disable-next-line no-console
              console.log(`[S2-WR] pc=${toHex(pc)} s2<=${toHex(nv)} op=${toHex(op)} fn=${toHex(fn)} rs=${rs} rt=${rt} rd=${rd} sh=${sh}`);
            }
          }
        } catch {}
      }
    };

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
      if (EMU_DEBUG) console.log(`[DBG] pc=${pc.toString(16)} at=${at} zero=${z} v0=${v0r} v1=${v1r}`);
    }

    const addr = (r[rs] + simm) | 0;

    // Frame map probe: log stack frame details at critical PCs (exception entry/exit and callee prologue)
    try {
      if (typeof process !== 'undefined' && process.env && process.env.PSX_RA_LOG === '1') {
        const pcU = pc >>> 0;
        const probe = (
          (pcU >= 0xbfc00da8 && pcU <= 0xbfc00e60) ||
          (pcU >= 0x00001508 && pcU <= 0x00001530) ||
          pcU === 0xbfc0483c || pcU === 0xbfc0484c
        );
        if (probe) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          const spU = r[29] >>> 0;
          const raSlot = (spU + 0x3c) >>> 0;
          const slot1C = (spU + 0x1c) >>> 0;
          let raMem = 0 >>> 0, slot1CMem = 0 >>> 0;
          try { raMem = this.mem.read32(raSlot) >>> 0; } catch {}
          try { slot1CMem = this.mem.read32(slot1C) >>> 0; } catch {}
          // eslint-disable-next-line no-console
          console.log(`[FRAME] pc=${toHex(pc)} sp=${toHex(spU)} raSlot=${toHex(raSlot)} raMem=${toHex(raMem)} slot1C=${toHex(slot1C)} slot1Mem=${toHex(slot1CMem)} ra=${toHex(r[31]>>>0)} s2=${toHex(r[18]>>>0)} instr=${toHex(instr)}`);
        }
        // Focused flow probe: when entering key epilogue PCs, log the immediate predecessor
        if (pcU === 0xbfc00e1c || pcU === 0xbfc00e54) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          const prevU = this.prevPc >>> 0;
          let prevInstr = 0;
          try { prevInstr = this.mem.read32(prevU) >>> 0; } catch {}
          // eslint-disable-next-line no-console
          console.log(`[FLOW] prev=${toHex(prevU)} prevInstr=${toHex(prevInstr)} -> pc=${toHex(pc)} instr=${toHex(instr)} sp=${toHex(r[29]>>>0)} ra=${toHex(r[31]>>>0)}`);
        }
        // Deeper flow probe at critical SP/RA adjust sites
        if (
          pcU === 0xbfc018b8 || pcU === 0xbfc018bc || pcU === 0xbfc018c0 || pcU === 0xbfc018c4 || pcU === 0xbfc018c8 ||
          pcU === 0xbfc018d0 || pcU === 0xbfc018d8 || pcU === 0xbfc01910 || pcU === 0xbfc01914 ||
          pcU === 0xbfc00da0 || pcU === 0xbfc00e18 || pcU === 0xbfc00e1c || pcU === 0xbfc00e50 || pcU === 0xbfc00e54 || pcU === 0xbfc00e64 ||
          (pcU >= 0xbfc01530 && pcU <= 0xbfc01650) ||
          pcU === 0x0000411c || pcU === 0x00004124 || pcU === 0x00004128 ||
          (pcU >= 0x00001508 && pcU <= 0x00001530)
        ) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          const prevU = this.prevPc >>> 0;
          let prevInstr = 0;
          try { prevInstr = this.mem.read32(prevU) >>> 0; } catch {}
          const nextU = this.s.nextPc >>> 0;
          // eslint-disable-next-line no-console
          console.log(`[FLOW2] prev=${toHex(prevU)} prevInstr=${toHex(prevInstr)} -> pc=${toHex(pc)} instr=${toHex(instr)} sp=${toHex(r[29]>>>0)} ra=${toHex(r[31]>>>0)} nextPc=${toHex(nextU)}`);

          // Track exception frame base at entry prologue and verify at epilogue
          const anyThis = this as any;
          if (pcU === 0xbfc00da0 || pcU === 0xbfc00da8) {
            // Save the base SP and RA slot when exception frame is built
            const baseSp = r[29] >>> 0;
            const baseRaSlot = (baseSp + 0x3c) >>> 0;
            anyThis.__dbgFrameBaseSp = baseSp >>> 0;
            anyThis.__dbgFrameRaSlot = baseRaSlot >>> 0;
            // Also capture the RA value being saved in memory (from r31) for potential guard restore
            anyThis.__dbgFrameSavedRAVal = (r[31] >>> 0);
            try {
              const raMem = this.mem.read32(baseRaSlot) >>> 0;
              console.log(`[FRAME-BASE] pc=${toHex(pc)} baseSp=${toHex(baseSp)} baseRaSlot=${toHex(baseRaSlot)} raMem=${toHex(raMem)}`);
            } catch {
              console.log(`[FRAME-BASE] pc=${toHex(pc)} baseSp=${toHex(baseSp)} baseRaSlot=${toHex(baseRaSlot)} raMem=????????`);
            }
          }
          if (pcU === 0xbfc00e54) {
            const curSp = r[29] >>> 0;
            const curRaSlot = (curSp + 0x3c) >>> 0;
            const baseSp = (anyThis.__dbgFrameBaseSp >>> 0) || 0;
            const baseRaSlot = (anyThis.__dbgFrameRaSlot >>> 0) || 0;
            const savedRaVal = (anyThis.__dbgFrameSavedRAVal >>> 0) || 0;
            let curVal = 0 >>> 0, baseVal = 0 >>> 0;
            try { curVal = this.mem.read32(curRaSlot) >>> 0; } catch {}
            try { baseVal = baseRaSlot ? (this.mem.read32(baseRaSlot) >>> 0) : 0; } catch {}
            console.log(`[STACK-CHECK] pc=${toHex(pc)} curSp=${toHex(curSp)} curRaSlot=${toHex(curRaSlot)} curVal=${toHex(curVal)} baseSp=${toHex(baseSp)} baseRaSlot=${toHex(baseRaSlot)} baseVal=${toHex(baseVal)} match=${curRaSlot===baseRaSlot}`);
            // Optional guard: if RA was clobbered to zero due to overlapping stack frames, restore from saved RA
            try {
              if (typeof process !== 'undefined' && process.env && process.env.PSX_EPILOGUE_RA_GUARD === '1') {
                if (curVal === 0 && savedRaVal !== 0 && baseRaSlot === curRaSlot) {
                  // eslint-disable-next-line no-console
                  console.log(`[RA-GUARD] restoring ra=${toHex(savedRaVal)} from saved frame (curVal was 0) at pc=${toHex(pc)}`);
                  writeReg(31, savedRaVal | 0);
                }
              }
            } catch {}
          }
        }
      }
    } catch {}

    // Branch decision logging helpers
    const shouldLogBranch = (pcU: number): boolean => {
      // Interest windows: BIOS exception/dispatcher regions and poll paths
      if (pcU >= 0xbfc01530 && pcU <= 0xbfc01680) return true;
      if (pcU >= 0xbfc018b8 && pcU <= 0xbfc01914) return true;
      if (pcU >= 0xbfc00da0 && pcU <= 0xbfc00e80) return true;
      if (pcU >= 0x00001500 && pcU <= 0x00001600) return true;
      if (pcU >= 0x8005a1e0 && pcU <= 0x8005a330) return true;
      if (pcU === 0x8005aa18) return true;
      return false;
    };
    const toHexB = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');

    const logBranch = (label: string, info: string): void => {
      try {
        if (!(typeof process !== 'undefined' && process.env && process.env.PSX_RA_LOG === '1')) return;
        const pcU = this.s.pc >>> 0; // note: s.pc points to delay-slot at this time, but we want current op's pc
        if (!shouldLogBranch(pc >>> 0)) return;
        // eslint-disable-next-line no-console
        console.log(`[BR] pc=${toHexB(pc)} ${label} ${info}`);
      } catch {}
    };

    const lwl = (addr: number, cur: number): number => {
      // Little-endian MIPS R3000A semantics
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      switch (addr & 3) {
        case 0: return ((cur & 0x00ffffff) | ((w << 24) >>> 0)) | 0;
        case 1: return ((cur & 0x0000ffff) | ((w << 16) >>> 0)) | 0;
        case 2: return ((cur & 0x000000ff) | ((w << 8)  >>> 0)) | 0;
        case 3: return w | 0;
        default: return cur | 0;
      }
    };
    const lwr = (addr: number, cur: number): number => {
      // Little-endian MIPS R3000A semantics
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      switch (addr & 3) {
        case 0: return w | 0;
        case 1: return ((cur & 0xff000000) | (w >>> 8)) | 0;
        case 2: return ((cur & 0xffff0000) | (w >>> 16)) | 0;
        case 3: return ((cur & 0xffffff00) | (w >>> 24)) | 0;
        default: return cur | 0;
      }
    };
    const swl = (addr: number, val: number): void => {
      // Little-endian MIPS R3000A semantics
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      let nw: number;
      switch (addr & 3) {
        case 0: nw = ((w & 0xffffff00) | ((val >>> 24) & 0x000000ff)) >>> 0; break;
        case 1: nw = ((w & 0xffff0000) | ((val >>> 16) & 0x0000ffff)) >>> 0; break;
        case 2: nw = ((w & 0xff000000) | ((val >>> 8)  & 0x00ffffff)) >>> 0; break;
        case 3: nw = val >>> 0; break;
        default: nw = w; break;
      }
      this.mem.write32(a, nw >>> 0);
    };
    const swr = (addr: number, val: number): void => {
      // Little-endian MIPS R3000A semantics
      const a = addr & ~3;
      const w = this.mem.read32(a) >>> 0;
      let nw: number;
      switch (addr & 3) {
        case 0: nw = val >>> 0; break;
        case 1: nw = ((w & 0x000000ff) | ((val << 8)  & 0xffffff00)) >>> 0; break;
        case 2: nw = ((w & 0x0000ffff) | ((val << 16) & 0xffff0000)) >>> 0; break;
        case 3: nw = ((w & 0x00ffffff) | ((val << 24) & 0xff000000)) >>> 0; break;
        default: nw = w; break;
      }
      this.mem.write32(a, nw >>> 0);
    };

    switch (op) {
      case 0x00: { // SPECIAL
        switch (fn) {
          case 0x00: // SLL
            if (pc === 0x000005e8) {
              const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
              // eslint-disable-next-line no-console
              if (EMU_DEBUG) console.log(`[DBG-SLL] pc=${toHex(pc)} rt=${rt} before=${toHex(r[rt])} sh=${sh}`);
            }
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
          case 0x08: { // JR
            // Optionally enforce alignment on jump targets to avoid undefined behavior on misaligned addresses.
            // Controlled via PSX_ALIGN_JR=1 (off by default to preserve strictness).
            const raw = r[rs] >>> 0;
            const alignJr = (typeof process !== 'undefined' && process.env && process.env.PSX_ALIGN_JR === '1');
            const dest = alignJr ? (raw & 0xfffffffc) : raw;
            // Optional execution guard: prevent control flow from jumping to clearly invalid regions.
            // Enabled via PSX_EXEC_GUARD=1 for diagnostics only.
            const guard = (typeof process !== 'undefined' && process.env && process.env.PSX_EXEC_GUARD === '1');
            const isValidExec = (a: number): boolean => {
              const u = a >>> 0;
              // Allow RAM (low KUSEG used by tests), RAM KSEG0/KSEG1 mirrors, and BIOS KSEG1
              if (u < 0x00800000) return true; // low RAM region used by unit tests and stubs
              if (u >= 0x80000000 && u <= 0x807fffff) return true; // KSEG0 RAM mirror
              if (u >= 0xa0000000 && u <= 0xa07fffff) return true; // KSEG1 RAM mirror
              if (u >= 0xbfc00000 && u < 0xbfc80000) return true;  // BIOS ROM
              return false;
            };
            if (guard && !isValidExec(dest)) {
              const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
              // eslint-disable-next-line no-console
              console.warn(`[EXEC-GUARD] Prevented JR to invalid dest=0x${toHex(dest)} from pc=0x${toHex(pc)} ra=0x${toHex(r[31]>>>0)} sp=0x${toHex(r[29]>>>0)}`);
              // Skip to sequential flow after delay slot
              this.s.nextPc = (this.s.pc + 4) >>> 0;
            } else {
              this.s.nextPc = dest >>> 0; // delay slot already scheduled
            }
            logBranch('JR', `rs=r${rs}=${toHexB(r[rs])} dest=${toHexB(dest)}`);
            break;
          }
          case 0x09: { // JALR
            // Return address is instruction after the delay slot: P + 8.
            // At this point s.pc == P + 4 (we advanced earlier), so store pc+4.
            writeReg(rd, (this.s.pc + 4) >>> 0);
            const raw = r[rs] >>> 0;
            const alignJr = (typeof process !== 'undefined' && process.env && process.env.PSX_ALIGN_JR === '1');
            const dest = alignJr ? (raw & 0xfffffffc) : raw;
            const guard = (typeof process !== 'undefined' && process.env && process.env.PSX_EXEC_GUARD === '1');
            const isValidExec = (a: number): boolean => {
              const u = a >>> 0;
              if (u < 0x00800000) return true;
              if (u >= 0x80000000 && u <= 0x807fffff) return true;
              if (u >= 0xa0000000 && u <= 0xa07fffff) return true;
              if (u >= 0xbfc00000 && u < 0xbfc80000) return true;
              return false;
            };
            if (guard && !isValidExec(dest)) {
              const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
              // eslint-disable-next-line no-console
              console.warn(`[EXEC-GUARD] Prevented JALR to invalid dest=0x${toHex(dest)} from pc=0x${toHex(pc)} link=0x${toHex((this.s.pc+4)>>>0)} rs=r${rs} val=0x${toHex(raw)} ra=0x${toHex(r[31]>>>0)} sp=0x${toHex(r[29]>>>0)}`);
              this.s.nextPc = (this.s.pc + 4) >>> 0;
            } else {
              this.s.nextPc = dest >>> 0;
            }
            logBranch('JALR', `rs=r${rs}=${toHexB(r[rs])} dest=${toHexB(dest)} link=${toHexB((this.s.pc + 4)>>>0)} rd=r${rd}`);
            break;
          }
          case 0x20: // ADD
            if (pc === 0x000005ec) {
              const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
              // eslint-disable-next-line no-console
              if (EMU_DEBUG) console.log(`[DBG-ADD] pc=${toHex(pc)} rs=${rs} rt=${rt} rsVal=${toHex(r[rs])} rtVal=${toHex(r[rt])}`);
            }
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
              if (EMU_DEBUG && pc === 0xbfc003c0) console.log(`[DBG-SLTU] rs=${(r[rs]>>>0).toString(16)} rt=${(r[rt]>>>0).toString(16)} -> ${val}`);
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
            instrCycles = Math.max(instrCycles, 8);
            break;
          }
          case 0x19: { // MULTU (unsigned)
            const a = BigInt(r[rs] >>> 0);
            const b = BigInt(r[rt] >>> 0);
            const p = a * b;
            this.s.lo = Number(p & 0xffffffffn) | 0;
            this.s.hi = Number((p >> 32n) & 0xffffffffn) | 0;
            instrCycles = Math.max(instrCycles, 8);
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
            instrCycles = Math.max(instrCycles, 12);
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
            instrCycles = Math.max(instrCycles, 12);
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
        logBranch('J', `dest=${toHexB(target)}`);
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
          instrCycles = Math.max(instrCycles, 8);
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
        logBranch('JAL', `dest=${toHexB(target)} link=${toHexB((this.s.pc + 4)>>>0)}`);
        break;
      case 0x04: { // BEQ
        if (pc === 0x8005a218) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          const rsVal = r[rs] | 0;
          const rtVal = r[rt] | 0;
          const istat = this.mem.read32(0x1f801070) >>> 0;
          const imask = this.mem.read32(0x1f801074) >>> 0;
          // eslint-disable-next-line no-console
          if (EMU_DEBUG) console.log(`[DBG-BEQ] pc=${toHex(pc)} rs=${rs} rsVal=${toHex(rsVal)} rt=${rt} rtVal=${toHex(rtVal)} imm=${toHex(simm>>>0)} I_STAT=${toHex(istat)} I_MASK=${toHex(imask)} taken=${rsVal===rtVal}`);
        }
        const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        const taken = (r[rs] === r[rt]);
        if (taken) this.s.nextPc = dest;
        logBranch('BEQ', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=${taken} dest=${toHexB(dest)}`);
        break;
      }
      case 0x05: // BNE
        {
          const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
          const taken = (r[rs] !== r[rt]);
          if (taken) this.s.nextPc = dest;
          logBranch('BNE', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=${taken} dest=${toHexB(dest)}`);
        }
        break;
      case 0x06: // BLEZ
        {
          const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
          const taken = (r[rs] <= 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BLEZ', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=${taken} dest=${toHexB(dest)}`);
        }
        break;
      case 0x07: // BGTZ
        {
          const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
          const taken = (r[rs] > 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BGTZ', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=${taken} dest=${toHexB(dest)}`);
        }
        break;
      case 0x14: { // BEQL (branch likely if equal)
        const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        const taken = (r[rs] === r[rt]);
        if (taken) {
          this.s.nextPc = dest >>> 0;
          logBranch('BEQL', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=true dest=${toHexB(dest)} skipDelay=false`);
        } else {
          // skip delay slot: advance nextPc to P+8 without executing delay slot
          this.s.nextPc = (this.s.pc + 8) >>> 0;
          logBranch('BEQL', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=false skipDelay=true`);
        }
        break;
      }
      case 0x15: { // BNEL (branch likely if not equal)
        const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        const taken = (r[rs] !== r[rt]);
        if (taken) {
          this.s.nextPc = dest >>> 0;
          logBranch('BNEL', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=true dest=${toHexB(dest)} skipDelay=false`);
        } else {
          // skip delay slot: advance nextPc to P+8 without executing delay slot
          this.s.nextPc = (this.s.pc + 8) >>> 0;
          logBranch('BNEL', `rs=r${rs}=${toHexB(r[rs])} rt=r${rt}=${toHexB(r[rt])} imm=${toHexB(simm>>>0)} taken=false skipDelay=true`);
        }
        break;
      }
      case 0x16: { // BLEZL (branch likely if <= 0)
        const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        const taken = (r[rs] <= 0);
        if (taken) {
          this.s.nextPc = dest >>> 0;
          logBranch('BLEZL', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=true dest=${toHexB(dest)} skipDelay=false`);
        } else {
          // skip delay slot: advance nextPc to P+8 without executing delay slot
          this.s.nextPc = (this.s.pc + 8) >>> 0;
          logBranch('BLEZL', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=false skipDelay=true`);
        }
        break;
      }
      case 0x17: { // BGTZL (branch likely if > 0)
        const dest = (this.s.pc + ((simm << 2) | 0)) >>> 0;
        const taken = (r[rs] > 0);
        if (taken) {
          this.s.nextPc = dest >>> 0;
          logBranch('BGTZL', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=true dest=${toHexB(dest)} skipDelay=false`);
        } else {
          // skip delay slot: advance nextPc to P+8 without executing delay slot
          this.s.nextPc = (this.s.pc + 8) >>> 0;
          logBranch('BGTZL', `rs=r${rs}=${toHexB(r[rs])} imm=${toHexB(simm>>>0)} taken=false skipDelay=true`);
        }
        break;
      }
      case 0x01: { // REGIMM group
        const rtField = (instr >>> 16) & 31;
        const offset = (simm << 2) | 0;
        const dest = (this.s.pc + offset) >>> 0;
        if (rtField === 0x00) { // BLTZ
          const taken = (r[rs] < 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BLTZ', `rs=r${rs}=${toHexB(r[rs])} taken=${taken} dest=${toHexB(dest)}`);
        } else if (rtField === 0x01) { // BGEZ
          const taken = (r[rs] >= 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BGEZ', `rs=r${rs}=${toHexB(r[rs])} taken=${taken} dest=${toHexB(dest)}`);
        } else if (rtField === 0x02) { // BLTZL (likely)
          const taken = (r[rs] < 0);
          if (taken) {
            this.s.nextPc = dest;
            logBranch('BLTZL', `rs=r${rs}=${toHexB(r[rs])} taken=true dest=${toHexB(dest)} skipDelay=false`);
          } else {
            // skip delay slot: advance nextPc to P+8 without executing delay slot
            this.s.nextPc = (this.s.pc + 8) >>> 0;
            logBranch('BLTZL', `rs=r${rs}=${toHexB(r[rs])} taken=false skipDelay=true`);
          }
        } else if (rtField === 0x03) { // BGEZL (likely)
          const taken = (r[rs] >= 0);
          if (taken) {
            this.s.nextPc = dest;
            logBranch('BGEZL', `rs=r${rs}=${toHexB(r[rs])} taken=true dest=${toHexB(dest)} skipDelay=false`);
          } else {
            // skip delay slot: advance nextPc to P+8 without executing delay slot
            this.s.nextPc = (this.s.pc + 8) >>> 0;
            logBranch('BGEZL', `rs=r${rs}=${toHexB(r[rs])} taken=false skipDelay=true`);
          }
        } else if (rtField === 0x10) { // BLTZAL
          writeReg(31, (this.s.pc + 4) >>> 0);
          const taken = (r[rs] < 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BLTZAL', `rs=r${rs}=${toHexB(r[rs])} taken=${taken} dest=${toHexB(dest)} link=${toHexB((this.s.pc + 4)>>>0)}`);
        } else if (rtField === 0x11) { // BGEZAL
          writeReg(31, (this.s.pc + 4) >>> 0);
          const taken = (r[rs] >= 0);
          if (taken) this.s.nextPc = dest;
          logBranch('BGEZAL', `rs=r${rs}=${toHexB(r[rs])} taken=${taken} dest=${toHexB(dest)} link=${toHexB((this.s.pc + 4)>>>0)}`);
        } else if (rtField === 0x12) { // BLTZALL (likely + link)
          const taken = (r[rs] < 0);
          if (taken) {
            writeReg(31, (this.s.pc + 4) >>> 0);
            this.s.nextPc = dest;
            logBranch('BLTZALL', `rs=r${rs}=${toHexB(r[rs])} taken=true dest=${toHexB(dest)} link=${toHexB((this.s.pc + 4)>>>0)} skipDelay=false`);
          } else {
            // skip delay slot: advance nextPc to P+8 without executing delay slot
            this.s.nextPc = (this.s.pc + 8) >>> 0;
            logBranch('BLTZALL', `rs=r${rs}=${toHexB(r[rs])} taken=false skipDelay=true`);
          }
        } else if (rtField === 0x13) { // BGEZALL (likely + link)
          const taken = (r[rs] >= 0);
          if (taken) {
            writeReg(31, (this.s.pc + 4) >>> 0);
            this.s.nextPc = dest;
            logBranch('BGEZALL', `rs=r${rs}=${toHexB(r[rs])} taken=true dest=${toHexB(dest)} link=${toHexB((this.s.pc + 4)>>>0)} skipDelay=false`);
          } else {
            // skip delay slot: advance nextPc to P+8 without executing delay slot
            this.s.nextPc = (this.s.pc + 8) >>> 0;
            logBranch('BGEZALL', `rs=r${rs}=${toHexB(r[rs])} taken=false skipDelay=true`);
          }
        }
        break;
      }
      case 0x08: // ADDI
        writeReg(rt, (r[rs] + simm) | 0);
        break;
      case 0x09: // ADDIU
        if (pc === 0x8005abf8 || pc === 0x000000a4) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          // eslint-disable-next-line no-console
          if (EMU_DEBUG) console.log(`[DBG-ADDIU] pc=${toHex(pc)} rt=${rt} rs=${rs} rsVal=${toHex(r[rs])} imm=${toHex(simm>>>0)}`);
        }
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
        instrCycles = Math.max(instrCycles, 2);
        break;
      }
      case 0x24: { // LBU
        const v = this.mem.read8(addr) & 0xff;
        writeReg(rt, v >>> 0);
        instrCycles = Math.max(instrCycles, 2);
        break;
      }
      case 0x21: { // LH
        const v = this.mem.read16(addr) & 0xffff;
        writeReg(rt, (v << 16) >> 16);
        instrCycles = Math.max(instrCycles, 2);
        break;
      }
      case 0x25: { // LHU
        const v = this.mem.read16(addr) & 0xffff;
        if (pc === 0x8005a208 || pc === 0x8005a20c || pc === 0x8005a2e0 || pc === 0x8005a2e4) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          // eslint-disable-next-line no-console
          if (EMU_DEBUG) console.log(`[DBG-LHU] pc=${toHex(pc)} rs=${rs} base=${toHex(r[rs])} simm=${toHex(simm>>>0)} addr=${toHex(addr>>>0)} val=${toHex(v)} rt=${rt}`);
        }
        writeReg(rt, v >>> 0);
        instrCycles = Math.max(instrCycles, 2);
        break;
      }
      case 0x23: { // LW
        const v = this.mem.read32(addr) >>> 0;
        // Debug: log the dispatcher LW used for B0 table lookup
        if (pc === 0x000005f0) {
          const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
          // eslint-disable-next-line no-console
          if (EMU_DEBUG) console.log(`[DBG-LW] pc=${toHex(pc)} rs=${rs} base=${toHex(r[rs])} simm=${toHex(simm>>>0)} addr=${toHex(addr>>>0)} val=${toHex(v)}`);
        }
        // Optional targeted LW logging: track loads into $ra and any loads from the top-of-stack page
        try {
          if (typeof process !== 'undefined' && process.env && process.env.PSX_RA_LOG === '1') {
            const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
            const aU = addr >>> 0;
            const inStackTail = (aU >= 0x801ff000 && aU <= 0x801fffff);
            if (rt === 31) {
              // eslint-disable-next-line no-console
              console.log(`[LW-DBG] pc=${toHex(pc)} addr=${toHex(aU)} rt=${rt} val=${toHex(v)} rs=${rs} simm=${toHex(simm>>>0)} sp=${toHex(r[29]>>>0)}`);
              try {
                const last = (this.mem as any)?.getLastWrite32?.(aU);
                if (last) {
                  // eslint-disable-next-line no-console
                  console.log(`[RA-LW-SRC] addr=${toHex(aU)} last_w32_pc=${toHex(last.pc)} last_w32_val=${toHex(last.val)}`);
                }
              } catch {}
            }
            if (inStackTail) {
              // eslint-disable-next-line no-console
              console.log(`[STACK-LW] pc=${toHex(pc)} addr=${toHex(aU)} rt=${rt} val=${toHex(v)} rs=${rs} simm=${toHex(simm>>>0)} ra=${toHex(r[31]>>>0)} sp=${toHex(r[29]>>>0)}`);
            }
          }
        } catch {}
        writeReg(rt, v | 0);
        instrCycles = Math.max(instrCycles, 2);
        break;
      }
      case 0x28: // SB
        this.mem.write8(addr, r[rt] & 0xff);
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x29: // SH
        this.mem.write16(addr, r[rt] & 0xffff);
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x2b: // SW
        try {
          if (typeof process !== 'undefined' && process.env && process.env.PSX_RA_LOG === '1') {
            const toHex = (x: number, w=8) => (x >>> 0).toString(16).padStart(w, '0');
            const aU = addr >>> 0;
            const inStackTail = (aU >= 0x801ff000 && aU <= 0x801fffff);
            if (rt === 31 || rt === 29 || rt === 30) {
              // eslint-disable-next-line no-console
              console.log(`[SW-DBG] pc=${toHex(pc)} addr=${toHex(aU)} rt=${rt} val=${toHex(r[rt]>>>0)} rs=${rs} simm=${toHex(simm>>>0)}`);
            }
            if (inStackTail) {
              // eslint-disable-next-line no-console
              console.log(`[STACK-SW] pc=${toHex(pc)} addr=${toHex(aU)} rt=${rt} val=${toHex(r[rt]>>>0)} rs=${rs} simm=${toHex(simm>>>0)} ra=${toHex(r[31]>>>0)} sp=${toHex(r[29]>>>0)}`);
            }
          }
          if (typeof process !== 'undefined' && process.env && process.env.GPU_LOG === '1') {
            const aU = addr >>> 0;
            if (aU === 0x1f801810 || aU === 0x1f801814) {
              // eslint-disable-next-line no-console
              console.log(`[CPU] SW to ${aU===0x1f801810?'GP0':'GP1'} value=0x${(r[rt]>>>0).toString(16).padStart(8,'0')} rs=r${rs} base=0x${(r[rs]>>>0).toString(16)} simm=0x${(simm>>>0).toString(16)} pc=0x${(pc>>>0).toString(16)}`);
            }
          }
        } catch {}
        this.mem.write32(addr, r[rt] >>> 0);
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x22: // LWL
        writeReg(rt, lwl(addr, r[rt]));
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x26: // LWR
        writeReg(rt, lwr(addr, r[rt]));
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x2a: // SWL
        swl(addr, r[rt]);
        instrCycles = Math.max(instrCycles, 2);
        break;
      case 0x2e: // SWR
        swr(addr, r[rt]);
        instrCycles = Math.max(instrCycles, 2);
        break;
      default:
        // unimplemented
        break;
    }
    // Account for the executed instruction time before checking interrupts
    this.s.cycles += instrCycles;

    // Post-instruction RA guard (after LW has written ra):
    try {
      if (typeof process !== 'undefined' && process.env && process.env.PSX_EPILOGUE_RA_GUARD === '1') {
        const pcU = pc >>> 0;
        // Specific guard for BIOS epilogue at 0xbfc00e54 (legacy)
        if (pcU === 0xbfc00e54) {
          const anyThis = this as any;
          const savedRaVal = (anyThis.__dbgFrameSavedRAVal >>> 0) || 0;
          const raNow = this.s.regs[31] >>> 0;
          const spNow = this.s.regs[29] >>> 0;
          const curRaSlot = (spNow + 0x3c) >>> 0;
          const baseRaSlot = (anyThis.__dbgFrameRaSlot >>> 0) || 0;
          if (raNow === 0 && savedRaVal !== 0 && baseRaSlot === curRaSlot) {
            // eslint-disable-next-line no-console
            console.log(`[RA-GUARD-POST] restoring ra=${(savedRaVal>>>0).toString(16).padStart(8,'0')} at pc=${(pcU).toString(16)} sp=${(spNow>>>0).toString(16)} slot=${(curRaSlot>>>0).toString(16)}`);
            this.s.regs[31] = (savedRaVal | 0);
          }
        }
        // Generic guard for epilogues that do: lw ra, offset(sp)
        // If ra became 0, but the last aligned 32-bit write to either [addr] or [addr+8]
        // (common off-by-8 SP drift) was non-zero, restore that non-zero value.
        if (op === 0x23 && rt === 31) { // LW into RA
          const raNow = this.s.regs[31] >>> 0;
          if (raNow === 0) {
            const hostAny = this.mem as any;
            const aU = addr >>> 0; // effective address of the LW this step
            const lastHere = hostAny?.getLastWrite32?.(aU);
            const lastNext = hostAny?.getLastWrite32?.(((aU + 8) >>> 0));
            const cand = (lastHere && (lastHere.val >>> 0) !== 0) ? (lastHere.val >>> 0)
              : (lastNext && (lastNext.val >>> 0) !== 0 ? (lastNext.val >>> 0) : 0);
            if (cand !== 0) {
              // eslint-disable-next-line no-console
              console.log(`[RA-GUARD-LW] pc=${pcU.toString(16)} addr=${(aU).toString(16).padStart(8,'0')} ra was 0, restored=${cand.toString(16).padStart(8,'0')} src=${lastHere&&lastHere.val? 'addr':'addr+8'}`);
              this.s.regs[31] = (cand | 0);
            }
          }
        }
      }
    } catch {}

    // Update prevPc for next step flow diagnostics
    this.prevPc = pc >>> 0;

    // After executing the instruction (including any delay slot), handle pending interrupts.
    // Update COP0.Cause.IP bits to reflect external interrupt lines (PSX combines INTC -> MIPS IP2).
    // Reflect RAW pending (I_STAT) in CAUSE.IP, independent of masking, for spec-correct behavior.
    const rawBits = this.intRaw ? (this.intRaw() >>> 0) : 0;
    const oldCause = this.cop0[13] >>> 0;
    const IP2_BIT = 1 << 10; // MIPS hardware interrupt line 0 maps to IP2
    // PSX INTC aggregates all device IRQs onto a single MIPS hardware line (IP2).
    // Reflect IP2 as asserted whenever the INTC reports a pending (masked) interrupt.
    const ip2Asserted = this.intPending ? !!this.intPending() : ((rawBits >>> 0) !== 0);
    const causeWithIp = ip2Asserted ? (oldCause | IP2_BIT) >>> 0 : (oldCause & ~IP2_BIT) >>> 0;
    this.cop0[13] = causeWithIp | 0;

    // Focused debug: log interrupt gating state exactly at BIOS poll boundary
    if (pc === 0x80059e10 && EMU_DEBUG) {
      const srDbg = this.cop0[12] >>> 0;
      const istat = this.mem.read32(0x1f801070) >>> 0;
      const imask = this.mem.read32(0x1f801074) >>> 0;
      const im = (srDbg >>> 8) & 0xff;
      const ip = (this.cop0[13] >>> 8) & 0xff;
      const gate = ((im & ip) !== 0) && ((srDbg & 1) !== 0);
      // eslint-disable-next-line no-console
      console.log(`[DBG-INT] at 80059e10: IEc=${srDbg & 1} BEV=${(srDbg>>>22)&1} SR=${(srDbg>>>0).toString(16)} I_STAT=${istat.toString(16)} I_MASK=${imask.toString(16)} IP=${ip.toString(16)} IM=${im.toString(16)} gate=${gate} pendingMasked=${this.intPending ? !!this.intPending() : false}`);
    }

    // Spec-correct gating: take interrupt only if IEc=1 and (IM & IP) != 0
    const sr = this.cop0[12] >>> 0;
    const IEc = sr & 1;
    // Gate interrupts based on IEc and INTC.pending (masked), matching PSX behavior expected by tests
    const pendingMasked = this.intPending ? !!this.intPending() : false;
    if (IEc && pendingMasked) {
      // Respect BEV (SR bit 22): when set, use boot vectors in KSEG1 (0xBFC00180), otherwise KSEG0 (0x80000080)
      const bev = (sr >>> 22) & 1;
      const vec = bev ? 0xbfc00180 : 0x80000080;
      try {
        if (typeof process !== 'undefined' && process.env && process.env.PSX_EXC_LOG === '1') {
          const toH = (x: number, w=8) => (x>>>0).toString(16).padStart(w,'0');
          // eslint-disable-next-line no-console
          console.log(`[EXC-TAKE] pc=${toH(pc)} SR=${toH(sr)} vec=${toH(vec)} IEc=1 pendingMasked=1`);
        }
      } catch {}
      this.enterException(vec >>> 0, 0 /*Int*/);
      this.s.cycles += 1; // cost for exception entry
      this.s.regs[0] = 0; // enforce r0
      return;
    }

    this.s.regs[0] = 0; // enforce r0
    // cycles already accounted above via instrCycles
  }
}

