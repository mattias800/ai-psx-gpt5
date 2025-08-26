self.onmessage = (e: MessageEvent) => {
  const { cmd } = e.data || {};
  if (cmd === 'ping') {
    (self as any).postMessage({ cmd: 'pong' });
  }
};

