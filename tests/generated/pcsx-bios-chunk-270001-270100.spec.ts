import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 270001-270100', () => {
  beforeAll(() => initOnce());
  it('[270001] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270002] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270003] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270004] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270005] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270006] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270007] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270008] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270009] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270010] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270011] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270012] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270013] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270014] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270015] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270016] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270017] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270018] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270019] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270020] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270021] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270022] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270023] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270024] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270025] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270026] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270027] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270028] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270029] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270030] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270031] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270032] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270033] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270034] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270035] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270036] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270037] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270038] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270039] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270040] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270041] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270042] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270043] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270044] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270045] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270046] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270047] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270048] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270049] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270050] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270051] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270052] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270053] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270054] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270055] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270056] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270057] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270058] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270059] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270060] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270061] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270062] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270063] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270064] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270065] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270066] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270067] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270068] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270069] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270070] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270071] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270072] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270073] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270074] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270075] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270076] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270077] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270078] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270079] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270080] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270081] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270082] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270083] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270084] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270085] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270086] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270087] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270088] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270089] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270090] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270091] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270092] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270093] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270094] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[270095] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[270096] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[270097] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[270098] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[270099] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[270100] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
});
