import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 129301-129400', () => {
  beforeAll(() => initOnce());
  it('[129301] PC 0x00002d44 instr 0x11a00018', () => {
    const pc = 0x2d44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11a00018 >>> 0);
    stepOne();
  });
  it('[129302] PC 0x00002d48 instr 0x00000000', () => {
    const pc = 0x2d48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129303] PC 0x00002da8 instr 0xafa40024', () => {
    const pc = 0x2da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[129304] PC 0x00002dac instr 0x8c680018', () => {
    const pc = 0x2dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c680018 >>> 0);
    stepOne();
  });
  it('[129305] PC 0x00002db0 instr 0x24050002', () => {
    const pc = 0x2db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050002 >>> 0);
    stepOne();
  });
  it('[129306] PC 0x00002db4 instr 0x0100f809', () => {
    const pc = 0x2db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100f809 >>> 0);
    stepOne();
  });
  it('[129307] PC 0x00002db8 instr 0x00000000', () => {
    const pc = 0x2db8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129308] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[129309] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[129310] PC 0x00002dbc instr 0x8fa40024', () => {
    const pc = 0x2dbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40024 >>> 0);
    stepOne();
  });
  it('[129311] PC 0x00002dc0 instr 0x18400005', () => {
    const pc = 0x2dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18400005 >>> 0);
    stepOne();
  });
  it('[129312] PC 0x00002dc4 instr 0x00401821', () => {
    const pc = 0x2dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[129313] PC 0x00002dd8 instr 0x04410005', () => {
    const pc = 0x2dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4410005 >>> 0);
    stepOne();
  });
  it('[129314] PC 0x00002ddc instr 0x00601021', () => {
    const pc = 0x2ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[129315] PC 0x00002df0 instr 0x8fbf001c', () => {
    const pc = 0x2df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[129316] PC 0x00002df4 instr 0x27bd0028', () => {
    const pc = 0x2df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[129317] PC 0x00002df8 instr 0x03e00008', () => {
    const pc = 0x2df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[129318] PC 0x00002dfc instr 0x00000000', () => {
    const pc = 0x2dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129319] PC 0x00004124 instr 0x8fbf0014', () => {
    const pc = 0x4124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[129320] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[129321] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[129322] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129323] PC 0xbfc00e6c instr 0x2407002a', () => {
    const pc = 0xbfc00e6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[129324] PC 0xbfc00e70 instr 0x24080044', () => {
    const pc = 0xbfc00e70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[129325] PC 0xbfc00e74 instr 0x24090032', () => {
    const pc = 0xbfc00e74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[129326] PC 0xbfc00e78 instr 0x240a002d', () => {
    const pc = 0xbfc00e78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[129327] PC 0xbfc00e7c instr 0x240b0020', () => {
    const pc = 0xbfc00e7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[129328] PC 0xbfc00e80 instr 0x240c0023', () => {
    const pc = 0xbfc00e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[129329] PC 0xbfc00e84 instr 0x240d002b', () => {
    const pc = 0xbfc00e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[129330] PC 0xbfc00e88 instr 0x1000028e', () => {
    const pc = 0xbfc00e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000028e >>> 0);
    stepOne();
  });
  it('[129331] PC 0xbfc00e8c instr 0x241f0030', () => {
    const pc = 0xbfc00e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[129332] PC 0xbfc018c4 instr 0x1000fd55', () => {
    const pc = 0xbfc018c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000fd55 >>> 0);
    stepOne();
  });
  it('[129333] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[129334] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[129335] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129336] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[129337] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[129338] PC 0xbfc00e5c instr 0x1081000d', () => {
    const pc = 0xbfc00e5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1081000d >>> 0);
    stepOne();
  });
  it('[129339] PC 0xbfc00e60 instr 0x00008821', () => {
    const pc = 0xbfc00e60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8821 >>> 0);
    stepOne();
  });
  it('[129340] PC 0xbfc00e94 instr 0xafa00204', () => {
    const pc = 0xbfc00e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa00204 >>> 0);
    stepOne();
  });
  it('[129341] PC 0xbfc00e98 instr 0x00008021', () => {
    const pc = 0xbfc00e98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8021 >>> 0);
    stepOne();
  });
  it('[129342] PC 0xbfc00e9c instr 0x0000a821', () => {
    const pc = 0xbfc00e9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa821 >>> 0);
    stepOne();
  });
  it('[129343] PC 0xbfc00ea0 instr 0x2406ffff', () => {
    const pc = 0xbfc00ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2406ffff >>> 0);
    stepOne();
  });
  it('[129344] PC 0xbfc00ea4 instr 0x0000a021', () => {
    const pc = 0xbfc00ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa021 >>> 0);
    stepOne();
  });
  it('[129345] PC 0xbfc00ea8 instr 0x92430001', () => {
    const pc = 0xbfc00ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[129346] PC 0xbfc00eac instr 0x26520001', () => {
    const pc = 0xbfc00eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[129347] PC 0xbfc00eb0 instr 0x100001e6', () => {
    const pc = 0xbfc00eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100001e6 >>> 0);
    stepOne();
  });
  it('[129348] PC 0xbfc00eb4 instr 0x00601021', () => {
    const pc = 0xbfc00eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[129349] PC 0xbfc0164c instr 0x1048fe71', () => {
    const pc = 0xbfc0164c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1048fe71 >>> 0);
    stepOne();
  });
  it('[129350] PC 0xbfc01650 instr 0x2c410045', () => {
    const pc = 0xbfc01650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410045 >>> 0);
    stepOne();
  });
  it('[129351] PC 0xbfc01654 instr 0x10200058', () => {
    const pc = 0xbfc01654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200058 >>> 0);
    stepOne();
  });
  it('[129352] PC 0xbfc01658 instr 0x24010069', () => {
    const pc = 0xbfc01658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010069 >>> 0);
    stepOne();
  });
  it('[129353] PC 0xbfc0165c instr 0x1049fe4d', () => {
    const pc = 0xbfc0165c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1049fe4d >>> 0);
    stepOne();
  });
  it('[129354] PC 0xbfc01660 instr 0x2c410033', () => {
    const pc = 0xbfc01660;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410033 >>> 0);
    stepOne();
  });
  it('[129355] PC 0xbfc01664 instr 0x10200034', () => {
    const pc = 0xbfc01664;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200034 >>> 0);
    stepOne();
  });
  it('[129356] PC 0xbfc01668 instr 0x24010036', () => {
    const pc = 0xbfc01668;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010036 >>> 0);
    stepOne();
  });
  it('[129357] PC 0xbfc0166c instr 0x104afe1d', () => {
    const pc = 0xbfc0166c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x104afe1d >>> 0);
    stepOne();
  });
  it('[129358] PC 0xbfc01670 instr 0x2c41002e', () => {
    const pc = 0xbfc01670;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c41002e >>> 0);
    stepOne();
  });
  it('[129359] PC 0xbfc01674 instr 0x10200022', () => {
    const pc = 0xbfc01674;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200022 >>> 0);
    stepOne();
  });
  it('[129360] PC 0xbfc01678 instr 0x00000000', () => {
    const pc = 0xbfc01678;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129361] PC 0xbfc01700 instr 0x105ffe22', () => {
    const pc = 0xbfc01700;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x105ffe22 >>> 0);
    stepOne();
  });
  it('[129362] PC 0xbfc01704 instr 0x2c410031', () => {
    const pc = 0xbfc01704;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410031 >>> 0);
    stepOne();
  });
  it('[129363] PC 0xbfc00f8c instr 0x1000ffc6', () => {
    const pc = 0xbfc00f8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ffc6 >>> 0);
    stepOne();
  });
  it('[129364] PC 0xbfc00f90 instr 0x36310020', () => {
    const pc = 0xbfc00f90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36310020 >>> 0);
    stepOne();
  });
  it('[129365] PC 0xbfc00ea8 instr 0x92430001', () => {
    const pc = 0xbfc00ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[129366] PC 0xbfc00eac instr 0x26520001', () => {
    const pc = 0xbfc00eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[129367] PC 0xbfc00eb0 instr 0x100001e6', () => {
    const pc = 0xbfc00eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100001e6 >>> 0);
    stepOne();
  });
  it('[129368] PC 0xbfc00eb4 instr 0x00601021', () => {
    const pc = 0xbfc00eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[129369] PC 0xbfc0164c instr 0x1048fe71', () => {
    const pc = 0xbfc0164c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1048fe71 >>> 0);
    stepOne();
  });
  it('[129370] PC 0xbfc01650 instr 0x2c410045', () => {
    const pc = 0xbfc01650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410045 >>> 0);
    stepOne();
  });
  it('[129371] PC 0xbfc01654 instr 0x10200058', () => {
    const pc = 0xbfc01654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200058 >>> 0);
    stepOne();
  });
  it('[129372] PC 0xbfc01658 instr 0x24010069', () => {
    const pc = 0xbfc01658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010069 >>> 0);
    stepOne();
  });
  it('[129373] PC 0xbfc0165c instr 0x1049fe4d', () => {
    const pc = 0xbfc0165c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1049fe4d >>> 0);
    stepOne();
  });
  it('[129374] PC 0xbfc01660 instr 0x2c410033', () => {
    const pc = 0xbfc01660;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410033 >>> 0);
    stepOne();
  });
  it('[129375] PC 0xbfc00f94 instr 0x00008021', () => {
    const pc = 0xbfc00f94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8021 >>> 0);
    stepOne();
  });
  it('[129376] PC 0xbfc00f98 instr 0x00107080', () => {
    const pc = 0xbfc00f98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x107080 >>> 0);
    stepOne();
  });
  it('[129377] PC 0xbfc00f9c instr 0x01d07021', () => {
    const pc = 0xbfc00f9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1d07021 >>> 0);
    stepOne();
  });
  it('[129378] PC 0xbfc00fa0 instr 0x000e7040', () => {
    const pc = 0xbfc00fa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7040 >>> 0);
    stepOne();
  });
  it('[129379] PC 0xbfc00fa4 instr 0x01c38021', () => {
    const pc = 0xbfc00fa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c38021 >>> 0);
    stepOne();
  });
  it('[129380] PC 0xbfc00fa8 instr 0x92430001', () => {
    const pc = 0xbfc00fa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[129381] PC 0xbfc00fac instr 0x2610ffd0', () => {
    const pc = 0xbfc00fac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffd0 >>> 0);
    stepOne();
  });
  it('[129382] PC 0xbfc00fb0 instr 0x2c610080', () => {
    const pc = 0xbfc00fb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c610080 >>> 0);
    stepOne();
  });
  it('[129383] PC 0xbfc00fb4 instr 0x10200007', () => {
    const pc = 0xbfc00fb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200007 >>> 0);
    stepOne();
  });
  it('[129384] PC 0xbfc00fb8 instr 0x26520001', () => {
    const pc = 0xbfc00fb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[129385] PC 0xbfc00fbc instr 0x03c37821', () => {
    const pc = 0xbfc00fbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c37821 >>> 0);
    stepOne();
  });
  it('[129386] PC 0xbfc00fc0 instr 0x81f80001', () => {
    const pc = 0xbfc00fc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81f80001 >>> 0);
    stepOne();
  });
  it('[129387] PC 0xbfc00fc4 instr 0x00000000', () => {
    const pc = 0xbfc00fc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[129388] PC 0xbfc00fc8 instr 0x33190004', () => {
    const pc = 0xbfc00fc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x33190004 >>> 0);
    stepOne();
  });
  it('[129389] PC 0xbfc00fcc instr 0x1720fff3', () => {
    const pc = 0xbfc00fcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1720fff3 >>> 0);
    stepOne();
  });
  it('[129390] PC 0xbfc00fd0 instr 0x00107080', () => {
    const pc = 0xbfc00fd0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x107080 >>> 0);
    stepOne();
  });
  it('[129391] PC 0xbfc00fd4 instr 0x0200a821', () => {
    const pc = 0xbfc00fd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x200a821 >>> 0);
    stepOne();
  });
  it('[129392] PC 0xbfc00fd8 instr 0x1000ffb3', () => {
    const pc = 0xbfc00fd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ffb3 >>> 0);
    stepOne();
  });
  it('[129393] PC 0xbfc00fdc instr 0x2652ffff', () => {
    const pc = 0xbfc00fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2652ffff >>> 0);
    stepOne();
  });
  it('[129394] PC 0xbfc00ea8 instr 0x92430001', () => {
    const pc = 0xbfc00ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[129395] PC 0xbfc00eac instr 0x26520001', () => {
    const pc = 0xbfc00eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[129396] PC 0xbfc00eb0 instr 0x100001e6', () => {
    const pc = 0xbfc00eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100001e6 >>> 0);
    stepOne();
  });
  it('[129397] PC 0xbfc00eb4 instr 0x00601021', () => {
    const pc = 0xbfc00eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[129398] PC 0xbfc0164c instr 0x1048fe71', () => {
    const pc = 0xbfc0164c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1048fe71 >>> 0);
    stepOne();
  });
  it('[129399] PC 0xbfc01650 instr 0x2c410045', () => {
    const pc = 0xbfc01650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410045 >>> 0);
    stepOne();
  });
  it('[129400] PC 0xbfc01654 instr 0x10200058', () => {
    const pc = 0xbfc01654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200058 >>> 0);
    stepOne();
  });
});
