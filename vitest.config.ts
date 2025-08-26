import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@ai-psx/shared': path.resolve(__dirname, 'packages/emulator-shared/src/index.ts'),
    },
  },
  test: {
    include: ['**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      all: true,
      reportsDirectory: './coverage'
    }
  }
});

