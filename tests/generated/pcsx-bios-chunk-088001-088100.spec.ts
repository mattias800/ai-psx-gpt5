import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 88001-88100', () => {
  beforeAll(() => initOnce());
  it('[88001] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[88002] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[88003] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[88004] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[88005] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[88006] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[88007] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[88008] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[88009] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[88010] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[88011] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[88012] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[88013] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[88014] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[88015] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[88016] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[88017] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[88018] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[88019] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[88020] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[88021] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[88022] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[88023] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[88024] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[88025] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[88026] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[88027] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[88028] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[88029] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[88030] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[88031] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[88032] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[88033] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[88034] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[88035] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[88036] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[88037] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[88038] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[88039] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[88040] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[88041] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[88042] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[88043] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[88044] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[88045] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[88046] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[88047] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[88048] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[88049] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[88050] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[88051] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[88052] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[88053] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[88054] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[88055] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[88056] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[88057] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[88058] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[88059] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[88060] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[88061] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[88062] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[88063] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[88064] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[88065] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[88066] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[88067] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[88068] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[88069] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[88070] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[88071] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[88072] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[88073] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[88074] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[88075] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[88076] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[88077] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[88078] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[88079] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[88080] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[88081] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[88082] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[88083] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[88084] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[88085] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[88086] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[88087] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[88088] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[88089] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[88090] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[88091] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[88092] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[88093] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[88094] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[88095] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[88096] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[88097] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[88098] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[88099] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[88100] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
});
