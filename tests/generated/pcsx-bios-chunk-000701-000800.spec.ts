import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 701-800', () => {
  beforeAll(() => initOnce());
  it('[701] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[702] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[703] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[704] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[705] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[706] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[707] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[708] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[709] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[710] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[711] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[712] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[713] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[714] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[715] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[716] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[717] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[718] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[719] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[720] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[721] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[722] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[723] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[724] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[725] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[726] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[727] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[728] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[729] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[730] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[731] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[732] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[733] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[734] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[735] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[736] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[737] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[738] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[739] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[740] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[741] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[742] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[743] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[744] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[745] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[746] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[747] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[748] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[749] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[750] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[751] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[752] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[753] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[754] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[755] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[756] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[757] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[758] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[759] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[760] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[761] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[762] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[763] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[764] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[765] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[766] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[767] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[768] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[769] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[770] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[771] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[772] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[773] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[774] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[775] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[776] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[777] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[778] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[779] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[780] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[781] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[782] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[783] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[784] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[785] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[786] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[787] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[788] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[789] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[790] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[791] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[792] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[793] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[794] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[795] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[796] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[797] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[798] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[799] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[800] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
});
