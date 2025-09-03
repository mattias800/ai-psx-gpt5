import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 136301-136400', () => {
  beforeAll(() => initOnce());
  it('[136301] PC 0x00003ef0 instr 0x8fb00018', () => {
    const pc = 0x3ef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[136302] PC 0x00003ef4 instr 0x8fb1001c', () => {
    const pc = 0x3ef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[136303] PC 0x00003ef8 instr 0x8fb20020', () => {
    const pc = 0x3ef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[136304] PC 0x00003efc instr 0x03e00008', () => {
    const pc = 0x3efc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[136305] PC 0x00003f00 instr 0x27bd0028', () => {
    const pc = 0x3f00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[136306] PC 0x00002cdc instr 0x8fa40024', () => {
    const pc = 0x2cdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40024 >>> 0);
    stepOne();
  });
  it('[136307] PC 0x00002ce0 instr 0x00000000', () => {
    const pc = 0x2ce0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136308] PC 0x00002ce4 instr 0x8c980014', () => {
    const pc = 0x2ce4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c980014 >>> 0);
    stepOne();
  });
  it('[136309] PC 0x00002ce8 instr 0x00000000', () => {
    const pc = 0x2ce8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136310] PC 0x00002cec instr 0x33190010', () => {
    const pc = 0x2cec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x33190010 >>> 0);
    stepOne();
  });
  it('[136311] PC 0x00002cf0 instr 0x1320000c', () => {
    const pc = 0x2cf0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1320000c >>> 0);
    stepOne();
  });
  it('[136312] PC 0x00002cf4 instr 0x8faa002c', () => {
    const pc = 0x2cf4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faa002c >>> 0);
    stepOne();
  });
  it('[136313] PC 0x00002d24 instr 0x8c83001c', () => {
    const pc = 0x2d24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c83001c >>> 0);
    stepOne();
  });
  it('[136314] PC 0x00002d28 instr 0xac8a0008', () => {
    const pc = 0x2d28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8a0008 >>> 0);
    stepOne();
  });
  it('[136315] PC 0x00002d2c instr 0x8fab0030', () => {
    const pc = 0x2d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fab0030 >>> 0);
    stepOne();
  });
  it('[136316] PC 0x00002d30 instr 0x00000000', () => {
    const pc = 0x2d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136317] PC 0x00002d34 instr 0xac8b000c', () => {
    const pc = 0x2d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8b000c >>> 0);
    stepOne();
  });
  it('[136318] PC 0x00002d38 instr 0x8c6c0004', () => {
    const pc = 0x2d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6c0004 >>> 0);
    stepOne();
  });
  it('[136319] PC 0x00002d3c instr 0x00000000', () => {
    const pc = 0x2d3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136320] PC 0x00002d40 instr 0x318d0004', () => {
    const pc = 0x2d40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x318d0004 >>> 0);
    stepOne();
  });
  it('[136321] PC 0x00002d44 instr 0x11a00018', () => {
    const pc = 0x2d44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11a00018 >>> 0);
    stepOne();
  });
  it('[136322] PC 0x00002d48 instr 0x00000000', () => {
    const pc = 0x2d48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136323] PC 0x00002da8 instr 0xafa40024', () => {
    const pc = 0x2da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[136324] PC 0x00002dac instr 0x8c680018', () => {
    const pc = 0x2dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c680018 >>> 0);
    stepOne();
  });
  it('[136325] PC 0x00002db0 instr 0x24050002', () => {
    const pc = 0x2db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050002 >>> 0);
    stepOne();
  });
  it('[136326] PC 0x00002db4 instr 0x0100f809', () => {
    const pc = 0x2db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100f809 >>> 0);
    stepOne();
  });
  it('[136327] PC 0x00002db8 instr 0x00000000', () => {
    const pc = 0x2db8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136328] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[136329] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[136330] PC 0x00002dbc instr 0x8fa40024', () => {
    const pc = 0x2dbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40024 >>> 0);
    stepOne();
  });
  it('[136331] PC 0x00002dc0 instr 0x18400005', () => {
    const pc = 0x2dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18400005 >>> 0);
    stepOne();
  });
  it('[136332] PC 0x00002dc4 instr 0x00401821', () => {
    const pc = 0x2dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[136333] PC 0x00002dd8 instr 0x04410005', () => {
    const pc = 0x2dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4410005 >>> 0);
    stepOne();
  });
  it('[136334] PC 0x00002ddc instr 0x00601021', () => {
    const pc = 0x2ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[136335] PC 0x00002df0 instr 0x8fbf001c', () => {
    const pc = 0x2df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[136336] PC 0x00002df4 instr 0x27bd0028', () => {
    const pc = 0x2df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[136337] PC 0x00002df8 instr 0x03e00008', () => {
    const pc = 0x2df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[136338] PC 0x00002dfc instr 0x00000000', () => {
    const pc = 0x2dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136339] PC 0x00004124 instr 0x8fbf0014', () => {
    const pc = 0x4124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[136340] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[136341] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[136342] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136343] PC 0xbfc00e6c instr 0x2407002a', () => {
    const pc = 0xbfc00e6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[136344] PC 0xbfc00e70 instr 0x24080044', () => {
    const pc = 0xbfc00e70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[136345] PC 0xbfc00e74 instr 0x24090032', () => {
    const pc = 0xbfc00e74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[136346] PC 0xbfc00e78 instr 0x240a002d', () => {
    const pc = 0xbfc00e78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[136347] PC 0xbfc00e7c instr 0x240b0020', () => {
    const pc = 0xbfc00e7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[136348] PC 0xbfc00e80 instr 0x240c0023', () => {
    const pc = 0xbfc00e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[136349] PC 0xbfc00e84 instr 0x240d002b', () => {
    const pc = 0xbfc00e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[136350] PC 0xbfc00e88 instr 0x1000028e', () => {
    const pc = 0xbfc00e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000028e >>> 0);
    stepOne();
  });
  it('[136351] PC 0xbfc00e8c instr 0x241f0030', () => {
    const pc = 0xbfc00e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[136352] PC 0xbfc018c4 instr 0x1000fd55', () => {
    const pc = 0xbfc018c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000fd55 >>> 0);
    stepOne();
  });
  it('[136353] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[136354] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[136355] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136356] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[136357] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[136358] PC 0xbfc00e5c instr 0x1081000d', () => {
    const pc = 0xbfc00e5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1081000d >>> 0);
    stepOne();
  });
  it('[136359] PC 0xbfc00e60 instr 0x00008821', () => {
    const pc = 0xbfc00e60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8821 >>> 0);
    stepOne();
  });
  it('[136360] PC 0xbfc00e94 instr 0xafa00204', () => {
    const pc = 0xbfc00e94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa00204 >>> 0);
    stepOne();
  });
  it('[136361] PC 0xbfc00e98 instr 0x00008021', () => {
    const pc = 0xbfc00e98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8021 >>> 0);
    stepOne();
  });
  it('[136362] PC 0xbfc00e9c instr 0x0000a821', () => {
    const pc = 0xbfc00e9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa821 >>> 0);
    stepOne();
  });
  it('[136363] PC 0xbfc00ea0 instr 0x2406ffff', () => {
    const pc = 0xbfc00ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2406ffff >>> 0);
    stepOne();
  });
  it('[136364] PC 0xbfc00ea4 instr 0x0000a021', () => {
    const pc = 0xbfc00ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa021 >>> 0);
    stepOne();
  });
  it('[136365] PC 0xbfc00ea8 instr 0x92430001', () => {
    const pc = 0xbfc00ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[136366] PC 0xbfc00eac instr 0x26520001', () => {
    const pc = 0xbfc00eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[136367] PC 0xbfc00eb0 instr 0x100001e6', () => {
    const pc = 0xbfc00eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100001e6 >>> 0);
    stepOne();
  });
  it('[136368] PC 0xbfc00eb4 instr 0x00601021', () => {
    const pc = 0xbfc00eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[136369] PC 0xbfc0164c instr 0x1048fe71', () => {
    const pc = 0xbfc0164c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1048fe71 >>> 0);
    stepOne();
  });
  it('[136370] PC 0xbfc01650 instr 0x2c410045', () => {
    const pc = 0xbfc01650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410045 >>> 0);
    stepOne();
  });
  it('[136371] PC 0xbfc01654 instr 0x10200058', () => {
    const pc = 0xbfc01654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200058 >>> 0);
    stepOne();
  });
  it('[136372] PC 0xbfc01658 instr 0x24010069', () => {
    const pc = 0xbfc01658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010069 >>> 0);
    stepOne();
  });
  it('[136373] PC 0xbfc0165c instr 0x1049fe4d', () => {
    const pc = 0xbfc0165c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1049fe4d >>> 0);
    stepOne();
  });
  it('[136374] PC 0xbfc01660 instr 0x2c410033', () => {
    const pc = 0xbfc01660;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410033 >>> 0);
    stepOne();
  });
  it('[136375] PC 0xbfc01664 instr 0x10200034', () => {
    const pc = 0xbfc01664;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200034 >>> 0);
    stepOne();
  });
  it('[136376] PC 0xbfc01668 instr 0x24010036', () => {
    const pc = 0xbfc01668;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010036 >>> 0);
    stepOne();
  });
  it('[136377] PC 0xbfc0166c instr 0x104afe1d', () => {
    const pc = 0xbfc0166c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x104afe1d >>> 0);
    stepOne();
  });
  it('[136378] PC 0xbfc01670 instr 0x2c41002e', () => {
    const pc = 0xbfc01670;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c41002e >>> 0);
    stepOne();
  });
  it('[136379] PC 0xbfc01674 instr 0x10200022', () => {
    const pc = 0xbfc01674;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200022 >>> 0);
    stepOne();
  });
  it('[136380] PC 0xbfc01678 instr 0x00000000', () => {
    const pc = 0xbfc01678;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[136381] PC 0xbfc01700 instr 0x105ffe22', () => {
    const pc = 0xbfc01700;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x105ffe22 >>> 0);
    stepOne();
  });
  it('[136382] PC 0xbfc01704 instr 0x2c410031', () => {
    const pc = 0xbfc01704;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410031 >>> 0);
    stepOne();
  });
  it('[136383] PC 0xbfc00f8c instr 0x1000ffc6', () => {
    const pc = 0xbfc00f8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000ffc6 >>> 0);
    stepOne();
  });
  it('[136384] PC 0xbfc00f90 instr 0x36310020', () => {
    const pc = 0xbfc00f90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x36310020 >>> 0);
    stepOne();
  });
  it('[136385] PC 0xbfc00ea8 instr 0x92430001', () => {
    const pc = 0xbfc00ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
  it('[136386] PC 0xbfc00eac instr 0x26520001', () => {
    const pc = 0xbfc00eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[136387] PC 0xbfc00eb0 instr 0x100001e6', () => {
    const pc = 0xbfc00eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100001e6 >>> 0);
    stepOne();
  });
  it('[136388] PC 0xbfc00eb4 instr 0x00601021', () => {
    const pc = 0xbfc00eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[136389] PC 0xbfc0164c instr 0x1048fe71', () => {
    const pc = 0xbfc0164c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1048fe71 >>> 0);
    stepOne();
  });
  it('[136390] PC 0xbfc01650 instr 0x2c410045', () => {
    const pc = 0xbfc01650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410045 >>> 0);
    stepOne();
  });
  it('[136391] PC 0xbfc01654 instr 0x10200058', () => {
    const pc = 0xbfc01654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10200058 >>> 0);
    stepOne();
  });
  it('[136392] PC 0xbfc01658 instr 0x24010069', () => {
    const pc = 0xbfc01658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010069 >>> 0);
    stepOne();
  });
  it('[136393] PC 0xbfc0165c instr 0x1049fe4d', () => {
    const pc = 0xbfc0165c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1049fe4d >>> 0);
    stepOne();
  });
  it('[136394] PC 0xbfc01660 instr 0x2c410033', () => {
    const pc = 0xbfc01660;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2c410033 >>> 0);
    stepOne();
  });
  it('[136395] PC 0xbfc00f94 instr 0x00008021', () => {
    const pc = 0xbfc00f94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8021 >>> 0);
    stepOne();
  });
  it('[136396] PC 0xbfc00f98 instr 0x00107080', () => {
    const pc = 0xbfc00f98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x107080 >>> 0);
    stepOne();
  });
  it('[136397] PC 0xbfc00f9c instr 0x01d07021', () => {
    const pc = 0xbfc00f9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1d07021 >>> 0);
    stepOne();
  });
  it('[136398] PC 0xbfc00fa0 instr 0x000e7040', () => {
    const pc = 0xbfc00fa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7040 >>> 0);
    stepOne();
  });
  it('[136399] PC 0xbfc00fa4 instr 0x01c38021', () => {
    const pc = 0xbfc00fa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c38021 >>> 0);
    stepOne();
  });
  it('[136400] PC 0xbfc00fa8 instr 0x92430001', () => {
    const pc = 0xbfc00fa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92430001 >>> 0);
    stepOne();
  });
});
