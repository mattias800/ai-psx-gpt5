import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86101-86200', () => {
  beforeAll(() => initOnce());
  it('[86101] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86102] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86103] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86104] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86105] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86106] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86107] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86108] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86109] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86110] PC 0x000028e8 instr 0x0c000a42', () => {
    const pc = 0x28e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000a42 >>> 0);
    stepOne();
  });
  it('[86111] PC 0x000028ec instr 0x00000000', () => {
    const pc = 0x28ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86112] PC 0x00002908 instr 0x27bdffe8', () => {
    const pc = 0x2908;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[86113] PC 0x0000290c instr 0xafbf0014', () => {
    const pc = 0x290c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[86114] PC 0x00002910 instr 0x0c000b80', () => {
    const pc = 0x2910;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b80 >>> 0);
    stepOne();
  });
  it('[86115] PC 0x00002914 instr 0x00002021', () => {
    const pc = 0x2914;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2021 >>> 0);
    stepOne();
  });
  it('[86116] PC 0x00002e00 instr 0x27bdffd8', () => {
    const pc = 0x2e00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[86117] PC 0x00002e04 instr 0xafa40028', () => {
    const pc = 0x2e04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40028 >>> 0);
    stepOne();
  });
  it('[86118] PC 0x00002e08 instr 0xafbf001c', () => {
    const pc = 0x2e08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[86119] PC 0x00002e0c instr 0x8fa40028', () => {
    const pc = 0x2e0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40028 >>> 0);
    stepOne();
  });
  it('[86120] PC 0x00002e10 instr 0x0c000c32', () => {
    const pc = 0x2e10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[86121] PC 0x00002e14 instr 0x00000000', () => {
    const pc = 0x2e14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86122] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[86123] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[86124] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[86125] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[86126] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[86127] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[86128] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[86129] PC 0x000030f0 instr 0x3c0f0001', () => {
    const pc = 0x30f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[86130] PC 0x000030f4 instr 0x25ef8648', () => {
    const pc = 0x30f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ef8648 >>> 0);
    stepOne();
  });
  it('[86131] PC 0x000030f8 instr 0x000e7080', () => {
    const pc = 0x30f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[86132] PC 0x000030fc instr 0x01cf1021', () => {
    const pc = 0x30fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1021 >>> 0);
    stepOne();
  });
  it('[86133] PC 0x00003100 instr 0x03e00008', () => {
    const pc = 0x3100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86134] PC 0x00003104 instr 0x00000000', () => {
    const pc = 0x3104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86135] PC 0x00002e18 instr 0x10400005', () => {
    const pc = 0x2e18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[86136] PC 0x00002e1c instr 0x00402021', () => {
    const pc = 0x2e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[86137] PC 0x00002e20 instr 0x8c4e0000', () => {
    const pc = 0x2e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0000 >>> 0);
    stepOne();
  });
  it('[86138] PC 0x00002e24 instr 0x00000000', () => {
    const pc = 0x2e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86139] PC 0x00002e28 instr 0x15c00006', () => {
    const pc = 0x2e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00006 >>> 0);
    stepOne();
  });
  it('[86140] PC 0x00002e2c instr 0x00000000', () => {
    const pc = 0x2e2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86141] PC 0x00002e30 instr 0x240f0009', () => {
    const pc = 0x2e30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240f0009 >>> 0);
    stepOne();
  });
  it('[86142] PC 0x00002e34 instr 0x3c010001', () => {
    const pc = 0x2e34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[86143] PC 0x00002e38 instr 0xac2f8640', () => {
    const pc = 0x2e38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2f8640 >>> 0);
    stepOne();
  });
  it('[86144] PC 0x00002e3c instr 0x10000012', () => {
    const pc = 0x2e3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000012 >>> 0);
    stepOne();
  });
  it('[86145] PC 0x00002e40 instr 0x2402ffff', () => {
    const pc = 0x2e40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2402ffff >>> 0);
    stepOne();
  });
  it('[86146] PC 0x00002e88 instr 0x8fbf001c', () => {
    const pc = 0x2e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[86147] PC 0x00002e8c instr 0x27bd0028', () => {
    const pc = 0x2e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[86148] PC 0x00002e90 instr 0x03e00008', () => {
    const pc = 0x2e90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86149] PC 0x00002e94 instr 0x00000000', () => {
    const pc = 0x2e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86150] PC 0x00002918 instr 0x0c000b80', () => {
    const pc = 0x2918;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b80 >>> 0);
    stepOne();
  });
  it('[86151] PC 0x0000291c instr 0x24040001', () => {
    const pc = 0x291c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[86152] PC 0x00002e00 instr 0x27bdffd8', () => {
    const pc = 0x2e00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[86153] PC 0x00002e04 instr 0xafa40028', () => {
    const pc = 0x2e04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40028 >>> 0);
    stepOne();
  });
  it('[86154] PC 0x00002e08 instr 0xafbf001c', () => {
    const pc = 0x2e08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[86155] PC 0x00002e0c instr 0x8fa40028', () => {
    const pc = 0x2e0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40028 >>> 0);
    stepOne();
  });
  it('[86156] PC 0x00002e10 instr 0x0c000c32', () => {
    const pc = 0x2e10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[86157] PC 0x00002e14 instr 0x00000000', () => {
    const pc = 0x2e14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86158] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[86159] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[86160] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[86161] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[86162] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[86163] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[86164] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[86165] PC 0x000030f0 instr 0x3c0f0001', () => {
    const pc = 0x30f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[86166] PC 0x000030f4 instr 0x25ef8648', () => {
    const pc = 0x30f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ef8648 >>> 0);
    stepOne();
  });
  it('[86167] PC 0x000030f8 instr 0x000e7080', () => {
    const pc = 0x30f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[86168] PC 0x000030fc instr 0x01cf1021', () => {
    const pc = 0x30fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1021 >>> 0);
    stepOne();
  });
  it('[86169] PC 0x00003100 instr 0x03e00008', () => {
    const pc = 0x3100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86170] PC 0x00003104 instr 0x00000000', () => {
    const pc = 0x3104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86171] PC 0x00002e18 instr 0x10400005', () => {
    const pc = 0x2e18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[86172] PC 0x00002e1c instr 0x00402021', () => {
    const pc = 0x2e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[86173] PC 0x00002e20 instr 0x8c4e0000', () => {
    const pc = 0x2e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0000 >>> 0);
    stepOne();
  });
  it('[86174] PC 0x00002e24 instr 0x00000000', () => {
    const pc = 0x2e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86175] PC 0x00002e28 instr 0x15c00006', () => {
    const pc = 0x2e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00006 >>> 0);
    stepOne();
  });
  it('[86176] PC 0x00002e2c instr 0x00000000', () => {
    const pc = 0x2e2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86177] PC 0x00002e30 instr 0x240f0009', () => {
    const pc = 0x2e30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240f0009 >>> 0);
    stepOne();
  });
  it('[86178] PC 0x00002e34 instr 0x3c010001', () => {
    const pc = 0x2e34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[86179] PC 0x00002e38 instr 0xac2f8640', () => {
    const pc = 0x2e38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2f8640 >>> 0);
    stepOne();
  });
  it('[86180] PC 0x00002e3c instr 0x10000012', () => {
    const pc = 0x2e3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000012 >>> 0);
    stepOne();
  });
  it('[86181] PC 0x00002e40 instr 0x2402ffff', () => {
    const pc = 0x2e40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2402ffff >>> 0);
    stepOne();
  });
  it('[86182] PC 0x00002e88 instr 0x8fbf001c', () => {
    const pc = 0x2e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[86183] PC 0x00002e8c instr 0x27bd0028', () => {
    const pc = 0x2e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[86184] PC 0x00002e90 instr 0x03e00008', () => {
    const pc = 0x2e90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86185] PC 0x00002e94 instr 0x00000000', () => {
    const pc = 0x2e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86186] PC 0x00002920 instr 0x3c040000', () => {
    const pc = 0x2920;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[86187] PC 0x00002924 instr 0x24846dc4', () => {
    const pc = 0x2924;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24846dc4 >>> 0);
    stepOne();
  });
  it('[86188] PC 0x00002928 instr 0x0c000a56', () => {
    const pc = 0x2928;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000a56 >>> 0);
    stepOne();
  });
  it('[86189] PC 0x0000292c instr 0x24050001', () => {
    const pc = 0x292c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050001 >>> 0);
    stepOne();
  });
  it('[86190] PC 0x00002958 instr 0x27bdffc8', () => {
    const pc = 0x2958;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffc8 >>> 0);
    stepOne();
  });
  it('[86191] PC 0x0000295c instr 0xafbf001c', () => {
    const pc = 0x295c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[86192] PC 0x00002960 instr 0xafa40038', () => {
    const pc = 0x2960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40038 >>> 0);
    stepOne();
  });
  it('[86193] PC 0x00002964 instr 0x0c000c18', () => {
    const pc = 0x2964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c18 >>> 0);
    stepOne();
  });
  it('[86194] PC 0x00002968 instr 0xafa5003c', () => {
    const pc = 0x2968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5003c >>> 0);
    stepOne();
  });
  it('[86195] PC 0x00003060 instr 0x27bdffe8', () => {
    const pc = 0x3060;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[86196] PC 0x00003064 instr 0x3c030001', () => {
    const pc = 0x3064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c030001 >>> 0);
    stepOne();
  });
  it('[86197] PC 0x00003068 instr 0x3c020001', () => {
    const pc = 0x3068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[86198] PC 0x0000306c instr 0xafbf0014', () => {
    const pc = 0x306c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[86199] PC 0x00003070 instr 0x24428908', () => {
    const pc = 0x3070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24428908 >>> 0);
    stepOne();
  });
  it('[86200] PC 0x00003074 instr 0x24638648', () => {
    const pc = 0x3074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24638648 >>> 0);
    stepOne();
  });
});
