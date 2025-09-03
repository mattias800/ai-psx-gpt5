import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 133501-133600', () => {
  beforeAll(() => initOnce());
  it('[133501] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133502] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133503] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133504] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133505] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133506] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133507] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133508] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133509] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133510] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133511] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133512] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133513] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133514] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133515] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133516] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133517] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133518] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133519] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133520] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133521] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133522] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133523] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133524] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133525] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133526] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133527] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133528] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133529] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133530] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133531] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133532] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133533] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133534] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133535] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133536] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133537] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133538] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133539] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133540] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133541] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133542] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133543] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133544] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133545] PC 0xbfc04708 instr 0x2463001c', () => {
    const pc = 0xbfc04708;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2463001c >>> 0);
    stepOne();
  });
  it('[133546] PC 0xbfc0470c instr 0x0064082b', () => {
    const pc = 0xbfc0470c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x64082b >>> 0);
    stepOne();
  });
  it('[133547] PC 0xbfc04710 instr 0x1420fffd', () => {
    const pc = 0xbfc04710;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420fffd >>> 0);
    stepOne();
  });
  it('[133548] PC 0xbfc04714 instr 0xac60ffe8', () => {
    const pc = 0xbfc04714;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xac60ffe8 >>> 0);
    stepOne();
  });
  it('[133549] PC 0xbfc04718 instr 0x00c01021', () => {
    const pc = 0xbfc04718;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc01021 >>> 0);
    stepOne();
  });
  it('[133550] PC 0xbfc0471c instr 0x8fbf001c', () => {
    const pc = 0xbfc0471c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fbf001c >>> 0);
    stepOne();
  });
  it('[133551] PC 0xbfc04720 instr 0x27bd0028', () => {
    const pc = 0xbfc04720;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bd0028 >>> 0);
    stepOne();
  });
  it('[133552] PC 0xbfc04724 instr 0x03e00008', () => {
    const pc = 0xbfc04724;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3e00008 >>> 0);
    stepOne();
  });
  it('[133553] PC 0xbfc04728 instr 0x00000000', () => {
    const pc = 0xbfc04728;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[133554] PC 0xbfc0693c instr 0x3c05a001', () => {
    const pc = 0xbfc0693c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c05a001 >>> 0);
    stepOne();
  });
  it('[133555] PC 0xbfc06940 instr 0x8ca5b940', () => {
    const pc = 0xbfc06940;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8ca5b940 >>> 0);
    stepOne();
  });
  it('[133556] PC 0xbfc06944 instr 0x0ff011cb', () => {
    const pc = 0xbfc06944;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff011cb >>> 0);
    stepOne();
  });
  it('[133557] PC 0xbfc06948 instr 0x24040001', () => {
    const pc = 0xbfc06948;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[133558] PC 0xbfc0472c instr 0x27bdffc8', () => {
    const pc = 0xbfc0472c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffc8 >>> 0);
    stepOne();
  });
  it('[133559] PC 0xbfc04730 instr 0xafb10020', () => {
    const pc = 0xbfc04730;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb10020 >>> 0);
    stepOne();
  });
  it('[133560] PC 0xbfc04734 instr 0x00808821', () => {
    const pc = 0xbfc04734;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x808821 >>> 0);
    stepOne();
  });
  it('[133561] PC 0xbfc04738 instr 0xafb0001c', () => {
    const pc = 0xbfc04738;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb0001c >>> 0);
    stepOne();
  });
  it('[133562] PC 0xbfc0473c instr 0x00a08021', () => {
    const pc = 0xbfc0473c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa08021 >>> 0);
    stepOne();
  });
  it('[133563] PC 0xbfc04740 instr 0xafbf0024', () => {
    const pc = 0xbfc04740;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0024 >>> 0);
    stepOne();
  });
  it('[133564] PC 0xbfc04744 instr 0x3c04bfc1', () => {
    const pc = 0xbfc04744;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c04bfc1 >>> 0);
    stepOne();
  });
  it('[133565] PC 0xbfc04748 instr 0x2484df40', () => {
    const pc = 0xbfc04748;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2484df40 >>> 0);
    stepOne();
  });
  it('[133566] PC 0xbfc0474c instr 0x0ff00638', () => {
    const pc = 0xbfc0474c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00638 >>> 0);
    stepOne();
  });
  it('[133567] PC 0xbfc04750 instr 0x02002821', () => {
    const pc = 0xbfc04750;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x2002821 >>> 0);
    stepOne();
  });
  it('[133568] PC 0xbfc018e0 instr 0x27bdffe8', () => {
    const pc = 0xbfc018e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdffe8 >>> 0);
    stepOne();
  });
  it('[133569] PC 0xbfc018e4 instr 0xafa40018', () => {
    const pc = 0xbfc018e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40018 >>> 0);
    stepOne();
  });
  it('[133570] PC 0xbfc018e8 instr 0x00a01821', () => {
    const pc = 0xbfc018e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa01821 >>> 0);
    stepOne();
  });
  it('[133571] PC 0xbfc018ec instr 0xafbf0014', () => {
    const pc = 0xbfc018ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf0014 >>> 0);
    stepOne();
  });
  it('[133572] PC 0xbfc018f0 instr 0x8fa50018', () => {
    const pc = 0xbfc018f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8fa50018 >>> 0);
    stepOne();
  });
  it('[133573] PC 0xbfc018f4 instr 0x00c04021', () => {
    const pc = 0xbfc018f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc04021 >>> 0);
    stepOne();
  });
  it('[133574] PC 0xbfc018f8 instr 0xafa80020', () => {
    const pc = 0xbfc018f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa80020 >>> 0);
    stepOne();
  });
  it('[133575] PC 0xbfc018fc instr 0xafa3001c', () => {
    const pc = 0xbfc018fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa3001c >>> 0);
    stepOne();
  });
  it('[133576] PC 0xbfc01900 instr 0x27a6001c', () => {
    const pc = 0xbfc01900;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27a6001c >>> 0);
    stepOne();
  });
  it('[133577] PC 0xbfc01904 instr 0x24040001', () => {
    const pc = 0xbfc01904;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x24040001 >>> 0);
    stepOne();
  });
  it('[133578] PC 0xbfc01908 instr 0x0ff00368', () => {
    const pc = 0xbfc01908;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xff00368 >>> 0);
    stepOne();
  });
  it('[133579] PC 0xbfc0190c instr 0xafa70024', () => {
    const pc = 0xbfc0190c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa70024 >>> 0);
    stepOne();
  });
  it('[133580] PC 0xbfc00da0 instr 0x27bdfdd0', () => {
    const pc = 0xbfc00da0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27bdfdd0 >>> 0);
    stepOne();
  });
  it('[133581] PC 0xbfc00da4 instr 0xafb30038', () => {
    const pc = 0xbfc00da4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb30038 >>> 0);
    stepOne();
  });
  it('[133582] PC 0xbfc00da8 instr 0xafbf003c', () => {
    const pc = 0xbfc00da8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbf003c >>> 0);
    stepOne();
  });
  it('[133583] PC 0xbfc00dac instr 0x00c09821', () => {
    const pc = 0xbfc00dac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xc09821 >>> 0);
    stepOne();
  });
  it('[133584] PC 0xbfc00db0 instr 0x14a00003', () => {
    const pc = 0xbfc00db0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x14a00003 >>> 0);
    stepOne();
  });
  it('[133585] PC 0xbfc00db4 instr 0xafa40230', () => {
    const pc = 0xbfc00db4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa40230 >>> 0);
    stepOne();
  });
  it('[133586] PC 0xbfc00dc0 instr 0xafbe0044', () => {
    const pc = 0xbfc00dc0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafbe0044 >>> 0);
    stepOne();
  });
  it('[133587] PC 0xbfc00dc4 instr 0xafb20058', () => {
    const pc = 0xbfc00dc4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb20058 >>> 0);
    stepOne();
  });
  it('[133588] PC 0xbfc00dc8 instr 0xafb00060', () => {
    const pc = 0xbfc00dc8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb00060 >>> 0);
    stepOne();
  });
  it('[133589] PC 0xbfc00dcc instr 0xafb1005c', () => {
    const pc = 0xbfc00dcc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb1005c >>> 0);
    stepOne();
  });
  it('[133590] PC 0xbfc00dd0 instr 0xafb40054', () => {
    const pc = 0xbfc00dd0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb40054 >>> 0);
    stepOne();
  });
  it('[133591] PC 0xbfc00dd4 instr 0xafb50050', () => {
    const pc = 0xbfc00dd4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb50050 >>> 0);
    stepOne();
  });
  it('[133592] PC 0xbfc00dd8 instr 0xafb6004c', () => {
    const pc = 0xbfc00dd8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb6004c >>> 0);
    stepOne();
  });
  it('[133593] PC 0xbfc00ddc instr 0x3c0ebfc1', () => {
    const pc = 0xbfc00ddc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c0ebfc1 >>> 0);
    stepOne();
  });
  it('[133594] PC 0xbfc00de0 instr 0xafb70048', () => {
    const pc = 0xbfc00de0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafb70048 >>> 0);
    stepOne();
  });
  it('[133595] PC 0xbfc00de4 instr 0x25cedd60', () => {
    const pc = 0xbfc00de4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x25cedd60 >>> 0);
    stepOne();
  });
  it('[133596] PC 0xbfc00de8 instr 0x3c1ebfc1', () => {
    const pc = 0xbfc00de8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c1ebfc1 >>> 0);
    stepOne();
  });
  it('[133597] PC 0xbfc00dec instr 0xafae01dc', () => {
    const pc = 0xbfc00dec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafae01dc >>> 0);
    stepOne();
  });
  it('[133598] PC 0xbfc00df0 instr 0x00a09021', () => {
    const pc = 0xbfc00df0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa09021 >>> 0);
    stepOne();
  });
  it('[133599] PC 0xbfc00df4 instr 0x27deddb0', () => {
    const pc = 0xbfc00df4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x27deddb0 >>> 0);
    stepOne();
  });
  it('[133600] PC 0xbfc00df8 instr 0xafa00224', () => {
    const pc = 0xbfc00df8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xafa00224 >>> 0);
    stepOne();
  });
});
