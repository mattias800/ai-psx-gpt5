import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 93201-93300', () => {
  beforeAll(() => initOnce());
  it('[93201] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93202] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93203] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93204] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93205] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93206] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93207] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93208] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93209] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93210] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93211] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93212] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93213] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93214] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93215] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93216] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93217] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93218] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93219] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93220] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93221] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93222] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93223] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93224] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93225] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93226] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93227] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93228] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93229] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93230] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93231] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93232] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93233] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93234] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93235] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93236] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93237] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93238] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93239] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93240] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93241] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93242] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93243] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93244] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93245] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93246] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93247] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93248] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93249] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93250] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93251] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93252] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93253] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93254] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93255] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93256] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93257] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93258] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93259] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93260] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93261] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93262] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93263] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93264] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93265] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93266] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93267] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93268] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93269] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93270] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93271] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93272] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93273] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93274] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93275] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93276] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93277] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93278] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93279] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93280] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93281] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93282] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93283] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93284] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93285] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93286] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93287] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93288] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93289] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93290] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93291] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93292] PC 0x00003ea8 instr 0x8e0e0000', () => {
    const pc = 0x3ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e0e0000 >>> 0);
    stepOne();
  });
  it('[93293] PC 0x00003eac instr 0x00000000', () => {
    const pc = 0x3eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93294] PC 0x00003eb0 instr 0x31cf1000', () => {
    const pc = 0x3eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf1000 >>> 0);
    stepOne();
  });
  it('[93295] PC 0x00003eb4 instr 0x11e00009', () => {
    const pc = 0x3eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00009 >>> 0);
    stepOne();
  });
  it('[93296] PC 0x00003eb8 instr 0x00000000', () => {
    const pc = 0x3eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[93297] PC 0x00003edc instr 0x2610002c', () => {
    const pc = 0x3edc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610002c >>> 0);
    stepOne();
  });
  it('[93298] PC 0x00003ee0 instr 0x0211082b', () => {
    const pc = 0x3ee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x211082b >>> 0);
    stepOne();
  });
  it('[93299] PC 0x00003ee4 instr 0x1420fff0', () => {
    const pc = 0x3ee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff0 >>> 0);
    stepOne();
  });
  it('[93300] PC 0x00003ee8 instr 0x00000000', () => {
    const pc = 0x3ee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
