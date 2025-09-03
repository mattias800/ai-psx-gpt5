import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 83901-84000', () => {
  beforeAll(() => initOnce());
  it('[83901] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83902] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83903] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83904] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83905] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83906] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83907] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83908] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83909] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83910] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83911] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83912] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83913] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83914] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83915] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83916] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83917] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83918] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83919] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83920] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83921] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83922] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83923] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83924] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83925] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83926] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83927] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83928] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83929] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83930] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83931] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83932] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83933] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83934] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83935] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83936] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83937] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83938] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83939] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83940] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83941] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83942] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83943] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83944] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83945] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83946] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83947] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83948] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83949] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83950] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83951] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83952] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83953] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83954] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83955] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83956] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83957] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83958] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83959] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83960] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83961] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83962] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83963] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83964] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83965] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83966] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83967] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83968] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83969] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83970] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83971] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83972] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83973] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83974] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83975] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83976] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83977] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83978] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83979] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83980] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83981] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83982] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83983] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83984] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83985] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[83986] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
  it('[83987] PC 0x00003d88 instr 0x1420ffe8', () => {
    const pc = 0x3d88;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1420ffe8 >>> 0);
    stepOne();
  });
  it('[83988] PC 0x00003d8c instr 0x00000000', () => {
    const pc = 0x3d8c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83989] PC 0x00003d2c instr 0x8e050000', () => {
    const pc = 0x3d2c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8e050000 >>> 0);
    stepOne();
  });
  it('[83990] PC 0x00003d30 instr 0x00000000', () => {
    const pc = 0x3d30;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83991] PC 0x00003d34 instr 0x10a0000c', () => {
    const pc = 0x3d34;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x10a0000c >>> 0);
    stepOne();
  });
  it('[83992] PC 0x00003d38 instr 0x00000000', () => {
    const pc = 0x3d38;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x0 >>> 0);
    stepOne();
  });
  it('[83993] PC 0x00003d68 instr 0x3c090000', () => {
    const pc = 0x3d68;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x3c090000 >>> 0);
    stepOne();
  });
  it('[83994] PC 0x00003d6c instr 0x8d297200', () => {
    const pc = 0x3d6c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x8d297200 >>> 0);
    stepOne();
  });
  it('[83995] PC 0x00003d70 instr 0x26100050', () => {
    const pc = 0x3d70;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x26100050 >>> 0);
    stepOne();
  });
  it('[83996] PC 0x00003d74 instr 0x00095080', () => {
    const pc = 0x3d74;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x95080 >>> 0);
    stepOne();
  });
  it('[83997] PC 0x00003d78 instr 0x01495021', () => {
    const pc = 0x3d78;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x1495021 >>> 0);
    stepOne();
  });
  it('[83998] PC 0x00003d7c instr 0x000a5100', () => {
    const pc = 0x3d7c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xa5100 >>> 0);
    stepOne();
  });
  it('[83999] PC 0x00003d80 instr 0x022a5821', () => {
    const pc = 0x3d80;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x22a5821 >>> 0);
    stepOne();
  });
  it('[84000] PC 0x00003d84 instr 0x020b082b', () => {
    const pc = 0x3d84;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x20b082b >>> 0);
    stepOne();
  });
});
