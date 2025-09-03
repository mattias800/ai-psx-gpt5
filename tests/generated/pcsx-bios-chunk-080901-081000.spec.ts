import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 80901-81000', () => {
  beforeAll(() => initOnce());
  it('[80901] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[80902] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80903] PC 0x00000f2c instr 0x3c020000', () => {
    const pc = 0xf2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[80904] PC 0x00000f30 instr 0x24426cf4', () => {
    const pc = 0xf30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24426cf4 >>> 0);
    stepOne();
  });
  it('[80905] PC 0x00000f34 instr 0x3c010000', () => {
    const pc = 0xf34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[80906] PC 0x00000f38 instr 0x03e00008', () => {
    const pc = 0xf38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[80907] PC 0x00000f3c instr 0xac2275d0', () => {
    const pc = 0xf3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2275d0 >>> 0);
    stepOne();
  });
  it('[80908] PC 0xbfc0686c instr 0x0ff00698', () => {
    const pc = 0xbfc0686c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[80909] PC 0xbfc06870 instr 0x24040004', () => {
    const pc = 0xbfc06870;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040004 >>> 0);
    stepOne();
  });
  it('[80910] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[80911] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[80912] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[80913] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[80914] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[80915] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[80916] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[80917] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[80918] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[80919] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[80920] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[80921] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[80922] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[80923] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[80924] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[80925] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[80926] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80927] PC 0xbfc06874 instr 0x3c021f80', () => {
    const pc = 0xbfc06874;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c021f80 >>> 0);
    stepOne();
  });
  it('[80928] PC 0xbfc06878 instr 0x34421c00', () => {
    const pc = 0xbfc06878;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34421c00 >>> 0);
    stepOne();
  });
  it('[80929] PC 0xbfc0687c instr 0xa4400186', () => {
    const pc = 0xbfc0687c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400186 >>> 0);
    stepOne();
  });
  it('[80930] PC 0xbfc06880 instr 0xa4400184', () => {
    const pc = 0xbfc06880;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400184 >>> 0);
    stepOne();
  });
  it('[80931] PC 0xbfc06884 instr 0x3c031f80', () => {
    const pc = 0xbfc06884;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c031f80 >>> 0);
    stepOne();
  });
  it('[80932] PC 0xbfc06888 instr 0xa4400182', () => {
    const pc = 0xbfc06888;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400182 >>> 0);
    stepOne();
  });
  it('[80933] PC 0xbfc0688c instr 0x34631070', () => {
    const pc = 0xbfc0688c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34631070 >>> 0);
    stepOne();
  });
  it('[80934] PC 0xbfc06890 instr 0xa4400180', () => {
    const pc = 0xbfc06890;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400180 >>> 0);
    stepOne();
  });
  it('[80935] PC 0xbfc06894 instr 0xac600004', () => {
    const pc = 0xbfc06894;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac600004 >>> 0);
    stepOne();
  });
  it('[80936] PC 0xbfc06898 instr 0xac600000', () => {
    const pc = 0xbfc06898;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac600000 >>> 0);
    stepOne();
  });
  it('[80937] PC 0xbfc0689c instr 0x3c04a001', () => {
    const pc = 0xbfc0689c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04a001 >>> 0);
    stepOne();
  });
  it('[80938] PC 0xbfc068a0 instr 0x8c84b9b0', () => {
    const pc = 0xbfc068a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c84b9b0 >>> 0);
    stepOne();
  });
  it('[80939] PC 0xbfc068a4 instr 0x0ff036cc', () => {
    const pc = 0xbfc068a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036cc >>> 0);
    stepOne();
  });
  it('[80940] PC 0xbfc068a8 instr 0x00000000', () => {
    const pc = 0xbfc068a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80941] PC 0xbfc0db30 instr 0x240a00c0', () => {
    const pc = 0xbfc0db30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[80942] PC 0xbfc0db34 instr 0x01400008', () => {
    const pc = 0xbfc0db34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[80943] PC 0xbfc0db38 instr 0x24090012', () => {
    const pc = 0xbfc0db38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090012 >>> 0);
    stepOne();
  });
  it('[80944] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[80945] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[80946] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[80947] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80948] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[80949] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[80950] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[80951] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[80952] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[80953] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80954] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[80955] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80956] PC 0x000027c0 instr 0x27bdffe0', () => {
    const pc = 0x27c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe0 >>> 0);
    stepOne();
  });
  it('[80957] PC 0x000027c4 instr 0xafa40020', () => {
    const pc = 0x27c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40020 >>> 0);
    stepOne();
  });
  it('[80958] PC 0x000027c8 instr 0x8fae0020', () => {
    const pc = 0x27c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fae0020 >>> 0);
    stepOne();
  });
  it('[80959] PC 0x000027cc instr 0x3c010001', () => {
    const pc = 0x27cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[80960] PC 0x000027d0 instr 0x3c040001', () => {
    const pc = 0x27d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040001 >>> 0);
    stepOne();
  });
  it('[80961] PC 0x000027d4 instr 0xac2e8908', () => {
    const pc = 0x27d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e8908 >>> 0);
    stepOne();
  });
  it('[80962] PC 0x000027d8 instr 0x24848648', () => {
    const pc = 0x27d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24848648 >>> 0);
    stepOne();
  });
  it('[80963] PC 0x000027dc instr 0x3c01a000', () => {
    const pc = 0x27dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[80964] PC 0x000027e0 instr 0xac240140', () => {
    const pc = 0x27e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac240140 >>> 0);
    stepOne();
  });
  it('[80965] PC 0x000027e4 instr 0x3c190000', () => {
    const pc = 0x27e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c190000 >>> 0);
    stepOne();
  });
  it('[80966] PC 0x000027e8 instr 0x8f397200', () => {
    const pc = 0x27e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f397200 >>> 0);
    stepOne();
  });
  it('[80967] PC 0x000027ec instr 0x3c01a000', () => {
    const pc = 0x27ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[80968] PC 0x000027f0 instr 0x240f02c0', () => {
    const pc = 0x27f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240f02c0 >>> 0);
    stepOne();
  });
  it('[80969] PC 0x000027f4 instr 0xac2f0144', () => {
    const pc = 0x27f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2f0144 >>> 0);
    stepOne();
  });
  it('[80970] PC 0x000027f8 instr 0x3c180000', () => {
    const pc = 0x27f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c180000 >>> 0);
    stepOne();
  });
  it('[80971] PC 0x000027fc instr 0x27186ee0', () => {
    const pc = 0x27fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27186ee0 >>> 0);
    stepOne();
  });
  it('[80972] PC 0x00002800 instr 0x3c01a000', () => {
    const pc = 0x2800;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[80973] PC 0x00002804 instr 0x00194080', () => {
    const pc = 0x2804;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x194080 >>> 0);
    stepOne();
  });
  it('[80974] PC 0x00002808 instr 0xac380150', () => {
    const pc = 0x2808;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac380150 >>> 0);
    stepOne();
  });
  it('[80975] PC 0x0000280c instr 0x01194021', () => {
    const pc = 0x280c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1194021 >>> 0);
    stepOne();
  });
  it('[80976] PC 0x00002810 instr 0xafbf001c', () => {
    const pc = 0x2810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[80977] PC 0x00002814 instr 0x00084100', () => {
    const pc = 0x2814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x84100 >>> 0);
    stepOne();
  });
  it('[80978] PC 0x00002818 instr 0x3c01a000', () => {
    const pc = 0x2818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[80979] PC 0x0000281c instr 0xac280154', () => {
    const pc = 0x281c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac280154 >>> 0);
    stepOne();
  });
  it('[80980] PC 0x00002820 instr 0x0c000854', () => {
    const pc = 0x2820;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000854 >>> 0);
    stepOne();
  });
  it('[80981] PC 0x00002824 instr 0x240502c0', () => {
    const pc = 0x2824;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240502c0 >>> 0);
    stepOne();
  });
  it('[80982] PC 0x00002150 instr 0x10800003', () => {
    const pc = 0x2150;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[80983] PC 0x00002154 instr 0x00000000', () => {
    const pc = 0x2154;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80984] PC 0x00002158 instr 0x1ca00003', () => {
    const pc = 0x2158;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca00003 >>> 0);
    stepOne();
  });
  it('[80985] PC 0x0000215c instr 0x00000000', () => {
    const pc = 0x215c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[80986] PC 0x00002168 instr 0x18a00005', () => {
    const pc = 0x2168;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18a00005 >>> 0);
    stepOne();
  });
  it('[80987] PC 0x0000216c instr 0x00801821', () => {
    const pc = 0x216c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[80988] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[80989] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[80990] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[80991] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[80992] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[80993] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[80994] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[80995] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[80996] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[80997] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[80998] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[80999] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[81000] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
