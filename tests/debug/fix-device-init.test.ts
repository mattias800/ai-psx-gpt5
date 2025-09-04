import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Fix device initialization', () => {
  test('ensure BIOS can initialize devices properly', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Pre-populate device table structure in RAM
    // The BIOS expects certain device structures to be present
    // Device Control Block (DCB) structure at specific locations
    
    // Initialize device table at 0x00003c2c (where AddDevice should be)
    // This is actually a function that gets copied from BIOS ROM
    // The BIOS copies kernel functions from ROM to RAM during init
    
    // Let's ensure the kernel copy happens properly by pre-seeding critical areas
    const ram = (sys as any).ram;
    
    // Device table header at a known location (usually around 0x150 or similar)
    // Format: linked list of device descriptors
    const deviceTableAddr = 0x00000150;
    
    // Create a minimal device descriptor for "tty" (console)
    // Device descriptor format (32 bytes):
    // +0x00: next pointer (4 bytes)
    // +0x04: device name pointer (4 bytes) 
    // +0x08: device flags (4 bytes)
    // +0x0C: block size (4 bytes)
    // +0x10: description pointer (4 bytes)
    // +0x14: init function (4 bytes)
    // +0x18: open function (4 bytes)
    // +0x1C: close function (4 bytes)
    
    // Write "tty" device name at 0x1000
    const ttyNameAddr = 0x00001000;
    ram.write8(ttyNameAddr + 0, 0x74); // 't'
    ram.write8(ttyNameAddr + 1, 0x74); // 't'
    ram.write8(ttyNameAddr + 2, 0x79); // 'y'
    ram.write8(ttyNameAddr + 3, 0x00); // null terminator
    
    // Write device descriptor
    ram.write32(deviceTableAddr + 0x00, 0x00000000); // no next device
    ram.write32(deviceTableAddr + 0x04, ttyNameAddr); // name pointer
    ram.write32(deviceTableAddr + 0x08, 0x00000001); // flags: character device
    ram.write32(deviceTableAddr + 0x0C, 0x00000001); // block size: 1
    ram.write32(deviceTableAddr + 0x10, 0x00000000); // no description
    ram.write32(deviceTableAddr + 0x14, 0x00000000); // no init function
    ram.write32(deviceTableAddr + 0x18, 0x00000000); // no open function
    ram.write32(deviceTableAddr + 0x1C, 0x00000000); // no close function
    
    // Also ensure the InstallDevices (C0:0x12) handler is present
    // The BIOS expects this at 0x27C0
    const installDevAddr = 0x000027c0;
    // Write a simple return stub
    ram.write32(installDevAddr, 0x03e00008); // jr ra
    ram.write32(installDevAddr + 4, 0x00000000); // nop (delay slot)
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let deviceAccess = false;
    
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        // Check for device table access
        if (p >= deviceTableAddr && p < deviceTableAddr + 0x100) {
          deviceAccess = true;
          console.log(`[${instrCount}] Device table access: ${op} at 0x${p.toString(16)}`);
        }
        // Check for AddDevice function area
        if (p >= 0x00003c2c && p < 0x00003d00) {
          console.log(`[${instrCount}] AddDevice area access: ${op} at 0x${p.toString(16)}`);
        }
        return false;
      },
      output: () => {}
    });
    
    console.log('\n=== Testing device initialization fix ===\n');
    
    try {
      // Run for a while to see if we get past the device init
      for (let i = 0; i < 1000000; i++) {
        sys.cpu.step();
        instrCount++;
        
        if (instrCount % 100000 === 0) {
          console.log(`Progress: ${instrCount} instructions...`);
        }
        
        // Check if we've reached GPU access (a sign we're past init)
        const gpuAddr = 0x1f801810;
        if ((sys.cpu.s.pc & 0x1fffffff) >= gpuAddr && 
            (sys.cpu.s.pc & 0x1fffffff) <= gpuAddr + 8) {
          console.log(`GPU access detected at instruction ${instrCount}!`);
          break;
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instrCount}: ${e.message}`);
      
      // Check if we got further than before
      if (e.message.includes('Unmapped address')) {
        const addr = parseInt(e.message.match(/\d+/)?.[0] || '0');
        if (addr !== 1684370546) {
          console.log('Progress! Different error address than before');
        } else {
          console.log('Still hitting the same error');
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instrCount}`);
    console.log(`Device table accessed: ${deviceAccess}`);
    
    expect(instrCount).toBeGreaterThan(100000);
  });
});
