import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 55101-55200', () => {
  beforeAll(() => initOnce());
  it('[55101] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55102] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55103] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55104] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55105] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55106] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55107] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55108] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55109] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55110] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55111] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55112] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55113] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55114] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55115] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55116] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55117] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55118] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55119] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55120] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55121] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55122] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55123] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55124] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55125] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55126] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55127] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55128] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55129] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55130] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55131] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55132] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55133] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55134] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55135] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55136] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55137] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55138] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55139] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55140] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55141] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55142] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55143] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55144] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55145] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55146] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55147] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55148] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55149] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55150] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55151] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55152] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55153] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55154] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55155] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55156] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55157] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55158] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55159] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55160] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55161] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55162] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55163] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55164] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55165] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55166] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55167] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55168] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55169] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55170] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55171] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55172] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55173] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55174] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55175] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55176] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55177] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55178] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55179] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55180] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55181] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55182] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55183] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55184] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55185] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55186] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55187] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55188] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55189] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55190] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55191] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55192] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55193] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55194] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[55195] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[55196] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[55197] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[55198] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[55199] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[55200] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
});
