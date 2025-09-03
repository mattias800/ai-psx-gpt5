import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 137701-137800', () => {
  beforeAll(() => initOnce());
  it('[137701] PC 0x000013b8 instr 0x3c0d0001', () => {
    const pc = 0x13b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0d0001 >>> 0);
    stepOne();
  });
  it('[137702] PC 0x000013bc instr 0x8dad85f8', () => {
    const pc = 0x13bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dad85f8 >>> 0);
    stepOne();
  });
  it('[137703] PC 0x000013c0 instr 0x3c010001', () => {
    const pc = 0x13c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137704] PC 0x000013c4 instr 0xac2d85fc', () => {
    const pc = 0x13c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2d85fc >>> 0);
    stepOne();
  });
  it('[137705] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137706] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137707] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137708] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137709] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137710] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137711] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137712] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137713] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137714] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137715] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137716] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137717] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137718] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137719] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137720] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137721] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137722] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137723] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137724] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137725] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137726] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137727] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137728] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137729] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137730] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137731] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137732] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137733] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137734] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137735] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137736] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137737] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137738] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137739] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137740] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137741] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137742] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137743] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137744] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137745] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137746] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137747] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137748] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137749] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137750] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137751] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137752] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137753] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[137754] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
  it('[137755] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137756] PC 0x000013a0 instr 0x0c00040c', () => {
    const pc = 0x13a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00040c >>> 0);
    stepOne();
  });
  it('[137757] PC 0x000013a4 instr 0x02202021', () => {
    const pc = 0x13a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2202021 >>> 0);
    stepOne();
  });
  it('[137758] PC 0x00001030 instr 0x10800021', () => {
    const pc = 0x1030;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800021 >>> 0);
    stepOne();
  });
  it('[137759] PC 0x00001034 instr 0x00000000', () => {
    const pc = 0x1034;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137760] PC 0x00001038 instr 0x3c020000', () => {
    const pc = 0x1038;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[137761] PC 0x0000103c instr 0x8c427464', () => {
    const pc = 0x103c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c427464 >>> 0);
    stepOne();
  });
  it('[137762] PC 0x00001040 instr 0x00000000', () => {
    const pc = 0x1040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137763] PC 0x00001044 instr 0x0044082b', () => {
    const pc = 0x1044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[137764] PC 0x00001048 instr 0x14200005', () => {
    const pc = 0x1048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200005 >>> 0);
    stepOne();
  });
  it('[137765] PC 0x0000104c instr 0x00801821', () => {
    const pc = 0x104c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[137766] PC 0x00001050 instr 0x00401821', () => {
    const pc = 0x1050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[137767] PC 0x00001054 instr 0x10000003', () => {
    const pc = 0x1054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000003 >>> 0);
    stepOne();
  });
  it('[137768] PC 0x00001058 instr 0x00802821', () => {
    const pc = 0x1058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x802821 >>> 0);
    stepOne();
  });
  it('[137769] PC 0x00001064 instr 0x3c040000', () => {
    const pc = 0x1064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[137770] PC 0x00001068 instr 0x3c0e0000', () => {
    const pc = 0x1068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[137771] PC 0x0000106c instr 0x8c847460', () => {
    const pc = 0x106c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c847460 >>> 0);
    stepOne();
  });
  it('[137772] PC 0x00001070 instr 0x8dce7468', () => {
    const pc = 0x1070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7468 >>> 0);
    stepOne();
  });
  it('[137773] PC 0x00001074 instr 0x00000000', () => {
    const pc = 0x1074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137774] PC 0x00001078 instr 0x01c41023', () => {
    const pc = 0x1078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c41023 >>> 0);
    stepOne();
  });
  it('[137775] PC 0x0000107c instr 0x00021083', () => {
    const pc = 0x107c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21083 >>> 0);
    stepOne();
  });
  it('[137776] PC 0x00001080 instr 0x00021080', () => {
    const pc = 0x1080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21080 >>> 0);
    stepOne();
  });
  it('[137777] PC 0x00001084 instr 0x2442fffc', () => {
    const pc = 0x1084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442fffc >>> 0);
    stepOne();
  });
  it('[137778] PC 0x00001088 instr 0x0043082b', () => {
    const pc = 0x1088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[137779] PC 0x0000108c instr 0x14200004', () => {
    const pc = 0x108c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[137780] PC 0x00001090 instr 0x0045082b', () => {
    const pc = 0x1090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
  it('[137781] PC 0x000010a0 instr 0x14200003', () => {
    const pc = 0x10a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200003 >>> 0);
    stepOne();
  });
  it('[137782] PC 0x000010a4 instr 0x00000000', () => {
    const pc = 0x10a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137783] PC 0x000010a8 instr 0x1000000e', () => {
    const pc = 0x10a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137784] PC 0x000010ac instr 0x00a03021', () => {
    const pc = 0x10ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa03021 >>> 0);
    stepOne();
  });
  it('[137785] PC 0x000010e4 instr 0x24cb0004', () => {
    const pc = 0x10e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24cb0004 >>> 0);
    stepOne();
  });
  it('[137786] PC 0x000010e8 instr 0x2418fffe', () => {
    const pc = 0x10e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2418fffe >>> 0);
    stepOne();
  });
  it('[137787] PC 0x000010ec instr 0x34ca0001', () => {
    const pc = 0x10ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34ca0001 >>> 0);
    stepOne();
  });
  it('[137788] PC 0x000010f0 instr 0x00001021', () => {
    const pc = 0x10f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[137789] PC 0x000010f4 instr 0x04c10002', () => {
    const pc = 0x10f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4c10002 >>> 0);
    stepOne();
  });
  it('[137790] PC 0x000010f8 instr 0x00c00821', () => {
    const pc = 0x10f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00821 >>> 0);
    stepOne();
  });
  it('[137791] PC 0x00001100 instr 0x0001c883', () => {
    const pc = 0x1100;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c883 >>> 0);
    stepOne();
  });
  it('[137792] PC 0x00001104 instr 0x00194080', () => {
    const pc = 0x1104;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x194080 >>> 0);
    stepOne();
  });
  it('[137793] PC 0x00001108 instr 0x00884821', () => {
    const pc = 0x1108;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x884821 >>> 0);
    stepOne();
  });
  it('[137794] PC 0x0000110c instr 0xad380000', () => {
    const pc = 0x110c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad380000 >>> 0);
    stepOne();
  });
  it('[137795] PC 0x00001110 instr 0xac8afffc', () => {
    const pc = 0x1110;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8afffc >>> 0);
    stepOne();
  });
  it('[137796] PC 0x00001114 instr 0x05610002', () => {
    const pc = 0x1114;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5610002 >>> 0);
    stepOne();
  });
  it('[137797] PC 0x00001118 instr 0x01600821', () => {
    const pc = 0x1118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1600821 >>> 0);
    stepOne();
  });
  it('[137798] PC 0x00001120 instr 0x00016083', () => {
    const pc = 0x1120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x16083 >>> 0);
    stepOne();
  });
  it('[137799] PC 0x00001124 instr 0x000c6880', () => {
    const pc = 0x1124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc6880 >>> 0);
    stepOne();
  });
  it('[137800] PC 0x00001128 instr 0x008d2021', () => {
    const pc = 0x1128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2021 >>> 0);
    stepOne();
  });
});
