#!/usr/bin/env zsh
set -u

REPO="/Users/mattias800/temp/ai-psx-gpt5"

# Ensure repo root
if [[ "$PWD" != "$REPO" ]]; then
  cd "$REPO" || { echo "ERROR: Cannot cd to $REPO"; exit 1; }
fi

# Required config present
if [[ ! -f vitest.generated.config.ts ]]; then
  echo "ERROR: Missing vitest.generated.config.ts at repo root."
  exit 1
fi

# Verify Node >= 20
if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js not found. Install Node 20 or newer."
  exit 1
fi
NODE_MAJOR=$(node -p "parseInt(process.versions.node.split('.')[0],10)")
if [[ "$NODE_MAJOR" -lt 20 ]]; then
  echo "ERROR: Detected Node $(node -v). Require Node 20 or newer. Switch versions (e.g., nvm use 20) and retry."
  exit 1
fi

# Deterministic install
if [[ ! -f package-lock.json ]]; then
  echo "ERROR: package-lock.json missing; cannot run npm ci deterministically."
  exit 1
fi
echo "Installing dependencies with npm ci (ignoring lifecycle scripts)..."
npm ci --ignore-scripts || { echo "ERROR: npm ci --ignore-scripts failed."; exit 1; }

# BIOS file check
BIOS_FOUND=""
for name in scph1001.bin SCPH1001.BIN pc1001.bin PC1001.BIN; do
  if [[ -f "$REPO/$name" ]]; then
    BIOS_FOUND="$name"
    break
  fi
done
if [[ -z "$BIOS_FOUND" ]]; then
  echo "ERROR: BIOS not found at repo root. Place scph1001.bin (or SCPH1001.BIN, pc1001.bin, PC1001.BIN) at $REPO. Do not commit it."
  exit 1
fi

# Test files discovery
if [[ ! -d tests/generated ]]; then
  echo "ERROR: tests/generated directory not found."
  exit 1
fi
echo "Discovering generated spec files..."
FILES=($(LC_ALL=C find tests/generated -maxdepth 1 -type f -name 'pcsx-bios-chunk-*.spec.ts' -print | LC_ALL=C sort))
if [[ ${#FILES[@]} -eq 0 ]]; then
  echo "No generated spec files found."
  exit 0
fi

# Sequential execution loop
echo "Running ${#FILES[@]} files sequentially..."
for spec in "${FILES[@]}"; do
  echo "vitest: $spec"
  npm run -s test:generated -- "$spec"
  rc=$?
  if [[ $rc -ne 0 ]]; then
    echo "$spec"
    exit $rc
  fi
done

echo "All generated tests passed."
exit 0

