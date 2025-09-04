import { PSXSystem } from './packages/emulator-core/dist/psx.js';
import fs from 'fs';

const bios = fs.readFileSync('scph1001.bin');
const sys = new PSXSystem();
sys.loadBIOS(bios);

console.log('Diagnosing hardware access patterns to find missing implementations...\n');

let instructionCount = 0;
const ioReads = new Map();
const ioWrites = new Map();
const pendingReads = new Map(); // Track what addresses are polling for values

// Hook memory access to track I/O
const origRead8 = sys.as.read8.bind(sys.as);
const origRead16 = sys.as.read16.bind(sys.as);
const origRead32 = sys.as.read32.bind(sys.as);
const origWrite32 = sys.as.write32.bind(sys.as);

// Track reads
sys.as.read8 = function(addr) {
  trackIORead(addr, 8);
  return origRead8(addr);
};

sys.as.read16 = function(addr) {
  trackIORead(addr, 16);
  return origRead16(addr);
};

sys.as.read32 = function(addr) {
  trackIORead(addr, 32);
  return origRead32(addr);
};

// Track writes
sys.as.write32 = function(addr, value) {
  if ((addr & 0xFFF00000) === 0x1F800000) {
    const port = addr & 0xFFFF;
    const key = `0x${addr.toString(16)}`;
    if (!ioWrites.has(key)) {
      console.log(`[${instructionCount}] WRITE to ${key} (${getDetailedPortName(addr)}) = 0x${value.toString(16)}`);
    }
    ioWrites.set(key, (ioWrites.get(key) || 0) + 1);
  }
  return origWrite32(addr, value);
};

function trackIORead(addr, bits) {
  if ((addr & 0xFFF00000) === 0x1F800000) {
    const key = `0x${addr.toString(16)}`;
    const count = (ioReads.get(key) || 0) + 1;
    ioReads.set(key, count);
    
    // First time seeing this address?
    if (count === 1) {
      console.log(`[${instructionCount}] FIRST READ from ${key} (${getDetailedPortName(addr)}) [${bits}-bit]`);
    }
    
    // Detect polling (many reads in succession)
    if (count === 100) {
      console.log(`⚠️  [${instructionCount}] POLLING DETECTED: ${key} (${getDetailedPortName(addr)}) - read 100 times`);
      pendingReads.set(key, getDetailedPortName(addr));
    }
    
    if (count === 1000) {
      console.log(`❌ [${instructionCount}] STUCK POLLING: ${key} (${getDetailedPortName(addr)}) - read 1000 times!`);
    }
  }
}

function getDetailedPortName(addr) {
  const port = addr & 0xFFFF;
  
  // Controller and Memory Card ports
  if (port === 0x1040) return 'JOY_DATA - Controller/MemCard Data';
  if (port === 0x1044) return 'JOY_STAT - Controller/MemCard Status';
  if (port === 0x1048) return 'JOY_MODE - Controller/MemCard Mode';
  if (port === 0x104A) return 'JOY_CTRL - Controller/MemCard Control';
  if (port === 0x104E) return 'JOY_BAUD - Controller/MemCard Baudrate';
  
  // Interrupt control
  if (port === 0x1070) return 'I_STAT - Interrupt Status';
  if (port === 0x1074) return 'I_MASK - Interrupt Mask';
  
  // DMA registers
  if (port >= 0x1080 && port <= 0x10FF) {
    const channel = ((port - 0x1080) >> 4) & 0x7;
    const reg = port & 0xF;
    const regNames = ['MADR', 'BCR', 'CHCR', 'Unknown'];
    return `DMA${channel} ${regNames[reg >> 2] || 'Unknown'}`;
  }
  
  // Timers
  if (port >= 0x1100 && port <= 0x110F) return `Timer0 ${['Count', 'Mode', 'Target'][(port & 0xF) >> 2] || ''}`;
  if (port >= 0x1110 && port <= 0x111F) return `Timer1 ${['Count', 'Mode', 'Target'][(port & 0xF) >> 2] || ''}`;
  if (port >= 0x1120 && port <= 0x112F) return `Timer2 ${['Count', 'Mode', 'Target'][(port & 0xF) >> 2] || ''}`;
  
  // CD-ROM
  if (port === 0x1800) return 'CDROM Index/Status';
  if (port === 0x1801) return 'CDROM Response FIFO';
  if (port === 0x1802) return 'CDROM Data FIFO';
  if (port === 0x1803) return 'CDROM IRQ Enable/Flags';
  
  // GPU
  if (port === 0x1810) return 'GPU Read Data/Status';
  if (port === 0x1814) return 'GPU Status/Control';
  
  // SPU
  if (port >= 0x1C00 && port <= 0x1DFF) {
    if (port === 0x1DAA) return 'SPU Control';
    if (port === 0x1DAE) return 'SPU Status';
    return `SPU Register 0x${port.toString(16)}`;
  }
  
  // Cache control
  if (port === 0x0000) return 'Cache Control';
  if (port === 0xFFFE) return 'Cache Control';
  
  return `Unknown I/O 0x${port.toString(16)}`;
}

// Track which BIOS functions are checking hardware
let currentBiosFunction = null;
const biosHardwareChecks = new Map();

