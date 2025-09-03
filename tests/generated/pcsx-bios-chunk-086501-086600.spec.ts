import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86501-86600', () => {
  beforeAll(() => initOnce());
  it('[86501] PC 0x00003178 instr 0x02001021', () => {
    const pc = 0x3178;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2001021 >>> 0);
    stepOne();
  });
  it('[86502] PC 0x000031d0 instr 0x8fbf0024', () => {
    const pc = 0x31d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[86503] PC 0x000031d4 instr 0x8fb00018', () => {
    const pc = 0x31d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[86504] PC 0x000031d8 instr 0x8fb1001c', () => {
    const pc = 0x31d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[86505] PC 0x000031dc instr 0x8fb20020', () => {
    const pc = 0x31dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[86506] PC 0x000031e0 instr 0x03e00008', () => {
    const pc = 0x31e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86507] PC 0x000031e4 instr 0x27bd0028', () => {
    const pc = 0x31e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[86508] PC 0x00003374 instr 0x8fa80074', () => {
    const pc = 0x3374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa80074 >>> 0);
    stepOne();
  });
  it('[86509] PC 0x00003378 instr 0x14400003', () => {
    const pc = 0x3378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400003 >>> 0);
    stepOne();
  });
  it('[86510] PC 0x0000337c instr 0xad020000', () => {
    const pc = 0x337c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad020000 >>> 0);
    stepOne();
  });
  it('[86511] PC 0x00003388 instr 0x02401021', () => {
    const pc = 0x3388;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401021 >>> 0);
    stepOne();
  });
  it('[86512] PC 0x0000338c instr 0x8fbf002c', () => {
    const pc = 0x338c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf002c >>> 0);
    stepOne();
  });
  it('[86513] PC 0x00003390 instr 0x8fb00020', () => {
    const pc = 0x3390;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00020 >>> 0);
    stepOne();
  });
  it('[86514] PC 0x00003394 instr 0x8fb20024', () => {
    const pc = 0x3394;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20024 >>> 0);
    stepOne();
  });
  it('[86515] PC 0x00003398 instr 0x8fb30028', () => {
    const pc = 0x3398;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb30028 >>> 0);
    stepOne();
  });
  it('[86516] PC 0x0000339c instr 0x03e00008', () => {
    const pc = 0x339c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86517] PC 0x000033a0 instr 0x27bd0070', () => {
    const pc = 0x33a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0070 >>> 0);
    stepOne();
  });
  it('[86518] PC 0x0000299c instr 0x8fa70034', () => {
    const pc = 0x299c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa70034 >>> 0);
    stepOne();
  });
  it('[86519] PC 0x000029a0 instr 0x2401ffff', () => {
    const pc = 0x29a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401ffff >>> 0);
    stepOne();
  });
  it('[86520] PC 0x000029a4 instr 0x14410007', () => {
    const pc = 0x29a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14410007 >>> 0);
    stepOne();
  });
  it('[86521] PC 0x000029a8 instr 0x00402821', () => {
    const pc = 0x29a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402821 >>> 0);
    stepOne();
  });
  it('[86522] PC 0x000029c4 instr 0x8fa6003c', () => {
    const pc = 0x29c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa6003c >>> 0);
    stepOne();
  });
  it('[86523] PC 0x000029c8 instr 0x8fb80024', () => {
    const pc = 0x29c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80024 >>> 0);
    stepOne();
  });
  it('[86524] PC 0x000029cc instr 0xace60000', () => {
    const pc = 0x29cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace60000 >>> 0);
    stepOne();
  });
  it('[86525] PC 0x000029d0 instr 0xacf80004', () => {
    const pc = 0x29d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacf80004 >>> 0);
    stepOne();
  });
  it('[86526] PC 0x000029d4 instr 0x8fb90028', () => {
    const pc = 0x29d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90028 >>> 0);
    stepOne();
  });
  it('[86527] PC 0x000029d8 instr 0x00e02021', () => {
    const pc = 0x29d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe02021 >>> 0);
    stepOne();
  });
  it('[86528] PC 0x000029dc instr 0xacf9001c', () => {
    const pc = 0x29dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacf9001c >>> 0);
    stepOne();
  });
  it('[86529] PC 0x000029e0 instr 0x8fa80028', () => {
    const pc = 0x29e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa80028 >>> 0);
    stepOne();
  });
  it('[86530] PC 0x000029e4 instr 0x00000000', () => {
    const pc = 0x29e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86531] PC 0x000029e8 instr 0x8d090004', () => {
    const pc = 0x29e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d090004 >>> 0);
    stepOne();
  });
  it('[86532] PC 0x000029ec instr 0x00000000', () => {
    const pc = 0x29ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86533] PC 0x000029f0 instr 0xace90014', () => {
    const pc = 0x29f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace90014 >>> 0);
    stepOne();
  });
  it('[86534] PC 0x000029f4 instr 0x8faa0028', () => {
    const pc = 0x29f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faa0028 >>> 0);
    stepOne();
  });
  it('[86535] PC 0x000029f8 instr 0xafa70034', () => {
    const pc = 0x29f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70034 >>> 0);
    stepOne();
  });
  it('[86536] PC 0x000029fc instr 0x8d4b0014', () => {
    const pc = 0x29fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4b0014 >>> 0);
    stepOne();
  });
  it('[86537] PC 0x00002a00 instr 0x00000000', () => {
    const pc = 0x2a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86538] PC 0x00002a04 instr 0x0160f809', () => {
    const pc = 0x2a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x160f809 >>> 0);
    stepOne();
  });
  it('[86539] PC 0x00002a08 instr 0x00000000', () => {
    const pc = 0x2a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86540] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86541] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[86542] PC 0x00002a0c instr 0x8fa70034', () => {
    const pc = 0x2a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa70034 >>> 0);
    stepOne();
  });
  it('[86543] PC 0x00002a10 instr 0x10400007', () => {
    const pc = 0x2a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400007 >>> 0);
    stepOne();
  });
  it('[86544] PC 0x00002a14 instr 0x00000000', () => {
    const pc = 0x2a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86545] PC 0x00002a30 instr 0x3c0d0001', () => {
    const pc = 0x2a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0d0001 >>> 0);
    stepOne();
  });
  it('[86546] PC 0x00002a34 instr 0x25ad8648', () => {
    const pc = 0x2a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ad8648 >>> 0);
    stepOne();
  });
  it('[86547] PC 0x00002a38 instr 0x00ed1823', () => {
    const pc = 0x2a38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xed1823 >>> 0);
    stepOne();
  });
  it('[86548] PC 0x00002a3c instr 0x2401002c', () => {
    const pc = 0x2a3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401002c >>> 0);
    stepOne();
  });
  it('[86549] PC 0x00002a40 instr 0x0061001a', () => {
    const pc = 0x2a40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x61001a >>> 0);
    stepOne();
  });
  it('[86550] PC 0x00002a44 instr 0xace00010', () => {
    const pc = 0x2a44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace00010 >>> 0);
    stepOne();
  });
  it('[86551] PC 0x00002a48 instr 0x00001812', () => {
    const pc = 0x2a48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1812 >>> 0);
    stepOne();
  });
  it('[86552] PC 0x00002a4c instr 0xace30028', () => {
    const pc = 0x2a4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace30028 >>> 0);
    stepOne();
  });
  it('[86553] PC 0x00002a50 instr 0x00601021', () => {
    const pc = 0x2a50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86554] PC 0x00002a54 instr 0x8fbf001c', () => {
    const pc = 0x2a54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[86555] PC 0x00002a58 instr 0x27bd0038', () => {
    const pc = 0x2a58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0038 >>> 0);
    stepOne();
  });
  it('[86556] PC 0x00002a5c instr 0x03e00008', () => {
    const pc = 0x2a5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86557] PC 0x00002a60 instr 0x00000000', () => {
    const pc = 0x2a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86558] PC 0x00002930 instr 0x14400006', () => {
    const pc = 0x2930;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400006 >>> 0);
    stepOne();
  });
  it('[86559] PC 0x00002934 instr 0x8fbf0014', () => {
    const pc = 0x2934;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86560] PC 0x00002938 instr 0x3c040000', () => {
    const pc = 0x2938;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[86561] PC 0x0000293c instr 0x24846dcc', () => {
    const pc = 0x293c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24846dcc >>> 0);
    stepOne();
  });
  it('[86562] PC 0x00002940 instr 0x0c000a56', () => {
    const pc = 0x2940;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000a56 >>> 0);
    stepOne();
  });
  it('[86563] PC 0x00002944 instr 0x24050002', () => {
    const pc = 0x2944;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24050002 >>> 0);
    stepOne();
  });
  it('[86564] PC 0x00002958 instr 0x27bdffc8', () => {
    const pc = 0x2958;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffc8 >>> 0);
    stepOne();
  });
  it('[86565] PC 0x0000295c instr 0xafbf001c', () => {
    const pc = 0x295c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf001c >>> 0);
    stepOne();
  });
  it('[86566] PC 0x00002960 instr 0xafa40038', () => {
    const pc = 0x2960;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40038 >>> 0);
    stepOne();
  });
  it('[86567] PC 0x00002964 instr 0x0c000c18', () => {
    const pc = 0x2964;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c18 >>> 0);
    stepOne();
  });
  it('[86568] PC 0x00002968 instr 0xafa5003c', () => {
    const pc = 0x2968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa5003c >>> 0);
    stepOne();
  });
  it('[86569] PC 0x00003060 instr 0x27bdffe8', () => {
    const pc = 0x3060;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[86570] PC 0x00003064 instr 0x3c030001', () => {
    const pc = 0x3064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c030001 >>> 0);
    stepOne();
  });
  it('[86571] PC 0x00003068 instr 0x3c020001', () => {
    const pc = 0x3068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[86572] PC 0x0000306c instr 0xafbf0014', () => {
    const pc = 0x306c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[86573] PC 0x00003070 instr 0x24428908', () => {
    const pc = 0x3070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24428908 >>> 0);
    stepOne();
  });
  it('[86574] PC 0x00003074 instr 0x24638648', () => {
    const pc = 0x3074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24638648 >>> 0);
    stepOne();
  });
  it('[86575] PC 0x00003078 instr 0x8c6e0000', () => {
    const pc = 0x3078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6e0000 >>> 0);
    stepOne();
  });
  it('[86576] PC 0x0000307c instr 0x00000000', () => {
    const pc = 0x307c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86577] PC 0x00003080 instr 0x15c00003', () => {
    const pc = 0x3080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00003 >>> 0);
    stepOne();
  });
  it('[86578] PC 0x00003084 instr 0x00000000', () => {
    const pc = 0x3084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86579] PC 0x00003090 instr 0x2463002c', () => {
    const pc = 0x3090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463002c >>> 0);
    stepOne();
  });
  it('[86580] PC 0x00003094 instr 0x0062082b', () => {
    const pc = 0x3094;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x62082b >>> 0);
    stepOne();
  });
  it('[86581] PC 0x00003098 instr 0x1420fff7', () => {
    const pc = 0x3098;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fff7 >>> 0);
    stepOne();
  });
  it('[86582] PC 0x0000309c instr 0x00000000', () => {
    const pc = 0x309c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86583] PC 0x00003078 instr 0x8c6e0000', () => {
    const pc = 0x3078;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c6e0000 >>> 0);
    stepOne();
  });
  it('[86584] PC 0x0000307c instr 0x00000000', () => {
    const pc = 0x307c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86585] PC 0x00003080 instr 0x15c00003', () => {
    const pc = 0x3080;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x15c00003 >>> 0);
    stepOne();
  });
  it('[86586] PC 0x00003084 instr 0x00000000', () => {
    const pc = 0x3084;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86587] PC 0x00003088 instr 0x1000000b', () => {
    const pc = 0x3088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000000b >>> 0);
    stepOne();
  });
  it('[86588] PC 0x0000308c instr 0x00601021', () => {
    const pc = 0x308c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86589] PC 0x000030b8 instr 0x8fbf0014', () => {
    const pc = 0x30b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86590] PC 0x000030bc instr 0x27bd0018', () => {
    const pc = 0x30bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86591] PC 0x000030c0 instr 0x03e00008', () => {
    const pc = 0x30c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86592] PC 0x000030c4 instr 0x00000000', () => {
    const pc = 0x30c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86593] PC 0x0000296c instr 0x14400006', () => {
    const pc = 0x296c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14400006 >>> 0);
    stepOne();
  });
  it('[86594] PC 0x00002970 instr 0x00403821', () => {
    const pc = 0x2970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x403821 >>> 0);
    stepOne();
  });
  it('[86595] PC 0x00002988 instr 0x8fa40038', () => {
    const pc = 0x2988;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa40038 >>> 0);
    stepOne();
  });
  it('[86596] PC 0x0000298c instr 0x27a50028', () => {
    const pc = 0x298c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50028 >>> 0);
    stepOne();
  });
  it('[86597] PC 0x00002990 instr 0x27a60024', () => {
    const pc = 0x2990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a60024 >>> 0);
    stepOne();
  });
  it('[86598] PC 0x00002994 instr 0x0c000c7a', () => {
    const pc = 0x2994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc000c7a >>> 0);
    stepOne();
  });
  it('[86599] PC 0x00002998 instr 0xafa70034', () => {
    const pc = 0x2998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70034 >>> 0);
    stepOne();
  });
  it('[86600] PC 0x000031e8 instr 0x27bdff90', () => {
    const pc = 0x31e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdff90 >>> 0);
    stepOne();
  });
});
