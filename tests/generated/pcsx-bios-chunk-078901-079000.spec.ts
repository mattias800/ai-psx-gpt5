import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 78901-79000', () => {
  beforeAll(() => initOnce());
  it('[78901] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78902] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78903] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78904] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78905] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78906] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78907] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78908] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78909] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78910] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78911] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78912] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78913] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78914] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78915] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78916] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78917] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78918] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78919] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78920] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78921] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78922] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78923] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78924] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78925] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78926] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78927] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78928] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78929] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78930] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78931] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78932] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78933] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78934] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78935] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78936] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78937] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78938] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78939] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78940] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78941] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78942] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78943] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78944] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78945] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78946] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78947] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78948] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78949] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78950] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78951] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78952] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78953] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78954] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78955] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78956] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78957] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78958] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78959] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78960] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78961] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78962] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78963] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78964] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78965] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78966] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78967] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78968] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78969] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78970] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78971] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78972] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78973] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78974] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78975] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78976] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78977] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78978] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78979] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78980] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78981] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78982] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78983] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78984] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78985] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78986] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78987] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78988] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78989] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78990] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78991] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78992] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78993] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78994] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78995] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78996] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78997] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78998] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78999] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79000] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
});
