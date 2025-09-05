import { describe, it, expect } from 'vitest';
import { parseEmuLine, parseEmuLog } from '../src/parser/emu.js';
import { parsePcsxLog } from '../src/parser/pcsx.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const tmpFile = (content: string): string => {
  const p = path.join(os.tmpdir(), `trace-${Math.random().toString(36).slice(2)}.log`);
  fs.writeFileSync(p, content, 'utf8');
  return p;
};

describe('parseEmuLine', () => {
  it('parses redux CPU line', () => {
    const ev = parseEmuLine('80010000 3C010000: lui $at,0000($zero)');
    expect(ev).toBeTruthy();
    // @ts-expect-error runtime check
    expect(ev!.kind).toBe('cpu');
    // @ts-expect-error runtime check
    expect(ev!.pc).toBe(0x80010000 >>> 0);
    // @ts-expect-error runtime check
    expect(ev!.instr).toBe(0x3c010000 >>> 0);
  });

  it('parses redux MEM write with pc', () => {
    const ev = parseEmuLine('MEM w32 [1f801010] = 00000000 @pc=80010000');
    expect(ev).toBeTruthy();
    // @ts-expect-error runtime check
    expect(ev!.kind).toBe('mem');
    // @ts-expect-error runtime check
    expect(ev!.mem.op).toBe('w');
    // @ts-expect-error runtime check
    expect(ev!.mem.size).toBe(4);
    // @ts-expect-error runtime check
    expect(ev!.mem.addr).toBe(0x1f801010 >>> 0);
    // @ts-expect-error runtime check
    expect(ev!.mem.value).toBe(0);
    // @ts-expect-error runtime check
    expect(ev!.pc).toBe(0x80010000 >>> 0);
  });
});

describe('parse logs end-to-end', () => {
  it('parses PCSX log format', () => {
    const pcsx = [
      '80010000 00000000: nop',
      '80010004 3C010000: lui $at,0000($zero) $zero(00000000)'
    ].join('\n');
    const p = tmpFile(pcsx);
    const s = parsePcsxLog(p);
    expect(s.source).toBe('pcsx');
    expect(s.events.length).toBe(2);
    expect(s.events[0].pc).toBe(0x80010000 >>> 0);
    expect(s.events[1].instr).toBe(0x3c010000 >>> 0);
  });

  it('parses EMU log format', () => {
    const emu = [
      '80010000 00000000: nop',
      'MEM r16 [1f801070] -> 0001 @pc=80010000'
    ].join('\n');
    const p = tmpFile(emu);
    const s = parseEmuLog(p);
    expect(s.source).toBe('emu');
    expect(s.events.length).toBe(2);
    expect(s.events[0].pc).toBe(0x80010000 >>> 0);
    // @ts-expect-error runtime check
    expect(s.events[1].mem.op).toBe('r');
  });
});
