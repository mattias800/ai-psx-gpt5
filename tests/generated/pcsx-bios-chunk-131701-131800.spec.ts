import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 131701-131800', () => {
  beforeAll(() => initOnce());
  it('[131701] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[131702] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[131703] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[131704] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[131705] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[131706] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[131707] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[131708] PC 0x000040e4 instr 0x3c080000', () => {
    const pc = 0x40e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[131709] PC 0x000040e8 instr 0x01194021', () => {
    const pc = 0x40e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1194021 >>> 0);
    stepOne();
  });
  it('[131710] PC 0x000040ec instr 0x810873d1', () => {
    const pc = 0x40ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x810873d1 >>> 0);
    stepOne();
  });
  it('[131711] PC 0x000040f0 instr 0x00000000', () => {
    const pc = 0x40f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131712] PC 0x000040f4 instr 0x31090097', () => {
    const pc = 0x40f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31090097 >>> 0);
    stepOne();
  });
  it('[131713] PC 0x000040f8 instr 0x11200007', () => {
    const pc = 0x40f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11200007 >>> 0);
    stepOne();
  });
  it('[131714] PC 0x000040fc instr 0x24040001', () => {
    const pc = 0x40fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[131715] PC 0x00004100 instr 0x3c0a0001', () => {
    const pc = 0x4100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[131716] PC 0x00004104 instr 0x8d4a8910', () => {
    const pc = 0x4104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a8910 >>> 0);
    stepOne();
  });
  it('[131717] PC 0x00004108 instr 0x3c010001', () => {
    const pc = 0x4108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[131718] PC 0x0000410c instr 0x254b0001', () => {
    const pc = 0x410c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x254b0001 >>> 0);
    stepOne();
  });
  it('[131719] PC 0x00004110 instr 0xac2b8910', () => {
    const pc = 0x4110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2b8910 >>> 0);
    stepOne();
  });
  it('[131720] PC 0x00004114 instr 0x24040001', () => {
    const pc = 0x4114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[131721] PC 0x00004118 instr 0x27a50018', () => {
    const pc = 0x4118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50018 >>> 0);
    stepOne();
  });
  it('[131722] PC 0x0000411c instr 0x0c000b25', () => {
    const pc = 0x411c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b25 >>> 0);
    stepOne();
  });
  it('[131723] PC 0x00004120 instr 0x24060001', () => {
    const pc = 0x4120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060001 >>> 0);
    stepOne();
  });
  it('[131724] PC 0x00002c94 instr 0x27bdffd8', () => {
    const pc = 0x2c94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[131725] PC 0x00002c98 instr 0xafbf001c', () => {
    const pc = 0x2c98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[131726] PC 0x00002c9c instr 0xafa5002c', () => {
    const pc = 0x2c9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5002c >>> 0);
    stepOne();
  });
  it('[131727] PC 0x00002ca0 instr 0x0c000c32', () => {
    const pc = 0x2ca0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[131728] PC 0x00002ca4 instr 0xafa60030', () => {
    const pc = 0x2ca4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60030 >>> 0);
    stepOne();
  });
  it('[131729] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[131730] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[131731] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[131732] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[131733] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[131734] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[131735] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[131736] PC 0x000030f0 instr 0x3c0f0001', () => {
    const pc = 0x30f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[131737] PC 0x000030f4 instr 0x25ef8648', () => {
    const pc = 0x30f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ef8648 >>> 0);
    stepOne();
  });
  it('[131738] PC 0x000030f8 instr 0x000e7080', () => {
    const pc = 0x30f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[131739] PC 0x000030fc instr 0x01cf1021', () => {
    const pc = 0x30fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1021 >>> 0);
    stepOne();
  });
  it('[131740] PC 0x00003100 instr 0x03e00008', () => {
    const pc = 0x3100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[131741] PC 0x00003104 instr 0x00000000', () => {
    const pc = 0x3104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131742] PC 0x00002ca8 instr 0x10400005', () => {
    const pc = 0x2ca8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[131743] PC 0x00002cac instr 0x00402021', () => {
    const pc = 0x2cac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[131744] PC 0x00002cb0 instr 0x8c4e0000', () => {
    const pc = 0x2cb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0000 >>> 0);
    stepOne();
  });
  it('[131745] PC 0x00002cb4 instr 0x00000000', () => {
    const pc = 0x2cb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131746] PC 0x00002cb8 instr 0x15c00006', () => {
    const pc = 0x2cb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00006 >>> 0);
    stepOne();
  });
  it('[131747] PC 0x00002cbc instr 0x00000000', () => {
    const pc = 0x2cbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131748] PC 0x00002cd4 instr 0x0c000fa0', () => {
    const pc = 0x2cd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000fa0 >>> 0);
    stepOne();
  });
  it('[131749] PC 0x00002cd8 instr 0xafa40024', () => {
    const pc = 0x2cd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[131750] PC 0x00003e80 instr 0x27bdffd8', () => {
    const pc = 0x3e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[131751] PC 0x00003e84 instr 0xafb20020', () => {
    const pc = 0x3e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[131752] PC 0x00003e88 instr 0x3c120001', () => {
    const pc = 0x3e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c120001 >>> 0);
    stepOne();
  });
  it('[131753] PC 0x00003e8c instr 0xafb1001c', () => {
    const pc = 0x3e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[131754] PC 0x00003e90 instr 0x26528648', () => {
    const pc = 0x3e90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26528648 >>> 0);
    stepOne();
  });
  it('[131755] PC 0x00003e94 instr 0xafb00018', () => {
    const pc = 0x3e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[131756] PC 0x00003e98 instr 0x3c110001', () => {
    const pc = 0x3e98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110001 >>> 0);
    stepOne();
  });
  it('[131757] PC 0x00003e9c instr 0xafbf0024', () => {
    const pc = 0x3e9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[131758] PC 0x00003ea0 instr 0x26318908', () => {
    const pc = 0x3ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26318908 >>> 0);
    stepOne();
  });
  it('[131759] PC 0x00003ea4 instr 0x02408021', () => {
    const pc = 0x3ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2408021 >>> 0);
    stepOne();
  });
  it('[131760] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[131761] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131762] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[131763] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[131764] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131765] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[131766] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[131767] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[131768] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131769] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[131770] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131771] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[131772] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[131773] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131774] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[131775] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[131776] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[131777] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131778] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[131779] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131780] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[131781] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[131782] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131783] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[131784] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[131785] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[131786] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131787] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[131788] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131789] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[131790] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[131791] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131792] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[131793] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[131794] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[131795] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131796] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[131797] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[131798] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[131799] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[131800] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
