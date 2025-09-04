/**
 * MIPS R3000A disassembler for PSX - outputs PCSX-Redux style formatting
 */
// PSX canonical register names
const REG_NAMES = [
    'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3',
    't0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',
    's0', 's1', 's2', 's3', 's4', 's5', 's6', 's7',
    't8', 't9', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'
];
const formatReg = (idx, regs) => {
    const name = REG_NAMES[idx] || `r${idx}`;
    if (regs && regs[idx] !== undefined) {
        const val = (regs[idx] >>> 0).toString(16).padStart(8, '0');
        return `$${name}(${val})`;
    }
    return `$${name}`;
};
const formatImm16 = (imm) => {
    return `0x${(imm & 0xffff).toString(16).padStart(4, '0')}`;
};
const formatOffset = (offset) => {
    const simm = (offset << 16) >> 16; // sign-extend
    if (simm < 0) {
        return `-0x${(-simm).toString(16)}`;
    }
    return `0x${simm.toString(16)}`;
};
const formatAddress = (addr) => {
    return `0x${(addr >>> 0).toString(16).padStart(8, '0')}`;
};
const formatMemRef = (base, offset, regs) => {
    const simm = (offset << 16) >> 16;
    const offsetStr = simm === 0 ? '' : formatOffset(offset);
    return `${offsetStr}(${formatReg(base, regs).replace('$', '')})`;
};
const padMnemonic = (mnemonic, width = 7) => {
    return mnemonic.padEnd(width, ' ');
};
export const disasmMips = (pc, instr, regs) => {
    const op = (instr >>> 26) & 0x3f;
    const rs = (instr >>> 21) & 0x1f;
    const rt = (instr >>> 16) & 0x1f;
    const rd = (instr >>> 11) & 0x1f;
    const sa = (instr >>> 6) & 0x1f;
    const fn = instr & 0x3f;
    const imm = instr & 0xffff;
    const target = ((pc & 0xf0000000) | ((instr & 0x03ffffff) << 2)) >>> 0;
    switch (op) {
        case 0x00: // SPECIAL
            switch (fn) {
                case 0x00: // SLL
                    if (instr === 0)
                        return padMnemonic('nop');
                    return `${padMnemonic('sll')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${sa}`;
                case 0x02: // SRL
                    return `${padMnemonic('srl')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${sa}`;
                case 0x03: // SRA
                    return `${padMnemonic('sra')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${sa}`;
                case 0x04: // SLLV
                    return `${padMnemonic('sllv')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${formatReg(rs, regs)}`;
                case 0x06: // SRLV
                    return `${padMnemonic('srlv')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${formatReg(rs, regs)}`;
                case 0x07: // SRAV
                    return `${padMnemonic('srav')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}, ${formatReg(rs, regs)}`;
                case 0x08: // JR
                    return `${padMnemonic('jr')} ${formatReg(rs, regs)}`;
                case 0x09: // JALR
                    if (rd === 31)
                        return `${padMnemonic('jalr')} ${formatReg(rs, regs)}`;
                    return `${padMnemonic('jalr')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}`;
                case 0x0c: // SYSCALL
                    return padMnemonic('syscall');
                case 0x0d: // BREAK
                    return padMnemonic('break');
                case 0x10: // MFHI
                    return `${padMnemonic('mfhi')} ${formatReg(rd, regs)}`;
                case 0x11: // MTHI
                    return `${padMnemonic('mthi')} ${formatReg(rs, regs)}`;
                case 0x12: // MFLO
                    return `${padMnemonic('mflo')} ${formatReg(rd, regs)}`;
                case 0x13: // MTLO
                    return `${padMnemonic('mtlo')} ${formatReg(rs, regs)}`;
                case 0x18: // MULT
                    return `${padMnemonic('mult')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x19: // MULTU
                    return `${padMnemonic('multu')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x1a: // DIV
                    return `${padMnemonic('div')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x1b: // DIVU
                    return `${padMnemonic('divu')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x20: // ADD
                    return `${padMnemonic('add')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x21: // ADDU
                    return `${padMnemonic('addu')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x22: // SUB
                    return `${padMnemonic('sub')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x23: // SUBU
                    return `${padMnemonic('subu')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x24: // AND
                    return `${padMnemonic('and')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x25: // OR
                    if (rt === 0 && rs === 0)
                        return `${padMnemonic('move')} ${formatReg(rd, regs)}, ${formatReg(0, regs)}`;
                    if (rt === 0)
                        return `${padMnemonic('move')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}`;
                    if (rs === 0)
                        return `${padMnemonic('move')} ${formatReg(rd, regs)}, ${formatReg(rt, regs)}`;
                    return `${padMnemonic('or')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x26: // XOR
                    return `${padMnemonic('xor')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x27: // NOR
                    return `${padMnemonic('nor')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x2a: // SLT
                    return `${padMnemonic('slt')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                case 0x2b: // SLTU
                    return `${padMnemonic('sltu')} ${formatReg(rd, regs)}, ${formatReg(rs, regs)}, ${formatReg(rt, regs)}`;
                default:
                    return `unknown special 0x${fn.toString(16)}`;
            }
        case 0x01: // REGIMM
            switch (rt) {
                case 0x00: // BLTZ
                    return `${padMnemonic('bltz')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
                case 0x01: // BGEZ
                    return `${padMnemonic('bgez')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
                case 0x10: // BLTZAL
                    return `${padMnemonic('bltzal')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
                case 0x11: // BGEZAL
                    return `${padMnemonic('bgezal')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
                default:
                    return `unknown regimm 0x${rt.toString(16)}`;
            }
        case 0x02: // J
            return `${padMnemonic('j')} ${formatAddress(target)}`;
        case 0x03: // JAL
            return `${padMnemonic('jal')} ${formatAddress(target)}`;
        case 0x04: // BEQ
            return `${padMnemonic('beq')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}, ${formatOffset(imm << 2)}`;
        case 0x05: // BNE
            return `${padMnemonic('bne')} ${formatReg(rs, regs)}, ${formatReg(rt, regs)}, ${formatOffset(imm << 2)}`;
        case 0x06: // BLEZ
            return `${padMnemonic('blez')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
        case 0x07: // BGTZ
            return `${padMnemonic('bgtz')} ${formatReg(rs, regs)}, ${formatOffset(imm << 2)}`;
        case 0x08: // ADDI
            return `${padMnemonic('addi')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatOffset(imm)}`;
        case 0x09: // ADDIU
            if (rs === 0)
                return `${padMnemonic('li')} ${formatReg(rt, regs)}, ${formatOffset(imm)}`;
            return `${padMnemonic('addiu')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatOffset(imm)}`;
        case 0x0a: // SLTI
            return `${padMnemonic('slti')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatOffset(imm)}`;
        case 0x0b: // SLTIU
            return `${padMnemonic('sltiu')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatImm16(imm)}`;
        case 0x0c: // ANDI
            return `${padMnemonic('andi')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatImm16(imm)}`;
        case 0x0d: // ORI
            return `${padMnemonic('ori')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatImm16(imm)}`;
        case 0x0e: // XORI
            return `${padMnemonic('xori')} ${formatReg(rt, regs)}, ${formatReg(rs, regs)}, ${formatImm16(imm)}`;
        case 0x0f: // LUI
            return `${padMnemonic('lui')} ${formatReg(rt, regs)}, ${formatImm16(imm)}`;
        case 0x10: // COP0
            {
                const copOp = (instr >>> 21) & 0x1f;
                const copRd = (instr >>> 11) & 0x1f;
                switch (copOp) {
                    case 0x00: // MFC0
                        return `${padMnemonic('mfc0')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x04: // MTC0
                        return `${padMnemonic('mtc0')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x10: // COP0 function
                        if (fn === 0x10)
                            return padMnemonic('rfe');
                        return `cop0 0x${fn.toString(16)}`;
                    default:
                        return `cop0 op=0x${copOp.toString(16)}`;
                }
            }
        case 0x11: // COP1 (FPU - not on PSX)
            return `cop1 (unused)`;
        case 0x12: // COP2 (GTE)
            {
                const copOp = (instr >>> 21) & 0x1f;
                const copRd = (instr >>> 11) & 0x1f;
                switch (copOp) {
                    case 0x00: // MFC2
                        return `${padMnemonic('mfc2')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x02: // CFC2
                        return `${padMnemonic('cfc2')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x04: // MTC2
                        return `${padMnemonic('mtc2')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x06: // CTC2
                        return `${padMnemonic('ctc2')} ${formatReg(rt, regs)}, $${copRd}`;
                    case 0x10: // GTE command
                        return `gte 0x${(instr & 0x1ffffff).toString(16)}`;
                    default:
                        return `cop2 op=0x${copOp.toString(16)}`;
                }
            }
        case 0x13: // COP3 (not on PSX)
            return `cop3 (unused)`;
        // Memory operations
        case 0x20: // LB
            return `${padMnemonic('lb')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x21: // LH
            return `${padMnemonic('lh')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x22: // LWL
            return `${padMnemonic('lwl')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x23: // LW
            return `${padMnemonic('lw')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x24: // LBU
            return `${padMnemonic('lbu')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x25: // LHU
            return `${padMnemonic('lhu')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x26: // LWR
            return `${padMnemonic('lwr')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x28: // SB
            return `${padMnemonic('sb')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x29: // SH
            return `${padMnemonic('sh')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x2a: // SWL
            return `${padMnemonic('swl')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x2b: // SW
            return `${padMnemonic('sw')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x2e: // SWR
            return `${padMnemonic('swr')} ${formatReg(rt, regs)}, ${formatMemRef(rs, imm, regs)}`;
        case 0x30: // LWC0
            return `lwc0 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x31: // LWC1
            return `lwc1 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x32: // LWC2
            return `${padMnemonic('lwc2')} $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x33: // LWC3
            return `lwc3 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x38: // SWC0
            return `swc0 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x39: // SWC1
            return `swc1 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x3a: // SWC2
            return `${padMnemonic('swc2')} $${rt}, ${formatMemRef(rs, imm, regs)}`;
        case 0x3b: // SWC3
            return `swc3 $${rt}, ${formatMemRef(rs, imm, regs)}`;
        default:
            return `unknown op=0x${op.toString(16)}`;
    }
};
// Export helpers for testing
export const getRegName = (idx) => REG_NAMES[idx] || `r${idx}`;
export const extractUsedRegisters = (instr) => {
    const op = (instr >>> 26) & 0x3f;
    const rs = (instr >>> 21) & 0x1f;
    const rt = (instr >>> 16) & 0x1f;
    const rd = (instr >>> 11) & 0x1f;
    const fn = instr & 0x3f;
    const used = [];
    // Determine which registers are used based on instruction type
    switch (op) {
        case 0x00: // SPECIAL
            switch (fn) {
                case 0x00: // SLL
                case 0x02: // SRL
                case 0x03: // SRA
                    if (instr !== 0)
                        used.push(rt); // source
                    break;
                case 0x04: // SLLV
                case 0x06: // SRLV
                case 0x07: // SRAV
                    used.push(rs, rt);
                    break;
                case 0x08: // JR
                    used.push(rs);
                    break;
                case 0x09: // JALR
                    used.push(rs);
                    break;
                case 0x11: // MTHI
                case 0x13: // MTLO
                    used.push(rs);
                    break;
                case 0x18: // MULT
                case 0x19: // MULTU
                case 0x1a: // DIV
                case 0x1b: // DIVU
                    used.push(rs, rt);
                    break;
                case 0x20: // ADD
                case 0x21: // ADDU
                case 0x22: // SUB
                case 0x23: // SUBU
                case 0x24: // AND
                case 0x25: // OR
                case 0x26: // XOR
                case 0x27: // NOR
                case 0x2a: // SLT
                case 0x2b: // SLTU
                    used.push(rs, rt);
                    break;
            }
            break;
        case 0x01: // REGIMM
            used.push(rs);
            break;
        case 0x04: // BEQ
        case 0x05: // BNE
            used.push(rs, rt);
            break;
        case 0x06: // BLEZ
        case 0x07: // BGTZ
            used.push(rs);
            break;
        case 0x08: // ADDI
        case 0x09: // ADDIU
        case 0x0a: // SLTI
        case 0x0b: // SLTIU
        case 0x0c: // ANDI
        case 0x0d: // ORI
        case 0x0e: // XORI
            used.push(rs);
            break;
        case 0x10: // COP0
            {
                const copOp = (instr >>> 21) & 0x1f;
                if (copOp === 0x04)
                    used.push(rt); // MTC0
            }
            break;
        case 0x12: // COP2
            {
                const copOp = (instr >>> 21) & 0x1f;
                if (copOp === 0x04 || copOp === 0x06)
                    used.push(rt); // MTC2/CTC2
            }
            break;
        // Memory operations
        case 0x20: // LB
        case 0x21: // LH
        case 0x22: // LWL
        case 0x23: // LW
        case 0x24: // LBU
        case 0x25: // LHU
        case 0x26: // LWR
            used.push(rs); // base register
            if (op === 0x22 || op === 0x26)
                used.push(rt); // LWL/LWR use rt as input too
            break;
        case 0x28: // SB
        case 0x29: // SH
        case 0x2a: // SWL
        case 0x2b: // SW
        case 0x2e: // SWR
            used.push(rs, rt); // base and value
            break;
    }
    return used.filter((r, i, arr) => arr.indexOf(r) === i); // unique
};
