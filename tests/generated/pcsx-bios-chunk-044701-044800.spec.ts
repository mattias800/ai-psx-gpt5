import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 44701-44800', () => {
  beforeAll(() => initOnce());
  it('[44701] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44702] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44703] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44704] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44705] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44706] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44707] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44708] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44709] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44710] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44711] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44712] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44713] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44714] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44715] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44716] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44717] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44718] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44719] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44720] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44721] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44722] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44723] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44724] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44725] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44726] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44727] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44728] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44729] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44730] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44731] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44732] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44733] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44734] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44735] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44736] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44737] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44738] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44739] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44740] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44741] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44742] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44743] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44744] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44745] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44746] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44747] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44748] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44749] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44750] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44751] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44752] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44753] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44754] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44755] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44756] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44757] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44758] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44759] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44760] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44761] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44762] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44763] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44764] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44765] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44766] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44767] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44768] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44769] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44770] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44771] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44772] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44773] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44774] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44775] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44776] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44777] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44778] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44779] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44780] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44781] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44782] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44783] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44784] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44785] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44786] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44787] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44788] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44789] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44790] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44791] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44792] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44793] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44794] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[44795] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[44796] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[44797] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[44798] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[44799] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[44800] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
});
