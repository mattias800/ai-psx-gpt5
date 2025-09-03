import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 87001-87100', () => {
  beforeAll(() => initOnce());
  it('[87001] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[87002] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87003] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[87004] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87005] PC 0xbfc085b0 instr 0x27bdffe8', () => {
    const pc = 0xbfc085b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[87006] PC 0xbfc085b4 instr 0xafbf0014', () => {
    const pc = 0xbfc085b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[87007] PC 0xbfc085b8 instr 0x3c04bfc1', () => {
    const pc = 0xbfc085b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[87008] PC 0xbfc085bc instr 0x0ff0367c', () => {
    const pc = 0xbfc085bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff0367c >>> 0);
    stepOne();
  });
  it('[87009] PC 0xbfc085c0 instr 0x2484e2f0', () => {
    const pc = 0xbfc085c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484e2f0 >>> 0);
    stepOne();
  });
  it('[87010] PC 0xbfc0d9f0 instr 0x240a00b0', () => {
    const pc = 0xbfc0d9f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00b0 >>> 0);
    stepOne();
  });
  it('[87011] PC 0xbfc0d9f4 instr 0x01400008', () => {
    const pc = 0xbfc0d9f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[87012] PC 0xbfc0d9f8 instr 0x24090047', () => {
    const pc = 0xbfc0d9f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090047 >>> 0);
    stepOne();
  });
  it('[87013] PC 0x000000b0 instr 0x3c080000', () => {
    const pc = 0xb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[87014] PC 0x000000b4 instr 0x250805e0', () => {
    const pc = 0xb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805e0 >>> 0);
    stepOne();
  });
  it('[87015] PC 0x000000b8 instr 0x01000008', () => {
    const pc = 0xb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[87016] PC 0x000000bc instr 0x00000000', () => {
    const pc = 0xbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87017] PC 0x000005e0 instr 0x3c080000', () => {
    const pc = 0x5e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[87018] PC 0x000005e4 instr 0x25080874', () => {
    const pc = 0x5e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080874 >>> 0);
    stepOne();
  });
  it('[87019] PC 0x000005e8 instr 0x00094880', () => {
    const pc = 0x5e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[87020] PC 0x000005ec instr 0x01094020', () => {
    const pc = 0x5ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[87021] PC 0x000005f0 instr 0x8d080000', () => {
    const pc = 0x5f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[87022] PC 0x000005f4 instr 0x00000000', () => {
    const pc = 0x5f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87023] PC 0x000005f8 instr 0x01000008', () => {
    const pc = 0x5f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[87024] PC 0x000005fc instr 0x00000000', () => {
    const pc = 0x5fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87025] PC 0x00003c2c instr 0x3c0e0000', () => {
    const pc = 0x3c2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e0000 >>> 0);
    stepOne();
  });
  it('[87026] PC 0x00003c30 instr 0x8dce7200', () => {
    const pc = 0x3c30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8dce7200 >>> 0);
    stepOne();
  });
  it('[87027] PC 0x00003c34 instr 0x3c050000', () => {
    const pc = 0x3c34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[87028] PC 0x00003c38 instr 0x000e7880', () => {
    const pc = 0x3c38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe7880 >>> 0);
    stepOne();
  });
  it('[87029] PC 0x00003c3c instr 0x01ee7821', () => {
    const pc = 0x3c3c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1ee7821 >>> 0);
    stepOne();
  });
  it('[87030] PC 0x00003c40 instr 0x24a56ee0', () => {
    const pc = 0x3c40;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a56ee0 >>> 0);
    stepOne();
  });
  it('[87031] PC 0x00003c44 instr 0x000f7900', () => {
    const pc = 0x3c44;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xf7900 >>> 0);
    stepOne();
  });
  it('[87032] PC 0x00003c48 instr 0x3c180000', () => {
    const pc = 0x3c48;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c180000 >>> 0);
    stepOne();
  });
  it('[87033] PC 0x00003c4c instr 0x27186ee1', () => {
    const pc = 0x3c4c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27186ee1 >>> 0);
    stepOne();
  });
  it('[87034] PC 0x00003c50 instr 0x00af1021', () => {
    const pc = 0x3c50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaf1021 >>> 0);
    stepOne();
  });
  it('[87035] PC 0x00003c54 instr 0x27bdffe0', () => {
    const pc = 0x3c54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe0 >>> 0);
    stepOne();
  });
  it('[87036] PC 0x00003c58 instr 0x0058082b', () => {
    const pc = 0x3c58;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x58082b >>> 0);
    stepOne();
  });
  it('[87037] PC 0x00003c5c instr 0xafbf0014', () => {
    const pc = 0x3c5c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[87038] PC 0x00003c60 instr 0x00803821', () => {
    const pc = 0x3c60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x803821 >>> 0);
    stepOne();
  });
  it('[87039] PC 0x00003c64 instr 0x14200019', () => {
    const pc = 0x3c64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14200019 >>> 0);
    stepOne();
  });
  it('[87040] PC 0x00003c68 instr 0x00a01821', () => {
    const pc = 0x3c68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[87041] PC 0x00003c6c instr 0x8c790000', () => {
    const pc = 0x3c6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c790000 >>> 0);
    stepOne();
  });
  it('[87042] PC 0x00003c70 instr 0x00000000', () => {
    const pc = 0x3c70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87043] PC 0x00003c74 instr 0x17200011', () => {
    const pc = 0x3c74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x17200011 >>> 0);
    stepOne();
  });
  it('[87044] PC 0x00003c78 instr 0x00000000', () => {
    const pc = 0x3c78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87045] PC 0x00003cbc instr 0x24630050', () => {
    const pc = 0x3cbc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630050 >>> 0);
    stepOne();
  });
  it('[87046] PC 0x00003cc0 instr 0x0062082b', () => {
    const pc = 0x3cc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x62082b >>> 0);
    stepOne();
  });
  it('[87047] PC 0x00003cc4 instr 0x1420ffe9', () => {
    const pc = 0x3cc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe9 >>> 0);
    stepOne();
  });
  it('[87048] PC 0x00003cc8 instr 0x00000000', () => {
    const pc = 0x3cc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87049] PC 0x00003c6c instr 0x8c790000', () => {
    const pc = 0x3c6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c790000 >>> 0);
    stepOne();
  });
  it('[87050] PC 0x00003c70 instr 0x00000000', () => {
    const pc = 0x3c70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87051] PC 0x00003c74 instr 0x17200011', () => {
    const pc = 0x3c74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x17200011 >>> 0);
    stepOne();
  });
  it('[87052] PC 0x00003c78 instr 0x00000000', () => {
    const pc = 0x3c78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87053] PC 0x00003c7c instr 0x00602021', () => {
    const pc = 0x3c7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x602021 >>> 0);
    stepOne();
  });
  it('[87054] PC 0x00003c80 instr 0x00e02821', () => {
    const pc = 0x3c80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xe02821 >>> 0);
    stepOne();
  });
  it('[87055] PC 0x00003c84 instr 0x24060050', () => {
    const pc = 0x3c84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060050 >>> 0);
    stepOne();
  });
  it('[87056] PC 0x00003c88 instr 0x0c001ac8', () => {
    const pc = 0x3c88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc001ac8 >>> 0);
    stepOne();
  });
  it('[87057] PC 0x00003c8c instr 0xafa3001c', () => {
    const pc = 0x3c8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa3001c >>> 0);
    stepOne();
  });
  it('[87058] PC 0x00006b20 instr 0x240a00a0', () => {
    const pc = 0x6b20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00a0 >>> 0);
    stepOne();
  });
  it('[87059] PC 0x00006b24 instr 0x01400008', () => {
    const pc = 0x6b24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[87060] PC 0x00006b28 instr 0x2409002a', () => {
    const pc = 0x6b28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409002a >>> 0);
    stepOne();
  });
  it('[87061] PC 0x000000a0 instr 0x3c080000', () => {
    const pc = 0xa0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[87062] PC 0x000000a4 instr 0x250805c4', () => {
    const pc = 0xa4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x250805c4 >>> 0);
    stepOne();
  });
  it('[87063] PC 0x000000a8 instr 0x01000008', () => {
    const pc = 0xa8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[87064] PC 0x000000ac instr 0x00000000', () => {
    const pc = 0xac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87065] PC 0x000005c4 instr 0x24080200', () => {
    const pc = 0x5c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24080200 >>> 0);
    stepOne();
  });
  it('[87066] PC 0x000005c8 instr 0x00094880', () => {
    const pc = 0x5c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[87067] PC 0x000005cc instr 0x01094020', () => {
    const pc = 0x5cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[87068] PC 0x000005d0 instr 0x8d080000', () => {
    const pc = 0x5d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[87069] PC 0x000005d4 instr 0x00000000', () => {
    const pc = 0x5d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87070] PC 0x000005d8 instr 0x01000008', () => {
    const pc = 0x5d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[87071] PC 0x000005dc instr 0x00000000', () => {
    const pc = 0x5dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87072] PC 0xbfc02b50 instr 0x14800003', () => {
    const pc = 0xbfc02b50;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14800003 >>> 0);
    stepOne();
  });
  it('[87073] PC 0xbfc02b54 instr 0x00000000', () => {
    const pc = 0xbfc02b54;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[87074] PC 0xbfc02b60 instr 0x18c00007', () => {
    const pc = 0xbfc02b60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x18c00007 >>> 0);
    stepOne();
  });
  it('[87075] PC 0xbfc02b64 instr 0x00801821', () => {
    const pc = 0xbfc02b64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[87076] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[87077] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[87078] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[87079] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[87080] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[87081] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[87082] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[87083] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[87084] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[87085] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[87086] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[87087] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[87088] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[87089] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[87090] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[87091] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[87092] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[87093] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[87094] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
  it('[87095] PC 0xbfc02b6c instr 0x24c6ffff', () => {
    const pc = 0xbfc02b6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24c6ffff >>> 0);
    stepOne();
  });
  it('[87096] PC 0xbfc02b70 instr 0x24a50001', () => {
    const pc = 0xbfc02b70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[87097] PC 0xbfc02b74 instr 0x24840001', () => {
    const pc = 0xbfc02b74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[87098] PC 0xbfc02b78 instr 0x1cc0fffb', () => {
    const pc = 0xbfc02b78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1cc0fffb >>> 0);
    stepOne();
  });
  it('[87099] PC 0xbfc02b7c instr 0xa08effff', () => {
    const pc = 0xbfc02b7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08effff >>> 0);
    stepOne();
  });
  it('[87100] PC 0xbfc02b68 instr 0x90ae0000', () => {
    const pc = 0xbfc02b68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x90ae0000 >>> 0);
    stepOne();
  });
});
