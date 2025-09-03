import { describe, it } from 'vitest';
import { PSXSystem } from '@ai-psx/core';
import type { CPUState } from '@ai-psx/cpu';
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';

const readBIOS = (): Uint8Array => {
  const names = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  for (const n of names) { try { return new Uint8Array(readFileSync(n)); } catch {} }
  throw new Error('Missing BIOS at repo root');
};

const hex = (v: number, w = 8) => (v >>> 0).toString(16).padStart(w, '0');

// Simple ring buffer to retain the last N strings
const makeRing = (cap: number) => {
  const buf = new Array<string>(cap);
  let head = 0, len = 0;
  return {
    push(s: string) { buf[head] = s; head = (head + 1) % cap; if (len < cap) len++; },
    dump(): string[] { const out: string[] = []; for (let i = 0; i < len; i++) out.push(buf[(head - len + i + cap) % cap]!); return out; },
    size(): number { return len; },
  };
};

// Interesting PC windows to capture full CPU regs around the seed/clear logic
const inInterestingPC = (pc: number): boolean => {
  pc >>>= 0;
  // Around clear/loop
  if (pc >= 0xbfc01900 && pc <= 0xbfc01b00) return true;
  // Around seed store
  if (pc >= 0xbfc04280 && pc <= 0xbfc04320) return true;
  // Around jr $t2 to 0xB0
  if (pc >= 0xbfc0d990 && pc <= 0xbfc0d9b0) return true;
  // Around dispatcher area often used for BIOS function sequencing
  if (pc >= 0xbfc06800 && pc <= 0xbfc068a0) return true;
  return false;
};

// Low RAM addresses we care about (A0/B0/C0 entries + dispatchers)
const isStubAddr = (addr: number): boolean => {
  const a = addr >>> 0;
  if (a >= 0x000000a0 && a <= 0x000000cc) return true;
  if (a >= 0x000005c4 && a <= 0x000005dc) return true;
  if (a >= 0x000005e0 && a <= 0x000005fc) return true;
  if (a >= 0x00000600 && a <= 0x0000061c) return true;
  return false;
};

// IO range to observe reads/writes that may affect control flow
const isIO = (addr: number): boolean => {
  const p = addr >>> 0;
  return p >= 0x1f801000 && p <= 0x1f803fff;
};

// Main diagnostic

