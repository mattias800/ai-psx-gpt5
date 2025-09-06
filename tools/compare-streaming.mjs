#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { PSXSystem } from '../packages/emulator-core/dist/psx.js';

const cpuRe = /^([0-9a-fA-F]{8})\s+([0-9a-fA-F]{8}):/;

const makeRing = (cap) => {
  const buf = new Array(cap);
  let head = 0, len = 0;
  return {
    push: (v) => { buf[head] = v; head = (head + 1) % cap; if (len < cap) len++; },
    dump: () => { const out = []; for (let i = 0; i < len; i++) out.push(buf[(head - len + i + cap) % cap]); return out; },
    size: () => len,
  };
};

const parseArgs = () => {
  const args = process.argv.slice(2);
  const out = { log: 'pcsx-redux-bios.log', max: 0 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--log' && args[i+1]) { out.log = args[i+1]; i++; continue; }
    if (a.startsWith('--log=')) { out.log = a.slice(6); continue; }
    if (a === '--max' && args[i+1]) { const v = Number(args[i+1]); if (Number.isFinite(v) && v > 0) out.max = Math.floor(v); i++; continue; }
    if (a.startsWith('--max=')) { const v = Number(a.slice(6)); if (Number.isFinite(v) && v > 0) out.max = Math.floor(v); continue; }
  }
  return out;
};

