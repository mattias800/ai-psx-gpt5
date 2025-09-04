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

// Read what's at the loop location in BIOS
console.log('BIOS code at loop location (0xbfc00250-0xbfc00274):');
for (let addr = 0xbfc00250; addr <= 0xbfc00274; addr += 4) {
  const instr = sys.as.read32(addr);
  console.log(`  0x${addr.toString(16)}: 0x${instr.toString(16).padStart(8, '0')}`);
}

console.log('\nRunning with detailed trace around the loop area...\n');

let instructionCount = 0;
let loopDetected = false;

// Enable detailed tracing with disassembly
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Only show instructions around the problematic area
    if (instructionCount >= 120 && instructionCount <= 150) {
      console.log(`[${instructionCount}] ${line}`);
    }
    
    // Check for the loop
    if (line.includes('bfc00250') && instructionCount > 130) {
      if (!loopDetected) {
        loopDetected = true;
        console.log('\n=== Loop detected! ===');
        console.log('The BIOS is waiting for something...');
        
        // Check CPU state
        const cpuAny = sys.cpu;
        if (cpuAny) {
          const regs = cpuAny.regs || cpuAny._state?.regs;
          console.log('\nRegister values:');
          const regNames = ['zero','at','v0','v1','a0','a1','a2','a3',
                          't0','t1','t2','t3','t4','t5','t6','t7',
                          's0','s1','s2','s3','s4','s5','s6','s7',
                          't8','t9','k0','k1','gp','sp','fp','ra'];
          for (let i = 0; i < 32; i++) {
            if (regs[i] !== 0) {
              console.log(`  $${regNames[i].padEnd(4)} = 0x${(regs[i] >>> 0).toString(16).padStart(8, '0')}`);
            }
          }
        }
        
        // Check what memory locations might be involved
        console.log('\nChecking potential wait conditions...');
        
        // Common PS1 hardware registers that BIOS might wait on
        const checkAddresses = [
          { addr: 0x1f801070, name: 'I_STAT (interrupt status)' },
          { addr: 0x1f801074, name: 'I_MASK (interrupt mask)' },
          { addr: 0x1f801814, name: 'GPU_STAT' },
          { addr: 0x1f801044, name: 'JOY_STAT' },
          { addr: 0x1f801100, name: 'Timer0 counter' },
          { addr: 0x1f801110, name: 'Timer1 counter' },
          { addr: 0x1f801120, name: 'Timer2 counter' },
          { addr: 0xbfc00274, name: 'Next instruction after loop' },
        ];
        
        for (const check of checkAddresses) {
          try {
            const val = sys.as.read32(check.addr);
            console.log(`  ${check.name} @ 0x${check.addr.toString(16)}: 0x${val.toString(16).padStart(8, '0')}`);
          } catch (e) {
            console.log(`  ${check.name} @ 0x${check.addr.toString(16)}: <unmapped>`);
          }
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: true
});

// Run until we hit the loop
try {
  for (let i = 0; i < 200; i++) {
    sys.stepCpu(1);
    if (loopDetected) break;
  }
} catch (error) {
  console.log(`Error at instruction ${instructionCount}: ${error.message}`);
}

if (!loopDetected) {
  console.log('Loop not detected in first 200 instructions.');
}
