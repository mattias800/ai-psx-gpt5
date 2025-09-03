import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 85501-85600', () => {
  beforeAll(() => initOnce());
  it('[85501] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85502] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85503] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85504] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[85505] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[85506] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[85507] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85508] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85509] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85510] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85511] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85512] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85513] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85514] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85515] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85516] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85517] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85518] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85519] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85520] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85521] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85522] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85523] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85524] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85525] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85526] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85527] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85528] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85529] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85530] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85531] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85532] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[85533] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[85534] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[85535] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85536] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85537] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85538] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[85539] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[85540] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[85541] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85542] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85543] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85544] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85545] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85546] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85547] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85548] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85549] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85550] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85551] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85552] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85553] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85554] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85555] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85556] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85557] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85558] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85559] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85560] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85561] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85562] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85563] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85564] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85565] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85566] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[85567] PC 0xbfc019f0 instr 0xad400040', () => {
    const pc = 0xbfc019f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[85568] PC 0xbfc019f4 instr 0xad400044', () => {
    const pc = 0xbfc019f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[85569] PC 0xbfc019f8 instr 0xad400048', () => {
    const pc = 0xbfc019f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[85570] PC 0xbfc019fc instr 0xad40004c', () => {
    const pc = 0xbfc019fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[85571] PC 0xbfc01a00 instr 0xad400050', () => {
    const pc = 0xbfc01a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[85572] PC 0xbfc01a04 instr 0xad400054', () => {
    const pc = 0xbfc01a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[85573] PC 0xbfc01a08 instr 0xad400058', () => {
    const pc = 0xbfc01a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[85574] PC 0xbfc01a0c instr 0xad40005c', () => {
    const pc = 0xbfc01a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[85575] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[85576] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[85577] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[85578] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[85579] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[85580] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[85581] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[85582] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[85583] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[85584] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[85585] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[85586] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[85587] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[85588] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[85589] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[85590] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[85591] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[85592] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[85593] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[85594] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[85595] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[85596] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[85597] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[85598] PC 0xbfc019e4 instr 0xad400034', () => {
    const pc = 0xbfc019e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[85599] PC 0xbfc019e8 instr 0xad400038', () => {
    const pc = 0xbfc019e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[85600] PC 0xbfc019ec instr 0xad40003c', () => {
    const pc = 0xbfc019ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
});
