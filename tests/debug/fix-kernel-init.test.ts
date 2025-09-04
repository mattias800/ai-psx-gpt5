import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Fix kernel initialization', () => {
  test('properly initialize kernel workspace to prevent invalid jump', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Initialize critical kernel areas to prevent the BIOS from jumping to garbage
    const ram = (sys as any).ram;
    
    // The BIOS expects certain kernel structures in low RAM
    // These get copied from ROM during initialization
    
    // Clear low memory first to avoid garbage
    for (let addr = 0; addr < 0x10000; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // Initialize exception vectors (the BIOS will set these up)
    // Just make them safe initially
    for (let addr = 0x80; addr < 0x200; addr += 4) {
      ram.write32(addr, 0x03e00008); // jr ra (return)
      ram.write32(addr + 4, 0x00000000); // nop
    }
    
    // Initialize the kernel workspace at 0x500-0x3000
    // This area contains important kernel tables
    
    // Device descriptor table starts around 0x150
    // Initialize with empty/null entries
    for (let addr = 0x150; addr < 0x250; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // File Control Block table around 0x280
    for (let addr = 0x280; addr < 0x380; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // Thread Control Block table around 0x1000
    for (let addr = 0x1000; addr < 0x1100; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // Event Control Block table around 0x1200
    for (let addr = 0x1200; addr < 0x1400; addr += 4) {
      ram.write32(addr, 0);
    }
    
    // Device driver jump table around 0x200
    // Each entry is typically:
    // +0: next pointer
    // +4: device name pointer
    // +8: flags
    // +C: functions...
    
    // Create dummy device entries with safe function pointers
    const dummyFunc = 0x80001000; // Point to a safe area
    ram.write32(dummyFunc, 0x03e00008); // jr ra
    ram.write32(dummyFunc + 4, 0x00000000); // nop
    
    // Initialize AddDevice function area (0x3c2c+)
    // The BIOS uses this to add new device drivers
    // Make it a simple stub that returns
    ram.write32(0x3c2c, 0x03e00008); // jr ra
    ram.write32(0x3c30, 0x00000000); // nop
    
    // Initialize InstallDevices (B0:12h) handler
    // The BIOS calls this to install standard devices
    const installDevAddr = 0x27c0;
    ram.write32(installDevAddr, 0x03e00008); // jr ra
    ram.write32(installDevAddr + 4, 0x00000000); // nop
    
    // Initialize the kernel call table pointers
    // A0 table (0x200-0x3FF)
    for (let i = 0; i < 256; i++) {
      const addr = 0x200 + i * 4;
      ram.write32(addr, dummyFunc); // Point all to dummy
    }
    
    // B0 table (0x400-0x5FF)
    for (let i = 0; i < 256; i++) {
      const addr = 0x400 + i * 4;
      ram.write32(addr, dummyFunc);
    }
    
    // C0 table (0x600-0x7FF)
    for (let i = 0; i < 256; i++) {
      const addr = 0x600 + i * 4;
      ram.write32(addr, dummyFunc);
    }
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instructionCount = 0;
    let maxInstructions = 0;
    let gpuAccessed = false;
    
    console.log('\n=== Testing kernel initialization fix ===\n');
    
    // Track GPU access to see if we reach logo display
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        return p >= 0x1f801810 && p <= 0x1f801814;
      },
      output: (line) => {
        console.log(`[${instructionCount}] GPU access: ${line}`);
        gpuAccessed = true;
      }
    });
    
    try {
      for (let i = 0; i < 2000000; i++) {
        sys.cpu.step();
        instructionCount++;
        
        if (instructionCount % 100000 === 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
        
        // Check if we've passed the previous failure point
        if (instructionCount > 950000 && maxInstructions === 0) {
          console.log('\n✓ Passed previous failure point (950k instructions)!');
          maxInstructions = instructionCount;
        }
        
        if (gpuAccessed) {
          console.log(`\n✓ GPU accessed at instruction ${instructionCount}!`);
          console.log('The BIOS is likely trying to display the logo!');
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
          
          // Check if it's the same bad address
          if (addr === 0x64657472) {
            console.log('Still hitting the "detr" address issue');
          } else {
            console.log('Different error - possible progress!');
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`GPU accessed: ${gpuAccessed}`);
    
    // We expect to run more instructions than before
    expect(instructionCount).toBeGreaterThan(950000);
  });
});
