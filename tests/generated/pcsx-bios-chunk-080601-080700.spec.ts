import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 80601-80700', () => {
  beforeAll(() => initOnce());
  it('[80601] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[80602] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[80603] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[80604] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[80605] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[80606] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[80607] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[80608] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[80609] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[80610] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[80611] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[80612] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[80613] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[80614] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[80615] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[80616] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[80617] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[80618] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[80619] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[80620] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[80621] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[80622] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[80623] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[80624] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[80625] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[80626] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[80627] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[80628] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[80629] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[80630] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[80631] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[80632] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[80633] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[80634] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[80635] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[80636] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[80637] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[80638] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[80639] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[80640] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[80641] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[80642] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[80643] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[80644] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[80645] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[80646] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[80647] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[80648] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[80649] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[80650] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[80651] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[80652] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[80653] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[80654] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[80655] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[80656] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[80657] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[80658] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[80659] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[80660] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[80661] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[80662] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[80663] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[80664] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[80665] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[80666] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[80667] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[80668] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[80669] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[80670] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[80671] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[80672] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[80673] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[80674] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[80675] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[80676] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[80677] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[80678] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[80679] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[80680] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[80681] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[80682] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[80683] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[80684] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[80685] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[80686] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[80687] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[80688] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[80689] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[80690] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[80691] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[80692] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[80693] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[80694] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[80695] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[80696] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[80697] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[80698] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[80699] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[80700] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
});
