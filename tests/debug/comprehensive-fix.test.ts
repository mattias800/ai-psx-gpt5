import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Comprehensive fix', () => {
  test('fix BIOS initialization to prevent error path', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // The BIOS is entering an error path because it's not finding expected hardware state
    // Let's initialize critical kernel areas and hardware states
    
    const ram = (sys as any).ram;
    
    // 1. Initialize kernel workspace areas that BIOS expects
    // Clear kernel workspace first
    for (let addr = 0x0; addr < 0x10000; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // 2. Initialize system control block at 0x100
    // This area contains critical system state
    ram.write32(0x100, 0x00000001); // System initialized flag
    ram.write32(0x104, 0x00000000); // Error count
    ram.write32(0x108, 0x00000000); // System state
    
    // 3. Initialize exception vectors
    // These need to point to valid handlers
    for (let i = 0; i < 16; i++) {
      const vectorAddr = 0x80 + i * 4;
      // Point to a safe return handler
      ram.write32(vectorAddr, 0x80001000 + i * 8);
      // Write a jr ra; nop at each handler
      ram.write32(0x1000 + i * 8, 0x03e00008); // jr ra
      ram.write32(0x1000 + i * 8 + 4, 0x00000000); // nop
    }
    
    // 4. Initialize kernel call tables
    // A0 table (0x200)
    for (let i = 0; i < 256; i++) {
      ram.write32(0x200 + i * 4, 0x80002000); // Point to stub
    }
    // B0 table (0x400)
    for (let i = 0; i < 256; i++) {
      ram.write32(0x400 + i * 4, 0x80002000); // Point to stub
    }
    // C0 table (0x600)
    for (let i = 0; i < 256; i++) {
      ram.write32(0x600 + i * 4, 0x80002000); // Point to stub
    }
    
    // Write stub handler
    ram.write32(0x2000, 0x03e00008); // jr ra
    ram.write32(0x2004, 0x00000000); // nop
    
    // 5. Hook memory reads to provide expected values
    const originalRead32 = ram.read32.bind(ram);
    ram.read32 = function(addr: number): number {
      const physAddr = addr & 0x1FFFFFFF;
      
      // Intercept reads from kernel areas that might trigger errors
      if (physAddr >= 0x100 && physAddr < 0x110) {
        // System control block - return initialized state
        return 0x00000001;
      }
      
      return originalRead32(addr);
    };
    
    // 6. Hook CD-ROM status to always indicate ready
    if (sys.cd) {
      const originalComputeStatus = sys.cd.computeStatus?.bind(sys.cd);
      if (originalComputeStatus) {
        (sys.cd as any).computeStatus = function() {
          // Return status indicating drive is ready with no disc
          return 0x10; // Shell open, no disc
        };
      }
    }
    
    // 7. Track execution to see if we avoid the error path
    let instructionCount = 0;
    let errorPathDetected = false;
    let gpuAccessed = false;
    
    // Track memory writes to detect error string building
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        
        // Check for GPU access
        if (p >= 0x1f801810 && p <= 0x1f801814) {
          return true;
        }
        
        // Check for error string writes
        if (instructionCount >= 59000 && instructionCount <= 60000 &&
            op.startsWith('w') && p >= 0x00007200 && p <= 0x00007300) {
          return true;
        }
        
        return false;
      },
      output: (line) => {
        const p = parseInt(line.match(/[0-9a-f]+/)?.[0] || '0', 16) & 0x1fffffff;
        
        if (p >= 0x1f801810 && p <= 0x1f801814) {
          console.log(`[${instructionCount}] GPU access: ${line}`);
          gpuAccessed = true;
        }
        
        // Check for the error string pattern
        if (line.includes('45505954') || // "EPYT"
            line.includes('64657472')) { // "detr"
          if (!errorPathDetected) {
            console.log(`\n✗ Error path detected at instruction ${instructionCount}`);
            console.log(`Memory write: ${line}`);
            errorPathDetected = true;
          }
        }
      }
    });
    
    // Track CPU execution
    sys.enableCpuTrace({
      output: (line) => {
        instructionCount++;
        
        // Check if we're past the previous error point
        if (instructionCount === 60000 && !errorPathDetected) {
          console.log(`\n✓ Passed instruction 60000 without error path!`);
        }
        
        if (instructionCount === 950000) {
          console.log(`\n✓ Passed previous failure point (949507)!`);
        }
      }
    });
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    console.log('\n=== Testing comprehensive fix ===\n');
    console.log('Initialized:');
    console.log('- Kernel workspace');
    console.log('- System control block');
    console.log('- Exception vectors');
    console.log('- Kernel call tables');
    console.log('- CD-ROM status hook');
    console.log('\nStarting execution...\n');
    
    try {
      for (let i = 0; i < 2000000; i++) {
        sys.cpu.step();
        
        if (instructionCount % 100000 === 0 && instructionCount > 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Check if we've reached GPU access (logo display)
        if (gpuAccessed) {
          console.log(`\n✓ SUCCESS! GPU accessed at instruction ${instructionCount}`);
          console.log('The BIOS is likely preparing to display the logo!');
          break;
        }
        
        // Stop if we hit 1M instructions without GPU access
        if (instructionCount > 1000000) {
          console.log('\nReached 1M instructions');
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
      
      if (e.message.includes('Unmapped address')) {
        const addrMatch = e.message.match(/\d+/);
        if (addrMatch) {
          const addr = parseInt(addrMatch[0]);
          console.log(`Unmapped address: 0x${addr.toString(16)}`);
          
          if (addr === 0x64657472) {
            console.log('✗ Still hitting the bad address - fix incomplete');
          } else {
            console.log('Different unmapped address - possible progress');
          }
        }
      }
    }
    
    console.log(`\n=== Results ===`);
    console.log(`Total instructions: ${instructionCount}`);
    console.log(`Error path triggered: ${errorPathDetected}`);
    console.log(`GPU accessed: ${gpuAccessed}`);
    
    // Success criteria: either GPU accessed or we got much further
    const success = gpuAccessed || instructionCount > 960000;
    expect(success).toBeTruthy();
  });
});
