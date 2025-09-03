import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 17601-17700', () => {
  beforeAll(() => initOnce());
  it('[17601] PC 0xbfc067b8 instr 0x27a40018', () => {
    const pc = 0xbfc067b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40018 >>> 0);
    stepOne();
  });
  it('[17602] PC 0xbfc033c8 instr 0x10800003', () => {
    const pc = 0xbfc033c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[17603] PC 0xbfc033cc instr 0x00000000', () => {
    const pc = 0xbfc033cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17604] PC 0xbfc033d0 instr 0x14a00003', () => {
    const pc = 0xbfc033d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[17605] PC 0xbfc033d4 instr 0x00000000', () => {
    const pc = 0xbfc033d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17606] PC 0xbfc033e0 instr 0x80a20000', () => {
    const pc = 0xbfc033e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17607] PC 0xbfc033e4 instr 0x00801821', () => {
    const pc = 0xbfc033e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[17608] PC 0xbfc033e8 instr 0x24840001', () => {
    const pc = 0xbfc033e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17609] PC 0xbfc033ec instr 0x24a50001', () => {
    const pc = 0xbfc033ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17610] PC 0xbfc033f0 instr 0x10400006', () => {
    const pc = 0xbfc033f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400006 >>> 0);
    stepOne();
  });
  it('[17611] PC 0xbfc033f4 instr 0xa082ffff', () => {
    const pc = 0xbfc033f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17612] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17613] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17614] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17615] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17616] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17617] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17618] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17619] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17620] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17621] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17622] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17623] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17624] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17625] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17626] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17627] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17628] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17629] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17630] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17631] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17632] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17633] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17634] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17635] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17636] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17637] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17638] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17639] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17640] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17641] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17642] PC 0xbfc0340c instr 0x00601021', () => {
    const pc = 0xbfc0340c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[17643] PC 0xbfc03410 instr 0x03e00008', () => {
    const pc = 0xbfc03410;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17644] PC 0xbfc03414 instr 0x00000000', () => {
    const pc = 0xbfc03414;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17645] PC 0xbfc067bc instr 0x3c05bfc1', () => {
    const pc = 0xbfc067bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c05bfc1 >>> 0);
    stepOne();
  });
  it('[17646] PC 0xbfc067c0 instr 0x24a5e140', () => {
    const pc = 0xbfc067c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5e140 >>> 0);
    stepOne();
  });
  it('[17647] PC 0xbfc067c4 instr 0x0ff00c64', () => {
    const pc = 0xbfc067c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00c64 >>> 0);
    stepOne();
  });
  it('[17648] PC 0xbfc067c8 instr 0x27a40018', () => {
    const pc = 0xbfc067c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40018 >>> 0);
    stepOne();
  });
  it('[17649] PC 0xbfc03190 instr 0x10800003', () => {
    const pc = 0xbfc03190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[17650] PC 0xbfc03194 instr 0x00000000', () => {
    const pc = 0xbfc03194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17651] PC 0xbfc03198 instr 0x14a00003', () => {
    const pc = 0xbfc03198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[17652] PC 0xbfc0319c instr 0x00000000', () => {
    const pc = 0xbfc0319c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17653] PC 0xbfc031a8 instr 0x80820000', () => {
    const pc = 0xbfc031a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17654] PC 0xbfc031ac instr 0x00801821', () => {
    const pc = 0xbfc031ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[17655] PC 0xbfc031b0 instr 0x10400005', () => {
    const pc = 0xbfc031b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[17656] PC 0xbfc031b4 instr 0x24840001', () => {
    const pc = 0xbfc031b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17657] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17658] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17659] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17660] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17661] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17662] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17663] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17664] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17665] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17666] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17667] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17668] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17669] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17670] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17671] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17672] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17673] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17674] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17675] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17676] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17677] PC 0xbfc031b8 instr 0x80820000', () => {
    const pc = 0xbfc031b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[17678] PC 0xbfc031bc instr 0x24840001', () => {
    const pc = 0xbfc031bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17679] PC 0xbfc031c0 instr 0x1440fffd', () => {
    const pc = 0xbfc031c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffd >>> 0);
    stepOne();
  });
  it('[17680] PC 0xbfc031c4 instr 0x00000000', () => {
    const pc = 0xbfc031c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17681] PC 0xbfc031c8 instr 0x80a20000', () => {
    const pc = 0xbfc031c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17682] PC 0xbfc031cc instr 0x2484ffff', () => {
    const pc = 0xbfc031cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484ffff >>> 0);
    stepOne();
  });
  it('[17683] PC 0xbfc031d0 instr 0x24840001', () => {
    const pc = 0xbfc031d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17684] PC 0xbfc031d4 instr 0x24a50001', () => {
    const pc = 0xbfc031d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17685] PC 0xbfc031d8 instr 0x10400006', () => {
    const pc = 0xbfc031d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400006 >>> 0);
    stepOne();
  });
  it('[17686] PC 0xbfc031dc instr 0xa082ffff', () => {
    const pc = 0xbfc031dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17687] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17688] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17689] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17690] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17691] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17692] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17693] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17694] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17695] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17696] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17697] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17698] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17699] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17700] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
});
