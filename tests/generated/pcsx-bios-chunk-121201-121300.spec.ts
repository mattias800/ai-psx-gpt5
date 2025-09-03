import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121201-121300', () => {
  beforeAll(() => initOnce());
  it('[121201] PC 0x00001204 instr 0x10400003', () => {
    const pc = 0x1204;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400003 >>> 0);
    stepOne();
  });
  it('[121202] PC 0x00001208 instr 0x00000000', () => {
    const pc = 0x1208;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121203] PC 0x00001214 instr 0x3c180001', () => {
    const pc = 0x1214;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c180001 >>> 0);
    stepOne();
  });
  it('[121204] PC 0x00001218 instr 0x8f1885fc', () => {
    const pc = 0x1218;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f1885fc >>> 0);
    stepOne();
  });
  it('[121205] PC 0x0000121c instr 0x3c010001', () => {
    const pc = 0x121c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[121206] PC 0x00001220 instr 0xac3885f8', () => {
    const pc = 0x1220;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac3885f8 >>> 0);
    stepOne();
  });
  it('[121207] PC 0x00001224 instr 0x3c010000', () => {
    const pc = 0x1224;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121208] PC 0x00001228 instr 0x24190001', () => {
    const pc = 0x1228;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24190001 >>> 0);
    stepOne();
  });
  it('[121209] PC 0x0000122c instr 0xac396d30', () => {
    const pc = 0x122c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac396d30 >>> 0);
    stepOne();
  });
  it('[121210] PC 0x00001230 instr 0x3c080001', () => {
    const pc = 0x1230;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080001 >>> 0);
    stepOne();
  });
  it('[121211] PC 0x00001234 instr 0x8d0885fc', () => {
    const pc = 0x1234;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d0885fc >>> 0);
    stepOne();
  });
  it('[121212] PC 0x00001238 instr 0x00000000', () => {
    const pc = 0x1238;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121213] PC 0x0000123c instr 0x8d040000', () => {
    const pc = 0x123c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d040000 >>> 0);
    stepOne();
  });
  it('[121214] PC 0x00001240 instr 0x00000000', () => {
    const pc = 0x1240;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121215] PC 0x00001244 instr 0x30830001', () => {
    const pc = 0x1244;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x30830001 >>> 0);
    stepOne();
  });
  it('[121216] PC 0x00001248 instr 0x10600047', () => {
    const pc = 0x1248;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10600047 >>> 0);
    stepOne();
  });
  it('[121217] PC 0x0000124c instr 0x00000000', () => {
    const pc = 0x124c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121218] PC 0x00001250 instr 0x36220001', () => {
    const pc = 0x1250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36220001 >>> 0);
    stepOne();
  });
  it('[121219] PC 0x00001254 instr 0x14440007', () => {
    const pc = 0x1254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14440007 >>> 0);
    stepOne();
  });
  it('[121220] PC 0x00001258 instr 0x0044082b', () => {
    const pc = 0x1258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x44082b >>> 0);
    stepOne();
  });
  it('[121221] PC 0x0000125c instr 0x3c0a0001', () => {
    const pc = 0x125c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0a0001 >>> 0);
    stepOne();
  });
  it('[121222] PC 0x00001260 instr 0x8d4a85fc', () => {
    const pc = 0x1260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4a85fc >>> 0);
    stepOne();
  });
  it('[121223] PC 0x00001264 instr 0x00924824', () => {
    const pc = 0x1264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x924824 >>> 0);
    stepOne();
  });
  it('[121224] PC 0x00001268 instr 0x1000005d', () => {
    const pc = 0x1268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000005d >>> 0);
    stepOne();
  });
  it('[121225] PC 0x0000126c instr 0xad490000', () => {
    const pc = 0x126c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad490000 >>> 0);
    stepOne();
  });
  it('[121226] PC 0x000013e0 instr 0x3c020001', () => {
    const pc = 0x13e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[121227] PC 0x000013e4 instr 0x8c4285fc', () => {
    const pc = 0x13e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4285fc >>> 0);
    stepOne();
  });
  it('[121228] PC 0x000013e8 instr 0x00000000', () => {
    const pc = 0x13e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121229] PC 0x000013ec instr 0x24420004', () => {
    const pc = 0x13ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[121230] PC 0x000013f0 instr 0x8fbf0024', () => {
    const pc = 0x13f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[121231] PC 0x000013f4 instr 0x8fb00018', () => {
    const pc = 0x13f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[121232] PC 0x000013f8 instr 0x8fb1001c', () => {
    const pc = 0x13f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[121233] PC 0x000013fc instr 0x8fb20020', () => {
    const pc = 0x13fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[121234] PC 0x00001400 instr 0x03e00008', () => {
    const pc = 0x1400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121235] PC 0x00001404 instr 0x27bd0028', () => {
    const pc = 0x1404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[121236] PC 0xbfc0462c instr 0x8fa50020', () => {
    const pc = 0xbfc0462c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa50020 >>> 0);
    stepOne();
  });
  it('[121237] PC 0xbfc04630 instr 0x14400003', () => {
    const pc = 0xbfc04630;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[121238] PC 0xbfc04634 instr 0x00402021', () => {
    const pc = 0xbfc04634;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402021 >>> 0);
    stepOne();
  });
  it('[121239] PC 0xbfc04640 instr 0xafa4001c', () => {
    const pc = 0xbfc04640;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa4001c >>> 0);
    stepOne();
  });
  it('[121240] PC 0xbfc04644 instr 0x0ff006b3', () => {
    const pc = 0xbfc04644;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff006b3 >>> 0);
    stepOne();
  });
  it('[121241] PC 0xbfc04648 instr 0xafa50020', () => {
    const pc = 0xbfc04648;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa50020 >>> 0);
    stepOne();
  });
  it('[121242] PC 0xbfc01acc instr 0x10800003', () => {
    const pc = 0xbfc01acc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[121243] PC 0xbfc01ad0 instr 0x00000000', () => {
    const pc = 0xbfc01ad0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121244] PC 0xbfc01ad4 instr 0x1ca00003', () => {
    const pc = 0xbfc01ad4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca00003 >>> 0);
    stepOne();
  });
  it('[121245] PC 0xbfc01ad8 instr 0x00000000', () => {
    const pc = 0xbfc01ad8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121246] PC 0xbfc01ae4 instr 0x18a00005', () => {
    const pc = 0xbfc01ae4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18a00005 >>> 0);
    stepOne();
  });
  it('[121247] PC 0xbfc01ae8 instr 0x00801821', () => {
    const pc = 0xbfc01ae8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[121248] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121249] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121250] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121251] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121252] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121253] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121254] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121255] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121256] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121257] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121258] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121259] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121260] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121261] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121262] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121263] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121264] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121265] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121266] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121267] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121268] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121269] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121270] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121271] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121272] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121273] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121274] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121275] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121276] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121277] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121278] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121279] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121280] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121281] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121282] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121283] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121284] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121285] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121286] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121287] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121288] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121289] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121290] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121291] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121292] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121293] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121294] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121295] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121296] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121297] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121298] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121299] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121300] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
