import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 901-1000', () => {
  beforeAll(() => initOnce());
  it('[901] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[902] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[903] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[904] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[905] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[906] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[907] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[908] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[909] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[910] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[911] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[912] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[913] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[914] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[915] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[916] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[917] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[918] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[919] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[920] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[921] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[922] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[923] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[924] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[925] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[926] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[927] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[928] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[929] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[930] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[931] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[932] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[933] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[934] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[935] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[936] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[937] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[938] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[939] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[940] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[941] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[942] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[943] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[944] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[945] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[946] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[947] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[948] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[949] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[950] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[951] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[952] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[953] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[954] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[955] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[956] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[957] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[958] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[959] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[960] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[961] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[962] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[963] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[964] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[965] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[966] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[967] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[968] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[969] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[970] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[971] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[972] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[973] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[974] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[975] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[976] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[977] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[978] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[979] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[980] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[981] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[982] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[983] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[984] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[985] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[986] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[987] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[988] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[989] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[990] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[991] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[992] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[993] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[994] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[995] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[996] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[997] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[998] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[999] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[1000] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
});
