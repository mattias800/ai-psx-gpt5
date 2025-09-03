import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 83701-83800', () => {
  beforeAll(() => initOnce());
  it('[83701] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83702] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83703] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83704] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83705] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83706] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83707] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83708] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83709] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83710] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83711] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83712] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83713] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83714] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83715] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83716] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83717] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83718] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83719] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83720] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83721] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83722] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83723] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83724] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83725] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83726] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83727] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83728] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83729] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83730] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83731] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83732] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83733] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83734] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83735] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83736] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83737] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83738] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83739] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83740] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83741] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83742] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83743] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83744] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83745] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83746] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83747] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83748] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83749] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83750] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83751] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83752] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83753] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83754] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83755] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83756] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83757] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83758] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83759] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83760] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83761] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83762] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83763] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83764] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83765] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83766] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83767] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83768] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83769] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83770] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83771] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83772] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83773] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83774] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83775] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83776] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83777] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83778] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83779] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83780] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83781] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83782] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83783] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83784] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83785] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83786] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83787] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83788] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83789] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83790] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83791] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83792] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83793] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83794] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83795] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83796] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83797] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83798] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83799] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83800] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
