import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 78401-78500', () => {
  beforeAll(() => initOnce());
  it('[78401] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78402] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78403] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78404] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78405] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78406] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78407] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78408] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78409] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78410] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78411] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78412] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78413] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78414] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78415] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78416] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78417] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78418] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78419] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78420] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78421] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78422] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78423] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78424] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78425] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78426] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78427] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78428] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78429] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78430] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78431] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78432] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78433] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78434] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78435] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78436] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78437] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78438] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78439] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78440] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78441] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78442] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78443] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78444] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78445] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78446] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78447] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78448] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78449] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78450] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78451] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78452] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78453] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78454] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78455] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78456] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78457] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78458] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78459] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78460] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78461] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78462] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78463] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78464] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78465] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78466] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78467] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78468] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78469] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78470] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78471] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78472] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78473] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78474] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78475] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78476] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78477] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78478] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78479] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78480] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78481] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78482] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78483] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78484] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78485] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78486] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78487] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78488] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78489] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78490] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78491] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78492] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78493] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78494] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78495] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78496] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78497] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78498] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78499] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78500] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
});
