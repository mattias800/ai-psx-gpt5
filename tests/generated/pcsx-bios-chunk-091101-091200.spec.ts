import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 91101-91200', () => {
  beforeAll(() => initOnce());
  it('[91101] PC 0xbfc068ac instr 0x0ff00698', () => {
    const pc = 0xbfc068ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[91102] PC 0xbfc068b0 instr 0x24040005', () => {
    const pc = 0xbfc068b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040005 >>> 0);
    stepOne();
  });
  it('[91103] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[91104] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[91105] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[91106] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[91107] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[91108] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[91109] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[91110] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[91111] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[91112] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[91113] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[91114] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[91115] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[91116] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[91117] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[91118] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[91119] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91120] PC 0xbfc068b4 instr 0x3c04bfc1', () => {
    const pc = 0xbfc068b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[91121] PC 0xbfc068b8 instr 0x0ff00638', () => {
    const pc = 0xbfc068b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00638 >>> 0);
    stepOne();
  });
  it('[91122] PC 0xbfc068bc instr 0x2484dfb0', () => {
    const pc = 0xbfc068bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484dfb0 >>> 0);
    stepOne();
  });
  it('[91123] PC 0xbfc018e0 instr 0x27bdffe8', () => {
    const pc = 0xbfc018e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[91124] PC 0xbfc018e4 instr 0xafa40018', () => {
    const pc = 0xbfc018e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[91125] PC 0xbfc018e8 instr 0x00a01821', () => {
    const pc = 0xbfc018e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[91126] PC 0xbfc018ec instr 0xafbf0014', () => {
    const pc = 0xbfc018ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[91127] PC 0xbfc018f0 instr 0x8fa50018', () => {
    const pc = 0xbfc018f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa50018 >>> 0);
    stepOne();
  });
  it('[91128] PC 0xbfc018f4 instr 0x00c04021', () => {
    const pc = 0xbfc018f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc04021 >>> 0);
    stepOne();
  });
  it('[91129] PC 0xbfc018f8 instr 0xafa80020', () => {
    const pc = 0xbfc018f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa80020 >>> 0);
    stepOne();
  });
  it('[91130] PC 0xbfc018fc instr 0xafa3001c', () => {
    const pc = 0xbfc018fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa3001c >>> 0);
    stepOne();
  });
  it('[91131] PC 0xbfc01900 instr 0x27a6001c', () => {
    const pc = 0xbfc01900;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a6001c >>> 0);
    stepOne();
  });
  it('[91132] PC 0xbfc01904 instr 0x24040001', () => {
    const pc = 0xbfc01904;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[91133] PC 0xbfc01908 instr 0x0ff00368', () => {
    const pc = 0xbfc01908;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00368 >>> 0);
    stepOne();
  });
  it('[91134] PC 0xbfc0190c instr 0xafa70024', () => {
    const pc = 0xbfc0190c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70024 >>> 0);
    stepOne();
  });
  it('[91135] PC 0xbfc00da0 instr 0x27bdfdd0', () => {
    const pc = 0xbfc00da0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdfdd0 >>> 0);
    stepOne();
  });
  it('[91136] PC 0xbfc00da4 instr 0xafb30038', () => {
    const pc = 0xbfc00da4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30038 >>> 0);
    stepOne();
  });
  it('[91137] PC 0xbfc00da8 instr 0xafbf003c', () => {
    const pc = 0xbfc00da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf003c >>> 0);
    stepOne();
  });
  it('[91138] PC 0xbfc00dac instr 0x00c09821', () => {
    const pc = 0xbfc00dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc09821 >>> 0);
    stepOne();
  });
  it('[91139] PC 0xbfc00db0 instr 0x14a00003', () => {
    const pc = 0xbfc00db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[91140] PC 0xbfc00db4 instr 0xafa40230', () => {
    const pc = 0xbfc00db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40230 >>> 0);
    stepOne();
  });
  it('[91141] PC 0xbfc00dc0 instr 0xafbe0044', () => {
    const pc = 0xbfc00dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbe0044 >>> 0);
    stepOne();
  });
  it('[91142] PC 0xbfc00dc4 instr 0xafb20058', () => {
    const pc = 0xbfc00dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20058 >>> 0);
    stepOne();
  });
  it('[91143] PC 0xbfc00dc8 instr 0xafb00060', () => {
    const pc = 0xbfc00dc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00060 >>> 0);
    stepOne();
  });
  it('[91144] PC 0xbfc00dcc instr 0xafb1005c', () => {
    const pc = 0xbfc00dcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1005c >>> 0);
    stepOne();
  });
  it('[91145] PC 0xbfc00dd0 instr 0xafb40054', () => {
    const pc = 0xbfc00dd0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb40054 >>> 0);
    stepOne();
  });
  it('[91146] PC 0xbfc00dd4 instr 0xafb50050', () => {
    const pc = 0xbfc00dd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb50050 >>> 0);
    stepOne();
  });
  it('[91147] PC 0xbfc00dd8 instr 0xafb6004c', () => {
    const pc = 0xbfc00dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb6004c >>> 0);
    stepOne();
  });
  it('[91148] PC 0xbfc00ddc instr 0x3c0ebfc1', () => {
    const pc = 0xbfc00ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[91149] PC 0xbfc00de0 instr 0xafb70048', () => {
    const pc = 0xbfc00de0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb70048 >>> 0);
    stepOne();
  });
  it('[91150] PC 0xbfc00de4 instr 0x25cedd60', () => {
    const pc = 0xbfc00de4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25cedd60 >>> 0);
    stepOne();
  });
  it('[91151] PC 0xbfc00de8 instr 0x3c1ebfc1', () => {
    const pc = 0xbfc00de8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1ebfc1 >>> 0);
    stepOne();
  });
  it('[91152] PC 0xbfc00dec instr 0xafae01dc', () => {
    const pc = 0xbfc00dec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafae01dc >>> 0);
    stepOne();
  });
  it('[91153] PC 0xbfc00df0 instr 0x00a09021', () => {
    const pc = 0xbfc00df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa09021 >>> 0);
    stepOne();
  });
  it('[91154] PC 0xbfc00df4 instr 0x27deddb0', () => {
    const pc = 0xbfc00df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27deddb0 >>> 0);
    stepOne();
  });
  it('[91155] PC 0xbfc00df8 instr 0xafa00224', () => {
    const pc = 0xbfc00df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa00224 >>> 0);
    stepOne();
  });
  it('[91156] PC 0xbfc00dfc instr 0x2407002a', () => {
    const pc = 0xbfc00dfc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2407002a >>> 0);
    stepOne();
  });
  it('[91157] PC 0xbfc00e00 instr 0x24080044', () => {
    const pc = 0xbfc00e00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080044 >>> 0);
    stepOne();
  });
  it('[91158] PC 0xbfc00e04 instr 0x24090032', () => {
    const pc = 0xbfc00e04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090032 >>> 0);
    stepOne();
  });
  it('[91159] PC 0xbfc00e08 instr 0x240a002d', () => {
    const pc = 0xbfc00e08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a002d >>> 0);
    stepOne();
  });
  it('[91160] PC 0xbfc00e0c instr 0x240b0020', () => {
    const pc = 0xbfc00e0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0020 >>> 0);
    stepOne();
  });
  it('[91161] PC 0xbfc00e10 instr 0x240c0023', () => {
    const pc = 0xbfc00e10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240c0023 >>> 0);
    stepOne();
  });
  it('[91162] PC 0xbfc00e14 instr 0x240d002b', () => {
    const pc = 0xbfc00e14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240d002b >>> 0);
    stepOne();
  });
  it('[91163] PC 0xbfc00e18 instr 0x241f0030', () => {
    const pc = 0xbfc00e18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x241f0030 >>> 0);
    stepOne();
  });
  it('[91164] PC 0xbfc00e1c instr 0x92440000', () => {
    const pc = 0xbfc00e1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x92440000 >>> 0);
    stepOne();
  });
  it('[91165] PC 0xbfc00e20 instr 0x00000000', () => {
    const pc = 0xbfc00e20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91166] PC 0xbfc00e24 instr 0x1480000d', () => {
    const pc = 0xbfc00e24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480000d >>> 0);
    stepOne();
  });
  it('[91167] PC 0xbfc00e28 instr 0x24010025', () => {
    const pc = 0xbfc00e28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010025 >>> 0);
    stepOne();
  });
  it('[91168] PC 0xbfc00e5c instr 0x1081000d', () => {
    const pc = 0xbfc00e5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1081000d >>> 0);
    stepOne();
  });
  it('[91169] PC 0xbfc00e60 instr 0x00008821', () => {
    const pc = 0xbfc00e60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8821 >>> 0);
    stepOne();
  });
  it('[91170] PC 0xbfc00e64 instr 0x0ff03620', () => {
    const pc = 0xbfc00e64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff03620 >>> 0);
    stepOne();
  });
  it('[91171] PC 0xbfc00e68 instr 0x00000000', () => {
    const pc = 0xbfc00e68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91172] PC 0xbfc0d880 instr 0x240a00b0', () => {
    const pc = 0xbfc0d880;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[91173] PC 0xbfc0d884 instr 0x01400008', () => {
    const pc = 0xbfc0d884;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[91174] PC 0xbfc0d888 instr 0x2409003d', () => {
    const pc = 0xbfc0d888;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409003d >>> 0);
    stepOne();
  });
  it('[91175] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[91176] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[91177] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[91178] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91179] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[91180] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[91181] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[91182] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[91183] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[91184] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91185] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[91186] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[91187] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[91188] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[91189] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
  it('[91190] PC 0x00004078 instr 0x24010009', () => {
    const pc = 0x4078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010009 >>> 0);
    stepOne();
  });
  it('[91191] PC 0x0000407c instr 0x11c10009', () => {
    const pc = 0x407c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11c10009 >>> 0);
    stepOne();
  });
  it('[91192] PC 0x00004080 instr 0xafbf0014', () => {
    const pc = 0x4080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[91193] PC 0x00004084 instr 0x2401000a', () => {
    const pc = 0x4084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401000a >>> 0);
    stepOne();
  });
  it('[91194] PC 0x00004088 instr 0x15c10016', () => {
    const pc = 0x4088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c10016 >>> 0);
    stepOne();
  });
  it('[91195] PC 0x0000408c instr 0x93b90018', () => {
    const pc = 0x408c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x93b90018 >>> 0);
    stepOne();
  });
  it('[91196] PC 0x00004090 instr 0x0c00101b', () => {
    const pc = 0x4090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc00101b >>> 0);
    stepOne();
  });
  it('[91197] PC 0x00004094 instr 0x2404000d', () => {
    const pc = 0x4094;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2404000d >>> 0);
    stepOne();
  });
  it('[91198] PC 0x0000406c instr 0x27bdffe8', () => {
    const pc = 0x406c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[91199] PC 0x00004070 instr 0xafa40018', () => {
    const pc = 0x4070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[91200] PC 0x00004074 instr 0x83ae0018', () => {
    const pc = 0x4074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x83ae0018 >>> 0);
    stepOne();
  });
});
