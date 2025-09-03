import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 283201-283300', () => {
  beforeAll(() => initOnce());
  it('[283201] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283202] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283203] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283204] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283205] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283206] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283207] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283208] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283209] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283210] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283211] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283212] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283213] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283214] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283215] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283216] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283217] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283218] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283219] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283220] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283221] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283222] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283223] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283224] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283225] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283226] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283227] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283228] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283229] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283230] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283231] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283232] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283233] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283234] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283235] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283236] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283237] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283238] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283239] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283240] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283241] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283242] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283243] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283244] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283245] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283246] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283247] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283248] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283249] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283250] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283251] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283252] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283253] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283254] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283255] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283256] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283257] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283258] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283259] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283260] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283261] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283262] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283263] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283264] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283265] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283266] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283267] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283268] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283269] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283270] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283271] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283272] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283273] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283274] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283275] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283276] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283277] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283278] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283279] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283280] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283281] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283282] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283283] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283284] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283285] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283286] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283287] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283288] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283289] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283290] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283291] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283292] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283293] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283294] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[283295] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[283296] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[283297] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[283298] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[283299] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[283300] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
});
