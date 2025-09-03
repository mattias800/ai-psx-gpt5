import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 17501-17600', () => {
  beforeAll(() => initOnce());
  it('[17501] PC 0xbfc031a8 instr 0x80820000', () => {
    const pc = 0xbfc031a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17502] PC 0xbfc031ac instr 0x00801821', () => {
    const pc = 0xbfc031ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[17503] PC 0xbfc031b0 instr 0x10400005', () => {
    const pc = 0xbfc031b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[17504] PC 0xbfc031b4 instr 0x24840001', () => {
    const pc = 0xbfc031b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17505] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17506] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17507] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17508] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17509] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17510] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17511] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17512] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17513] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17514] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17515] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17516] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17517] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17518] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17519] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17520] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17521] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17522] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17523] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17524] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17525] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17526] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17527] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17528] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17529] PC 0xbfc031c8 instr 0x80a20000', () => {
    const pc = 0xbfc031c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17530] PC 0xbfc031cc instr 0x2484ffff', () => {
    const pc = 0xbfc031cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484ffff >>> 0);
    stepOne();
  });
  it('[17531] PC 0xbfc031d0 instr 0x24840001', () => {
    const pc = 0xbfc031d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17532] PC 0xbfc031d4 instr 0x24a50001', () => {
    const pc = 0xbfc031d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17533] PC 0xbfc031d8 instr 0x10400006', () => {
    const pc = 0xbfc031d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400006 >>> 0);
    stepOne();
  });
  it('[17534] PC 0xbfc031dc instr 0xa082ffff', () => {
    const pc = 0xbfc031dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17535] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17536] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17537] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17538] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17539] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17540] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17541] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17542] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17543] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17544] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17545] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17546] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17547] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17548] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17549] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17550] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17551] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17552] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17553] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17554] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17555] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17556] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17557] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17558] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17559] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17560] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17561] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17562] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17563] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17564] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17565] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17566] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17567] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17568] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17569] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17570] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17571] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17572] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17573] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17574] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17575] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17576] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17577] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17578] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17579] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17580] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17581] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17582] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17583] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17584] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17585] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17586] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17587] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17588] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17589] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17590] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17591] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17592] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17593] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17594] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17595] PC 0xbfc031f4 instr 0x00601021', () => {
    const pc = 0xbfc031f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[17596] PC 0xbfc031f8 instr 0x03e00008', () => {
    const pc = 0xbfc031f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17597] PC 0xbfc031fc instr 0x00000000', () => {
    const pc = 0xbfc031fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17598] PC 0xbfc067ac instr 0x3c05bfc1', () => {
    const pc = 0xbfc067ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c05bfc1 >>> 0);
    stepOne();
  });
  it('[17599] PC 0xbfc067b0 instr 0x24a5e1b0', () => {
    const pc = 0xbfc067b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5e1b0 >>> 0);
    stepOne();
  });
  it('[17600] PC 0xbfc067b4 instr 0x0ff00cf2', () => {
    const pc = 0xbfc067b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00cf2 >>> 0);
    stepOne();
  });
});
