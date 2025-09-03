import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 13401-13500', () => {
  beforeAll(() => initOnce());
  it('[13401] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13402] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13403] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13404] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13405] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13406] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13407] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13408] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13409] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13410] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13411] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13412] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13413] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13414] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13415] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13416] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13417] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13418] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13419] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13420] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13421] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13422] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13423] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13424] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13425] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13426] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13427] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13428] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13429] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13430] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13431] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13432] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13433] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13434] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13435] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13436] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13437] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13438] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13439] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13440] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13441] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13442] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13443] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13444] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13445] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13446] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13447] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13448] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13449] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13450] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13451] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13452] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13453] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13454] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13455] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13456] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13457] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13458] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13459] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13460] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13461] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13462] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13463] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13464] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13465] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13466] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13467] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13468] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13469] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13470] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13471] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13472] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13473] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13474] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13475] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13476] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13477] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13478] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13479] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13480] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13481] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13482] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13483] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13484] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13485] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13486] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13487] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13488] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13489] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13490] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13491] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13492] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13493] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13494] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13495] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13496] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13497] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13498] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13499] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13500] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
