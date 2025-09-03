import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 17401-17500', () => {
  beforeAll(() => initOnce());
  it('[17401] PC 0xbfc07048 instr 0x3c021f00', () => {
    const pc = 0xbfc07048;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c021f00 >>> 0);
    stepOne();
  });
  it('[17402] PC 0xbfc0704c instr 0x25cee288', () => {
    const pc = 0xbfc0704c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25cee288 >>> 0);
    stepOne();
  });
  it('[17403] PC 0xbfc07050 instr 0x34420084', () => {
    const pc = 0xbfc07050;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34420084 >>> 0);
    stepOne();
  });
  it('[17404] PC 0xbfc07054 instr 0x11e0000c', () => {
    const pc = 0xbfc07054;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x11e0000c >>> 0);
    stepOne();
  });
  it('[17405] PC 0xbfc07058 instr 0x01c01821', () => {
    const pc = 0xbfc07058;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1c01821 >>> 0);
    stepOne();
  });
  it('[17406] PC 0xbfc0705c instr 0x81c60000', () => {
    const pc = 0xbfc0705c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x81c60000 >>> 0);
    stepOne();
  });
  it('[17407] PC 0xbfc07060 instr 0x00000000', () => {
    const pc = 0xbfc07060;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17408] PC 0xbfc07064 instr 0x80440000', () => {
    const pc = 0xbfc07064;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80440000 >>> 0);
    stepOne();
  });
  it('[17409] PC 0xbfc07068 instr 0x00c02821', () => {
    const pc = 0xbfc07068;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc02821 >>> 0);
    stepOne();
  });
  it('[17410] PC 0xbfc0706c instr 0x24420001', () => {
    const pc = 0xbfc0706c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24420001 >>> 0);
    stepOne();
  });
  it('[17411] PC 0xbfc07070 instr 0x14a40005', () => {
    const pc = 0xbfc07070;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a40005 >>> 0);
    stepOne();
  });
  it('[17412] PC 0xbfc07074 instr 0x24630001', () => {
    const pc = 0xbfc07074;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24630001 >>> 0);
    stepOne();
  });
  it('[17413] PC 0xbfc07088 instr 0x80780000', () => {
    const pc = 0xbfc07088;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80780000 >>> 0);
    stepOne();
  });
  it('[17414] PC 0xbfc0708c instr 0x00000000', () => {
    const pc = 0xbfc0708c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17415] PC 0xbfc07090 instr 0x17000004', () => {
    const pc = 0xbfc07090;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x17000004 >>> 0);
    stepOne();
  });
  it('[17416] PC 0xbfc07094 instr 0x00001021', () => {
    const pc = 0xbfc07094;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1021 >>> 0);
    stepOne();
  });
  it('[17417] PC 0xbfc070a4 instr 0x03e00008', () => {
    const pc = 0xbfc070a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17418] PC 0xbfc070a8 instr 0x00000000', () => {
    const pc = 0xbfc070a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17419] PC 0xbfc06ef0 instr 0x24010001', () => {
    const pc = 0xbfc06ef0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24010001 >>> 0);
    stepOne();
  });
  it('[17420] PC 0xbfc06ef4 instr 0x14410003', () => {
    const pc = 0xbfc06ef4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14410003 >>> 0);
    stepOne();
  });
  it('[17421] PC 0xbfc06ef8 instr 0x00000000', () => {
    const pc = 0xbfc06ef8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17422] PC 0xbfc06f04 instr 0x0ff00698', () => {
    const pc = 0xbfc06f04;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[17423] PC 0xbfc06f08 instr 0x2404000e', () => {
    const pc = 0xbfc06f08;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2404000e >>> 0);
    stepOne();
  });
  it('[17424] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[17425] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17426] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[17427] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[17428] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[17429] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[17430] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[17431] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[17432] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17433] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17434] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17435] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17436] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17437] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[17438] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[17439] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17440] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17441] PC 0xbfc06f0c instr 0x3c01a001', () => {
    const pc = 0xbfc06f0c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c01a001 >>> 0);
    stepOne();
  });
  it('[17442] PC 0xbfc06f10 instr 0x0ff019e1', () => {
    const pc = 0xbfc06f10;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff019e1 >>> 0);
    stepOne();
  });
  it('[17443] PC 0xbfc06f14 instr 0xac20b9b0', () => {
    const pc = 0xbfc06f14;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac20b9b0 >>> 0);
    stepOne();
  });
  it('[17444] PC 0xbfc06784 instr 0x27bdff48', () => {
    const pc = 0xbfc06784;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdff48 >>> 0);
    stepOne();
  });
  it('[17445] PC 0xbfc06788 instr 0xafbf0014', () => {
    const pc = 0xbfc06788;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17446] PC 0xbfc0678c instr 0x3c05bfc1', () => {
    const pc = 0xbfc0678c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c05bfc1 >>> 0);
    stepOne();
  });
  it('[17447] PC 0xbfc06790 instr 0x24a5e1a8', () => {
    const pc = 0xbfc06790;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5e1a8 >>> 0);
    stepOne();
  });
  it('[17448] PC 0xbfc06794 instr 0x0ff00cf2', () => {
    const pc = 0xbfc06794;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00cf2 >>> 0);
    stepOne();
  });
  it('[17449] PC 0xbfc06798 instr 0x27a40068', () => {
    const pc = 0xbfc06798;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40068 >>> 0);
    stepOne();
  });
  it('[17450] PC 0xbfc033c8 instr 0x10800003', () => {
    const pc = 0xbfc033c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[17451] PC 0xbfc033cc instr 0x00000000', () => {
    const pc = 0xbfc033cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17452] PC 0xbfc033d0 instr 0x14a00003', () => {
    const pc = 0xbfc033d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[17453] PC 0xbfc033d4 instr 0x00000000', () => {
    const pc = 0xbfc033d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17454] PC 0xbfc033e0 instr 0x80a20000', () => {
    const pc = 0xbfc033e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17455] PC 0xbfc033e4 instr 0x00801821', () => {
    const pc = 0xbfc033e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x801821 >>> 0);
    stepOne();
  });
  it('[17456] PC 0xbfc033e8 instr 0x24840001', () => {
    const pc = 0xbfc033e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17457] PC 0xbfc033ec instr 0x24a50001', () => {
    const pc = 0xbfc033ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17458] PC 0xbfc033f0 instr 0x10400006', () => {
    const pc = 0xbfc033f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10400006 >>> 0);
    stepOne();
  });
  it('[17459] PC 0xbfc033f4 instr 0xa082ffff', () => {
    const pc = 0xbfc033f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17460] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17461] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17462] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17463] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17464] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17465] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17466] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17467] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17468] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17469] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17470] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17471] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17472] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17473] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17474] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17475] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17476] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17477] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17478] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17479] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17480] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17481] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17482] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17483] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17484] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17485] PC 0xbfc033f8 instr 0x80a20000', () => {
    const pc = 0xbfc033f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17486] PC 0xbfc033fc instr 0x24840001', () => {
    const pc = 0xbfc033fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17487] PC 0xbfc03400 instr 0x24a50001', () => {
    const pc = 0xbfc03400;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17488] PC 0xbfc03404 instr 0x1440fffc', () => {
    const pc = 0xbfc03404;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17489] PC 0xbfc03408 instr 0xa082ffff', () => {
    const pc = 0xbfc03408;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17490] PC 0xbfc0340c instr 0x00601021', () => {
    const pc = 0xbfc0340c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[17491] PC 0xbfc03410 instr 0x03e00008', () => {
    const pc = 0xbfc03410;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17492] PC 0xbfc03414 instr 0x00000000', () => {
    const pc = 0xbfc03414;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17493] PC 0xbfc0679c instr 0x3c05bfc1', () => {
    const pc = 0xbfc0679c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c05bfc1 >>> 0);
    stepOne();
  });
  it('[17494] PC 0xbfc067a0 instr 0x24a5e130', () => {
    const pc = 0xbfc067a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a5e130 >>> 0);
    stepOne();
  });
  it('[17495] PC 0xbfc067a4 instr 0x0ff00c64', () => {
    const pc = 0xbfc067a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00c64 >>> 0);
    stepOne();
  });
  it('[17496] PC 0xbfc067a8 instr 0x27a40068', () => {
    const pc = 0xbfc067a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40068 >>> 0);
    stepOne();
  });
  it('[17497] PC 0xbfc03190 instr 0x10800003', () => {
    const pc = 0xbfc03190;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10800003 >>> 0);
    stepOne();
  });
  it('[17498] PC 0xbfc03194 instr 0x00000000', () => {
    const pc = 0xbfc03194;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17499] PC 0xbfc03198 instr 0x14a00003', () => {
    const pc = 0xbfc03198;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[17500] PC 0xbfc0319c instr 0x00000000', () => {
    const pc = 0xbfc0319c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
