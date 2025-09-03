import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 5201-5300', () => {
  beforeAll(() => initOnce());
  it('[5201] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5202] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5203] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5204] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5205] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5206] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5207] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5208] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5209] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5210] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5211] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5212] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5213] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5214] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5215] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5216] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5217] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5218] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5219] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5220] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5221] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5222] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5223] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5224] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5225] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5226] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5227] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5228] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5229] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5230] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5231] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5232] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5233] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5234] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5235] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5236] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5237] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5238] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5239] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5240] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5241] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5242] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5243] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5244] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5245] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5246] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5247] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5248] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5249] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5250] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5251] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5252] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5253] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5254] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5255] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5256] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5257] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5258] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5259] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5260] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5261] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5262] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5263] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5264] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5265] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5266] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5267] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5268] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5269] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5270] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5271] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5272] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5273] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5274] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5275] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5276] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5277] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5278] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5279] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5280] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5281] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5282] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5283] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5284] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5285] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5286] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5287] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5288] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5289] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5290] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5291] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5292] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5293] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5294] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5295] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[5296] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[5297] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[5298] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[5299] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[5300] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
