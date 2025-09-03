import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 133401-133500', () => {
  beforeAll(() => initOnce());
  it('[133401] PC 0x00001048 instr 0x14200005', () => {
    const pc = 0x1048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200005 >>> 0);
    stepOne();
  });
  it('[133402] PC 0x0000104c instr 0x00801821', () => {
    const pc = 0x104c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[133403] PC 0x00001050 instr 0x00401821', () => {
    const pc = 0x1050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[133404] PC 0x00001054 instr 0x10000003', () => {
    const pc = 0x1054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000003 >>> 0);
    stepOne();
  });
  it('[133405] PC 0x00001058 instr 0x00802821', () => {
    const pc = 0x1058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x802821 >>> 0);
    stepOne();
  });
  it('[133406] PC 0x00001064 instr 0x3c040000', () => {
    const pc = 0x1064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[133407] PC 0x00001068 instr 0x3c0e0000', () => {
    const pc = 0x1068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[133408] PC 0x0000106c instr 0x8c847460', () => {
    const pc = 0x106c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c847460 >>> 0);
    stepOne();
  });
  it('[133409] PC 0x00001070 instr 0x8dce7468', () => {
    const pc = 0x1070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7468 >>> 0);
    stepOne();
  });
  it('[133410] PC 0x00001074 instr 0x00000000', () => {
    const pc = 0x1074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133411] PC 0x00001078 instr 0x01c41023', () => {
    const pc = 0x1078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c41023 >>> 0);
    stepOne();
  });
  it('[133412] PC 0x0000107c instr 0x00021083', () => {
    const pc = 0x107c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21083 >>> 0);
    stepOne();
  });
  it('[133413] PC 0x00001080 instr 0x00021080', () => {
    const pc = 0x1080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21080 >>> 0);
    stepOne();
  });
  it('[133414] PC 0x00001084 instr 0x2442fffc', () => {
    const pc = 0x1084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442fffc >>> 0);
    stepOne();
  });
  it('[133415] PC 0x00001088 instr 0x0043082b', () => {
    const pc = 0x1088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[133416] PC 0x0000108c instr 0x14200004', () => {
    const pc = 0x108c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[133417] PC 0x00001090 instr 0x0045082b', () => {
    const pc = 0x1090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
  it('[133418] PC 0x000010a0 instr 0x14200003', () => {
    const pc = 0x10a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200003 >>> 0);
    stepOne();
  });
  it('[133419] PC 0x000010a4 instr 0x00000000', () => {
    const pc = 0x10a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133420] PC 0x000010a8 instr 0x1000000e', () => {
    const pc = 0x10a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[133421] PC 0x000010ac instr 0x00a03021', () => {
    const pc = 0x10ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa03021 >>> 0);
    stepOne();
  });
  it('[133422] PC 0x000010e4 instr 0x24cb0004', () => {
    const pc = 0x10e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24cb0004 >>> 0);
    stepOne();
  });
  it('[133423] PC 0x000010e8 instr 0x2418fffe', () => {
    const pc = 0x10e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2418fffe >>> 0);
    stepOne();
  });
  it('[133424] PC 0x000010ec instr 0x34ca0001', () => {
    const pc = 0x10ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34ca0001 >>> 0);
    stepOne();
  });
  it('[133425] PC 0x000010f0 instr 0x00001021', () => {
    const pc = 0x10f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[133426] PC 0x000010f4 instr 0x04c10002', () => {
    const pc = 0x10f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4c10002 >>> 0);
    stepOne();
  });
  it('[133427] PC 0x000010f8 instr 0x00c00821', () => {
    const pc = 0x10f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00821 >>> 0);
    stepOne();
  });
  it('[133428] PC 0x00001100 instr 0x0001c883', () => {
    const pc = 0x1100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c883 >>> 0);
    stepOne();
  });
  it('[133429] PC 0x00001104 instr 0x00194080', () => {
    const pc = 0x1104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x194080 >>> 0);
    stepOne();
  });
  it('[133430] PC 0x00001108 instr 0x00884821', () => {
    const pc = 0x1108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x884821 >>> 0);
    stepOne();
  });
  it('[133431] PC 0x0000110c instr 0xad380000', () => {
    const pc = 0x110c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad380000 >>> 0);
    stepOne();
  });
  it('[133432] PC 0x00001110 instr 0xac8afffc', () => {
    const pc = 0x1110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8afffc >>> 0);
    stepOne();
  });
  it('[133433] PC 0x00001114 instr 0x05610002', () => {
    const pc = 0x1114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5610002 >>> 0);
    stepOne();
  });
  it('[133434] PC 0x00001118 instr 0x01600821', () => {
    const pc = 0x1118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1600821 >>> 0);
    stepOne();
  });
  it('[133435] PC 0x00001120 instr 0x00016083', () => {
    const pc = 0x1120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x16083 >>> 0);
    stepOne();
  });
  it('[133436] PC 0x00001124 instr 0x000c6880', () => {
    const pc = 0x1124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc6880 >>> 0);
    stepOne();
  });
  it('[133437] PC 0x00001128 instr 0x008d2021', () => {
    const pc = 0x1128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2021 >>> 0);
    stepOne();
  });
  it('[133438] PC 0x0000112c instr 0x3c010000', () => {
    const pc = 0x112c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[133439] PC 0x00001130 instr 0xac247460', () => {
    const pc = 0x1130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac247460 >>> 0);
    stepOne();
  });
  it('[133440] PC 0x00001134 instr 0x03e00008', () => {
    const pc = 0x1134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133441] PC 0x00001138 instr 0x00000000', () => {
    const pc = 0x1138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133442] PC 0x000013a8 instr 0x10400007', () => {
    const pc = 0x13a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400007 >>> 0);
    stepOne();
  });
  it('[133443] PC 0x000013ac instr 0x00401821', () => {
    const pc = 0x13ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[133444] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[133445] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[133446] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133447] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[133448] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[133449] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[133450] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[133451] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133452] PC 0x00001250 instr 0x36220001', () => {
    const pc = 0x1250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36220001 >>> 0);
    stepOne();
  });
  it('[133453] PC 0x00001254 instr 0x14440007', () => {
    const pc = 0x1254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14440007 >>> 0);
    stepOne();
  });
  it('[133454] PC 0x00001258 instr 0x0044082b', () => {
    const pc = 0x1258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[133455] PC 0x0000125c instr 0x3c0a0001', () => {
    const pc = 0x125c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[133456] PC 0x00001260 instr 0x8d4a85fc', () => {
    const pc = 0x1260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a85fc >>> 0);
    stepOne();
  });
  it('[133457] PC 0x00001264 instr 0x00924824', () => {
    const pc = 0x1264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x924824 >>> 0);
    stepOne();
  });
  it('[133458] PC 0x00001268 instr 0x1000005d', () => {
    const pc = 0x1268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000005d >>> 0);
    stepOne();
  });
  it('[133459] PC 0x0000126c instr 0xad490000', () => {
    const pc = 0x126c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad490000 >>> 0);
    stepOne();
  });
  it('[133460] PC 0x000013e0 instr 0x3c020001', () => {
    const pc = 0x13e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[133461] PC 0x000013e4 instr 0x8c4285fc', () => {
    const pc = 0x13e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4285fc >>> 0);
    stepOne();
  });
  it('[133462] PC 0x000013e8 instr 0x00000000', () => {
    const pc = 0x13e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133463] PC 0x000013ec instr 0x24420004', () => {
    const pc = 0x13ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[133464] PC 0x000013f0 instr 0x8fbf0024', () => {
    const pc = 0x13f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[133465] PC 0x000013f4 instr 0x8fb00018', () => {
    const pc = 0x13f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[133466] PC 0x000013f8 instr 0x8fb1001c', () => {
    const pc = 0x13f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[133467] PC 0x000013fc instr 0x8fb20020', () => {
    const pc = 0x13fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[133468] PC 0x00001400 instr 0x03e00008', () => {
    const pc = 0x1400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133469] PC 0x00001404 instr 0x27bd0028', () => {
    const pc = 0x1404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[133470] PC 0xbfc046c0 instr 0x8fa60028', () => {
    const pc = 0xbfc046c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa60028 >>> 0);
    stepOne();
  });
  it('[133471] PC 0xbfc046c4 instr 0x14400004', () => {
    const pc = 0xbfc046c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400004 >>> 0);
    stepOne();
  });
  it('[133472] PC 0xbfc046c8 instr 0x8fae0024', () => {
    const pc = 0xbfc046c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fae0024 >>> 0);
    stepOne();
  });
  it('[133473] PC 0xbfc046d8 instr 0x3c01a000', () => {
    const pc = 0xbfc046d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[133474] PC 0xbfc046dc instr 0x000e78c0', () => {
    const pc = 0xbfc046dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe78c0 >>> 0);
    stepOne();
  });
  it('[133475] PC 0xbfc046e0 instr 0xac260124', () => {
    const pc = 0xbfc046e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac260124 >>> 0);
    stepOne();
  });
  it('[133476] PC 0xbfc046e4 instr 0x01ee7823', () => {
    const pc = 0xbfc046e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7823 >>> 0);
    stepOne();
  });
  it('[133477] PC 0xbfc046e8 instr 0x3c01a000', () => {
    const pc = 0xbfc046e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[133478] PC 0xbfc046ec instr 0x000f7880', () => {
    const pc = 0xbfc046ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7880 >>> 0);
    stepOne();
  });
  it('[133479] PC 0xbfc046f0 instr 0xac220120', () => {
    const pc = 0xbfc046f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac220120 >>> 0);
    stepOne();
  });
  it('[133480] PC 0xbfc046f4 instr 0x004f2821', () => {
    const pc = 0xbfc046f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4f2821 >>> 0);
    stepOne();
  });
  it('[133481] PC 0xbfc046f8 instr 0x0045082b', () => {
    const pc = 0xbfc046f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
  it('[133482] PC 0xbfc046fc instr 0x00a02021', () => {
    const pc = 0xbfc046fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa02021 >>> 0);
    stepOne();
  });
  it('[133483] PC 0xbfc04700 instr 0x10200005', () => {
    const pc = 0xbfc04700;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200005 >>> 0);
    stepOne();
  });
  it('[133484] PC 0xbfc04704 instr 0x00401821', () => {
    const pc = 0xbfc04704;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[133485] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133486] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133487] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133488] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133489] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133490] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133491] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133492] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133493] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133494] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133495] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133496] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133497] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133498] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133499] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133500] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
});