sys.enableCpuTrace({
  output: (line) => {
    instructionCount++;
    
    const match = line.match(/^([0-9a-f]{8})/i);
    if (match) {
      const pc = parseInt(match[1], 16);
      
      // Track BIOS function calls
      if (pc === 0x000000a0 || pc === 0x000000b0 || pc === 0x000000c0) {
        const t1Match = line.match(/t1=([0-9a-f]{8})/i);
        if (t1Match) {
          const funcNum = parseInt(t1Match[1], 16);
          currentBiosFunction = `${pc === 0xa0 ? 'A0' : pc === 0xb0 ? 'B0' : 'C0'}:${funcNum.toString(16).padStart(2, '0')}`;
        }
      }
      
      // Track known hardware check points in BIOS
      if (pc === 0xbfc00420) console.log(`[${instructionCount}] BIOS: Checking for POST/Diag mode`);
      if (pc === 0xbfc01800) console.log(`[${instructionCount}] BIOS: Initializing controllers`);
      if (pc === 0xbfc02800) console.log(`[${instructionCount}] BIOS: Initializing memory cards`);
      if (pc === 0xbfc05900) console.log(`[${instructionCount}] BIOS: CD-ROM initialization`);
    }
  },
  style: 'redux',
  includeDisasm: false,
  includeRegisters: true
});

console.log('Running diagnostic analysis for 300k instructions...\n');
console.log('='.repeat(60));

try {
  for (let i = 0; i < 300000; i++) {
    sys.stepCpu(1);
    
    // Step scheduler
    if (i % 50 === 0) {
      sys.stepCycles(50);
    }
    
    // Progress report
    if ((i + 1) % 100000 === 0) {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`Progress: ${i + 1} steps, ${instructionCount} instructions`);
      
      // Show what's being polled most
      const polledPorts = Array.from(ioReads.entries())
        .filter(([_, count]) => count > 100)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      
      if (polledPorts.length > 0) {
        console.log('\n🔄 Most polled I/O ports (potential blocking points):');
        polledPorts.forEach(([addr, count]) => {
          const detail = pendingReads.get(addr) || getDetailedPortName(parseInt(addr.slice(2), 16));
          console.log(`  ${addr}: ${count} reads - ${detail}`);
        });
      }
    }
  }
} catch (error) {
  console.log(`\nError at instruction ${instructionCount}: ${error.message}`);
}

// Final analysis
console.log('\n' + '='.repeat(60));
console.log('HARDWARE DIAGNOSTIC SUMMARY');
console.log('='.repeat(60));

// Categorize I/O access
const categories = {
  controller: [],
  cdrom: [],
  gpu: [],
  spu: [],
  timer: [],
  irq: [],
  dma: [],
  other: []
};

ioReads.forEach((count, addr) => {
  const addrNum = parseInt(addr.slice(2), 16);
  const port = addrNum & 0xFFFF;
  
  if (port >= 0x1040 && port <= 0x104F) categories.controller.push({ addr, count });
  else if (port >= 0x1800 && port <= 0x1803) categories.cdrom.push({ addr, count });
  else if (port >= 0x1810 && port <= 0x1817) categories.gpu.push({ addr, count });
  else if (port >= 0x1C00 && port <= 0x1DFF) categories.spu.push({ addr, count });
  else if (port >= 0x1100 && port <= 0x112F) categories.timer.push({ addr, count });
  else if (port >= 0x1070 && port <= 0x1077) categories.irq.push({ addr, count });
  else if (port >= 0x1080 && port <= 0x10FF) categories.dma.push({ addr, count });
  else categories.other.push({ addr, count });
});

// Show analysis by category
Object.entries(categories).forEach(([cat, accesses]) => {
  if (accesses.length > 0) {
    console.log(`\n📊 ${cat.toUpperCase()} Access:`);
    const sorted = accesses.sort((a, b) => b.count - a.count);
    sorted.slice(0, 3).forEach(({ addr, count }) => {
      const detail = getDetailedPortName(parseInt(addr.slice(2), 16));
      if (count > 50) {
        const status = count > 1000 ? '❌ BLOCKED' : count > 500 ? '⚠️  HIGH' : '📍';
        console.log(`  ${status} ${addr}: ${count} reads - ${detail}`);
      }
    });
  }
});

// Identify likely blocking hardware
console.log('\n' + '='.repeat(60));
console.log('🔍 LIKELY MISSING/INCOMPLETE HARDWARE:');
console.log('='.repeat(60));

const blocked = Array.from(ioReads.entries())
  .filter(([_, count]) => count > 1000)
  .sort((a, b) => b[1] - a[1]);

if (blocked.length > 0) {
  console.log('\nThe BIOS is stuck polling these addresses:');
  blocked.forEach(([addr, count]) => {
    const detail = getDetailedPortName(parseInt(addr.slice(2), 16));
    console.log(`\n❌ ${addr} (${detail})`);
    console.log(`   Polled ${count} times - BIOS is waiting for a response!`);
    
    // Suggest what might be needed
    const port = parseInt(addr.slice(2), 16) & 0xFFFF;
    if (port >= 0x1040 && port <= 0x104F) {
      console.log('   → Need: Controller/Memory card acknowledgment');
    } else if (port >= 0x1800 && port <= 0x1803) {
      console.log('   → Need: CD-ROM status/ready signal');
    } else if (port >= 0x1070 && port <= 0x1077) {
      console.log('   → Need: Interrupt acknowledgment');
    }
  });
} else {
  console.log('\nNo obvious blocking I/O detected.');
  console.log('The BIOS may be waiting for:');
  console.log('  • Timer events');
  console.log('  • Controller input');
  console.log('  • Specific initialization sequence');
}
