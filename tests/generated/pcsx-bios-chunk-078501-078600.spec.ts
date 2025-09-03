import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 78501-78600', () => {
  beforeAll(() => initOnce());
  it('[78501] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78502] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78503] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78504] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78505] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78506] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78507] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78508] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78509] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78510] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78511] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78512] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78513] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78514] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78515] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78516] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78517] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78518] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78519] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78520] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78521] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78522] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78523] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78524] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78525] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78526] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78527] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78528] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78529] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78530] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78531] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78532] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78533] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78534] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78535] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78536] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78537] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78538] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78539] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78540] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78541] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78542] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78543] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78544] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78545] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78546] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78547] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78548] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78549] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78550] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78551] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78552] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78553] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78554] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78555] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78556] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78557] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78558] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78559] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78560] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78561] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78562] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78563] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78564] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78565] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78566] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78567] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78568] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78569] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78570] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78571] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78572] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78573] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78574] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78575] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78576] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78577] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78578] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78579] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78580] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78581] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78582] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78583] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78584] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78585] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78586] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78587] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78588] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78589] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78590] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78591] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78592] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78593] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78594] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78595] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[78596] PC 0xbfc042f4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[78597] PC 0xbfc042e4 instr 0x8c870000', () => {
    const pc = 0xbfc042e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[78598] PC 0xbfc042e8 instr 0x20840004', () => {
    const pc = 0xbfc042e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[78599] PC 0xbfc042ec instr 0x20c60004', () => {
    const pc = 0xbfc042ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[78600] PC 0xbfc042f0 instr 0x1485fffc', () => {
    const pc = 0xbfc042f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
});
