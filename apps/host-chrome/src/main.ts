// spawn worker and expose pong for e2e
const w = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
(w as any).onmessage = (e: MessageEvent) => {
  (window as any)._pong = e.data?.cmd;
};
w.postMessage({ cmd: 'ping' });
