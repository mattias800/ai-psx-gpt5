import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 6601-6700', () => {
  beforeAll(() => initOnce());
  it('[6601] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6602] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6603] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6604] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6605] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6606] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6607] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6608] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6609] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6610] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6611] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6612] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6613] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6614] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6615] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6616] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6617] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6618] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6619] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6620] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6621] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6622] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6623] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6624] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6625] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6626] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6627] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6628] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6629] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6630] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6631] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6632] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6633] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6634] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6635] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6636] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6637] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6638] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6639] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6640] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6641] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6642] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6643] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6644] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6645] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6646] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6647] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6648] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6649] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6650] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6651] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6652] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6653] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6654] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6655] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6656] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6657] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6658] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6659] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6660] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6661] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6662] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6663] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6664] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6665] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6666] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6667] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6668] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6669] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6670] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6671] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6672] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6673] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6674] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6675] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6676] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6677] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6678] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6679] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6680] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6681] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6682] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6683] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6684] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6685] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6686] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6687] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6688] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6689] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6690] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6691] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6692] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6693] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6694] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6695] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[6696] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[6697] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[6698] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[6699] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[6700] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
