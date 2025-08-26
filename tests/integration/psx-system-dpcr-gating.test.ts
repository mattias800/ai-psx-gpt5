import { describe, it, expect } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import { IRQ } from '../../packages/emulator-core/src/timing';

// E2E DPCR gating: ensure no vector when DPCR ch2 disabled, then vector when enabled

describe('E2E: DPCR gating on DMA (GPU ch2)', () => {
  it('gates DMA IRQ vectoring when DPCR ch2 disabled, allows when enabled', () => {
    const psx = new PSXSystem();

    // Set IMASK.DMA and IE
    const ORI  = (rs: number, rt: number, imm: number) => (0x0d<<26) | (rs<<21) | (rt<<16) | (imm & 0xffff);
    const LUI  = (rt: number, imm: number) => (0x0f<<26) | (0<<21) | (rt<<16) | (imm & 0xffff);
    const SW   = (rs: number, rt: number, off: number) => (0x2b<<26) | (rs<<21) | (rt<<16) | (off & 0xffff);

    const IMASK = 0x1f801074;
    const DICR = 0x1f8010f4;
    const DPCR = 0x1f8010f0;
    const CH2_MADR = 0x1f8010a0; const CH2_BCR = 0x1f8010a4; const CH2_CHCR = 0x1f8010a8; const GP1 = 0x1f801814;

    const base = 0x100;
    // Build a small linked-list at base: 2x2 rect
    const w=2,h=2,x=30,y=31,color=0x00ff00;
    const header = ((3&0xff)<<24)|0x00ffffff;
    const cmd = (0x64<<24)|color;
    const xy = ((y & 0x1ff)<<16)|(x&0x3ff);
    const size = ((h&0x1ff)<<16)|(w&0x3ff);
    psx.as.write32(base+0, header>>>0);
    psx.as.write32(base+4, cmd>>>0);
    psx.as.write32(base+8, xy>>>0);
    psx.as.write32(base+12, size>>>0);

    const dmaMask = 1<<IRQ.DMA;
    const dicrVal = (1<<2)|(1<<24);

    // Program: IE=1, IMASK.DMA, DICR enable ch2+master, DPCR disable ch2, set GP1 FIFO write
    const prog = [
      ORI(0,1,1), (0x10<<26)|(0x04<<21)|(1<<16)|(12<<11),
      LUI(2,(dmaMask>>>16)&0xffff), ORI(2,2,dmaMask&0xffff),
      LUI(3,(IMASK>>>16)&0xffff), ORI(3,3,IMASK&0xffff), SW(3,2,0),
      LUI(4,(DICR>>>16)&0xffff), ORI(4,4,(DICR&0xffff)),
      LUI(5,(dicrVal>>>16)&0xffff), ORI(5,5,(dicrVal&0xffff)), SW(4,5,0),
      LUI(6,(DPCR>>>16)&0xffff), ORI(6,6,(DPCR&0xffff)),
      // disable ch2: write ~(1<<2)
      LUI(7, (~(1<<2))>>>16 & 0xffff), ORI(7,7, (~(1<<2)) & 0xffff), SW(6,7,0),
      // set GP1 dir FIFO write
      LUI(8,(GP1>>>16)&0xffff), ORI(8,8,(GP1&0xffff)),
      LUI(9, ((0x04<<24|1)>>>16)&0xffff), ORI(9,9,((0x04<<24|1)&0xffff)), SW(8,9,0),
    ];
    const emit = (a:number[]) => { const u8=new Uint8Array(a.length*4); for(let i=0;i<a.length;i++){const v=a[i]>>>0; u8[i*4]=v&0xff; u8[i*4+1]=(v>>>8)&0xff; u8[i*4+2]=(v>>>16)&0xff; u8[i*4+3]=(v>>>24)&0xff;} return u8; };
    psx.loadProgram(emit(prog),0);
    psx.stepCpu(prog.length);

    // Attempt DMA linked-list with DPCR disabled
    psx.as.write32(CH2_MADR, base>>>0);
    psx.as.write32(CH2_BCR, 0);
    psx.as.write32(CH2_CHCR, (1<<0)|(2<<9)|(1<<24));
    // No IRQ
    expect((psx.intc.status & (1<<IRQ.DMA))===0).toBe(true);

    // Enable DPCR and try again
    psx.as.write32(DPCR, 0xffffffff>>>0);
    psx.as.write32(CH2_MADR, base>>>0);
    psx.as.write32(CH2_BCR, 0);
    psx.as.write32(CH2_CHCR, (1<<0)|(2<<9)|(1<<24));
    // IRQ should be raised now
    expect((psx.intc.status & (1<<IRQ.DMA))!==0).toBe(true);
    psx.stepCpu(1);
    expect(psx.cpu.s.pc>>>0).toBe(0x80000080);
  });
});

