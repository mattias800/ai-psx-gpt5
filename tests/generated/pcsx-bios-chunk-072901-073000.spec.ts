import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 72901-73000', () => {
  beforeAll(() => initOnce());
  it('[72901] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72902] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72903] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72904] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72905] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72906] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72907] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72908] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72909] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72910] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72911] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72912] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72913] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72914] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72915] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72916] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72917] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72918] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72919] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72920] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72921] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72922] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72923] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72924] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72925] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72926] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72927] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72928] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72929] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72930] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72931] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72932] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72933] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72934] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72935] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72936] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72937] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72938] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72939] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72940] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72941] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72942] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72943] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72944] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72945] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72946] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72947] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72948] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72949] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72950] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72951] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72952] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72953] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72954] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72955] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72956] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72957] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72958] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72959] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72960] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72961] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72962] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72963] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72964] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72965] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72966] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72967] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72968] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72969] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72970] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72971] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72972] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72973] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72974] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72975] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72976] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72977] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72978] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72979] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72980] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72981] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72982] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72983] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72984] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72985] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72986] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72987] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72988] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72989] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72990] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72991] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72992] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72993] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72994] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[72995] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
  it('[72996] PC 0x000005b0 instr 0x0043082b', () => {
    const pc = 0x5b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x43082b >>> 0);
    stepOne();
  });
  it('[72997] PC 0x000005b4 instr 0x1420fffc', () => {
    const pc = 0x5b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffc >>> 0);
    stepOne();
  });
  it('[72998] PC 0x000005b8 instr 0x00000000', () => {
    const pc = 0x5b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[72999] PC 0x000005a8 instr 0xac400000', () => {
    const pc = 0x5a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[73000] PC 0x000005ac instr 0x20420004', () => {
    const pc = 0x5ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20420004 >>> 0);
    stepOne();
  });
});
