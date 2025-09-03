import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 72201-72300', () => {
  beforeAll(() => initOnce());
  it('[72201] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72202] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72203] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72204] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72205] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72206] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72207] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72208] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72209] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72210] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72211] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72212] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72213] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72214] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72215] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72216] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72217] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72218] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72219] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72220] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72221] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72222] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72223] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72224] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72225] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72226] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72227] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72228] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72229] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72230] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72231] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72232] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72233] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72234] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72235] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72236] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72237] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72238] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72239] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72240] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72241] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72242] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72243] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72244] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72245] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72246] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72247] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72248] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72249] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72250] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72251] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72252] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72253] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72254] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72255] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72256] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72257] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72258] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72259] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72260] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72261] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72262] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72263] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72264] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72265] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72266] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72267] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72268] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72269] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72270] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72271] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72272] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72273] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72274] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72275] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72276] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72277] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72278] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72279] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72280] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72281] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72282] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72283] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72284] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72285] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72286] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72287] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72288] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72289] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72290] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72291] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72292] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72293] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72294] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72295] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72296] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72297] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72298] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72299] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72300] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
