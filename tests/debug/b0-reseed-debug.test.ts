import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin', 'SCPH1001.BIN', 'pc1001.bin', 'PC1001.BIN'];
  for (const n of names) {
    try {
      return new Uint8Array(readFileSync(n));
    } catch {
      // continue
    }
  }
  throw new Error('BIOS not found');
};

describe('B0 reseed debugging', () => {
  it('traces reseed behavior', () => {
    const psx = new PSXSystem();
    psx.loadBIOS(readBIOS());
    
    // Track when hook fires
    let hookCalls = 0;
    let lastHookAddr = 0;
    
    // Install a custom pre-read hook to log when it fires
    const cpuBus = (psx.cpu as any).mem;
    const originalHook = cpuBus.preRead32;
    cpuBus.preRead32 = (addr: number) => {
      hookCalls++;
      lastHookAddr = addr >>> 0;
      if (addr === 0xb0) {
        console.log(`Hook fired for 0xB0 read! Call #${hookCalls}`);
        console.log(`RAM[0xB0] before reseed: 0x${psx.ram.read32(0xb0).toString(16).padStart(8, '0')}`);
      }
      if (originalHook) originalHook(addr);
      if (addr === 0xb0) {
        console.log(`RAM[0xB0] after reseed: 0x${psx.ram.read32(0xb0).toString(16).padStart(8, '0')}`);
      }
    };
    
    // Set PC to BIOS entry
    psx.cpu.s.pc = 0xbfc00000 >>> 0;
    psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    
    // Step until we reach the jump to B0
    let stepCount = 0;
    const maxSteps = 200000;
    
    for (let i = 0; i < maxSteps; i++) {
      const pc = psx.cpu.s.pc >>> 0;
      
      // Check if we're about to jump to B0
      if (pc === 0xbfc0d9a4) {
        console.log(`About to jump to B0 at step ${i}`);
        console.log(`Hook called ${hookCalls} times so far`);
        console.log(`RAM[0xB0] = 0x${psx.ram.read32(0xb0).toString(16).padStart(8, '0')}`);
        
        // Step through the jump
        psx.cpu.step(); // jr $t2
        console.log(`After jr: PC = 0x${psx.cpu.s.pc.toString(16).padStart(8, '0')}`);
        console.log(`Hook called ${hookCalls} times total`);
        console.log(`Last hook addr: 0x${lastHookAddr.toString(16).padStart(8, '0')}`);
        
        psx.cpu.step(); // delay slot
        console.log(`After delay: PC = 0x${psx.cpu.s.pc.toString(16).padStart(8, '0')}`);
        console.log(`Hook called ${hookCalls} times after delay`);
        console.log(`Last hook addr after delay: 0x${lastHookAddr.toString(16).padStart(8, '0')}`);
        
        // Now we should be at B0, try to step once more to fetch from B0
        console.log('\nAbout to step from B0...');
        const beforeStepHooks = hookCalls;
        psx.cpu.step(); // This should fetch instruction from B0
        console.log(`After step from B0: PC = 0x${psx.cpu.s.pc.toString(16).padStart(8, '0')}`);
        console.log(`Hook called ${hookCalls - beforeStepHooks} times during B0 fetch`);
        if (hookCalls > beforeStepHooks) {
          console.log(`Last hook addr: 0x${lastHookAddr.toString(16).padStart(8, '0')}`);
        }
        
        // Now we should be at B0
        const finalPC = psx.cpu.s.pc >>> 0;
        const memAtB0 = psx.ram.read32(0xb0) >>> 0;
        
        console.log(`Final PC: 0x${finalPC.toString(16).padStart(8, '0')}`);
        console.log(`Final RAM[0xB0]: 0x${memAtB0.toString(16).padStart(8, '0')}`);
        
        // The value at B0 should be 0x3c080000
        expect(memAtB0).toBe(0x3c080000);
        break;
      }
      
      try {
        psx.cpu.step();
        stepCount++;
      } catch (e) {
        // Ignore exceptions
      }
    }
    
    expect(stepCount).toBeLessThan(maxSteps);
  });
});
