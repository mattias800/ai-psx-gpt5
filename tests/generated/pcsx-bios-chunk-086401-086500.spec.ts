import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86401-86500', () => {
  beforeAll(() => initOnce());
  it('[86401] PC 0x00003314 instr 0x00000000', () => {
    const pc = 0x3314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86402] PC 0x00003318 instr 0x316c0004', () => {
    const pc = 0x3318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0004 >>> 0);
    stepOne();
  });
  it('[86403] PC 0x0000331c instr 0x11800004', () => {
    const pc = 0x331c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800004 >>> 0);
    stepOne();
  });
  it('[86404] PC 0x00003320 instr 0x24030037', () => {
    const pc = 0x3320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030037 >>> 0);
    stepOne();
  });
  it('[86405] PC 0x00003324 instr 0x10000002', () => {
    const pc = 0x3324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000002 >>> 0);
    stepOne();
  });
  it('[86406] PC 0x00003328 instr 0x24030030', () => {
    const pc = 0x3328;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030030 >>> 0);
    stepOne();
  });
  it('[86407] PC 0x00003330 instr 0x8e6d0000', () => {
    const pc = 0x3330;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e6d0000 >>> 0);
    stepOne();
  });
  it('[86408] PC 0x00003334 instr 0x26100001', () => {
    const pc = 0x3334;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86409] PC 0x00003338 instr 0x000d7100', () => {
    const pc = 0x3338;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd7100 >>> 0);
    stepOne();
  });
  it('[86410] PC 0x0000333c instr 0x01c27821', () => {
    const pc = 0x333c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27821 >>> 0);
    stepOne();
  });
  it('[86411] PC 0x00003340 instr 0x01e3c023', () => {
    const pc = 0x3340;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e3c023 >>> 0);
    stepOne();
  });
  it('[86412] PC 0x00003344 instr 0xae780000', () => {
    const pc = 0x3344;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae780000 >>> 0);
    stepOne();
  });
  it('[86413] PC 0x00003348 instr 0x8204ffd4', () => {
    const pc = 0x3348;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd4 >>> 0);
    stepOne();
  });
  it('[86414] PC 0x0000334c instr 0x00000000', () => {
    const pc = 0x334c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86415] PC 0x00003350 instr 0x1480ffea', () => {
    const pc = 0x3350;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480ffea >>> 0);
    stepOne();
  });
  it('[86416] PC 0x00003354 instr 0x00000000', () => {
    const pc = 0x3354;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86417] PC 0x00003358 instr 0x8fb90068', () => {
    const pc = 0x3358;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90068 >>> 0);
    stepOne();
  });
  it('[86418] PC 0x0000335c instr 0x00000000', () => {
    const pc = 0x335c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86419] PC 0x00003360 instr 0xa3200000', () => {
    const pc = 0x3360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa3200000 >>> 0);
    stepOne();
  });
  it('[86420] PC 0x00003364 instr 0x8fb10030', () => {
    const pc = 0x3364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb10030 >>> 0);
    stepOne();
  });
  it('[86421] PC 0x00003368 instr 0x00000000', () => {
    const pc = 0x3368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86422] PC 0x0000336c instr 0x0c000c42', () => {
    const pc = 0x336c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c42 >>> 0);
    stepOne();
  });
  it('[86423] PC 0x00003370 instr 0x27a40044', () => {
    const pc = 0x3370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40044 >>> 0);
    stepOne();
  });
  it('[86424] PC 0x00003108 instr 0x3c0e0000', () => {
    const pc = 0x3108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[86425] PC 0x0000310c instr 0x8dce7200', () => {
    const pc = 0x310c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[86426] PC 0x00003110 instr 0x27bdffd8', () => {
    const pc = 0x3110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[86427] PC 0x00003114 instr 0xafb1001c', () => {
    const pc = 0x3114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[86428] PC 0x00003118 instr 0x000e7880', () => {
    const pc = 0x3118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[86429] PC 0x0000311c instr 0x3c110000', () => {
    const pc = 0x311c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110000 >>> 0);
    stepOne();
  });
  it('[86430] PC 0x00003120 instr 0x01ee7821', () => {
    const pc = 0x3120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[86431] PC 0x00003124 instr 0x26316ee0', () => {
    const pc = 0x3124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26316ee0 >>> 0);
    stepOne();
  });
  it('[86432] PC 0x00003128 instr 0x000f7900', () => {
    const pc = 0x3128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[86433] PC 0x0000312c instr 0x3c190000', () => {
    const pc = 0x312c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c190000 >>> 0);
    stepOne();
  });
  it('[86434] PC 0x00003130 instr 0x27396ee1', () => {
    const pc = 0x3130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27396ee1 >>> 0);
    stepOne();
  });
  it('[86435] PC 0x00003134 instr 0x022fc021', () => {
    const pc = 0x3134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22fc021 >>> 0);
    stepOne();
  });
  it('[86436] PC 0x00003138 instr 0xafb20020', () => {
    const pc = 0x3138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[86437] PC 0x0000313c instr 0xafb00018', () => {
    const pc = 0x313c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[86438] PC 0x00003140 instr 0x0319082b', () => {
    const pc = 0x3140;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x319082b >>> 0);
    stepOne();
  });
  it('[86439] PC 0x00003144 instr 0x00809021', () => {
    const pc = 0x3144;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x809021 >>> 0);
    stepOne();
  });
  it('[86440] PC 0x00003148 instr 0xafbf0024', () => {
    const pc = 0x3148;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[86441] PC 0x0000314c instr 0x14200014', () => {
    const pc = 0x314c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200014 >>> 0);
    stepOne();
  });
  it('[86442] PC 0x00003150 instr 0x02208021', () => {
    const pc = 0x3150;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2208021 >>> 0);
    stepOne();
  });
  it('[86443] PC 0x00003154 instr 0x8e040000', () => {
    const pc = 0x3154;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e040000 >>> 0);
    stepOne();
  });
  it('[86444] PC 0x00003158 instr 0x00000000', () => {
    const pc = 0x3158;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86445] PC 0x0000315c instr 0x10800007', () => {
    const pc = 0x315c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800007 >>> 0);
    stepOne();
  });
  it('[86446] PC 0x00003160 instr 0x00000000', () => {
    const pc = 0x3160;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86447] PC 0x00003164 instr 0x0c001ac4', () => {
    const pc = 0x3164;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001ac4 >>> 0);
    stepOne();
  });
  it('[86448] PC 0x00003168 instr 0x02402821', () => {
    const pc = 0x3168;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2402821 >>> 0);
    stepOne();
  });
  it('[86449] PC 0x00006b10 instr 0x240a00a0', () => {
    const pc = 0x6b10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86450] PC 0x00006b14 instr 0x01400008', () => {
    const pc = 0x6b14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86451] PC 0x00006b18 instr 0x24090017', () => {
    const pc = 0x6b18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090017 >>> 0);
    stepOne();
  });
  it('[86452] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86453] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86454] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86455] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86456] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86457] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86458] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86459] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86460] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86461] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86462] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86463] PC 0xbfc03288 instr 0x10800003', () => {
    const pc = 0xbfc03288;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[86464] PC 0xbfc0328c instr 0x00000000', () => {
    const pc = 0xbfc0328c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86465] PC 0xbfc03290 instr 0x14a0000b', () => {
    const pc = 0xbfc03290;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a0000b >>> 0);
    stepOne();
  });
  it('[86466] PC 0xbfc03294 instr 0x00000000', () => {
    const pc = 0xbfc03294;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86467] PC 0xbfc032c0 instr 0x80a20000', () => {
    const pc = 0xbfc032c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86468] PC 0xbfc032c4 instr 0x80830000', () => {
    const pc = 0xbfc032c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86469] PC 0xbfc032c8 instr 0x24a50001', () => {
    const pc = 0xbfc032c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86470] PC 0xbfc032cc instr 0x1443000b', () => {
    const pc = 0xbfc032cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1443000b >>> 0);
    stepOne();
  });
  it('[86471] PC 0xbfc032d0 instr 0x00000000', () => {
    const pc = 0xbfc032d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86472] PC 0xbfc032d4 instr 0x00601021', () => {
    const pc = 0xbfc032d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86473] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86474] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86475] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86476] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86477] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86478] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86479] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86480] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86481] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86482] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86483] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86484] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86485] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86486] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86487] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86488] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86489] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86490] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86491] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86492] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86493] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86494] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86495] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86496] PC 0xbfc032e0 instr 0x03e00008', () => {
    const pc = 0xbfc032e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86497] PC 0xbfc032e4 instr 0x00001021', () => {
    const pc = 0xbfc032e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[86498] PC 0x0000316c instr 0x14400003', () => {
    const pc = 0x316c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86499] PC 0x00003170 instr 0x00000000', () => {
    const pc = 0x3170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86500] PC 0x00003174 instr 0x10000016', () => {
    const pc = 0x3174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000016 >>> 0);
    stepOne();
  });
});
