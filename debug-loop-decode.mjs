import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';
import path from 'path';

// Load BIOS
const biosPath = path.join(process.cwd(), 'scph1001.bin');
const bios = fs.readFileSync(biosPath);

// Create system
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Analyzing BIOS loop at 0xbfc00250...\n');

// Decode MIPS instructions
function decodeMips(instr) {
  const op = (instr >>> 26) & 0x3f;
  const rs = (instr >>> 21) & 0x1f;
  const rt = (instr >>> 16) & 0x1f;
  const imm = instr & 0xffff;
  const sext_imm = (imm & 0x8000) ? (imm | 0xffff0000) : imm;
  
  const regs = ['zero','at','v0','v1','a0','a1','a2','a3',
                 't0','t1','t2','t3','t4','t5','t6','t7',
                 's0','s1','s2','s3','s4','s5','s6','s7',
                 't8','t9','k0','k1','gp','sp','fp','ra'];
  
  if (op === 0x2b) { // sw
    return `sw      $${regs[rt]}, 0x${imm.toString(16)}($${regs[rs]})`;
  } else if (op === 0x05) { // bne
    const offset = sext_imm << 2;
    return `bne     $${regs[rs]}, $${regs[rt]}, ${offset} (0x${offset.toString(16)})`;
  } else if (op === 0x09) { // addiu
    return `addiu   $${regs[rt]}, $${regs[rs]}, 0x${imm.toString(16)}`;
  }
  return `unknown: 0x${instr.toString(16).padStart(8, '0')}`;
}

// Decode the loop
const loopStart = 0xbfc00250;
const biosBase = 0xbfc00000;

console.log('Loop instructions:');
for (let addr = loopStart; addr <= 0xbfc00274; addr += 4) {
  const offset = addr - biosBase;
  const instr = (bios[offset] | (bios[offset+1] << 8) | (bios[offset+2] << 16) | (bios[offset+3] << 24)) >>> 0;
  console.log(`  0x${addr.toString(16)}: ${decodeMips(instr)}`);
}

console.log('\nThis is a memory clear loop:');
console.log('- sw $zero, 0x00($t2)  through  sw $zero, 0x70($t2) : Stores 0 at t2+0x00 through t2+0x70');
console.log('- bne $t2, $t3, -36    : Branch back if t2 != t3');
console.log('- addiu $t2, $t2, 0x80 : Increment t2 by 128 bytes (delay slot)');
console.log('\nThe loop clears memory in 128-byte chunks until t2 equals t3.');

// Now let's see what t2 and t3 are set to
console.log('\nChecking what sets up t2 and t3 before the loop...\n');

// Look at instructions before the loop
for (let addr = 0xbfc00230; addr < loopStart; addr += 4) {
  const offset = addr - biosBase;
  const instr = (bios[offset] | (bios[offset+1] << 8) | (bios[offset+2] << 16) | (bios[offset+3] << 24)) >>> 0;
  console.log(`  0x${addr.toString(16)}: ${decodeMips(instr)}`);
}

// Now trace to see the actual values
console.log('\nTracing to see register values when entering the loop...\n');

let loopEntered = false;
let instrCount = 0;

sys.enableCpuTrace({
  output: (line) => {
    instrCount++;
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // When we hit the loop start
      if (pc === 0xbfc00250 && !loopEntered) {
        loopEntered = true;
        const cpuAny = sys.cpu;
        const state = cpuAny.getState();
        const regs = state.regs;
        
        console.log(`Entering loop at instruction ${instrCount}:`);
        console.log(`  t2 (base address) = 0x${(regs[10] >>> 0).toString(16).padStart(8, '0')}`);
        console.log(`  t3 (end address)  = 0x${(regs[11] >>> 0).toString(16).padStart(8, '0')}`);
        
        const diff = ((regs[11] >>> 0) - (regs[10] >>> 0)) >>> 0;
        console.log(`  Range to clear: 0x${diff.toString(16)} bytes (${diff} bytes)`);
        
        // Check if this is the problematic case
        if (regs[10] === 0 && regs[11] === 0x200) {
          console.log('\n⚠️  WARNING: This loop will clear addresses 0x000-0x200!');
          console.log('This includes our BIOS call stubs at 0xA0, 0xB0, 0xC0!');
        }
        
        process.exit(0);
      }
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Run up to 1000 instructions
for (let i = 0; i < 1000; i++) {
  sys.stepCpu(1);
}
