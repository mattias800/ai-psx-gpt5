import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 137101-137200', () => {
  beforeAll(() => initOnce());
  it('[137101] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[137102] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[137103] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[137104] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[137105] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137106] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[137107] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137108] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[137109] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[137110] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[137111] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[137112] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[137113] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[137114] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[137115] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[137116] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[137117] PC 0x00004090 instr 0x0c00101b', () => {
    const pc = 0x4090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00101b >>> 0);
    stepOne();
  });
  it('[137118] PC 0x00004094 instr 0x2404000d', () => {
    const pc = 0x4094;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2404000d >>> 0);
    stepOne();
  });
  it('[137119] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[137120] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[137121] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[137122] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[137123] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[137124] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[137125] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[137126] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[137127] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[137128] PC 0x000040e4 instr 0x3c080000', () => {
    const pc = 0x40e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[137129] PC 0x000040e8 instr 0x01194021', () => {
    const pc = 0x40e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1194021 >>> 0);
    stepOne();
  });
  it('[137130] PC 0x000040ec instr 0x810873d1', () => {
    const pc = 0x40ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x810873d1 >>> 0);
    stepOne();
  });
  it('[137131] PC 0x000040f0 instr 0x00000000', () => {
    const pc = 0x40f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137132] PC 0x000040f4 instr 0x31090097', () => {
    const pc = 0x40f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31090097 >>> 0);
    stepOne();
  });
  it('[137133] PC 0x000040f8 instr 0x11200007', () => {
    const pc = 0x40f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11200007 >>> 0);
    stepOne();
  });
  it('[137134] PC 0x000040fc instr 0x24040001', () => {
    const pc = 0x40fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[137135] PC 0x00004118 instr 0x27a50018', () => {
    const pc = 0x4118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50018 >>> 0);
    stepOne();
  });
  it('[137136] PC 0x0000411c instr 0x0c000b25', () => {
    const pc = 0x411c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b25 >>> 0);
    stepOne();
  });
  it('[137137] PC 0x00004120 instr 0x24060001', () => {
    const pc = 0x4120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060001 >>> 0);
    stepOne();
  });
  it('[137138] PC 0x00002c94 instr 0x27bdffd8', () => {
    const pc = 0x2c94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[137139] PC 0x00002c98 instr 0xafbf001c', () => {
    const pc = 0x2c98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[137140] PC 0x00002c9c instr 0xafa5002c', () => {
    const pc = 0x2c9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5002c >>> 0);
    stepOne();
  });
  it('[137141] PC 0x00002ca0 instr 0x0c000c32', () => {
    const pc = 0x2ca0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[137142] PC 0x00002ca4 instr 0xafa60030', () => {
    const pc = 0x2ca4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60030 >>> 0);
    stepOne();
  });
  it('[137143] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[137144] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[137145] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[137146] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[137147] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[137148] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[137149] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[137150] PC 0x000030f0 instr 0x3c0f0001', () => {
    const pc = 0x30f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137151] PC 0x000030f4 instr 0x25ef8648', () => {
    const pc = 0x30f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ef8648 >>> 0);
    stepOne();
  });
  it('[137152] PC 0x000030f8 instr 0x000e7080', () => {
    const pc = 0x30f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[137153] PC 0x000030fc instr 0x01cf1021', () => {
    const pc = 0x30fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1021 >>> 0);
    stepOne();
  });
  it('[137154] PC 0x00003100 instr 0x03e00008', () => {
    const pc = 0x3100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[137155] PC 0x00003104 instr 0x00000000', () => {
    const pc = 0x3104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137156] PC 0x00002ca8 instr 0x10400005', () => {
    const pc = 0x2ca8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[137157] PC 0x00002cac instr 0x00402021', () => {
    const pc = 0x2cac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[137158] PC 0x00002cb0 instr 0x8c4e0000', () => {
    const pc = 0x2cb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0000 >>> 0);
    stepOne();
  });
  it('[137159] PC 0x00002cb4 instr 0x00000000', () => {
    const pc = 0x2cb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137160] PC 0x00002cb8 instr 0x15c00006', () => {
    const pc = 0x2cb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00006 >>> 0);
    stepOne();
  });
  it('[137161] PC 0x00002cbc instr 0x00000000', () => {
    const pc = 0x2cbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137162] PC 0x00002cd4 instr 0x0c000fa0', () => {
    const pc = 0x2cd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000fa0 >>> 0);
    stepOne();
  });
  it('[137163] PC 0x00002cd8 instr 0xafa40024', () => {
    const pc = 0x2cd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[137164] PC 0x00003e80 instr 0x27bdffd8', () => {
    const pc = 0x3e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[137165] PC 0x00003e84 instr 0xafb20020', () => {
    const pc = 0x3e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[137166] PC 0x00003e88 instr 0x3c120001', () => {
    const pc = 0x3e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c120001 >>> 0);
    stepOne();
  });
  it('[137167] PC 0x00003e8c instr 0xafb1001c', () => {
    const pc = 0x3e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[137168] PC 0x00003e90 instr 0x26528648', () => {
    const pc = 0x3e90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26528648 >>> 0);
    stepOne();
  });
  it('[137169] PC 0x00003e94 instr 0xafb00018', () => {
    const pc = 0x3e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[137170] PC 0x00003e98 instr 0x3c110001', () => {
    const pc = 0x3e98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110001 >>> 0);
    stepOne();
  });
  it('[137171] PC 0x00003e9c instr 0xafbf0024', () => {
    const pc = 0x3e9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[137172] PC 0x00003ea0 instr 0x26318908', () => {
    const pc = 0x3ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26318908 >>> 0);
    stepOne();
  });
  it('[137173] PC 0x00003ea4 instr 0x02408021', () => {
    const pc = 0x3ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2408021 >>> 0);
    stepOne();
  });
  it('[137174] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[137175] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137176] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[137177] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[137178] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137179] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[137180] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[137181] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[137182] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137183] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[137184] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137185] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[137186] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[137187] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137188] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[137189] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[137190] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[137191] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137192] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[137193] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137194] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[137195] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[137196] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137197] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[137198] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[137199] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[137200] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
