import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 83601-83700', () => {
  beforeAll(() => initOnce());
  it('[83601] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83602] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83603] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83604] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83605] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83606] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83607] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83608] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83609] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83610] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83611] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83612] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83613] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83614] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83615] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83616] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83617] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83618] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83619] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83620] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83621] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83622] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83623] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83624] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83625] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83626] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83627] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83628] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83629] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83630] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83631] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83632] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83633] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83634] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83635] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83636] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83637] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83638] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83639] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83640] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83641] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83642] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83643] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83644] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83645] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83646] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83647] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83648] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83649] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83650] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83651] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83652] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83653] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83654] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83655] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83656] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83657] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83658] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83659] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83660] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83661] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83662] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83663] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83664] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83665] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83666] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83667] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83668] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83669] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83670] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83671] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83672] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83673] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83674] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83675] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83676] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83677] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83678] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83679] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83680] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83681] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83682] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83683] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83684] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83685] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83686] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83687] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83688] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83689] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83690] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83691] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83692] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83693] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83694] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83695] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83696] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83697] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83698] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83699] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83700] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
