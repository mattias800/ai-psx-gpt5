import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';

describe('Scan BIOS function tables', () => {
  it('checks for null function pointers after BIOS init', () => {
    const sys = new PSXSystem();
    
    // Create a minimal BIOS that won't crash
    const biosData = new Uint8Array(512 * 1024);
    const view = new DataView(biosData.buffer);
    
    // Set reset vector to jump to a simple loop
    // BFC00000: j 0xBFC00008
    view.setUint32(0x0, 0x0bf00002, true); // j 0xbfc00008
    view.setUint32(0x4, 0x00000000, true); // nop
    view.setUint32(0x8, 0x1000ffff, true); // b -4 (infinite loop)
    view.setUint32(0xc, 0x00000000, true); // nop
    
    sys.loadBIOS(biosData);
    
    // Step a few instructions to let BIOS stubs install
    for (let i = 0; i < 10; i++) {
      sys.stepCpu(1);
    }
    
    const ram = sys.ram;
    
    console.log('\n=== Function Table Analysis ===\n');
    
    // A0 table (0x200 - 0x463)
    console.log('A0 Table (0x200-0x463):');
    let nullCount = 0;
    let nonNullCount = 0;
    // Note: Our A0:0x99 is at 0x464 which is just past the normal range
    for (let addr = 0x200; addr <= 0x464; addr += 4) {
      const val = ram.read32(addr);
      const index = (addr - 0x200) >> 2;
      if (val === 0) {
        nullCount++;
      } else {
        nonNullCount++;
        if (index === 0x99) {
          console.log(`  A0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')} ✓ (expected)`);
        } else if (val !== 0) {
          console.log(`  A0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')}`);
        }
      }
    }
    console.log(`  Summary: ${nullCount} NULL, ${nonNullCount} non-NULL\n`);
    
    // B0 table (0x874 - 0xA73)
    console.log('B0 Table (0x874-0xA73):');
    nullCount = 0;
    nonNullCount = 0;
    const b0Expected = new Map([
      [0x18, 0xf2c],
      [0x47, 0x3c2c],
    ]);
    for (let addr = 0x874; addr <= 0xA73; addr += 4) {
      const val = ram.read32(addr);
      const index = (addr - 0x874) >> 2;
      if (val === 0) {
        nullCount++;
      } else {
        nonNullCount++;
        const expected = b0Expected.get(index);
        if (expected && val === expected) {
          console.log(`  B0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')} ✓ (expected)`);
        } else if (val !== 0) {
          console.log(`  B0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')}`);
        }
      }
    }
    console.log(`  Summary: ${nullCount} NULL, ${nonNullCount} non-NULL\n`);
    
    // C0 table (0x674 - 0x773)
    console.log('C0 Table (0x674-0x773):');
    nullCount = 0;
    nonNullCount = 0;
    for (let addr = 0x674; addr <= 0x773; addr += 4) {
      const val = ram.read32(addr);
      const index = (addr - 0x674) >> 2;
      if (val === 0) {
        nullCount++;
      } else {
        nonNullCount++;
        if (index === 0x12 && val === 0x27c0) {
          console.log(`  C0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')} ✓ (expected)`);
        } else if (val !== 0) {
          console.log(`  C0:0x${index.toString(16)} @ 0x${addr.toString(16)}: 0x${val.toString(16).padStart(8,'0')}`);
        }
      }
    }
    console.log(`  Summary: ${nullCount} NULL, ${nonNullCount} non-NULL\n`);
    
    // Check the stub handlers
    console.log('Stub Handlers:');
    console.log(`  0xF2C (B0:0x18 handler): 0x${ram.read32(0xf2c).toString(16).padStart(8,'0')}`);
    console.log(`  0x27C0 (C0:0x12 handler): 0x${ram.read32(0x27c0).toString(16).padStart(8,'0')}`);
    console.log(`  0x3C2C (B0:0x47 handler): 0x${ram.read32(0x3c2c).toString(16).padStart(8,'0')}`);
    
    // Check if any critical entries are missing
    const criticalMissing = [];
    if (ram.read32(0x464) === 0) criticalMissing.push('A0:0x99');
    if (ram.read32(0x8d4) === 0) criticalMissing.push('B0:0x18');
    if (ram.read32(0x990) === 0) criticalMissing.push('B0:0x47');
    if (ram.read32(0x6bc) === 0) criticalMissing.push('C0:0x12');
    
    if (criticalMissing.length > 0) {
      console.log('\n⚠️  Critical entries missing:', criticalMissing.join(', '));
    } else {
      console.log('\n✓ All critical entries present');
    }
  });
});
