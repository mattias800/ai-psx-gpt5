import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 601-700', () => {
  beforeAll(() => initOnce());
  it('[601] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[602] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[603] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[604] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[605] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[606] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[607] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[608] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[609] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[610] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[611] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[612] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[613] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[614] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[615] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[616] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[617] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[618] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[619] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[620] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[621] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[622] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[623] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[624] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[625] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[626] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[627] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[628] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[629] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[630] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[631] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[632] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[633] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[634] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[635] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[636] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[637] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[638] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[639] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[640] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[641] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[642] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[643] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[644] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[645] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[646] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[647] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[648] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[649] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[650] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[651] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[652] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[653] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[654] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[655] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[656] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[657] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[658] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[659] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[660] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[661] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[662] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[663] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[664] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[665] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[666] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[667] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[668] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[669] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[670] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[671] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[672] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[673] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[674] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[675] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[676] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[677] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[678] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[679] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[680] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[681] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[682] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[683] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[684] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[685] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[686] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[687] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[688] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[689] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[690] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[691] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[692] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[693] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[694] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[695] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[696] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[697] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[698] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[699] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[700] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
});
