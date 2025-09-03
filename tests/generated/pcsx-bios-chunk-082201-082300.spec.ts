import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 82201-82300', () => {
  beforeAll(() => initOnce());
  it('[82201] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82202] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82203] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82204] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82205] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82206] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82207] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82208] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82209] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82210] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82211] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82212] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82213] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82214] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82215] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82216] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82217] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82218] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82219] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82220] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82221] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82222] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82223] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82224] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82225] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82226] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82227] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82228] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82229] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82230] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82231] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82232] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82233] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82234] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82235] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82236] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82237] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82238] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82239] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82240] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82241] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82242] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82243] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82244] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82245] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82246] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82247] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82248] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82249] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82250] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82251] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82252] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82253] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82254] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82255] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82256] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82257] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82258] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82259] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82260] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82261] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82262] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82263] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82264] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82265] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82266] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82267] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82268] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82269] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82270] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82271] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82272] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82273] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82274] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82275] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82276] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82277] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82278] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82279] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82280] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82281] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82282] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82283] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82284] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82285] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82286] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82287] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82288] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82289] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82290] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82291] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82292] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82293] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82294] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82295] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82296] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[82297] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[82298] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[82299] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[82300] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
