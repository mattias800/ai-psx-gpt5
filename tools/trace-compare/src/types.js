/**
 * Core types for PCSX-Redux vs emulator trace comparison
 * All types use strict typing with no 'any'
 */
export const formatHex = (value, width) => {
    const hex = (value >>> 0).toString(16);
    return hex.padStart(width, '0');
};
export const formatAddress = (addr) => formatHex(addr, 8);
export const formatInstruction = (instr) => formatHex(instr, 8);
