import { describe, test, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Track MDEC logo decompression', () => {
  test('monitors MDEC commands during BIOS boot', () => {
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
    const mdecCommands: any[] = [];
    const dmaCommands: any[] = [];
    
    sys.enableCpuTrace({
      output: (line) => {
        instrCount++;
        const parts = line.split(' ');
        currentPC = parseInt(parts[0].split('=')[1], 16);
        
        // Log progress
        if (instrCount % 10000 === 0) {
          console.log(`Progress: ${instrCount} instructions...`);
        }
      }
    });
    
    // Track MDEC access
    sys.enableMemTrace({
      filter: (op, addr) => {
        const p = addr & 0x1fffffff;
        // MDEC registers at 0x1f801820-0x1f801827
        // DMA registers at 0x1f801080-0x1f8010ff
        return (p >= 0x1f801820 && p <= 0x1f801827) || 
               (p >= 0x1f801080 && p <= 0x1f8010ff);
      },
      output: (line) => {
        const parts = line.split(' ');
        const op = parts[0];
        const addr = parseInt(parts[1], 16);
        const val = parseInt(parts[3], 16);
        const p = addr & 0x1fffffff;
        
        // MDEC registers
        if (p >= 0x1f801820 && p <= 0x1f801827) {
          const reg = (p & 7) === 0 ? 'DATA/PARAM' : 'STATUS/CONTROL';
          mdecCommands.push({
            instr: instrCount,
            pc: currentPC.toString(16).padStart(8, '0'),
            op,
            reg,
            val: val.toString(16).padStart(8, '0')
          });
          
          console.log(`MDEC ${op} ${reg}: 0x${val.toString(16).padStart(8, '0')} at instr ${instrCount}`);
          
          // If writing to CONTROL, check what command
          if (op.startsWith('w') && (p & 7) === 4) {
            const cmd = val >>> 29;
            console.log(`  MDEC Command: ${cmd} (${['NOP', 'Decode', 'SetQuant', 'SetScale'][cmd] || 'Unknown'})`);
            if ((val & 0x80000000) !== 0) {
              console.log(`  Reset requested`);
            }
          }
        }
        
        // DMA channel 0 (MDEC in) and channel 1 (MDEC out)
        if (p >= 0x1f801080 && p <= 0x1f80108f) {
          // Channel 0 (MDEC in)
          const regName = ['MADR', 'BCR', 'CHCR', 'Unknown'][(p & 0xf) >> 2];
          dmaCommands.push({
            instr: instrCount,
            pc: currentPC.toString(16).padStart(8, '0'),
            channel: 0,
            reg: regName,
            op,
            val: val.toString(16).padStart(8, '0')
          });
          
          if (op.startsWith('w')) {
            console.log(`DMA0 (MDEC in) ${regName}: 0x${val.toString(16).padStart(8, '0')} at instr ${instrCount}`);
            
            if (regName === 'CHCR' && (val & 0x01000000) !== 0) {
              console.log(`  DMA0 started! Direction: ${(val & 1) ? 'from RAM' : 'to RAM'}`);
            }
          }
        }
        
        if (p >= 0x1f801090 && p <= 0x1f80109f) {
          // Channel 1 (MDEC out)
          const regName = ['MADR', 'BCR', 'CHCR', 'Unknown'][(p & 0xf) >> 2];
          dmaCommands.push({
            instr: instrCount,
            pc: currentPC.toString(16).padStart(8, '0'),
            channel: 1,
            reg: regName,
            op,
            val: val.toString(16).padStart(8, '0')
          });
          
          if (op.startsWith('w')) {
            console.log(`DMA1 (MDEC out) ${regName}: 0x${val.toString(16).padStart(8, '0')} at instr ${instrCount}`);
            
            if (regName === 'CHCR' && (val & 0x01000000) !== 0) {
              console.log(`  DMA1 started! Direction: ${(val & 1) ? 'from RAM' : 'to RAM'}`);
            }
          }
        }
      }
    });
    
    // Run for a while to see MDEC activity
    const maxSteps = 80000; // Reduced to avoid unmapped access
    console.log(`Running ${maxSteps} instructions to track MDEC activity...`);
    console.log('');
    
    try {
      for (let i = 0; i < maxSteps && instrCount < maxSteps; i++) {
        sys.cpu.step();
      }
    } catch (e) {
      console.log(`\nExecution stopped at instruction ${instrCount}: ${e}`);
    }
    
    console.log(`\n=== MDEC Command Summary ===`);
    console.log(`Total MDEC commands: ${mdecCommands.length}`);
    
    // Show first few MDEC commands
    console.log(`\nFirst MDEC commands:`);
    for (const cmd of mdecCommands.slice(0, 10)) {
      console.log(`  ${cmd.instr}: ${cmd.op} ${cmd.reg} = 0x${cmd.val}`);
    }
    
    console.log(`\n=== DMA Summary ===`);
    const dma0Commands = dmaCommands.filter(c => c.channel === 0);
    const dma1Commands = dmaCommands.filter(c => c.channel === 1);
    
    console.log(`DMA0 (MDEC in) commands: ${dma0Commands.length}`);
    console.log(`DMA1 (MDEC out) commands: ${dma1Commands.length}`);
    
    // Show DMA channel setups
    console.log(`\nDMA0 CHCR writes:`);
    for (const cmd of dma0Commands.filter(c => c.reg === 'CHCR' && c.op.startsWith('w'))) {
      console.log(`  ${cmd.instr}: 0x${cmd.val}`);
    }
    
    console.log(`\nDMA1 CHCR writes:`);
    for (const cmd of dma1Commands.filter(c => c.reg === 'CHCR' && c.op.startsWith('w'))) {
      console.log(`  ${cmd.instr}: 0x${cmd.val}`);
    }
    
    expect(mdecCommands.length).toBeGreaterThan(0);
  });
});
