import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 13601-13700', () => {
  beforeAll(() => initOnce());
  it('[13601] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13602] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13603] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13604] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13605] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13606] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13607] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13608] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13609] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13610] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13611] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13612] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13613] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13614] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13615] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13616] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13617] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13618] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13619] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13620] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13621] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13622] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13623] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13624] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13625] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13626] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13627] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13628] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13629] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13630] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13631] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13632] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13633] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13634] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13635] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13636] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13637] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13638] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13639] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13640] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13641] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13642] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13643] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13644] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13645] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13646] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13647] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13648] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13649] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13650] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13651] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13652] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13653] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13654] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13655] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13656] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13657] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13658] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13659] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13660] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13661] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13662] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13663] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13664] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13665] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13666] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13667] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13668] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13669] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13670] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13671] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13672] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13673] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13674] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13675] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13676] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13677] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13678] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13679] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13680] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13681] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13682] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13683] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13684] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13685] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13686] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13687] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13688] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13689] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13690] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13691] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13692] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13693] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13694] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13695] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[13696] PC 0xbfc003c0 instr 0x0043082b', () => {
    const pc = 0xbfc003c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[13697] PC 0xbfc003c4 instr 0x1420fffc', () => {
    const pc = 0xbfc003c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[13698] PC 0xbfc003c8 instr 0x00000000', () => {
    const pc = 0xbfc003c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[13699] PC 0xbfc003b8 instr 0xac400000', () => {
    const pc = 0xbfc003b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[13700] PC 0xbfc003bc instr 0x20420004', () => {
    const pc = 0xbfc003bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
