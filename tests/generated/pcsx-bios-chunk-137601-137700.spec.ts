import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 137601-137700', () => {
  beforeAll(() => initOnce());
  it('[137601] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[137602] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[137603] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137604] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[137605] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[137606] PC 0xbfc00e2c instr 0x8fa20224', () => {
    const pc = 0xbfc00e2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa20224 >>> 0);
    stepOne();
  });
  it('[137607] PC 0xbfc00e30 instr 0x8fb00060', () => {
    const pc = 0xbfc00e30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00060 >>> 0);
    stepOne();
  });
  it('[137608] PC 0xbfc00e34 instr 0x8fb1005c', () => {
    const pc = 0xbfc00e34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1005c >>> 0);
    stepOne();
  });
  it('[137609] PC 0xbfc00e38 instr 0x8fb20058', () => {
    const pc = 0xbfc00e38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20058 >>> 0);
    stepOne();
  });
  it('[137610] PC 0xbfc00e3c instr 0x8fb40054', () => {
    const pc = 0xbfc00e3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb40054 >>> 0);
    stepOne();
  });
  it('[137611] PC 0xbfc00e40 instr 0x8fb50050', () => {
    const pc = 0xbfc00e40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb50050 >>> 0);
    stepOne();
  });
  it('[137612] PC 0xbfc00e44 instr 0x8fb6004c', () => {
    const pc = 0xbfc00e44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb6004c >>> 0);
    stepOne();
  });
  it('[137613] PC 0xbfc00e48 instr 0x8fb70048', () => {
    const pc = 0xbfc00e48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb70048 >>> 0);
    stepOne();
  });
  it('[137614] PC 0xbfc00e4c instr 0x8fbe0044', () => {
    const pc = 0xbfc00e4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbe0044 >>> 0);
    stepOne();
  });
  it('[137615] PC 0xbfc00e50 instr 0x1000029f', () => {
    const pc = 0xbfc00e50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000029f >>> 0);
    stepOne();
  });
  it('[137616] PC 0xbfc00e54 instr 0x8fbf003c', () => {
    const pc = 0xbfc00e54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf003c >>> 0);
    stepOne();
  });
  it('[137617] PC 0xbfc018d0 instr 0x8fb30038', () => {
    const pc = 0xbfc018d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30038 >>> 0);
    stepOne();
  });
  it('[137618] PC 0xbfc018d4 instr 0x03e00008', () => {
    const pc = 0xbfc018d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[137619] PC 0xbfc018d8 instr 0x27bd0230', () => {
    const pc = 0xbfc018d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0230 >>> 0);
    stepOne();
  });
  it('[137620] PC 0xbfc01910 instr 0x8fbf0014', () => {
    const pc = 0xbfc01910;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[137621] PC 0xbfc01914 instr 0x27bd0018', () => {
    const pc = 0xbfc01914;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[137622] PC 0xbfc01918 instr 0x03e00008', () => {
    const pc = 0xbfc01918;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[137623] PC 0xbfc0191c instr 0x00000000', () => {
    const pc = 0xbfc0191c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137624] PC 0xbfc04754 instr 0xafb10034', () => {
    const pc = 0xbfc04754;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb10034 >>> 0);
    stepOne();
  });
  it('[137625] PC 0xbfc04758 instr 0x00118880', () => {
    const pc = 0xbfc04758;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x118880 >>> 0);
    stepOne();
  });
  it('[137626] PC 0xbfc0475c instr 0x3c01a000', () => {
    const pc = 0xbfc0475c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[137627] PC 0xbfc04760 instr 0xac31010c', () => {
    const pc = 0xbfc04760;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac31010c >>> 0);
    stepOne();
  });
  it('[137628] PC 0xbfc04764 instr 0xafb00030', () => {
    const pc = 0xbfc04764;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00030 >>> 0);
    stepOne();
  });
  it('[137629] PC 0xbfc04768 instr 0x02000821', () => {
    const pc = 0xbfc04768;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2000821 >>> 0);
    stepOne();
  });
  it('[137630] PC 0xbfc0476c instr 0x00018080', () => {
    const pc = 0xbfc0476c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18080 >>> 0);
    stepOne();
  });
  it('[137631] PC 0xbfc04770 instr 0x02018023', () => {
    const pc = 0xbfc04770;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2018023 >>> 0);
    stepOne();
  });
  it('[137632] PC 0xbfc04774 instr 0x00108180', () => {
    const pc = 0xbfc04774;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x108180 >>> 0);
    stepOne();
  });
  it('[137633] PC 0xbfc04778 instr 0x3c01a000', () => {
    const pc = 0xbfc04778;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[137634] PC 0xbfc0477c instr 0xac300114', () => {
    const pc = 0xbfc0477c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac300114 >>> 0);
    stepOne();
  });
  it('[137635] PC 0xbfc04780 instr 0x0ff036b8', () => {
    const pc = 0xbfc04780;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036b8 >>> 0);
    stepOne();
  });
  it('[137636] PC 0xbfc04784 instr 0x02202021', () => {
    const pc = 0xbfc04784;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2202021 >>> 0);
    stepOne();
  });
  it('[137637] PC 0xbfc0dae0 instr 0x240a00b0', () => {
    const pc = 0xbfc0dae0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[137638] PC 0xbfc0dae4 instr 0x01400008', () => {
    const pc = 0xbfc0dae4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[137639] PC 0xbfc0dae8 instr 0x24090000', () => {
    const pc = 0xbfc0dae8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090000 >>> 0);
    stepOne();
  });
  it('[137640] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[137641] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[137642] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[137643] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137644] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[137645] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[137646] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[137647] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[137648] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[137649] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137650] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[137651] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137652] PC 0x00001174 instr 0x27bdffd8', () => {
    const pc = 0x1174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[137653] PC 0x00001178 instr 0xafb1001c', () => {
    const pc = 0x1178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1001c >>> 0);
    stepOne();
  });
  it('[137654] PC 0x0000117c instr 0x00808821', () => {
    const pc = 0x117c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808821 >>> 0);
    stepOne();
  });
  it('[137655] PC 0x00001180 instr 0x26310001', () => {
    const pc = 0x1180;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137656] PC 0x00001184 instr 0x3c0e0000', () => {
    const pc = 0x1184;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[137657] PC 0x00001188 instr 0x8dce6d30', () => {
    const pc = 0x1188;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce6d30 >>> 0);
    stepOne();
  });
  it('[137658] PC 0x0000118c instr 0x26310001', () => {
    const pc = 0x118c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137659] PC 0x00001190 instr 0xafb00018', () => {
    const pc = 0x1190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00018 >>> 0);
    stepOne();
  });
  it('[137660] PC 0x00001194 instr 0x26310001', () => {
    const pc = 0x1194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310001 >>> 0);
    stepOne();
  });
  it('[137661] PC 0x00001198 instr 0x2401fffc', () => {
    const pc = 0x1198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401fffc >>> 0);
    stepOne();
  });
  it('[137662] PC 0x0000119c instr 0xafbf0024', () => {
    const pc = 0x119c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[137663] PC 0x000011a0 instr 0xafb20020', () => {
    const pc = 0x11a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20020 >>> 0);
    stepOne();
  });
  it('[137664] PC 0x000011a4 instr 0x24100002', () => {
    const pc = 0x11a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24100002 >>> 0);
    stepOne();
  });
  it('[137665] PC 0x000011a8 instr 0x11c00003', () => {
    const pc = 0x11a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c00003 >>> 0);
    stepOne();
  });
  it('[137666] PC 0x000011ac instr 0x02218824', () => {
    const pc = 0x11ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2218824 >>> 0);
    stepOne();
  });
  it('[137667] PC 0x000011b0 instr 0x1000001f', () => {
    const pc = 0x11b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000001f >>> 0);
    stepOne();
  });
  it('[137668] PC 0x000011b4 instr 0x2412fffe', () => {
    const pc = 0x11b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2412fffe >>> 0);
    stepOne();
  });
  it('[137669] PC 0x00001230 instr 0x3c080001', () => {
    const pc = 0x1230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080001 >>> 0);
    stepOne();
  });
  it('[137670] PC 0x00001234 instr 0x8d0885fc', () => {
    const pc = 0x1234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d0885fc >>> 0);
    stepOne();
  });
  it('[137671] PC 0x00001238 instr 0x00000000', () => {
    const pc = 0x1238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137672] PC 0x0000123c instr 0x8d040000', () => {
    const pc = 0x123c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d040000 >>> 0);
    stepOne();
  });
  it('[137673] PC 0x00001240 instr 0x00000000', () => {
    const pc = 0x1240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137674] PC 0x00001244 instr 0x30830001', () => {
    const pc = 0x1244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137675] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137676] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137677] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137678] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137679] PC 0x00001370 instr 0x3c090001', () => {
    const pc = 0x1370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[137680] PC 0x00001374 instr 0x8d2985fc', () => {
    const pc = 0x1374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d2985fc >>> 0);
    stepOne();
  });
  it('[137681] PC 0x00001378 instr 0x00044082', () => {
    const pc = 0x1378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082 >>> 0);
    stepOne();
  });
  it('[137682] PC 0x0000137c instr 0x00085080', () => {
    const pc = 0x137c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x85080 >>> 0);
    stepOne();
  });
  it('[137683] PC 0x00001380 instr 0x012a5821', () => {
    const pc = 0x1380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x12a5821 >>> 0);
    stepOne();
  });
  it('[137684] PC 0x00001384 instr 0x256e0004', () => {
    const pc = 0x1384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x256e0004 >>> 0);
    stepOne();
  });
  it('[137685] PC 0x00001388 instr 0x3c010001', () => {
    const pc = 0x1388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[137686] PC 0x0000138c instr 0x1000000e', () => {
    const pc = 0x138c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000e >>> 0);
    stepOne();
  });
  it('[137687] PC 0x00001390 instr 0xac2e85fc', () => {
    const pc = 0x1390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac2e85fc >>> 0);
    stepOne();
  });
  it('[137688] PC 0x000013c8 instr 0x3c0f0001', () => {
    const pc = 0x13c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[137689] PC 0x000013cc instr 0x8def85fc', () => {
    const pc = 0x13cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def85fc >>> 0);
    stepOne();
  });
  it('[137690] PC 0x000013d0 instr 0x00000000', () => {
    const pc = 0x13d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137691] PC 0x000013d4 instr 0x8de40000', () => {
    const pc = 0x13d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8de40000 >>> 0);
    stepOne();
  });
  it('[137692] PC 0x000013d8 instr 0x1000ff9b', () => {
    const pc = 0x13d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ff9b >>> 0);
    stepOne();
  });
  it('[137693] PC 0x000013dc instr 0x30830001', () => {
    const pc = 0x13dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[137694] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[137695] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137696] PC 0x00001368 instr 0x1244000a', () => {
    const pc = 0x1368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1244000a >>> 0);
    stepOne();
  });
  it('[137697] PC 0x0000136c instr 0x00000000', () => {
    const pc = 0x136c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[137698] PC 0x00001394 instr 0x2610ffff', () => {
    const pc = 0x1394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[137699] PC 0x00001398 instr 0x1e000007', () => {
    const pc = 0x1398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e000007 >>> 0);
    stepOne();
  });
  it('[137700] PC 0x0000139c instr 0x00000000', () => {
    const pc = 0x139c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
