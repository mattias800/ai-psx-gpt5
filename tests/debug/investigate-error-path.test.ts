import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Investigate error path', () => {
  test('find why BIOS enters error handler around instruction 60000', () => {
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
    let recentBranches: Array<{instr: number, pc: number, target: number, taken: boolean}> = [];
    let systemCalls: Array<{instr: number, pc: number, function: number}> = [];
    let stringBuildingStarted = false;
    
    console.log('\n=== Investigating why BIOS enters error path ===\n');
    
    // Track CPU execution focusing on branches and system calls
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Start detailed tracking before the error strings are written
        if (instructionCount >= 59000 && instructionCount <= 61000) {
          // Parse the trace
          const pcMatch = line.match(/pc=([0-9a-f]{8})/i);
          const instrMatch = line.match(/i(?:nstr)?=([0-9a-f]{8})/i);
          
          if (pcMatch && instrMatch) {
            const pc = parseInt(pcMatch[1], 16);
            const instr = parseInt(instrMatch[1], 16);
            const op = (instr >>> 26) & 0x3F;
            
            // Track branches to understand control flow
            if (op >= 0x04 && op <= 0x07) { // BEQ, BNE, BLEZ, BGTZ
              const nextPcMatch = line.match(/nextpc=([0-9a-f]{8})/i);
              if (nextPcMatch) {
                const nextPc = parseInt(nextPcMatch[1], 16);
                const taken = nextPc !== pc + 8; // Branch taken if not sequential
                recentBranches.push({
                  instr: instructionCount,
                  pc,
                  target: nextPc,
                  taken
                });
                
                if (recentBranches.length > 20) {
                  recentBranches.shift();
                }
              }
            }
            
            // Track JAL to identify function calls
            if (op === 0x03) { // JAL
              const target = ((pc & 0xF0000000) | ((instr & 0x03FFFFFF) << 2)) >>> 0;
              
              // Check if this is a BIOS function call
              if (target >= 0xbfc00000 && target < 0xbfc80000) {
                if (instructionCount > 59500) {
                  console.log(`[${instructionCount}] BIOS function call to 0x${target.toString(16)}`);
                }
              }
              
              systemCalls.push({
                instr: instructionCount,
                pc,
                function: target
              });
              
              if (systemCalls.length > 20) {
                systemCalls.shift();
              }
            }
            
            // Track SYSCALL instructions
            if (op === 0x00 && (instr & 0x3F) === 0x0C) { // SYSCALL
              console.log(`[${instructionCount}] SYSCALL at PC 0x${pc.toString(16)}`);
            }
          }
        }
        
        // Stop detailed output after string building starts
        if (instructionCount > 61000) {
          return;
        }
      }
    });
    
    // Track memory writes to identify string building
    sys.enableMemTrace({
      filter: (op, addr) => {
        // Track writes around where the error strings appear
        const p = addr & 0x1fffffff;
        return instructionCount >= 59000 && instructionCount <= 61000 && 
               op.startsWith('w') && p >= 0x00007200 && p <= 0x00007300;
      },
      output: (line) => {
        // Parse memory write
        const match = line.match(/w32 ([0-9a-f]+) -> ([0-9a-f]+)/);
        if (match) {
          const addr = parseInt(match[1], 16);
          const value = parseInt(match[2], 16);
          
          // Convert to ASCII to see if it's a string
          const ascii = String.fromCharCode(
            (value >> 24) & 0xFF,
            (value >> 16) & 0xFF,
            (value >> 8) & 0xFF,
            value & 0xFF
          );
          
          // Check if this looks like text
          const isPrintable = ascii.split('').every(c => 
            c === '\0' || (c.charCodeAt(0) >= 32 && c.charCodeAt(0) < 127)
          );
          
          if (isPrintable && value !== 0) {
            if (!stringBuildingStarted) {
              stringBuildingStarted = true;
              console.log(`\n[${instructionCount}] String building started!`);
              console.log('Recent branches before string building:');
              recentBranches.forEach(b => {
                console.log(`  [${b.instr}] PC: 0x${b.pc.toString(16)}, Target: 0x${b.target.toString(16)}, Taken: ${b.taken}`);
              });
              
              console.log('\nRecent function calls:');
              systemCalls.forEach(c => {
                console.log(`  [${c.instr}] PC: 0x${c.pc.toString(16)}, Function: 0x${c.function.toString(16)}`);
              });
            }
            
            console.log(`[${instructionCount}] String write to 0x${addr.toString(16)}: "${ascii}" (0x${value.toString(16)})`);
          }
        }
      }
    });
    
    // Also track I/O access to see what hardware the BIOS is checking
    let ioAccesses: Array<{instr: number, addr: number, op: string}> = [];
    const originalEnableMemTrace = sys.enableMemTrace.bind(sys);
    
    // Add another memory trace for I/O
    originalEnableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        // Track I/O region access
        return instructionCount >= 58000 && instructionCount <= 61000 &&
               p >= 0x1f801000 && p <= 0x1f801fff;
      },
      output: (line) => {
        const addrMatch = line.match(/([rw]\d+) ([0-9a-f]+)/);
        if (addrMatch) {
          const op = addrMatch[1];
          const addr = parseInt(addrMatch[2], 16);
          
          ioAccesses.push({
            instr: instructionCount,
            addr,
            op
          });
          
          // Keep only recent accesses
          if (ioAccesses.length > 30) {
            ioAccesses.shift();
          }
          
          // Identify specific hardware
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
          
          if (instructionCount >= 59500 && instructionCount <= 60100) {
            console.log(`[${instructionCount}] ${device} ${op} at 0x${addr.toString(16)}`);
          }
        }
      }
    });
    
    console.log('Starting execution...\n');
    
    try {
      // Run until we see string building
      for (let i = 0; i < 62000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 10000 === 0 && instructionCount > 0 && instructionCount <= 60000) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Stop after we've seen the string building
        if (instructionCount > 61000) {
          console.log('\nStopping after string building detected');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
    }
    
    // Analyze what we found
    console.log('\n=== Analysis ===');
    
    if (stringBuildingStarted) {
      console.log('String building was detected, indicating error path was taken');
      
      // Show I/O accesses before error
      console.log('\nI/O accesses before error path:');
      const relevantIO = ioAccesses.filter(a => a.instr < 60000 && a.instr > 59000);
      relevantIO.forEach(a => {
        const p = a.addr & 0x1fffffff;
        let device = 'Unknown';
        if (p >= 0x1f801800 && p <= 0x1f801803) device = 'CD-ROM';
        else if (p >= 0x1f801040 && p <= 0x1f80105f) device = 'SIO';
        else if (p >= 0x1f801070 && p <= 0x1f801077) device = 'INTC';
        
        console.log(`  [${a.instr}] ${device} ${a.op} at 0x${a.addr.toString(16)}`);
      });
    } else {
      console.log('String building not detected in expected range');
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    expect(instructionCount).toBeGreaterThan(60000);
  });
});
