# Agent rules

- Always prefer correctness and automated verification. No code without tests.
- Small, incremental, verifiable commits. Each commit must pass unit tests locally.
- No manual testing needed: all behavior must be exercised by unit/property tests or Playwright headless.
- Determinism first: tests must be reproducible across runs.
- Commit messages: conventional commits with detailed scope and what is verified.
- Legal: Do not commit BIOS or game assets. Use secrets + SHA-256 verification for optional CI e2e.

CI gates
- Unit tests: required
- Coverage: target >= 90% for core packages
- E2E: optional unless BIOS/game secrets provided

