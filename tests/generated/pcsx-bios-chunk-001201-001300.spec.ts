import { describe, it, expect, beforeAll } from 'vitest';
import { initOnce, getPC, readU32, getRegU32, stepOne } from './_harness';

describe('PCSX-Redux BIOS trace: chunk 1201-1300', () => {
  beforeAll(() => initOnce());
  it('[1201] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[1202] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[1203] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[1204] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[1205] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[1206] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[1207] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[1208] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[1209] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[1210] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[1211] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[1212] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[1213] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[1214] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[1215] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[1216] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[1217] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[1218] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[1219] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[1220] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[1221] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[1222] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[1223] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[1224] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[1225] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[1226] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[1227] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[1228] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[1229] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[1230] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[1231] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[1232] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[1233] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[1234] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[1235] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[1236] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[1237] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[1238] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[1239] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[1240] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[1241] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[1242] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[1243] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[1244] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[1245] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[1246] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[1247] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[1248] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[1249] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[1250] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[1251] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[1252] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[1253] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[1254] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[1255] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[1256] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[1257] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[1258] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[1259] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[1260] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[1261] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[1262] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[1263] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[1264] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[1265] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[1266] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
  it('[1267] PC 0xbfc00308 instr 0xad400068', () => {
    const pc = 0xbfc00308;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400068 >>> 0);
    stepOne();
  });
  it('[1268] PC 0xbfc0030c instr 0xad40006c', () => {
    const pc = 0xbfc0030c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40006c >>> 0);
    stepOne();
  });
  it('[1269] PC 0xbfc00310 instr 0xad400070', () => {
    const pc = 0xbfc00310;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400070 >>> 0);
    stepOne();
  });
  it('[1270] PC 0xbfc00314 instr 0xad400074', () => {
    const pc = 0xbfc00314;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400074 >>> 0);
    stepOne();
  });
  it('[1271] PC 0xbfc00318 instr 0xad400078', () => {
    const pc = 0xbfc00318;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400078 >>> 0);
    stepOne();
  });
  it('[1272] PC 0xbfc0031c instr 0xad40007c', () => {
    const pc = 0xbfc0031c;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40007c >>> 0);
    stepOne();
  });
  it('[1273] PC 0xbfc00320 instr 0x154bffdf', () => {
    const pc = 0xbfc00320;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x154bffdf >>> 0);
    stepOne();
  });
  it('[1274] PC 0xbfc00324 instr 0x214a0080', () => {
    const pc = 0xbfc00324;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0x214a0080 >>> 0);
    stepOne();
  });
  it('[1275] PC 0xbfc002a0 instr 0xad400000', () => {
    const pc = 0xbfc002a0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400000 >>> 0);
    stepOne();
  });
  it('[1276] PC 0xbfc002a4 instr 0xad400004', () => {
    const pc = 0xbfc002a4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400004 >>> 0);
    stepOne();
  });
  it('[1277] PC 0xbfc002a8 instr 0xad400008', () => {
    const pc = 0xbfc002a8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400008 >>> 0);
    stepOne();
  });
  it('[1278] PC 0xbfc002ac instr 0xad40000c', () => {
    const pc = 0xbfc002ac;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40000c >>> 0);
    stepOne();
  });
  it('[1279] PC 0xbfc002b0 instr 0xad400010', () => {
    const pc = 0xbfc002b0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400010 >>> 0);
    stepOne();
  });
  it('[1280] PC 0xbfc002b4 instr 0xad400014', () => {
    const pc = 0xbfc002b4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400014 >>> 0);
    stepOne();
  });
  it('[1281] PC 0xbfc002b8 instr 0xad400018', () => {
    const pc = 0xbfc002b8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400018 >>> 0);
    stepOne();
  });
  it('[1282] PC 0xbfc002bc instr 0xad40001c', () => {
    const pc = 0xbfc002bc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40001c >>> 0);
    stepOne();
  });
  it('[1283] PC 0xbfc002c0 instr 0xad400020', () => {
    const pc = 0xbfc002c0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400020 >>> 0);
    stepOne();
  });
  it('[1284] PC 0xbfc002c4 instr 0xad400024', () => {
    const pc = 0xbfc002c4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400024 >>> 0);
    stepOne();
  });
  it('[1285] PC 0xbfc002c8 instr 0xad400028', () => {
    const pc = 0xbfc002c8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400028 >>> 0);
    stepOne();
  });
  it('[1286] PC 0xbfc002cc instr 0xad40002c', () => {
    const pc = 0xbfc002cc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40002c >>> 0);
    stepOne();
  });
  it('[1287] PC 0xbfc002d0 instr 0xad400030', () => {
    const pc = 0xbfc002d0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400030 >>> 0);
    stepOne();
  });
  it('[1288] PC 0xbfc002d4 instr 0xad400034', () => {
    const pc = 0xbfc002d4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400034 >>> 0);
    stepOne();
  });
  it('[1289] PC 0xbfc002d8 instr 0xad400038', () => {
    const pc = 0xbfc002d8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400038 >>> 0);
    stepOne();
  });
  it('[1290] PC 0xbfc002dc instr 0xad40003c', () => {
    const pc = 0xbfc002dc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40003c >>> 0);
    stepOne();
  });
  it('[1291] PC 0xbfc002e0 instr 0xad400040', () => {
    const pc = 0xbfc002e0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400040 >>> 0);
    stepOne();
  });
  it('[1292] PC 0xbfc002e4 instr 0xad400044', () => {
    const pc = 0xbfc002e4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400044 >>> 0);
    stepOne();
  });
  it('[1293] PC 0xbfc002e8 instr 0xad400048', () => {
    const pc = 0xbfc002e8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400048 >>> 0);
    stepOne();
  });
  it('[1294] PC 0xbfc002ec instr 0xad40004c', () => {
    const pc = 0xbfc002ec;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40004c >>> 0);
    stepOne();
  });
  it('[1295] PC 0xbfc002f0 instr 0xad400050', () => {
    const pc = 0xbfc002f0;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400050 >>> 0);
    stepOne();
  });
  it('[1296] PC 0xbfc002f4 instr 0xad400054', () => {
    const pc = 0xbfc002f4;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400054 >>> 0);
    stepOne();
  });
  it('[1297] PC 0xbfc002f8 instr 0xad400058', () => {
    const pc = 0xbfc002f8;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400058 >>> 0);
    stepOne();
  });
  it('[1298] PC 0xbfc002fc instr 0xad40005c', () => {
    const pc = 0xbfc002fc;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad40005c >>> 0);
    stepOne();
  });
  it('[1299] PC 0xbfc00300 instr 0xad400060', () => {
    const pc = 0xbfc00300;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400060 >>> 0);
    stepOne();
  });
  it('[1300] PC 0xbfc00304 instr 0xad400064', () => {
    const pc = 0xbfc00304;
    expect(getPC()).toBe(pc >>> 0);
    expect(readU32(pc) >>> 0).toBe(0xad400064 >>> 0);
    stepOne();
  });
});
