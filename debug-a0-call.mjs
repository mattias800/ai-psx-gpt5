import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

// Load BIOS
const biosPath = path.join(process.cwd(), 'scph1001.bin');
if (!fs.existsSync(biosPath)) {
  console.error('BIOS file not found:', biosPath);
  process.exit(1);
}
const bios = fs.readFileSync(biosPath);

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

// Keep track of important info
let instructionCount = 0;
let lastPC = 0;
let lastT1Value = 0;

// Enable CPU tracing
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Parse the line to get PC
    const pcMatch = line.match(/^([0-9a-f]+)/);
    if (pcMatch) {
      lastPC = parseInt(pcMatch[1], 16);
    }
    
    // Check if we're near the problem area
    if (instructionCount >= 138200 && instructionCount <= 138220) {
      console.log(`[${instructionCount}] ${line}`);
      
      // Get CPU state
      const cpuState = sys.cpu;
      if (cpuState && cpuState.regs) {
        // t1 is register 9
        const t1 = cpuState.regs[9];
        if (t1 !== lastT1Value) {
          console.log(`   --> $t1 changed from 0x${lastT1Value.toString(16)} to 0x${t1.toString(16).padStart(8, '0')}`);
          lastT1Value = t1;
        }
      }
    }
    
    // Special check when we hit the A0 entry point
    if (lastPC === 0x000000a0) {
      console.log(`\n=== A0 BIOS call at instruction ${instructionCount} ===`);
      const cpuState = sys.cpu;
      if (cpuState && cpuState.regs) {
        const t1 = cpuState.regs[9];
        console.log(`$t1 (function number) = 0x${t1.toString(16).padStart(8, '0')}`);
        
        // Calculate table address
        const tableAddr = 0x200 + (t1 << 2);
        console.log(`Function table lookup address = 0x200 + (0x${t1.toString(16)} << 2) = 0x${tableAddr.toString(16)}`);
        
        // Check if this is in valid range
        if (tableAddr < 0x200 || tableAddr >= 0x600) {
          console.log(`WARNING: Table address 0x${tableAddr.toString(16)} is out of valid A0 table range (0x200-0x5FF)`);
        }
        
        // Try to read the value at that address
        try {
          const funcPtr = sys.ram.read32(tableAddr);
          console.log(`Function pointer at 0x${tableAddr.toString(16)} = 0x${funcPtr.toString(16).padStart(8, '0')}`);
        } catch (e) {
          console.log(`Failed to read function pointer: ${e.message}`);
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: true,
  includeRegsParens: true
});

console.log('Running to crash point...\n');

// Run to just past the crash point
try {
  for (let i = 0; i < 138230; i++) {
    sys.cpu.step();
    
    if (i % 20000 === 0 && i > 0) {
      console.log(`Progress: ${i} instructions`);
    }
  }
} catch (error) {
  console.log(`\nCrashed at instruction ${instructionCount}: ${error.message}`);
  
  // Dump some memory around the A0 table
  console.log('\n=== A0 Function Table Memory Dump ===');
  console.log('(Address range 0x200-0x5FF)');
  
  // Check some key entries
  const checkEntries = [
    { idx: 0x00, name: 'open' },
    { idx: 0x33, name: 'malloc' },
    { idx: 0x34, name: 'free' },
    { idx: 0x44, name: 'FlushCache' },
    { idx: 0x99, name: 'FileOpen' },
    { idx: 0xDD, name: 'Special t1 value' }, // The t1 value we saw
  ];
  
  for (const entry of checkEntries) {
    const addr = 0x200 + (entry.idx << 2);
    try {
      const val = sys.ram.read32(addr);
      console.log(`A0:${entry.idx.toString(16).padStart(2, '0')} (${entry.name.padEnd(20)}) @ 0x${addr.toString(16).padStart(4, '0')}: 0x${val.toString(16).padStart(8, '0')}`);
    } catch (e) {
      console.log(`A0:${entry.idx.toString(16).padStart(2, '0')} (${entry.name.padEnd(20)}) @ 0x${addr.toString(16).padStart(4, '0')}: <unmapped>`);
    }
  }
}
