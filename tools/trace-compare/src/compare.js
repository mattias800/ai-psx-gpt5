import { formatAddress, formatInstruction } from './types.js';
const getCpuEvents = (stream) => {
    return stream.events.filter(e => e.kind === 'cpu');
};
export const compareTraces = (lhs, rhs, opts) => {
    const lhsCpu = getCpuEvents(lhs);
    const rhsCpu = getCpuEvents(rhs);
    const startIdx = opts.startLine - 1; // Convert to 0-based
    const endIdx = opts.endLine ? opts.endLine - 1 : Math.min(lhsCpu.length, rhsCpu.length) - 1;
    const contextSize = opts.context;
    const matchedContext = [];
    for (let i = startIdx; i <= endIdx; i++) {
        if (i >= lhsCpu.length || i >= rhsCpu.length) {
            // One stream ended early
            const lhsContext = lhsCpu.slice(i, Math.min(i + contextSize, lhsCpu.length));
            const rhsContext = rhsCpu.slice(i, Math.min(i + contextSize, rhsCpu.length));
            return {
                diverged: true,
                index: i - startIdx,
                reason: 'early-end',
                lhsEvent: lhsCpu[i],
                rhsEvent: rhsCpu[i],
                matchedContext: matchedContext.slice(-contextSize),
                lhsContext,
                rhsContext,
                differingRegs: [],
                differingMem: []
            };
        }
        const lhsEv = lhsCpu[i];
        const rhsEv = rhsCpu[i];
        // Check for match
        if (lhsEv.pc !== rhsEv.pc) {
            // PC mismatch
            const lhsContext = lhsCpu.slice(i, Math.min(i + contextSize, lhsCpu.length));
            const rhsContext = rhsCpu.slice(i, Math.min(i + contextSize, rhsCpu.length));
            return {
                diverged: true,
                index: i - startIdx,
                reason: 'pc-mismatch',
                lhsEvent: lhsEv,
                rhsEvent: rhsEv,
                matchedContext: matchedContext.slice(-contextSize),
                lhsContext,
                rhsContext,
                differingRegs: findDifferingRegs(lhsEv, rhsEv),
                differingMem: findDifferingMem(lhsEv, rhsEv)
            };
        }
        if (lhsEv.instr !== rhsEv.instr) {
            // Instruction mismatch
            const lhsContext = lhsCpu.slice(i, Math.min(i + contextSize, lhsCpu.length));
            const rhsContext = rhsCpu.slice(i, Math.min(i + contextSize, rhsCpu.length));
            return {
                diverged: true,
                index: i - startIdx,
                reason: 'instr-mismatch',
                lhsEvent: lhsEv,
                rhsEvent: rhsEv,
                matchedContext: matchedContext.slice(-contextSize),
                lhsContext,
                rhsContext,
                differingRegs: findDifferingRegs(lhsEv, rhsEv),
                differingMem: findDifferingMem(lhsEv, rhsEv)
            };
        }
        // Match! Add to context
        matchedContext.push(lhsEv);
        if (matchedContext.length > contextSize * 2) {
            matchedContext.shift();
        }
    }
    // No divergence found
    return {
        diverged: false,
        index: endIdx - startIdx,
        reason: 'none',
        matchedContext: matchedContext.slice(-contextSize),
        lhsContext: [],
        rhsContext: [],
        differingRegs: [],
        differingMem: []
    };
};
const findDifferingRegs = (lhs, rhs) => {
    const diffs = [];
    // Compare used registers if both have them
    if (lhs.usedRegs && rhs.usedRegs) {
        const allRegs = new Set([...Object.keys(lhs.usedRegs), ...Object.keys(rhs.usedRegs)]);
        for (const reg of allRegs) {
            const lhsVal = lhs.usedRegs[reg];
            const rhsVal = rhs.usedRegs[reg];
            if (lhsVal !== undefined && rhsVal !== undefined && lhsVal !== rhsVal) {
                diffs.push(`${reg}: pcsx=${formatAddress(lhsVal)} emu=${formatAddress(rhsVal)}`);
            }
        }
    }
    return diffs;
};
const findDifferingMem = (lhs, rhs) => {
    const diffs = [];
    if (lhs.mem && rhs.mem) {
        if (lhs.mem.addr !== rhs.mem.addr) {
            diffs.push(`addr: pcsx=${formatAddress(lhs.mem.addr)} emu=${formatAddress(rhs.mem.addr)}`);
        }
        if (lhs.mem.value !== rhs.mem.value) {
            diffs.push(`value: pcsx=${formatAddress(lhs.mem.value)} emu=${formatAddress(rhs.mem.value)}`);
        }
    }
    return diffs;
};
export const formatDivergenceReport = (report) => {
    const lines = [];
    if (!report.diverged) {
        lines.push('No divergence found in compared range');
        return lines.join('\n');
    }
    lines.push(`=== DIVERGENCE DETECTED ===`);
    lines.push(`At instruction #${report.index + 1} (relative to start)`);
    lines.push(`Reason: ${report.reason}`);
    lines.push('');
    if (report.matchedContext.length > 0) {
        lines.push(`Last ${report.matchedContext.length} matching instructions:`);
        for (const ev of report.matchedContext) {
            lines.push(`  ${formatAddress(ev.pc)} ${formatInstruction(ev.instr)} ${ev.disasm || ''}`);
        }
        lines.push('');
    }
    lines.push('Divergence point:');
    if (report.lhsEvent) {
        lines.push(`  PCSX: ${formatAddress(report.lhsEvent.pc)} ${formatInstruction(report.lhsEvent.instr)} ${report.lhsEvent.disasm || ''}`);
    }
    if (report.rhsEvent) {
        lines.push(`  EMU:  ${formatAddress(report.rhsEvent.pc)} ${formatInstruction(report.rhsEvent.instr)} ${report.rhsEvent.disasm || ''}`);
    }
    lines.push('');
    if (report.differingRegs && report.differingRegs.length > 0) {
        lines.push('Register differences:');
        for (const diff of report.differingRegs) {
            lines.push(`  ${diff}`);
        }
        lines.push('');
    }
    if (report.lhsContext.length > 0 || report.rhsContext.length > 0) {
        lines.push('Next instructions:');
        if (report.lhsContext.length > 0) {
            lines.push('  PCSX:');
            for (const ev of report.lhsContext.slice(0, 5)) {
                lines.push(`    ${formatAddress(ev.pc)} ${formatInstruction(ev.instr)} ${ev.disasm || ''}`);
            }
        }
        if (report.rhsContext.length > 0) {
            lines.push('  EMU:');
            for (const ev of report.rhsContext.slice(0, 5)) {
                lines.push(`    ${formatAddress(ev.pc)} ${formatInstruction(ev.instr)} ${ev.disasm || ''}`);
            }
        }
    }
    return lines.join('\n');
};
