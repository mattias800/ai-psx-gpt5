import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86601-86700', () => {
  beforeAll(() => initOnce());
  it('[86601] PC 0x000031ec instr 0xafbf002c', () => {
    const pc = 0x31ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf002c >>> 0);
    stepOne();
  });
  it('[86602] PC 0x000031f0 instr 0xafb30028', () => {
    const pc = 0x31f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30028 >>> 0);
    stepOne();
  });
  it('[86603] PC 0x000031f4 instr 0xafb20024', () => {
    const pc = 0x31f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20024 >>> 0);
    stepOne();
  });
  it('[86604] PC 0x000031f8 instr 0xafb00020', () => {
    const pc = 0x31f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00020 >>> 0);
    stepOne();
  });
  it('[86605] PC 0x000031fc instr 0xafa50074', () => {
    const pc = 0x31fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa50074 >>> 0);
    stepOne();
  });
  it('[86606] PC 0x00003200 instr 0x808e0000', () => {
    const pc = 0x3200;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808e0000 >>> 0);
    stepOne();
  });
  it('[86607] PC 0x00003204 instr 0x24020020', () => {
    const pc = 0x3204;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24020020 >>> 0);
    stepOne();
  });
  it('[86608] PC 0x00003208 instr 0x144e0005', () => {
    const pc = 0x3208;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x144e0005 >>> 0);
    stepOne();
  });
  it('[86609] PC 0x0000320c instr 0x00c09821', () => {
    const pc = 0x320c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc09821 >>> 0);
    stepOne();
  });
  it('[86610] PC 0x00003220 instr 0xae600000', () => {
    const pc = 0x3220;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae600000 >>> 0);
    stepOne();
  });
  it('[86611] PC 0x00003224 instr 0xa3a00044', () => {
    const pc = 0x3224;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa3a00044 >>> 0);
    stepOne();
  });
  it('[86612] PC 0x00003228 instr 0x80820000', () => {
    const pc = 0x3228;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[86613] PC 0x0000322c instr 0x2405003a', () => {
    const pc = 0x322c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2405003a >>> 0);
    stepOne();
  });
  it('[86614] PC 0x00003230 instr 0x00809021', () => {
    const pc = 0x3230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x809021 >>> 0);
    stepOne();
  });
  it('[86615] PC 0x00003234 instr 0x10a2000e', () => {
    const pc = 0x3234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a2000e >>> 0);
    stepOne();
  });
  it('[86616] PC 0x00003238 instr 0x00001821', () => {
    const pc = 0x3238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1821 >>> 0);
    stepOne();
  });
  it('[86617] PC 0x0000323c instr 0x1040000d', () => {
    const pc = 0x323c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1040000d >>> 0);
    stepOne();
  });
  it('[86618] PC 0x00003240 instr 0x27b90070', () => {
    const pc = 0x3240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90070 >>> 0);
    stepOne();
  });
  it('[86619] PC 0x00003244 instr 0x27b80070', () => {
    const pc = 0x3244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b80070 >>> 0);
    stepOne();
  });
  it('[86620] PC 0x00003248 instr 0x82420000', () => {
    const pc = 0x3248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420000 >>> 0);
    stepOne();
  });
  it('[86621] PC 0x0000324c instr 0x00788021', () => {
    const pc = 0x324c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x788021 >>> 0);
    stepOne();
  });
  it('[86622] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86623] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86624] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86625] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86626] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86627] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86628] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86629] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86630] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86631] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86632] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86633] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86634] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86635] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86636] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86637] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86638] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86639] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86640] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86641] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86642] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86643] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86644] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86645] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86646] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86647] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86648] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86649] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86650] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86651] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86652] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86653] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86654] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86655] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86656] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86657] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86658] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86659] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86660] PC 0x00003270 instr 0x27b90070', () => {
    const pc = 0x3270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90070 >>> 0);
    stepOne();
  });
  it('[86661] PC 0x00003274 instr 0x00798021', () => {
    const pc = 0x3274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x798021 >>> 0);
    stepOne();
  });
  it('[86662] PC 0x00003278 instr 0xa200ffd4', () => {
    const pc = 0x3278;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa200ffd4 >>> 0);
    stepOne();
  });
  it('[86663] PC 0x0000327c instr 0x82480000', () => {
    const pc = 0x327c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82480000 >>> 0);
    stepOne();
  });
  it('[86664] PC 0x00003280 instr 0x00000000', () => {
    const pc = 0x3280;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86665] PC 0x00003284 instr 0x11000039', () => {
    const pc = 0x3284;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11000039 >>> 0);
    stepOne();
  });
  it('[86666] PC 0x00003288 instr 0x00000000', () => {
    const pc = 0x3288;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86667] PC 0x0000328c instr 0xafb10030', () => {
    const pc = 0x328c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb10030 >>> 0);
    stepOne();
  });
  it('[86668] PC 0x00003290 instr 0xae600000', () => {
    const pc = 0x3290;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae600000 >>> 0);
    stepOne();
  });
  it('[86669] PC 0x00003294 instr 0x9209ffd3', () => {
    const pc = 0x3294;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd3 >>> 0);
    stepOne();
  });
  it('[86670] PC 0x00003298 instr 0x3c110000', () => {
    const pc = 0x3298;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110000 >>> 0);
    stepOne();
  });
  it('[86671] PC 0x0000329c instr 0x263173d0', () => {
    const pc = 0x329c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x263173d0 >>> 0);
    stepOne();
  });
  it('[86672] PC 0x000032a0 instr 0x02295021', () => {
    const pc = 0x32a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86673] PC 0x000032a4 instr 0x814b0001', () => {
    const pc = 0x32a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
  it('[86674] PC 0x000032a8 instr 0x26520001', () => {
    const pc = 0x32a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86675] PC 0x000032ac instr 0x316c0044', () => {
    const pc = 0x32ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0044 >>> 0);
    stepOne();
  });
  it('[86676] PC 0x000032b0 instr 0x2463ffff', () => {
    const pc = 0x32b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86677] PC 0x000032b4 instr 0x11800009', () => {
    const pc = 0x32b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800009 >>> 0);
    stepOne();
  });
  it('[86678] PC 0x000032b8 instr 0x2610ffff', () => {
    const pc = 0x32b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86679] PC 0x000032bc instr 0x920dffd3', () => {
    const pc = 0x32bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x920dffd3 >>> 0);
    stepOne();
  });
  it('[86680] PC 0x000032c0 instr 0x2463ffff', () => {
    const pc = 0x32c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86681] PC 0x000032c4 instr 0x022d7021', () => {
    const pc = 0x32c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22d7021 >>> 0);
    stepOne();
  });
  it('[86682] PC 0x000032c8 instr 0x81cf0001', () => {
    const pc = 0x32c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0001 >>> 0);
    stepOne();
  });
  it('[86683] PC 0x000032cc instr 0x2610ffff', () => {
    const pc = 0x32cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86684] PC 0x000032d0 instr 0x31f80044', () => {
    const pc = 0x32d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31f80044 >>> 0);
    stepOne();
  });
  it('[86685] PC 0x000032d4 instr 0x1700fff9', () => {
    const pc = 0x32d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1700fff9 >>> 0);
    stepOne();
  });
  it('[86686] PC 0x000032d8 instr 0x00000000', () => {
    const pc = 0x32d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86687] PC 0x000032bc instr 0x920dffd3', () => {
    const pc = 0x32bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x920dffd3 >>> 0);
    stepOne();
  });
  it('[86688] PC 0x000032c0 instr 0x2463ffff', () => {
    const pc = 0x32c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86689] PC 0x000032c4 instr 0x022d7021', () => {
    const pc = 0x32c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22d7021 >>> 0);
    stepOne();
  });
  it('[86690] PC 0x000032c8 instr 0x81cf0001', () => {
    const pc = 0x32c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0001 >>> 0);
    stepOne();
  });
  it('[86691] PC 0x000032cc instr 0x2610ffff', () => {
    const pc = 0x32cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86692] PC 0x000032d0 instr 0x31f80044', () => {
    const pc = 0x32d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31f80044 >>> 0);
    stepOne();
  });
  it('[86693] PC 0x000032d4 instr 0x1700fff9', () => {
    const pc = 0x32d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1700fff9 >>> 0);
    stepOne();
  });
  it('[86694] PC 0x000032d8 instr 0x00000000', () => {
    const pc = 0x32d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86695] PC 0x000032dc instr 0x24630001', () => {
    const pc = 0x32dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86696] PC 0x000032e0 instr 0x27b90044', () => {
    const pc = 0x32e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90044 >>> 0);
    stepOne();
  });
  it('[86697] PC 0x000032e4 instr 0x00794021', () => {
    const pc = 0x32e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x794021 >>> 0);
    stepOne();
  });
  it('[86698] PC 0x000032e8 instr 0xafa80068', () => {
    const pc = 0x32e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa80068 >>> 0);
    stepOne();
  });
  it('[86699] PC 0x000032ec instr 0x8204ffd5', () => {
    const pc = 0x32ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd5 >>> 0);
    stepOne();
  });
  it('[86700] PC 0x000032f0 instr 0x26100001', () => {
    const pc = 0x32f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
});
