import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Monitoring BIOS wait loops and hardware access...\n');

let instructionCount = 0;
const loopCounts = new Map();
const ioAccess = new Map();
let prevPC = 0;

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Track potential wait loops (backwards jumps)
      if (pc < prevPC && prevPC - pc < 0x100) {
        const loopKey = `${pc.toString(16)}-${prevPC.toString(16)}`;
        loopCounts.set(loopKey, (loopCounts.get(loopKey) || 0) + 1);
      }
      
      // Track I/O port access (0x1F80xxxx range)
      if ((pc & 0xFFF00000) === 0x1F800000) {
        const port = pc & 0xFFFF;
        ioAccess.set(port, (ioAccess.get(port) || 0) + 1);
      }
      
      prevPC = pc;
    }
  },
  style: 'redux',
  includeDisasm: false
});

// Also monitor memory reads to I/O ports
const origRead32 = sys.as.read32.bind(sys.as);
sys.as.read32 = function(addr) {
  if ((addr & 0xFFF00000) === 0x1F800000) {
    const port = addr & 0xFFFF;
    const portName = getPortName(port);
    const count = ioAccess.get(port) || 0;
    ioAccess.set(port, count + 1);
    
    if ((count + 1) % 1000 === 0) {
      console.log(`[${instructionCount}] Reading I/O port 0x${addr.toString(16)} (${portName}) - ${count + 1} times`);
    }
  }
  return origRead32(addr);
};

function getPortName(port) {
  // Common PSX I/O ports
  if (port >= 0x1040 && port <= 0x104F) return 'Controller/Memory Card';
  if (port >= 0x1070 && port <= 0x1077) return 'IRQ Control';
  if (port >= 0x1100 && port <= 0x112F) return 'Timer';
  if (port >= 0x1800 && port <= 0x1803) return 'CD-ROM';
  if (port >= 0x1810 && port <= 0x1817) return 'GPU';
  if (port >= 0x1820 && port <= 0x1827) return 'MDEC';
  if (port >= 0x1C00 && port <= 0x1FFF) return 'SPU';
  if (port >= 0x1080 && port <= 0x10FF) return 'DMA';
  return 'Unknown';
}

console.log('Running for 200k instructions...');

try {
  for (let i = 0; i < 200000; i++) {
    sys.stepCpu(1);
    
    // Step scheduler
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
    
    // Report every 50k
    if ((i + 1) % 50000 === 0) {
      console.log(`\n[${i + 1}] Status at instruction ${instructionCount}:`);
      
      // Find most common loops
      const topLoops = Array.from(loopCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      
      if (topLoops.length > 0) {
        console.log('Top wait loops:');
        topLoops.forEach(([loop, count]) => {
          if (count > 100) {
            console.log(`  ${loop}: ${count} iterations`);
          }
        });
      }
      
      // Find most accessed I/O ports
      const topIO = Array.from(ioAccess.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      
      if (topIO.length > 0) {
        console.log('Most accessed I/O ports:');
        topIO.forEach(([port, count]) => {
          if (count > 10) {
            console.log(`  0x1F80${port.toString(16).padStart(4, '0')} (${getPortName(port)}): ${count} accesses`);
          }
        });
      }
    }
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log('\n=== FINAL ANALYSIS ===');
console.log(`Total instructions: ${instructionCount}`);

// Show final statistics
const finalLoops = Array.from(loopCounts.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

console.log('\nMost frequent wait loops (likely blocking points):');
finalLoops.forEach(([loop, count]) => {
  if (count > 500) {
    console.log(`  ${loop}: ${count} iterations`);
    // Try to identify what they're waiting for
    const [start, end] = loop.split('-');
    const startAddr = parseInt(start, 16);
    if (startAddr >= 0xbfc00400 && startAddr <= 0xbfc00500) {
      console.log('    ^ Likely waiting for interrupt/timer');
    } else if (startAddr >= 0x2000 && startAddr <= 0x4000) {
      console.log('    ^ Kernel wait loop');
    }
  }
});
