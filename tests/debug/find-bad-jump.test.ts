import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Find bad jump', () => {
  test('trace execution to find jump to 0x64657472', () => {
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
    
    let instructionCount = 0;
    const targetAddr = 0x64657472;
    let lastPC = 0;
    let foundBadJump = false;
    
    console.log('\n=== Finding bad jump ===\n');
    
    // Simple check during execution
    try {
      for (let i = 0; i < 1000000; i++) {
        lastPC = sys.cpu.s.pc;
        instructionCount++;
        
        // Check if PC or nextPC is the bad address
        if (sys.cpu.s.pc === targetAddr || sys.cpu.s.nextPc === targetAddr) {
          console.log(`\n!!! Found bad address at instruction ${instructionCount} !!!`);
          console.log(`PC: 0x${sys.cpu.s.pc.toString(16)}`);
          console.log(`NextPC: 0x${sys.cpu.s.nextPc.toString(16)}`);
          console.log(`Last PC: 0x${lastPC.toString(16)}`);
          
          // Read instruction at last PC
          try {
            const lastInstr = sys.memory.read32(lastPC);
            console.log(`Last instruction: 0x${lastInstr.toString(16)}`);
            
            // Decode it
            const opcode = (lastInstr >>> 26) & 0x3F;
            const rs = (lastInstr >>> 21) & 0x1F;
            const funct = lastInstr & 0x3F;
            
            if (opcode === 0) {
              if (funct === 0x08) {
                console.log(`Decoded: jr $${rs}`);
                console.log(`Register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
              } else if (funct === 0x09) {
                console.log(`Decoded: jalr $${rs}`);
                console.log(`Register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
              }
            } else if (opcode === 2) {
              const target = ((lastPC & 0xF0000000) | ((lastInstr & 0x03FFFFFF) << 2)) >>> 0;
              console.log(`Decoded: j 0x${target.toString(16)}`);
            } else if (opcode === 3) {
              const target = ((lastPC & 0xF0000000) | ((lastInstr & 0x03FFFFFF) << 2)) >>> 0;
              console.log(`Decoded: jal 0x${target.toString(16)}`);
            }
          } catch (e) {
            console.log('Could not read last instruction');
          }
          
          foundBadJump = true;
          break;
        }
        
        // Also check reads/writes for the bad address
        const originalRead32 = sys.memory.read32.bind(sys.memory);
        const originalWrite32 = sys.memory.write32.bind(sys.memory);
        
        sys.memory.read32 = function(addr: number): number {
          const value = originalRead32(addr);
          if (value === targetAddr) {
            console.log(`[${instructionCount}] Read bad value 0x${targetAddr.toString(16)} from address 0x${addr.toString(16)}`);
            console.log(`Current PC: 0x${sys.cpu.s.pc.toString(16)}`);
          }
          return value;
        };
        
        sys.memory.write32 = function(addr: number, value: number): void {
          if (value === targetAddr) {
            console.log(`[${instructionCount}] Write bad value 0x${targetAddr.toString(16)} to address 0x${addr.toString(16)}`);
            console.log(`Current PC: 0x${sys.cpu.s.pc.toString(16)}`);
          }
          originalWrite32(addr, value);
        };
        
        sys.cpu.step();
        
        // Restore hooks
        sys.memory.read32 = originalRead32;
        sys.memory.write32 = originalWrite32;
        
        if (instructionCount % 100000 === 0) {
          console.log(`Progress: ${instructionCount} instructions...`);
        }
      }
    } catch (e: any) {
      console.log(`\nExecution stopped at ${instructionCount}: ${e.message}`);
      
      if (e.message.includes('Unmapped address')) {
        const addrMatch = e.message.match(/\d+/);
        if (addrMatch) {
          const addr = parseInt(addrMatch[0]);
          if (addr === targetAddr) {
            console.log('This is the bad address we were looking for!');
            console.log(`PC at error: 0x${sys.cpu.s.pc.toString(16)}`);
            console.log(`NextPC at error: 0x${sys.cpu.s.nextPc.toString(16)}`);
            foundBadJump = true;
            
            // Try to read the current instruction
            try {
              const currentInstr = sys.memory.read32(sys.cpu.s.pc);
              console.log(`Current instruction: 0x${currentInstr.toString(16)}`);
              
              const opcode = (currentInstr >>> 26) & 0x3F;
              const rs = (currentInstr >>> 21) & 0x1F;
              const funct = currentInstr & 0x3F;
              
              if (opcode === 0 && (funct === 0x08 || funct === 0x09)) {
                console.log(`This is a register jump: ${funct === 0x08 ? 'jr' : 'jalr'} $${rs}`);
                console.log(`Register $${rs} = 0x${sys.cpu.s.reg[rs].toString(16)}`);
              }
            } catch (readErr) {
              console.log('Could not read instruction at error PC');
            }
          }
        }
      }
    }
    
    console.log(`\nTotal instructions: ${instructionCount}`);
    console.log(`Found bad jump: ${foundBadJump}`);
    
    expect(instructionCount).toBeGreaterThan(100000);
  });
});