describe('Trace: investigate BIOS re-seed of 0xB0 stub', () => {
  it('records CPU/mem near seed/clear and b0 changes, and verifies final stub before jump', () => {
    const psx = new PSXSystem(); psx.loadBIOS(readBIOS());
    psx.cpu.s.pc = 0xbfc00000 >>> 0; psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

    const cpuLog = 'trace-b0-cpu.log';
    const memLog = 'trace-b0-mem.log';
    const evtLog = 'trace-b0-events.log';
    writeFileSync(cpuLog, '');
    writeFileSync(memLog, '');
    writeFileSync(evtLog, '');

    // Keep the last N instruction summaries (pc/instr) regardless of PC window
    const recentCpu = makeRing(100000);
    // Keep the last N IO/mem trace lines to focus on the final window prior to the jump
    const recentMem = makeRing(50000);

    let curPC = 0 >>> 0;
    psx.cpu.setTracer((pc: number, instr: number, s: CPUState) => {
      curPC = pc >>> 0;
      // Always capture a light-weight instruction summary into a ring buffer, including $t2 for base diagnostics
      const t2 = s.regs[10] >>> 0;
      recentCpu.push(`pc=${hex(pc)} instr=${hex(instr)} t2=${hex(t2)}`);
      // Additionally, dump full regs for known interesting windows
      if (inInterestingPC(curPC)) {
        const names = ['r0','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7','s0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
        const regs = names.map((n, i) => `${n}=${hex(s.regs[i])}`).join(' ');
        const line = `pc=${hex(pc)} instr=${hex(instr)} hi=${hex(s.hi)} lo=${hex(s.lo)} ${regs}`;
        appendFileSync(cpuLog, line + '\n');
      }
    });

    // Memory trace: IO reads/writes and writes to low RAM stubs (store into ring, flush at jump)
    psx.enableMemTrace({
      output: (line: string) => {
        recentMem.push(`${line} @pc=${hex(curPC)}`);
      },
      filter: (op, addr) => {
        const isWrite = op === 'w8' || op === 'w16' || op === 'w32';
        const a = addr >>> 0;
        // Capture all writes to low RAM up to 0x3000 (covers A0/B0/C0, dispatchers, B0 table region ~0x0874, and small stubs like 0x0f2c)
        if (isWrite && (a <= 0x3000 || isStubAddr(a))) return true;
        // Also capture IO reads/writes
        if (isIO(a)) return true;
        return false;
      },
    });

    let lastB0 = psx.as.read32(0x000000b0) >>> 0;
    const maxSteps = 20_000_000; // generous bound to pass through both phases
    let seenSeed = false;
    let seenClearAfterSeed = false;
    let seenReSeedAfterClear = false;

    // Track the last write-to-0xB0 event prior to the eventual jump
    let lastWriteToB0Val = lastB0 >>> 0;
    let lastWriteToB0At = 0 >>> 0;

    for (let i = 0; i < maxSteps; i++) {
      const pc = psx.cpu.s.pc >>> 0;
      const instr = psx.as.read32(pc) >>> 0;
      psx.cpu.step();
      const nowB0 = psx.as.read32(0x000000b0) >>> 0;
      if (nowB0 !== lastB0) {
        appendFileSync(evtLog, `b0-change pc=${hex(pc)} instr=${hex(instr)} from=${hex(lastB0)} to=${hex(nowB0)}\n`);
        lastWriteToB0Val = nowB0 >>> 0;
        lastWriteToB0At = pc >>> 0;
        if (nowB0 === 0x3c080000 >>> 0) {
          if (!seenSeed) seenSeed = true;
          if (seenClearAfterSeed) seenReSeedAfterClear = true;
        } else if (nowB0 === 0 && seenSeed) {
          seenClearAfterSeed = true;
        }
        lastB0 = nowB0;
      }
      // Stop after we observed seed -> clear -> seed, or after jr $t2 window lands into the stub
      if (seenReSeedAfterClear) break;
      if (pc === (0xbfc0d9a4 >>> 0)) {
        // Execute delay slot and perform the jump
        psx.cpu.step();
        psx.cpu.step();
        // We're now at 0xB0. Assert the stub is in place and the last write to 0xB0 was a seed.
        const fetched = psx.as.read32(0x000000b0) >>> 0;
        // Flush recent CPU/mem windows to files for post-mortem analysis
        const cpuDump = recentCpu.dump().join('\n') + '\n';
        const memDump = recentMem.dump().join('\n') + '\n';
        appendFileSync(cpuLog, `\n=== Last ${recentCpu.size()} instructions before/at jump ===\n` + cpuDump);
        appendFileSync(memLog, `\n=== Last ${recentMem.size()} mem ops before/at jump ===\n` + memDump);
        appendFileSync(evtLog, `at-jump pc=${hex(psx.cpu.s.pc)} b0=${hex(fetched)} lastWriteToB0Val=${hex(lastWriteToB0Val)} lastWriteAt=${hex(lastWriteToB0At)}\n`);
        if (fetched !== (0x3c080000 >>> 0)) {
          throw new Error(`Expected 0xB0 to contain 0x3c080000 at jump, found ${hex(fetched)}. Last write to 0xB0 was ${hex(lastWriteToB0Val)} at pc=${hex(lastWriteToB0At)}. See ${evtLog}, ${memLog}, ${cpuLog} for details.`);
        }
        break;
      }
    }
  });
});

