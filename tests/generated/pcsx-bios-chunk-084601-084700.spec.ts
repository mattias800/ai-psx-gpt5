import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 84601-84700', () => {
  beforeAll(() => initOnce());
  it('[84601] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[84602] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[84603] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[84604] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[84605] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[84606] PC 0xbfc02b80 instr 0x00601021', () => {
    const pc = 0xbfc02b80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[84607] PC 0xbfc02b84 instr 0x03e00008', () => {
    const pc = 0xbfc02b84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[84608] PC 0xbfc02b88 instr 0x00000000', () => {
    const pc = 0xbfc02b88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84609] PC 0x00003c90 instr 0x8fa3001c', () => {
    const pc = 0x3c90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa3001c >>> 0);
    stepOne();
  });
  it('[84610] PC 0x00003c94 instr 0x0c001a9c', () => {
    const pc = 0x3c94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001a9c >>> 0);
    stepOne();
  });
  it('[84611] PC 0x00003c98 instr 0x00000000', () => {
    const pc = 0x3c98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84612] PC 0x00006a70 instr 0x240a00a0', () => {
    const pc = 0x6a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[84613] PC 0x00006a74 instr 0x01400008', () => {
    const pc = 0x6a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[84614] PC 0x00006a78 instr 0x24090044', () => {
    const pc = 0x6a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090044 >>> 0);
    stepOne();
  });
  it('[84615] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[84616] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[84617] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84618] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84619] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[84620] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[84621] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[84622] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[84623] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84624] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84625] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84626] PC 0xbfc01920 instr 0x40086000', () => {
    const pc = 0xbfc01920;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40086000 >>> 0);
    stepOne();
  });
  it('[84627] PC 0xbfc01924 instr 0x00000000', () => {
    const pc = 0xbfc01924;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84628] PC 0xbfc01928 instr 0x3c1abfc0', () => {
    const pc = 0xbfc01928;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1abfc0 >>> 0);
    stepOne();
  });
  it('[84629] PC 0xbfc0192c instr 0x275a193c', () => {
    const pc = 0xbfc0192c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a193c >>> 0);
    stepOne();
  });
  it('[84630] PC 0xbfc01930 instr 0x3c01a000', () => {
    const pc = 0xbfc01930;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[84631] PC 0xbfc01934 instr 0x0341d025', () => {
    const pc = 0xbfc01934;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x341d025 >>> 0);
    stepOne();
  });
  it('[84632] PC 0xbfc01938 instr 0x03400008', () => {
    const pc = 0xbfc01938;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3400008 >>> 0);
    stepOne();
  });
  it('[84633] PC 0xbfc0193c instr 0x24090804', () => {
    const pc = 0xbfc0193c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090804 >>> 0);
    stepOne();
  });
  it('[84634] PC 0xbfc0193c instr 0x24090804', () => {
    const pc = 0xbfc0193c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090804 >>> 0);
    stepOne();
  });
  it('[84635] PC 0xbfc01940 instr 0x3c01fffe', () => {
    const pc = 0xbfc01940;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01fffe >>> 0);
    stepOne();
  });
  it('[84636] PC 0xbfc01944 instr 0xac290130', () => {
    const pc = 0xbfc01944;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac290130 >>> 0);
    stepOne();
  });
  it('[84637] PC 0xbfc01948 instr 0x3c0c0001', () => {
    const pc = 0xbfc01948;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0c0001 >>> 0);
    stepOne();
  });
  it('[84638] PC 0xbfc0194c instr 0x408c6000', () => {
    const pc = 0xbfc0194c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x408c6000 >>> 0);
    stepOne();
  });
  it('[84639] PC 0xbfc01950 instr 0x00000000', () => {
    const pc = 0xbfc01950;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84640] PC 0xbfc01954 instr 0x00000000', () => {
    const pc = 0xbfc01954;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84641] PC 0xbfc01958 instr 0x240a0000', () => {
    const pc = 0xbfc01958;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a0000 >>> 0);
    stepOne();
  });
  it('[84642] PC 0xbfc0195c instr 0x240b0f80', () => {
    const pc = 0xbfc0195c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0f80 >>> 0);
    stepOne();
  });
  it('[84643] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84644] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84645] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84646] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84647] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84648] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84649] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84650] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84651] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84652] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84653] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84654] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84655] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84656] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84657] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84658] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84659] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84660] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84661] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84662] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84663] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84664] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84665] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84666] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84667] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84668] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84669] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84670] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84671] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84672] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84673] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84674] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84675] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84676] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84677] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84678] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84679] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84680] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84681] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84682] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84683] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84684] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84685] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84686] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84687] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84688] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84689] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84690] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[84691] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[84692] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[84693] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[84694] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[84695] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[84696] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[84697] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[84698] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[84699] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[84700] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
});
