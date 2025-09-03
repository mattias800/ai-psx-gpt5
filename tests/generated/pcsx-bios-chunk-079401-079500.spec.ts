import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 79401-79500', () => {
  beforeAll(() => initOnce());
  it('[79401] PC 0x00000ee0 instr 0x3c1b0000', () => {
    const pc = 0xee0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1b0000 >>> 0);
    stepOne();
  });
  it('[79402] PC 0x00000ee4 instr 0x3c028000', () => {
    const pc = 0xee4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c028000 >>> 0);
    stepOne();
  });
  it('[79403] PC 0x00000ee8 instr 0x275a0f0c', () => {
    const pc = 0xee8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0f0c >>> 0);
    stepOne();
  });
  it('[79404] PC 0x00000eec instr 0x277b0f1c', () => {
    const pc = 0xeec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x277b0f1c >>> 0);
    stepOne();
  });
  it('[79405] PC 0x00000ef0 instr 0x8f430000', () => {
    const pc = 0xef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79406] PC 0x00000ef4 instr 0x275a0004', () => {
    const pc = 0xef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79407] PC 0x00000ef8 instr 0x24420004', () => {
    const pc = 0xef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79408] PC 0x00000efc instr 0x175bfffc', () => {
    const pc = 0xefc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79409] PC 0x00000f00 instr 0xac43fffc', () => {
    const pc = 0xf00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79410] PC 0x00000ef0 instr 0x8f430000', () => {
    const pc = 0xef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79411] PC 0x00000ef4 instr 0x275a0004', () => {
    const pc = 0xef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79412] PC 0x00000ef8 instr 0x24420004', () => {
    const pc = 0xef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79413] PC 0x00000efc instr 0x175bfffc', () => {
    const pc = 0xefc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79414] PC 0x00000f00 instr 0xac43fffc', () => {
    const pc = 0xf00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79415] PC 0x00000ef0 instr 0x8f430000', () => {
    const pc = 0xef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79416] PC 0x00000ef4 instr 0x275a0004', () => {
    const pc = 0xef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79417] PC 0x00000ef8 instr 0x24420004', () => {
    const pc = 0xef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79418] PC 0x00000efc instr 0x175bfffc', () => {
    const pc = 0xefc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79419] PC 0x00000f00 instr 0xac43fffc', () => {
    const pc = 0xf00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79420] PC 0x00000ef0 instr 0x8f430000', () => {
    const pc = 0xef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79421] PC 0x00000ef4 instr 0x275a0004', () => {
    const pc = 0xef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79422] PC 0x00000ef8 instr 0x24420004', () => {
    const pc = 0xef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79423] PC 0x00000efc instr 0x175bfffc', () => {
    const pc = 0xefc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79424] PC 0x00000f00 instr 0xac43fffc', () => {
    const pc = 0xf00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79425] PC 0x00000f04 instr 0x08001a9c', () => {
    const pc = 0xf04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8001a9c >>> 0);
    stepOne();
  });
  it('[79426] PC 0x00000f08 instr 0x00000000', () => {
    const pc = 0xf08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79427] PC 0x00006a70 instr 0x240a00a0', () => {
    const pc = 0x6a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[79428] PC 0x00006a74 instr 0x01400008', () => {
    const pc = 0x6a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[79429] PC 0x00006a78 instr 0x24090044', () => {
    const pc = 0x6a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090044 >>> 0);
    stepOne();
  });
  it('[79430] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[79431] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[79432] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79433] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79434] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[79435] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[79436] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[79437] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[79438] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79439] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79440] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79441] PC 0xbfc01920 instr 0x40086000', () => {
    const pc = 0xbfc01920;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40086000 >>> 0);
    stepOne();
  });
  it('[79442] PC 0xbfc01924 instr 0x00000000', () => {
    const pc = 0xbfc01924;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79443] PC 0xbfc01928 instr 0x3c1abfc0', () => {
    const pc = 0xbfc01928;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1abfc0 >>> 0);
    stepOne();
  });
  it('[79444] PC 0xbfc0192c instr 0x275a193c', () => {
    const pc = 0xbfc0192c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a193c >>> 0);
    stepOne();
  });
  it('[79445] PC 0xbfc01930 instr 0x3c01a000', () => {
    const pc = 0xbfc01930;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a000 >>> 0);
    stepOne();
  });
  it('[79446] PC 0xbfc01934 instr 0x0341d025', () => {
    const pc = 0xbfc01934;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x341d025 >>> 0);
    stepOne();
  });
  it('[79447] PC 0xbfc01938 instr 0x03400008', () => {
    const pc = 0xbfc01938;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3400008 >>> 0);
    stepOne();
  });
  it('[79448] PC 0xbfc0193c instr 0x24090804', () => {
    const pc = 0xbfc0193c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090804 >>> 0);
    stepOne();
  });
  it('[79449] PC 0xbfc0193c instr 0x24090804', () => {
    const pc = 0xbfc0193c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090804 >>> 0);
    stepOne();
  });
  it('[79450] PC 0xbfc01940 instr 0x3c01fffe', () => {
    const pc = 0xbfc01940;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01fffe >>> 0);
    stepOne();
  });
  it('[79451] PC 0xbfc01944 instr 0xac290130', () => {
    const pc = 0xbfc01944;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac290130 >>> 0);
    stepOne();
  });
  it('[79452] PC 0xbfc01948 instr 0x3c0c0001', () => {
    const pc = 0xbfc01948;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0c0001 >>> 0);
    stepOne();
  });
  it('[79453] PC 0xbfc0194c instr 0x408c6000', () => {
    const pc = 0xbfc0194c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x408c6000 >>> 0);
    stepOne();
  });
  it('[79454] PC 0xbfc01950 instr 0x00000000', () => {
    const pc = 0xbfc01950;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79455] PC 0xbfc01954 instr 0x00000000', () => {
    const pc = 0xbfc01954;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79456] PC 0xbfc01958 instr 0x240a0000', () => {
    const pc = 0xbfc01958;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a0000 >>> 0);
    stepOne();
  });
  it('[79457] PC 0xbfc0195c instr 0x240b0f80', () => {
    const pc = 0xbfc0195c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240b0f80 >>> 0);
    stepOne();
  });
  it('[79458] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79459] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79460] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79461] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79462] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79463] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79464] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79465] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79466] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79467] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79468] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79469] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79470] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79471] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79472] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79473] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79474] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79475] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79476] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79477] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79478] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79479] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79480] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79481] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79482] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79483] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79484] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79485] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79486] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79487] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79488] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79489] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79490] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[79491] PC 0xbfc0196c instr 0xad400030', () => {
    const pc = 0xbfc0196c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[79492] PC 0xbfc01970 instr 0xad400040', () => {
    const pc = 0xbfc01970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[79493] PC 0xbfc01974 instr 0xad400050', () => {
    const pc = 0xbfc01974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[79494] PC 0xbfc01978 instr 0xad400060', () => {
    const pc = 0xbfc01978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[79495] PC 0xbfc0197c instr 0xad400070', () => {
    const pc = 0xbfc0197c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[79496] PC 0xbfc01980 instr 0x154bfff7', () => {
    const pc = 0xbfc01980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[79497] PC 0xbfc01984 instr 0x214a0080', () => {
    const pc = 0xbfc01984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[79498] PC 0xbfc01960 instr 0xad400000', () => {
    const pc = 0xbfc01960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[79499] PC 0xbfc01964 instr 0xad400010', () => {
    const pc = 0xbfc01964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[79500] PC 0xbfc01968 instr 0xad400020', () => {
    const pc = 0xbfc01968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
});
