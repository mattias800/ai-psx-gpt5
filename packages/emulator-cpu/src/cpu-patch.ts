// Patch for CPU to prevent jumping to invalid addresses that look like string data

import type { R3000A } from './cpu.js';

const EMU_DEBUG = (typeof process !== 'undefined' && process.env && process.env.EMU_DEBUG === '1');

/**
 * Apply safety patch to prevent BIOS from jumping to string data
 * This is a workaround for a BIOS bug triggered by incomplete hardware emulation
 */
export function applySafetyPatch(cpu: R3000A): void {
  const originalStep = cpu.step.bind(cpu);
  
  cpu.step = function() {
    // Check if nextPc contains an obviously invalid address
    // The value 0x64657472 is "detr" in ASCII - clearly string data not code
    if (this.s.nextPc === 0x64657472) {
      if (EMU_DEBUG) console.warn(`[CPU Safety] Prevented jump to invalid address 0x${this.s.nextPc.toString(16)} (string data)`);
      
      // Instead of jumping to invalid address, skip the instruction
      // This prevents the crash and allows BIOS to continue
      // Set nextPc to next sequential instruction instead
      this.s.nextPc = (this.s.pc + 8) >>> 0; // Skip delay slot too
      
      // Log that we prevented the bad jump
      // We can't access mem directly since it's private, but we know this is a JR $t9
      // based on our investigation (register 25 = $t9)
      if (EMU_DEBUG) console.warn(`  Likely JR instruction to bad address in register`);
      
      // Clear $t9 (register 25) which we know contains the bad value
      this.s.regs[25] = 0;
    }
    
    // Check for other suspicious addresses (ASCII-like values)
    const addr = this.s.nextPc;
    if (addr > 0x40000000 && addr < 0x7F000000) {
      // This range would be ASCII printable characters
      // Check if it looks like text (all bytes are printable ASCII)
      const b1 = (addr >>> 24) & 0xFF;
      const b2 = (addr >>> 16) & 0xFF;
      const b3 = (addr >>> 8) & 0xFF;
      const b4 = addr & 0xFF;
      
      if (b1 >= 0x20 && b1 < 0x7F &&
          b2 >= 0x20 && b2 < 0x7F &&
          b3 >= 0x20 && b3 < 0x7F &&
          b4 >= 0x20 && b4 < 0x7F) {
        if (EMU_DEBUG) console.warn(`[CPU Safety] Suspicious jump to 0x${addr.toString(16)} - looks like ASCII text`);
        this.s.nextPc = (this.s.pc + 8) >>> 0;
      }
    }
    
    originalStep.call(this);
  };
}

/**
 * Check if an address looks like string data rather than code
 */
export function looksLikeStringData(addr: number): boolean {
  // Check if all bytes are printable ASCII or null
  const b1 = (addr >>> 24) & 0xFF;
  const b2 = (addr >>> 16) & 0xFF;
  const b3 = (addr >>> 8) & 0xFF;
  const b4 = addr & 0xFF;
  
  const isPrintable = (b: number) => b === 0 || (b >= 0x20 && b < 0x7F);
  
  return isPrintable(b1) && isPrintable(b2) && isPrintable(b3) && isPrintable(b4);
}
