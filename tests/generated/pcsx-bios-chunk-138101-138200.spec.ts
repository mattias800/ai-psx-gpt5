import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 138101-138200', () => {
  beforeAll(() => initOnce());
  it('[138101] PC 0xbfc0483c instr 0x8fbf0024', () => {
    const pc = 0xbfc0483c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[138102] PC 0xbfc04840 instr 0x8fb0001c', () => {
    const pc = 0xbfc04840;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb0001c >>> 0);
    stepOne();
  });
  it('[138103] PC 0xbfc04844 instr 0x8fb10020', () => {
    const pc = 0xbfc04844;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb10020 >>> 0);
    stepOne();
  });
  it('[138104] PC 0xbfc04848 instr 0x03e00008', () => {
    const pc = 0xbfc04848;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138105] PC 0xbfc0484c instr 0x27bd0038', () => {
    const pc = 0xbfc0484c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0038 >>> 0);
    stepOne();
  });
  it('[138106] PC 0xbfc0694c instr 0x0ff036dc', () => {
    const pc = 0xbfc0694c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036dc >>> 0);
    stepOne();
  });
  it('[138107] PC 0xbfc06950 instr 0x24040001', () => {
    const pc = 0xbfc06950;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[138108] PC 0xbfc0db70 instr 0x240a00c0', () => {
    const pc = 0xbfc0db70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[138109] PC 0xbfc0db74 instr 0x01400008', () => {
    const pc = 0xbfc0db74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[138110] PC 0xbfc0db78 instr 0x24090000', () => {
    const pc = 0xbfc0db78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090000 >>> 0);
    stepOne();
  });
  it('[138111] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[138112] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[138113] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[138114] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138115] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[138116] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[138117] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[138118] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[138119] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[138120] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138121] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[138122] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[138123] PC 0x00001508 instr 0x27bdffd0', () => {
    const pc = 0x1508;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd0 >>> 0);
    stepOne();
  });
  it('[138124] PC 0x0000150c instr 0xafbf002c', () => {
    const pc = 0x150c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf002c >>> 0);
    stepOne();
  });
  it('[138125] PC 0x00001510 instr 0xafb50028', () => {
    const pc = 0x1510;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb50028 >>> 0);
    stepOne();
  });
  it('[138126] PC 0x00001514 instr 0x3c020000', () => {
    const pc = 0x1514;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020000 >>> 0);
    stepOne();
  });
  it('[138127] PC 0x00001518 instr 0x8c426d40', () => {
    const pc = 0x1518;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c426d40 >>> 0);
    stepOne();
  });
  it('[138128] PC 0x0000151c instr 0xafb40024', () => {
    const pc = 0x151c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb40024 >>> 0);
    stepOne();
  });
  it('[138129] PC 0x00001520 instr 0xafb30020', () => {
    const pc = 0x1520;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30020 >>> 0);
    stepOne();
  });
  it('[138130] PC 0x00001524 instr 0xafb2001c', () => {
    const pc = 0x1524;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb2001c >>> 0);
    stepOne();
  });
  it('[138131] PC 0x00001528 instr 0xafb10018', () => {
    const pc = 0x1528;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb10018 >>> 0);
    stepOne();
  });
  it('[138132] PC 0x0000152c instr 0xafb00014', () => {
    const pc = 0x152c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00014 >>> 0);
    stepOne();
  });
  it('[138133] PC 0x00001530 instr 0x8c4e0004', () => {
    const pc = 0x1530;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c4e0004 >>> 0);
    stepOne();
  });
  it('[138134] PC 0x00001534 instr 0x3c130000', () => {
    const pc = 0x1534;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c130000 >>> 0);
    stepOne();
  });
  it('[138135] PC 0x00001538 instr 0x2401ff8e', () => {
    const pc = 0x1538;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401ff8e >>> 0);
    stepOne();
  });
  it('[138136] PC 0x0000153c instr 0x8e736d44', () => {
    const pc = 0x153c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e736d44 >>> 0);
    stepOne();
  });
  it('[138137] PC 0x00001540 instr 0x01c17824', () => {
    const pc = 0x1540;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c17824 >>> 0);
    stepOne();
  });
  it('[138138] PC 0x00001544 instr 0x0080a821', () => {
    const pc = 0x1544;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a821 >>> 0);
    stepOne();
  });
  it('[138139] PC 0x00001548 instr 0x0c0009e8', () => {
    const pc = 0x1548;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138140] PC 0x0000154c instr 0xac4f0004', () => {
    const pc = 0x154c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac4f0004 >>> 0);
    stepOne();
  });
  it('[138141] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138142] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138143] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138144] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138145] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138146] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138147] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138148] PC 0x00001550 instr 0x00009021', () => {
    const pc = 0x1550;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9021 >>> 0);
    stepOne();
  });
  it('[138149] PC 0x00001554 instr 0x3c110001', () => {
    const pc = 0x1554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c110001 >>> 0);
    stepOne();
  });
  it('[138150] PC 0x00001558 instr 0x3c100000', () => {
    const pc = 0x1558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c100000 >>> 0);
    stepOne();
  });
  it('[138151] PC 0x0000155c instr 0x3c140000', () => {
    const pc = 0x155c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c140000 >>> 0);
    stepOne();
  });
  it('[138152] PC 0x00001560 instr 0x26946d98', () => {
    const pc = 0x1560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26946d98 >>> 0);
    stepOne();
  });
  it('[138153] PC 0x00001564 instr 0x26106d58', () => {
    const pc = 0x1564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26106d58 >>> 0);
    stepOne();
  });
  it('[138154] PC 0x00001568 instr 0x26318600', () => {
    const pc = 0x1568;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26318600 >>> 0);
    stepOne();
  });
  it('[138155] PC 0x0000156c instr 0x24120001', () => {
    const pc = 0x156c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24120001 >>> 0);
    stepOne();
  });
  it('[138156] PC 0x00001570 instr 0xae320000', () => {
    const pc = 0x1570;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae320000 >>> 0);
    stepOne();
  });
  it('[138157] PC 0x00001574 instr 0x02a02021', () => {
    const pc = 0x1574;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2a02021 >>> 0);
    stepOne();
  });
  it('[138158] PC 0x00001578 instr 0x0c000508', () => {
    const pc = 0x1578;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[138159] PC 0x0000157c instr 0x02002821', () => {
    const pc = 0x157c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002821 >>> 0);
    stepOne();
  });
  it('[138160] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[138161] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[138162] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[138163] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[138164] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[138165] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[138166] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[138167] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138168] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
  it('[138169] PC 0x00001580 instr 0x26100010', () => {
    const pc = 0x1580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100010 >>> 0);
    stepOne();
  });
  it('[138170] PC 0x00001584 instr 0x1614fffa', () => {
    const pc = 0x1584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1614fffa >>> 0);
    stepOne();
  });
  it('[138171] PC 0x00001588 instr 0x26310004', () => {
    const pc = 0x1588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310004 >>> 0);
    stepOne();
  });
  it('[138172] PC 0x00001570 instr 0xae320000', () => {
    const pc = 0x1570;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae320000 >>> 0);
    stepOne();
  });
  it('[138173] PC 0x00001574 instr 0x02a02021', () => {
    const pc = 0x1574;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2a02021 >>> 0);
    stepOne();
  });
  it('[138174] PC 0x00001578 instr 0x0c000508', () => {
    const pc = 0x1578;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[138175] PC 0x0000157c instr 0x02002821', () => {
    const pc = 0x157c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002821 >>> 0);
    stepOne();
  });
  it('[138176] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[138177] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[138178] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[138179] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[138180] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[138181] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[138182] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[138183] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138184] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
  it('[138185] PC 0x00001580 instr 0x26100010', () => {
    const pc = 0x1580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100010 >>> 0);
    stepOne();
  });
  it('[138186] PC 0x00001584 instr 0x1614fffa', () => {
    const pc = 0x1584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1614fffa >>> 0);
    stepOne();
  });
  it('[138187] PC 0x00001588 instr 0x26310004', () => {
    const pc = 0x1588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310004 >>> 0);
    stepOne();
  });
  it('[138188] PC 0x00001570 instr 0xae320000', () => {
    const pc = 0x1570;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae320000 >>> 0);
    stepOne();
  });
  it('[138189] PC 0x00001574 instr 0x02a02021', () => {
    const pc = 0x1574;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2a02021 >>> 0);
    stepOne();
  });
  it('[138190] PC 0x00001578 instr 0x0c000508', () => {
    const pc = 0x1578;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[138191] PC 0x0000157c instr 0x02002821', () => {
    const pc = 0x157c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002821 >>> 0);
    stepOne();
  });
  it('[138192] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[138193] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[138194] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[138195] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[138196] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[138197] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[138198] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[138199] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138200] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
});
