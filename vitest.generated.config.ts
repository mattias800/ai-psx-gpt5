import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@ai-psx/shared': path.resolve(__dirname, 'packages/emulator-shared/src/index.ts'),
      '@ai-psx/cpu': path.resolve(__dirname, 'packages/emulator-cpu/src/cpu.ts'),
      '@ai-psx/spu': path.resolve(__dirname, 'packages/emulator-spu/src/index.ts'),
      '@ai-psx/core': path.resolve(__dirname, 'packages/emulator-core/src/index.ts'),
    }
  },
  test: {
    include: ['tests/generated/**/*.spec.ts'],
    isolate: false,
    sequence: { concurrent: false, shuffle: false },
    pool: 'threads',
    poolOptions: { threads: { minThreads: 1, maxThreads: 1 } }
  }
});
