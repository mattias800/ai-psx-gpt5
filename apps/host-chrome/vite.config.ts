import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@ai-psx/core': path.resolve(__dirname, '../../packages/emulator-core/src/index.ts'),
      '@ai-psx/shared': path.resolve(__dirname, '../../packages/emulator-shared/src/index.ts'),
      '@ai-psx/cpu': path.resolve(__dirname, '../../packages/emulator-cpu/src/cpu.ts'),
      '@ai-psx/spu': path.resolve(__dirname, '../../packages/emulator-spu/src/index.ts'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    strictPort: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});

