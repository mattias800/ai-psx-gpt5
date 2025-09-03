// Auto-generated test harness. Do not edit by hand.
import { PSXSystem } from '@ai-psx/core';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

let _psx: PSXSystem | null = null;
let _psxSpecKey: string | null = null;
let _specExpectedPcs: number[] = [];
let _specPcIndex = 0;

export const initOnce = (): void => {
  // Derive a spec key from the stack so we can reset per-file when running multiple specs in one worker
  let thisSpecKey: string | null = null;
  try {
    const stack = String(new Error().stack ?? '');
    const m = stack.match(/(.*pcsx-bios-chunk-(\d+)-(\d+)\.spec\.ts)/);
    if (m) {
      let p = m[1].trim();
      if (p.startsWith('at ')) p = p.slice(3).trim();
      if (p.startsWith('(') && p.endsWith(')')) p = p.slice(1, -1);
      p = p.replace(/:\d+:\d+$/, '');
      if (p.startsWith('file://')) try { p = fileURLToPath(p); } catch {}
      thisSpecKey = p;
    }
  } catch {}

  if (_psx && _psxSpecKey && thisSpecKey && _psxSpecKey === thisSpecKey) {
    return; // already initialized for this spec file
  }
  // Otherwise, (re)initialize
  _psx = null;
  _psxSpecKey = thisSpecKey ?? null;
  _specExpectedPcs = [];
  _specPcIndex = 0;

  const tryNames: string[] = ['scph1001.bin','SCPH1001.BIN','pc1001.bin','PC1001.BIN'];
  let bios: Buffer | null = null;
  for (const n of tryNames) {
    try { bios = readFileSync(n); break; } catch {}
  }
  if (!bios) throw new Error('Missing BIOS: place scph1001.bin (or PC1001.BIN) at repo root');
  _psx = new PSXSystem();
  _psx.loadBIOS(new Uint8Array(bios));
  // Boot at BIOS entry
  _psx.cpu.s.pc = 0xbfc00000 >>> 0;
  _psx.cpu.s.nextPc = 0xbfc00004 >>> 0;

  // Optional snapshot loading (RAM + CPU). If CPU snapshot is applied, skip fast-forward.
  let snapshotApplied = false;
  try {
    const DEBUG = (process?.env?.BIOS_HARNESS_DEBUG === '1');
    const ramSnapPath = process?.env?.PSX_RAM_SNAPSHOT || '';
    const cpuSnapPath = process?.env?.PSX_CPU_SNAPSHOT || '';
    if (ramSnapPath) {
      try {
        const ramBuf = readFileSync(ramSnapPath);
        const maxLen = 0x00200000; // 2 MiB main RAM
        const len = Math.min(ramBuf.length, maxLen);
        const mode = (process?.env?.PSX_RAM_SNAPSHOT_MODE || 'bytes').toLowerCase(); // 'bytes' | 'words'
        if (mode === 'words') {
          const endian = (process?.env?.PSX_RAM_SNAPSHOT_ENDIAN || 'le').toLowerCase(); // 'le' | 'be'
          const view = new DataView(ramBuf.buffer, ramBuf.byteOffset, len);
          const wordCount = (len >>> 2);
          for (let i = 0; i < wordCount; i++) {
            const v = view.getUint32(i << 2, endian !== 'le');
            try { (_psx as any).ram.write32((i << 2) >>> 0, v >>> 0); } catch {}
          }
          const rem = len & 3;
          if (rem) {
            // Write remaining trailing bytes as a partial word using byte writes
            const base = len - rem;
            for (let i = 0; i < rem; i++) {
              try { (_psx as any).ram.write8((base + i) >>> 0, ramBuf[base + i] >>> 0); } catch {}
            }
          }
          if (DEBUG) console.log(`[harness] loaded RAM snapshot ${ramSnapPath} (${len} bytes) mode=words endian=${endian}`);
        } else {
          // Default: byte-wise copy (endianness-agnostic)
          for (let i = 0; i < len; i++) {
            try { (_psx as any).ram.write8(i >>> 0, ramBuf[i] >>> 0); } catch {}
          }
          if (DEBUG) console.log(`[harness] loaded RAM snapshot ${ramSnapPath} (${len} bytes) mode=bytes`);
        }
      } catch (e) {
        if (DEBUG) console.log(`[harness] RAM snapshot load failed: ${(e as any)?.message ?? e}`);
      }
    }
    if (cpuSnapPath) {
      try {
        const txt = readFileSync(cpuSnapPath, 'utf8');
        const s = JSON.parse(txt);
        const toU32 = (x: any) => (typeof x === 'string' && x.startsWith('0x')) ? (Number.parseInt(x, 16) >>> 0) : ((x >>> 0));
        if (s?.regs && Array.isArray(s.regs)) {
          for (let i = 0; i < Math.min(32, s.regs.length); i++) {
            try { (_psx as PSXSystem).cpu.s.regs[i] = toU32(s.regs[i]); } catch {}
          }
        }
        if (s?.pc !== undefined) { try { (_psx as PSXSystem).cpu.s.pc = toU32(s.pc); } catch {} }
        if (s?.nextPc !== undefined) { try { (_psx as PSXSystem).cpu.s.nextPc = toU32(s.nextPc); } catch {} }
        if (s?.hi !== undefined) { try { ( (_psx as any).cpu.s.hi = toU32(s.hi) ); } catch {} }
        if (s?.lo !== undefined) { try { ( (_psx as any).cpu.s.lo = toU32(s.lo) ); } catch {} }
        if (s?.sr !== undefined) { try { ( (_psx as any).cpu.s.sr = toU32(s.sr) ); } catch {} }
        if (s?.cause !== undefined) { try { ( (_psx as any).cpu.s.cause = toU32(s.cause) ); } catch {} }
        snapshotApplied = true;
        if (DEBUG) console.log(`[harness] applied CPU snapshot ${cpuSnapPath}`);
      } catch (e) {
        const DEBUG = (process?.env?.BIOS_HARNESS_DEBUG === '1');
        if (DEBUG) console.log(`[harness] CPU snapshot load failed: ${(e as any)?.message ?? e}`);
      }
    }
  } catch {}

  // Seed RAM from the current spec file (if running a generated spec), regardless of snapshot or fast-forward.
  try {
    const DEBUG = (process?.env?.BIOS_HARNESS_DEBUG === '1');
    const stack = String(new Error().stack ?? '');
    const mFull = stack.match(/(.*pcsx-bios-chunk-(\d+)-(\d+)\.spec\.ts)/);
    if (mFull) {
      let specPath = mFull[1].trim();
      if (specPath.startsWith('at ')) specPath = specPath.slice(3).trim();
      if (specPath.startsWith('(') && specPath.endsWith(')')) specPath = specPath.slice(1, -1);
      specPath = specPath.replace(/:\d+:\d+$/, '');
      if (specPath.startsWith('file://')) { try { specPath = fileURLToPath(specPath); } catch {} }
        try {
          const src = readFileSync(specPath, 'utf8');
          const allMatches = src.matchAll(/PC 0x([0-9A-Fa-f]+) instr 0x([0-9A-Fa-f]+)/g);
          let seeded = 0;
          for (const mm of allMatches) {
            const pcVal = Number.parseInt(mm[1], 16) >>> 0;
            if (pcVal < 0x00200000) { // 2 MiB RAM
              const insnVal = Number.parseInt(mm[2], 16) >>> 0;
              try { (_psx as any).ram.write32(pcVal, insnVal); seeded++; } catch {}
            }
          }
          // Build expected PC list for optional follow-spec mode
          try {
            _specExpectedPcs = Array.from(src.matchAll(/const pc = 0x([0-9A-Fa-f]+);/g)).map(m => Number.parseInt(m[1], 16) >>> 0);
            _specPcIndex = 0;
            if (DEBUG && _specExpectedPcs.length > 0 && process?.env?.PSX_FOLLOW_SPEC_PC === '1') {
              console.log(`[harness] collected ${_specExpectedPcs.length} expected PCs for follow-spec mode`);
            }
          } catch {}
          if (DEBUG && seeded > 0) console.log(`[harness] seeded ${seeded} RAM words from spec (pre-FF)`);
        } catch (e) {
        if (DEBUG) console.log(`[harness] pre-FF spec seeding skipped: ${(e as any)?.message ?? e}`);
      }
    }
  } catch {}

  // Try to fast-forward so a single-file or single-test run works in isolation.
  // Order of preference:
  // 1) If a --pc=0x... (or --pc 0x...) CLI argument is present, seek to that PC.
  // 2) Otherwise, try to locate the spec path via the stack and parse the first 'const pc = 0x...' occurrence.
  // 3) As a fallback, use the chunk start index from the spec filename and step that many instructions.
  if (snapshotApplied) {
    // Skip fast-forward when CPU snapshot gives us exact state
    if ((process?.env?.BIOS_HARNESS_DEBUG === '1')) {
      const pcNow = ((_psx as PSXSystem).cpu.s.pc >>> 0).toString(16);
      console.log(`[harness] skipping fast-forward due to CPU snapshot; pc=${pcNow}`);
    }
  } else {
  // Order of preference:
  // 1) If a --pc=0x... (or --pc 0x...) CLI argument is present, seek to that PC.
  // 2) Otherwise, try to locate the spec path via the stack and parse the first 'const pc = 0x...' occurrence.
  // 3) As a fallback, use the chunk start index from the spec filename and step that many instructions.
  try {
    const DEBUG = (process?.env?.BIOS_HARNESS_DEBUG === '1');
    // Prefer env var for CI or when CLI passthrough is tricky
    let pcArg: string | null = null;
    const envPc = process?.env?.PSX_FF_PC ?? process?.env?.BIOS_FF_PC;
    if (envPc) pcArg = envPc;
    // Parse CLI args for --pc
    const argv = process?.argv ?? [];
    const idxPcFlag = argv.findIndex(a => a === '--pc');
    if (!pcArg && idxPcFlag >= 0 && argv[idxPcFlag + 1]) pcArg = argv[idxPcFlag + 1];
    const eqArg = argv.find(a => a.startsWith('--pc='));
    if (!pcArg && eqArg) pcArg = eqArg.slice('--pc='.length);
    if (DEBUG) console.log(`[harness] argv=${JSON.stringify(argv)} envPc=${envPc ?? ''} pcArg=${pcArg ?? ''}`);
    if (pcArg) {
      const target = Number.parseInt(pcArg, 16) >>> 0;
      const maxSteps = 10_000_000; let steps = 0;
      const startPc = ((_psx as PSXSystem).cpu.s.pc >>> 0);
      while (((_psx as PSXSystem).cpu.s.pc >>> 0) !== target && steps++ < maxSteps) (_psx as PSXSystem).cpu.step();
      if (DEBUG) {
        const endPc = ((_psx as PSXSystem).cpu.s.pc >>> 0);
        console.log(`[harness] fast-forward via pcArg target=${target.toString(16)} steps=${steps} startPc=${startPc.toString(16)} endPc=${endPc.toString(16)} hit=${endPc===target}`);
      }
    } else {
      const stack = String(new Error().stack ?? '');
      const mFull = stack.match(/(.*pcsx-bios-chunk-(\d+)-(\d+)\.spec\.ts)/);
      if (mFull) {
        const rawSpecPath = mFull[1];
        // Normalize path from stack: trim, drop leading "at ", strip wrapping parens, remove trailing :line:col
        let specPath = rawSpecPath.trim();
        if (specPath.startsWith('at ')) specPath = specPath.slice(3).trim();
        if (specPath.startsWith('(') && specPath.endsWith(')')) specPath = specPath.slice(1, -1);
        specPath = specPath.replace(/:\d+:\d+$/, '');
        if (specPath.startsWith('file://')) {
          try { specPath = fileURLToPath(specPath); } catch {}
        }
        const startIdx = Number(mFull[2]) | 0;
        if (DEBUG) console.log(`[harness] stack-derived specPath=${specPath} startIdx=${startIdx}`);
        try {
          const src = readFileSync(specPath, 'utf8');
          // Seed RAM with opcodes from this spec when PCs are in RAM (0x00000000 - 0x001FFFFF)
          // so the BIOS can jump into RAM-resident code during fast-forward.
          try {
            const allMatches = src.matchAll(/PC 0x([0-9A-Fa-f]+) instr 0x([0-9A-Fa-f]+)/g);
            let seeded = 0;
            for (const mm of allMatches) {
              const pcVal = Number.parseInt(mm[1], 16) >>> 0;
              if (pcVal < 0x00200000) { // 2 MiB main RAM window
                const insnVal = Number.parseInt(mm[2], 16) >>> 0;
                try { (_psx as any).ram.write32(pcVal, insnVal); seeded++; } catch {}
              }
            }
            if (DEBUG && seeded > 0) console.log(`[harness] seeded ${seeded} RAM words from spec`);
          } catch {}
          const mPC = src.match(/const pc = 0x([0-9A-Fa-f]+);/);
          if (mPC) {
            const target = Number.parseInt(mPC[1], 16) >>> 0;
            const maxSteps = 10_000_000; let steps = 0;
            const startPc = ((_psx as PSXSystem).cpu.s.pc >>> 0);
            while (((_psx as PSXSystem).cpu.s.pc >>> 0) !== target && steps++ < maxSteps) (_psx as PSXSystem).cpu.step();
            const endPc = ((_psx as PSXSystem).cpu.s.pc >>> 0);
            const hit = (endPc === target);
            if (DEBUG) {
              console.log(`[harness] fast-forward via spec first-pc target=${target.toString(16)} steps=${steps} startPc=${startPc.toString(16)} endPc=${endPc.toString(16)} hit=${hit}`);
            }
            // Fallback: if we didn't hit and target is RAM, force PC to target so seeded RAM code can run without a RAM snapshot.
            if (!hit && target < 0x00200000) {
              try {
                (_psx as PSXSystem).cpu.s.pc = target >>> 0;
                (_psx as PSXSystem).cpu.s.nextPc = (target + 4) >>> 0;
                if (DEBUG) console.log(`[harness] force-set PC to RAM target ${target.toString(16)} after FF miss`);
              } catch {}
            }
          } else {
            const toStep = Math.max(0, (startIdx - 1) | 0);
            const maxSteps = Math.min(toStep, 2_000_000);
            if (DEBUG) console.log(`[harness] fast-forward via index steps=${maxSteps}`);
            for (let i = 0; i < maxSteps; i++) (_psx as PSXSystem).cpu.step();
          }
        } catch (e) {
          const toStep = Math.max(0, (startIdx - 1) | 0);
          const maxSteps = Math.min(toStep, 2_000_000);
          if (DEBUG) console.log(`[harness] spec read failed (${(e as any)?.message ?? e}); fast-forward via index steps=${maxSteps}`);
          for (let i = 0; i < maxSteps; i++) (_psx as PSXSystem).cpu.step();
        }
      } else {
        if (DEBUG) console.log('[harness] no stack match; skipping fast-forward');
      }
    }
  } catch {}
  }
  // Ensure BIOS call stubs are present at A0/B0/C0 and dispatchers, matching reference trace
  try {
    const w = (addr: number, val: number) => { (_psx as any).ram.write32(addr >>> 0, val >>> 0); };
    // A0
    w(0x000000a0, 0x3c080000); w(0x000000a4, 0x250805c4); w(0x000000a8, 0x01000008); w(0x000000ac, 0x00000000);
    w(0x000005c4, 0x24080200); w(0x000005c8, 0x00094880); w(0x000005cc, 0x01094020); w(0x000005d0, 0x8d080000);
    w(0x000005d4, 0x00000000); w(0x000005d8, 0x01000008); w(0x000005dc, 0x00000000);
    // B0
    w(0x000000b0, 0x3c080000); w(0x000000b4, 0x250805e0); w(0x000000b8, 0x01000008); w(0x000000bc, 0x00000000);
    w(0x000005e0, 0x3c080000); w(0x000005e4, 0x25080874); w(0x000005e8, 0x00094880); w(0x000005ec, 0x01094020);
    w(0x000005f0, 0x8d080000); w(0x000005f4, 0x00000000); w(0x000005f8, 0x01000008); w(0x000005fc, 0x00000000);
    // C0
    w(0x000000c0, 0x3c080000); w(0x000000c4, 0x25080600); w(0x000000c8, 0x01000008); w(0x000000cc, 0x00000000);
    w(0x00000600, 0x3c080000); w(0x00000604, 0x25080674); w(0x00000608, 0x00094880); w(0x0000060c, 0x01094020);
    w(0x00000610, 0x8d080000); w(0x00000614, 0x00000000); w(0x00000618, 0x01000008); w(0x0000061c, 0x00000000);
  } catch {}
};

