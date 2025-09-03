import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 83001-83100', () => {
  beforeAll(() => initOnce());
  it('[83001] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83002] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83003] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83004] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83005] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83006] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83007] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83008] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83009] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83010] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83011] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83012] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83013] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83014] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83015] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83016] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83017] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83018] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83019] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83020] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83021] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83022] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83023] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83024] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83025] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83026] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83027] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83028] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83029] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83030] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83031] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83032] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83033] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83034] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83035] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83036] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83037] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83038] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83039] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83040] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83041] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83042] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83043] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83044] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83045] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83046] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83047] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83048] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83049] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83050] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83051] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83052] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83053] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83054] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83055] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83056] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83057] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83058] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83059] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83060] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83061] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83062] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83063] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83064] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83065] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83066] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83067] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83068] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83069] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83070] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83071] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83072] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83073] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83074] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83075] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83076] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83077] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83078] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83079] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83080] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83081] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83082] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83083] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83084] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83085] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83086] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83087] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83088] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83089] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83090] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83091] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83092] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83093] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83094] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83095] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83096] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
  it('[83097] PC 0x00002174 instr 0xa0800000', () => {
    const pc = 0x2174;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa0800000 >>> 0);
    stepOne();
  });
  it('[83098] PC 0x00002178 instr 0x1ca0fffd', () => {
    const pc = 0x2178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ca0fffd >>> 0);
    stepOne();
  });
  it('[83099] PC 0x0000217c instr 0x24840001', () => {
    const pc = 0x217c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[83100] PC 0x00002170 instr 0x24a5ffff', () => {
    const pc = 0x2170;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5ffff >>> 0);
    stepOne();
  });
});
