import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 137901-138000', () => {
  beforeAll(() => initOnce());
  it('[137901] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137902] PC 0x000013b8 instr 0x3c0d0001', () => {
    const pc = 0x13b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0d0001 >>> 0);
    stepOne();
  });
  it('[137903] PC 0x000013bc instr 0x8dad85f8', () => {
    const pc = 0x13bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dad85f8 >>> 0);
    stepOne();
  });
  it('[137904] PC 0x000013c0 instr 0x3c010001', () => {
    const pc = 0x13c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137905] PC 0x000013c4 instr 0xac2d85fc', () => {
    const pc = 0x13c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2d85fc >>> 0);
    stepOne();
  });
  it('[137906] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137907] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137908] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137909] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137910] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137911] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137912] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137913] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137914] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137915] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137916] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137917] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137918] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137919] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137920] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137921] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137922] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137923] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137924] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137925] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137926] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137927] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137928] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137929] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137930] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137931] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137932] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137933] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137934] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137935] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137936] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137937] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137938] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137939] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137940] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137941] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137942] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137943] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137944] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137945] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137946] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137947] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137948] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137949] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137950] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137951] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137952] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137953] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137954] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137955] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137956] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137957] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137958] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137959] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137960] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137961] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137962] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137963] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137964] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137965] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137966] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137967] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137968] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137969] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137970] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137971] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137972] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137973] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[137974] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
  it('[137975] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137976] PC 0x000013a0 instr 0x0c00040c', () => {
    const pc = 0x13a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00040c >>> 0);
    stepOne();
  });
  it('[137977] PC 0x000013a4 instr 0x02202021', () => {
    const pc = 0x13a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2202021 >>> 0);
    stepOne();
  });
  it('[137978] PC 0x00001030 instr 0x10800021', () => {
    const pc = 0x1030;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800021 >>> 0);
    stepOne();
  });
  it('[137979] PC 0x00001034 instr 0x00000000', () => {
    const pc = 0x1034;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137980] PC 0x00001038 instr 0x3c020000', () => {
    const pc = 0x1038;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[137981] PC 0x0000103c instr 0x8c427464', () => {
    const pc = 0x103c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c427464 >>> 0);
    stepOne();
  });
  it('[137982] PC 0x00001040 instr 0x00000000', () => {
    const pc = 0x1040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137983] PC 0x00001044 instr 0x0044082b', () => {
    const pc = 0x1044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[137984] PC 0x00001048 instr 0x14200005', () => {
    const pc = 0x1048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200005 >>> 0);
    stepOne();
  });
  it('[137985] PC 0x0000104c instr 0x00801821', () => {
    const pc = 0x104c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[137986] PC 0x00001050 instr 0x00401821', () => {
    const pc = 0x1050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[137987] PC 0x00001054 instr 0x10000003', () => {
    const pc = 0x1054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000003 >>> 0);
    stepOne();
  });
  it('[137988] PC 0x00001058 instr 0x00802821', () => {
    const pc = 0x1058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x802821 >>> 0);
    stepOne();
  });
  it('[137989] PC 0x00001064 instr 0x3c040000', () => {
    const pc = 0x1064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[137990] PC 0x00001068 instr 0x3c0e0000', () => {
    const pc = 0x1068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[137991] PC 0x0000106c instr 0x8c847460', () => {
    const pc = 0x106c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c847460 >>> 0);
    stepOne();
  });
  it('[137992] PC 0x00001070 instr 0x8dce7468', () => {
    const pc = 0x1070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7468 >>> 0);
    stepOne();
  });
  it('[137993] PC 0x00001074 instr 0x00000000', () => {
    const pc = 0x1074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137994] PC 0x00001078 instr 0x01c41023', () => {
    const pc = 0x1078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c41023 >>> 0);
    stepOne();
  });
  it('[137995] PC 0x0000107c instr 0x00021083', () => {
    const pc = 0x107c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21083 >>> 0);
    stepOne();
  });
  it('[137996] PC 0x00001080 instr 0x00021080', () => {
    const pc = 0x1080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x21080 >>> 0);
    stepOne();
  });
  it('[137997] PC 0x00001084 instr 0x2442fffc', () => {
    const pc = 0x1084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442fffc >>> 0);
    stepOne();
  });
  it('[137998] PC 0x00001088 instr 0x0043082b', () => {
    const pc = 0x1088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[137999] PC 0x0000108c instr 0x14200004', () => {
    const pc = 0x108c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[138000] PC 0x00001090 instr 0x0045082b', () => {
    const pc = 0x1090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x45082b >>> 0);
    stepOne();
  });
});
