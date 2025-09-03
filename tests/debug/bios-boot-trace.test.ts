import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import { readFileSync, writeFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { 
    try { 
      return new Uint8Array(readFileSync(n)); 
    } catch {} 
  }
  throw new Error('Missing BIOS at repo root');
};

describe('BIOS boot trace debug', () => {
  it('traces BIOS execution to find stuck point', () => {
    const psx = new PSXSystem();
    const bios = readBIOS();
    
    console.log('Loading BIOS...');
    psx.loadBIOS(bios);
    
    // Attach subsystems
    psx.attachDisplay();
    psx.attachDMATiming();
    psx.attachSPUAudio();
    
    // Set up CPU to start at BIOS entry point
    psx.cpu.s.pc = 0xbfc00000 >>> 0;
    psx.cpu.s.nextPc = 0xbfc00004 >>> 0;
    
    // Track PC history to detect loops
    const pcHistory: number[] = [];
    const pcCounts = new Map<number, number>();
    let lastPC = 0;
    
    // Track IO accesses
    const ioAccesses: string[] = [];
    
    // Enable memory trace for IO region
    psx.enableMemTrace({
      filter: (op, addr) => {
        const p = addr >>> 0;
        // Track all IO accesses
        return p >= 0x1f800000 && p <= 0x1f803fff;
      },
      output: (line) => {
        ioAccesses.push(line);
      }
    });
    
    console.log('Starting BIOS execution...');
    
    // Run for a limited number of steps
    const maxSteps = 100000;
    let loopDetected = false;
    let stuckPC = 0;
    
    for (let step = 0; step < maxSteps && !loopDetected; step++) {
      const pc = psx.cpu.s.pc >>> 0;
      
      // Track PC
      pcHistory.push(pc);
      const count = (pcCounts.get(pc) || 0) + 1;
      pcCounts.set(pc, count);
      
      // Detect if we're stuck in a tight loop
      if (count > 1000) {
        console.log(`\nLoop detected at PC=0x${pc.toString(16).padStart(8,'0')} (executed ${count} times)`);
        loopDetected = true;
        stuckPC = pc;
        break;
      }
      
      // Log progress periodically
      if (step % 10000 === 0 && step > 0) {
        console.log(`Step ${step}: PC=0x${pc.toString(16).padStart(8,'0')}`);
      }
      
      try {
        psx.cpu.step();
      } catch (e) {
        // Log exceptions but continue
        if (step < 100) {
          console.log(`Exception at step ${step}, PC=0x${pc.toString(16).padStart(8,'0')}: ${e}`);
        }
      }
      
      // Run scheduler periodically
      if (step % 100 === 0) {
        psx.stepCycles(100);
      }
      
      lastPC = pc;
    }
    
    // Find the most frequently executed addresses
    const sortedPCs = Array.from(pcCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
    
    console.log('\n=== Most frequently executed addresses ===');
    for (const [pc, count] of sortedPCs) {
      if (count > 10) {
        console.log(`  0x${pc.toString(16).padStart(8,'0')}: ${count} times`);
      }
    }
    
    // Find loop pattern if detected
    if (loopDetected) {
      console.log('\n=== Loop pattern analysis ===');
      
      // Find the loop cycle
      const lastIndex = pcHistory.lastIndexOf(stuckPC);
      const prevIndex = pcHistory.lastIndexOf(stuckPC, lastIndex - 1);
      
      if (prevIndex >= 0 && lastIndex > prevIndex) {
        const loopLength = lastIndex - prevIndex;
        console.log(`Loop length: ${loopLength} instructions`);
        
        const loopPCs = pcHistory.slice(prevIndex, lastIndex);
        const uniquePCs = Array.from(new Set(loopPCs));
        
        console.log(`Unique PCs in loop: ${uniquePCs.length}`);
        for (const pc of uniquePCs.slice(0, 10)) {
          console.log(`  0x${pc.toString(16).padStart(8,'0')}`);
        }
      }
    }
    
    // Show recent IO accesses
    console.log('\n=== Recent IO accesses (last 20) ===');
    for (const access of ioAccesses.slice(-20)) {
      console.log(`  ${access}`);
    }
    
    // Check MDEC status
    const mdecStatus = psx.as.read32(0x1f801824);
    console.log(`\n=== MDEC Status: 0x${mdecStatus.toString(16).padStart(8,'0')} ===`);
    
    // Check DMA status
    const dmaControl = psx.as.read32(0x1f8010f0);
    const dmaInterrupt = psx.as.read32(0x1f8010f4);
    console.log(`\n=== DMA Status ===`);
    console.log(`  Control: 0x${dmaControl.toString(16).padStart(8,'0')}`);
    console.log(`  Interrupt: 0x${dmaInterrupt.toString(16).padStart(8,'0')}`);
    
    // Check GPU status
    const gpuStatus = psx.gpu.readGP1();
    console.log(`\n=== GPU Status: 0x${gpuStatus.toString(16).padStart(8,'0')} ===`);
    
    // Save trace for analysis
    const traceData = {
      loopDetected,
      stuckPC: stuckPC.toString(16),
      topPCs: sortedPCs.slice(0, 10).map(([pc, count]) => ({
        pc: pc.toString(16),
        count
      })),
      recentIO: ioAccesses.slice(-50)
    };
    
    writeFileSync('bios-boot-trace.json', JSON.stringify(traceData, null, 2));
    console.log('\nTrace saved to bios-boot-trace.json');
    
    expect(loopDetected).toBe(false);
  });
});
