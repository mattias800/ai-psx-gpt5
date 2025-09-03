import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 78601-78700', () => {
  beforeAll(() => initOnce());
  it('[78601] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78602] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78603] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78604] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78605] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78606] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78607] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78608] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78609] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78610] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78611] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78612] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78613] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78614] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78615] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78616] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78617] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78618] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78619] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78620] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78621] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78622] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78623] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78624] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78625] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78626] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78627] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78628] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78629] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78630] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78631] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78632] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78633] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78634] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78635] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78636] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78637] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78638] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78639] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78640] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78641] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78642] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78643] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78644] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78645] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78646] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78647] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78648] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78649] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78650] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78651] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78652] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78653] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78654] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78655] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78656] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78657] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78658] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78659] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78660] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78661] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78662] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78663] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78664] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78665] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78666] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78667] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78668] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78669] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78670] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78671] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78672] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78673] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78674] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78675] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78676] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78677] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78678] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78679] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78680] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78681] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78682] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78683] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78684] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78685] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78686] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78687] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78688] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78689] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78690] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78691] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78692] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78693] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78694] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78695] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78696] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78697] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78698] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78699] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78700] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
});
