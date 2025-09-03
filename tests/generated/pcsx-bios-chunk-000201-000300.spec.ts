import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 201-300', () => {
  beforeAll(() => initOnce());
  it('[201] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[202] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[203] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[204] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[205] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[206] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[207] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[208] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[209] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[210] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[211] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[212] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[213] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[214] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[215] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[216] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[217] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[218] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[219] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[220] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[221] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[222] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[223] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[224] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[225] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[226] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[227] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[228] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[229] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[230] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[231] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[232] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[233] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[234] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[235] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[236] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[237] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[238] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[239] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[240] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[241] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[242] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[243] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[244] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[245] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[246] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[247] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[248] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[249] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[250] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[251] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[252] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[253] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[254] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[255] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[256] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[257] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[258] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[259] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[260] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[261] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[262] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[263] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[264] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[265] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[266] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[267] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[268] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[269] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[270] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[271] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[272] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[273] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[274] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[275] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[276] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[277] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[278] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[279] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[280] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[281] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[282] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[283] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[284] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[285] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[286] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[287] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[288] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[289] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[290] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[291] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[292] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[293] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[294] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[295] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[296] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[297] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[298] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[299] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[300] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
});
