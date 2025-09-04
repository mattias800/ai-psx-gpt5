import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace to error', () => {
  test('trace execution leading to PC 0xbfc00434', () => {
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
    
    let instructionCount = 0;
    let callStack: Array<{instr: number, from: number, to: number, ra: number}> = [];
    let ioHistory: Array<{instr: number, device: string, op: string, addr: number, value?: number}> = [];
    let foundTarget = false;
    
    console.log('\n=== Tracing execution to PC 0xbfc00434 ===\n');
    
    // Track CPU execution
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Parse the trace
        const pcMatch = line.match(/pc=([0-9a-f]{8})/i);
        if (!pcMatch) return;
        
        const pc = parseInt(pcMatch[1], 16);
        
        // Check if we hit our target
        if (pc === 0xbfc00434) {
          if (!foundTarget) {
            foundTarget = true;
            console.log(`\n!!! Reached target PC 0xbfc00434 at instruction ${instructionCount} !!!`);
            
            // Get RA register to see return address
            const raMatch = line.match(/ra=([0-9a-f]{8})/i);
            if (raMatch) {
              const ra = parseInt(raMatch[1], 16);
              console.log(`Return address (RA): 0x${ra.toString(16)}`);
            }
            
            // Show call stack
            console.log('\nCall stack (last 10 calls):');
            callStack.slice(-10).forEach(c => {
              console.log(`  [${c.instr}] 0x${c.from.toString(16)} -> 0x${c.to.toString(16)} (RA: 0x${c.ra.toString(16)})`);
            });
            
            // Show recent I/O
            console.log('\nRecent I/O operations (last 20):');
            ioHistory.slice(-20).forEach(h => {
              if (h.value !== undefined) {
                console.log(`  [${h.instr}] ${h.device} ${h.op} 0x${h.addr.toString(16)} = 0x${h.value.toString(16)}`);
              } else {
                console.log(`  [${h.instr}] ${h.device} ${h.op} 0x${h.addr.toString(16)}`);
              }
            });
          }
        }
        
        // Track function calls in range
        if (instructionCount >= 59000 && instructionCount <= 60000) {
          const instrMatch = line.match(/i(?:nstr)?=([0-9a-f]{8})/i);
          if (instrMatch) {
            const instr = parseInt(instrMatch[1], 16);
            const op = (instr >>> 26) & 0x3F;
            
            // Track JAL/JALR
            if (op === 0x03) { // JAL
              const target = ((pc & 0xF0000000) | ((instr & 0x03FFFFFF) << 2)) >>> 0;
              const raMatch = line.match(/ra=([0-9a-f]{8})/i);
              const ra = raMatch ? parseInt(raMatch[1], 16) : 0;
              
              callStack.push({
                instr: instructionCount,
                from: pc,
                to: target,
                ra
              });
              
              if (callStack.length > 50) {
                callStack.shift();
              }
            } else if (op === 0x00) {
              const funct = instr & 0x3F;
              if (funct === 0x09) { // JALR
                const raMatch = line.match(/ra=([0-9a-f]{8})/i);
                const ra = raMatch ? parseInt(raMatch[1], 16) : 0;
                const rs = (instr >>> 21) & 0x1F;
                
                // Try to get register value from trace
                const regName = ['zero','at','v0','v1','a0','a1','a2','a3',
                               't0','t1','t2','t3','t4','t5','t6','t7',
                               's0','s1','s2','s3','s4','s5','s6','s7',
                               't8','t9','k0','k1','gp','sp','fp','ra'][rs];
                const regMatch = line.match(new RegExp(`${regName}=([0-9a-f]{8})`, 'i'));
                const target = regMatch ? parseInt(regMatch[1], 16) : 0;
                
                callStack.push({
                  instr: instructionCount,
                  from: pc,
                  to: target,
                  ra
                });
                
                if (callStack.length > 50) {
                  callStack.shift();
                }
              }
            }
          }
        }
      }
    });
    
    // Track I/O operations
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        return instructionCount >= 58000 && instructionCount <= 60000 &&
               p >= 0x1f801000 && p <= 0x1f801fff;
      },
      output: (line) => {
        // Parse the I/O access
        const match = line.match(/([rw]\d+) ([0-9a-f]+)(?: -> ([0-9a-f]+))?/);
        if (match) {
          const op = match[1];
          const addr = parseInt(match[2], 16);
          const value = match[3] ? parseInt(match[3], 16) : undefined;
          
          const p = addr & 0x1fffffff;
          let device = 'Unknown';
          
          if (p >= 0x1f801040 && p <= 0x1f80104f) device = 'SIO0';
          else if (p >= 0x1f801050 && p <= 0x1f80105f) device = 'SIO1';
          else if (p >= 0x1f801070 && p <= 0x1f801077) device = 'INTC';
          else if (p >= 0x1f801080 && p <= 0x1f8010ff) device = 'DMA';
          else if (p >= 0x1f801100 && p <= 0x1f80112f) device = 'Timers';
          else if (p >= 0x1f801800 && p <= 0x1f801803) device = 'CD-ROM';
          else if (p >= 0x1f801810 && p <= 0x1f801817) device = 'GPU';
          else if (p >= 0x1f801820 && p <= 0x1f801827) device = 'MDEC';
          else if (p >= 0x1f801c00 && p <= 0x1f801dff) device = 'SPU';
          else if (p >= 0x1f801000 && p <= 0x1f80100f) device = 'MemCtrl';
          else if (p === 0x1f801060) device = 'RAM_SIZE';
          else if (p === 0x1f801014) device = 'SPU_DELAY';
          else if (p === 0x1f801018) device = 'DMA_DELAY';
          else if (p === 0x1f80101c) device = 'CACHE_CTRL';
          
          ioHistory.push({
            instr: instructionCount,
            device,
            op,
            addr,
            value
          });
          
          if (ioHistory.length > 100) {
            ioHistory.shift();
          }
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      // Run until we hit the target or 62000 instructions
      for (let i = 0; i < 62000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 10000 === 0 && instructionCount > 0 && instructionCount <= 60000) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        if (foundTarget && instructionCount > 59900) {
          console.log('\nStopping after reaching target');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
    }
    
    if (!foundTarget) {
      console.log('\nDid not reach target PC 0xbfc00434');
    }
    
    // Analyze I/O patterns
    console.log('\n=== I/O Device Access Summary ===');
    const deviceCounts = new Map<string, number>();
    ioHistory.forEach(h => {
      deviceCounts.set(h.device, (deviceCounts.get(h.device) || 0) + 1);
    });
    
    deviceCounts.forEach((count, device) => {
      console.log(`${device}: ${count} accesses`);
    });
    
    // Check for specific patterns
    const cdromAccesses = ioHistory.filter(h => h.device === 'CD-ROM');
    if (cdromAccesses.length > 0) {
      console.log('\nCD-ROM access pattern:');
      cdromAccesses.slice(-10).forEach(h => {
        console.log(`  [${h.instr}] ${h.op} 0x${h.addr.toString(16)}${h.value !== undefined ? ` = 0x${h.value.toString(16)}` : ''}`);
      });
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    expect(instructionCount).toBeGreaterThan(59000);
  });
});
