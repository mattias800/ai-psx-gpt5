import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

// MIPS instruction disassembly
function disassembleMIPS(instr, pc) {
  const op = (instr >>> 26) & 0x3f;
  const rs = (instr >>> 21) & 0x1f;
  const rt = (instr >>> 16) & 0x1f;
  const rd = (instr >>> 11) & 0x1f;
  const shamt = (instr >>> 6) & 0x1f;
  const funct = instr & 0x3f;
  const imm = instr & 0xffff;
  const simm = (imm << 16) >> 16; // sign extend
  const addr = (instr & 0x03ffffff) << 2;
  const target = (pc & 0xf0000000) | addr;
  
  const regName = (r) => {
    const names = ['r0','at','v0','v1','a0','a1','a2','a3',
                   't0','t1','t2','t3','t4','t5','t6','t7',
                   's0','s1','s2','s3','s4','s5','s6','s7',
                   't8','t9','k0','k1','gp','sp','fp','ra'];
    return '$' + names[r];
  };
  
  const hex = (v, d = 8) => '0x' + v.toString(16).padStart(d, '0');
  
  // Special opcodes (op === 0)
  if (op === 0) {
    switch(funct) {
      case 0x00: return shamt === 0 && rt === 0 && rd === 0 ? 'nop' : `sll    ${regName(rd)}, ${regName(rt)}, ${shamt}`;
      case 0x02: return `srl    ${regName(rd)}, ${regName(rt)}, ${shamt}`;
      case 0x03: return `sra    ${regName(rd)}, ${regName(rt)}, ${shamt}`;
      case 0x08: return `jr     ${regName(rs)}`;
      case 0x09: return `jalr   ${regName(rd)}, ${regName(rs)}`;
      case 0x20: return `add    ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x21: return `addu   ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x24: return `and    ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x25: return rs === 0 ? `move   ${regName(rd)}, ${regName(rt)}` : `or     ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x26: return `xor    ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x27: return `nor    ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x2a: return `slt    ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      case 0x2b: return `sltu   ${regName(rd)}, ${regName(rs)}, ${regName(rt)}`;
      default: return `SPECIAL:${hex(funct, 2)}`;
    }
  }
  
  switch(op) {
    case 0x02: return `j      ${hex(target)}`;
    case 0x03: return `jal    ${hex(target)}`;
    case 0x04: return `beq    ${regName(rs)}, ${regName(rt)}, ${hex(pc + 4 + (simm << 2))}`;
    case 0x05: return `bne    ${regName(rs)}, ${regName(rt)}, ${hex(pc + 4 + (simm << 2))}`;
    case 0x06: return `blez   ${regName(rs)}, ${hex(pc + 4 + (simm << 2))}`;
    case 0x07: return `bgtz   ${regName(rs)}, ${hex(pc + 4 + (simm << 2))}`;
    case 0x08: return `addi   ${regName(rt)}, ${regName(rs)}, ${hex(simm, 4)}`;
    case 0x09: return rs === 0 ? `li     ${regName(rt)}, ${hex(simm, 4)}` : `addiu  ${regName(rt)}, ${regName(rs)}, ${hex(simm, 4)}`;
    case 0x0c: return `andi   ${regName(rt)}, ${regName(rs)}, ${hex(imm, 4)}`;
    case 0x0d: return `ori    ${regName(rt)}, ${regName(rs)}, ${hex(imm, 4)}`;
    case 0x0e: return `xori   ${regName(rt)}, ${regName(rs)}, ${hex(imm, 4)}`;
    case 0x0f: return `lui    ${regName(rt)}, ${hex(imm, 4)}`;
    case 0x10: // COP0
      const cop0Op = (instr >>> 21) & 0x1f;
      if (cop0Op === 0x00) return `mfc0   ${regName(rt)}, $${rd}`;
      if (cop0Op === 0x04) return `mtc0   ${regName(rt)}, $${rd}`;
      return `COP0:${hex(cop0Op, 2)}`;
    case 0x20: return `lb     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x21: return `lh     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x23: return `lw     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x24: return `lbu    ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x25: return `lhu    ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x28: return `sb     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x29: return `sh     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    case 0x2b: return `sw     ${regName(rt)}, ${hex(simm, 4)}(${regName(rs)})`;
    default: return `OP:${hex(op, 2)}`;
  }
}

// Load the BIOS
const biosBytes = fs.readFileSync('./scph1001.bin');
const sys = new PSXSystem();

// Track memory accesses for display
const memAccesses = new Map();

// Hook memory accesses
const origWrite32 = sys.as.write32.bind(sys.as);
sys.as.write32 = function(addr, val) {
  memAccesses.set(addr >>> 0, val >>> 0);
  return origWrite32(addr, val);
};

sys.loadBIOS(biosBytes);

// Trace configuration
const MAX_INSTRUCTIONS = 5000;
let instrCount = 0;
const trace = [];

// Enable CPU tracing
sys.cpu.setTracer((pc, instr, state) => {
  if (instrCount >= MAX_INSTRUCTIONS) return;
  
  const regNames = ['r0','at','v0','v1','a0','a1','a2','a3',
                     't0','t1','t2','t3','t4','t5','t6','t7',
                     's0','s1','s2','s3','s4','s5','s6','s7',
                     't8','t9','k0','k1','gp','sp','fp','ra'];
  
  // Format like pcsx-redux
  const pcHex = pc.toString(16).padStart(8, '0');
  const instrHex = instr.toString(16).padStart(8, '0');
  const disasm = disassembleMIPS(instr, pc);
  
  // Add register values for key operations
  let regInfo = '';
  const op = (instr >>> 26) & 0x3f;
  const rs = (instr >>> 21) & 0x1f;
  const rt = (instr >>> 16) & 0x1f;
  const rd = (instr >>> 11) & 0x1f;
  
  // Build register state string for relevant registers
  const getRegInfo = (r) => {
    const val = state.regs[r] >>> 0;
    return `$${regNames[r]}(${val.toString(16).padStart(8, '0')})`;
  };
  
  // Add memory access info for loads/stores
  let memInfo = '';
  if (op === 0x2b || op === 0x29 || op === 0x28) { // sw, sh, sb
    const addr = (state.regs[rs] + ((instr & 0xffff) << 16 >> 16)) >>> 0;
    const oldVal = memAccesses.get(addr);
    memInfo = `([${addr.toString(16).padStart(8, '0')}] = ${(oldVal || 0).toString(16).padStart(8, '0')})`;
  }
  
  const line = `${pcHex} ${instrHex}: ${disasm.padEnd(30)} ${memInfo}`;
  trace.push(line);
  console.log(line);
  
  instrCount++;
  
  // Stop if we hit a problem address (but not exception vectors - BIOS uses them)
  if (pc < 0x1000) {
    console.log(`\n*** Hit low address 0x${pc.toString(16)} - stopping trace ***`);
    instrCount = MAX_INSTRUCTIONS;
  }
});

// Run the BIOS
console.log('Starting BIOS trace (first 500 instructions)...');
console.log('================================================');

for (let i = 0; i < MAX_INSTRUCTIONS && instrCount < MAX_INSTRUCTIONS; i++) {
  sys.stepCpu(1);
  sys.stepCycles(1);
}

// Save trace to file
fs.writeFileSync('our_bios_trace.log', trace.join('\n'));
console.log(`\nTrace saved to our_bios_trace.log (${instrCount} instructions)`);

// Compare with pcsx-redux trace
const reduxLines = fs.readFileSync('pcsx-redux-bios.log', 'utf-8').split('\n');
const reduxTrace = reduxLines
  .filter(line => line.match(/^[0-9a-f]{8} [0-9a-f]{8}:/))
  .slice(0, instrCount);

console.log('\n=== Comparison with pcsx-redux ===');
let firstDiff = -1;
for (let i = 0; i < Math.min(trace.length, reduxTrace.length); i++) {
  const ourPC = trace[i].substring(0, 8);
  const reduxPC = reduxTrace[i].substring(0, 8);
  
  if (ourPC !== reduxPC) {
    console.log(`First PC divergence at instruction ${i}:`);
    console.log(`  Redux: ${reduxTrace[i].substring(0, 50)}`);
    console.log(`  Ours:  ${trace[i].substring(0, 50)}`);
    firstDiff = i;
    break;
  }
}

if (firstDiff === -1) {
  console.log(`Traces match for all ${Math.min(trace.length, reduxTrace.length)} instructions!`);
} else {
  console.log(`\nShowing context around divergence (${firstDiff}):`);
  for (let i = Math.max(0, firstDiff - 3); i < Math.min(trace.length, firstDiff + 3); i++) {
    const marker = i === firstDiff ? ' <-- DIVERGES HERE' : '';
    console.log(`[${i}] Ours:  ${trace[i].substring(0, 50)}${marker}`);
    if (i < reduxTrace.length) {
      console.log(`[${i}] Redux: ${reduxTrace[i].substring(0, 50)}`);
    }
  }
}
