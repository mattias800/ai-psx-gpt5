import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 133301-133400', () => {
  beforeAll(() => initOnce());
  it('[133301] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[133302] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[133303] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[133304] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[133305] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133306] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[133307] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133308] PC 0x00001174 instr 0x27bdffd8', () => {
    const pc = 0x1174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[133309] PC 0x00001178 instr 0xafb1001c', () => {
    const pc = 0x1178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[133310] PC 0x0000117c instr 0x00808821', () => {
    const pc = 0x117c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808821 >>> 0);
    stepOne();
  });
  it('[133311] PC 0x00001180 instr 0x26310001', () => {
    const pc = 0x1180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[133312] PC 0x00001184 instr 0x3c0e0000', () => {
    const pc = 0x1184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[133313] PC 0x00001188 instr 0x8dce6d30', () => {
    const pc = 0x1188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce6d30 >>> 0);
    stepOne();
  });
  it('[133314] PC 0x0000118c instr 0x26310001', () => {
    const pc = 0x118c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[133315] PC 0x00001190 instr 0xafb00018', () => {
    const pc = 0x1190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[133316] PC 0x00001194 instr 0x26310001', () => {
    const pc = 0x1194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[133317] PC 0x00001198 instr 0x2401fffc', () => {
    const pc = 0x1198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401fffc >>> 0);
    stepOne();
  });
  it('[133318] PC 0x0000119c instr 0xafbf0024', () => {
    const pc = 0x119c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[133319] PC 0x000011a0 instr 0xafb20020', () => {
    const pc = 0x11a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[133320] PC 0x000011a4 instr 0x24100002', () => {
    const pc = 0x11a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24100002 >>> 0);
    stepOne();
  });
  it('[133321] PC 0x000011a8 instr 0x11c00003', () => {
    const pc = 0x11a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c00003 >>> 0);
    stepOne();
  });
  it('[133322] PC 0x000011ac instr 0x02218824', () => {
    const pc = 0x11ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2218824 >>> 0);
    stepOne();
  });
  it('[133323] PC 0x000011b0 instr 0x1000001f', () => {
    const pc = 0x11b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000001f >>> 0);
    stepOne();
  });
  it('[133324] PC 0x000011b4 instr 0x2412fffe', () => {
    const pc = 0x11b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2412fffe >>> 0);
    stepOne();
  });
  it('[133325] PC 0x00001230 instr 0x3c080001', () => {
    const pc = 0x1230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080001 >>> 0);
    stepOne();
  });
  it('[133326] PC 0x00001234 instr 0x8d0885fc', () => {
    const pc = 0x1234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d0885fc >>> 0);
    stepOne();
  });
  it('[133327] PC 0x00001238 instr 0x00000000', () => {
    const pc = 0x1238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133328] PC 0x0000123c instr 0x8d040000', () => {
    const pc = 0x123c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d040000 >>> 0);
    stepOne();
  });
  it('[133329] PC 0x00001240 instr 0x00000000', () => {
    const pc = 0x1240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133330] PC 0x00001244 instr 0x30830001', () => {
    const pc = 0x1244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[133331] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[133332] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133333] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[133334] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133335] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[133336] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[133337] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[133338] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[133339] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[133340] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[133341] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[133342] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[133343] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[133344] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[133345] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[133346] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133347] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[133348] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[133349] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[133350] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[133351] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133352] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[133353] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133354] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[133355] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
  it('[133356] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133357] PC 0x000013b8 instr 0x3c0d0001', () => {
    const pc = 0x13b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0d0001 >>> 0);
    stepOne();
  });
  it('[133358] PC 0x000013bc instr 0x8dad85f8', () => {
    const pc = 0x13bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dad85f8 >>> 0);
    stepOne();
  });
  it('[133359] PC 0x000013c0 instr 0x3c010001', () => {
    const pc = 0x13c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[133360] PC 0x000013c4 instr 0xac2d85fc', () => {
    const pc = 0x13c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2d85fc >>> 0);
    stepOne();
  });
  it('[133361] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[133362] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[133363] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133364] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[133365] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[133366] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[133367] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[133368] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133369] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[133370] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133371] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[133372] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[133373] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[133374] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[133375] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[133376] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[133377] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[133378] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[133379] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[133380] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[133381] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[133382] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133383] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[133384] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[133385] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[133386] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[133387] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133388] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[133389] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133390] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[133391] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
  it('[133392] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133393] PC 0x000013a0 instr 0x0c00040c', () => {
    const pc = 0x13a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00040c >>> 0);
    stepOne();
  });
  it('[133394] PC 0x000013a4 instr 0x02202021', () => {
    const pc = 0x13a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2202021 >>> 0);
    stepOne();
  });
  it('[133395] PC 0x00001030 instr 0x10800021', () => {
    const pc = 0x1030;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800021 >>> 0);
    stepOne();
  });
  it('[133396] PC 0x00001034 instr 0x00000000', () => {
    const pc = 0x1034;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133397] PC 0x00001038 instr 0x3c020000', () => {
    const pc = 0x1038;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[133398] PC 0x0000103c instr 0x8c427464', () => {
    const pc = 0x103c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c427464 >>> 0);
    stepOne();
  });
  it('[133399] PC 0x00001040 instr 0x00000000', () => {
    const pc = 0x1040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133400] PC 0x00001044 instr 0x0044082b', () => {
    const pc = 0x1044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
});
