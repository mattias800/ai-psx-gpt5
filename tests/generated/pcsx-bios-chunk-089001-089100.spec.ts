import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 89001-89100', () => {
  beforeAll(() => initOnce());
  it('[89001] PC 0xbfc01a10 instr 0xad400060', () => {
    const pc = 0xbfc01a10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[89002] PC 0xbfc01a14 instr 0xad400064', () => {
    const pc = 0xbfc01a14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[89003] PC 0xbfc01a18 instr 0xad400068', () => {
    const pc = 0xbfc01a18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[89004] PC 0xbfc01a1c instr 0xad40006c', () => {
    const pc = 0xbfc01a1c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[89005] PC 0xbfc01a20 instr 0xad400070', () => {
    const pc = 0xbfc01a20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[89006] PC 0xbfc01a24 instr 0xad400074', () => {
    const pc = 0xbfc01a24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[89007] PC 0xbfc01a28 instr 0xad400078', () => {
    const pc = 0xbfc01a28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[89008] PC 0xbfc01a2c instr 0xad40007c', () => {
    const pc = 0xbfc01a2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[89009] PC 0xbfc01a30 instr 0x154bffdf', () => {
    const pc = 0xbfc01a30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[89010] PC 0xbfc01a34 instr 0x214a0080', () => {
    const pc = 0xbfc01a34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[89011] PC 0xbfc01a38 instr 0x40806000', () => {
    const pc = 0xbfc01a38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40806000 >>> 0);
    stepOne();
  });
  it('[89012] PC 0xbfc01a3c instr 0x00000000', () => {
    const pc = 0xbfc01a3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89013] PC 0xbfc01a40 instr 0x3c090001', () => {
    const pc = 0xbfc01a40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090001 >>> 0);
    stepOne();
  });
  it('[89014] PC 0xbfc01a44 instr 0x3529e988', () => {
    const pc = 0xbfc01a44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3529e988 >>> 0);
    stepOne();
  });
  it('[89015] PC 0xbfc01a48 instr 0x3c01fffe', () => {
    const pc = 0xbfc01a48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01fffe >>> 0);
    stepOne();
  });
  it('[89016] PC 0xbfc01a4c instr 0xac290130', () => {
    const pc = 0xbfc01a4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac290130 >>> 0);
    stepOne();
  });
  it('[89017] PC 0xbfc01a50 instr 0x40886000', () => {
    const pc = 0xbfc01a50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40886000 >>> 0);
    stepOne();
  });
  it('[89018] PC 0xbfc01a54 instr 0x00000000', () => {
    const pc = 0xbfc01a54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89019] PC 0xbfc01a58 instr 0x03e00008', () => {
    const pc = 0xbfc01a58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[89020] PC 0xbfc01a5c instr 0x00000000', () => {
    const pc = 0xbfc01a5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89021] PC 0x00003c9c instr 0x8fa3001c', () => {
    const pc = 0x3c9c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa3001c >>> 0);
    stepOne();
  });
  it('[89022] PC 0x00003ca0 instr 0x00000000', () => {
    const pc = 0x3ca0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89023] PC 0x00003ca4 instr 0x8c680010', () => {
    const pc = 0x3ca4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c680010 >>> 0);
    stepOne();
  });
  it('[89024] PC 0x00003ca8 instr 0x00000000', () => {
    const pc = 0x3ca8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89025] PC 0x00003cac instr 0x0100f809', () => {
    const pc = 0x3cac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x100f809 >>> 0);
    stepOne();
  });
  it('[89026] PC 0x00003cb0 instr 0x00000000', () => {
    const pc = 0x3cb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89027] PC 0xbfc06fdc instr 0x03e00008', () => {
    const pc = 0xbfc06fdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[89028] PC 0xbfc06fe0 instr 0x00001021', () => {
    const pc = 0xbfc06fe0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[89029] PC 0x00003cb4 instr 0x10000006', () => {
    const pc = 0x3cb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10000006 >>> 0);
    stepOne();
  });
  it('[89030] PC 0x00003cb8 instr 0x24020001', () => {
    const pc = 0x3cb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24020001 >>> 0);
    stepOne();
  });
  it('[89031] PC 0x00003cd0 instr 0x8fbf0014', () => {
    const pc = 0x3cd0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[89032] PC 0x00003cd4 instr 0x27bd0020', () => {
    const pc = 0x3cd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0020 >>> 0);
    stepOne();
  });
  it('[89033] PC 0x00003cd8 instr 0x03e00008', () => {
    const pc = 0x3cd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[89034] PC 0x00003cdc instr 0x00000000', () => {
    const pc = 0x3cdc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89035] PC 0xbfc085c4 instr 0x8fbf0014', () => {
    const pc = 0xbfc085c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[89036] PC 0xbfc085c8 instr 0x27bd0018', () => {
    const pc = 0xbfc085c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[89037] PC 0xbfc085cc instr 0x03e00008', () => {
    const pc = 0xbfc085cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[89038] PC 0xbfc085d0 instr 0x00000000', () => {
    const pc = 0xbfc085d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89039] PC 0x00002858 instr 0x0c001aac', () => {
    const pc = 0x2858;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001aac >>> 0);
    stepOne();
  });
  it('[89040] PC 0x0000285c instr 0x00000000', () => {
    const pc = 0x285c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89041] PC 0x00006ab0 instr 0x240a00a0', () => {
    const pc = 0x6ab0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[89042] PC 0x00006ab4 instr 0x01400008', () => {
    const pc = 0x6ab4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[89043] PC 0x00006ab8 instr 0x24090097', () => {
    const pc = 0x6ab8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090097 >>> 0);
    stepOne();
  });
  it('[89044] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[89045] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[89046] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[89047] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89048] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[89049] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[89050] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[89051] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[89052] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89053] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[89054] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89055] PC 0xbfc0c1fc instr 0x27bdffe8', () => {
    const pc = 0xbfc0c1fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[89056] PC 0xbfc0c200 instr 0xafbf0014', () => {
    const pc = 0xbfc0c200;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[89057] PC 0xbfc0c204 instr 0x3c04bfc1', () => {
    const pc = 0xbfc0c204;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[89058] PC 0xbfc0c208 instr 0x0ff0367c', () => {
    const pc = 0xbfc0c208;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff0367c >>> 0);
    stepOne();
  });
  it('[89059] PC 0xbfc0c20c instr 0x2484e3e4', () => {
    const pc = 0xbfc0c20c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484e3e4 >>> 0);
    stepOne();
  });
  it('[89060] PC 0xbfc0d9f0 instr 0x240a00b0', () => {
    const pc = 0xbfc0d9f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[89061] PC 0xbfc0d9f4 instr 0x01400008', () => {
    const pc = 0xbfc0d9f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[89062] PC 0xbfc0d9f8 instr 0x24090047', () => {
    const pc = 0xbfc0d9f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090047 >>> 0);
    stepOne();
  });
  it('[89063] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[89064] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[89065] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[89066] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89067] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[89068] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[89069] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[89070] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[89071] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[89072] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89073] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[89074] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89075] PC 0x00003c2c instr 0x3c0e0000', () => {
    const pc = 0x3c2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[89076] PC 0x00003c30 instr 0x8dce7200', () => {
    const pc = 0x3c30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[89077] PC 0x00003c34 instr 0x3c050000', () => {
    const pc = 0x3c34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[89078] PC 0x00003c38 instr 0x000e7880', () => {
    const pc = 0x3c38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[89079] PC 0x00003c3c instr 0x01ee7821', () => {
    const pc = 0x3c3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[89080] PC 0x00003c40 instr 0x24a56ee0', () => {
    const pc = 0x3c40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a56ee0 >>> 0);
    stepOne();
  });
  it('[89081] PC 0x00003c44 instr 0x000f7900', () => {
    const pc = 0x3c44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[89082] PC 0x00003c48 instr 0x3c180000', () => {
    const pc = 0x3c48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c180000 >>> 0);
    stepOne();
  });
  it('[89083] PC 0x00003c4c instr 0x27186ee1', () => {
    const pc = 0x3c4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27186ee1 >>> 0);
    stepOne();
  });
  it('[89084] PC 0x00003c50 instr 0x00af1021', () => {
    const pc = 0x3c50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaf1021 >>> 0);
    stepOne();
  });
  it('[89085] PC 0x00003c54 instr 0x27bdffe0', () => {
    const pc = 0x3c54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe0 >>> 0);
    stepOne();
  });
  it('[89086] PC 0x00003c58 instr 0x0058082b', () => {
    const pc = 0x3c58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x58082b >>> 0);
    stepOne();
  });
  it('[89087] PC 0x00003c5c instr 0xafbf0014', () => {
    const pc = 0x3c5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[89088] PC 0x00003c60 instr 0x00803821', () => {
    const pc = 0x3c60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x803821 >>> 0);
    stepOne();
  });
  it('[89089] PC 0x00003c64 instr 0x14200019', () => {
    const pc = 0x3c64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200019 >>> 0);
    stepOne();
  });
  it('[89090] PC 0x00003c68 instr 0x00a01821', () => {
    const pc = 0x3c68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[89091] PC 0x00003c6c instr 0x8c790000', () => {
    const pc = 0x3c6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c790000 >>> 0);
    stepOne();
  });
  it('[89092] PC 0x00003c70 instr 0x00000000', () => {
    const pc = 0x3c70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89093] PC 0x00003c74 instr 0x17200011', () => {
    const pc = 0x3c74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x17200011 >>> 0);
    stepOne();
  });
  it('[89094] PC 0x00003c78 instr 0x00000000', () => {
    const pc = 0x3c78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89095] PC 0x00003cbc instr 0x24630050', () => {
    const pc = 0x3cbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630050 >>> 0);
    stepOne();
  });
  it('[89096] PC 0x00003cc0 instr 0x0062082b', () => {
    const pc = 0x3cc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x62082b >>> 0);
    stepOne();
  });
  it('[89097] PC 0x00003cc4 instr 0x1420ffe9', () => {
    const pc = 0x3cc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe9 >>> 0);
    stepOne();
  });
  it('[89098] PC 0x00003cc8 instr 0x00000000', () => {
    const pc = 0x3cc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[89099] PC 0x00003c6c instr 0x8c790000', () => {
    const pc = 0x3c6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c790000 >>> 0);
    stepOne();
  });
  it('[89100] PC 0x00003c70 instr 0x00000000', () => {
    const pc = 0x3c70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
