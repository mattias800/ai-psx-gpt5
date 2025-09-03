import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 73101-73200', () => {
  beforeAll(() => initOnce());
  it('[73101] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73102] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73103] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73104] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73105] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73106] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73107] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73108] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73109] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73110] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73111] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73112] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73113] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73114] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73115] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73116] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73117] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73118] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73119] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73120] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73121] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73122] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73123] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73124] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73125] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73126] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73127] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73128] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73129] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73130] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73131] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73132] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73133] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73134] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73135] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73136] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73137] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73138] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73139] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73140] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73141] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73142] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73143] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73144] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73145] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73146] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73147] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73148] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73149] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73150] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73151] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73152] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73153] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73154] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73155] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73156] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73157] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73158] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73159] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73160] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73161] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73162] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73163] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73164] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73165] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73166] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73167] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73168] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73169] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73170] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73171] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73172] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73173] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73174] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73175] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73176] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73177] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73178] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73179] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73180] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73181] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73182] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73183] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73184] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73185] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73186] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73187] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73188] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73189] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73190] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73191] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73192] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73193] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73194] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73195] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[73196] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[73197] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[73198] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[73199] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73200] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
