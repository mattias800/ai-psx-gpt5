import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 79201-79300', () => {
  beforeAll(() => initOnce());
  it('[79201] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79202] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79203] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79204] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79205] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79206] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79207] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79208] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79209] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79210] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79211] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79212] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79213] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79214] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79215] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79216] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79217] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79218] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79219] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79220] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79221] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79222] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79223] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79224] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79225] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79226] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79227] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79228] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79229] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79230] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79231] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79232] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79233] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79234] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79235] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79236] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79237] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79238] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79239] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79240] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79241] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79242] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79243] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79244] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79245] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79246] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79247] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79248] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79249] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79250] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79251] PC 0xbfc042b4 instr 0x8c870000', () => {
    const pc = 0xbfc042b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8c870000 >>> 0);
    stepOne();
  });
  it('[79252] PC 0xbfc042b8 instr 0x20840004', () => {
    const pc = 0xbfc042b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20840004 >>> 0);
    stepOne();
  });
  it('[79253] PC 0xbfc042bc instr 0x20c60004', () => {
    const pc = 0xbfc042bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79254] PC 0xbfc042c0 instr 0x1485fffc', () => {
    const pc = 0xbfc042c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1485fffc >>> 0);
    stepOne();
  });
  it('[79255] PC 0xbfc042c4 instr 0xacc7fffc', () => {
    const pc = 0xbfc042c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc7fffc >>> 0);
    stepOne();
  });
  it('[79256] PC 0xbfc042c8 instr 0x03e00008', () => {
    const pc = 0xbfc042c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[79257] PC 0xbfc042cc instr 0x00000000', () => {
    const pc = 0xbfc042cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79258] PC 0xbfc06854 instr 0x0ff036c4', () => {
    const pc = 0xbfc06854;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff036c4 >>> 0);
    stepOne();
  });
  it('[79259] PC 0xbfc06858 instr 0x00000000', () => {
    const pc = 0xbfc06858;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79260] PC 0xbfc0db10 instr 0x240a00c0', () => {
    const pc = 0xbfc0db10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x240a00c0 >>> 0);
    stepOne();
  });
  it('[79261] PC 0xbfc0db14 instr 0x01400008', () => {
    const pc = 0xbfc0db14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1400008 >>> 0);
    stepOne();
  });
  it('[79262] PC 0xbfc0db18 instr 0x2409001c', () => {
    const pc = 0xbfc0db18;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2409001c >>> 0);
    stepOne();
  });
  it('[79263] PC 0x000000c0 instr 0x3c080000', () => {
    const pc = 0xc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[79264] PC 0x000000c4 instr 0x25080600', () => {
    const pc = 0xc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080600 >>> 0);
    stepOne();
  });
  it('[79265] PC 0x000000c8 instr 0x01000008', () => {
    const pc = 0xc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79266] PC 0x000000cc instr 0x00000000', () => {
    const pc = 0xcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79267] PC 0x00000600 instr 0x3c080000', () => {
    const pc = 0x600;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c080000 >>> 0);
    stepOne();
  });
  it('[79268] PC 0x00000604 instr 0x25080674', () => {
    const pc = 0x604;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25080674 >>> 0);
    stepOne();
  });
  it('[79269] PC 0x00000608 instr 0x00094880', () => {
    const pc = 0x608;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x94880 >>> 0);
    stepOne();
  });
  it('[79270] PC 0x0000060c instr 0x01094020', () => {
    const pc = 0x60c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1094020 >>> 0);
    stepOne();
  });
  it('[79271] PC 0x00000610 instr 0x8d080000', () => {
    const pc = 0x610;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d080000 >>> 0);
    stepOne();
  });
  it('[79272] PC 0x00000614 instr 0x00000000', () => {
    const pc = 0x614;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79273] PC 0x00000618 instr 0x01000008', () => {
    const pc = 0x618;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1000008 >>> 0);
    stepOne();
  });
  it('[79274] PC 0x0000061c instr 0x00000000', () => {
    const pc = 0x61c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[79275] PC 0x00000540 instr 0x3c050000', () => {
    const pc = 0x540;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c050000 >>> 0);
    stepOne();
  });
  it('[79276] PC 0x00000544 instr 0x3c040000', () => {
    const pc = 0x544;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c040000 >>> 0);
    stepOne();
  });
  it('[79277] PC 0x00000548 instr 0x24a5093c', () => {
    const pc = 0x548;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5093c >>> 0);
    stepOne();
  });
  it('[79278] PC 0x0000054c instr 0x24060200', () => {
    const pc = 0x54c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24060200 >>> 0);
    stepOne();
  });
  it('[79279] PC 0x00000550 instr 0x24840964', () => {
    const pc = 0x550;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840964 >>> 0);
    stepOne();
  });
  it('[79280] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79281] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79282] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79283] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79284] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79285] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79286] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79287] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79288] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79289] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79290] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79291] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79292] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79293] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79294] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79295] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
  it('[79296] PC 0x00000558 instr 0x20a50004', () => {
    const pc = 0x558;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20a50004 >>> 0);
    stepOne();
  });
  it('[79297] PC 0x0000055c instr 0x20c60004', () => {
    const pc = 0x55c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20c60004 >>> 0);
    stepOne();
  });
  it('[79298] PC 0x00000560 instr 0x14a4fffc', () => {
    const pc = 0x560;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a4fffc >>> 0);
    stepOne();
  });
  it('[79299] PC 0x00000564 instr 0xacc2fffc', () => {
    const pc = 0x564;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xacc2fffc >>> 0);
    stepOne();
  });
  it('[79300] PC 0x00000554 instr 0x8ca20000', () => {
    const pc = 0x554;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca20000 >>> 0);
    stepOne();
  });
});