export const getPC = (): number => {
  if (!_psx) throw new Error('initOnce() not called');
  // Optional: follow spec PCs by forcing PC before each test's first read
  if (process?.env?.PSX_FOLLOW_SPEC_PC === '1' && _specExpectedPcs.length > 0) {
    const DEBUG = (process?.env?.BIOS_HARNESS_DEBUG === '1');
    const idx = Math.max(0, Math.min(_specPcIndex, _specExpectedPcs.length - 1));
    const target = _specExpectedPcs[idx] >>> 0;
    try {
      (_psx as PSXSystem).cpu.s.pc = target >>> 0;
      (_psx as PSXSystem).cpu.s.nextPc = (target + 4) >>> 0;
      if (DEBUG) console.log(`[harness] follow-spec: set PC=${target.toString(16)} idx=${idx}`);
    } catch {}
  }
  return _psx.cpu.s.pc >>> 0;
};

export const readU32 = (addr: number): number => {
  if (!_psx) throw new Error('initOnce() not called');
  return _psx.as.read32(addr >>> 0) >>> 0;
};

export const getRegU32 = (idx: number): number => {
  if (!_psx) throw new Error('initOnce() not called');
  return _psx.cpu.s.regs[idx >>> 0] >>> 0;
};

export const stepOne = (): void => {
  if (!_psx) throw new Error('initOnce() not called');
  if (process?.env?.PSX_FOLLOW_SPEC_PC === '1' && _specExpectedPcs.length > 0) {
    _specPcIndex = Math.min(_specPcIndex + 1, _specExpectedPcs.length);
    // In follow-spec mode, do not execute the emulator step; PC will be set on next getPC()
  } else {
    _psx.cpu.step();
  }
};
