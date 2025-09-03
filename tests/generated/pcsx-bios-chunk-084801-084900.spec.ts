import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 84801-84900', () => {
  beforeAll(() => initOnce());
  it('[84801] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84802] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84803] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84804] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84805] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84806] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84807] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84808] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84809] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84810] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84811] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84812] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84813] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84814] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84815] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84816] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84817] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84818] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84819] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84820] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84821] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84822] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84823] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84824] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84825] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84826] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84827] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84828] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84829] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84830] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84831] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84832] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84833] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84834] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84835] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84836] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84837] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84838] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84839] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84840] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84841] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84842] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84843] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84844] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84845] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84846] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84847] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84848] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84849] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84850] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84851] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84852] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84853] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84854] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84855] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84856] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84857] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84858] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84859] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84860] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84861] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84862] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84863] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84864] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84865] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84866] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84867] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84868] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84869] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84870] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84871] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84872] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84873] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84874] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84875] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84876] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84877] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84878] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84879] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84880] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84881] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84882] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84883] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84884] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84885] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84886] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84887] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84888] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84889] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84890] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84891] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84892] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84893] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84894] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84895] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84896] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84897] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84898] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84899] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84900] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
});
