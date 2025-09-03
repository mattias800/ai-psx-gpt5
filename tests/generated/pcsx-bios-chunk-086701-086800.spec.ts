import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86701-86800', () => {
  beforeAll(() => initOnce());
  it('[86701] PC 0x000032f4 instr 0x10800019', () => {
    const pc = 0x32f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800019 >>> 0);
    stepOne();
  });
  it('[86702] PC 0x000032f8 instr 0x8fb90068', () => {
    const pc = 0x32f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90068 >>> 0);
    stepOne();
  });
  it('[86703] PC 0x000032fc instr 0x0c001aa4', () => {
    const pc = 0x32fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aa4 >>> 0);
    stepOne();
  });
  it('[86704] PC 0x00003300 instr 0x00000000', () => {
    const pc = 0x3300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86705] PC 0x00006a90 instr 0x240a00a0', () => {
    const pc = 0x6a90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86706] PC 0x00006a94 instr 0x01400008', () => {
    const pc = 0x6a94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86707] PC 0x00006a98 instr 0x24090025', () => {
    const pc = 0x6a98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090025 >>> 0);
    stepOne();
  });
  it('[86708] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86709] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86710] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86711] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86712] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86713] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86714] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86715] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86716] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86717] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86718] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86719] PC 0xbfc02ea0 instr 0x00042600', () => {
    const pc = 0xbfc02ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42600 >>> 0);
    stepOne();
  });
  it('[86720] PC 0xbfc02ea4 instr 0x00042603', () => {
    const pc = 0xbfc02ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42603 >>> 0);
    stepOne();
  });
  it('[86721] PC 0xbfc02ea8 instr 0x308200ff', () => {
    const pc = 0xbfc02ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308200ff >>> 0);
    stepOne();
  });
  it('[86722] PC 0xbfc02eac instr 0x3c0ebfc1', () => {
    const pc = 0xbfc02eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[86723] PC 0xbfc02eb0 instr 0x01c27021', () => {
    const pc = 0xbfc02eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27021 >>> 0);
    stepOne();
  });
  it('[86724] PC 0xbfc02eb4 instr 0x81ceddb1', () => {
    const pc = 0xbfc02eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81ceddb1 >>> 0);
    stepOne();
  });
  it('[86725] PC 0xbfc02eb8 instr 0x00000000', () => {
    const pc = 0xbfc02eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86726] PC 0xbfc02ebc instr 0x31cf0002', () => {
    const pc = 0xbfc02ebc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf0002 >>> 0);
    stepOne();
  });
  it('[86727] PC 0xbfc02ec0 instr 0x11e00004', () => {
    const pc = 0xbfc02ec0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00004 >>> 0);
    stepOne();
  });
  it('[86728] PC 0xbfc02ec4 instr 0x00000000', () => {
    const pc = 0xbfc02ec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86729] PC 0xbfc02ed4 instr 0x03e00008', () => {
    const pc = 0xbfc02ed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86730] PC 0xbfc02ed8 instr 0x00801021', () => {
    const pc = 0xbfc02ed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801021 >>> 0);
    stepOne();
  });
  it('[86731] PC 0x00003304 instr 0x9209ffd4', () => {
    const pc = 0x3304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd4 >>> 0);
    stepOne();
  });
  it('[86732] PC 0x00003308 instr 0x00000000', () => {
    const pc = 0x3308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86733] PC 0x0000330c instr 0x02295021', () => {
    const pc = 0x330c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86734] PC 0x00003310 instr 0x814b0001', () => {
    const pc = 0x3310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
  it('[86735] PC 0x00003314 instr 0x00000000', () => {
    const pc = 0x3314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86736] PC 0x00003318 instr 0x316c0004', () => {
    const pc = 0x3318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0004 >>> 0);
    stepOne();
  });
  it('[86737] PC 0x0000331c instr 0x11800004', () => {
    const pc = 0x331c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800004 >>> 0);
    stepOne();
  });
  it('[86738] PC 0x00003320 instr 0x24030037', () => {
    const pc = 0x3320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030037 >>> 0);
    stepOne();
  });
  it('[86739] PC 0x00003324 instr 0x10000002', () => {
    const pc = 0x3324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000002 >>> 0);
    stepOne();
  });
  it('[86740] PC 0x00003328 instr 0x24030030', () => {
    const pc = 0x3328;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030030 >>> 0);
    stepOne();
  });
  it('[86741] PC 0x00003330 instr 0x8e6d0000', () => {
    const pc = 0x3330;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e6d0000 >>> 0);
    stepOne();
  });
  it('[86742] PC 0x00003334 instr 0x26100001', () => {
    const pc = 0x3334;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86743] PC 0x00003338 instr 0x000d7100', () => {
    const pc = 0x3338;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd7100 >>> 0);
    stepOne();
  });
  it('[86744] PC 0x0000333c instr 0x01c27821', () => {
    const pc = 0x333c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27821 >>> 0);
    stepOne();
  });
  it('[86745] PC 0x00003340 instr 0x01e3c023', () => {
    const pc = 0x3340;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e3c023 >>> 0);
    stepOne();
  });
  it('[86746] PC 0x00003344 instr 0xae780000', () => {
    const pc = 0x3344;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae780000 >>> 0);
    stepOne();
  });
  it('[86747] PC 0x00003348 instr 0x8204ffd4', () => {
    const pc = 0x3348;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd4 >>> 0);
    stepOne();
  });
  it('[86748] PC 0x0000334c instr 0x00000000', () => {
    const pc = 0x334c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86749] PC 0x00003350 instr 0x1480ffea', () => {
    const pc = 0x3350;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480ffea >>> 0);
    stepOne();
  });
  it('[86750] PC 0x00003354 instr 0x00000000', () => {
    const pc = 0x3354;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86751] PC 0x000032fc instr 0x0c001aa4', () => {
    const pc = 0x32fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aa4 >>> 0);
    stepOne();
  });
  it('[86752] PC 0x00003300 instr 0x00000000', () => {
    const pc = 0x3300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86753] PC 0x00006a90 instr 0x240a00a0', () => {
    const pc = 0x6a90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86754] PC 0x00006a94 instr 0x01400008', () => {
    const pc = 0x6a94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86755] PC 0x00006a98 instr 0x24090025', () => {
    const pc = 0x6a98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090025 >>> 0);
    stepOne();
  });
  it('[86756] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86757] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86758] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86759] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86760] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86761] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[86762] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[86763] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[86764] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86765] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86766] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86767] PC 0xbfc02ea0 instr 0x00042600', () => {
    const pc = 0xbfc02ea0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42600 >>> 0);
    stepOne();
  });
  it('[86768] PC 0xbfc02ea4 instr 0x00042603', () => {
    const pc = 0xbfc02ea4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x42603 >>> 0);
    stepOne();
  });
  it('[86769] PC 0xbfc02ea8 instr 0x308200ff', () => {
    const pc = 0xbfc02ea8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308200ff >>> 0);
    stepOne();
  });
  it('[86770] PC 0xbfc02eac instr 0x3c0ebfc1', () => {
    const pc = 0xbfc02eac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[86771] PC 0xbfc02eb0 instr 0x01c27021', () => {
    const pc = 0xbfc02eb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27021 >>> 0);
    stepOne();
  });
  it('[86772] PC 0xbfc02eb4 instr 0x81ceddb1', () => {
    const pc = 0xbfc02eb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81ceddb1 >>> 0);
    stepOne();
  });
  it('[86773] PC 0xbfc02eb8 instr 0x00000000', () => {
    const pc = 0xbfc02eb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86774] PC 0xbfc02ebc instr 0x31cf0002', () => {
    const pc = 0xbfc02ebc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x31cf0002 >>> 0);
    stepOne();
  });
  it('[86775] PC 0xbfc02ec0 instr 0x11e00004', () => {
    const pc = 0xbfc02ec0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e00004 >>> 0);
    stepOne();
  });
  it('[86776] PC 0xbfc02ec4 instr 0x00000000', () => {
    const pc = 0xbfc02ec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86777] PC 0xbfc02ed4 instr 0x03e00008', () => {
    const pc = 0xbfc02ed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86778] PC 0xbfc02ed8 instr 0x00801021', () => {
    const pc = 0xbfc02ed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801021 >>> 0);
    stepOne();
  });
  it('[86779] PC 0x00003304 instr 0x9209ffd4', () => {
    const pc = 0x3304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x9209ffd4 >>> 0);
    stepOne();
  });
  it('[86780] PC 0x00003308 instr 0x00000000', () => {
    const pc = 0x3308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86781] PC 0x0000330c instr 0x02295021', () => {
    const pc = 0x330c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2295021 >>> 0);
    stepOne();
  });
  it('[86782] PC 0x00003310 instr 0x814b0001', () => {
    const pc = 0x3310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x814b0001 >>> 0);
    stepOne();
  });
  it('[86783] PC 0x00003314 instr 0x00000000', () => {
    const pc = 0x3314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86784] PC 0x00003318 instr 0x316c0004', () => {
    const pc = 0x3318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x316c0004 >>> 0);
    stepOne();
  });
  it('[86785] PC 0x0000331c instr 0x11800004', () => {
    const pc = 0x331c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11800004 >>> 0);
    stepOne();
  });
  it('[86786] PC 0x00003320 instr 0x24030037', () => {
    const pc = 0x3320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030037 >>> 0);
    stepOne();
  });
  it('[86787] PC 0x00003324 instr 0x10000002', () => {
    const pc = 0x3324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000002 >>> 0);
    stepOne();
  });
  it('[86788] PC 0x00003328 instr 0x24030030', () => {
    const pc = 0x3328;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24030030 >>> 0);
    stepOne();
  });
  it('[86789] PC 0x00003330 instr 0x8e6d0000', () => {
    const pc = 0x3330;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e6d0000 >>> 0);
    stepOne();
  });
  it('[86790] PC 0x00003334 instr 0x26100001', () => {
    const pc = 0x3334;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100001 >>> 0);
    stepOne();
  });
  it('[86791] PC 0x00003338 instr 0x000d7100', () => {
    const pc = 0x3338;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xd7100 >>> 0);
    stepOne();
  });
  it('[86792] PC 0x0000333c instr 0x01c27821', () => {
    const pc = 0x333c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c27821 >>> 0);
    stepOne();
  });
  it('[86793] PC 0x00003340 instr 0x01e3c023', () => {
    const pc = 0x3340;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1e3c023 >>> 0);
    stepOne();
  });
  it('[86794] PC 0x00003344 instr 0xae780000', () => {
    const pc = 0x3344;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xae780000 >>> 0);
    stepOne();
  });
  it('[86795] PC 0x00003348 instr 0x8204ffd4', () => {
    const pc = 0x3348;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8204ffd4 >>> 0);
    stepOne();
  });
  it('[86796] PC 0x0000334c instr 0x00000000', () => {
    const pc = 0x334c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86797] PC 0x00003350 instr 0x1480ffea', () => {
    const pc = 0x3350;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1480ffea >>> 0);
    stepOne();
  });
  it('[86798] PC 0x00003354 instr 0x00000000', () => {
    const pc = 0x3354;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86799] PC 0x00003358 instr 0x8fb90068', () => {
    const pc = 0x3358;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90068 >>> 0);
    stepOne();
  });
  it('[86800] PC 0x0000335c instr 0x00000000', () => {
    const pc = 0x335c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
