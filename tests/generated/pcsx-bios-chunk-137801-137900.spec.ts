import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 137801-137900', () => {
  beforeAll(() => initOnce());
  it('[137801] PC 0x0000112c instr 0x3c010000', () => {
    const pc = 0x112c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[137802] PC 0x00001130 instr 0xac247460', () => {
    const pc = 0x1130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac247460 >>> 0);
    stepOne();
  });
  it('[137803] PC 0x00001134 instr 0x03e00008', () => {
    const pc = 0x1134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[137804] PC 0x00001138 instr 0x00000000', () => {
    const pc = 0x1138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137805] PC 0x000013a8 instr 0x10400007', () => {
    const pc = 0x13a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400007 >>> 0);
    stepOne();
  });
  it('[137806] PC 0x000013ac instr 0x00401821', () => {
    const pc = 0x13ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[137807] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137808] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137809] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137810] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137811] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137812] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137813] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137814] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137815] PC 0x00001250 instr 0x36220001', () => {
    const pc = 0x1250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36220001 >>> 0);
    stepOne();
  });
  it('[137816] PC 0x00001254 instr 0x14440007', () => {
    const pc = 0x1254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14440007 >>> 0);
    stepOne();
  });
  it('[137817] PC 0x00001258 instr 0x0044082b', () => {
    const pc = 0x1258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[137818] PC 0x0000125c instr 0x3c0a0001', () => {
    const pc = 0x125c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[137819] PC 0x00001260 instr 0x8d4a85fc', () => {
    const pc = 0x1260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a85fc >>> 0);
    stepOne();
  });
  it('[137820] PC 0x00001264 instr 0x00924824', () => {
    const pc = 0x1264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x924824 >>> 0);
    stepOne();
  });
  it('[137821] PC 0x00001268 instr 0x1000005d', () => {
    const pc = 0x1268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000005d >>> 0);
    stepOne();
  });
  it('[137822] PC 0x0000126c instr 0xad490000', () => {
    const pc = 0x126c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad490000 >>> 0);
    stepOne();
  });
  it('[137823] PC 0x000013e0 instr 0x3c020001', () => {
    const pc = 0x13e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[137824] PC 0x000013e4 instr 0x8c4285fc', () => {
    const pc = 0x13e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4285fc >>> 0);
    stepOne();
  });
  it('[137825] PC 0x000013e8 instr 0x00000000', () => {
    const pc = 0x13e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137826] PC 0x000013ec instr 0x24420004', () => {
    const pc = 0x13ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[137827] PC 0x000013f0 instr 0x8fbf0024', () => {
    const pc = 0x13f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[137828] PC 0x000013f4 instr 0x8fb00018', () => {
    const pc = 0x13f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[137829] PC 0x000013f8 instr 0x8fb1001c', () => {
    const pc = 0x13f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[137830] PC 0x000013fc instr 0x8fb20020', () => {
    const pc = 0x13fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[137831] PC 0x00001400 instr 0x03e00008', () => {
    const pc = 0x1400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[137832] PC 0x00001404 instr 0x27bd0028', () => {
    const pc = 0x1404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[137833] PC 0xbfc04788 instr 0x14400003', () => {
    const pc = 0xbfc04788;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[137834] PC 0xbfc0478c instr 0x00403021', () => {
    const pc = 0xbfc0478c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x403021 >>> 0);
    stepOne();
  });
  it('[137835] PC 0xbfc04798 instr 0x02002021', () => {
    const pc = 0xbfc04798;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002021 >>> 0);
    stepOne();
  });
  it('[137836] PC 0xbfc0479c instr 0x0ff036b8', () => {
    const pc = 0xbfc0479c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036b8 >>> 0);
    stepOne();
  });
  it('[137837] PC 0xbfc047a0 instr 0xafa6002c', () => {
    const pc = 0xbfc047a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa6002c >>> 0);
    stepOne();
  });
  it('[137838] PC 0xbfc0dae0 instr 0x240a00b0', () => {
    const pc = 0xbfc0dae0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[137839] PC 0xbfc0dae4 instr 0x01400008', () => {
    const pc = 0xbfc0dae4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[137840] PC 0xbfc0dae8 instr 0x24090000', () => {
    const pc = 0xbfc0dae8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090000 >>> 0);
    stepOne();
  });
  it('[137841] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[137842] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[137843] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[137844] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137845] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[137846] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[137847] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[137848] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[137849] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[137850] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137851] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[137852] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137853] PC 0x00001174 instr 0x27bdffd8', () => {
    const pc = 0x1174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[137854] PC 0x00001178 instr 0xafb1001c', () => {
    const pc = 0x1178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[137855] PC 0x0000117c instr 0x00808821', () => {
    const pc = 0x117c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808821 >>> 0);
    stepOne();
  });
  it('[137856] PC 0x00001180 instr 0x26310001', () => {
    const pc = 0x1180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137857] PC 0x00001184 instr 0x3c0e0000', () => {
    const pc = 0x1184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[137858] PC 0x00001188 instr 0x8dce6d30', () => {
    const pc = 0x1188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce6d30 >>> 0);
    stepOne();
  });
  it('[137859] PC 0x0000118c instr 0x26310001', () => {
    const pc = 0x118c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137860] PC 0x00001190 instr 0xafb00018', () => {
    const pc = 0x1190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[137861] PC 0x00001194 instr 0x26310001', () => {
    const pc = 0x1194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137862] PC 0x00001198 instr 0x2401fffc', () => {
    const pc = 0x1198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401fffc >>> 0);
    stepOne();
  });
  it('[137863] PC 0x0000119c instr 0xafbf0024', () => {
    const pc = 0x119c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[137864] PC 0x000011a0 instr 0xafb20020', () => {
    const pc = 0x11a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[137865] PC 0x000011a4 instr 0x24100002', () => {
    const pc = 0x11a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24100002 >>> 0);
    stepOne();
  });
  it('[137866] PC 0x000011a8 instr 0x11c00003', () => {
    const pc = 0x11a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c00003 >>> 0);
    stepOne();
  });
  it('[137867] PC 0x000011ac instr 0x02218824', () => {
    const pc = 0x11ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2218824 >>> 0);
    stepOne();
  });
  it('[137868] PC 0x000011b0 instr 0x1000001f', () => {
    const pc = 0x11b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000001f >>> 0);
    stepOne();
  });
  it('[137869] PC 0x000011b4 instr 0x2412fffe', () => {
    const pc = 0x11b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2412fffe >>> 0);
    stepOne();
  });
  it('[137870] PC 0x00001230 instr 0x3c080001', () => {
    const pc = 0x1230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080001 >>> 0);
    stepOne();
  });
  it('[137871] PC 0x00001234 instr 0x8d0885fc', () => {
    const pc = 0x1234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d0885fc >>> 0);
    stepOne();
  });
  it('[137872] PC 0x00001238 instr 0x00000000', () => {
    const pc = 0x1238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137873] PC 0x0000123c instr 0x8d040000', () => {
    const pc = 0x123c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d040000 >>> 0);
    stepOne();
  });
  it('[137874] PC 0x00001240 instr 0x00000000', () => {
    const pc = 0x1240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137875] PC 0x00001244 instr 0x30830001', () => {
    const pc = 0x1244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137876] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137877] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137878] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137879] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137880] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137881] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137882] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137883] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137884] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137885] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137886] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137887] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137888] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137889] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137890] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137891] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137892] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137893] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137894] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137895] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137896] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137897] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137898] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137899] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[137900] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
});
