import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 237901-238000', () => {
  beforeAll(() => initOnce());
  it('[237901] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237902] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237903] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237904] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237905] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237906] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237907] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237908] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237909] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237910] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237911] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237912] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237913] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237914] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237915] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237916] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237917] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237918] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237919] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237920] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237921] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237922] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237923] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237924] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237925] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237926] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237927] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237928] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237929] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237930] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237931] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237932] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237933] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237934] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237935] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237936] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237937] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237938] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237939] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237940] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237941] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237942] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237943] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237944] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237945] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237946] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237947] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237948] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237949] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237950] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237951] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237952] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237953] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237954] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237955] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237956] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237957] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237958] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237959] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237960] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237961] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237962] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237963] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237964] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237965] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237966] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237967] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237968] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237969] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237970] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237971] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237972] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237973] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237974] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237975] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237976] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237977] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237978] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237979] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237980] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237981] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237982] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237983] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237984] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237985] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237986] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237987] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237988] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237989] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237990] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237991] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237992] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237993] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[237994] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[237995] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[237996] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[237997] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[237998] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[237999] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[238000] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
});
