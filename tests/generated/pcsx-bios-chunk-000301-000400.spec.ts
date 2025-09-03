import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 301-400', () => {
  beforeAll(() => initOnce());
  it('[301] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[302] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[303] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[304] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[305] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[306] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[307] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[308] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[309] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[310] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[311] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[312] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[313] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[314] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[315] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[316] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[317] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[318] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[319] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[320] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[321] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[322] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[323] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[324] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[325] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[326] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[327] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[328] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[329] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[330] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[331] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[332] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[333] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[334] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[335] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[336] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[337] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[338] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[339] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[340] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[341] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[342] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[343] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[344] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[345] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[346] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[347] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[348] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[349] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[350] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[351] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[352] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[353] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[354] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[355] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[356] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[357] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[358] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[359] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[360] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[361] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[362] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[363] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[364] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[365] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[366] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[367] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[368] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[369] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[370] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[371] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[372] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[373] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[374] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[375] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[376] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[377] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[378] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[379] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[380] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[381] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[382] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[383] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[384] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[385] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[386] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[387] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[388] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[389] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[390] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[391] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[392] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[393] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[394] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[395] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[396] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[397] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[398] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[399] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[400] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
});
