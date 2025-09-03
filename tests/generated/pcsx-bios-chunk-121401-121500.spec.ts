import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121401-121500', () => {
  beforeAll(() => initOnce());
  it('[121401] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[121402] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[121403] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[121404] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121405] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121406] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121407] PC 0x00001b20 instr 0x27bdffe8', () => {
    const pc = 0x1b20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[121408] PC 0x00001b24 instr 0xafbf0014', () => {
    const pc = 0x1b24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121409] PC 0x00001b28 instr 0x3c050000', () => {
    const pc = 0x1b28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[121410] PC 0x00001b2c instr 0x0c000508', () => {
    const pc = 0x1b2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[121411] PC 0x00001b30 instr 0x24a56da8', () => {
    const pc = 0x1b30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a56da8 >>> 0);
    stepOne();
  });
  it('[121412] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[121413] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[121414] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[121415] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[121416] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[121417] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[121418] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[121419] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121420] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
  it('[121421] PC 0x00001b34 instr 0x8fbf0014', () => {
    const pc = 0x1b34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[121422] PC 0x00001b38 instr 0x27bd0018', () => {
    const pc = 0x1b38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[121423] PC 0x00001b3c instr 0x03e00008', () => {
    const pc = 0x1b3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121424] PC 0x00001b40 instr 0x00000000', () => {
    const pc = 0x1b40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121425] PC 0xbfc06924 instr 0x0ff036d8', () => {
    const pc = 0xbfc06924;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036d8 >>> 0);
    stepOne();
  });
  it('[121426] PC 0xbfc06928 instr 0x24040003', () => {
    const pc = 0xbfc06928;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040003 >>> 0);
    stepOne();
  });
  it('[121427] PC 0xbfc0db60 instr 0x240a00c0', () => {
    const pc = 0xbfc0db60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[121428] PC 0xbfc0db64 instr 0x01400008', () => {
    const pc = 0xbfc0db64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[121429] PC 0xbfc0db68 instr 0x2409000c', () => {
    const pc = 0xbfc0db68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409000c >>> 0);
    stepOne();
  });
  it('[121430] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121431] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[121432] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121433] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121434] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121435] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[121436] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[121437] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[121438] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[121439] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121440] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121441] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121442] PC 0x00002724 instr 0x3c010001', () => {
    const pc = 0x2724;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[121443] PC 0x00002728 instr 0xac208610', () => {
    const pc = 0x2728;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac208610 >>> 0);
    stepOne();
  });
  it('[121444] PC 0x0000272c instr 0x3c010001', () => {
    const pc = 0x272c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[121445] PC 0x00002730 instr 0xac208614', () => {
    const pc = 0x2730;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac208614 >>> 0);
    stepOne();
  });
  it('[121446] PC 0x00002734 instr 0x24030003', () => {
    const pc = 0x2734;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030003 >>> 0);
    stepOne();
  });
  it('[121447] PC 0x00002738 instr 0x27bdffe8', () => {
    const pc = 0x2738;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[121448] PC 0x0000273c instr 0x3c030001', () => {
    const pc = 0x273c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c030001 >>> 0);
    stepOne();
  });
  it('[121449] PC 0x00002740 instr 0x3c010001', () => {
    const pc = 0x2740;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[121450] PC 0x00002744 instr 0x3c020001', () => {
    const pc = 0x2744;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[121451] PC 0x00002748 instr 0xafbf0014', () => {
    const pc = 0x2748;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121452] PC 0x0000274c instr 0x2442861c', () => {
    const pc = 0x274c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442861c >>> 0);
    stepOne();
  });
  it('[121453] PC 0x00002750 instr 0xac208618', () => {
    const pc = 0x2750;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac208618 >>> 0);
    stepOne();
  });
  it('[121454] PC 0x00002754 instr 0x2463863c', () => {
    const pc = 0x2754;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463863c >>> 0);
    stepOne();
  });
  it('[121455] PC 0x00002758 instr 0xac400000', () => {
    const pc = 0x2758;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[121456] PC 0x0000275c instr 0x24420010', () => {
    const pc = 0x275c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420010 >>> 0);
    stepOne();
  });
  it('[121457] PC 0x00002760 instr 0xac40fff4', () => {
    const pc = 0x2760;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fff4 >>> 0);
    stepOne();
  });
  it('[121458] PC 0x00002764 instr 0xac40fff8', () => {
    const pc = 0x2764;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fff8 >>> 0);
    stepOne();
  });
  it('[121459] PC 0x00002768 instr 0x1443fffb', () => {
    const pc = 0x2768;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1443fffb >>> 0);
    stepOne();
  });
  it('[121460] PC 0x0000276c instr 0xac40fffc', () => {
    const pc = 0x276c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fffc >>> 0);
    stepOne();
  });
  it('[121461] PC 0x00002758 instr 0xac400000', () => {
    const pc = 0x2758;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[121462] PC 0x0000275c instr 0x24420010', () => {
    const pc = 0x275c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420010 >>> 0);
    stepOne();
  });
  it('[121463] PC 0x00002760 instr 0xac40fff4', () => {
    const pc = 0x2760;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fff4 >>> 0);
    stepOne();
  });
  it('[121464] PC 0x00002764 instr 0xac40fff8', () => {
    const pc = 0x2764;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fff8 >>> 0);
    stepOne();
  });
  it('[121465] PC 0x00002768 instr 0x1443fffb', () => {
    const pc = 0x2768;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1443fffb >>> 0);
    stepOne();
  });
  it('[121466] PC 0x0000276c instr 0xac40fffc', () => {
    const pc = 0x276c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac40fffc >>> 0);
    stepOne();
  });
  it('[121467] PC 0x00002770 instr 0x3c050000', () => {
    const pc = 0x2770;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[121468] PC 0x00002774 instr 0x0c000508', () => {
    const pc = 0x2774;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[121469] PC 0x00002778 instr 0x24a56d98', () => {
    const pc = 0x2778;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a56d98 >>> 0);
    stepOne();
  });
  it('[121470] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[121471] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[121472] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[121473] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[121474] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[121475] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[121476] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[121477] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121478] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
  it('[121479] PC 0x0000277c instr 0x8fbf0014', () => {
    const pc = 0x277c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[121480] PC 0x00002780 instr 0x27bd0018', () => {
    const pc = 0x2780;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[121481] PC 0x00002784 instr 0x03e00008', () => {
    const pc = 0x2784;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121482] PC 0x00002788 instr 0x00000000', () => {
    const pc = 0x2788;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121483] PC 0xbfc0692c instr 0x3c04a001', () => {
    const pc = 0xbfc0692c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04a001 >>> 0);
    stepOne();
  });
  it('[121484] PC 0xbfc06930 instr 0x8c84b944', () => {
    const pc = 0xbfc06930;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c84b944 >>> 0);
    stepOne();
  });
  it('[121485] PC 0xbfc06934 instr 0x0ff0119e', () => {
    const pc = 0xbfc06934;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff0119e >>> 0);
    stepOne();
  });
  it('[121486] PC 0xbfc06938 instr 0x00000000', () => {
    const pc = 0xbfc06938;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121487] PC 0xbfc04678 instr 0x27bdffd8', () => {
    const pc = 0xbfc04678;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[121488] PC 0xbfc0467c instr 0x00803021', () => {
    const pc = 0xbfc0467c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x803021 >>> 0);
    stepOne();
  });
  it('[121489] PC 0xbfc04680 instr 0xafbf001c', () => {
    const pc = 0xbfc04680;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[121490] PC 0xbfc04684 instr 0x3c04bfc1', () => {
    const pc = 0xbfc04684;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[121491] PC 0xbfc04688 instr 0x2484df20', () => {
    const pc = 0xbfc04688;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484df20 >>> 0);
    stepOne();
  });
  it('[121492] PC 0xbfc0468c instr 0x00c02821', () => {
    const pc = 0xbfc0468c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc02821 >>> 0);
    stepOne();
  });
  it('[121493] PC 0xbfc04690 instr 0x0ff00638', () => {
    const pc = 0xbfc04690;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00638 >>> 0);
    stepOne();
  });
  it('[121494] PC 0xbfc04694 instr 0xafa60028', () => {
    const pc = 0xbfc04694;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60028 >>> 0);
    stepOne();
  });
  it('[121495] PC 0xbfc018e0 instr 0x27bdffe8', () => {
    const pc = 0xbfc018e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[121496] PC 0xbfc018e4 instr 0xafa40018', () => {
    const pc = 0xbfc018e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[121497] PC 0xbfc018e8 instr 0x00a01821', () => {
    const pc = 0xbfc018e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[121498] PC 0xbfc018ec instr 0xafbf0014', () => {
    const pc = 0xbfc018ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121499] PC 0xbfc018f0 instr 0x8fa50018', () => {
    const pc = 0xbfc018f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa50018 >>> 0);
    stepOne();
  });
  it('[121500] PC 0xbfc018f4 instr 0x00c04021', () => {
    const pc = 0xbfc018f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc04021 >>> 0);
    stepOne();
  });
});