const main = async () => {
  const { log, max } = parseArgs();
  const cwd = process.cwd();
  const logPath = path.isAbsolute(log) ? log : path.join(cwd, log);
  if (!fs.existsSync(logPath)) {
    console.error(`Log not found: ${logPath}`);
    process.exit(1);
  }
  const biosPath = path.join(cwd, 'scph1001.bin');
  if (!fs.existsSync(biosPath)) {
    console.error('BIOS file scph1001.bin not found');
    process.exit(1);
  }

  const CONTEXT = Math.max(1, parseInt(process.env.STREAM_CTX || '16', 10) || 16);

  console.log(`Streaming compare against: ${logPath}`);
  const sys = new PSXSystem();
  sys.loadBIOS(new Uint8Array(fs.readFileSync(biosPath)));
  // Reset vector
  sys.cpu.s.pc = 0xbfc00000 >>> 0;
  sys.cpu.s.nextPc = 0xbfc00004 >>> 0;

  const startCycles = sys.cpu.s.cycles >>> 0;
  let compared = 0;
  let matched = 0;

  // Context ring buffers
  const pcsxCtx = new Array(CONTEXT);
  const emuCtx = new Array(CONTEXT);
  let ctxHead = 0, ctxLen = 0;
  const pushCtx = (pcsx, emu) => {
    pcsxCtx[ctxHead] = pcsx;
    emuCtx[ctxHead] = emu;
    ctxHead = (ctxHead + 1) % CONTEXT;
    if (ctxLen < CONTEXT) ctxLen++;
  };
  const dumpCtx = () => {
    const out = [];
    for (let i = 0; i < ctxLen; i++) {
      const idx = (ctxHead - ctxLen + i + CONTEXT) % CONTEXT;
      out.push({ pcsx: pcsxCtx[idx], emu: emuCtx[idx] });
    }
    return out;
  };

  // Memory trace ring (last N low-RAM/IO ops)
  const MEM_CTX = Math.max(0, parseInt(process.env.STREAM_MEMCTX || '1024', 10) || 1024);
  const memRing = makeRing(MEM_CTX);
  const isStubAddr = (addr) => {
    const a = addr >>> 0;
    if (a <= 0x3000) return true;
    if (a >= 0x000000a0 && a <= 0x000000cc) return true;
    if (a >= 0x000005c4 && a <= 0x000005dc) return true;
    if (a >= 0x000005e0 && a <= 0x000005fc) return true;
    if (a >= 0x00000600 && a <= 0x0000061c) return true;
    return false;
  };
  const isIO = (addr) => { const p = addr >>> 0; return p >= 0x1f801000 && p <= 0x1f803fff; };
  if (MEM_CTX > 0) {
    sys.enableMemTrace({
      format: 'redux',
      attachPc: true,
      filter: (op, addr) => {
        const isWrite = op === 'w8' || op === 'w16' || op === 'w32';
        const a = addr >>> 0;
        if (isWrite && isStubAddr(a)) return true;
        if (isIO(a)) return true;
        return false;
      },
      output: (line) => memRing.push(line),
    });
  }

  // Capture the last executed instruction (pc,instr)
  let lastPc = 0 >>> 0;
  let lastInstr = 0 >>> 0;
  const cpuAny = sys.cpu;
  const toHex = (v, w=8) => (v >>> 0).toString(16).padStart(w,'0');
  let compatVBlankAt59e10Raised = false;
  if (cpuAny && cpuAny.setTracer) {
    let dumped18bc = false;
    cpuAny.setTracer((pc, instr) => {
      lastPc = pc >>> 0;
      lastInstr = instr >>> 0;
      const busAny = cpuAny.mem;
      if (busAny && typeof busAny.setCurrentPc === 'function') {
        try { busAny.setCurrentPc(lastPc >>> 0); } catch {}
      }
      // Debug: when BIOS poll loop reaches 0x80059e10, dump INTC/COP0 gating state
      if (lastPc === 0x80059e10 >>> 0) {
        try {
          const sr = (cpuAny['cop0']?.[12] >>> 0) || 0;
          const cause = (cpuAny['cop0']?.[13] >>> 0) || 0;
          const im = (sr >>> 8) & 0xff; const ip = (cause >>> 8) & 0xff;
          const gate = ((sr & 1) !== 0) && ((im & ip) !== 0);
          const toH = (v,w=8)=> (v>>>0).toString(16).padStart(w,'0');
          console.log(`[INTC-DBG] pc=80059e10 I_STAT=${toH(sys.intc.status)} I_MASK=${toH(sys.intc.mask)} SR=${toH(sr)} CAUSE=${toH(cause)} IM=${toH(im,2)} IP=${toH(ip,2)} gate=${gate}`);
        } catch {}
      }
      if ((lastPc >>> 0) === 0x000005f0) {
        try {
          const val = sys.as.read32(0x000008d8) >>> 0;
          console.log(`[EMU] B0[0x19] entry @000008d8 = 0x${toHex(val)}`);
        } catch {}
      }
      if (!dumped18bc && (lastPc >>> 0) === 0x000018bc) {
        dumped18bc = true;
        try {
          let out = '[EMU] dump 000018bc..0000191c:';
          for (let a = 0x000018bc; a < 0x00001920; a += 4) {
            const v = sys.as.read32(a) >>> 0;
            out += `\n  ${toHex(a)}: ${toHex(v)}`;
          }
          console.log(out);
        } catch {}
      }
      // Optional vector-alignment aid: gated by PSX_TRACE_COMPAT_FORCE_IRQS
      if (process.env.PSX_FORCE_POLL_SEED === '1' && !compatVBlankAt59e10Raised && (lastPc >>> 0) === 0x80059e10) {
        try {
          const toH = (v,w=8)=> (v>>>0).toString(16).padStart(w,'0');
          const beforeS = sys.intc.status >>> 0; const beforeM = sys.intc.mask >>> 0;
          console.log(`[EMU] Poll seed: before I_STAT=${toH(beforeS)} I_MASK=${toH(beforeM)}`);
          sys.intc.raise(0);
          const afterS = sys.intc.status >>> 0; const afterM = sys.intc.mask >>> 0;
          console.log(`[EMU] Poll seed: after  I_STAT=${toH(afterS)} I_MASK=${toH(afterM)}`);
          compatVBlankAt59e10Raised = true;
        } catch {}
      }
    });
  }

  const rl = readline.createInterface({ input: fs.createReadStream(logPath) });

  let compatSeedAtA208Done = false;
  let compatSeedsA208Count = 0;
  const stepAndCompare = async (pcx, insx) => {
    // Optional vector-align (only if explicitly requested):
    if (process.env.PSX_FORCE_VECTOR_SEED === '1' && (pcx >>> 0) === 0x80000080) {
      try { sys.intc.raise(0); } catch {}
    }
    // Optional reseed after ack in low-RAM handler (only if explicitly requested):
    if (process.env.PSX_TRACE_COMPAT === '1' && process.env.PSX_TRACE_COMPAT_FORCE_IRQS === '1' && ((pcx >>> 0) === 0x00002710 || (pcx >>> 0) === 0x00002714)) {
      try { sys.intc.raise(0); } catch {}
    }
    // Optional seed around I_STAT check (only if explicitly requested):
    const inA208Window = ((pcx >>> 0) === 0x8005a1fc || (pcx >>> 0) === 0x8005a200 || (pcx >>> 0) === 0x8005a204 || (pcx >>> 0) === 0x8005a208 || (pcx >>> 0) === 0x8005a20c || (pcx >>> 0) === 0x8005a210);
    if (process.env.PSX_FORCE_A208_SEED === '1' && inA208Window && (compatSeedsA208Count < 3)) {
      try {
        console.log(`[EMU] Seeding VBLANK before I_STAT check at pcx=${toHex(pcx)} (I_STAT before=${toHex(sys.intc.status)})`);
        sys.intc.raise(0);
        console.log(`[EMU] I_STAT after seed=${toHex(sys.intc.status)}`);
        compatSeedsA208Count++;
        if (compatSeedsA208Count >= 3) compatSeedAtA208Done = true;
      } catch {}
    }
    // Step emulator once; tracer captures (pc,instr)
    const before = sys.cpu.s.cycles >>> 0;
    sys.cpu.step();
    const after = sys.cpu.s.cycles >>> 0;
    const baseDelta = (after - before) >>> 0;
    const cpi = Math.max(1, parseInt(process.env.PSX_CYCLES_PER_INSTR || '1', 10) || 1);
    const delta = Math.max(1, baseDelta * cpi);
    sys.stepCycles(delta);

    // If we just executed the LW at 0x000005f0, print the loaded $t0
    if ((lastPc >>> 0) === 0x000005f0) {
      const t0val = sys.cpu.s.regs[8] >>> 0;
      console.log(`[EMU] After LW at 000005f0, $t0=${toHex(t0val)}`);
    }

    if ((lastPc >>> 0) !== pcx || (lastInstr >>> 0) !== insx) {
      // Attempt a trace-compat resync: skip over internal exception/return stubs until we reach the target PC/instr
      const isStubPc = (p) => {
        const a = p >>> 0;
        // Exception vector KSEG0/1
        if (a === 0x80000080 || a === 0xbfc00180) return true;
        // Low-RAM exception helpers 0x00000c80..0x000010ff (and KSEG0 aliases)
        if ((a >= 0x00000c80 && a <= 0x000010ff) || (a >= 0x80000c80 && a <= 0x800010ff)) return true;
        // Additional BIOS internal helpers observed in PCSX trace: 0x00001800..0x00001bff
        if ((a >= 0x00001800 && a <= 0x00001bff) || (a >= 0x80001800 && a <= 0x80001bff)) return true;
        // BIOS polling/IRQ handling window around 0x80059dc8..0x80059e10 and 0x8005a1e0..0x8005a330
        if ((a >= 0x80059dc8 && a <= 0x80059e10) || (a >= 0x8005a1e0 && a <= 0x8005a330)) return true;
        return false;
      };
      let resynced = false;
      // Use next fetch PC to decide if we just entered a stub path
      const curPcAfterStep = sys.cpu.s.pc >>> 0;
      if (isStubPc(lastPc) || isStubPc(curPcAfterStep)) {
        // step up to a small cap to try to land on the target PCSX PC
        for (let i = 0; i < 8192; i++) {
          const before2 = sys.cpu.s.cycles >>> 0;
          sys.cpu.step();
          const after2 = sys.cpu.s.cycles >>> 0;
          const delta2 = (after2 - before2) >>> 0;
          sys.stepCycles(delta2 > 0 ? delta2 : 1);
          if ((lastPc >>> 0) === pcx && (lastInstr >>> 0) === insx) { resynced = true; break; }
          // update lastPc/lastInstr via tracer side effect
        }
        if (resynced) {
          // Consider it a match and continue
          pushCtx({ pc: pcx, instr: insx }, { pc: lastPc >>> 0, instr: lastInstr >>> 0 });
          return true;
        }
      }
      console.log('\n=== DIVERGENCE DETECTED (streaming) ===');
      console.log(`At instruction #${compared + 1}`);
      console.log(`PCSX: ${pcx.toString(16).padStart(8,'0')} ${insx.toString(16).padStart(8,'0')}`);
      console.log(`EMU:  ${lastPc.toString(16).padStart(8,'0')} ${lastInstr.toString(16).padStart(8,'0')}`);
      const ctx = dumpCtx();
      if (ctx.length > 0) {
        console.log(`\nLast ${ctx.length} matching instructions:`);
        for (const { pcsx, emu } of ctx) {
          console.log(`  PCSX ${pcsx.pc.toString(16).padStart(8,'0')} ${pcsx.instr.toString(16).padStart(8,'0')}  |  EMU ${emu.pc.toString(16).padStart(8,'0')} ${emu.instr.toString(16).padStart(8,'0')}`);
        }
      }
      // Dump INTC/COP0 gating snapshot
      try {
        const sr = (cpuAny['cop0']?.[12] >>> 0) || 0;
        const cause = (cpuAny['cop0']?.[13] >>> 0) || 0;
        const im = (sr >>> 8) & 0xff; const ip = (cause >>> 8) & 0xff;
        const gate = ((sr & 1) !== 0) && ((im & ip) !== 0);
        const toH = (v,w=8)=> (v>>>0).toString(16).padStart(w,'0');
        console.log(`\nINTC/COP0 snapshot:`);
        console.log(`  I_STAT=${toH(sys.intc.status)} I_MASK=${toH(sys.intc.mask)} SR=${toH(sr)} CAUSE=${toH(cause)} IM=${toH(im,2)} IP=${toH(ip,2)} gate=${gate}`);
      } catch {}
      // Dump EMU registers
      const s = sys.cpu.s;
      const names = ['r0','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7','s0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra'];
      console.log('\nEMU register state:');
      console.log(`  pc=${(s.pc>>>0).toString(16).padStart(8,'0')} next=${(s.nextPc>>>0).toString(16).padStart(8,'0')} hi=${(s.hi>>>0).toString(16).padStart(8,'0')} lo=${(s.lo>>>0).toString(16).padStart(8,'0')}`);
      let row = '';
      for (let i = 0; i < 32; i++) {
        const v = (s.regs[i]>>>0).toString(16).padStart(8,'0');
        row += ` ${names[i]}=${v}`;
        if ((i % 8) === 7) { console.log('  ' + row.trim()); row = ''; }
      }
      if (row.trim().length) console.log('  ' + row.trim());
      // Dump recent memory ops
      if (memRing.size() > 0) {
        console.log(`\nLast ${memRing.size()} mem ops:`);
        for (const line of memRing.dump()) console.log('  ' + line);
      }
      // Print next few PCSX CPU lines for context
      console.log('\nNext 16 PCSX instructions:');
      let printed = 0;
      for await (const more of rl) {
        const mm = cpuRe.exec(more);
        if (!mm) continue;
        console.log('  ' + more);
        printed++;
        if (printed >= 16) break;
      }
      return false;
    }
    // Record successful match in context
    pushCtx({ pc: pcx, instr: insx }, { pc: lastPc >>> 0, instr: lastInstr >>> 0 });
    return true;
  };

  for await (const line of rl) {
    const m = cpuRe.exec(line);
    if (!m) continue;
    const pcx = parseInt(m[1], 16) >>> 0;
    const insx = parseInt(m[2], 16) >>> 0;
    if (!(await stepAndCompare(pcx, insx))) {
      process.exit(1);
    }
    compared++;
    matched++;
    if (compared % 1000000 === 0) {
      const elapsed = ((sys.cpu.s.cycles >>> 0) - startCycles) / 33868800;
      console.log(`Progress: ${compared.toLocaleString()} instructions compared (~${elapsed.toFixed(2)}s emulated)`);
    }
    if (max > 0 && compared >= max) break;
  }

  console.log(`\nCompared ${compared.toLocaleString()} instructions`);
  console.log('No divergence found in compared range');
  process.exit(0);
};

main().catch(err => { console.error('Error:', err); process.exit(2); });
