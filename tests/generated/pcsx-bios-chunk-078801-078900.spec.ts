import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 78801-78900', () => {
  beforeAll(() => initOnce());
  it('[78801] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78802] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78803] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78804] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78805] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78806] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78807] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78808] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78809] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78810] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78811] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78812] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78813] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78814] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78815] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78816] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78817] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78818] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78819] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78820] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78821] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78822] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78823] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78824] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78825] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78826] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78827] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78828] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78829] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78830] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78831] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78832] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78833] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78834] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78835] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78836] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78837] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78838] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78839] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78840] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78841] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78842] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78843] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78844] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78845] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78846] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78847] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78848] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78849] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78850] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78851] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78852] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78853] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78854] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78855] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78856] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78857] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78858] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78859] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78860] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78861] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78862] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78863] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78864] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78865] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78866] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78867] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78868] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78869] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78870] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78871] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78872] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78873] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78874] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78875] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78876] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78877] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78878] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78879] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78880] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78881] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78882] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78883] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78884] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78885] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78886] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78887] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78888] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78889] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78890] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78891] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78892] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78893] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78894] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78895] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78896] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78897] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78898] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78899] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78900] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
});
