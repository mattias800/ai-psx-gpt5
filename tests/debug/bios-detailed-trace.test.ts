import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Detailed BIOS trace', () => {
  test('trace BIOS execution patterns to find blocking point', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let lastPCs: number[] = [];
    const callHistory: Map<number, number> = new Map();
    const loopDetector: Map<number, number> = new Map();
    let lastLoopReport = 0;
    
    // Track hardware access patterns
    const hwAccess = {
      gpu: 0,
      mdec: 0,
      cdrom: 0,
      spu: 0,
      timer: 0,
      intc: 0,
      dma: 0,
      sio: 0
    };
    
    // Track memory regions accessed
    const memRegions = new Set<string>();
    
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        
        // Categorize access
        if (p >= 0x1f801810 && p <= 0x1f801817) hwAccess.gpu++;
        else if (p >= 0x1f801820 && p <= 0x1f801827) hwAccess.mdec++;
        else if (p >= 0x1f801800 && p <= 0x1f801803) hwAccess.cdrom++;
        else if (p >= 0x1f801c00 && p <= 0x1f801dff) hwAccess.spu++;
        else if (p >= 0x1f801100 && p <= 0x1f801128) hwAccess.timer++;
        else if (p >= 0x1f801070 && p <= 0x1f801074) hwAccess.intc++;
        else if (p >= 0x1f801080 && p <= 0x1f8010f7) hwAccess.dma++;
        else if (p >= 0x1f801040 && p <= 0x1f80105f) hwAccess.sio++;
        
        // Track memory regions
        if (p < 0x00800000) memRegions.add('RAM');
        else if (p >= 0x1f000000 && p <= 0x1f7fffff) memRegions.add('EXP1');
        else if (p >= 0x1f800000 && p <= 0x1f8003ff) memRegions.add('Scratchpad');
        else if (p >= 0x1f801000 && p <= 0x1f803fff) memRegions.add('IO');
        else if (p >= 0x1fc00000 && p <= 0x1fc7ffff) memRegions.add('BIOS');
        
        // Log important IO writes after 3M instructions
        if (instrCount > 3000000 && op.startsWith('w')) {
          if (p >= 0x1f801000 && p <= 0x1f803fff) {
            console.log(`[${instrCount}] IO Write: ${op} 0x${p.toString(16)}`);
          }
        }
        
        return false; // Don't output every access
      },
      output: () => {}
    });
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        const pc = parseInt(parts[0].split('=')[1], 16);
        
        // Keep track of recent PCs
        lastPCs.push(pc);
        if (lastPCs.length > 100) lastPCs.shift();
        
        // Track JAL/JALR calls
        const instr = parseInt(parts[1].split('=')[1], 16);
        const op = (instr >>> 26) & 0x3f;
        if (op === 3) { // JAL
          const target = ((pc & 0xf0000000) | ((instr & 0x3ffffff) << 2)) >>> 0;
          callHistory.set(target, (callHistory.get(target) || 0) + 1);
        }
        
        // Detect tight loops
        loopDetector.set(pc, (loopDetector.get(pc) || 0) + 1);
        
        // Every 100K instructions, report status
        if (instrCount % 100000 === 0) {
          console.log(`\n=== ${instrCount} instructions ===`);
          console.log(`Hardware access: GPU:${hwAccess.gpu} MDEC:${hwAccess.mdec} CD:${hwAccess.cdrom} SPU:${hwAccess.spu}`);
          console.log(`                Timer:${hwAccess.timer} INTC:${hwAccess.intc} DMA:${hwAccess.dma} SIO:${hwAccess.sio}`);
          console.log(`Memory regions: ${Array.from(memRegions).join(', ')}`);
          
          // Show hot spots
          const hotSpots = Array.from(loopDetector.entries())
            .filter(([pc, count]) => count > (instrCount - lastLoopReport) / 100)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);
          
          if (hotSpots.length > 0) {
            console.log('Hot spots:');
            for (const [pc, count] of hotSpots) {
              const percent = ((count - (lastLoopReport ? loopDetector.get(pc) || 0 : 0)) * 100 / 100000).toFixed(1);
              console.log(`  0x${pc.toString(16).padStart(8, '0')}: ${percent}% of recent instructions`);
            }
          }
          
          lastLoopReport = instrCount;
        }
        
        // After 3.2M instructions, start looking for patterns
        if (instrCount > 3200000) {
          // Check if we're in a wait loop
          const loopCount = loopDetector.get(pc) || 0;
          if (loopCount > 10000 && loopCount % 1000 === 0) {
            console.log(`\n!!! Potential infinite loop at 0x${pc.toString(16).padStart(8, '0')} (${loopCount} iterations)`);
            
            // Decode the instruction to understand what it's doing
            const rt = (instr >>> 16) & 0x1f;
            const rs = (instr >>> 21) & 0x1f;
            const imm = instr & 0xffff;
            
            if (op === 4 || op === 5) { // BEQ/BNE
              console.log(`Branch instruction: ${op === 4 ? 'BEQ' : 'BNE'} r${rs}, r${rt}, offset=${imm}`);
              
              // Try to find what register values it's checking
              const regMatch = line.match(new RegExp(`r${rs.toString().padStart(2, '0')}=([0-9a-f]{8})`));
              if (regMatch) {
                console.log(`  r${rs} = 0x${regMatch[1]}`);
              }
            } else if (op === 35) { // LW
              const addr = ((parseInt(parts[2 + rs].split('=')[1], 16) + (imm & 0x8000 ? imm | 0xffff0000 : imm)) >>> 0);
              console.log(`Load word: LW r${rt}, 0x${addr.toString(16)}`);
            }
          }
        }
        
        // Stop if we hit 3.5M instructions
        if (instrCount >= 3500000) {
          throw new Error('Reached instruction limit');
        }
      }
    });
    
    console.log('\n=== Starting detailed BIOS trace ===\n');
    
    try {
      // Run until we hit the limit or exception
      for (let i = 0; i < 3500000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\nExecution stopped: ${e.message}`);
    }
    
    console.log('\n=== Final Analysis ===');
    console.log(`Total instructions: ${instrCount}`);
    console.log('\nMost called functions:');
    const topCalls = Array.from(callHistory.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    for (const [addr, count] of topCalls) {
      console.log(`  0x${addr.toString(16).padStart(8, '0')}: ${count} calls`);
    }
    
    console.log('\nFinal hardware access counts:');
    for (const [hw, count] of Object.entries(hwAccess)) {
      if (count > 0) {
        console.log(`  ${hw}: ${count}`);
      }
    }
    
    console.log('\nLast 20 PCs before stop:');
    for (const pc of lastPCs.slice(-20)) {
      console.log(`  0x${pc.toString(16).padStart(8, '0')}`);
    }
    
    // We expect some hardware access
    expect(instrCount).toBeGreaterThan(100000);
  });
});
