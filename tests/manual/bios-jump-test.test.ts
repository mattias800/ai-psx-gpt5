import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('BIOS ROM jump test', () => {
  it('should handle jumps to BIOS ROM addresses', () => {
    // Load BIOS
    const biosPath = join(process.cwd(), 'scph1001.bin');
    const biosData = readFileSync(biosPath);
    
    const psx = new PSXSystem();
    psx.loadBIOS(new Uint8Array(biosData));
    
    // Set up a jump to BIOS ROM (0xbfc086b0)
    // We'll write a small program that jumps to BIOS ROM
    // MIPS is little-endian, so bytes are in reverse order
    const program = new Uint8Array([
      0xc0, 0xbf, 0x08, 0x3c,  // lui $t0, 0xbfc0  (0x3c08bfc0)
      0xb0, 0x86, 0x08, 0x35,  // ori $t0, $t0, 0x86b0 (0x350886b0)
      0x08, 0x00, 0x00, 0x01,  // jr $t0 (0x01000008)
      0x00, 0x00, 0x00, 0x00,  // nop (delay slot)
    ]);
    
    // Load program at 0x80010000
    const loadAddr = 0x80010000;
    psx.loadProgram(program, loadAddr);
    
    // Set PC to start of our program
    psx.cpu.s.pc = loadAddr;
    psx.cpu.s.nextPc = loadAddr + 4;
    
    // Step through the instructions
    psx.stepCpu(1); // lui
    expect(psx.cpu.s.regs[8] >>> 0).toBe(0xbfc00000); // $t0 should have upper half
    
    psx.stepCpu(1); // ori
    expect(psx.cpu.s.regs[8] >>> 0).toBe(0xbfc086b0); // $t0 should have full address
    
    psx.stepCpu(1); // jr
    // After jr, nextPc should be set to jump target
    expect(psx.cpu.s.nextPc >>> 0).toBe(0xbfc086b0);
    
    psx.stepCpu(1); // delay slot (nop)
    // After delay slot, PC should be at BIOS ROM
    expect(psx.cpu.s.pc >>> 0).toBe(0xbfc086b0);
    
    // Try to fetch and execute one instruction from BIOS ROM
    const oldPc = psx.cpu.s.pc;
    psx.stepCpu(1);
    
    // PC should have changed (not stuck at 0 or same value)
    expect(psx.cpu.s.pc >>> 0).not.toBe(0);
    expect(psx.cpu.s.pc >>> 0).not.toBe(oldPc);
  });
});
