import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 79301-79400', () => {
  beforeAll(() => initOnce());
  it('[79301] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79302] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79303] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79304] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79305] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79306] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79307] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79308] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79309] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79310] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79311] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79312] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79313] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79314] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79315] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79316] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79317] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79318] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79319] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79320] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79321] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79322] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79323] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79324] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79325] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79326] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79327] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79328] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79329] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79330] PC 0x00000568 instr 0x3c050000', () => {
    const pc = 0x568;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[79331] PC 0x0000056c instr 0x3c040000', () => {
    const pc = 0x56c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[79332] PC 0x00000570 instr 0x24a50964', () => {
    const pc = 0x570;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50964 >>> 0);
    stepOne();
  });
  it('[79333] PC 0x00000574 instr 0x240602ec', () => {
    const pc = 0x574;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240602ec >>> 0);
    stepOne();
  });
  it('[79334] PC 0x00000578 instr 0x24840974', () => {
    const pc = 0x578;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840974 >>> 0);
    stepOne();
  });
  it('[79335] PC 0x0000057c instr 0x8ca20000', () => {
    const pc = 0x57c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79336] PC 0x00000580 instr 0x20a50004', () => {
    const pc = 0x580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79337] PC 0x00000584 instr 0x20c60004', () => {
    const pc = 0x584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79338] PC 0x00000588 instr 0x14a4fffc', () => {
    const pc = 0x588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79339] PC 0x0000058c instr 0xacc2fffc', () => {
    const pc = 0x58c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79340] PC 0x0000057c instr 0x8ca20000', () => {
    const pc = 0x57c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79341] PC 0x00000580 instr 0x20a50004', () => {
    const pc = 0x580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79342] PC 0x00000584 instr 0x20c60004', () => {
    const pc = 0x584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79343] PC 0x00000588 instr 0x14a4fffc', () => {
    const pc = 0x588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79344] PC 0x0000058c instr 0xacc2fffc', () => {
    const pc = 0x58c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79345] PC 0x0000057c instr 0x8ca20000', () => {
    const pc = 0x57c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79346] PC 0x00000580 instr 0x20a50004', () => {
    const pc = 0x580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79347] PC 0x00000584 instr 0x20c60004', () => {
    const pc = 0x584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79348] PC 0x00000588 instr 0x14a4fffc', () => {
    const pc = 0x588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79349] PC 0x0000058c instr 0xacc2fffc', () => {
    const pc = 0x58c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79350] PC 0x0000057c instr 0x8ca20000', () => {
    const pc = 0x57c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79351] PC 0x00000580 instr 0x20a50004', () => {
    const pc = 0x580;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79352] PC 0x00000584 instr 0x20c60004', () => {
    const pc = 0x584;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79353] PC 0x00000588 instr 0x14a4fffc', () => {
    const pc = 0x588;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79354] PC 0x0000058c instr 0xacc2fffc', () => {
    const pc = 0x58c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79355] PC 0x00000590 instr 0x03e00008', () => {
    const pc = 0x590;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[79356] PC 0x00000594 instr 0x00000000', () => {
    const pc = 0x594;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79357] PC 0xbfc0685c instr 0x0ff036c8', () => {
    const pc = 0xbfc0685c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036c8 >>> 0);
    stepOne();
  });
  it('[79358] PC 0xbfc06860 instr 0x00000000', () => {
    const pc = 0xbfc06860;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79359] PC 0xbfc0db20 instr 0x240a00c0', () => {
    const pc = 0xbfc0db20;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[79360] PC 0xbfc0db24 instr 0x01400008', () => {
    const pc = 0xbfc0db24;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[79361] PC 0xbfc0db28 instr 0x24090007', () => {
    const pc = 0xbfc0db28;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24090007 >>> 0);
    stepOne();
  });
  it('[79362] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[79363] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[79364] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79365] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79366] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[79367] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[79368] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[79369] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[79370] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[79371] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79372] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79373] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79374] PC 0x00000eb0 instr 0x3c028000', () => {
    const pc = 0xeb0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c028000 >>> 0);
    stepOne();
  });
  it('[79375] PC 0x00000eb4 instr 0x3c1a0000', () => {
    const pc = 0xeb4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1a0000 >>> 0);
    stepOne();
  });
  it('[79376] PC 0x00000eb8 instr 0x3c1b0000', () => {
    const pc = 0xeb8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1b0000 >>> 0);
    stepOne();
  });
  it('[79377] PC 0x00000ebc instr 0x34420080', () => {
    const pc = 0xebc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34420080 >>> 0);
    stepOne();
  });
  it('[79378] PC 0x00000ec0 instr 0x275a0f0c', () => {
    const pc = 0xec0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0f0c >>> 0);
    stepOne();
  });
  it('[79379] PC 0x00000ec4 instr 0x277b0f1c', () => {
    const pc = 0xec4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x277b0f1c >>> 0);
    stepOne();
  });
  it('[79380] PC 0x00000ec8 instr 0x8f430000', () => {
    const pc = 0xec8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79381] PC 0x00000ecc instr 0x275a0004', () => {
    const pc = 0xecc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79382] PC 0x00000ed0 instr 0x24420004', () => {
    const pc = 0xed0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79383] PC 0x00000ed4 instr 0x175bfffc', () => {
    const pc = 0xed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79384] PC 0x00000ed8 instr 0xac43fffc', () => {
    const pc = 0xed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79385] PC 0x00000ec8 instr 0x8f430000', () => {
    const pc = 0xec8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79386] PC 0x00000ecc instr 0x275a0004', () => {
    const pc = 0xecc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79387] PC 0x00000ed0 instr 0x24420004', () => {
    const pc = 0xed0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79388] PC 0x00000ed4 instr 0x175bfffc', () => {
    const pc = 0xed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79389] PC 0x00000ed8 instr 0xac43fffc', () => {
    const pc = 0xed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79390] PC 0x00000ec8 instr 0x8f430000', () => {
    const pc = 0xec8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79391] PC 0x00000ecc instr 0x275a0004', () => {
    const pc = 0xecc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79392] PC 0x00000ed0 instr 0x24420004', () => {
    const pc = 0xed0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79393] PC 0x00000ed4 instr 0x175bfffc', () => {
    const pc = 0xed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79394] PC 0x00000ed8 instr 0xac43fffc', () => {
    const pc = 0xed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79395] PC 0x00000ec8 instr 0x8f430000', () => {
    const pc = 0xec8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8f430000 >>> 0);
    stepOne();
  });
  it('[79396] PC 0x00000ecc instr 0x275a0004', () => {
    const pc = 0xecc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x275a0004 >>> 0);
    stepOne();
  });
  it('[79397] PC 0x00000ed0 instr 0x24420004', () => {
    const pc = 0xed0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420004 >>> 0);
    stepOne();
  });
  it('[79398] PC 0x00000ed4 instr 0x175bfffc', () => {
    const pc = 0xed4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x175bfffc >>> 0);
    stepOne();
  });
  it('[79399] PC 0x00000ed8 instr 0xac43fffc', () => {
    const pc = 0xed8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac43fffc >>> 0);
    stepOne();
  });
  it('[79400] PC 0x00000edc instr 0x3c1a0000', () => {
    const pc = 0xedc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1a0000 >>> 0);
    stepOne();
  });
});
