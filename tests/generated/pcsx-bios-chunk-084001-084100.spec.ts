import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 84001-84100', () => {
  beforeAll(() => initOnce());
  it('[84001] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[84002] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84003] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[84004] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84005] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[84006] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84007] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[84008] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[84009] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[84010] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[84011] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[84012] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[84013] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[84014] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[84015] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[84016] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84017] PC 0x00003d90 instr 0x00001021', () => {
    const pc = 0x3d90;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[84018] PC 0x00003d94 instr 0x8fbf0024', () => {
    const pc = 0x3d94;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0024 >>> 0);
    stepOne();
  });
  it('[84019] PC 0x00003d98 instr 0x8fb00018', () => {
    const pc = 0x3d98;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb00018 >>> 0);
    stepOne();
  });
  it('[84020] PC 0x00003d9c instr 0x8fb1001c', () => {
    const pc = 0x3d9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb1001c >>> 0);
    stepOne();
  });
  it('[84021] PC 0x00003da0 instr 0x8fb20020', () => {
    const pc = 0x3da0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fb20020 >>> 0);
    stepOne();
  });
  it('[84022] PC 0x00003da4 instr 0x03e00008', () => {
    const pc = 0x3da4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[84023] PC 0x00003da8 instr 0x27bd0028', () => {
    const pc = 0x3da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[84024] PC 0x000028a0 instr 0x0c0010d8', () => {
    const pc = 0x28a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0010d8 >>> 0);
    stepOne();
  });
  it('[84025] PC 0x000028a4 instr 0x24040004', () => {
    const pc = 0x28a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040004 >>> 0);
    stepOne();
  });
  it('[84026] PC 0x00004360 instr 0x27bdffe8', () => {
    const pc = 0x4360;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[84027] PC 0x00004364 instr 0xafbf0014', () => {
    const pc = 0x4364;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[84028] PC 0x00004368 instr 0x308400ff', () => {
    const pc = 0x4368;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[84029] PC 0x0000436c instr 0x3c0e1f80', () => {
    const pc = 0x436c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[84030] PC 0x00004370 instr 0x0c0009e8', () => {
    const pc = 0x4370;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc0009e8 >>> 0);
    stepOne();
  });
  it('[84031] PC 0x00004374 instr 0xa1c42041', () => {
    const pc = 0x4374;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[84032] PC 0x000027a0 instr 0x3c020001', () => {
    const pc = 0x27a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c020001 >>> 0);
    stepOne();
  });
  it('[84033] PC 0x000027a4 instr 0x2442863c', () => {
    const pc = 0x27a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442863c >>> 0);
    stepOne();
  });
  it('[84034] PC 0x000027a8 instr 0xac400000', () => {
    const pc = 0x27a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[84035] PC 0x000027ac instr 0xac400000', () => {
    const pc = 0x27ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[84036] PC 0x000027b0 instr 0xac400000', () => {
    const pc = 0x27b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[84037] PC 0x000027b4 instr 0x03e00008', () => {
    const pc = 0x27b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[84038] PC 0x000027b8 instr 0xac400000', () => {
    const pc = 0x27b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[84039] PC 0x00004378 instr 0x8fbf0014', () => {
    const pc = 0x4378;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[84040] PC 0x0000437c instr 0x27bd0018', () => {
    const pc = 0x437c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[84041] PC 0x00004380 instr 0x03e00008', () => {
    const pc = 0x4380;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[84042] PC 0x00004384 instr 0x00000000', () => {
    const pc = 0x4384;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84043] PC 0x000028a8 instr 0x8fa20018', () => {
    const pc = 0x28a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa20018 >>> 0);
    stepOne();
  });
  it('[84044] PC 0x000028ac instr 0x00000000', () => {
    const pc = 0x28ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84045] PC 0x000028b0 instr 0x10400005', () => {
    const pc = 0x28b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400005 >>> 0);
    stepOne();
  });
  it('[84046] PC 0x000028b4 instr 0x24010001', () => {
    const pc = 0x28b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010001 >>> 0);
    stepOne();
  });
  it('[84047] PC 0x000028c8 instr 0x0c001ab0', () => {
    const pc = 0x28c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001ab0 >>> 0);
    stepOne();
  });
  it('[84048] PC 0x000028cc instr 0x00000000', () => {
    const pc = 0x28cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84049] PC 0x00006ac0 instr 0x240a00a0', () => {
    const pc = 0x6ac0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[84050] PC 0x00006ac4 instr 0x01400008', () => {
    const pc = 0x6ac4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[84051] PC 0x00006ac8 instr 0x24090099', () => {
    const pc = 0x6ac8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090099 >>> 0);
    stepOne();
  });
  it('[84052] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[84053] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[84054] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84055] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84056] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[84057] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[84058] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[84059] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[84060] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84061] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84062] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84063] PC 0xbfc086b0 instr 0x27bdffe8', () => {
    const pc = 0xbfc086b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[84064] PC 0xbfc086b4 instr 0xafbf0014', () => {
    const pc = 0xbfc086b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[84065] PC 0xbfc086b8 instr 0x3c04bfc1', () => {
    const pc = 0xbfc086b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[84066] PC 0xbfc086bc instr 0x0ff0367c', () => {
    const pc = 0xbfc086bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff0367c >>> 0);
    stepOne();
  });
  it('[84067] PC 0xbfc086c0 instr 0x2484e350', () => {
    const pc = 0xbfc086c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484e350 >>> 0);
    stepOne();
  });
  it('[84068] PC 0xbfc0d9f0 instr 0x240a00b0', () => {
    const pc = 0xbfc0d9f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[84069] PC 0xbfc0d9f4 instr 0x01400008', () => {
    const pc = 0xbfc0d9f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[84070] PC 0xbfc0d9f8 instr 0x24090047', () => {
    const pc = 0xbfc0d9f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090047 >>> 0);
    stepOne();
  });
  it('[84071] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[84072] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[84073] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84074] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84075] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[84076] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[84077] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[84078] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[84079] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[84080] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84081] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[84082] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[84083] PC 0x00003c2c instr 0x3c0e0000', () => {
    const pc = 0x3c2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[84084] PC 0x00003c30 instr 0x8dce7200', () => {
    const pc = 0x3c30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[84085] PC 0x00003c34 instr 0x3c050000', () => {
    const pc = 0x3c34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[84086] PC 0x00003c38 instr 0x000e7880', () => {
    const pc = 0x3c38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[84087] PC 0x00003c3c instr 0x01ee7821', () => {
    const pc = 0x3c3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[84088] PC 0x00003c40 instr 0x24a56ee0', () => {
    const pc = 0x3c40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a56ee0 >>> 0);
    stepOne();
  });
  it('[84089] PC 0x00003c44 instr 0x000f7900', () => {
    const pc = 0x3c44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[84090] PC 0x00003c48 instr 0x3c180000', () => {
    const pc = 0x3c48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c180000 >>> 0);
    stepOne();
  });
  it('[84091] PC 0x00003c4c instr 0x27186ee1', () => {
    const pc = 0x3c4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27186ee1 >>> 0);
    stepOne();
  });
  it('[84092] PC 0x00003c50 instr 0x00af1021', () => {
    const pc = 0x3c50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaf1021 >>> 0);
    stepOne();
  });
  it('[84093] PC 0x00003c54 instr 0x27bdffe0', () => {
    const pc = 0x3c54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe0 >>> 0);
    stepOne();
  });
  it('[84094] PC 0x00003c58 instr 0x0058082b', () => {
    const pc = 0x3c58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x58082b >>> 0);
    stepOne();
  });
  it('[84095] PC 0x00003c5c instr 0xafbf0014', () => {
    const pc = 0x3c5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[84096] PC 0x00003c60 instr 0x00803821', () => {
    const pc = 0x3c60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x803821 >>> 0);
    stepOne();
  });
  it('[84097] PC 0x00003c64 instr 0x14200019', () => {
    const pc = 0x3c64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200019 >>> 0);
    stepOne();
  });
  it('[84098] PC 0x00003c68 instr 0x00a01821', () => {
    const pc = 0x3c68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[84099] PC 0x00003c6c instr 0x8c790000', () => {
    const pc = 0x3c6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c790000 >>> 0);
    stepOne();
  });
  it('[84100] PC 0x00003c70 instr 0x00000000', () => {
    const pc = 0x3c70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
