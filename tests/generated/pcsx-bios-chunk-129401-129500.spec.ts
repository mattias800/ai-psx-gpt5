import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 129401-129500', () => {
  beforeAll(() => initOnce());
  it('[129401] PC 0xbfc01658 instr 0x24010069', () => {
    const pc = 0xbfc01658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010069 >>> 0);
    stepOne();
  });
  it('[129402] PC 0xbfc017b8 instr 0x1041fe17', () => {
    const pc = 0xbfc017b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1041fe17 >>> 0);
    stepOne();
  });
  it('[129403] PC 0xbfc017bc instr 0x2c41006a', () => {
    const pc = 0xbfc017bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c41006a >>> 0);
    stepOne();
  });
  it('[129404] PC 0xbfc017c0 instr 0x10200020', () => {
    const pc = 0xbfc017c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200020 >>> 0);
    stepOne();
  });
  it('[129405] PC 0xbfc017c4 instr 0x24010058', () => {
    const pc = 0xbfc017c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010058 >>> 0);
    stepOne();
  });
  it('[129406] PC 0xbfc01844 instr 0x24010070', () => {
    const pc = 0xbfc01844;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010070 >>> 0);
    stepOne();
  });
  it('[129407] PC 0xbfc01848 instr 0x1041fe30', () => {
    const pc = 0xbfc01848;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1041fe30 >>> 0);
    stepOne();
  });
  it('[129408] PC 0xbfc0184c instr 0x2c410071', () => {
    const pc = 0xbfc0184c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410071 >>> 0);
    stepOne();
  });
  it('[129409] PC 0xbfc01850 instr 0x1020000e', () => {
    const pc = 0xbfc01850;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1020000e >>> 0);
    stepOne();
  });
  it('[129410] PC 0xbfc01854 instr 0x2401006e', () => {
    const pc = 0xbfc01854;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401006e >>> 0);
    stepOne();
  });
  it('[129411] PC 0xbfc0188c instr 0x24010075', () => {
    const pc = 0xbfc0188c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010075 >>> 0);
    stepOne();
  });
  it('[129412] PC 0xbfc01890 instr 0x1041fe4f', () => {
    const pc = 0xbfc01890;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1041fe4f >>> 0);
    stepOne();
  });
  it('[129413] PC 0xbfc01894 instr 0x2c410076', () => {
    const pc = 0xbfc01894;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410076 >>> 0);
    stepOne();
  });
  it('[129414] PC 0xbfc01898 instr 0x10200005', () => {
    const pc = 0xbfc01898;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200005 >>> 0);
    stepOne();
  });
  it('[129415] PC 0xbfc0189c instr 0x24010073', () => {
    const pc = 0xbfc0189c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010073 >>> 0);
    stepOne();
  });
  it('[129416] PC 0xbfc018b0 instr 0x24010078', () => {
    const pc = 0xbfc018b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010078 >>> 0);
    stepOne();
  });
  it('[129417] PC 0xbfc018b4 instr 0x1041fe5c', () => {
    const pc = 0xbfc018b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1041fe5c >>> 0);
    stepOne();
  });
  it('[129418] PC 0xbfc018b8 instr 0x322e0001', () => {
    const pc = 0xbfc018b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x322e0001 >>> 0);
    stepOne();
  });
  it('[129419] PC 0xbfc01228 instr 0x0000a021', () => {
    const pc = 0xbfc01228;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa021 >>> 0);
    stepOne();
  });
  it('[129420] PC 0xbfc0122c instr 0x24040010', () => {
    const pc = 0xbfc0122c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040010 >>> 0);
    stepOne();
  });
  it('[129421] PC 0xbfc01230 instr 0x11c00004', () => {
    const pc = 0xbfc01230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c00004 >>> 0);
    stepOne();
  });
  it('[129422] PC 0xbfc01234 instr 0x27b601dc', () => {
    const pc = 0xbfc01234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b601dc >>> 0);
    stepOne();
  });
  it('[129423] PC 0xbfc01244 instr 0x322f0004', () => {
    const pc = 0xbfc01244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x322f0004 >>> 0);
    stepOne();
  });
  it('[129424] PC 0xbfc01248 instr 0x11e00004', () => {
    const pc = 0xbfc01248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00004 >>> 0);
    stepOne();
  });
  it('[129425] PC 0xbfc0124c instr 0x00000000', () => {
    const pc = 0xbfc0124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129426] PC 0xbfc0125c instr 0x8e620000', () => {
    const pc = 0xbfc0125c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e620000 >>> 0);
    stepOne();
  });
  it('[129427] PC 0xbfc01260 instr 0x26730004', () => {
    const pc = 0xbfc01260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26730004 >>> 0);
    stepOne();
  });
  it('[129428] PC 0xbfc01264 instr 0x00401821', () => {
    const pc = 0xbfc01264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[129429] PC 0xbfc01268 instr 0x32380008', () => {
    const pc = 0xbfc01268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x32380008 >>> 0);
    stepOne();
  });
  it('[129430] PC 0xbfc0126c instr 0x13000004', () => {
    const pc = 0xbfc0126c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x13000004 >>> 0);
    stepOne();
  });
  it('[129431] PC 0xbfc01270 instr 0x00000000', () => {
    const pc = 0xbfc01270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129432] PC 0xbfc01280 instr 0x04c00003', () => {
    const pc = 0xbfc01280;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4c00003 >>> 0);
    stepOne();
  });
  it('[129433] PC 0xbfc01284 instr 0xafa60204', () => {
    const pc = 0xbfc01284;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60204 >>> 0);
    stepOne();
  });
  it('[129434] PC 0xbfc01290 instr 0x14600003', () => {
    const pc = 0xbfc01290;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14600003 >>> 0);
    stepOne();
  });
  it('[129435] PC 0xbfc01294 instr 0x00000000', () => {
    const pc = 0xbfc01294;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129436] PC 0xbfc012a0 instr 0x8fa501dc', () => {
    const pc = 0xbfc012a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa501dc >>> 0);
    stepOne();
  });
  it('[129437] PC 0xbfc012a4 instr 0x32220008', () => {
    const pc = 0xbfc012a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x32220008 >>> 0);
    stepOne();
  });
  it('[129438] PC 0xbfc012a8 instr 0x0064001b', () => {
    const pc = 0xbfc012a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64001b >>> 0);
    stepOne();
  });
  it('[129439] PC 0xbfc012ac instr 0x26d6ffff', () => {
    const pc = 0xbfc012ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26d6ffff >>> 0);
    stepOne();
  });
  it('[129440] PC 0xbfc012b0 instr 0x0000c810', () => {
    const pc = 0xbfc012b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc810 >>> 0);
    stepOne();
  });
  it('[129441] PC 0xbfc012b4 instr 0x00b97021', () => {
    const pc = 0xbfc012b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xb97021 >>> 0);
    stepOne();
  });
  it('[129442] PC 0xbfc012b8 instr 0x81cf0000', () => {
    const pc = 0xbfc012b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0000 >>> 0);
    stepOne();
  });
  it('[129443] PC 0xbfc012bc instr 0x00001812', () => {
    const pc = 0xbfc012bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1812 >>> 0);
    stepOne();
  });
  it('[129444] PC 0xbfc012c0 instr 0xa2cf0000', () => {
    const pc = 0xbfc012c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa2cf0000 >>> 0);
    stepOne();
  });
  it('[129445] PC 0xbfc012c4 instr 0x14800002', () => {
    const pc = 0xbfc012c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14800002 >>> 0);
    stepOne();
  });
  it('[129446] PC 0xbfc012c8 instr 0x00000000', () => {
    const pc = 0xbfc012c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129447] PC 0xbfc012d0 instr 0x1460fff5', () => {
    const pc = 0xbfc012d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1460fff5 >>> 0);
    stepOne();
  });
  it('[129448] PC 0xbfc012d4 instr 0x00000000', () => {
    const pc = 0xbfc012d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129449] PC 0xbfc012a8 instr 0x0064001b', () => {
    const pc = 0xbfc012a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64001b >>> 0);
    stepOne();
  });
  it('[129450] PC 0xbfc012ac instr 0x26d6ffff', () => {
    const pc = 0xbfc012ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26d6ffff >>> 0);
    stepOne();
  });
  it('[129451] PC 0xbfc012b0 instr 0x0000c810', () => {
    const pc = 0xbfc012b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc810 >>> 0);
    stepOne();
  });
  it('[129452] PC 0xbfc012b4 instr 0x00b97021', () => {
    const pc = 0xbfc012b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xb97021 >>> 0);
    stepOne();
  });
  it('[129453] PC 0xbfc012b8 instr 0x81cf0000', () => {
    const pc = 0xbfc012b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0000 >>> 0);
    stepOne();
  });
  it('[129454] PC 0xbfc012bc instr 0x00001812', () => {
    const pc = 0xbfc012bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1812 >>> 0);
    stepOne();
  });
  it('[129455] PC 0xbfc012c0 instr 0xa2cf0000', () => {
    const pc = 0xbfc012c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa2cf0000 >>> 0);
    stepOne();
  });
  it('[129456] PC 0xbfc012c4 instr 0x14800002', () => {
    const pc = 0xbfc012c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14800002 >>> 0);
    stepOne();
  });
  it('[129457] PC 0xbfc012c8 instr 0x00000000', () => {
    const pc = 0xbfc012c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129458] PC 0xbfc012d0 instr 0x1460fff5', () => {
    const pc = 0xbfc012d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1460fff5 >>> 0);
    stepOne();
  });
  it('[129459] PC 0xbfc012d4 instr 0x00000000', () => {
    const pc = 0xbfc012d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129460] PC 0xbfc012d8 instr 0x3c18bfc1', () => {
    const pc = 0xbfc012d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c18bfc1 >>> 0);
    stepOne();
  });
  it('[129461] PC 0xbfc012dc instr 0x2718dd90', () => {
    const pc = 0xbfc012dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2718dd90 >>> 0);
    stepOne();
  });
  it('[129462] PC 0xbfc012e0 instr 0x1040000b', () => {
    const pc = 0xbfc012e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1040000b >>> 0);
    stepOne();
  });
  it('[129463] PC 0xbfc012e4 instr 0xafb801dc', () => {
    const pc = 0xbfc012e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb801dc >>> 0);
    stepOne();
  });
  it('[129464] PC 0xbfc01310 instr 0x27af01dc', () => {
    const pc = 0xbfc01310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27af01dc >>> 0);
    stepOne();
  });
  it('[129465] PC 0xbfc01314 instr 0x01f6b823', () => {
    const pc = 0xbfc01314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1f6b823 >>> 0);
    stepOne();
  });
  it('[129466] PC 0xbfc01318 instr 0x02e01021', () => {
    const pc = 0xbfc01318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2e01021 >>> 0);
    stepOne();
  });
  it('[129467] PC 0xbfc0131c instr 0xafa20200', () => {
    const pc = 0xbfc0131c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa20200 >>> 0);
    stepOne();
  });
  it('[129468] PC 0xbfc01320 instr 0x12800005', () => {
    const pc = 0xbfc01320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12800005 >>> 0);
    stepOne();
  });
  it('[129469] PC 0xbfc01324 instr 0xafa20064', () => {
    const pc = 0xbfc01324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa20064 >>> 0);
    stepOne();
  });
  it('[129470] PC 0xbfc01338 instr 0x32220040', () => {
    const pc = 0xbfc01338;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x32220040 >>> 0);
    stepOne();
  });
  it('[129471] PC 0xbfc0133c instr 0x10400005', () => {
    const pc = 0xbfc0133c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[129472] PC 0xbfc01340 instr 0xafa2006c', () => {
    const pc = 0xbfc01340;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa2006c >>> 0);
    stepOne();
  });
  it('[129473] PC 0xbfc01354 instr 0x8fb80204', () => {
    const pc = 0xbfc01354;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80204 >>> 0);
    stepOne();
  });
  it('[129474] PC 0xbfc01358 instr 0x8fb90200', () => {
    const pc = 0xbfc01358;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90200 >>> 0);
    stepOne();
  });
  it('[129475] PC 0xbfc0135c instr 0x00000000', () => {
    const pc = 0xbfc0135c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129476] PC 0xbfc01360 instr 0x0338082a', () => {
    const pc = 0xbfc01360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x338082a >>> 0);
    stepOne();
  });
  it('[129477] PC 0xbfc01364 instr 0x10200004', () => {
    const pc = 0xbfc01364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200004 >>> 0);
    stepOne();
  });
  it('[129478] PC 0xbfc01368 instr 0x8fae0200', () => {
    const pc = 0xbfc01368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fae0200 >>> 0);
    stepOne();
  });
  it('[129479] PC 0xbfc01378 instr 0x00000000', () => {
    const pc = 0xbfc01378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129480] PC 0xbfc0137c instr 0xafae01f0', () => {
    const pc = 0xbfc0137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafae01f0 >>> 0);
    stepOne();
  });
  it('[129481] PC 0xbfc01380 instr 0x32220030', () => {
    const pc = 0xbfc01380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x32220030 >>> 0);
    stepOne();
  });
  it('[129482] PC 0xbfc01384 instr 0x14400015', () => {
    const pc = 0xbfc01384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400015 >>> 0);
    stepOne();
  });
  it('[129483] PC 0xbfc01388 instr 0xafa20068', () => {
    const pc = 0xbfc01388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa20068 >>> 0);
    stepOne();
  });
  it('[129484] PC 0xbfc013dc instr 0x1280000c', () => {
    const pc = 0xbfc013dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1280000c >>> 0);
    stepOne();
  });
  it('[129485] PC 0xbfc013e0 instr 0x8faf006c', () => {
    const pc = 0xbfc013e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faf006c >>> 0);
    stepOne();
  });
  it('[129486] PC 0xbfc01410 instr 0x00000000', () => {
    const pc = 0xbfc01410;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129487] PC 0xbfc01414 instr 0x11e00016', () => {
    const pc = 0xbfc01414;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00016 >>> 0);
    stepOne();
  });
  it('[129488] PC 0xbfc01418 instr 0x8fb90068', () => {
    const pc = 0xbfc01418;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90068 >>> 0);
    stepOne();
  });
  it('[129489] PC 0xbfc01470 instr 0x24010020', () => {
    const pc = 0xbfc01470;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010020 >>> 0);
    stepOne();
  });
  it('[129490] PC 0xbfc01474 instr 0x17210014', () => {
    const pc = 0xbfc01474;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x17210014 >>> 0);
    stepOne();
  });
  it('[129491] PC 0xbfc01478 instr 0x8fb80200', () => {
    const pc = 0xbfc01478;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80200 >>> 0);
    stepOne();
  });
  it('[129492] PC 0xbfc0147c instr 0x8fa201f0', () => {
    const pc = 0xbfc0147c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa201f0 >>> 0);
    stepOne();
  });
  it('[129493] PC 0xbfc01480 instr 0x00000000', () => {
    const pc = 0xbfc01480;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129494] PC 0xbfc01484 instr 0x0055082a', () => {
    const pc = 0xbfc01484;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x55082a >>> 0);
    stepOne();
  });
  it('[129495] PC 0xbfc01488 instr 0x1020000e', () => {
    const pc = 0xbfc01488;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1020000e >>> 0);
    stepOne();
  });
  it('[129496] PC 0xbfc0148c instr 0x00408021', () => {
    const pc = 0xbfc0148c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x408021 >>> 0);
    stepOne();
  });
  it('[129497] PC 0xbfc014c4 instr 0x8fb80200', () => {
    const pc = 0xbfc014c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80200 >>> 0);
    stepOne();
  });
  it('[129498] PC 0xbfc014c8 instr 0x8fae0204', () => {
    const pc = 0xbfc014c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fae0204 >>> 0);
    stepOne();
  });
  it('[129499] PC 0xbfc014cc instr 0x03008021', () => {
    const pc = 0xbfc014cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3008021 >>> 0);
    stepOne();
  });
  it('[129500] PC 0xbfc014d0 instr 0x030e082a', () => {
    const pc = 0xbfc014d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30e082a >>> 0);
    stepOne();
  });
});
