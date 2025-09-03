import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 101-200', () => {
  beforeAll(() => initOnce());
  it('[101] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[102] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[103] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[104] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[105] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[106] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[107] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[108] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[109] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[110] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[111] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[112] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[113] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[114] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[115] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[116] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[117] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[118] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[119] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[120] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[121] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[122] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[123] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[124] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[125] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[126] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[127] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[128] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[129] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[130] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[131] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[132] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[133] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[134] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[135] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[136] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[137] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[138] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[139] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[140] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[141] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[142] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[143] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[144] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[145] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[146] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[147] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[148] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[149] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[150] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[151] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[152] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[153] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[154] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[155] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[156] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[157] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[158] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[159] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[160] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[161] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[162] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[163] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[164] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[165] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[166] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[167] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[168] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[169] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[170] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[171] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[172] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[173] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[174] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[175] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[176] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[177] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[178] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[179] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[180] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[181] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[182] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[183] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[184] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[185] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[186] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[187] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[188] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[189] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[190] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[191] PC 0xbfc00268 instr 0xad400060', () => {
    const pc = 0xbfc00268;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[192] PC 0xbfc0026c instr 0xad400070', () => {
    const pc = 0xbfc0026c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[193] PC 0xbfc00270 instr 0x154bfff7', () => {
    const pc = 0xbfc00270;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bfff7 >>> 0);
    stepOne();
  });
  it('[194] PC 0xbfc00274 instr 0x214a0080', () => {
    const pc = 0xbfc00274;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[195] PC 0xbfc00250 instr 0xad400000', () => {
    const pc = 0xbfc00250;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[196] PC 0xbfc00254 instr 0xad400010', () => {
    const pc = 0xbfc00254;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[197] PC 0xbfc00258 instr 0xad400020', () => {
    const pc = 0xbfc00258;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[198] PC 0xbfc0025c instr 0xad400030', () => {
    const pc = 0xbfc0025c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[199] PC 0xbfc00260 instr 0xad400040', () => {
    const pc = 0xbfc00260;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[200] PC 0xbfc00264 instr 0xad400050', () => {
    const pc = 0xbfc00264;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
});
