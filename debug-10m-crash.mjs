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

let instructionCount = 0;
const targetInstructions = 138000; // Just before the crash at ~138,219
let traceEnabled = false;

// Enable tracing only near the crash point
sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    // Start tracing near the crash
    if (instructionCount >= targetInstructions) {
      traceEnabled = true;
    }
    
    if (traceEnabled) {
      console.log(`[${instructionCount}] ${line}`);
      
      // Check for the problematic address
      if (line.includes('7e006200')) {
        console.log('\n!!! Found access to unmapped address 0x7e006200 !!!');
        
        // Dump CPU state
        const cpuAny = sys.cpu;
        if (cpuAny) {
          const regs = cpuAny.regs || cpuAny._state?.regs;
          if (regs) {
            console.log('\nRegister dump:');
            const regNames = ['zero','at','v0','v1','a0','a1','a2','a3',
                            't0','t1','t2','t3','t4','t5','t6','t7',
                            's0','s1','s2','s3','s4','s5','s6','s7',
                            't8','t9','k0','k1','gp','sp','fp','ra'];
            
            // Show all non-zero registers
            for (let i = 0; i < 32; i++) {
              if (regs[i] !== 0) {
                const val = (regs[i] >>> 0).toString(16).padStart(8, '0');
                console.log(`  $${regNames[i].padEnd(4)} = 0x${val}`);
                
                // Special handling for t0 and t1 (used in BIOS dispatchers)
                if (i === 8) { // t0
                  console.log(`    -> t0 points to: 0x${val}`);
                  // Check if this looks like it could be a table base + offset
                  if (val.startsWith('7e')) {
                    console.log(`    -> ERROR: t0 contains invalid address in 0x7e range!`);
                    const base = 0x200; // A0 table base
                    const offset = (parseInt(val, 16) - base) >>> 2;
                    console.log(`    -> If this was meant for A0 table, index would be: 0x${offset.toString(16)}`);
                  }
                }
                if (i === 9) { // t1
                  console.log(`    -> t1 (function index) = 0x${val}`);
                  // Calculate what address this would access in A0 table
                  const tableAddr = 0x200 + (parseInt(val, 16) << 2);
                  console.log(`    -> A0 table lookup address: 0x${tableAddr.toString(16).padStart(8, '0')}`);
                }
              }
            }
            
            // Check memory around the A0 table
            console.log('\nA0 function table check:');
            for (let idx = 0xd0; idx <= 0xe0; idx += 4) {
              const addr = 0x200 + (idx << 2);
              try {
                const val = sys.ram.read32(addr);
                if (val !== 0) {
                  console.log(`  A0:${idx.toString(16).padStart(2, '0')} @ 0x${addr.toString(16).padStart(4, '0')} = 0x${val.toString(16).padStart(8, '0')}`);
                }
              } catch (e) {
                console.log(`  A0:${idx.toString(16).padStart(2, '0')} @ 0x${addr.toString(16).padStart(4, '0')} = <error>`);
              }
            }
          }
        }
        
        process.exit(0);
      }
    }
  },
  style: 'redux',
  includeDisasm: true
});

console.log('Running emulator to debug crash at ~10M instructions...\n');

try {
  // Run up to the crash point
  for (let i = 0; i < 10000100; i++) {
    sys.stepCpu(1);
    
    // Progress report
    if (i > 0 && i % 1000000 === 0) {
      console.log(`Progress: ${i} instructions...`);
    }
  }
} catch (error) {
  console.log(`\nCrashed at instruction ${instructionCount}: ${error.message}`);
  
  // Additional diagnostics
  if (error.message.includes('7e006200')) {
    console.log('\nThe crash is at the expected unmapped address 0x7e006200');
    console.log('This appears to be a corrupted function pointer in the A0 table.');
  }
}
