import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const biosBuffer = Buffer.from(bios);

// Helper to read 32-bit word from BIOS
function readBiosWord(offset) {
  if (offset < 0 || offset + 3 >= biosBuffer.length) return 0;
  return biosBuffer.readUInt32LE(offset);
}

// Simple MIPS disassembler for key instructions
function disassembleMips(instr, pc) {
  const op = (instr >>> 26) & 0x3F;
  const rs = (instr >>> 21) & 0x1F;
  const rt = (instr >>> 16) & 0x1F;
  const rd = (instr >>> 11) & 0x1F;
  const imm = instr & 0xFFFF;
  const sImm = (imm << 16) >> 16; // Sign extend
  const target = instr & 0x3FFFFFF;
  
  const regs = ['$0','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7',
                's0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
  
  if (instr === 0) return 'nop';
  
  switch(op) {
    case 0x00: // R-type
      const funct = instr & 0x3F;
      switch(funct) {
        case 0x08: return `jr ${regs[rs]}`;
        case 0x09: return `jalr ${regs[rs]}`;
        case 0x20: return `add ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        case 0x21: return `addu ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        case 0x24: return `and ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        case 0x25: return `or ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        case 0x2a: return `slt ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        case 0x2b: return `sltu ${regs[rd]}, ${regs[rs]}, ${regs[rt]}`;
        default: return `R-type: ${funct.toString(16)}`;
      }
    case 0x02: return `j 0x${((pc & 0xF0000000) | (target << 2)).toString(16)}`;
    case 0x03: return `jal 0x${((pc & 0xF0000000) | (target << 2)).toString(16)}`;
    case 0x04: return `beq ${regs[rs]}, ${regs[rt]}, ${sImm} (0x${(pc + 4 + sImm * 4).toString(16)})`;
    case 0x05: return `bne ${regs[rs]}, ${regs[rt]}, ${sImm} (0x${(pc + 4 + sImm * 4).toString(16)})`;
    case 0x08: return `addi ${regs[rt]}, ${regs[rs]}, ${sImm}`;
    case 0x09: return `addiu ${regs[rt]}, ${regs[rs]}, ${sImm}`;
    case 0x0A: return `slti ${regs[rt]}, ${regs[rs]}, ${sImm}`;
    case 0x0B: return `sltiu ${regs[rt]}, ${regs[rs]}, ${sImm}`;
    case 0x0C: return `andi ${regs[rt]}, ${regs[rs]}, 0x${imm.toString(16)}`;
    case 0x0D: return `ori ${regs[rt]}, ${regs[rs]}, 0x${imm.toString(16)}`;
    case 0x0F: return `lui ${regs[rt]}, 0x${imm.toString(16)}`;
    case 0x20: return `lb ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x21: return `lh ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x23: return `lw ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x24: return `lbu ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x25: return `lhu ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x28: return `sb ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x29: return `sh ${regs[rt]}, ${sImm}(${regs[rs]})`;
    case 0x2B: return `sw ${regs[rt]}, ${sImm}(${regs[rs]})`;
    default: return `Unknown op: 0x${op.toString(16)}`;
  }
}

console.log('Analyzing blocking loop code...\n');
console.log('='.repeat(60));

// Analyze the loops we found
const loopsToAnalyze = [
  { start: 0xbfc014dc, end: 0xbfc01510, name: 'BIOS syscall handler loop' },
  { start: 0xbfc0d880, end: 0xbfc0d888, name: 'Unknown BIOS loop' },
];

loopsToAnalyze.forEach(loop => {
  console.log(`\n📍 ${loop.name}`);
  console.log(`Address range: 0x${loop.start.toString(16)} - 0x${loop.end.toString(16)}`);
  console.log('Disassembly:');
  
  for (let addr = loop.start; addr <= loop.end; addr += 4) {
    const biosOffset = addr - 0xbfc00000;
    const instr = readBiosWord(biosOffset);
    const disasm = disassembleMips(instr, addr);
    console.log(`  0x${addr.toString(16)}: ${instr.toString(16).padStart(8, '0')} | ${disasm}`);
  }
});

// Now run the emulator and track what values are being checked in these loops
console.log('\n' + '='.repeat(60));
console.log('Running emulator to track loop behavior...\n');

const sys = new PSXSystem();
sys.loadBIOS(bios);

let instructionCount = 0;
let inTargetLoop = false;
const memoryReads = new Map();
const registerValues = new Map();

// Skip to after init
for (let i = 0; i < 100000; i++) {
  sys.stepCpu(1);
  if (i % 50 === 0) sys.stepCycles(50);
}

console.log('Monitoring loop execution...\n');

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    const pcMatch = line.match(/^([0-9a-f]{8})/i);
    if (pcMatch) {
      const pc = parseInt(pcMatch[1], 16);
      
      // Check if we're in one of our target loops
      const isInLoop = loopsToAnalyze.some(l => pc >= l.start && pc <= l.end);
      
      if (isInLoop && !inTargetLoop) {
        inTargetLoop = true;
        console.log(`\n🔄 Entered loop at PC=0x${pc.toString(16)}`);
      } else if (!isInLoop && inTargetLoop) {
        inTargetLoop = false;
        console.log(`   Exited loop`);
      }
      
      if (isInLoop && instructionCount < 200) {
        // Extract register values
        const v0Match = line.match(/v0=([0-9a-f]{8})/i);
        const a0Match = line.match(/a0=([0-9a-f]{8})/i);
        const t0Match = line.match(/t0=([0-9a-f]{8})/i);
        
        if (v0Match || a0Match || t0Match) {
          console.log(`   [${instructionCount}] PC=0x${pc.toString(16)}`);
          if (v0Match) console.log(`      v0=0x${v0Match[1]}`);
          if (a0Match) console.log(`      a0=0x${a0Match[1]}`);  
          if (t0Match) console.log(`      t0=0x${t0Match[1]}`);
        }
      }
    }
  },
  style: 'redux',
  includeDisasm: false,
  includeRegisters: true
});

// Run for a bit to see the loops
try {
  for (let i = 0; i < 10000; i++) {
    sys.stepCpu(1);
    if (i % 50 === 0) sys.stepCycles(50);
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log('\n' + '='.repeat(60));
console.log('ANALYSIS SUMMARY:');
console.log('='.repeat(60));

console.log(`
Based on the code analysis, the BIOS appears to be:

1. Making repeated B0:00 (SysMalloc) system calls
2. Executing loops at 0xbfc014dc-0xbfc01510 (likely waiting for memory allocation)
3. The loop at 0xbfc0d880-0xbfc0d888 may be checking allocation results

The BIOS is NOT stuck in a hardware polling loop, but rather appears to be 
stuck in a software state machine, possibly:
- Waiting for memory initialization to complete
- Trying to allocate memory that fails
- Waiting for a subsystem that depends on successful memory allocation

To fix this, we likely need to:
1. Ensure SysMalloc returns valid memory addresses
2. Check if there's a memory size or configuration issue
3. Verify the heap is properly initialized
`);
