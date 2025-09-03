import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86301-86400', () => {
  beforeAll(() => initOnce());
  it('[86301] PC 0x000032cc instr 0x2610ffff', () => {
    const pc = 0x32cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86302] PC 0x000032d0 instr 0x31f80044', () => {
    const pc = 0x32d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31f80044 >>> 0);
    stepOne();
  });
  it('[86303] PC 0x000032d4 instr 0x1700fff9', () => {
    const pc = 0x32d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1700fff9 >>> 0);
    stepOne();
  });
  it('[86304] PC 0x000032d8 instr 0x00000000', () => {
    const pc = 0x32d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86305] PC 0x000032bc instr 0x920dffd3', () => {
    const pc = 0x32bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x920dffd3 >>> 0);
    stepOne();
  });
  it('[86306] PC 0x000032c0 instr 0x2463ffff', () => {
    const pc = 0x32c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463ffff >>> 0);
    stepOne();
  });
  it('[86307] PC 0x000032c4 instr 0x022d7021', () => {
    const pc = 0x32c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22d7021 >>> 0);
    stepOne();
  });
  it('[86308] PC 0x000032c8 instr 0x81cf0001', () => {
    const pc = 0x32c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81cf0001 >>> 0);
    stepOne();
  });
  it('[86309] PC 0x000032cc instr 0x2610ffff', () => {
    const pc = 0x32cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2610ffff >>> 0);
    stepOne();
  });
  it('[86310] PC 0x000032d0 instr 0x31f80044', () => {
    const pc = 0x32d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31f80044 >>> 0);
    stepOne();
  });
  it('[86311] PC 0x000032d4 instr 0x1700fff9', () => {
    const pc = 0x32d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1700fff9 >>> 0);
    stepOne();
  });
  it('[86312] PC 0x000032d8 instr 0x00000000', () => {
    const pc = 0x32d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86313] PC 0x000032dc instr 0x24630001', () => {
    const pc = 0x32dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[86314] PC 0x000032e0 instr 0x27b90044', () => {
    const pc = 0x32e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27b90044 >>> 0);
    stepOne();
  });
  it('[86315] PC 0x000032e4 instr 0x00794021', () => {
    const pc = 0x32e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x794021 >>> 0);
    stepOne();
  });
  it('[86316] PC 0x000032e8 instr 0xafa80068', () => {
    const pc = 0x32e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa80068 >>> 0);
    stepOne();
  });
  it('[86317] PC 0x000032ec instr 0x8204ffd5', () => {
    const pc = 0x32ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd5 >>> 0);
    stepOne();
  });
  it('[86318] PC 0x000032f0 instr 0x26100001', () => {
    const pc = 0x32f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86319] PC 0x000032f4 instr 0x10800019', () => {
    const pc = 0x32f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800019 >>> 0);
    stepOne();
  });
  it('[86320] PC 0x000032f8 instr 0x8fb90068', () => {
    const pc = 0x32f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90068 >>> 0);
    stepOne();
  });
  it('[86321] PC 0x000032fc instr 0x0c001aa4', () => {
    const pc = 0x32fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aa4 >>> 0);
    stepOne();
  });
  it('[86322] PC 0x00003300 instr 0x00000000', () => {
    const pc = 0x3300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86323] PC 0x00006a90 instr 0x240a00a0', () => {
    const pc = 0x6a90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86324] PC 0x00006a94 instr 0x01400008', () => {
    const pc = 0x6a94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86325] PC 0x00006a98 instr 0x24090025', () => {
    const pc = 0x6a98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090025 >>> 0);
    stepOne();
  });
  it('[86326] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86327] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86328] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86329] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86330] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86331] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86332] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86333] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86334] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86335] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86336] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86337] PC 0xbfc02ea0 instr 0x00042600', () => {
    const pc = 0xbfc02ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42600 >>> 0);
    stepOne();
  });
  it('[86338] PC 0xbfc02ea4 instr 0x00042603', () => {
    const pc = 0xbfc02ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42603 >>> 0);
    stepOne();
  });
  it('[86339] PC 0xbfc02ea8 instr 0x308200ff', () => {
    const pc = 0xbfc02ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308200ff >>> 0);
    stepOne();
  });
  it('[86340] PC 0xbfc02eac instr 0x3c0ebfc1', () => {
    const pc = 0xbfc02eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[86341] PC 0xbfc02eb0 instr 0x01c27021', () => {
    const pc = 0xbfc02eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27021 >>> 0);
    stepOne();
  });
  it('[86342] PC 0xbfc02eb4 instr 0x81ceddb1', () => {
    const pc = 0xbfc02eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81ceddb1 >>> 0);
    stepOne();
  });
  it('[86343] PC 0xbfc02eb8 instr 0x00000000', () => {
    const pc = 0xbfc02eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86344] PC 0xbfc02ebc instr 0x31cf0002', () => {
    const pc = 0xbfc02ebc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf0002 >>> 0);
    stepOne();
  });
  it('[86345] PC 0xbfc02ec0 instr 0x11e00004', () => {
    const pc = 0xbfc02ec0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00004 >>> 0);
    stepOne();
  });
  it('[86346] PC 0xbfc02ec4 instr 0x00000000', () => {
    const pc = 0xbfc02ec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86347] PC 0xbfc02ed4 instr 0x03e00008', () => {
    const pc = 0xbfc02ed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86348] PC 0xbfc02ed8 instr 0x00801021', () => {
    const pc = 0xbfc02ed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801021 >>> 0);
    stepOne();
  });
  it('[86349] PC 0x00003304 instr 0x9209ffd4', () => {
    const pc = 0x3304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd4 >>> 0);
    stepOne();
  });
  it('[86350] PC 0x00003308 instr 0x00000000', () => {
    const pc = 0x3308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86351] PC 0x0000330c instr 0x02295021', () => {
    const pc = 0x330c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86352] PC 0x00003310 instr 0x814b0001', () => {
    const pc = 0x3310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
  it('[86353] PC 0x00003314 instr 0x00000000', () => {
    const pc = 0x3314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86354] PC 0x00003318 instr 0x316c0004', () => {
    const pc = 0x3318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0004 >>> 0);
    stepOne();
  });
  it('[86355] PC 0x0000331c instr 0x11800004', () => {
    const pc = 0x331c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800004 >>> 0);
    stepOne();
  });
  it('[86356] PC 0x00003320 instr 0x24030037', () => {
    const pc = 0x3320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030037 >>> 0);
    stepOne();
  });
  it('[86357] PC 0x00003324 instr 0x10000002', () => {
    const pc = 0x3324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000002 >>> 0);
    stepOne();
  });
  it('[86358] PC 0x00003328 instr 0x24030030', () => {
    const pc = 0x3328;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030030 >>> 0);
    stepOne();
  });
  it('[86359] PC 0x00003330 instr 0x8e6d0000', () => {
    const pc = 0x3330;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e6d0000 >>> 0);
    stepOne();
  });
  it('[86360] PC 0x00003334 instr 0x26100001', () => {
    const pc = 0x3334;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86361] PC 0x00003338 instr 0x000d7100', () => {
    const pc = 0x3338;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd7100 >>> 0);
    stepOne();
  });
  it('[86362] PC 0x0000333c instr 0x01c27821', () => {
    const pc = 0x333c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27821 >>> 0);
    stepOne();
  });
  it('[86363] PC 0x00003340 instr 0x01e3c023', () => {
    const pc = 0x3340;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e3c023 >>> 0);
    stepOne();
  });
  it('[86364] PC 0x00003344 instr 0xae780000', () => {
    const pc = 0x3344;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae780000 >>> 0);
    stepOne();
  });
  it('[86365] PC 0x00003348 instr 0x8204ffd4', () => {
    const pc = 0x3348;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd4 >>> 0);
    stepOne();
  });
  it('[86366] PC 0x0000334c instr 0x00000000', () => {
    const pc = 0x334c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86367] PC 0x00003350 instr 0x1480ffea', () => {
    const pc = 0x3350;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480ffea >>> 0);
    stepOne();
  });
  it('[86368] PC 0x00003354 instr 0x00000000', () => {
    const pc = 0x3354;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86369] PC 0x000032fc instr 0x0c001aa4', () => {
    const pc = 0x32fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aa4 >>> 0);
    stepOne();
  });
  it('[86370] PC 0x00003300 instr 0x00000000', () => {
    const pc = 0x3300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86371] PC 0x00006a90 instr 0x240a00a0', () => {
    const pc = 0x6a90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86372] PC 0x00006a94 instr 0x01400008', () => {
    const pc = 0x6a94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86373] PC 0x00006a98 instr 0x24090025', () => {
    const pc = 0x6a98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090025 >>> 0);
    stepOne();
  });
  it('[86374] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86375] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86376] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86377] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86378] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86379] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86380] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86381] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86382] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86383] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86384] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86385] PC 0xbfc02ea0 instr 0x00042600', () => {
    const pc = 0xbfc02ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42600 >>> 0);
    stepOne();
  });
  it('[86386] PC 0xbfc02ea4 instr 0x00042603', () => {
    const pc = 0xbfc02ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42603 >>> 0);
    stepOne();
  });
  it('[86387] PC 0xbfc02ea8 instr 0x308200ff', () => {
    const pc = 0xbfc02ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308200ff >>> 0);
    stepOne();
  });
  it('[86388] PC 0xbfc02eac instr 0x3c0ebfc1', () => {
    const pc = 0xbfc02eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[86389] PC 0xbfc02eb0 instr 0x01c27021', () => {
    const pc = 0xbfc02eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27021 >>> 0);
    stepOne();
  });
  it('[86390] PC 0xbfc02eb4 instr 0x81ceddb1', () => {
    const pc = 0xbfc02eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81ceddb1 >>> 0);
    stepOne();
  });
  it('[86391] PC 0xbfc02eb8 instr 0x00000000', () => {
    const pc = 0xbfc02eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86392] PC 0xbfc02ebc instr 0x31cf0002', () => {
    const pc = 0xbfc02ebc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf0002 >>> 0);
    stepOne();
  });
  it('[86393] PC 0xbfc02ec0 instr 0x11e00004', () => {
    const pc = 0xbfc02ec0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00004 >>> 0);
    stepOne();
  });
  it('[86394] PC 0xbfc02ec4 instr 0x00000000', () => {
    const pc = 0xbfc02ec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86395] PC 0xbfc02ed4 instr 0x03e00008', () => {
    const pc = 0xbfc02ed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86396] PC 0xbfc02ed8 instr 0x00801021', () => {
    const pc = 0xbfc02ed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801021 >>> 0);
    stepOne();
  });
  it('[86397] PC 0x00003304 instr 0x9209ffd4', () => {
    const pc = 0x3304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd4 >>> 0);
    stepOne();
  });
  it('[86398] PC 0x00003308 instr 0x00000000', () => {
    const pc = 0x3308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86399] PC 0x0000330c instr 0x02295021', () => {
    const pc = 0x330c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86400] PC 0x00003310 instr 0x814b0001', () => {
    const pc = 0x3310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
});
