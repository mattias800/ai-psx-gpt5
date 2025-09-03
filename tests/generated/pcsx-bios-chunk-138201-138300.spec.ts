import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 138201-138300', () => {
  beforeAll(() => initOnce());
  it('[138201] PC 0x00001580 instr 0x26100010', () => {
    const pc = 0x1580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100010 >>> 0);
    stepOne();
  });
  it('[138202] PC 0x00001584 instr 0x1614fffa', () => {
    const pc = 0x1584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1614fffa >>> 0);
    stepOne();
  });
  it('[138203] PC 0x00001588 instr 0x26310004', () => {
    const pc = 0x1588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310004 >>> 0);
    stepOne();
  });
  it('[138204] PC 0x00001570 instr 0xae320000', () => {
    const pc = 0x1570;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae320000 >>> 0);
    stepOne();
  });
  it('[138205] PC 0x00001574 instr 0x02a02021', () => {
    const pc = 0x1574;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2a02021 >>> 0);
    stepOne();
  });
  it('[138206] PC 0x00001578 instr 0x0c000508', () => {
    const pc = 0x1578;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000508 >>> 0);
    stepOne();
  });
  it('[138207] PC 0x0000157c instr 0x02002821', () => {
    const pc = 0x157c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002821 >>> 0);
    stepOne();
  });
  it('[138208] PC 0x00001420 instr 0x3c0ea000', () => {
    const pc = 0x1420;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ea000 >>> 0);
    stepOne();
  });
  it('[138209] PC 0x00001424 instr 0x8dce0100', () => {
    const pc = 0x1424;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce0100 >>> 0);
    stepOne();
  });
  it('[138210] PC 0x00001428 instr 0x000478c0', () => {
    const pc = 0x1428;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x478c0 >>> 0);
    stepOne();
  });
  it('[138211] PC 0x0000142c instr 0x01cf1821', () => {
    const pc = 0x142c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cf1821 >>> 0);
    stepOne();
  });
  it('[138212] PC 0x00001430 instr 0x8c660000', () => {
    const pc = 0x1430;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c660000 >>> 0);
    stepOne();
  });
  it('[138213] PC 0x00001434 instr 0xac650000', () => {
    const pc = 0x1434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac650000 >>> 0);
    stepOne();
  });
  it('[138214] PC 0x00001438 instr 0x00001021', () => {
    const pc = 0x1438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[138215] PC 0x0000143c instr 0x03e00008', () => {
    const pc = 0x143c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138216] PC 0x00001440 instr 0xaca60000', () => {
    const pc = 0x1440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca60000 >>> 0);
    stepOne();
  });
  it('[138217] PC 0x00001580 instr 0x26100010', () => {
    const pc = 0x1580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100010 >>> 0);
    stepOne();
  });
  it('[138218] PC 0x00001584 instr 0x1614fffa', () => {
    const pc = 0x1584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1614fffa >>> 0);
    stepOne();
  });
  it('[138219] PC 0x00001588 instr 0x26310004', () => {
    const pc = 0x1588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26310004 >>> 0);
    stepOne();
  });
  it('[138220] PC 0x0000158c instr 0x00009021', () => {
    const pc = 0x158c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9021 >>> 0);
    stepOne();
  });
  it('[138221] PC 0x00001590 instr 0x24100003', () => {
    const pc = 0x1590;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24100003 >>> 0);
    stepOne();
  });
  it('[138222] PC 0x00001594 instr 0x0c0009e8', () => {
    const pc = 0x1594;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138223] PC 0x00001598 instr 0xa6600004', () => {
    const pc = 0x1598;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600004 >>> 0);
    stepOne();
  });
  it('[138224] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138225] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138226] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138227] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138228] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138229] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138230] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138231] PC 0x0000159c instr 0xa6600008', () => {
    const pc = 0x159c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600008 >>> 0);
    stepOne();
  });
  it('[138232] PC 0x000015a0 instr 0x0c0009e8', () => {
    const pc = 0x15a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138233] PC 0x000015a4 instr 0xa6600000', () => {
    const pc = 0x15a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600000 >>> 0);
    stepOne();
  });
  it('[138234] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138235] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138236] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138237] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138238] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138239] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138240] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138241] PC 0x000015a8 instr 0x26520001', () => {
    const pc = 0x15a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[138242] PC 0x000015ac instr 0x1650fff9', () => {
    const pc = 0x15ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1650fff9 >>> 0);
    stepOne();
  });
  it('[138243] PC 0x000015b0 instr 0x26730010', () => {
    const pc = 0x15b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26730010 >>> 0);
    stepOne();
  });
  it('[138244] PC 0x00001594 instr 0x0c0009e8', () => {
    const pc = 0x1594;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138245] PC 0x00001598 instr 0xa6600004', () => {
    const pc = 0x1598;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600004 >>> 0);
    stepOne();
  });
  it('[138246] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138247] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138248] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138249] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138250] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138251] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138252] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138253] PC 0x0000159c instr 0xa6600008', () => {
    const pc = 0x159c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600008 >>> 0);
    stepOne();
  });
  it('[138254] PC 0x000015a0 instr 0x0c0009e8', () => {
    const pc = 0x15a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138255] PC 0x000015a4 instr 0xa6600000', () => {
    const pc = 0x15a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600000 >>> 0);
    stepOne();
  });
  it('[138256] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138257] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138258] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138259] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138260] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138261] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138262] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138263] PC 0x000015a8 instr 0x26520001', () => {
    const pc = 0x15a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[138264] PC 0x000015ac instr 0x1650fff9', () => {
    const pc = 0x15ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1650fff9 >>> 0);
    stepOne();
  });
  it('[138265] PC 0x000015b0 instr 0x26730010', () => {
    const pc = 0x15b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26730010 >>> 0);
    stepOne();
  });
  it('[138266] PC 0x00001594 instr 0x0c0009e8', () => {
    const pc = 0x1594;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138267] PC 0x00001598 instr 0xa6600004', () => {
    const pc = 0x1598;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600004 >>> 0);
    stepOne();
  });
  it('[138268] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138269] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138270] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138271] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138272] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138273] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138274] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138275] PC 0x0000159c instr 0xa6600008', () => {
    const pc = 0x159c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600008 >>> 0);
    stepOne();
  });
  it('[138276] PC 0x000015a0 instr 0x0c0009e8', () => {
    const pc = 0x15a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[138277] PC 0x000015a4 instr 0xa6600000', () => {
    const pc = 0x15a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa6600000 >>> 0);
    stepOne();
  });
  it('[138278] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[138279] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[138280] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138281] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138282] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138283] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138284] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[138285] PC 0x000015a8 instr 0x26520001', () => {
    const pc = 0x15a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26520001 >>> 0);
    stepOne();
  });
  it('[138286] PC 0x000015ac instr 0x1650fff9', () => {
    const pc = 0x15ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1650fff9 >>> 0);
    stepOne();
  });
  it('[138287] PC 0x000015b0 instr 0x26730010', () => {
    const pc = 0x15b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26730010 >>> 0);
    stepOne();
  });
  it('[138288] PC 0x000015b4 instr 0x8fbf002c', () => {
    const pc = 0x15b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf002c >>> 0);
    stepOne();
  });
  it('[138289] PC 0x000015b8 instr 0x8fb00014', () => {
    const pc = 0x15b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00014 >>> 0);
    stepOne();
  });
  it('[138290] PC 0x000015bc instr 0x8fb10018', () => {
    const pc = 0x15bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb10018 >>> 0);
    stepOne();
  });
  it('[138291] PC 0x000015c0 instr 0x8fb2001c', () => {
    const pc = 0x15c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb2001c >>> 0);
    stepOne();
  });
  it('[138292] PC 0x000015c4 instr 0x8fb30020', () => {
    const pc = 0x15c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30020 >>> 0);
    stepOne();
  });
  it('[138293] PC 0x000015c8 instr 0x8fb40024', () => {
    const pc = 0x15c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb40024 >>> 0);
    stepOne();
  });
  it('[138294] PC 0x000015cc instr 0x8fb50028', () => {
    const pc = 0x15cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb50028 >>> 0);
    stepOne();
  });
  it('[138295] PC 0x000015d0 instr 0x03e00008', () => {
    const pc = 0x15d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[138296] PC 0x000015d4 instr 0x27bd0030', () => {
    const pc = 0x15d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0030 >>> 0);
    stepOne();
  });
  it('[138297] PC 0xbfc06954 instr 0x3c021f80', () => {
    const pc = 0xbfc06954;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c021f80 >>> 0);
    stepOne();
  });
  it('[138298] PC 0xbfc06958 instr 0x34421c00', () => {
    const pc = 0xbfc06958;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34421c00 >>> 0);
    stepOne();
  });
  it('[138299] PC 0xbfc0695c instr 0xa4400186', () => {
    const pc = 0xbfc0695c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400186 >>> 0);
    stepOne();
  });
  it('[138300] PC 0xbfc06960 instr 0xa4400184', () => {
    const pc = 0xbfc06960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400184 >>> 0);
    stepOne();
  });
});
