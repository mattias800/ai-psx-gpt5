import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 84701-84800', () => {
  beforeAll(() => initOnce());
  it('[84701] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84702] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84703] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84704] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84705] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84706] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84707] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84708] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84709] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84710] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84711] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84712] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84713] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84714] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84715] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84716] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84717] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84718] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84719] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84720] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84721] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84722] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84723] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84724] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84725] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84726] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84727] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84728] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84729] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84730] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84731] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84732] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84733] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84734] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84735] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84736] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84737] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84738] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84739] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84740] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84741] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84742] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84743] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84744] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84745] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84746] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84747] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84748] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84749] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84750] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84751] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84752] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84753] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84754] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84755] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84756] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84757] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84758] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84759] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84760] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84761] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84762] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84763] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84764] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84765] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84766] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84767] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84768] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84769] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84770] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84771] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84772] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84773] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84774] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84775] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84776] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84777] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84778] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84779] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84780] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84781] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84782] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84783] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84784] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84785] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84786] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84787] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84788] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84789] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84790] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84791] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84792] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84793] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84794] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84795] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84796] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84797] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84798] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84799] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84800] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
});
