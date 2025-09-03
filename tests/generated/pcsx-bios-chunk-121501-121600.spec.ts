import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121501-121600', () => {
  beforeAll(() => initOnce());
  it('[121501] PC 0xbfc018f8 instr 0xafa80020', () => {
    const pc = 0xbfc018f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa80020 >>> 0);
    stepOne();
  });
  it('[121502] PC 0xbfc018fc instr 0xafa3001c', () => {
    const pc = 0xbfc018fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa3001c >>> 0);
    stepOne();
  });
  it('[121503] PC 0xbfc01900 instr 0x27a6001c', () => {
    const pc = 0xbfc01900;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a6001c >>> 0);
    stepOne();
  });
  it('[121504] PC 0xbfc01904 instr 0x24040001', () => {
    const pc = 0xbfc01904;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[121505] PC 0xbfc01908 instr 0x0ff00368', () => {
    const pc = 0xbfc01908;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00368 >>> 0);
    stepOne();
  });
  it('[121506] PC 0xbfc0190c instr 0xafa70024', () => {
    const pc = 0xbfc0190c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70024 >>> 0);
    stepOne();
  });
  it('[121507] PC 0xbfc00da0 instr 0x27bdfdd0', () => {
    const pc = 0xbfc00da0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdfdd0 >>> 0);
    stepOne();
  });
  it('[121508] PC 0xbfc00da4 instr 0xafb30038', () => {
    const pc = 0xbfc00da4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30038 >>> 0);
    stepOne();
  });
  it('[121509] PC 0xbfc00da8 instr 0xafbf003c', () => {
    const pc = 0xbfc00da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf003c >>> 0);
    stepOne();
  });
  it('[121510] PC 0xbfc00dac instr 0x00c09821', () => {
    const pc = 0xbfc00dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc09821 >>> 0);
    stepOne();
  });
  it('[121511] PC 0xbfc00db0 instr 0x14a00003', () => {
    const pc = 0xbfc00db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[121512] PC 0xbfc00db4 instr 0xafa40230', () => {
    const pc = 0xbfc00db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40230 >>> 0);
    stepOne();
  });
  it('[121513] PC 0xbfc00dc0 instr 0xafbe0044', () => {
    const pc = 0xbfc00dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbe0044 >>> 0);
    stepOne();
  });
  it('[121514] PC 0xbfc00dc4 instr 0xafb20058', () => {
    const pc = 0xbfc00dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20058 >>> 0);
    stepOne();
  });
  it('[121515] PC 0xbfc00dc8 instr 0xafb00060', () => {
    const pc = 0xbfc00dc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00060 >>> 0);
    stepOne();
  });
  it('[121516] PC 0xbfc00dcc instr 0xafb1005c', () => {
    const pc = 0xbfc00dcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1005c >>> 0);
    stepOne();
  });
  it('[121517] PC 0xbfc00dd0 instr 0xafb40054', () => {
    const pc = 0xbfc00dd0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb40054 >>> 0);
    stepOne();
  });
  it('[121518] PC 0xbfc00dd4 instr 0xafb50050', () => {
    const pc = 0xbfc00dd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb50050 >>> 0);
    stepOne();
  });
  it('[121519] PC 0xbfc00dd8 instr 0xafb6004c', () => {
    const pc = 0xbfc00dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb6004c >>> 0);
    stepOne();
  });
  it('[121520] PC 0xbfc00ddc instr 0x3c0ebfc1', () => {
    const pc = 0xbfc00ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[121521] PC 0xbfc00de0 instr 0xafb70048', () => {
    const pc = 0xbfc00de0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb70048 >>> 0);
    stepOne();
  });
  it('[121522] PC 0xbfc00de4 instr 0x25cedd60', () => {
    const pc = 0xbfc00de4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25cedd60 >>> 0);
    stepOne();
  });
  it('[121523] PC 0xbfc00de8 instr 0x3c1ebfc1', () => {
    const pc = 0xbfc00de8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1ebfc1 >>> 0);
    stepOne();
  });
  it('[121524] PC 0xbfc00dec instr 0xafae01dc', () => {
    const pc = 0xbfc00dec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafae01dc >>> 0);
    stepOne();
  });
  it('[121525] PC 0xbfc00df0 instr 0x00a09021', () => {
    const pc = 0xbfc00df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa09021 >>> 0);
    stepOne();
  });
  it('[121526] PC 0xbfc00df4 instr 0x27deddb0', () => {
    const pc = 0xbfc00df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27deddb0 >>> 0);
    stepOne();
  });
  it('[121527] PC 0xbfc00df8 instr 0xafa00224', () => {
    const pc = 0xbfc00df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa00224 >>> 0);
    stepOne();
  });
  it('[121528] PC 0xbfc00dfc instr 0x2407002a', () => {
    const pc = 0xbfc00dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[121529] PC 0xbfc00e00 instr 0x24080044', () => {
    const pc = 0xbfc00e00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[121530] PC 0xbfc00e04 instr 0x24090032', () => {
    const pc = 0xbfc00e04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[121531] PC 0xbfc00e08 instr 0x240a002d', () => {
    const pc = 0xbfc00e08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[121532] PC 0xbfc00e0c instr 0x240b0020', () => {
    const pc = 0xbfc00e0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[121533] PC 0xbfc00e10 instr 0x240c0023', () => {
    const pc = 0xbfc00e10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[121534] PC 0xbfc00e14 instr 0x240d002b', () => {
    const pc = 0xbfc00e14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[121535] PC 0xbfc00e18 instr 0x241f0030', () => {
    const pc = 0xbfc00e18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[121536] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[121537] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121538] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[121539] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[121540] PC 0xbfc00e5c instr 0x1081000d', () => {
    const pc = 0xbfc00e5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1081000d >>> 0);
    stepOne();
  });
  it('[121541] PC 0xbfc00e60 instr 0x00008821', () => {
    const pc = 0xbfc00e60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8821 >>> 0);
    stepOne();
  });
  it('[121542] PC 0xbfc00e64 instr 0x0ff03620', () => {
    const pc = 0xbfc00e64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff03620 >>> 0);
    stepOne();
  });
  it('[121543] PC 0xbfc00e68 instr 0x00000000', () => {
    const pc = 0xbfc00e68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121544] PC 0xbfc0d880 instr 0x240a00b0', () => {
    const pc = 0xbfc0d880;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[121545] PC 0xbfc0d884 instr 0x01400008', () => {
    const pc = 0xbfc0d884;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[121546] PC 0xbfc0d888 instr 0x2409003d', () => {
    const pc = 0xbfc0d888;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409003d >>> 0);
    stepOne();
  });
  it('[121547] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121548] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[121549] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121550] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121551] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121552] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[121553] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[121554] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[121555] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[121556] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121557] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121558] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121559] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[121560] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[121561] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[121562] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[121563] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[121564] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121565] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[121566] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[121567] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[121568] PC 0x00004090 instr 0x0c00101b', () => {
    const pc = 0x4090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00101b >>> 0);
    stepOne();
  });
  it('[121569] PC 0x00004094 instr 0x2404000d', () => {
    const pc = 0x4094;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2404000d >>> 0);
    stepOne();
  });
  it('[121570] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[121571] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[121572] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[121573] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[121574] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[121575] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[121576] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[121577] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[121578] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[121579] PC 0x000040e4 instr 0x3c080000', () => {
    const pc = 0x40e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121580] PC 0x000040e8 instr 0x01194021', () => {
    const pc = 0x40e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1194021 >>> 0);
    stepOne();
  });
  it('[121581] PC 0x000040ec instr 0x810873d1', () => {
    const pc = 0x40ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x810873d1 >>> 0);
    stepOne();
  });
  it('[121582] PC 0x000040f0 instr 0x00000000', () => {
    const pc = 0x40f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121583] PC 0x000040f4 instr 0x31090097', () => {
    const pc = 0x40f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31090097 >>> 0);
    stepOne();
  });
  it('[121584] PC 0x000040f8 instr 0x11200007', () => {
    const pc = 0x40f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11200007 >>> 0);
    stepOne();
  });
  it('[121585] PC 0x000040fc instr 0x24040001', () => {
    const pc = 0x40fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[121586] PC 0x00004118 instr 0x27a50018', () => {
    const pc = 0x4118;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50018 >>> 0);
    stepOne();
  });
  it('[121587] PC 0x0000411c instr 0x0c000b25', () => {
    const pc = 0x411c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000b25 >>> 0);
    stepOne();
  });
  it('[121588] PC 0x00004120 instr 0x24060001', () => {
    const pc = 0x4120;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060001 >>> 0);
    stepOne();
  });
  it('[121589] PC 0x00002c94 instr 0x27bdffd8', () => {
    const pc = 0x2c94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd8 >>> 0);
    stepOne();
  });
  it('[121590] PC 0x00002c98 instr 0xafbf001c', () => {
    const pc = 0x2c98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[121591] PC 0x00002c9c instr 0xafa5002c', () => {
    const pc = 0x2c9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5002c >>> 0);
    stepOne();
  });
  it('[121592] PC 0x00002ca0 instr 0x0c000c32', () => {
    const pc = 0x2ca0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c32 >>> 0);
    stepOne();
  });
  it('[121593] PC 0x00002ca4 instr 0xafa60030', () => {
    const pc = 0x2ca4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa60030 >>> 0);
    stepOne();
  });
  it('[121594] PC 0x000030c8 instr 0x04800003', () => {
    const pc = 0x30c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x4800003 >>> 0);
    stepOne();
  });
  it('[121595] PC 0x000030cc instr 0x28810010', () => {
    const pc = 0x30cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x28810010 >>> 0);
    stepOne();
  });
  it('[121596] PC 0x000030d0 instr 0x14200004', () => {
    const pc = 0x30d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200004 >>> 0);
    stepOne();
  });
  it('[121597] PC 0x000030d4 instr 0x00047080', () => {
    const pc = 0x30d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x47080 >>> 0);
    stepOne();
  });
  it('[121598] PC 0x000030e4 instr 0x01c47023', () => {
    const pc = 0x30e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
  it('[121599] PC 0x000030e8 instr 0x000e7080', () => {
    const pc = 0x30e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7080 >>> 0);
    stepOne();
  });
  it('[121600] PC 0x000030ec instr 0x01c47023', () => {
    const pc = 0x30ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c47023 >>> 0);
    stepOne();
  });
});
