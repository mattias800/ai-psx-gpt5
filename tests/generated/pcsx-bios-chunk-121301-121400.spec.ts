import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 121301-121400', () => {
  beforeAll(() => initOnce());
  it('[121301] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121302] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121303] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121304] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121305] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121306] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121307] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121308] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121309] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121310] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121311] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121312] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121313] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121314] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121315] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121316] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121317] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121318] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121319] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121320] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121321] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121322] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121323] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121324] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121325] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121326] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121327] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121328] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121329] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121330] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121331] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121332] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121333] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121334] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121335] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121336] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121337] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121338] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121339] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121340] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121341] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121342] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121343] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121344] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121345] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121346] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121347] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121348] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121349] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121350] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121351] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121352] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121353] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121354] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121355] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121356] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121357] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121358] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121359] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121360] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121361] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121362] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121363] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121364] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121365] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121366] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121367] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121368] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121369] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121370] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121371] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121372] PC 0xbfc01aec instr 0x24a5ffff', () => {
    const pc = 0xbfc01aec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[121373] PC 0xbfc01af0 instr 0xa0800000', () => {
    const pc = 0xbfc01af0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[121374] PC 0xbfc01af4 instr 0x1ca0fffd', () => {
    const pc = 0xbfc01af4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[121375] PC 0xbfc01af8 instr 0x24840001', () => {
    const pc = 0xbfc01af8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[121376] PC 0xbfc01afc instr 0x00601021', () => {
    const pc = 0xbfc01afc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[121377] PC 0xbfc01b00 instr 0x03e00008', () => {
    const pc = 0xbfc01b00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121378] PC 0xbfc01b04 instr 0x00000000', () => {
    const pc = 0xbfc01b04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121379] PC 0xbfc0464c instr 0x8fa4001c', () => {
    const pc = 0xbfc0464c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa4001c >>> 0);
    stepOne();
  });
  it('[121380] PC 0xbfc04650 instr 0x8fa50020', () => {
    const pc = 0xbfc04650;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa50020 >>> 0);
    stepOne();
  });
  it('[121381] PC 0xbfc04654 instr 0x3c01a000', () => {
    const pc = 0xbfc04654;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[121382] PC 0xbfc04658 instr 0xac240100', () => {
    const pc = 0xbfc04658;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac240100 >>> 0);
    stepOne();
  });
  it('[121383] PC 0xbfc0465c instr 0x3c01a000', () => {
    const pc = 0xbfc0465c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[121384] PC 0xbfc04660 instr 0xac250104', () => {
    const pc = 0xbfc04660;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac250104 >>> 0);
    stepOne();
  });
  it('[121385] PC 0xbfc04664 instr 0x00a01021', () => {
    const pc = 0xbfc04664;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01021 >>> 0);
    stepOne();
  });
  it('[121386] PC 0xbfc04668 instr 0x8fbf0014', () => {
    const pc = 0xbfc04668;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[121387] PC 0xbfc0466c instr 0x27bd0020', () => {
    const pc = 0xbfc0466c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0020 >>> 0);
    stepOne();
  });
  it('[121388] PC 0xbfc04670 instr 0x03e00008', () => {
    const pc = 0xbfc04670;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[121389] PC 0xbfc04674 instr 0x00000000', () => {
    const pc = 0xbfc04674;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121390] PC 0xbfc0691c instr 0x0ff036d4', () => {
    const pc = 0xbfc0691c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036d4 >>> 0);
    stepOne();
  });
  it('[121391] PC 0xbfc06920 instr 0x00002021', () => {
    const pc = 0xbfc06920;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2021 >>> 0);
    stepOne();
  });
  it('[121392] PC 0xbfc0db50 instr 0x240a00c0', () => {
    const pc = 0xbfc0db50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[121393] PC 0xbfc0db54 instr 0x01400008', () => {
    const pc = 0xbfc0db54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[121394] PC 0xbfc0db58 instr 0x24090001', () => {
    const pc = 0xbfc0db58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090001 >>> 0);
    stepOne();
  });
  it('[121395] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121396] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[121397] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[121398] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[121399] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[121400] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
});
