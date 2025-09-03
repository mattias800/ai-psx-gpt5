import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 17301-17400', () => {
  beforeAll(() => initOnce());
  it('[17301] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17302] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17303] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17304] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17305] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17306] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17307] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17308] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17309] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17310] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17311] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17312] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17313] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17314] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17315] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17316] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17317] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17318] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17319] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17320] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17321] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17322] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17323] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17324] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17325] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17326] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17327] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17328] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17329] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17330] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17331] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17332] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17333] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17334] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17335] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17336] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17337] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17338] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17339] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17340] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17341] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17342] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17343] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17344] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17345] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[17346] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[17347] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[17348] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17349] PC 0xbfc003cc instr 0x3c1d801f', () => {
    const pc = 0xbfc003cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1d801f >>> 0);
    stepOne();
  });
  it('[17350] PC 0xbfc003d0 instr 0x37bdff00', () => {
    const pc = 0xbfc003d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x37bdff00 >>> 0);
    stepOne();
  });
  it('[17351] PC 0xbfc003d4 instr 0x3c1ca001', () => {
    const pc = 0xbfc003d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1ca001 >>> 0);
    stepOne();
  });
  it('[17352] PC 0xbfc003d8 instr 0x279c0ff0', () => {
    const pc = 0xbfc003d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x279c0ff0 >>> 0);
    stepOne();
  });
  it('[17353] PC 0xbfc003dc instr 0x03a0f021', () => {
    const pc = 0xbfc003dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3a0f021 >>> 0);
    stepOne();
  });
  it('[17354] PC 0xbfc003e0 instr 0x24080b88', () => {
    const pc = 0xbfc003e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080b88 >>> 0);
    stepOne();
  });
  it('[17355] PC 0xbfc003e4 instr 0x3c011f80', () => {
    const pc = 0xbfc003e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c011f80 >>> 0);
    stepOne();
  });
  it('[17356] PC 0xbfc003e8 instr 0xac281060', () => {
    const pc = 0xbfc003e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac281060 >>> 0);
    stepOne();
  });
  it('[17357] PC 0xbfc003ec instr 0x24080002', () => {
    const pc = 0xbfc003ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080002 >>> 0);
    stepOne();
  });
  it('[17358] PC 0xbfc003f0 instr 0xac080060', () => {
    const pc = 0xbfc003f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac080060 >>> 0);
    stepOne();
  });
  it('[17359] PC 0xbfc003f4 instr 0x24020000', () => {
    const pc = 0xbfc003f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24020000 >>> 0);
    stepOne();
  });
  it('[17360] PC 0xbfc003f8 instr 0xac020064', () => {
    const pc = 0xbfc003f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac020064 >>> 0);
    stepOne();
  });
  it('[17361] PC 0xbfc003fc instr 0x240800ff', () => {
    const pc = 0xbfc003fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240800ff >>> 0);
    stepOne();
  });
  it('[17362] PC 0xbfc00400 instr 0x3c091f80', () => {
    const pc = 0xbfc00400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c091f80 >>> 0);
    stepOne();
  });
  it('[17363] PC 0xbfc00404 instr 0xac080068', () => {
    const pc = 0xbfc00404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac080068 >>> 0);
    stepOne();
  });
  it('[17364] PC 0xbfc00408 instr 0x35291c00', () => {
    const pc = 0xbfc00408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x35291c00 >>> 0);
    stepOne();
  });
  it('[17365] PC 0xbfc0040c instr 0xa5200180', () => {
    const pc = 0xbfc0040c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5200180 >>> 0);
    stepOne();
  });
  it('[17366] PC 0xbfc00410 instr 0xa5200182', () => {
    const pc = 0xbfc00410;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5200182 >>> 0);
    stepOne();
  });
  it('[17367] PC 0xbfc00414 instr 0xa5200184', () => {
    const pc = 0xbfc00414;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5200184 >>> 0);
    stepOne();
  });
  it('[17368] PC 0xbfc00418 instr 0x0bf01bb1', () => {
    const pc = 0xbfc00418;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xbf01bb1 >>> 0);
    stepOne();
  });
  it('[17369] PC 0xbfc0041c instr 0xa5200186', () => {
    const pc = 0xbfc0041c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5200186 >>> 0);
    stepOne();
  });
  it('[17370] PC 0xbfc06ec4 instr 0x27bdffe8', () => {
    const pc = 0xbfc06ec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[17371] PC 0xbfc06ec8 instr 0xafbf0014', () => {
    const pc = 0xbfc06ec8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17372] PC 0xbfc06ecc instr 0x0ff00698', () => {
    const pc = 0xbfc06ecc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[17373] PC 0xbfc06ed0 instr 0x2404000f', () => {
    const pc = 0xbfc06ed0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2404000f >>> 0);
    stepOne();
  });
  it('[17374] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[17375] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17376] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[17377] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[17378] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[17379] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[17380] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[17381] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[17382] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17383] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17384] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17385] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17386] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17387] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[17388] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[17389] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17390] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17391] PC 0xbfc06ed4 instr 0x3c021f80', () => {
    const pc = 0xbfc06ed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c021f80 >>> 0);
    stepOne();
  });
  it('[17392] PC 0xbfc06ed8 instr 0x34421c00', () => {
    const pc = 0xbfc06ed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34421c00 >>> 0);
    stepOne();
  });
  it('[17393] PC 0xbfc06edc instr 0xa4400186', () => {
    const pc = 0xbfc06edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400186 >>> 0);
    stepOne();
  });
  it('[17394] PC 0xbfc06ee0 instr 0xa4400184', () => {
    const pc = 0xbfc06ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400184 >>> 0);
    stepOne();
  });
  it('[17395] PC 0xbfc06ee4 instr 0xa4400182', () => {
    const pc = 0xbfc06ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400182 >>> 0);
    stepOne();
  });
  it('[17396] PC 0xbfc06ee8 instr 0x0ff01c0f', () => {
    const pc = 0xbfc06ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff01c0f >>> 0);
    stepOne();
  });
  it('[17397] PC 0xbfc06eec instr 0xa4400180', () => {
    const pc = 0xbfc06eec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400180 >>> 0);
    stepOne();
  });
  it('[17398] PC 0xbfc0703c instr 0x3c0fbfc1', () => {
    const pc = 0xbfc0703c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0fbfc1 >>> 0);
    stepOne();
  });
  it('[17399] PC 0xbfc07040 instr 0x81efe288', () => {
    const pc = 0xbfc07040;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81efe288 >>> 0);
    stepOne();
  });
  it('[17400] PC 0xbfc07044 instr 0x3c0ebfc1', () => {
    const pc = 0xbfc07044;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
});
