# ai-psx-gpt5

Accuracy-focused, headless PlayStation 1 emulator written in TypeScript. All verification is automated (unit, property-based, and headless Chrome e2e). Goal: boot and run Resident Evil 1 with high accuracy tests and zero manual steps.

- Core: headless emulator library (Node + browser Worker)
- Browser host: Chrome (headless via Playwright) with OffscreenCanvas/audio buffer capture
- Tests: Vitest (+coverage), fast-check, Playwright, golden image/audio hashes, deterministic TAS harness
- CI: GitHub Actions

Legal: BIOS and game images are not included. CI can optionally fetch them from user-provided URLs via secrets with SHA-256 verification.

Documentation
- GTE model: docs/GTE.md
- CDROM subsystem: docs/CDROM.md
- CDROM developer guide: docs/CDROM-Guide.md

