# ai-psx-gpt5

Accuracy-focused, headless PlayStation 1 emulator written in TypeScript. All verification is automated (unit, property-based, and headless Chrome e2e). Goal: boot and run Resident Evil 1 and Metal Gear Solid 1 with high accuracy tests and zero manual steps.

- Core: headless emulator library (Node + browser Worker)
- Browser host: Chrome (headless via Playwright) with OffscreenCanvas/audio buffer capture
- Tests: Vitest (+coverage), fast-check, Playwright, golden image/audio hashes, deterministic TAS harness
- CI: GitHub Actions

Legal: BIOS and game images are not included. CI can optionally fetch them from user-provided URLs via secrets with SHA-256 verification.

Documentation
- GTE model: docs/GTE.md
- CDROM subsystem: docs/CDROM.md
- CDROM developer guide: docs/CDROM-Guide.md

## Generated BIOS trace chunk tests

This repo can generate and run small “chunk” tests derived from a PCSX-Redux BIOS execution log. These verify program counter (PC) sequencing and instruction bytes at specific addresses. Two ways to run them:

1) Snapshot-assisted (recommended when you want the emulator CPU state aligned to the trace)
- Extracts a CPU snapshot at the first PC in the spec, then runs with “follow-spec PC” mode.
- Command:

```
npm run chunk:run -- --spec tests/generated/pcsx-bios-chunk-XXXXX-YYYYYY.spec.ts [--log pcsx-redux-bios.log] [--pc 0x...]
```

Notes:
- --log defaults to pcsx-redux-bios.log at repo root.
- If --pc is not given, the script reads the first `const pc = 0x...;` from the spec.
- Internally sets BIOS_HARNESS_DEBUG=1, PSX_FOLLOW_SPEC_PC=1, PSX_CPU_SNAPSHOT=<extracted.json>.

2) Follow-spec only (no CPU snapshot)
- Forces the emulator PC to the expected PC from the spec before each assertion and advances to the next expected PC without executing a real CPU step (virtual stepping). RAM words needed by the chunk are seeded from the spec.
- Command:

```
npm run chunks:run:nosnap -- tests/generated/pcsx-bios-chunk-XXXXX-YYYYYY.spec.ts [more .spec.ts files...]
```

Tips:
- Set BIOS_HARNESS_DEBUG=1 to see harness logs when debugging.
- Snapshot mode better reflects real CPU register state; follow-spec mode is great for quick validation of RAM-resident chunks without full snapshots.

## Roadmap: towards running Metal Gear Solid 1

This is a pragmatic milestone plan to reach booting and playing MGS1 with good accuracy. Each phase is designed to be testable and to land small, verifiable increments.

Phase 1 — CPU and Exceptions (unit + BIOS trace driven)
- Verify/extend R3000A instruction coverage (including LWL/LWR/SWL/SWR, unaligned loads/stores, and branch delay slot rules).
- COP0: implement/validate SR, CAUSE, EPC; precise exception vectors and return; interrupt masking and delivery.
- Improve trace-based tests to run real stepping for ROM code paths; keep follow-spec-only handy for RAM chunks.

Phase 2 — DMA Controller (7 channels)
- Implement channels: 0 MDEC in, 1 MDEC out, 2 GPU, 3 CDROM, 4 SPU, 5 PIO, 6 OTC.
- Support GPU linked-list command DMA; validate with unit tests and small draw-list golden tests.
- Add IRQs and masking via IStat/IMask for DMA completion.

Phase 3 — GPU (command set and VRAM)
- Implement GP0/GP1 command set needed by BIOS logos and early games: flat/gouraud shaded polys, textured polys (4/8/16-bit CLUT), sprites, line primitives, frame buffer fill, CPU<->VRAM transfers.
- VRAM layout and page/CLUT addressing; semi-transparency and dithering (approx first, refine later).
- Vertical sync timing and GPU IRQ for VBlank; deterministic frame stepping.
- Tests: golden images for BIOS “Sony” screen, simple draw lists.

Phase 4 — Timers and Interrupts
- Timers 0/1/2: modes tied to HSync/VSync/GPU dot clock; event scheduling integrated with CPU step budget.
- IMask/IStat edge cases (latched vs level); deliver GPU/CDROM/DMA/SIO/SPU interrupts with correct priorities.

Phase 5 — CDROM (disc boot flow)
- Solidify command set and deterministic read path (already present in this repo) for READN/READS, GETQ/GETID/SETLOC/SEEKL, PAUSE/STOP.
- Integrate TOC, subchannel Q reporting; region flags as needed by BIOS.
- Hook CDROM DMA to feed MDEC and CPU.
- Tests: boot BIOS to “Insert Disc” screen; read sectors from a test disc (synthetic + real) and validate positions/IRQs.

Phase 6 — SPU (audio path)
- Voice ADPCM decode, pitch, envelopes, master/voice volumes; existing reverb block retained (can be enhanced later).
- XA audio routing from CDROM to SPU voices; MGS uses XA heavily for voices and cinematics.
- Tests: golden audio hashes for short streams; XA filter/channel selection; mute/demute behavior.

Phase 7 — MDEC (FMV decode)
- Implement MDEC command set: quant table upload, VLC/RLE decode, IDCT, macroblock assembly; DMA in/out.
- YUV to RGB path to GPU via DMA; double-buffering.
- Tests: decode known short MDEC stream and compare a golden frame hash.

Phase 8 — SIO (controllers) and Memory Cards
- SIO serial for pad: start with digital pad; map to host input. Add DualShock later.
- Memory card protocol (basic): list blocks, read, write; deterministic for tests.
- Tests: pad handshake sequences; simple save/load.

Phase 9 — Boot-to-menu and first gameplay
- Headless Browser host harness to render frames and capture audio (already in project); attach BIOS + MGS disc.
- Milestones:
  - Boot BIOS to logo: golden frame(s)
  - Boot MGS disc to title screen: golden frame(s)
  - Enter “New Game” and reach initial gameplay (Dock area) with input + audio
- Record per-milestone logs and hashes for CI regression.

Cross-cutting: determinism and performance
- Single master scheduler for CPU cycles and device events; fixed time-slice loop for headless runs.
- Optional fast-forward stepping for loading screens; bounded and reproducible.
- Keep all test artifacts (images/audio/logs) deterministic across platforms.

Artifacts and tooling
- Extend scripts to mount a local disc image via environment variable (e.g., PSX_DISC=/path/to/MGS.bin) with SHA-256 verification.
- Add e2e scenarios in Playwright to drive boot/menu/gameplay via a deterministic TAS input sequence.

With these phases, we can land incremental PRs that steadily converge on MGS1. Each phase remains useful on its own (many other games benefit), and the chunk-based BIOS testing continues to catch regressions early.

