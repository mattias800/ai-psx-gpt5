import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 79701-79800', () => {
  beforeAll(() => initOnce());
  it('[79701] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79702] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79703] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79704] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79705] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79706] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79707] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79708] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79709] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79710] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79711] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79712] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79713] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79714] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79715] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79716] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79717] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79718] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79719] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79720] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79721] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79722] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79723] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79724] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79725] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79726] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79727] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79728] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79729] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79730] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79731] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79732] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79733] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79734] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79735] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79736] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79737] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79738] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79739] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79740] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79741] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79742] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79743] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79744] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79745] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79746] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79747] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79748] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79749] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79750] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79751] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79752] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79753] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79754] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79755] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79756] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79757] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79758] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79759] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79760] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79761] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79762] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79763] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79764] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79765] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79766] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79767] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79768] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79769] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79770] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79771] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79772] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79773] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79774] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79775] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79776] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79777] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79778] PC 0xbfc01988 instr 0x40806000', () => {
    const pc = 0xbfc01988;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40806000 >>> 0);
    stepOne();
  });
  it('[79779] PC 0xbfc0198c instr 0x00000000', () => {
    const pc = 0xbfc0198c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79780] PC 0xbfc01990 instr 0x24090800', () => {
    const pc = 0xbfc01990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090800 >>> 0);
    stepOne();
  });
  it('[79781] PC 0xbfc01994 instr 0x3c01fffe', () => {
    const pc = 0xbfc01994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01fffe >>> 0);
    stepOne();
  });
  it('[79782] PC 0xbfc01998 instr 0xac290130', () => {
    const pc = 0xbfc01998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac290130 >>> 0);
    stepOne();
  });
  it('[79783] PC 0xbfc0199c instr 0x408c6000', () => {
    const pc = 0xbfc0199c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x408c6000 >>> 0);
    stepOne();
  });
  it('[79784] PC 0xbfc019a0 instr 0x00000000', () => {
    const pc = 0xbfc019a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79785] PC 0xbfc019a4 instr 0x00000000', () => {
    const pc = 0xbfc019a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79786] PC 0xbfc019a8 instr 0x240a0000', () => {
    const pc = 0xbfc019a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a0000 >>> 0);
    stepOne();
  });
  it('[79787] PC 0xbfc019ac instr 0x240b0f80', () => {
    const pc = 0xbfc019ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0f80 >>> 0);
    stepOne();
  });
  it('[79788] PC 0xbfc019b0 instr 0xad400000', () => {
    const pc = 0xbfc019b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79789] PC 0xbfc019b4 instr 0xad400004', () => {
    const pc = 0xbfc019b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[79790] PC 0xbfc019b8 instr 0xad400008', () => {
    const pc = 0xbfc019b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[79791] PC 0xbfc019bc instr 0xad40000c', () => {
    const pc = 0xbfc019bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[79792] PC 0xbfc019c0 instr 0xad400010', () => {
    const pc = 0xbfc019c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79793] PC 0xbfc019c4 instr 0xad400014', () => {
    const pc = 0xbfc019c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[79794] PC 0xbfc019c8 instr 0xad400018', () => {
    const pc = 0xbfc019c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[79795] PC 0xbfc019cc instr 0xad40001c', () => {
    const pc = 0xbfc019cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[79796] PC 0xbfc019d0 instr 0xad400020', () => {
    const pc = 0xbfc019d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79797] PC 0xbfc019d4 instr 0xad400024', () => {
    const pc = 0xbfc019d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[79798] PC 0xbfc019d8 instr 0xad400028', () => {
    const pc = 0xbfc019d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[79799] PC 0xbfc019dc instr 0xad40002c', () => {
    const pc = 0xbfc019dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[79800] PC 0xbfc019e0 instr 0xad400030', () => {
    const pc = 0xbfc019e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
});
