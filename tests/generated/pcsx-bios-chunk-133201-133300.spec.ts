import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 133201-133300', () => {
  beforeAll(() => initOnce());
  it('[133201] PC 0x00002ce0 instr 0x00000000', () => {
    const pc = 0x2ce0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133202] PC 0x00002ce4 instr 0x8c980014', () => {
    const pc = 0x2ce4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c980014 >>> 0);
    stepOne();
  });
  it('[133203] PC 0x00002ce8 instr 0x00000000', () => {
    const pc = 0x2ce8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133204] PC 0x00002cec instr 0x33190010', () => {
    const pc = 0x2cec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x33190010 >>> 0);
    stepOne();
  });
  it('[133205] PC 0x00002cf0 instr 0x1320000c', () => {
    const pc = 0x2cf0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1320000c >>> 0);
    stepOne();
  });
  it('[133206] PC 0x00002cf4 instr 0x8faa002c', () => {
    const pc = 0x2cf4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faa002c >>> 0);
    stepOne();
  });
  it('[133207] PC 0x00002d24 instr 0x8c83001c', () => {
    const pc = 0x2d24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c83001c >>> 0);
    stepOne();
  });
  it('[133208] PC 0x00002d28 instr 0xac8a0008', () => {
    const pc = 0x2d28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8a0008 >>> 0);
    stepOne();
  });
  it('[133209] PC 0x00002d2c instr 0x8fab0030', () => {
    const pc = 0x2d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fab0030 >>> 0);
    stepOne();
  });
  it('[133210] PC 0x00002d30 instr 0x00000000', () => {
    const pc = 0x2d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133211] PC 0x00002d34 instr 0xac8b000c', () => {
    const pc = 0x2d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8b000c >>> 0);
    stepOne();
  });
  it('[133212] PC 0x00002d38 instr 0x8c6c0004', () => {
    const pc = 0x2d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6c0004 >>> 0);
    stepOne();
  });
  it('[133213] PC 0x00002d3c instr 0x00000000', () => {
    const pc = 0x2d3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133214] PC 0x00002d40 instr 0x318d0004', () => {
    const pc = 0x2d40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x318d0004 >>> 0);
    stepOne();
  });
  it('[133215] PC 0x00002d44 instr 0x11a00018', () => {
    const pc = 0x2d44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11a00018 >>> 0);
    stepOne();
  });
  it('[133216] PC 0x00002d48 instr 0x00000000', () => {
    const pc = 0x2d48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133217] PC 0x00002da8 instr 0xafa40024', () => {
    const pc = 0x2da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[133218] PC 0x00002dac instr 0x8c680018', () => {
    const pc = 0x2dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c680018 >>> 0);
    stepOne();
  });
  it('[133219] PC 0x00002db0 instr 0x24050002', () => {
    const pc = 0x2db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050002 >>> 0);
    stepOne();
  });
  it('[133220] PC 0x00002db4 instr 0x0100f809', () => {
    const pc = 0x2db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100f809 >>> 0);
    stepOne();
  });
  it('[133221] PC 0x00002db8 instr 0x00000000', () => {
    const pc = 0x2db8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133222] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133223] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[133224] PC 0x00002dbc instr 0x8fa40024', () => {
    const pc = 0x2dbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40024 >>> 0);
    stepOne();
  });
  it('[133225] PC 0x00002dc0 instr 0x18400005', () => {
    const pc = 0x2dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18400005 >>> 0);
    stepOne();
  });
  it('[133226] PC 0x00002dc4 instr 0x00401821', () => {
    const pc = 0x2dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[133227] PC 0x00002dd8 instr 0x04410005', () => {
    const pc = 0x2dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4410005 >>> 0);
    stepOne();
  });
  it('[133228] PC 0x00002ddc instr 0x00601021', () => {
    const pc = 0x2ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[133229] PC 0x00002df0 instr 0x8fbf001c', () => {
    const pc = 0x2df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[133230] PC 0x00002df4 instr 0x27bd0028', () => {
    const pc = 0x2df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[133231] PC 0x00002df8 instr 0x03e00008', () => {
    const pc = 0x2df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133232] PC 0x00002dfc instr 0x00000000', () => {
    const pc = 0x2dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133233] PC 0x00004124 instr 0x8fbf0014', () => {
    const pc = 0x4124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[133234] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[133235] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133236] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133237] PC 0x000040ac instr 0x3c0f0001', () => {
    const pc = 0x40ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0f0001 >>> 0);
    stepOne();
  });
  it('[133238] PC 0x000040b0 instr 0x8def8910', () => {
    const pc = 0x40b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8def8910 >>> 0);
    stepOne();
  });
  it('[133239] PC 0x000040b4 instr 0x00000000', () => {
    const pc = 0x40b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133240] PC 0x000040b8 instr 0x00000000', () => {
    const pc = 0x40b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133241] PC 0x000040bc instr 0x05e10004', () => {
    const pc = 0x40bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x5e10004 >>> 0);
    stepOne();
  });
  it('[133242] PC 0x000040c0 instr 0x31f80007', () => {
    const pc = 0x40c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31f80007 >>> 0);
    stepOne();
  });
  it('[133243] PC 0x000040d0 instr 0x1700fff4', () => {
    const pc = 0x40d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1700fff4 >>> 0);
    stepOne();
  });
  it('[133244] PC 0x000040d4 instr 0x00000000', () => {
    const pc = 0x40d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133245] PC 0x000040d8 instr 0x10000013', () => {
    const pc = 0x40d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000013 >>> 0);
    stepOne();
  });
  it('[133246] PC 0x000040dc instr 0x8fbf0014', () => {
    const pc = 0x40dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[133247] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[133248] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133249] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133250] PC 0xbfc00e6c instr 0x2407002a', () => {
    const pc = 0xbfc00e6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[133251] PC 0xbfc00e70 instr 0x24080044', () => {
    const pc = 0xbfc00e70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[133252] PC 0xbfc00e74 instr 0x24090032', () => {
    const pc = 0xbfc00e74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[133253] PC 0xbfc00e78 instr 0x240a002d', () => {
    const pc = 0xbfc00e78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[133254] PC 0xbfc00e7c instr 0x240b0020', () => {
    const pc = 0xbfc00e7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[133255] PC 0xbfc00e80 instr 0x240c0023', () => {
    const pc = 0xbfc00e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[133256] PC 0xbfc00e84 instr 0x240d002b', () => {
    const pc = 0xbfc00e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[133257] PC 0xbfc00e88 instr 0x1000028e', () => {
    const pc = 0xbfc00e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000028e >>> 0);
    stepOne();
  });
  it('[133258] PC 0xbfc00e8c instr 0x241f0030', () => {
    const pc = 0xbfc00e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[133259] PC 0xbfc018c4 instr 0x1000fd55', () => {
    const pc = 0xbfc018c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000fd55 >>> 0);
    stepOne();
  });
  it('[133260] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[133261] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[133262] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133263] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[133264] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[133265] PC 0xbfc00e2c instr 0x8fa20224', () => {
    const pc = 0xbfc00e2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa20224 >>> 0);
    stepOne();
  });
  it('[133266] PC 0xbfc00e30 instr 0x8fb00060', () => {
    const pc = 0xbfc00e30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00060 >>> 0);
    stepOne();
  });
  it('[133267] PC 0xbfc00e34 instr 0x8fb1005c', () => {
    const pc = 0xbfc00e34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1005c >>> 0);
    stepOne();
  });
  it('[133268] PC 0xbfc00e38 instr 0x8fb20058', () => {
    const pc = 0xbfc00e38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20058 >>> 0);
    stepOne();
  });
  it('[133269] PC 0xbfc00e3c instr 0x8fb40054', () => {
    const pc = 0xbfc00e3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb40054 >>> 0);
    stepOne();
  });
  it('[133270] PC 0xbfc00e40 instr 0x8fb50050', () => {
    const pc = 0xbfc00e40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb50050 >>> 0);
    stepOne();
  });
  it('[133271] PC 0xbfc00e44 instr 0x8fb6004c', () => {
    const pc = 0xbfc00e44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb6004c >>> 0);
    stepOne();
  });
  it('[133272] PC 0xbfc00e48 instr 0x8fb70048', () => {
    const pc = 0xbfc00e48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb70048 >>> 0);
    stepOne();
  });
  it('[133273] PC 0xbfc00e4c instr 0x8fbe0044', () => {
    const pc = 0xbfc00e4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbe0044 >>> 0);
    stepOne();
  });
  it('[133274] PC 0xbfc00e50 instr 0x1000029f', () => {
    const pc = 0xbfc00e50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000029f >>> 0);
    stepOne();
  });
  it('[133275] PC 0xbfc00e54 instr 0x8fbf003c', () => {
    const pc = 0xbfc00e54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf003c >>> 0);
    stepOne();
  });
  it('[133276] PC 0xbfc018d0 instr 0x8fb30038', () => {
    const pc = 0xbfc018d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30038 >>> 0);
    stepOne();
  });
  it('[133277] PC 0xbfc018d4 instr 0x03e00008', () => {
    const pc = 0xbfc018d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133278] PC 0xbfc018d8 instr 0x27bd0230', () => {
    const pc = 0xbfc018d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0230 >>> 0);
    stepOne();
  });
  it('[133279] PC 0xbfc01910 instr 0x8fbf0014', () => {
    const pc = 0xbfc01910;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[133280] PC 0xbfc01914 instr 0x27bd0018', () => {
    const pc = 0xbfc01914;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[133281] PC 0xbfc01918 instr 0x03e00008', () => {
    const pc = 0xbfc01918;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133282] PC 0xbfc0191c instr 0x00000000', () => {
    const pc = 0xbfc0191c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133283] PC 0xbfc04698 instr 0x8fa60028', () => {
    const pc = 0xbfc04698;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa60028 >>> 0);
    stepOne();
  });
  it('[133284] PC 0xbfc0469c instr 0x00000000', () => {
    const pc = 0xbfc0469c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133285] PC 0xbfc046a0 instr 0xafa60024', () => {
    const pc = 0xbfc046a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60024 >>> 0);
    stepOne();
  });
  it('[133286] PC 0xbfc046a4 instr 0x00c00821', () => {
    const pc = 0xbfc046a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00821 >>> 0);
    stepOne();
  });
  it('[133287] PC 0xbfc046a8 instr 0x000130c0', () => {
    const pc = 0xbfc046a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x130c0 >>> 0);
    stepOne();
  });
  it('[133288] PC 0xbfc046ac instr 0x00c13023', () => {
    const pc = 0xbfc046ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc13023 >>> 0);
    stepOne();
  });
  it('[133289] PC 0xbfc046b0 instr 0x00063080', () => {
    const pc = 0xbfc046b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x63080 >>> 0);
    stepOne();
  });
  it('[133290] PC 0xbfc046b4 instr 0x00c02021', () => {
    const pc = 0xbfc046b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc02021 >>> 0);
    stepOne();
  });
  it('[133291] PC 0xbfc046b8 instr 0x0ff036b8', () => {
    const pc = 0xbfc046b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036b8 >>> 0);
    stepOne();
  });
  it('[133292] PC 0xbfc046bc instr 0xafa60028', () => {
    const pc = 0xbfc046bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60028 >>> 0);
    stepOne();
  });
  it('[133293] PC 0xbfc0dae0 instr 0x240a00b0', () => {
    const pc = 0xbfc0dae0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[133294] PC 0xbfc0dae4 instr 0x01400008', () => {
    const pc = 0xbfc0dae4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[133295] PC 0xbfc0dae8 instr 0x24090000', () => {
    const pc = 0xbfc0dae8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090000 >>> 0);
    stepOne();
  });
  it('[133296] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[133297] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[133298] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[133299] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133300] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
});
