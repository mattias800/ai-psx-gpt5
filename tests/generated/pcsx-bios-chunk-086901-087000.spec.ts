import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 86901-87000', () => {
  beforeAll(() => initOnce());
  it('[86901] PC 0x000029a0 instr 0x2401ffff', () => {
    const pc = 0x29a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401ffff >>> 0);
    stepOne();
  });
  it('[86902] PC 0x000029a4 instr 0x14410007', () => {
    const pc = 0x29a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14410007 >>> 0);
    stepOne();
  });
  it('[86903] PC 0x000029a8 instr 0x00402821', () => {
    const pc = 0x29a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x402821 >>> 0);
    stepOne();
  });
  it('[86904] PC 0x000029c4 instr 0x8fa6003c', () => {
    const pc = 0x29c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa6003c >>> 0);
    stepOne();
  });
  it('[86905] PC 0x000029c8 instr 0x8fb80024', () => {
    const pc = 0x29c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb80024 >>> 0);
    stepOne();
  });
  it('[86906] PC 0x000029cc instr 0xace60000', () => {
    const pc = 0x29cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace60000 >>> 0);
    stepOne();
  });
  it('[86907] PC 0x000029d0 instr 0xacf80004', () => {
    const pc = 0x29d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacf80004 >>> 0);
    stepOne();
  });
  it('[86908] PC 0x000029d4 instr 0x8fb90028', () => {
    const pc = 0x29d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb90028 >>> 0);
    stepOne();
  });
  it('[86909] PC 0x000029d8 instr 0x00e02021', () => {
    const pc = 0x29d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe02021 >>> 0);
    stepOne();
  });
  it('[86910] PC 0x000029dc instr 0xacf9001c', () => {
    const pc = 0x29dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacf9001c >>> 0);
    stepOne();
  });
  it('[86911] PC 0x000029e0 instr 0x8fa80028', () => {
    const pc = 0x29e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa80028 >>> 0);
    stepOne();
  });
  it('[86912] PC 0x000029e4 instr 0x00000000', () => {
    const pc = 0x29e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86913] PC 0x000029e8 instr 0x8d090004', () => {
    const pc = 0x29e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d090004 >>> 0);
    stepOne();
  });
  it('[86914] PC 0x000029ec instr 0x00000000', () => {
    const pc = 0x29ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86915] PC 0x000029f0 instr 0xace90014', () => {
    const pc = 0x29f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace90014 >>> 0);
    stepOne();
  });
  it('[86916] PC 0x000029f4 instr 0x8faa0028', () => {
    const pc = 0x29f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8faa0028 >>> 0);
    stepOne();
  });
  it('[86917] PC 0x000029f8 instr 0xafa70034', () => {
    const pc = 0x29f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70034 >>> 0);
    stepOne();
  });
  it('[86918] PC 0x000029fc instr 0x8d4b0014', () => {
    const pc = 0x29fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d4b0014 >>> 0);
    stepOne();
  });
  it('[86919] PC 0x00002a00 instr 0x00000000', () => {
    const pc = 0x2a00;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86920] PC 0x00002a04 instr 0x0160f809', () => {
    const pc = 0x2a04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x160f809 >>> 0);
    stepOne();
  });
  it('[86921] PC 0x00002a08 instr 0x00000000', () => {
    const pc = 0x2a08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86922] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86923] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[86924] PC 0x00002a0c instr 0x8fa70034', () => {
    const pc = 0x2a0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa70034 >>> 0);
    stepOne();
  });
  it('[86925] PC 0x00002a10 instr 0x10400007', () => {
    const pc = 0x2a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400007 >>> 0);
    stepOne();
  });
  it('[86926] PC 0x00002a14 instr 0x00000000', () => {
    const pc = 0x2a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86927] PC 0x00002a30 instr 0x3c0d0001', () => {
    const pc = 0x2a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0d0001 >>> 0);
    stepOne();
  });
  it('[86928] PC 0x00002a34 instr 0x25ad8648', () => {
    const pc = 0x2a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25ad8648 >>> 0);
    stepOne();
  });
  it('[86929] PC 0x00002a38 instr 0x00ed1823', () => {
    const pc = 0x2a38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xed1823 >>> 0);
    stepOne();
  });
  it('[86930] PC 0x00002a3c instr 0x2401002c', () => {
    const pc = 0x2a3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401002c >>> 0);
    stepOne();
  });
  it('[86931] PC 0x00002a40 instr 0x0061001a', () => {
    const pc = 0x2a40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x61001a >>> 0);
    stepOne();
  });
  it('[86932] PC 0x00002a44 instr 0xace00010', () => {
    const pc = 0x2a44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace00010 >>> 0);
    stepOne();
  });
  it('[86933] PC 0x00002a48 instr 0x00001812', () => {
    const pc = 0x2a48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1812 >>> 0);
    stepOne();
  });
  it('[86934] PC 0x00002a4c instr 0xace30028', () => {
    const pc = 0x2a4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xace30028 >>> 0);
    stepOne();
  });
  it('[86935] PC 0x00002a50 instr 0x00601021', () => {
    const pc = 0x2a50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[86936] PC 0x00002a54 instr 0x8fbf001c', () => {
    const pc = 0x2a54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[86937] PC 0x00002a58 instr 0x27bd0038', () => {
    const pc = 0x2a58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0038 >>> 0);
    stepOne();
  });
  it('[86938] PC 0x00002a5c instr 0x03e00008', () => {
    const pc = 0x2a5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86939] PC 0x00002a60 instr 0x00000000', () => {
    const pc = 0x2a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86940] PC 0x00002948 instr 0x8fbf0014', () => {
    const pc = 0x2948;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86941] PC 0x0000294c instr 0x27bd0018', () => {
    const pc = 0x294c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86942] PC 0x00002950 instr 0x03e00008', () => {
    const pc = 0x2950;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86943] PC 0x00002954 instr 0x00000000', () => {
    const pc = 0x2954;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86944] PC 0x000028f0 instr 0x0c0010d8', () => {
    const pc = 0x28f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0010d8 >>> 0);
    stepOne();
  });
  it('[86945] PC 0x000028f4 instr 0x24040006', () => {
    const pc = 0x28f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040006 >>> 0);
    stepOne();
  });
  it('[86946] PC 0x00004360 instr 0x27bdffe8', () => {
    const pc = 0x4360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[86947] PC 0x00004364 instr 0xafbf0014', () => {
    const pc = 0x4364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[86948] PC 0x00004368 instr 0x308400ff', () => {
    const pc = 0x4368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[86949] PC 0x0000436c instr 0x3c0e1f80', () => {
    const pc = 0x436c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[86950] PC 0x00004370 instr 0x0c0009e8', () => {
    const pc = 0x4370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[86951] PC 0x00004374 instr 0xa1c42041', () => {
    const pc = 0x4374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[86952] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[86953] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[86954] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86955] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86956] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86957] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86958] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86959] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86960] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86961] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86962] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86963] PC 0x000028f8 instr 0x8fbf0014', () => {
    const pc = 0x28f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86964] PC 0x000028fc instr 0x27bd0018', () => {
    const pc = 0x28fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86965] PC 0x00002900 instr 0x03e00008', () => {
    const pc = 0x2900;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86966] PC 0x00002904 instr 0x00000000', () => {
    const pc = 0x2904;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86967] PC 0x0000283c instr 0x0c0010d8', () => {
    const pc = 0x283c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0010d8 >>> 0);
    stepOne();
  });
  it('[86968] PC 0x00002840 instr 0x24040002', () => {
    const pc = 0x2840;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040002 >>> 0);
    stepOne();
  });
  it('[86969] PC 0x00004360 instr 0x27bdffe8', () => {
    const pc = 0x4360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[86970] PC 0x00004364 instr 0xafbf0014', () => {
    const pc = 0x4364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[86971] PC 0x00004368 instr 0x308400ff', () => {
    const pc = 0x4368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[86972] PC 0x0000436c instr 0x3c0e1f80', () => {
    const pc = 0x436c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[86973] PC 0x00004370 instr 0x0c0009e8', () => {
    const pc = 0x4370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[86974] PC 0x00004374 instr 0xa1c42041', () => {
    const pc = 0x4374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[86975] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[86976] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[86977] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86978] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86979] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86980] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86981] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[86982] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[86983] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[86984] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[86985] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86986] PC 0x00002844 instr 0x3c010000', () => {
    const pc = 0x2844;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010000 >>> 0);
    stepOne();
  });
  it('[86987] PC 0x00002848 instr 0xac207480', () => {
    const pc = 0x2848;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac207480 >>> 0);
    stepOne();
  });
  it('[86988] PC 0x0000284c instr 0x3c010001', () => {
    const pc = 0x284c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c010001 >>> 0);
    stepOne();
  });
  it('[86989] PC 0x00002850 instr 0x0c001aa8', () => {
    const pc = 0x2850;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aa8 >>> 0);
    stepOne();
  });
  it('[86990] PC 0x00002854 instr 0xac208644', () => {
    const pc = 0x2854;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac208644 >>> 0);
    stepOne();
  });
  it('[86991] PC 0x00006aa0 instr 0x240a00a0', () => {
    const pc = 0x6aa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[86992] PC 0x00006aa4 instr 0x01400008', () => {
    const pc = 0x6aa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[86993] PC 0x00006aa8 instr 0x24090096', () => {
    const pc = 0x6aa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090096 >>> 0);
    stepOne();
  });
  it('[86994] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[86995] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[86996] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[86997] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[86998] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[86999] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[87000] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
});
