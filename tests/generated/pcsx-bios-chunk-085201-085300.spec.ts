import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 85201-85300', () => {
  beforeAll(() => initOnce());
  it('[85201] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85202] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85203] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85204] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85205] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85206] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85207] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85208] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85209] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85210] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85211] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85212] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85213] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85214] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85215] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85216] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85217] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85218] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85219] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85220] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85221] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85222] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85223] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85224] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85225] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85226] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[85227] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[85228] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[85229] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85230] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85231] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85232] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[85233] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[85234] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[85235] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85236] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85237] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85238] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85239] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85240] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85241] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85242] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85243] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85244] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85245] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85246] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85247] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85248] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85249] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85250] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85251] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85252] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85253] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85254] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85255] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85256] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85257] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85258] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85259] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85260] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[85261] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[85262] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[85263] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85264] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85265] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85266] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[85267] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[85268] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[85269] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85270] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85271] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85272] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85273] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85274] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85275] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85276] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85277] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85278] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85279] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85280] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85281] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85282] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85283] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85284] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85285] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85286] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85287] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85288] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85289] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85290] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85291] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85292] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85293] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85294] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[85295] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[85296] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[85297] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85298] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85299] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85300] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
});
