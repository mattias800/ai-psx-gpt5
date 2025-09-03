import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 83801-83900', () => {
  beforeAll(() => initOnce());
  it('[83801] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83802] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83803] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83804] PC 0x00002180 instr 0x00601021', () => {
    const pc = 0x2180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[83805] PC 0x00002184 instr 0x03e00008', () => {
    const pc = 0x2184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[83806] PC 0x00002188 instr 0x00000000', () => {
    const pc = 0x2188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83807] PC 0x00002828 instr 0x0c0010d8', () => {
    const pc = 0x2828;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0010d8 >>> 0);
    stepOne();
  });
  it('[83808] PC 0x0000282c instr 0x24040001', () => {
    const pc = 0x282c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[83809] PC 0x00004360 instr 0x27bdffe8', () => {
    const pc = 0x4360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[83810] PC 0x00004364 instr 0xafbf0014', () => {
    const pc = 0x4364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[83811] PC 0x00004368 instr 0x308400ff', () => {
    const pc = 0x4368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[83812] PC 0x0000436c instr 0x3c0e1f80', () => {
    const pc = 0x436c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[83813] PC 0x00004370 instr 0x0c0009e8', () => {
    const pc = 0x4370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[83814] PC 0x00004374 instr 0xa1c42041', () => {
    const pc = 0x4374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[83815] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[83816] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[83817] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83818] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83819] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83820] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[83821] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83822] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[83823] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[83824] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[83825] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83826] PC 0x00002830 instr 0x8fa40020', () => {
    const pc = 0x2830;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40020 >>> 0);
    stepOne();
  });
  it('[83827] PC 0x00002834 instr 0x0c000a1c', () => {
    const pc = 0x2834;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000a1c >>> 0);
    stepOne();
  });
  it('[83828] PC 0x00002838 instr 0x00000000', () => {
    const pc = 0x2838;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83829] PC 0x00002870 instr 0x27bdffe8', () => {
    const pc = 0x2870;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[83830] PC 0x00002874 instr 0xafbf0014', () => {
    const pc = 0x2874;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[83831] PC 0x00002878 instr 0xafa40018', () => {
    const pc = 0x2878;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[83832] PC 0x0000287c instr 0x0c0010d8', () => {
    const pc = 0x287c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0010d8 >>> 0);
    stepOne();
  });
  it('[83833] PC 0x00002880 instr 0x24040003', () => {
    const pc = 0x2880;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040003 >>> 0);
    stepOne();
  });
  it('[83834] PC 0x00004360 instr 0x27bdffe8', () => {
    const pc = 0x4360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[83835] PC 0x00004364 instr 0xafbf0014', () => {
    const pc = 0x4364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[83836] PC 0x00004368 instr 0x308400ff', () => {
    const pc = 0x4368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[83837] PC 0x0000436c instr 0x3c0e1f80', () => {
    const pc = 0x436c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[83838] PC 0x00004370 instr 0x0c0009e8', () => {
    const pc = 0x4370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[83839] PC 0x00004374 instr 0xa1c42041', () => {
    const pc = 0x4374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[83840] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[83841] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[83842] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83843] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83844] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83845] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[83846] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[83847] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[83848] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[83849] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[83850] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83851] PC 0x00002884 instr 0x3c010001', () => {
    const pc = 0x2884;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[83852] PC 0x00002888 instr 0xac208910', () => {
    const pc = 0x2888;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac208910 >>> 0);
    stepOne();
  });
  it('[83853] PC 0x0000288c instr 0x3c010001', () => {
    const pc = 0x288c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[83854] PC 0x00002890 instr 0x3c040000', () => {
    const pc = 0x2890;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[83855] PC 0x00002894 instr 0xac20890c', () => {
    const pc = 0x2894;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac20890c >>> 0);
    stepOne();
  });
  it('[83856] PC 0x00002898 instr 0x0c000f38', () => {
    const pc = 0x2898;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000f38 >>> 0);
    stepOne();
  });
  it('[83857] PC 0x0000289c instr 0x24846dc0', () => {
    const pc = 0x289c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24846dc0 >>> 0);
    stepOne();
  });
  it('[83858] PC 0x00003ce0 instr 0x3c0e0000', () => {
    const pc = 0x3ce0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[83859] PC 0x00003ce4 instr 0x8dce7200', () => {
    const pc = 0x3ce4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[83860] PC 0x00003ce8 instr 0x27bdffd8', () => {
    const pc = 0x3ce8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[83861] PC 0x00003cec instr 0xafb1001c', () => {
    const pc = 0x3cec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[83862] PC 0x00003cf0 instr 0x000e7880', () => {
    const pc = 0x3cf0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[83863] PC 0x00003cf4 instr 0x3c110000', () => {
    const pc = 0x3cf4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110000 >>> 0);
    stepOne();
  });
  it('[83864] PC 0x00003cf8 instr 0x01ee7821', () => {
    const pc = 0x3cf8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[83865] PC 0x00003cfc instr 0x26316ee0', () => {
    const pc = 0x3cfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26316ee0 >>> 0);
    stepOne();
  });
  it('[83866] PC 0x00003d00 instr 0x000f7900', () => {
    const pc = 0x3d00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[83867] PC 0x00003d04 instr 0x3c190000', () => {
    const pc = 0x3d04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c190000 >>> 0);
    stepOne();
  });
  it('[83868] PC 0x00003d08 instr 0x27396ee1', () => {
    const pc = 0x3d08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27396ee1 >>> 0);
    stepOne();
  });
  it('[83869] PC 0x00003d0c instr 0x022fc021', () => {
    const pc = 0x3d0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22fc021 >>> 0);
    stepOne();
  });
  it('[83870] PC 0x00003d10 instr 0xafb20020', () => {
    const pc = 0x3d10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[83871] PC 0x00003d14 instr 0xafb00018', () => {
    const pc = 0x3d14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[83872] PC 0x00003d18 instr 0x0319082b', () => {
    const pc = 0x3d18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x319082b >>> 0);
    stepOne();
  });
  it('[83873] PC 0x00003d1c instr 0x00809021', () => {
    const pc = 0x3d1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x809021 >>> 0);
    stepOne();
  });
  it('[83874] PC 0x00003d20 instr 0xafbf0024', () => {
    const pc = 0x3d20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[83875] PC 0x00003d24 instr 0x1420001a', () => {
    const pc = 0x3d24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420001a >>> 0);
    stepOne();
  });
  it('[83876] PC 0x00003d28 instr 0x02208021', () => {
    const pc = 0x3d28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2208021 >>> 0);
    stepOne();
  });
  it('[83877] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83878] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83879] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83880] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83881] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83882] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83883] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83884] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83885] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83886] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83887] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83888] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83889] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83890] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83891] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83892] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83893] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83894] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83895] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83896] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83897] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83898] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83899] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83900] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
});
