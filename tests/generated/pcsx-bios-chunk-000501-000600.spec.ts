import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 501-600', () => {
  beforeAll(() => initOnce());
  it('[501] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[502] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[503] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[504] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[505] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[506] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[507] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[508] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[509] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[510] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[511] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[512] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[513] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[514] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[515] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[516] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[517] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[518] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[519] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[520] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[521] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[522] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[523] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[524] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[525] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[526] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[527] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[528] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[529] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[530] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[531] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[532] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[533] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[534] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[535] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[536] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[537] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[538] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[539] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[540] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[541] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[542] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[543] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[544] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[545] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[546] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[547] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[548] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[549] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[550] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[551] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[552] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[553] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[554] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[555] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[556] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[557] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[558] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[559] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[560] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[561] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[562] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[563] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[564] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[565] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[566] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[567] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[568] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[569] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[570] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[571] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[572] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[573] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[574] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[575] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[576] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[577] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[578] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[579] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[580] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[581] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[582] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[583] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[584] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[585] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[586] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[587] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[588] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[589] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[590] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[591] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[592] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[593] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[594] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[595] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[596] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[597] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[598] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[599] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[600] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
});
