import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 125801-125900', () => {
  beforeAll(() => initOnce());
  it('[125801] PC 0x00003ea0 instr 0x26318908', () => {
    const pc = 0x3ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26318908 >>> 0);
    stepOne();
  });
  it('[125802] PC 0x00003ea4 instr 0x02408021', () => {
    const pc = 0x3ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2408021 >>> 0);
    stepOne();
  });
  it('[125803] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125804] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125805] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125806] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125807] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125808] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125809] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125810] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125811] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125812] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125813] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125814] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125815] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125816] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125817] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125818] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125819] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125820] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125821] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125822] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125823] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125824] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125825] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125826] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125827] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125828] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125829] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125830] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125831] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125832] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125833] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125834] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125835] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125836] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125837] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125838] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125839] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125840] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125841] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125842] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125843] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125844] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125845] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125846] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125847] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125848] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125849] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125850] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125851] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125852] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125853] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125854] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125855] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125856] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125857] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125858] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125859] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125860] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125861] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125862] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125863] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125864] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125865] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125866] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125867] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125868] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125869] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125870] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125871] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125872] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125873] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125874] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125875] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125876] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125877] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125878] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125879] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125880] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125881] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125882] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125883] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125884] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125885] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125886] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125887] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125888] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125889] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125890] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125891] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[125892] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125893] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[125894] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125895] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[125896] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[125897] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[125898] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[125899] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[125900] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
});
