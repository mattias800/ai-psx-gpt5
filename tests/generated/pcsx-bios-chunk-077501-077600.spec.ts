import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 77501-77600', () => {
  beforeAll(() => initOnce());
  it('[77501] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77502] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77503] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77504] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77505] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77506] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77507] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77508] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77509] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77510] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77511] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77512] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77513] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77514] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77515] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77516] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77517] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77518] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77519] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77520] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77521] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77522] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77523] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77524] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77525] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77526] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77527] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77528] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77529] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77530] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77531] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77532] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77533] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77534] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77535] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77536] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77537] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77538] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77539] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77540] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77541] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77542] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77543] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77544] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77545] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77546] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77547] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77548] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77549] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77550] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77551] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77552] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77553] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77554] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77555] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77556] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77557] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77558] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77559] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77560] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77561] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77562] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77563] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77564] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77565] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77566] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77567] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77568] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77569] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77570] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77571] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77572] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77573] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77574] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77575] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77576] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77577] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77578] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77579] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77580] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77581] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77582] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77583] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77584] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77585] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77586] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77587] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77588] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77589] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77590] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77591] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77592] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77593] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77594] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77595] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[77596] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[77597] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[77598] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[77599] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[77600] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
