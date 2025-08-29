/* eslint-env node */
import { spawn } from 'node:child_process';
import http from 'node:http';

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(url, res => {
        res.resume();
        resolve(true);
      });
      req.on('error', () => {
        if (Date.now() - start > timeoutMs) return reject(new Error('timeout'));
        setTimeout(tick, 300);
      });
    };
    tick();
  });
}

async function main() {
  // Build host app first for preview
  await new Promise((resolve, reject) => {
    const p = spawn('npm', ['run', '-w', 'apps/host-chrome', 'build'], { stdio: 'inherit' });
    p.on('exit', code => code === 0 ? resolve(null) : reject(new Error('build failed')));
  });

  const PORT = process.env.PORT || '5180';
  const server = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], { stdio: 'inherit', cwd: 'apps/host-chrome' });

  try {
    await waitForServer(`http://localhost:${PORT}/`);
  } catch (e) {
    server.kill('SIGTERM');
    process.exit(1);
  }

  const code = await new Promise(resolve => {
    const p = spawn('npx', ['playwright', 'test', 'tests/e2e'], { stdio: 'inherit', env: { ...process.env, HOST_URL: `http://localhost:${PORT}/` } });
    p.on('exit', c => resolve(c ?? 1));
  });

  server.kill('SIGTERM');
  process.exit(code);
}

main().catch(() => process.exit(1));

