import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 76201-76300', () => {
  beforeAll(() => initOnce());
  it('[76201] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76202] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76203] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76204] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76205] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76206] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76207] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76208] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76209] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76210] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76211] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76212] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76213] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76214] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76215] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76216] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76217] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76218] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76219] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76220] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76221] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76222] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76223] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76224] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76225] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76226] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76227] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76228] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76229] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76230] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76231] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76232] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76233] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76234] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76235] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76236] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76237] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76238] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76239] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76240] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76241] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76242] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76243] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76244] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76245] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76246] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76247] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76248] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76249] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76250] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76251] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76252] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76253] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76254] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76255] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76256] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76257] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76258] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76259] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76260] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76261] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76262] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76263] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76264] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76265] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76266] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76267] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76268] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76269] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76270] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76271] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76272] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76273] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76274] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76275] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76276] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76277] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76278] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76279] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76280] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76281] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76282] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76283] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76284] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76285] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76286] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76287] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76288] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76289] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76290] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76291] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76292] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76293] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76294] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76295] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[76296] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[76297] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[76298] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[76299] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[76300] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
