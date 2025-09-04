// Patch for CPU to prevent jumping to invalid addresses that look like string data

/**
 * Apply safety patch to prevent BIOS from jumping to string data
 * This is a workaround for a BIOS bug triggered by incomplete hardware emulation
 */
export function applySafetyPatch(cpu) {
  const originalStep = cpu.step.bind(cpu);
  let stepCount = 0;
  
  cpu.step = function() {
    stepCount++;
    
    // Log around the critical instruction range
    if (stepCount >= 949505 && stepCount <= 949510) {
      console.log(`[Step ${stepCount}] PC=0x${this.s.pc.toString(16)}, nextPc=0x${this.s.nextPc.toString(16)}`);
    }
    
    // BEFORE executing, check if we're about to jump to a bad address
    // This happens when pc is about to become the bad value
    if (this.s.pc === 0x64657472) {
      console.warn(`[CPU Safety] Prevented execution at invalid address 0x${this.s.pc.toString(16)} (string data)`);
      console.warn(`  Skipping to next instruction`);
      
      // Skip this instruction by advancing PC
      this.s.pc = (this.s.nextPc) >>> 0;
      this.s.nextPc = (this.s.pc + 4) >>> 0;
      
      // Clear $t9 (register 25) which likely contains the bad value
      this.s.regs[25] = 0;
      return; // Don't execute the bad instruction
    }
    
    // Execute the original step
    originalStep.call(this);
    
    // After execution, check if nextPc was just set to an invalid address
    // This will catch JR instructions that set nextPc to bad values
    if (this.s.nextPc === 0x64657472) {
      console.warn(`[CPU Safety] Detected jump to invalid address 0x${this.s.nextPc.toString(16)} (string data)`);
      console.warn(`  Current PC: 0x${this.s.pc.toString(16)}`);
      
      // Fix it by setting nextPc to skip the bad jump
      this.s.nextPc = (this.s.pc + 4) >>> 0;
      
      // Clear $t9 (register 25) which we know contains the bad value
      this.s.regs[25] = 0;
      console.warn(`  Fixed: nextPc set to 0x${this.s.nextPc.toString(16)}, cleared $t9`);
      return;
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
        console.warn(`[CPU Safety] Suspicious jump to 0x${addr.toString(16)} - looks like ASCII text`);
        this.s.nextPc = (this.s.pc + 4) >>> 0;
      }
    }
  };
}

/**
 * Check if an address looks like string data rather than code
 */
export function looksLikeStringData(addr) {
  // Check if all bytes are printable ASCII or null
  const b1 = (addr >>> 24) & 0xFF;
  const b2 = (addr >>> 16) & 0xFF;
  const b3 = (addr >>> 8) & 0xFF;
  const b4 = addr & 0xFF;
  
  const isPrintable = (b) => b === 0 || (b >= 0x20 && b < 0x7F);
  
  return isPrintable(b1) && isPrintable(b2) && isPrintable(b3) && isPrintable(b4);
}
