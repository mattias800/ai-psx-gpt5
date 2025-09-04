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

console.log('Examining early BIOS loop region (0xbfc00250-0xbfc00274)...\n');

// Read the instructions in the loop region
const loopStart = 0xbfc00250;
const loopEnd = 0xbfc00274;

// Map BIOS addresses to physical offsets
const biosBase = 0xbfc00000;
const biosOffset = (addr) => addr - biosBase;

console.log('Instructions in loop:');
for (let addr = loopStart; addr <= loopEnd; addr += 4) {
  const offset = biosOffset(addr);
  const instr = (bios[offset] | (bios[offset+1] << 8) | (bios[offset+2] << 16) | (bios[offset+3] << 24)) >>> 0;
  console.log(`  0x${addr.toString(16)}: 0x${instr.toString(16).padStart(8, '0')}`);
}

// Now let's trace execution with register values
console.log('\nTracing first 200 instructions with register monitoring...\n');

let lastRegs = null;
let instrCount = 0;

sys.enableCpuTrace({
  output: (line) => {
    instrCount++;
    
    // Get CPU state
    const cpuAny = sys.cpu;
    if (cpuAny && cpuAny.regs) {
      const regs = cpuAny.regs;
      
      // Check for the loop address range
      if (line.includes('bfc00250') || line.includes('bfc00254') || 
          line.includes('bfc00258') || line.includes('bfc0025c') ||
          line.includes('bfc00260') || line.includes('bfc00264') ||
          line.includes('bfc00268') || line.includes('bfc0026c') ||
          line.includes('bfc00270') || line.includes('bfc00274')) {
        
        console.log(`[${instrCount}] ${line}`);
        
        // Show key registers
        console.log(`      t0=0x${(regs[8] >>> 0).toString(16).padStart(8, '0')} ` +
                   `t1=0x${(regs[9] >>> 0).toString(16).padStart(8, '0')} ` +
                   `t2=0x${(regs[10] >>> 0).toString(16).padStart(8, '0')} ` +
                   `t3=0x${(regs[11] >>> 0).toString(16).padStart(8, '0')}`);
        console.log(`      s0=0x${(regs[16] >>> 0).toString(16).padStart(8, '0')} ` +
                   `s1=0x${(regs[17] >>> 0).toString(16).padStart(8, '0')} ` +
                   `sp=0x${(regs[29] >>> 0).toString(16).padStart(8, '0')} ` +
                   `ra=0x${(regs[31] >>> 0).toString(16).padStart(8, '0')}`);
      }
    }
    
    if (instrCount >= 200) {
      console.log('\nStopping after 200 instructions');
      process.exit(0);
    }
  },
  style: 'redux',
  includeDisasm: true
});

// Run
for (let i = 0; i < 1000; i++) {
  sys.stepCpu(1);
  
  // Also step scheduler periodically
  if (i % 10 === 0) {
    sys.stepCycles(10);
  }
}
