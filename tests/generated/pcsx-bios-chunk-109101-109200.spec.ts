import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 109101-109200', () => {
  beforeAll(() => initOnce());
  it('[109101] PC 0x00002df8 instr 0x03e00008', () => {
    const pc = 0x2df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[109102] PC 0x00002dfc instr 0x00000000', () => {
    const pc = 0x2dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109103] PC 0x00004124 instr 0x8fbf0014', () => {
    const pc = 0x4124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[109104] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[109105] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[109106] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109107] PC 0xbfc00e6c instr 0x2407002a', () => {
    const pc = 0xbfc00e6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[109108] PC 0xbfc00e70 instr 0x24080044', () => {
    const pc = 0xbfc00e70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[109109] PC 0xbfc00e74 instr 0x24090032', () => {
    const pc = 0xbfc00e74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[109110] PC 0xbfc00e78 instr 0x240a002d', () => {
    const pc = 0xbfc00e78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[109111] PC 0xbfc00e7c instr 0x240b0020', () => {
    const pc = 0xbfc00e7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[109112] PC 0xbfc00e80 instr 0x240c0023', () => {
    const pc = 0xbfc00e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[109113] PC 0xbfc00e84 instr 0x240d002b', () => {
    const pc = 0xbfc00e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[109114] PC 0xbfc00e88 instr 0x1000028e', () => {
    const pc = 0xbfc00e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000028e >>> 0);
    stepOne();
  });
  it('[109115] PC 0xbfc00e8c instr 0x241f0030', () => {
    const pc = 0xbfc00e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[109116] PC 0xbfc018c4 instr 0x1000fd55', () => {
    const pc = 0xbfc018c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000fd55 >>> 0);
    stepOne();
  });
  it('[109117] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[109118] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[109119] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109120] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[109121] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[109122] PC 0xbfc00e5c instr 0x1081000d', () => {
    const pc = 0xbfc00e5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1081000d >>> 0);
    stepOne();
  });
  it('[109123] PC 0xbfc00e60 instr 0x00008821', () => {
    const pc = 0xbfc00e60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8821 >>> 0);
    stepOne();
  });
  it('[109124] PC 0xbfc00e64 instr 0x0ff03620', () => {
    const pc = 0xbfc00e64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff03620 >>> 0);
    stepOne();
  });
  it('[109125] PC 0xbfc00e68 instr 0x00000000', () => {
    const pc = 0xbfc00e68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109126] PC 0xbfc0d880 instr 0x240a00b0', () => {
    const pc = 0xbfc0d880;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[109127] PC 0xbfc0d884 instr 0x01400008', () => {
    const pc = 0xbfc0d884;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[109128] PC 0xbfc0d888 instr 0x2409003d', () => {
    const pc = 0xbfc0d888;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409003d >>> 0);
    stepOne();
  });
  it('[109129] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[109130] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[109131] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[109132] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109133] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[109134] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[109135] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[109136] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[109137] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[109138] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109139] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[109140] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109141] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[109142] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[109143] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[109144] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[109145] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[109146] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[109147] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[109148] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[109149] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[109150] PC 0x000040e4 instr 0x3c080000', () => {
    const pc = 0x40e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[109151] PC 0x000040e8 instr 0x01194021', () => {
    const pc = 0x40e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1194021 >>> 0);
    stepOne();
  });
  it('[109152] PC 0x000040ec instr 0x810873d1', () => {
    const pc = 0x40ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x810873d1 >>> 0);
    stepOne();
  });
  it('[109153] PC 0x000040f0 instr 0x00000000', () => {
    const pc = 0x40f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109154] PC 0x000040f4 instr 0x31090097', () => {
    const pc = 0x40f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31090097 >>> 0);
    stepOne();
  });
  it('[109155] PC 0x000040f8 instr 0x11200007', () => {
    const pc = 0x40f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11200007 >>> 0);
    stepOne();
  });
  it('[109156] PC 0x000040fc instr 0x24040001', () => {
    const pc = 0x40fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[109157] PC 0x00004100 instr 0x3c0a0001', () => {
    const pc = 0x4100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[109158] PC 0x00004104 instr 0x8d4a8910', () => {
    const pc = 0x4104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a8910 >>> 0);
    stepOne();
  });
  it('[109159] PC 0x00004108 instr 0x3c010001', () => {
    const pc = 0x4108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[109160] PC 0x0000410c instr 0x254b0001', () => {
    const pc = 0x410c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x254b0001 >>> 0);
    stepOne();
  });
  it('[109161] PC 0x00004110 instr 0xac2b8910', () => {
    const pc = 0x4110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2b8910 >>> 0);
    stepOne();
  });
  it('[109162] PC 0x00004114 instr 0x24040001', () => {
    const pc = 0x4114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[109163] PC 0x00004118 instr 0x27a50018', () => {
    const pc = 0x4118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50018 >>> 0);
    stepOne();
  });
  it('[109164] PC 0x0000411c instr 0x0c000b25', () => {
    const pc = 0x411c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b25 >>> 0);
    stepOne();
  });
  it('[109165] PC 0x00004120 instr 0x24060001', () => {
    const pc = 0x4120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060001 >>> 0);
    stepOne();
  });
  it('[109166] PC 0x00002c94 instr 0x27bdffd8', () => {
    const pc = 0x2c94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[109167] PC 0x00002c98 instr 0xafbf001c', () => {
    const pc = 0x2c98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[109168] PC 0x00002c9c instr 0xafa5002c', () => {
    const pc = 0x2c9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5002c >>> 0);
    stepOne();
  });
  it('[109169] PC 0x00002ca0 instr 0x0c000c32', () => {
    const pc = 0x2ca0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[109170] PC 0x00002ca4 instr 0xafa60030', () => {
    const pc = 0x2ca4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60030 >>> 0);
    stepOne();
  });
  it('[109171] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[109172] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[109173] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[109174] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[109175] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[109176] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[109177] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[109178] PC 0x000030f0 instr 0x3c0f0001', () => {
    const pc = 0x30f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[109179] PC 0x000030f4 instr 0x25ef8648', () => {
    const pc = 0x30f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ef8648 >>> 0);
    stepOne();
  });
  it('[109180] PC 0x000030f8 instr 0x000e7080', () => {
    const pc = 0x30f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[109181] PC 0x000030fc instr 0x01cf1021', () => {
    const pc = 0x30fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1021 >>> 0);
    stepOne();
  });
  it('[109182] PC 0x00003100 instr 0x03e00008', () => {
    const pc = 0x3100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[109183] PC 0x00003104 instr 0x00000000', () => {
    const pc = 0x3104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109184] PC 0x00002ca8 instr 0x10400005', () => {
    const pc = 0x2ca8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[109185] PC 0x00002cac instr 0x00402021', () => {
    const pc = 0x2cac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[109186] PC 0x00002cb0 instr 0x8c4e0000', () => {
    const pc = 0x2cb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0000 >>> 0);
    stepOne();
  });
  it('[109187] PC 0x00002cb4 instr 0x00000000', () => {
    const pc = 0x2cb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109188] PC 0x00002cb8 instr 0x15c00006', () => {
    const pc = 0x2cb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00006 >>> 0);
    stepOne();
  });
  it('[109189] PC 0x00002cbc instr 0x00000000', () => {
    const pc = 0x2cbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[109190] PC 0x00002cd4 instr 0x0c000fa0', () => {
    const pc = 0x2cd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000fa0 >>> 0);
    stepOne();
  });
  it('[109191] PC 0x00002cd8 instr 0xafa40024', () => {
    const pc = 0x2cd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[109192] PC 0x00003e80 instr 0x27bdffd8', () => {
    const pc = 0x3e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[109193] PC 0x00003e84 instr 0xafb20020', () => {
    const pc = 0x3e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[109194] PC 0x00003e88 instr 0x3c120001', () => {
    const pc = 0x3e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c120001 >>> 0);
    stepOne();
  });
  it('[109195] PC 0x00003e8c instr 0xafb1001c', () => {
    const pc = 0x3e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[109196] PC 0x00003e90 instr 0x26528648', () => {
    const pc = 0x3e90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26528648 >>> 0);
    stepOne();
  });
  it('[109197] PC 0x00003e94 instr 0xafb00018', () => {
    const pc = 0x3e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[109198] PC 0x00003e98 instr 0x3c110001', () => {
    const pc = 0x3e98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110001 >>> 0);
    stepOne();
  });
  it('[109199] PC 0x00003e9c instr 0xafbf0024', () => {
    const pc = 0x3e9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[109200] PC 0x00003ea0 instr 0x26318908', () => {
    const pc = 0x3ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26318908 >>> 0);
    stepOne();
  });
});
