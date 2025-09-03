import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Trace unmapped address access', () => {
  test('trace execution leading to unmapped address', () => {
    const sys = new PSXSystem();
    
    // Load BIOS
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, skipping test');
      return;
    }
    const biosBytes = fs.readFileSync(biosPath);
    sys.loadBIOS(biosBytes);
    
    // Set initial PC
    sys.cpu.s.pc = 0xbfc00000;
    sys.cpu.s.nextPc = 0xbfc00004;
    
    let instrCount = 0;
    let currentPC = 0;
    const recentInstructions: string[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Keep last 20 instructions
        recentInstructions.push(`${instrCount}: PC=0x${currentPC.toString(16).padStart(8, '0')} ${parts.slice(1, 3).join(' ')}`);
        if (recentInstructions.length > 20) {
          recentInstructions.shift();
        }
        
        // Log around the problematic instruction
        if (instrCount >= 89140 && instrCount <= 89160) {
          console.log(`${instrCount}: PC=0x${currentPC.toString(16).padStart(8, '0')}`);
          
          // Parse registers
          const regStr = line.split('lo=')[1];
          if (regStr) {
            const raMatch = regStr.match(/ra=([0-9a-f]{8})/);
            const t0Match = regStr.match(/t0=([0-9a-f]{8})/);
            const t1Match = regStr.match(/t1=([0-9a-f]{8})/);
            const t9Match = regStr.match(/t9=([0-9a-f]{8})/);
            
            if (instrCount === 89155 || instrCount === 89156) {
              console.log(`  Registers:`);
              if (raMatch) console.log(`    ra = 0x${raMatch[1]}`);
              if (t0Match) console.log(`    t0 = 0x${t0Match[1]}`);
              if (t1Match) console.log(`    t1 = 0x${t1Match[1]}`);
              if (t9Match) console.log(`    t9 = 0x${t9Match[1]}`);
              
              // Decode instruction
              const instrMatch = line.match(/instr=([0-9a-f]{8})/);
              if (instrMatch) {
                const instr = parseInt(instrMatch[1], 16);
                console.log(`    Instruction: 0x${instr.toString(16).padStart(8, '0')}`);
                
                const op = instr >>> 26;
                if (op === 0) {
                  const funct = instr & 0x3f;
                  const rs = (instr >>> 21) & 0x1f;
                  const rt = (instr >>> 16) & 0x1f;
                  const rd = (instr >>> 11) & 0x1f;
                  
                  if (funct === 0x08) {
                    console.log(`    -> JR r${rs}`);
                  } else if (funct === 0x09) {
                    console.log(`    -> JALR r${rd}, r${rs}`);
                  }
                } else if (op === 0x02) {
                  const target = (instr & 0x3ffffff) << 2;
                  console.log(`    -> J 0x${target.toString(16)}`);
                } else if (op === 0x03) {
                  const target = (instr & 0x3ffffff) << 2;
                  console.log(`    -> JAL 0x${target.toString(16)}`);
                }
              }
            }
          }
        }
      }
    });
    
    // Run until crash
    console.log(`Running until unmapped address access...`);
    console.log('');
    
    try {
      for (let i = 0; i < 90000; i++) {
        sys.cpu.step();
      }
    } catch (e: any) {
      console.log(`\n=== Crash at instruction ${instrCount} ===`);
      console.log(`Error: ${e.message}`);
      console.log(`Last PC: 0x${currentPC.toString(16)}`);
      
      // Parse the unmapped address
      const match = e.message.match(/Unmapped address (\d+)/);
      if (match) {
        const addr = parseInt(match[1]);
        console.log(`Unmapped address: 0x${addr.toString(16)} (${addr})`);
        console.log(`This is: 0x${(addr & 0x0fffffff).toString(16)} in KSEG0/KSEG1`);
      }
      
      console.log(`\n=== Last 20 instructions before crash ===`);
      for (const inst of recentInstructions) {
        console.log(inst);
      }
      
      // Check what's at the dispatcher addresses
      console.log(`\n=== Check dispatcher memory ===`);
      try {
        const a0Dispatch = sys.ram.read32(0x5c4);
        const a0Table99 = sys.ram.read32(0x464);
        console.log(`A0 dispatcher at 0x5c4: 0x${a0Dispatch.toString(16)}`);
        console.log(`A0:99 at 0x464: 0x${a0Table99.toString(16)}`);
      } catch (e) {
        console.log(`Error reading dispatcher memory`);
      }
    }
    
    expect(instrCount).toBeGreaterThan(89000);
  });
});
