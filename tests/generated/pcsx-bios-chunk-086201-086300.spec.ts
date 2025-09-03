import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86201-86300', () => {
  beforeAll(() => initOnce());
  it('[86201] PC 0x00003078 instr 0x8c6e0000', () => {
    const pc = 0x3078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6e0000 >>> 0);
    stepOne();
  });
  it('[86202] PC 0x0000307c instr 0x00000000', () => {
    const pc = 0x307c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86203] PC 0x00003080 instr 0x15c00003', () => {
    const pc = 0x3080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00003 >>> 0);
    stepOne();
  });
  it('[86204] PC 0x00003084 instr 0x00000000', () => {
    const pc = 0x3084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86205] PC 0x00003088 instr 0x1000000b', () => {
    const pc = 0x3088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000b >>> 0);
    stepOne();
  });
  it('[86206] PC 0x0000308c instr 0x00601021', () => {
    const pc = 0x308c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86207] PC 0x000030b8 instr 0x8fbf0014', () => {
    const pc = 0x30b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86208] PC 0x000030bc instr 0x27bd0018', () => {
    const pc = 0x30bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86209] PC 0x000030c0 instr 0x03e00008', () => {
    const pc = 0x30c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86210] PC 0x000030c4 instr 0x00000000', () => {
    const pc = 0x30c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86211] PC 0x0000296c instr 0x14400006', () => {
    const pc = 0x296c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400006 >>> 0);
    stepOne();
  });
  it('[86212] PC 0x00002970 instr 0x00403821', () => {
    const pc = 0x2970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x403821 >>> 0);
    stepOne();
  });
  it('[86213] PC 0x00002988 instr 0x8fa40038', () => {
    const pc = 0x2988;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40038 >>> 0);
    stepOne();
  });
  it('[86214] PC 0x0000298c instr 0x27a50028', () => {
    const pc = 0x298c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50028 >>> 0);
    stepOne();
  });
  it('[86215] PC 0x00002990 instr 0x27a60024', () => {
    const pc = 0x2990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a60024 >>> 0);
    stepOne();
  });
  it('[86216] PC 0x00002994 instr 0x0c000c7a', () => {
    const pc = 0x2994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c7a >>> 0);
    stepOne();
  });
  it('[86217] PC 0x00002998 instr 0xafa70034', () => {
    const pc = 0x2998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70034 >>> 0);
    stepOne();
  });
  it('[86218] PC 0x000031e8 instr 0x27bdff90', () => {
    const pc = 0x31e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdff90 >>> 0);
    stepOne();
  });
  it('[86219] PC 0x000031ec instr 0xafbf002c', () => {
    const pc = 0x31ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf002c >>> 0);
    stepOne();
  });
  it('[86220] PC 0x000031f0 instr 0xafb30028', () => {
    const pc = 0x31f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30028 >>> 0);
    stepOne();
  });
  it('[86221] PC 0x000031f4 instr 0xafb20024', () => {
    const pc = 0x31f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20024 >>> 0);
    stepOne();
  });
  it('[86222] PC 0x000031f8 instr 0xafb00020', () => {
    const pc = 0x31f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00020 >>> 0);
    stepOne();
  });
  it('[86223] PC 0x000031fc instr 0xafa50074', () => {
    const pc = 0x31fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa50074 >>> 0);
    stepOne();
  });
  it('[86224] PC 0x00003200 instr 0x808e0000', () => {
    const pc = 0x3200;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808e0000 >>> 0);
    stepOne();
  });
  it('[86225] PC 0x00003204 instr 0x24020020', () => {
    const pc = 0x3204;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24020020 >>> 0);
    stepOne();
  });
  it('[86226] PC 0x00003208 instr 0x144e0005', () => {
    const pc = 0x3208;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x144e0005 >>> 0);
    stepOne();
  });
  it('[86227] PC 0x0000320c instr 0x00c09821', () => {
    const pc = 0x320c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc09821 >>> 0);
    stepOne();
  });
  it('[86228] PC 0x00003220 instr 0xae600000', () => {
    const pc = 0x3220;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae600000 >>> 0);
    stepOne();
  });
  it('[86229] PC 0x00003224 instr 0xa3a00044', () => {
    const pc = 0x3224;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa3a00044 >>> 0);
    stepOne();
  });
  it('[86230] PC 0x00003228 instr 0x80820000', () => {
    const pc = 0x3228;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80820000 >>> 0);
    stepOne();
  });
  it('[86231] PC 0x0000322c instr 0x2405003a', () => {
    const pc = 0x322c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2405003a >>> 0);
    stepOne();
  });
  it('[86232] PC 0x00003230 instr 0x00809021', () => {
    const pc = 0x3230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x809021 >>> 0);
    stepOne();
  });
  it('[86233] PC 0x00003234 instr 0x10a2000e', () => {
    const pc = 0x3234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a2000e >>> 0);
    stepOne();
  });
  it('[86234] PC 0x00003238 instr 0x00001821', () => {
    const pc = 0x3238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1821 >>> 0);
    stepOne();
  });
  it('[86235] PC 0x0000323c instr 0x1040000d', () => {
    const pc = 0x323c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1040000d >>> 0);
    stepOne();
  });
  it('[86236] PC 0x00003240 instr 0x27b90070', () => {
    const pc = 0x3240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90070 >>> 0);
    stepOne();
  });
  it('[86237] PC 0x00003244 instr 0x27b80070', () => {
    const pc = 0x3244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b80070 >>> 0);
    stepOne();
  });
  it('[86238] PC 0x00003248 instr 0x82420000', () => {
    const pc = 0x3248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420000 >>> 0);
    stepOne();
  });
  it('[86239] PC 0x0000324c instr 0x00788021', () => {
    const pc = 0x324c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x788021 >>> 0);
    stepOne();
  });
  it('[86240] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86241] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86242] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86243] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86244] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86245] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86246] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86247] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86248] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86249] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86250] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86251] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86252] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86253] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86254] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86255] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86256] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86257] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86258] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86259] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86260] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86261] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86262] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86263] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86264] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86265] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86266] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86267] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86268] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86269] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86270] PC 0x00003268 instr 0x1440fff9', () => {
    const pc = 0x3268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fff9 >>> 0);
    stepOne();
  });
  it('[86271] PC 0x0000326c instr 0x00000000', () => {
    const pc = 0x326c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86272] PC 0x00003250 instr 0xa202ffd4', () => {
    const pc = 0x3250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa202ffd4 >>> 0);
    stepOne();
  });
  it('[86273] PC 0x00003254 instr 0x82420001', () => {
    const pc = 0x3254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82420001 >>> 0);
    stepOne();
  });
  it('[86274] PC 0x00003258 instr 0x26520001', () => {
    const pc = 0x3258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86275] PC 0x0000325c instr 0x24630001', () => {
    const pc = 0x325c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86276] PC 0x00003260 instr 0x10a20003', () => {
    const pc = 0x3260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a20003 >>> 0);
    stepOne();
  });
  it('[86277] PC 0x00003264 instr 0x26100001', () => {
    const pc = 0x3264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86278] PC 0x00003270 instr 0x27b90070', () => {
    const pc = 0x3270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90070 >>> 0);
    stepOne();
  });
  it('[86279] PC 0x00003274 instr 0x00798021', () => {
    const pc = 0x3274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x798021 >>> 0);
    stepOne();
  });
  it('[86280] PC 0x00003278 instr 0xa200ffd4', () => {
    const pc = 0x3278;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa200ffd4 >>> 0);
    stepOne();
  });
  it('[86281] PC 0x0000327c instr 0x82480000', () => {
    const pc = 0x327c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x82480000 >>> 0);
    stepOne();
  });
  it('[86282] PC 0x00003280 instr 0x00000000', () => {
    const pc = 0x3280;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86283] PC 0x00003284 instr 0x11000039', () => {
    const pc = 0x3284;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11000039 >>> 0);
    stepOne();
  });
  it('[86284] PC 0x00003288 instr 0x00000000', () => {
    const pc = 0x3288;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86285] PC 0x0000328c instr 0xafb10030', () => {
    const pc = 0x328c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb10030 >>> 0);
    stepOne();
  });
  it('[86286] PC 0x00003290 instr 0xae600000', () => {
    const pc = 0x3290;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae600000 >>> 0);
    stepOne();
  });
  it('[86287] PC 0x00003294 instr 0x9209ffd3', () => {
    const pc = 0x3294;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd3 >>> 0);
    stepOne();
  });
  it('[86288] PC 0x00003298 instr 0x3c110000', () => {
    const pc = 0x3298;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110000 >>> 0);
    stepOne();
  });
  it('[86289] PC 0x0000329c instr 0x263173d0', () => {
    const pc = 0x329c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x263173d0 >>> 0);
    stepOne();
  });
  it('[86290] PC 0x000032a0 instr 0x02295021', () => {
    const pc = 0x32a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86291] PC 0x000032a4 instr 0x814b0001', () => {
    const pc = 0x32a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
  it('[86292] PC 0x000032a8 instr 0x26520001', () => {
    const pc = 0x32a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[86293] PC 0x000032ac instr 0x316c0044', () => {
    const pc = 0x32ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0044 >>> 0);
    stepOne();
  });
  it('[86294] PC 0x000032b0 instr 0x2463ffff', () => {
    const pc = 0x32b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86295] PC 0x000032b4 instr 0x11800009', () => {
    const pc = 0x32b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800009 >>> 0);
    stepOne();
  });
  it('[86296] PC 0x000032b8 instr 0x2610ffff', () => {
    const pc = 0x32b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86297] PC 0x000032bc instr 0x920dffd3', () => {
    const pc = 0x32bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x920dffd3 >>> 0);
    stepOne();
  });
  it('[86298] PC 0x000032c0 instr 0x2463ffff', () => {
    const pc = 0x32c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86299] PC 0x000032c4 instr 0x022d7021', () => {
    const pc = 0x32c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22d7021 >>> 0);
    stepOne();
  });
  it('[86300] PC 0x000032c8 instr 0x81cf0001', () => {
    const pc = 0x32c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0001 >>> 0);
    stepOne();
  });
});
