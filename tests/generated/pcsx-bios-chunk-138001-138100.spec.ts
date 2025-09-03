import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 138001-138100', () => {
  beforeAll(() => initOnce());
  it('[138001] PC 0x000010a0 instr 0x14200003', () => {
    const pc = 0x10a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200003 >>> 0);
    stepOne();
  });
  it('[138002] PC 0x000010a4 instr 0x00000000', () => {
    const pc = 0x10a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138003] PC 0x000010a8 instr 0x1000000e', () => {
    const pc = 0x10a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[138004] PC 0x000010ac instr 0x00a03021', () => {
    const pc = 0x10ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa03021 >>> 0);
    stepOne();
  });
  it('[138005] PC 0x000010e4 instr 0x24cb0004', () => {
    const pc = 0x10e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24cb0004 >>> 0);
    stepOne();
  });
  it('[138006] PC 0x000010e8 instr 0x2418fffe', () => {
    const pc = 0x10e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2418fffe >>> 0);
    stepOne();
  });
  it('[138007] PC 0x000010ec instr 0x34ca0001', () => {
    const pc = 0x10ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34ca0001 >>> 0);
    stepOne();
  });
  it('[138008] PC 0x000010f0 instr 0x00001021', () => {
    const pc = 0x10f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[138009] PC 0x000010f4 instr 0x04c10002', () => {
    const pc = 0x10f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4c10002 >>> 0);
    stepOne();
  });
  it('[138010] PC 0x000010f8 instr 0x00c00821', () => {
    const pc = 0x10f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00821 >>> 0);
    stepOne();
  });
  it('[138011] PC 0x00001100 instr 0x0001c883', () => {
    const pc = 0x1100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c883 >>> 0);
    stepOne();
  });
  it('[138012] PC 0x00001104 instr 0x00194080', () => {
    const pc = 0x1104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x194080 >>> 0);
    stepOne();
  });
  it('[138013] PC 0x00001108 instr 0x00884821', () => {
    const pc = 0x1108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x884821 >>> 0);
    stepOne();
  });
  it('[138014] PC 0x0000110c instr 0xad380000', () => {
    const pc = 0x110c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad380000 >>> 0);
    stepOne();
  });
  it('[138015] PC 0x00001110 instr 0xac8afffc', () => {
    const pc = 0x1110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8afffc >>> 0);
    stepOne();
  });
  it('[138016] PC 0x00001114 instr 0x05610002', () => {
    const pc = 0x1114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5610002 >>> 0);
    stepOne();
  });
  it('[138017] PC 0x00001118 instr 0x01600821', () => {
    const pc = 0x1118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1600821 >>> 0);
    stepOne();
  });
  it('[138018] PC 0x00001120 instr 0x00016083', () => {
    const pc = 0x1120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x16083 >>> 0);
    stepOne();
  });
  it('[138019] PC 0x00001124 instr 0x000c6880', () => {
    const pc = 0x1124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc6880 >>> 0);
    stepOne();
  });
  it('[138020] PC 0x00001128 instr 0x008d2021', () => {
    const pc = 0x1128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2021 >>> 0);
    stepOne();
  });
  it('[138021] PC 0x0000112c instr 0x3c010000', () => {
    const pc = 0x112c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[138022] PC 0x00001130 instr 0xac247460', () => {
    const pc = 0x1130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac247460 >>> 0);
    stepOne();
  });
  it('[138023] PC 0x00001134 instr 0x03e00008', () => {
    const pc = 0x1134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138024] PC 0x00001138 instr 0x00000000', () => {
    const pc = 0x1138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138025] PC 0x000013a8 instr 0x10400007', () => {
    const pc = 0x13a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400007 >>> 0);
    stepOne();
  });
  it('[138026] PC 0x000013ac instr 0x00401821', () => {
    const pc = 0x13ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[138027] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[138028] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[138029] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138030] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[138031] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[138032] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[138033] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[138034] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138035] PC 0x00001250 instr 0x36220001', () => {
    const pc = 0x1250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36220001 >>> 0);
    stepOne();
  });
  it('[138036] PC 0x00001254 instr 0x14440007', () => {
    const pc = 0x1254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14440007 >>> 0);
    stepOne();
  });
  it('[138037] PC 0x00001258 instr 0x0044082b', () => {
    const pc = 0x1258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[138038] PC 0x0000125c instr 0x3c0a0001', () => {
    const pc = 0x125c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[138039] PC 0x00001260 instr 0x8d4a85fc', () => {
    const pc = 0x1260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a85fc >>> 0);
    stepOne();
  });
  it('[138040] PC 0x00001264 instr 0x00924824', () => {
    const pc = 0x1264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x924824 >>> 0);
    stepOne();
  });
  it('[138041] PC 0x00001268 instr 0x1000005d', () => {
    const pc = 0x1268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000005d >>> 0);
    stepOne();
  });
  it('[138042] PC 0x0000126c instr 0xad490000', () => {
    const pc = 0x126c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad490000 >>> 0);
    stepOne();
  });
  it('[138043] PC 0x000013e0 instr 0x3c020001', () => {
    const pc = 0x13e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138044] PC 0x000013e4 instr 0x8c4285fc', () => {
    const pc = 0x13e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4285fc >>> 0);
    stepOne();
  });
  it('[138045] PC 0x000013e8 instr 0x00000000', () => {
    const pc = 0x13e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138046] PC 0x000013ec instr 0x24420004', () => {
    const pc = 0x13ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[138047] PC 0x000013f0 instr 0x8fbf0024', () => {
    const pc = 0x13f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[138048] PC 0x000013f4 instr 0x8fb00018', () => {
    const pc = 0x13f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[138049] PC 0x000013f8 instr 0x8fb1001c', () => {
    const pc = 0x13f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[138050] PC 0x000013fc instr 0x8fb20020', () => {
    const pc = 0x13fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[138051] PC 0x00001400 instr 0x03e00008', () => {
    const pc = 0x1400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138052] PC 0x00001404 instr 0x27bd0028', () => {
    const pc = 0x1404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[138053] PC 0xbfc047a4 instr 0x8fa6002c', () => {
    const pc = 0xbfc047a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa6002c >>> 0);
    stepOne();
  });
  it('[138054] PC 0xbfc047a8 instr 0x14400003', () => {
    const pc = 0xbfc047a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[138055] PC 0xbfc047ac instr 0x00403821', () => {
    const pc = 0xbfc047ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x403821 >>> 0);
    stepOne();
  });
  it('[138056] PC 0xbfc047b8 instr 0x8fae0034', () => {
    const pc = 0xbfc047b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fae0034 >>> 0);
    stepOne();
  });
  it('[138057] PC 0xbfc047bc instr 0x00c01821', () => {
    const pc = 0xbfc047bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc01821 >>> 0);
    stepOne();
  });
  it('[138058] PC 0xbfc047c0 instr 0x000e7880', () => {
    const pc = 0xbfc047c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[138059] PC 0xbfc047c4 instr 0x00cf2021', () => {
    const pc = 0xbfc047c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xcf2021 >>> 0);
    stepOne();
  });
  it('[138060] PC 0xbfc047c8 instr 0x00c4082b', () => {
    const pc = 0xbfc047c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc4082b >>> 0);
    stepOne();
  });
  it('[138061] PC 0xbfc047cc instr 0x10200006', () => {
    const pc = 0xbfc047cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200006 >>> 0);
    stepOne();
  });
  it('[138062] PC 0xbfc047d0 instr 0x8fb80030', () => {
    const pc = 0xbfc047d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80030 >>> 0);
    stepOne();
  });
  it('[138063] PC 0xbfc047d4 instr 0x24630004', () => {
    const pc = 0xbfc047d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630004 >>> 0);
    stepOne();
  });
  it('[138064] PC 0xbfc047d8 instr 0x0064082b', () => {
    const pc = 0xbfc047d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[138065] PC 0xbfc047dc instr 0x1420fffd', () => {
    const pc = 0xbfc047dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[138066] PC 0xbfc047e0 instr 0xac60fffc', () => {
    const pc = 0xbfc047e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60fffc >>> 0);
    stepOne();
  });
  it('[138067] PC 0xbfc047e4 instr 0x8fb80030', () => {
    const pc = 0xbfc047e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80030 >>> 0);
    stepOne();
  });
  it('[138068] PC 0xbfc047e8 instr 0x00401821', () => {
    const pc = 0xbfc047e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[138069] PC 0xbfc047ec instr 0x0018c880', () => {
    const pc = 0xbfc047ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18c880 >>> 0);
    stepOne();
  });
  it('[138070] PC 0xbfc047f0 instr 0x0338c823', () => {
    const pc = 0xbfc047f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x338c823 >>> 0);
    stepOne();
  });
  it('[138071] PC 0xbfc047f4 instr 0x0019c980', () => {
    const pc = 0xbfc047f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x19c980 >>> 0);
    stepOne();
  });
  it('[138072] PC 0xbfc047f8 instr 0x00592821', () => {
    const pc = 0xbfc047f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x592821 >>> 0);
    stepOne();
  });
  it('[138073] PC 0xbfc047fc instr 0x0045082b', () => {
    const pc = 0xbfc047fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
  it('[138074] PC 0xbfc04800 instr 0x10200006', () => {
    const pc = 0xbfc04800;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200006 >>> 0);
    stepOne();
  });
  it('[138075] PC 0xbfc04804 instr 0x00a02021', () => {
    const pc = 0xbfc04804;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa02021 >>> 0);
    stepOne();
  });
  it('[138076] PC 0xbfc04808 instr 0x24021000', () => {
    const pc = 0xbfc04808;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24021000 >>> 0);
    stepOne();
  });
  it('[138077] PC 0xbfc0480c instr 0x246300c0', () => {
    const pc = 0xbfc0480c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x246300c0 >>> 0);
    stepOne();
  });
  it('[138078] PC 0xbfc04810 instr 0x0064082b', () => {
    const pc = 0xbfc04810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[138079] PC 0xbfc04814 instr 0x1420fffd', () => {
    const pc = 0xbfc04814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[138080] PC 0xbfc04818 instr 0xac62ff40', () => {
    const pc = 0xbfc04818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac62ff40 >>> 0);
    stepOne();
  });
  it('[138081] PC 0xbfc0480c instr 0x246300c0', () => {
    const pc = 0xbfc0480c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x246300c0 >>> 0);
    stepOne();
  });
  it('[138082] PC 0xbfc04810 instr 0x0064082b', () => {
    const pc = 0xbfc04810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[138083] PC 0xbfc04814 instr 0x1420fffd', () => {
    const pc = 0xbfc04814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[138084] PC 0xbfc04818 instr 0xac62ff40', () => {
    const pc = 0xbfc04818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac62ff40 >>> 0);
    stepOne();
  });
  it('[138085] PC 0xbfc0480c instr 0x246300c0', () => {
    const pc = 0xbfc0480c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x246300c0 >>> 0);
    stepOne();
  });
  it('[138086] PC 0xbfc04810 instr 0x0064082b', () => {
    const pc = 0xbfc04810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[138087] PC 0xbfc04814 instr 0x1420fffd', () => {
    const pc = 0xbfc04814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[138088] PC 0xbfc04818 instr 0xac62ff40', () => {
    const pc = 0xbfc04818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac62ff40 >>> 0);
    stepOne();
  });
  it('[138089] PC 0xbfc0480c instr 0x246300c0', () => {
    const pc = 0xbfc0480c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x246300c0 >>> 0);
    stepOne();
  });
  it('[138090] PC 0xbfc04810 instr 0x0064082b', () => {
    const pc = 0xbfc04810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[138091] PC 0xbfc04814 instr 0x1420fffd', () => {
    const pc = 0xbfc04814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[138092] PC 0xbfc04818 instr 0xac62ff40', () => {
    const pc = 0xbfc04818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac62ff40 >>> 0);
    stepOne();
  });
  it('[138093] PC 0xbfc0481c instr 0x24084000', () => {
    const pc = 0xbfc0481c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24084000 >>> 0);
    stepOne();
  });
  it('[138094] PC 0xbfc04820 instr 0xace80000', () => {
    const pc = 0xbfc04820;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace80000 >>> 0);
    stepOne();
  });
  it('[138095] PC 0xbfc04824 instr 0xacc70000', () => {
    const pc = 0xbfc04824;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc70000 >>> 0);
    stepOne();
  });
  it('[138096] PC 0xbfc04828 instr 0x3c01a000', () => {
    const pc = 0xbfc04828;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[138097] PC 0xbfc0482c instr 0xac260108', () => {
    const pc = 0xbfc0482c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac260108 >>> 0);
    stepOne();
  });
  it('[138098] PC 0xbfc04830 instr 0x3c01a000', () => {
    const pc = 0xbfc04830;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[138099] PC 0xbfc04834 instr 0xac270110', () => {
    const pc = 0xbfc04834;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac270110 >>> 0);
    stepOne();
  });
  it('[138100] PC 0xbfc04838 instr 0x02301021', () => {
    const pc = 0xbfc04838;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2301021 >>> 0);
    stepOne();
  });
});
