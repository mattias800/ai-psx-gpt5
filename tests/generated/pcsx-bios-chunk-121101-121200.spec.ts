import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121101-121200', () => {
  beforeAll(() => initOnce());
  it('[121101] PC 0xbfc04610 instr 0x27bdffe0', () => {
    const pc = 0xbfc04610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe0 >>> 0);
    stepOne();
  });
  it('[121102] PC 0xbfc04614 instr 0x00802821', () => {
    const pc = 0xbfc04614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x802821 >>> 0);
    stepOne();
  });
  it('[121103] PC 0xbfc04618 instr 0xafbf0014', () => {
    const pc = 0xbfc04618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121104] PC 0xbfc0461c instr 0x000528c0', () => {
    const pc = 0xbfc0461c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x528c0 >>> 0);
    stepOne();
  });
  it('[121105] PC 0xbfc04620 instr 0x00a02021', () => {
    const pc = 0xbfc04620;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa02021 >>> 0);
    stepOne();
  });
  it('[121106] PC 0xbfc04624 instr 0x0ff036b8', () => {
    const pc = 0xbfc04624;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036b8 >>> 0);
    stepOne();
  });
  it('[121107] PC 0xbfc04628 instr 0xafa50020', () => {
    const pc = 0xbfc04628;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa50020 >>> 0);
    stepOne();
  });
  it('[121108] PC 0xbfc0dae0 instr 0x240a00b0', () => {
    const pc = 0xbfc0dae0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[121109] PC 0xbfc0dae4 instr 0x01400008', () => {
    const pc = 0xbfc0dae4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[121110] PC 0xbfc0dae8 instr 0x24090000', () => {
    const pc = 0xbfc0dae8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090000 >>> 0);
    stepOne();
  });
  it('[121111] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121112] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[121113] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121114] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121115] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121116] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[121117] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[121118] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[121119] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[121120] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121121] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121122] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121123] PC 0x00001174 instr 0x27bdffd8', () => {
    const pc = 0x1174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[121124] PC 0x00001178 instr 0xafb1001c', () => {
    const pc = 0x1178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[121125] PC 0x0000117c instr 0x00808821', () => {
    const pc = 0x117c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808821 >>> 0);
    stepOne();
  });
  it('[121126] PC 0x00001180 instr 0x26310001', () => {
    const pc = 0x1180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[121127] PC 0x00001184 instr 0x3c0e0000', () => {
    const pc = 0x1184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[121128] PC 0x00001188 instr 0x8dce6d30', () => {
    const pc = 0x1188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce6d30 >>> 0);
    stepOne();
  });
  it('[121129] PC 0x0000118c instr 0x26310001', () => {
    const pc = 0x118c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[121130] PC 0x00001190 instr 0xafb00018', () => {
    const pc = 0x1190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[121131] PC 0x00001194 instr 0x26310001', () => {
    const pc = 0x1194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[121132] PC 0x00001198 instr 0x2401fffc', () => {
    const pc = 0x1198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401fffc >>> 0);
    stepOne();
  });
  it('[121133] PC 0x0000119c instr 0xafbf0024', () => {
    const pc = 0x119c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[121134] PC 0x000011a0 instr 0xafb20020', () => {
    const pc = 0x11a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[121135] PC 0x000011a4 instr 0x24100002', () => {
    const pc = 0x11a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24100002 >>> 0);
    stepOne();
  });
  it('[121136] PC 0x000011a8 instr 0x11c00003', () => {
    const pc = 0x11a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c00003 >>> 0);
    stepOne();
  });
  it('[121137] PC 0x000011ac instr 0x02218824', () => {
    const pc = 0x11ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2218824 >>> 0);
    stepOne();
  });
  it('[121138] PC 0x000011b8 instr 0x3c020000', () => {
    const pc = 0x11b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[121139] PC 0x000011bc instr 0x3c0f0000', () => {
    const pc = 0x11bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0000 >>> 0);
    stepOne();
  });
  it('[121140] PC 0x000011c0 instr 0x8c427460', () => {
    const pc = 0x11c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c427460 >>> 0);
    stepOne();
  });
  it('[121141] PC 0x000011c4 instr 0x8def7468', () => {
    const pc = 0x11c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def7468 >>> 0);
    stepOne();
  });
  it('[121142] PC 0x000011c8 instr 0x00000000', () => {
    const pc = 0x11c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121143] PC 0x000011cc instr 0x004f082b', () => {
    const pc = 0x11cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4f082b >>> 0);
    stepOne();
  });
  it('[121144] PC 0x000011d0 instr 0x14200004', () => {
    const pc = 0x11d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[121145] PC 0x000011d4 instr 0x2412fffe', () => {
    const pc = 0x11d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2412fffe >>> 0);
    stepOne();
  });
  it('[121146] PC 0x000011e4 instr 0xac520000', () => {
    const pc = 0x11e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac520000 >>> 0);
    stepOne();
  });
  it('[121147] PC 0x000011e8 instr 0x3c010001', () => {
    const pc = 0x11e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[121148] PC 0x000011ec instr 0xac2285fc', () => {
    const pc = 0x11ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2285fc >>> 0);
    stepOne();
  });
  it('[121149] PC 0x000011f0 instr 0x24420004', () => {
    const pc = 0x11f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[121150] PC 0x000011f4 instr 0x3c010000', () => {
    const pc = 0x11f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121151] PC 0x000011f8 instr 0xac227460', () => {
    const pc = 0x11f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac227460 >>> 0);
    stepOne();
  });
  it('[121152] PC 0x000011fc instr 0x0c00040c', () => {
    const pc = 0x11fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00040c >>> 0);
    stepOne();
  });
  it('[121153] PC 0x00001200 instr 0x02202021', () => {
    const pc = 0x1200;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2202021 >>> 0);
    stepOne();
  });
  it('[121154] PC 0x00001030 instr 0x10800021', () => {
    const pc = 0x1030;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800021 >>> 0);
    stepOne();
  });
  it('[121155] PC 0x00001034 instr 0x00000000', () => {
    const pc = 0x1034;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121156] PC 0x00001038 instr 0x3c020000', () => {
    const pc = 0x1038;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[121157] PC 0x0000103c instr 0x8c427464', () => {
    const pc = 0x103c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c427464 >>> 0);
    stepOne();
  });
  it('[121158] PC 0x00001040 instr 0x00000000', () => {
    const pc = 0x1040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121159] PC 0x00001044 instr 0x0044082b', () => {
    const pc = 0x1044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[121160] PC 0x00001048 instr 0x14200005', () => {
    const pc = 0x1048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200005 >>> 0);
    stepOne();
  });
  it('[121161] PC 0x0000104c instr 0x00801821', () => {
    const pc = 0x104c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[121162] PC 0x00001050 instr 0x00401821', () => {
    const pc = 0x1050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[121163] PC 0x00001054 instr 0x10000003', () => {
    const pc = 0x1054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000003 >>> 0);
    stepOne();
  });
  it('[121164] PC 0x00001058 instr 0x00802821', () => {
    const pc = 0x1058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x802821 >>> 0);
    stepOne();
  });
  it('[121165] PC 0x00001064 instr 0x3c040000', () => {
    const pc = 0x1064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[121166] PC 0x00001068 instr 0x3c0e0000', () => {
    const pc = 0x1068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[121167] PC 0x0000106c instr 0x8c847460', () => {
    const pc = 0x106c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c847460 >>> 0);
    stepOne();
  });
  it('[121168] PC 0x00001070 instr 0x8dce7468', () => {
    const pc = 0x1070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7468 >>> 0);
    stepOne();
  });
  it('[121169] PC 0x00001074 instr 0x00000000', () => {
    const pc = 0x1074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121170] PC 0x00001078 instr 0x01c41023', () => {
    const pc = 0x1078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c41023 >>> 0);
    stepOne();
  });
  it('[121171] PC 0x0000107c instr 0x00021083', () => {
    const pc = 0x107c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21083 >>> 0);
    stepOne();
  });
  it('[121172] PC 0x00001080 instr 0x00021080', () => {
    const pc = 0x1080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21080 >>> 0);
    stepOne();
  });
  it('[121173] PC 0x00001084 instr 0x2442fffc', () => {
    const pc = 0x1084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442fffc >>> 0);
    stepOne();
  });
  it('[121174] PC 0x00001088 instr 0x0043082b', () => {
    const pc = 0x1088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[121175] PC 0x0000108c instr 0x14200004', () => {
    const pc = 0x108c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[121176] PC 0x00001090 instr 0x0045082b', () => {
    const pc = 0x1090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
  it('[121177] PC 0x000010a0 instr 0x14200003', () => {
    const pc = 0x10a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200003 >>> 0);
    stepOne();
  });
  it('[121178] PC 0x000010a4 instr 0x00000000', () => {
    const pc = 0x10a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121179] PC 0x000010a8 instr 0x1000000e', () => {
    const pc = 0x10a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[121180] PC 0x000010ac instr 0x00a03021', () => {
    const pc = 0x10ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa03021 >>> 0);
    stepOne();
  });
  it('[121181] PC 0x000010e4 instr 0x24cb0004', () => {
    const pc = 0x10e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24cb0004 >>> 0);
    stepOne();
  });
  it('[121182] PC 0x000010e8 instr 0x2418fffe', () => {
    const pc = 0x10e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2418fffe >>> 0);
    stepOne();
  });
  it('[121183] PC 0x000010ec instr 0x34ca0001', () => {
    const pc = 0x10ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34ca0001 >>> 0);
    stepOne();
  });
  it('[121184] PC 0x000010f0 instr 0x00001021', () => {
    const pc = 0x10f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[121185] PC 0x000010f4 instr 0x04c10002', () => {
    const pc = 0x10f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4c10002 >>> 0);
    stepOne();
  });
  it('[121186] PC 0x000010f8 instr 0x00c00821', () => {
    const pc = 0x10f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00821 >>> 0);
    stepOne();
  });
  it('[121187] PC 0x00001100 instr 0x0001c883', () => {
    const pc = 0x1100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c883 >>> 0);
    stepOne();
  });
  it('[121188] PC 0x00001104 instr 0x00194080', () => {
    const pc = 0x1104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x194080 >>> 0);
    stepOne();
  });
  it('[121189] PC 0x00001108 instr 0x00884821', () => {
    const pc = 0x1108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x884821 >>> 0);
    stepOne();
  });
  it('[121190] PC 0x0000110c instr 0xad380000', () => {
    const pc = 0x110c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad380000 >>> 0);
    stepOne();
  });
  it('[121191] PC 0x00001110 instr 0xac8afffc', () => {
    const pc = 0x1110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8afffc >>> 0);
    stepOne();
  });
  it('[121192] PC 0x00001114 instr 0x05610002', () => {
    const pc = 0x1114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5610002 >>> 0);
    stepOne();
  });
  it('[121193] PC 0x00001118 instr 0x01600821', () => {
    const pc = 0x1118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1600821 >>> 0);
    stepOne();
  });
  it('[121194] PC 0x00001120 instr 0x00016083', () => {
    const pc = 0x1120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x16083 >>> 0);
    stepOne();
  });
  it('[121195] PC 0x00001124 instr 0x000c6880', () => {
    const pc = 0x1124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc6880 >>> 0);
    stepOne();
  });
  it('[121196] PC 0x00001128 instr 0x008d2021', () => {
    const pc = 0x1128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2021 >>> 0);
    stepOne();
  });
  it('[121197] PC 0x0000112c instr 0x3c010000', () => {
    const pc = 0x112c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121198] PC 0x00001130 instr 0xac247460', () => {
    const pc = 0x1130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac247460 >>> 0);
    stepOne();
  });
  it('[121199] PC 0x00001134 instr 0x03e00008', () => {
    const pc = 0x1134;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121200] PC 0x00001138 instr 0x00000000', () => {
    const pc = 0x1138;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
