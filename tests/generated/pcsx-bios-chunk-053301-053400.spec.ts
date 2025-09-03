import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 53301-53400', () => {
  beforeAll(() => initOnce());
  it('[53301] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53302] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53303] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53304] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53305] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53306] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53307] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53308] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53309] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53310] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53311] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53312] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53313] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53314] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53315] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53316] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53317] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53318] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53319] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53320] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53321] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53322] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53323] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53324] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53325] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53326] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53327] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53328] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53329] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53330] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53331] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53332] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53333] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53334] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53335] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53336] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53337] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53338] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53339] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53340] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53341] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53342] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53343] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53344] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53345] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53346] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53347] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53348] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53349] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53350] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53351] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53352] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53353] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53354] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53355] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53356] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53357] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53358] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53359] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53360] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53361] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53362] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53363] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53364] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53365] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53366] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53367] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53368] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53369] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53370] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53371] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53372] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53373] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53374] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53375] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53376] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53377] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53378] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53379] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53380] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53381] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53382] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53383] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53384] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53385] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53386] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53387] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53388] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53389] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53390] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53391] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53392] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53393] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53394] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[53395] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[53396] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[53397] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[53398] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[53399] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[53400] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
});
