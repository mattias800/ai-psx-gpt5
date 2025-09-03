import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86801-86900', () => {
  beforeAll(() => initOnce());
  it('[86801] PC 0x00003360 instr 0xa3200000', () => {
    const pc = 0x3360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa3200000 >>> 0);
    stepOne();
  });
  it('[86802] PC 0x00003364 instr 0x8fb10030', () => {
    const pc = 0x3364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb10030 >>> 0);
    stepOne();
  });
  it('[86803] PC 0x00003368 instr 0x00000000', () => {
    const pc = 0x3368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86804] PC 0x0000336c instr 0x0c000c42', () => {
    const pc = 0x336c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c42 >>> 0);
    stepOne();
  });
  it('[86805] PC 0x00003370 instr 0x27a40044', () => {
    const pc = 0x3370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40044 >>> 0);
    stepOne();
  });
  it('[86806] PC 0x00003108 instr 0x3c0e0000', () => {
    const pc = 0x3108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[86807] PC 0x0000310c instr 0x8dce7200', () => {
    const pc = 0x310c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[86808] PC 0x00003110 instr 0x27bdffd8', () => {
    const pc = 0x3110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[86809] PC 0x00003114 instr 0xafb1001c', () => {
    const pc = 0x3114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[86810] PC 0x00003118 instr 0x000e7880', () => {
    const pc = 0x3118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[86811] PC 0x0000311c instr 0x3c110000', () => {
    const pc = 0x311c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110000 >>> 0);
    stepOne();
  });
  it('[86812] PC 0x00003120 instr 0x01ee7821', () => {
    const pc = 0x3120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[86813] PC 0x00003124 instr 0x26316ee0', () => {
    const pc = 0x3124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26316ee0 >>> 0);
    stepOne();
  });
  it('[86814] PC 0x00003128 instr 0x000f7900', () => {
    const pc = 0x3128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[86815] PC 0x0000312c instr 0x3c190000', () => {
    const pc = 0x312c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c190000 >>> 0);
    stepOne();
  });
  it('[86816] PC 0x00003130 instr 0x27396ee1', () => {
    const pc = 0x3130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27396ee1 >>> 0);
    stepOne();
  });
  it('[86817] PC 0x00003134 instr 0x022fc021', () => {
    const pc = 0x3134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22fc021 >>> 0);
    stepOne();
  });
  it('[86818] PC 0x00003138 instr 0xafb20020', () => {
    const pc = 0x3138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[86819] PC 0x0000313c instr 0xafb00018', () => {
    const pc = 0x313c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[86820] PC 0x00003140 instr 0x0319082b', () => {
    const pc = 0x3140;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x319082b >>> 0);
    stepOne();
  });
  it('[86821] PC 0x00003144 instr 0x00809021', () => {
    const pc = 0x3144;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x809021 >>> 0);
    stepOne();
  });
  it('[86822] PC 0x00003148 instr 0xafbf0024', () => {
    const pc = 0x3148;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[86823] PC 0x0000314c instr 0x14200014', () => {
    const pc = 0x314c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200014 >>> 0);
    stepOne();
  });
  it('[86824] PC 0x00003150 instr 0x02208021', () => {
    const pc = 0x3150;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2208021 >>> 0);
    stepOne();
  });
  it('[86825] PC 0x00003154 instr 0x8e040000', () => {
    const pc = 0x3154;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e040000 >>> 0);
    stepOne();
  });
  it('[86826] PC 0x00003158 instr 0x00000000', () => {
    const pc = 0x3158;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86827] PC 0x0000315c instr 0x10800007', () => {
    const pc = 0x315c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800007 >>> 0);
    stepOne();
  });
  it('[86828] PC 0x00003160 instr 0x00000000', () => {
    const pc = 0x3160;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86829] PC 0x00003164 instr 0x0c001ac4', () => {
    const pc = 0x3164;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001ac4 >>> 0);
    stepOne();
  });
  it('[86830] PC 0x00003168 instr 0x02402821', () => {
    const pc = 0x3168;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2402821 >>> 0);
    stepOne();
  });
  it('[86831] PC 0x00006b10 instr 0x240a00a0', () => {
    const pc = 0x6b10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86832] PC 0x00006b14 instr 0x01400008', () => {
    const pc = 0x6b14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86833] PC 0x00006b18 instr 0x24090017', () => {
    const pc = 0x6b18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090017 >>> 0);
    stepOne();
  });
  it('[86834] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86835] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86836] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86837] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86838] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86839] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86840] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86841] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86842] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86843] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86844] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86845] PC 0xbfc03288 instr 0x10800003', () => {
    const pc = 0xbfc03288;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[86846] PC 0xbfc0328c instr 0x00000000', () => {
    const pc = 0xbfc0328c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86847] PC 0xbfc03290 instr 0x14a0000b', () => {
    const pc = 0xbfc03290;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a0000b >>> 0);
    stepOne();
  });
  it('[86848] PC 0xbfc03294 instr 0x00000000', () => {
    const pc = 0xbfc03294;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86849] PC 0xbfc032c0 instr 0x80a20000', () => {
    const pc = 0xbfc032c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86850] PC 0xbfc032c4 instr 0x80830000', () => {
    const pc = 0xbfc032c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86851] PC 0xbfc032c8 instr 0x24a50001', () => {
    const pc = 0xbfc032c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86852] PC 0xbfc032cc instr 0x1443000b', () => {
    const pc = 0xbfc032cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1443000b >>> 0);
    stepOne();
  });
  it('[86853] PC 0xbfc032d0 instr 0x00000000', () => {
    const pc = 0xbfc032d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86854] PC 0xbfc032d4 instr 0x00601021', () => {
    const pc = 0xbfc032d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86855] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86856] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86857] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86858] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86859] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86860] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86861] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86862] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86863] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86864] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86865] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86866] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86867] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86868] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86869] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86870] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86871] PC 0xbfc032e8 instr 0x80a20000', () => {
    const pc = 0xbfc032e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[86872] PC 0xbfc032ec instr 0x80830000', () => {
    const pc = 0xbfc032ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80830000 >>> 0);
    stepOne();
  });
  it('[86873] PC 0xbfc032f0 instr 0x24a50001', () => {
    const pc = 0xbfc032f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[86874] PC 0xbfc032f4 instr 0x1043fff8', () => {
    const pc = 0xbfc032f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1043fff8 >>> 0);
    stepOne();
  });
  it('[86875] PC 0xbfc032f8 instr 0x00601021', () => {
    const pc = 0xbfc032f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86876] PC 0xbfc032d8 instr 0x14400003', () => {
    const pc = 0xbfc032d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86877] PC 0xbfc032dc instr 0x24840001', () => {
    const pc = 0xbfc032dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[86878] PC 0xbfc032e0 instr 0x03e00008', () => {
    const pc = 0xbfc032e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86879] PC 0xbfc032e4 instr 0x00001021', () => {
    const pc = 0xbfc032e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[86880] PC 0x0000316c instr 0x14400003', () => {
    const pc = 0x316c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86881] PC 0x00003170 instr 0x00000000', () => {
    const pc = 0x3170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86882] PC 0x00003174 instr 0x10000016', () => {
    const pc = 0x3174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000016 >>> 0);
    stepOne();
  });
  it('[86883] PC 0x00003178 instr 0x02001021', () => {
    const pc = 0x3178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2001021 >>> 0);
    stepOne();
  });
  it('[86884] PC 0x000031d0 instr 0x8fbf0024', () => {
    const pc = 0x31d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[86885] PC 0x000031d4 instr 0x8fb00018', () => {
    const pc = 0x31d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[86886] PC 0x000031d8 instr 0x8fb1001c', () => {
    const pc = 0x31d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[86887] PC 0x000031dc instr 0x8fb20020', () => {
    const pc = 0x31dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[86888] PC 0x000031e0 instr 0x03e00008', () => {
    const pc = 0x31e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86889] PC 0x000031e4 instr 0x27bd0028', () => {
    const pc = 0x31e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[86890] PC 0x00003374 instr 0x8fa80074', () => {
    const pc = 0x3374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa80074 >>> 0);
    stepOne();
  });
  it('[86891] PC 0x00003378 instr 0x14400003', () => {
    const pc = 0x3378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86892] PC 0x0000337c instr 0xad020000', () => {
    const pc = 0x337c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad020000 >>> 0);
    stepOne();
  });
  it('[86893] PC 0x00003388 instr 0x02401021', () => {
    const pc = 0x3388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401021 >>> 0);
    stepOne();
  });
  it('[86894] PC 0x0000338c instr 0x8fbf002c', () => {
    const pc = 0x338c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf002c >>> 0);
    stepOne();
  });
  it('[86895] PC 0x00003390 instr 0x8fb00020', () => {
    const pc = 0x3390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00020 >>> 0);
    stepOne();
  });
  it('[86896] PC 0x00003394 instr 0x8fb20024', () => {
    const pc = 0x3394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20024 >>> 0);
    stepOne();
  });
  it('[86897] PC 0x00003398 instr 0x8fb30028', () => {
    const pc = 0x3398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30028 >>> 0);
    stepOne();
  });
  it('[86898] PC 0x0000339c instr 0x03e00008', () => {
    const pc = 0x339c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86899] PC 0x000033a0 instr 0x27bd0070', () => {
    const pc = 0x33a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0070 >>> 0);
    stepOne();
  });
  it('[86900] PC 0x0000299c instr 0x8fa70034', () => {
    const pc = 0x299c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa70034 >>> 0);
    stepOne();
  });
});
