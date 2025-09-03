import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 20301-20400', () => {
  beforeAll(() => initOnce());
  it('[20301] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20302] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20303] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20304] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20305] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20306] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20307] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20308] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20309] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20310] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20311] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20312] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20313] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20314] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20315] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20316] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20317] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20318] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20319] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20320] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20321] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20322] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20323] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20324] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20325] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20326] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20327] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20328] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20329] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20330] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20331] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20332] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20333] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20334] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20335] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20336] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20337] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20338] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20339] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20340] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20341] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20342] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20343] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20344] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20345] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20346] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20347] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20348] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20349] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20350] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20351] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20352] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20353] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20354] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20355] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20356] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20357] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20358] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20359] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20360] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20361] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20362] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20363] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20364] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20365] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20366] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20367] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20368] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20369] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20370] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20371] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20372] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20373] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20374] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20375] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20376] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20377] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20378] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20379] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20380] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20381] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20382] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20383] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20384] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20385] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20386] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20387] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20388] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20389] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20390] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20391] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20392] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20393] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20394] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[20395] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[20396] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[20397] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[20398] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[20399] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[20400] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
});
