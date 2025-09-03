import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121001-121100', () => {
  beforeAll(() => initOnce());
  it('[121001] PC 0x00002cf0 instr 0x1320000c', () => {
    const pc = 0x2cf0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1320000c >>> 0);
    stepOne();
  });
  it('[121002] PC 0x00002cf4 instr 0x8faa002c', () => {
    const pc = 0x2cf4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faa002c >>> 0);
    stepOne();
  });
  it('[121003] PC 0x00002d24 instr 0x8c83001c', () => {
    const pc = 0x2d24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c83001c >>> 0);
    stepOne();
  });
  it('[121004] PC 0x00002d28 instr 0xac8a0008', () => {
    const pc = 0x2d28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8a0008 >>> 0);
    stepOne();
  });
  it('[121005] PC 0x00002d2c instr 0x8fab0030', () => {
    const pc = 0x2d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fab0030 >>> 0);
    stepOne();
  });
  it('[121006] PC 0x00002d30 instr 0x00000000', () => {
    const pc = 0x2d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121007] PC 0x00002d34 instr 0xac8b000c', () => {
    const pc = 0x2d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac8b000c >>> 0);
    stepOne();
  });
  it('[121008] PC 0x00002d38 instr 0x8c6c0004', () => {
    const pc = 0x2d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6c0004 >>> 0);
    stepOne();
  });
  it('[121009] PC 0x00002d3c instr 0x00000000', () => {
    const pc = 0x2d3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121010] PC 0x00002d40 instr 0x318d0004', () => {
    const pc = 0x2d40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x318d0004 >>> 0);
    stepOne();
  });
  it('[121011] PC 0x00002d44 instr 0x11a00018', () => {
    const pc = 0x2d44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11a00018 >>> 0);
    stepOne();
  });
  it('[121012] PC 0x00002d48 instr 0x00000000', () => {
    const pc = 0x2d48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121013] PC 0x00002da8 instr 0xafa40024', () => {
    const pc = 0x2da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40024 >>> 0);
    stepOne();
  });
  it('[121014] PC 0x00002dac instr 0x8c680018', () => {
    const pc = 0x2dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c680018 >>> 0);
    stepOne();
  });
  it('[121015] PC 0x00002db0 instr 0x24050002', () => {
    const pc = 0x2db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050002 >>> 0);
    stepOne();
  });
  it('[121016] PC 0x00002db4 instr 0x0100f809', () => {
    const pc = 0x2db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100f809 >>> 0);
    stepOne();
  });
  it('[121017] PC 0x00002db8 instr 0x00000000', () => {
    const pc = 0x2db8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121018] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121019] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[121020] PC 0x00002dbc instr 0x8fa40024', () => {
    const pc = 0x2dbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40024 >>> 0);
    stepOne();
  });
  it('[121021] PC 0x00002dc0 instr 0x18400005', () => {
    const pc = 0x2dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18400005 >>> 0);
    stepOne();
  });
  it('[121022] PC 0x00002dc4 instr 0x00401821', () => {
    const pc = 0x2dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x401821 >>> 0);
    stepOne();
  });
  it('[121023] PC 0x00002dd8 instr 0x04410005', () => {
    const pc = 0x2dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4410005 >>> 0);
    stepOne();
  });
  it('[121024] PC 0x00002ddc instr 0x00601021', () => {
    const pc = 0x2ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[121025] PC 0x00002df0 instr 0x8fbf001c', () => {
    const pc = 0x2df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[121026] PC 0x00002df4 instr 0x27bd0028', () => {
    const pc = 0x2df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[121027] PC 0x00002df8 instr 0x03e00008', () => {
    const pc = 0x2df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121028] PC 0x00002dfc instr 0x00000000', () => {
    const pc = 0x2dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121029] PC 0x00004124 instr 0x8fbf0014', () => {
    const pc = 0x4124;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[121030] PC 0x00004128 instr 0x27bd0018', () => {
    const pc = 0x4128;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[121031] PC 0x0000412c instr 0x03e00008', () => {
    const pc = 0x412c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121032] PC 0x00004130 instr 0x00000000', () => {
    const pc = 0x4130;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121033] PC 0xbfc00e6c instr 0x2407002a', () => {
    const pc = 0xbfc00e6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[121034] PC 0xbfc00e70 instr 0x24080044', () => {
    const pc = 0xbfc00e70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[121035] PC 0xbfc00e74 instr 0x24090032', () => {
    const pc = 0xbfc00e74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[121036] PC 0xbfc00e78 instr 0x240a002d', () => {
    const pc = 0xbfc00e78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[121037] PC 0xbfc00e7c instr 0x240b0020', () => {
    const pc = 0xbfc00e7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[121038] PC 0xbfc00e80 instr 0x240c0023', () => {
    const pc = 0xbfc00e80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[121039] PC 0xbfc00e84 instr 0x240d002b', () => {
    const pc = 0xbfc00e84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[121040] PC 0xbfc00e88 instr 0x1000028e', () => {
    const pc = 0xbfc00e88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000028e >>> 0);
    stepOne();
  });
  it('[121041] PC 0xbfc00e8c instr 0x241f0030', () => {
    const pc = 0xbfc00e8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[121042] PC 0xbfc018c4 instr 0x1000fd55', () => {
    const pc = 0xbfc018c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000fd55 >>> 0);
    stepOne();
  });
  it('[121043] PC 0xbfc018c8 instr 0x26520001', () => {
    const pc = 0xbfc018c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[121044] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[121045] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121046] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[121047] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[121048] PC 0xbfc00e2c instr 0x8fa20224', () => {
    const pc = 0xbfc00e2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa20224 >>> 0);
    stepOne();
  });
  it('[121049] PC 0xbfc00e30 instr 0x8fb00060', () => {
    const pc = 0xbfc00e30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00060 >>> 0);
    stepOne();
  });
  it('[121050] PC 0xbfc00e34 instr 0x8fb1005c', () => {
    const pc = 0xbfc00e34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1005c >>> 0);
    stepOne();
  });
  it('[121051] PC 0xbfc00e38 instr 0x8fb20058', () => {
    const pc = 0xbfc00e38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20058 >>> 0);
    stepOne();
  });
  it('[121052] PC 0xbfc00e3c instr 0x8fb40054', () => {
    const pc = 0xbfc00e3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb40054 >>> 0);
    stepOne();
  });
  it('[121053] PC 0xbfc00e40 instr 0x8fb50050', () => {
    const pc = 0xbfc00e40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb50050 >>> 0);
    stepOne();
  });
  it('[121054] PC 0xbfc00e44 instr 0x8fb6004c', () => {
    const pc = 0xbfc00e44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb6004c >>> 0);
    stepOne();
  });
  it('[121055] PC 0xbfc00e48 instr 0x8fb70048', () => {
    const pc = 0xbfc00e48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb70048 >>> 0);
    stepOne();
  });
  it('[121056] PC 0xbfc00e4c instr 0x8fbe0044', () => {
    const pc = 0xbfc00e4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbe0044 >>> 0);
    stepOne();
  });
  it('[121057] PC 0xbfc00e50 instr 0x1000029f', () => {
    const pc = 0xbfc00e50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000029f >>> 0);
    stepOne();
  });
  it('[121058] PC 0xbfc00e54 instr 0x8fbf003c', () => {
    const pc = 0xbfc00e54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf003c >>> 0);
    stepOne();
  });
  it('[121059] PC 0xbfc018d0 instr 0x8fb30038', () => {
    const pc = 0xbfc018d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30038 >>> 0);
    stepOne();
  });
  it('[121060] PC 0xbfc018d4 instr 0x03e00008', () => {
    const pc = 0xbfc018d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121061] PC 0xbfc018d8 instr 0x27bd0230', () => {
    const pc = 0xbfc018d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0230 >>> 0);
    stepOne();
  });
  it('[121062] PC 0xbfc01910 instr 0x8fbf0014', () => {
    const pc = 0xbfc01910;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[121063] PC 0xbfc01914 instr 0x27bd0018', () => {
    const pc = 0xbfc01914;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[121064] PC 0xbfc01918 instr 0x03e00008', () => {
    const pc = 0xbfc01918;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121065] PC 0xbfc0191c instr 0x00000000', () => {
    const pc = 0xbfc0191c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121066] PC 0xbfc06904 instr 0x3c04a000', () => {
    const pc = 0xbfc06904;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04a000 >>> 0);
    stepOne();
  });
  it('[121067] PC 0xbfc06908 instr 0x3484e000', () => {
    const pc = 0xbfc06908;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3484e000 >>> 0);
    stepOne();
  });
  it('[121068] PC 0xbfc0690c instr 0x0ff036d0', () => {
    const pc = 0xbfc0690c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036d0 >>> 0);
    stepOne();
  });
  it('[121069] PC 0xbfc06910 instr 0x24052000', () => {
    const pc = 0xbfc06910;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24052000 >>> 0);
    stepOne();
  });
  it('[121070] PC 0xbfc0db40 instr 0x240a00c0', () => {
    const pc = 0xbfc0db40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[121071] PC 0xbfc0db44 instr 0x01400008', () => {
    const pc = 0xbfc0db44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[121072] PC 0xbfc0db48 instr 0x24090008', () => {
    const pc = 0xbfc0db48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090008 >>> 0);
    stepOne();
  });
  it('[121073] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121074] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[121075] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121076] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121077] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121078] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[121079] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[121080] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[121081] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[121082] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121083] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121084] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121085] PC 0x0000113c instr 0x3c010000', () => {
    const pc = 0x113c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121086] PC 0x00001140 instr 0x00057082', () => {
    const pc = 0x1140;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x57082 >>> 0);
    stepOne();
  });
  it('[121087] PC 0x00001144 instr 0xac247460', () => {
    const pc = 0x1144;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac247460 >>> 0);
    stepOne();
  });
  it('[121088] PC 0x00001148 instr 0x000e7880', () => {
    const pc = 0x1148;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[121089] PC 0x0000114c instr 0x008fc021', () => {
    const pc = 0x114c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fc021 >>> 0);
    stepOne();
  });
  it('[121090] PC 0x00001150 instr 0xac800000', () => {
    const pc = 0x1150;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac800000 >>> 0);
    stepOne();
  });
  it('[121091] PC 0x00001154 instr 0x27190004', () => {
    const pc = 0x1154;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27190004 >>> 0);
    stepOne();
  });
  it('[121092] PC 0x00001158 instr 0x3c010000', () => {
    const pc = 0x1158;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121093] PC 0x0000115c instr 0xac397468', () => {
    const pc = 0x115c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac397468 >>> 0);
    stepOne();
  });
  it('[121094] PC 0x00001160 instr 0x3c010000', () => {
    const pc = 0x1160;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121095] PC 0x00001164 instr 0xac257464', () => {
    const pc = 0x1164;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac257464 >>> 0);
    stepOne();
  });
  it('[121096] PC 0x00001168 instr 0x3c010000', () => {
    const pc = 0x1168;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[121097] PC 0x0000116c instr 0x03e00008', () => {
    const pc = 0x116c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121098] PC 0x00001170 instr 0xac206d30', () => {
    const pc = 0x1170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac206d30 >>> 0);
    stepOne();
  });
  it('[121099] PC 0xbfc06914 instr 0x0ff01184', () => {
    const pc = 0xbfc06914;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff01184 >>> 0);
    stepOne();
  });
  it('[121100] PC 0xbfc06918 instr 0x24040004', () => {
    const pc = 0xbfc06918;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040004 >>> 0);
    stepOne();
  });
});
