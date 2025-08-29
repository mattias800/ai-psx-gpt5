/* eslint-env browser */
// spawn worker and expose simple request API for e2e
const w = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });

const pending = new Map<number, (data:any)=>void>();
let seq = 1;
(w as any).onmessage = (e: MessageEvent) => {
  const { id } = (e.data || {}) as any;
  if (id && pending.has(id)) {
    pending.get(id)!(e.data);
    pending.delete(id);
  }
  if ((e.data || {}).cmd) (window as any)._pong = (e.data as any).cmd;
  (window as any)._last = e.data;
};

function hostRequest(msg: any): Promise<any> {
  const id = ++seq;
  return new Promise(resolve => {
    pending.set(id, resolve);
    (w as any).postMessage({ ...msg, id });
  });
}

(w as any).postMessage({ cmd: 'ping' });

(window as any)._hostRequest = hostRequest;

// Keyboard -> pad buttons mapping
const pressed = new Set<string>();
const keyMap: Record<string,string> = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  Enter: 'start', ShiftLeft: 'select', ShiftRight: 'select',
  KeyZ: 'cross', KeyX: 'circle', KeyA: 'square', KeyS: 'triangle',
  KeyQ: 'l1', KeyW: 'r1', Digit1: 'l2', Digit2: 'r2',
};
const sendPad = () => { (window as any)._hostRequest({ cmd: 'setPad', buttons: Array.from(pressed) }); };
window.addEventListener('keydown', (e: KeyboardEvent) => {
  const name = (keyMap as any)[(e as any).code] || (keyMap as any)[(e as any).key];
  if (name) { if (!pressed.has(name)) { pressed.add(name); sendPad(); } e.preventDefault(); }
});
window.addEventListener('keyup', (e: KeyboardEvent) => {
  const name = (keyMap as any)[(e as any).code] || (keyMap as any)[(e as any).key];
  if (name) { if (pressed.delete(name)) sendPad(); e.preventDefault(); }
});
