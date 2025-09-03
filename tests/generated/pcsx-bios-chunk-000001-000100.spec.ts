import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 1-100', () => {
  beforeAll(() => initOnce());
  it('[1] PC 0xbfc00000 instr 0x3c080013', () => {
    const pc = 0xbfc00000;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080013 >>> 0);
    stepOne();
  });
  it('[2] PC 0xbfc00004 instr 0x3508243f', () => {
    const pc = 0xbfc00004;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3508243f >>> 0);
    stepOne();
  });
  it('[3] PC 0xbfc00008 instr 0x3c011f80', () => {
    const pc = 0xbfc00008;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c011f80 >>> 0);
    stepOne();
  });
  it('[4] PC 0xbfc0000c instr 0xac281010', () => {
    const pc = 0xbfc0000c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac281010 >>> 0);
    stepOne();
  });
  it('[5] PC 0xbfc00010 instr 0x00000000', () => {
    const pc = 0xbfc00010;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6] PC 0xbfc00014 instr 0x24080b88', () => {
    const pc = 0xbfc00014;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080b88 >>> 0);
    stepOne();
  });
  it('[7] PC 0xbfc00018 instr 0x3c011f80', () => {
    const pc = 0xbfc00018;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c011f80 >>> 0);
    stepOne();
  });
  it('[8] PC 0xbfc0001c instr 0xac281060', () => {
    const pc = 0xbfc0001c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac281060 >>> 0);
    stepOne();
  });
  it('[9] PC 0xbfc00020 instr 0x00000000', () => {
    const pc = 0xbfc00020;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[10] PC 0xbfc00024 instr 0x00000000', () => {
    const pc = 0xbfc00024;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[11] PC 0xbfc00028 instr 0x00000000', () => {
    const pc = 0xbfc00028;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[12] PC 0xbfc0002c instr 0x00000000', () => {
    const pc = 0xbfc0002c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13] PC 0xbfc00030 instr 0x00000000', () => {
    const pc = 0xbfc00030;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[14] PC 0xbfc00034 instr 0x00000000', () => {
    const pc = 0xbfc00034;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[15] PC 0xbfc00038 instr 0x00000000', () => {
    const pc = 0xbfc00038;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[16] PC 0xbfc0003c instr 0x00000000', () => {
    const pc = 0xbfc0003c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17] PC 0xbfc00040 instr 0x00000000', () => {
    const pc = 0xbfc00040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[18] PC 0xbfc00044 instr 0x00000000', () => {
    const pc = 0xbfc00044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[19] PC 0xbfc00048 instr 0x00000000', () => {
    const pc = 0xbfc00048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[20] PC 0xbfc0004c instr 0x00000000', () => {
    const pc = 0xbfc0004c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[21] PC 0xbfc00050 instr 0x00000000', () => {
    const pc = 0xbfc00050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[22] PC 0xbfc00054 instr 0x00000000', () => {
    const pc = 0xbfc00054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[23] PC 0xbfc00058 instr 0x00000000', () => {
    const pc = 0xbfc00058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[24] PC 0xbfc0005c instr 0x00000000', () => {
    const pc = 0xbfc0005c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[25] PC 0xbfc00060 instr 0x00000000', () => {
    const pc = 0xbfc00060;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[26] PC 0xbfc00064 instr 0x00000000', () => {
    const pc = 0xbfc00064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[27] PC 0xbfc00068 instr 0x00000000', () => {
    const pc = 0xbfc00068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[28] PC 0xbfc0006c instr 0x00000000', () => {
    const pc = 0xbfc0006c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[29] PC 0xbfc00070 instr 0x0bf00054', () => {
    const pc = 0xbfc00070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xbf00054 >>> 0);
    stepOne();
  });
  it('[30] PC 0xbfc00074 instr 0x00000000', () => {
    const pc = 0xbfc00074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[31] PC 0xbfc00150 instr 0x3c091f80', () => {
    const pc = 0xbfc00150;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c091f80 >>> 0);
    stepOne();
  });
  it('[32] PC 0xbfc00154 instr 0x35291000', () => {
    const pc = 0xbfc00154;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35291000 >>> 0);
    stepOne();
  });
  it('[33] PC 0xbfc00158 instr 0x3c080003', () => {
    const pc = 0xbfc00158;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080003 >>> 0);
    stepOne();
  });
  it('[34] PC 0xbfc0015c instr 0x35081125', () => {
    const pc = 0xbfc0015c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35081125 >>> 0);
    stepOne();
  });
  it('[35] PC 0xbfc00160 instr 0xad280020', () => {
    const pc = 0xbfc00160;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280020 >>> 0);
    stepOne();
  });
  it('[36] PC 0xbfc00164 instr 0x3c081f00', () => {
    const pc = 0xbfc00164;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c081f00 >>> 0);
    stepOne();
  });
  it('[37] PC 0xbfc00168 instr 0xad280000', () => {
    const pc = 0xbfc00168;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280000 >>> 0);
    stepOne();
  });
  it('[38] PC 0xbfc0016c instr 0x3c081f80', () => {
    const pc = 0xbfc0016c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c081f80 >>> 0);
    stepOne();
  });
  it('[39] PC 0xbfc00170 instr 0x35082000', () => {
    const pc = 0xbfc00170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35082000 >>> 0);
    stepOne();
  });
  it('[40] PC 0xbfc00174 instr 0xad280004', () => {
    const pc = 0xbfc00174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280004 >>> 0);
    stepOne();
  });
  it('[41] PC 0xbfc00178 instr 0x3c080013', () => {
    const pc = 0xbfc00178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080013 >>> 0);
    stepOne();
  });
  it('[42] PC 0xbfc0017c instr 0x3508243f', () => {
    const pc = 0xbfc0017c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3508243f >>> 0);
    stepOne();
  });
  it('[43] PC 0xbfc00180 instr 0xad280008', () => {
    const pc = 0xbfc00180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280008 >>> 0);
    stepOne();
  });
  it('[44] PC 0xbfc00184 instr 0x3c082009', () => {
    const pc = 0xbfc00184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c082009 >>> 0);
    stepOne();
  });
  it('[45] PC 0xbfc00188 instr 0x350831e1', () => {
    const pc = 0xbfc00188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x350831e1 >>> 0);
    stepOne();
  });
  it('[46] PC 0xbfc0018c instr 0xad280014', () => {
    const pc = 0xbfc0018c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280014 >>> 0);
    stepOne();
  });
  it('[47] PC 0xbfc00190 instr 0x3c080002', () => {
    const pc = 0xbfc00190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080002 >>> 0);
    stepOne();
  });
  it('[48] PC 0xbfc00194 instr 0x35080843', () => {
    const pc = 0xbfc00194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35080843 >>> 0);
    stepOne();
  });
  it('[49] PC 0xbfc00198 instr 0xad280018', () => {
    const pc = 0xbfc00198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad280018 >>> 0);
    stepOne();
  });
  it('[50] PC 0xbfc0019c instr 0x24083022', () => {
    const pc = 0xbfc0019c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24083022 >>> 0);
    stepOne();
  });
  it('[51] PC 0xbfc001a0 instr 0xad28000c', () => {
    const pc = 0xbfc001a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad28000c >>> 0);
    stepOne();
  });
  it('[52] PC 0xbfc001a4 instr 0x3c080007', () => {
    const pc = 0xbfc001a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080007 >>> 0);
    stepOne();
  });
  it('[53] PC 0xbfc001a8 instr 0x35080777', () => {
    const pc = 0xbfc001a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35080777 >>> 0);
    stepOne();
  });
  it('[54] PC 0xbfc001ac instr 0xad28001c', () => {
    const pc = 0xbfc001ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad28001c >>> 0);
    stepOne();
  });
  it('[55] PC 0xbfc001b0 instr 0x00000825', () => {
    const pc = 0xbfc001b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x825 >>> 0);
    stepOne();
  });
  it('[56] PC 0xbfc001b4 instr 0x00001025', () => {
    const pc = 0xbfc001b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1025 >>> 0);
    stepOne();
  });
  it('[57] PC 0xbfc001b8 instr 0x00001825', () => {
    const pc = 0xbfc001b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1825 >>> 0);
    stepOne();
  });
  it('[58] PC 0xbfc001bc instr 0x00002025', () => {
    const pc = 0xbfc001bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2025 >>> 0);
    stepOne();
  });
  it('[59] PC 0xbfc001c0 instr 0x00002825', () => {
    const pc = 0xbfc001c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2825 >>> 0);
    stepOne();
  });
  it('[60] PC 0xbfc001c4 instr 0x00003025', () => {
    const pc = 0xbfc001c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3025 >>> 0);
    stepOne();
  });
  it('[61] PC 0xbfc001c8 instr 0x00003825', () => {
    const pc = 0xbfc001c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3825 >>> 0);
    stepOne();
  });
  it('[62] PC 0xbfc001cc instr 0x00004025', () => {
    const pc = 0xbfc001cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4025 >>> 0);
    stepOne();
  });
  it('[63] PC 0xbfc001d0 instr 0x00004825', () => {
    const pc = 0xbfc001d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4825 >>> 0);
    stepOne();
  });
  it('[64] PC 0xbfc001d4 instr 0x00005025', () => {
    const pc = 0xbfc001d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5025 >>> 0);
    stepOne();
  });
  it('[65] PC 0xbfc001d8 instr 0x00005825', () => {
    const pc = 0xbfc001d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5825 >>> 0);
    stepOne();
  });
  it('[66] PC 0xbfc001dc instr 0x00006025', () => {
    const pc = 0xbfc001dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x6025 >>> 0);
    stepOne();
  });
  it('[67] PC 0xbfc001e0 instr 0x00006825', () => {
    const pc = 0xbfc001e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x6825 >>> 0);
    stepOne();
  });
  it('[68] PC 0xbfc001e4 instr 0x00007025', () => {
    const pc = 0xbfc001e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x7025 >>> 0);
    stepOne();
  });
  it('[69] PC 0xbfc001e8 instr 0x00007825', () => {
    const pc = 0xbfc001e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x7825 >>> 0);
    stepOne();
  });
  it('[70] PC 0xbfc001ec instr 0x00008025', () => {
    const pc = 0xbfc001ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8025 >>> 0);
    stepOne();
  });
  it('[71] PC 0xbfc001f0 instr 0x00008825', () => {
    const pc = 0xbfc001f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8825 >>> 0);
    stepOne();
  });
  it('[72] PC 0xbfc001f4 instr 0x00009025', () => {
    const pc = 0xbfc001f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9025 >>> 0);
    stepOne();
  });
  it('[73] PC 0xbfc001f8 instr 0x00009825', () => {
    const pc = 0xbfc001f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9825 >>> 0);
    stepOne();
  });
  it('[74] PC 0xbfc001fc instr 0x0000a025', () => {
    const pc = 0xbfc001fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa025 >>> 0);
    stepOne();
  });
  it('[75] PC 0xbfc00200 instr 0x0000a825', () => {
    const pc = 0xbfc00200;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa825 >>> 0);
    stepOne();
  });
  it('[76] PC 0xbfc00204 instr 0x0000b025', () => {
    const pc = 0xbfc00204;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xb025 >>> 0);
    stepOne();
  });
  it('[77] PC 0xbfc00208 instr 0x0000b825', () => {
    const pc = 0xbfc00208;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xb825 >>> 0);
    stepOne();
  });
  it('[78] PC 0xbfc0020c instr 0x0000c025', () => {
    const pc = 0xbfc0020c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc025 >>> 0);
    stepOne();
  });
  it('[79] PC 0xbfc00210 instr 0x0000c825', () => {
    const pc = 0xbfc00210;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc825 >>> 0);
    stepOne();
  });
  it('[80] PC 0xbfc00214 instr 0x0000d025', () => {
    const pc = 0xbfc00214;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd025 >>> 0);
    stepOne();
  });
  it('[81] PC 0xbfc00218 instr 0x0000d825', () => {
    const pc = 0xbfc00218;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd825 >>> 0);
    stepOne();
  });
  it('[82] PC 0xbfc0021c instr 0x0000e025', () => {
    const pc = 0xbfc0021c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe025 >>> 0);
    stepOne();
  });
  it('[83] PC 0xbfc00220 instr 0x0000e825', () => {
    const pc = 0xbfc00220;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe825 >>> 0);
    stepOne();
  });
  it('[84] PC 0xbfc00224 instr 0x0000f025', () => {
    const pc = 0xbfc00224;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf025 >>> 0);
    stepOne();
  });
  it('[85] PC 0xbfc00228 instr 0x0000f825', () => {
    const pc = 0xbfc00228;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf825 >>> 0);
    stepOne();
  });
  it('[86] PC 0xbfc0022c instr 0x24090804', () => {
    const pc = 0xbfc0022c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090804 >>> 0);
    stepOne();
  });
  it('[87] PC 0xbfc00230 instr 0x3c01fffe', () => {
    const pc = 0xbfc00230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01fffe >>> 0);
    stepOne();
  });
  it('[88] PC 0xbfc00234 instr 0xac290130', () => {
    const pc = 0xbfc00234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac290130 >>> 0);
    stepOne();
  });
  it('[89] PC 0xbfc00238 instr 0x3c0c0001', () => {
    const pc = 0xbfc00238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0c0001 >>> 0);
    stepOne();
  });
  it('[90] PC 0xbfc0023c instr 0x408c6000', () => {
    const pc = 0xbfc0023c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x408c6000 >>> 0);
    stepOne();
  });
  it('[91] PC 0xbfc00240 instr 0x00000000', () => {
    const pc = 0xbfc00240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[92] PC 0xbfc00244 instr 0x00000000', () => {
    const pc = 0xbfc00244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93] PC 0xbfc00248 instr 0x240a0000', () => {
    const pc = 0xbfc00248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a0000 >>> 0);
    stepOne();
  });
  it('[94] PC 0xbfc0024c instr 0x240b0f80', () => {
    const pc = 0xbfc0024c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0f80 >>> 0);
    stepOne();
  });
  it('[95] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[96] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[97] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[98] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[99] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[100] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
});
