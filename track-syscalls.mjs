import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Tracking BIOS system calls to understand what\'s happening...\n');

let instructionCount = 0;
let lastPC = 0;
const functionCalls = new Map();

// BIOS function names (partial list)
const biosFunctions = {
  0xa0: {
    0x13: 'setjmp',
    0x14: 'longjmp', 
    0x28: 'bzero',
    0x2a: 'memcpy',
    0x2c: 'memset',
    0x44: 'FlushCache',
    0x70: '_bu_init',
    0x71: '_96_init',
    0x72: '_96_remove',
    0x9f: 'SetMem'
  },
  0xb0: {
    0x00: 'SysMalloc',
    0x07: 'DeliverEvent',
    0x08: 'OpenEvent',
    0x09: 'CloseEvent',
    0x0a: 'WaitEvent',
    0x0b: 'TestEvent',
    0x0c: 'EnableEvent',
    0x0d: 'DisableEvent',
    0x13: 'setjmp',
    0x14: 'longjmp',
    0x17: 'ReturnFromException',
    0x18: 'SetDefaultExitFromException',
    0x19: 'SetCustomExitFromException',
    0x3d: 'std_in_getchar',
    0x3f: 'std_out_putchar',
    0x47: 'AddDrv',
    0x48: 'DelDrv',
    0x56: 'GetC0Table',
    0x57: 'GetB0Table',
    0x5b: 'ChangeClearRCnt'
  },
  0xc0: {
    0x00: 'EnqueueTimerAndVblankIrqs',
    0x01: 'EnqueueSyscallHandler',
    0x02: 'SysEnqIntRP',
    0x03: 'SysDeqIntRP',
    0x08: 'SysInitMemcard',
    0x0a: '_card_info',
    0x0b: '_card_load',
    0x0c: '_card_auto',
    0x0d: '_card_chan',
    0x0e: '_card_write',
    0x0f: '_card_read',
    0x12: 'InitDefInt',
    0x13: 'SetIrqAutoAck',
    0x1c: 'AdjustA0Table'
  }
};

// Track register T1 (function number)
let currentT1 = 0;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Parse the trace line for PC and register info
    const pcMatch = line.match(/^([0-9a-f]{8})/i);
    if (pcMatch) {
      const pc = parseInt(pcMatch[1], 16);
      lastPC = pc;
      
      // Check if this is a BIOS call entry point
      if (pc === 0x000000a0 || pc === 0x000000b0 || pc === 0x000000c0) {
        // Try to extract T1 register value from trace
        const t1Match = line.match(/t1=([0-9a-f]{8})/i);
        if (t1Match) {
          currentT1 = parseInt(t1Match[1], 16);
        }
        
        const callType = pc === 0xa0 ? 'A0' : pc === 0xb0 ? 'B0' : 'C0';
        const funcName = biosFunctions[pc]?.[currentT1] || `Unknown_${currentT1.toString(16)}`;
        const key = `${callType}:${funcName}`;
        
        functionCalls.set(key, (functionCalls.get(key) || 0) + 1);
        
        // Log significant calls
        if (functionCalls.get(key) === 1) {
          console.log(`[${instructionCount}] NEW FUNCTION: ${callType}(${currentT1.toString(16)}) = ${funcName}`);
        }
      }
    }
    
    // Also try to extract T1 from any line with register dump
    const regMatch = line.match(/t1=([0-9a-f]{8})/i);
    if (regMatch) {
      currentT1 = parseInt(regMatch[1], 16);
    }
  },
  style: 'redux',
  includeDisasm: false,
  includeRegisters: true  // Include registers to see T1
});

// Run for 100k instructions to see patterns
const maxInstructions = 100000;

console.log('Running BIOS to analyze syscalls...\n');

try {
  for (let i = 0; i < maxInstructions; i++) {
    sys.stepCpu(1);
    
    // Step scheduler 
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
    
    // Report every 25k
    if ((i + 1) % 25000 === 0) {
      console.log(`\n[${i + 1}] Syscall frequency at instruction ${instructionCount}:`);
      
      // Sort by frequency
      const sorted = Array.from(functionCalls.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
      
      sorted.forEach(([func, count]) => {
        console.log(`  ${func}: ${count} calls`);
      });
    }
  }
} catch (error) {
  console.log(`\n❌ Error at instruction ${instructionCount}: ${error.message}`);
}

// Final report
console.log('\n=== FINAL SYSCALL REPORT ===');
console.log(`Total instructions: ${instructionCount}`);
console.log('\nAll BIOS functions called:');

const finalSorted = Array.from(functionCalls.entries())
  .sort((a, b) => b[1] - a[1]);

finalSorted.forEach(([func, count]) => {
  console.log(`  ${func}: ${count} calls`);
});

// Analyze the pattern
const topCall = finalSorted[0];
if (topCall && topCall[1] > 1000) {
  console.log(`\n⚠️ WARNING: Function "${topCall[0]}" called ${topCall[1]} times!`);
  console.log('This suggests the BIOS is waiting for something, likely:');
  console.log('  - Hardware event (interrupt, DMA completion, etc.)');
  console.log('  - Device response (CD-ROM, memory card, controller)');
  console.log('  - Timer or VBLANK event');
}
