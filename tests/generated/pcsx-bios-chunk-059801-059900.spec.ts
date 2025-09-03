import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 59801-59900', () => {
  beforeAll(() => initOnce());
  it('[59801] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59802] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59803] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59804] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59805] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59806] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59807] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59808] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59809] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59810] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59811] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59812] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59813] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59814] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59815] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59816] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59817] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59818] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59819] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59820] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59821] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59822] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59823] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59824] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59825] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59826] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59827] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59828] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59829] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59830] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59831] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59832] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59833] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59834] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59835] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59836] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59837] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59838] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59839] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59840] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59841] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59842] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59843] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59844] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59845] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59846] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59847] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59848] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59849] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59850] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59851] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59852] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59853] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59854] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59855] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59856] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59857] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59858] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59859] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59860] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59861] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59862] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59863] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59864] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59865] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59866] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59867] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59868] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59869] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59870] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59871] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59872] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59873] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59874] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59875] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59876] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59877] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59878] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59879] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59880] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59881] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59882] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59883] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59884] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59885] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59886] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59887] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59888] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59889] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59890] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59891] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59892] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59893] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59894] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
  it('[59895] PC 0xbfc00448 instr 0xaca7fffc', () => {
    const pc = 0xbfc00448;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xaca7fffc >>> 0);
    stepOne();
  });
  it('[59896] PC 0xbfc00434 instr 0x8c870000', () => {
    const pc = 0xbfc00434;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[59897] PC 0xbfc00438 instr 0x20c6fffc', () => {
    const pc = 0xbfc00438;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c6fffc >>> 0);
    stepOne();
  });
  it('[59898] PC 0xbfc0043c instr 0x20840004', () => {
    const pc = 0xbfc0043c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[59899] PC 0xbfc00440 instr 0x20a50004', () => {
    const pc = 0xbfc00440;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[59900] PC 0xbfc00444 instr 0x14c0fffb', () => {
    const pc = 0xbfc00444;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14c0fffb >>> 0);
    stepOne();
  });
});
