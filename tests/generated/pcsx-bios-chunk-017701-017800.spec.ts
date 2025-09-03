import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 17701-17800', () => {
  beforeAll(() => initOnce());
  it('[17701] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17702] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17703] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17704] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17705] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17706] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17707] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17708] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17709] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17710] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17711] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17712] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17713] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17714] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17715] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17716] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17717] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17718] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17719] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17720] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17721] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17722] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17723] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17724] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17725] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17726] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17727] PC 0xbfc031e0 instr 0x80a20000', () => {
    const pc = 0xbfc031e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x80a20000 >>> 0);
    stepOne();
  });
  it('[17728] PC 0xbfc031e4 instr 0x24840001', () => {
    const pc = 0xbfc031e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24840001 >>> 0);
    stepOne();
  });
  it('[17729] PC 0xbfc031e8 instr 0x24a50001', () => {
    const pc = 0xbfc031e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24a50001 >>> 0);
    stepOne();
  });
  it('[17730] PC 0xbfc031ec instr 0x1440fffc', () => {
    const pc = 0xbfc031ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1440fffc >>> 0);
    stepOne();
  });
  it('[17731] PC 0xbfc031f0 instr 0xa082ffff', () => {
    const pc = 0xbfc031f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa082ffff >>> 0);
    stepOne();
  });
  it('[17732] PC 0xbfc031f4 instr 0x00601021', () => {
    const pc = 0xbfc031f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x601021 >>> 0);
    stepOne();
  });
  it('[17733] PC 0xbfc031f8 instr 0x03e00008', () => {
    const pc = 0xbfc031f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17734] PC 0xbfc031fc instr 0x00000000', () => {
    const pc = 0xbfc031fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17735] PC 0xbfc067cc instr 0x27a40068', () => {
    const pc = 0xbfc067cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a40068 >>> 0);
    stepOne();
  });
  it('[17736] PC 0xbfc067d0 instr 0x0ff019fa', () => {
    const pc = 0xbfc067d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff019fa >>> 0);
    stepOne();
  });
  it('[17737] PC 0xbfc067d4 instr 0x27a50018', () => {
    const pc = 0xbfc067d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a50018 >>> 0);
    stepOne();
  });
  it('[17738] PC 0xbfc067e8 instr 0x27bdffd0', () => {
    const pc = 0xbfc067e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffd0 >>> 0);
    stepOne();
  });
  it('[17739] PC 0xbfc067ec instr 0xafbf0024', () => {
    const pc = 0xbfc067ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[17740] PC 0xbfc067f0 instr 0xafa40030', () => {
    const pc = 0xbfc067f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40030 >>> 0);
    stepOne();
  });
  it('[17741] PC 0xbfc067f4 instr 0xafa50034', () => {
    const pc = 0xbfc067f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa50034 >>> 0);
    stepOne();
  });
  it('[17742] PC 0xbfc067f8 instr 0x0ff00698', () => {
    const pc = 0xbfc067f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[17743] PC 0xbfc067fc instr 0x24040001', () => {
    const pc = 0xbfc067fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[17744] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[17745] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17746] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[17747] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[17748] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[17749] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[17750] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[17751] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[17752] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17753] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17754] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17755] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17756] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17757] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[17758] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[17759] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17760] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17761] PC 0xbfc06800 instr 0x0ff00e5a', () => {
    const pc = 0xbfc06800;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e5a >>> 0);
    stepOne();
  });
  it('[17762] PC 0xbfc06804 instr 0x00000000', () => {
    const pc = 0xbfc06804;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17763] PC 0xbfc03968 instr 0x40026000', () => {
    const pc = 0xbfc03968;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40026000 >>> 0);
    stepOne();
  });
  it('[17764] PC 0xbfc0396c instr 0x00000000', () => {
    const pc = 0xbfc0396c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17765] PC 0xbfc03970 instr 0x03e00008', () => {
    const pc = 0xbfc03970;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17766] PC 0xbfc03974 instr 0x00000000', () => {
    const pc = 0xbfc03974;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17767] PC 0xbfc06808 instr 0x2401fbfe', () => {
    const pc = 0xbfc06808;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2401fbfe >>> 0);
    stepOne();
  });
  it('[17768] PC 0xbfc0680c instr 0x0ff00e5e', () => {
    const pc = 0xbfc0680c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e5e >>> 0);
    stepOne();
  });
  it('[17769] PC 0xbfc06810 instr 0x00412024', () => {
    const pc = 0xbfc06810;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x412024 >>> 0);
    stepOne();
  });
  it('[17770] PC 0xbfc03978 instr 0x40846000', () => {
    const pc = 0xbfc03978;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x40846000 >>> 0);
    stepOne();
  });
  it('[17771] PC 0xbfc0397c instr 0x00000000', () => {
    const pc = 0xbfc0397c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17772] PC 0xbfc03980 instr 0x03e00008', () => {
    const pc = 0xbfc03980;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17773] PC 0xbfc03984 instr 0x00000000', () => {
    const pc = 0xbfc03984;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17774] PC 0xbfc06814 instr 0x3c021f80', () => {
    const pc = 0xbfc06814;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c021f80 >>> 0);
    stepOne();
  });
  it('[17775] PC 0xbfc06818 instr 0x34421c00', () => {
    const pc = 0xbfc06818;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x34421c00 >>> 0);
    stepOne();
  });
  it('[17776] PC 0xbfc0681c instr 0xa4400186', () => {
    const pc = 0xbfc0681c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400186 >>> 0);
    stepOne();
  });
  it('[17777] PC 0xbfc06820 instr 0xa4400184', () => {
    const pc = 0xbfc06820;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400184 >>> 0);
    stepOne();
  });
  it('[17778] PC 0xbfc06824 instr 0xa4400182', () => {
    const pc = 0xbfc06824;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400182 >>> 0);
    stepOne();
  });
  it('[17779] PC 0xbfc06828 instr 0xa4400180', () => {
    const pc = 0xbfc06828;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa4400180 >>> 0);
    stepOne();
  });
  it('[17780] PC 0xbfc0682c instr 0x0ff00698', () => {
    const pc = 0xbfc0682c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00698 >>> 0);
    stepOne();
  });
  it('[17781] PC 0xbfc06830 instr 0x24040002', () => {
    const pc = 0xbfc06830;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040002 >>> 0);
    stepOne();
  });
  it('[17782] PC 0xbfc01a60 instr 0x27bdffe8', () => {
    const pc = 0xbfc01a60;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[17783] PC 0xbfc01a64 instr 0xafbf0014', () => {
    const pc = 0xbfc01a64;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[17784] PC 0xbfc01a68 instr 0x308400ff', () => {
    const pc = 0xbfc01a68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x308400ff >>> 0);
    stepOne();
  });
  it('[17785] PC 0xbfc01a6c instr 0x3c0e1f80', () => {
    const pc = 0xbfc01a6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0e1f80 >>> 0);
    stepOne();
  });
  it('[17786] PC 0xbfc01a70 instr 0x0ff00e64', () => {
    const pc = 0xbfc01a70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00e64 >>> 0);
    stepOne();
  });
  it('[17787] PC 0xbfc01a74 instr 0xa1c42041', () => {
    const pc = 0xbfc01a74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa1c42041 >>> 0);
    stepOne();
  });
  it('[17788] PC 0xbfc03990 instr 0x3c02a001', () => {
    const pc = 0xbfc03990;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c02a001 >>> 0);
    stepOne();
  });
  it('[17789] PC 0xbfc03994 instr 0x2442b068', () => {
    const pc = 0xbfc03994;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2442b068 >>> 0);
    stepOne();
  });
  it('[17790] PC 0xbfc03998 instr 0xac400000', () => {
    const pc = 0xbfc03998;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17791] PC 0xbfc0399c instr 0xac400000', () => {
    const pc = 0xbfc0399c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17792] PC 0xbfc039a0 instr 0xac400000', () => {
    const pc = 0xbfc039a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17793] PC 0xbfc039a4 instr 0x03e00008', () => {
    const pc = 0xbfc039a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17794] PC 0xbfc039a8 instr 0xac400000', () => {
    const pc = 0xbfc039a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac400000 >>> 0);
    stepOne();
  });
  it('[17795] PC 0xbfc01a78 instr 0x8fbf0014', () => {
    const pc = 0xbfc01a78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf0014 >>> 0);
    stepOne();
  });
  it('[17796] PC 0xbfc01a7c instr 0x27bd0018', () => {
    const pc = 0xbfc01a7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0018 >>> 0);
    stepOne();
  });
  it('[17797] PC 0xbfc01a80 instr 0x03e00008', () => {
    const pc = 0xbfc01a80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[17798] PC 0xbfc01a84 instr 0x00000000', () => {
    const pc = 0xbfc01a84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[17799] PC 0xbfc06834 instr 0x0ff00108', () => {
    const pc = 0xbfc06834;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00108 >>> 0);
    stepOne();
  });
  it('[17800] PC 0xbfc06838 instr 0x00000000', () => {
    const pc = 0xbfc06838;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
});
