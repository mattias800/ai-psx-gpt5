/* eslint-env browser, webworker */
import { PSXSystem, padMaskFromButtons } from '@ai-psx/core';

let psx: PSXSystem | undefined;

(self as any).onmessage = (e: MessageEvent) => {
  const { cmd, id, buttons, mask, present } = (e.data || {}) as any;
  const reply = (payload: any) => (self as any).postMessage({ id, ...payload });

  if (cmd === 'ping') {
    (self as any).postMessage({ cmd: 'pong' });
    return;
  }
  if (cmd === 'create') {
    psx = new PSXSystem();
    reply({ cmd: 'created' });
    return;
  }
  if (!psx) {
    reply({ cmd: 'error', message: 'psx not created' });
    return;
  }
  if (cmd === 'setPad') {
    let m: number = (typeof mask === 'number') ? (mask >>> 0) : 0xffff;
    if (Array.isArray(buttons)) {
      m = padMaskFromButtons(buttons as any);
    }
    psx.setPadButtons(m >>> 0);
    reply({ cmd: 'padSet', mask: m >>> 0 });
    return;
  }
  if (cmd === 'setMemcard') {
    psx.setMemcardPresent(!!present);
    reply({ cmd: 'memcardSet', present: !!present });
    return;
  }
  if (cmd === 'padPoll') {
    const DATA = 0x1f801040 >>> 0;
    psx.as.write8(DATA, 0x01);
    psx.as.write8(DATA, 0x42);
    psx.as.write8(DATA, 0x00);
    const out = [psx.as.read8(DATA), psx.as.read8(DATA), psx.as.read8(DATA), psx.as.read8(DATA), psx.as.read8(DATA)];
    reply({ cmd: 'padPollResult', bytes: out });
    return;
  }
  if (cmd === 'memcardRead') {
    const DATA = 0x1f801040 >>> 0;
    const hi = ((e.data?.hi|0) & 0xff)>>>0;
    const lo = ((e.data?.lo|0) & 0xff)>>>0;
    psx.as.write8(DATA, 0x81); psx.as.write8(DATA, 0x52); psx.as.write8(DATA, hi); psx.as.write8(DATA, lo); psx.as.write8(DATA, 0x00);
    const out: number[] = [];
    for (let i=0;i<132+2;i++) out.push(psx.as.read8(DATA) & 0xff);
    reply({ cmd: 'memcardReadResult', bytes: out });
    return;
  }
  if (cmd === 'memcardWrite') {
    const DATA = 0x1f801040 >>> 0;
    const hi = ((e.data?.hi|0) & 0xff)>>>0;
    const lo = ((e.data?.lo|0) & 0xff)>>>0;
    const payload: number[] = Array.isArray(e.data?.bytes) ? e.data.bytes : new Array(128).fill(0);
    psx.as.write8(DATA, 0x81); psx.as.write8(DATA, 0x57); psx.as.write8(DATA, hi); psx.as.write8(DATA, lo); psx.as.write8(DATA, 0x00);
    for (let i=0;i<128;i++) psx.as.write8(DATA, (payload[i] ?? 0) & 0xff);
    psx.as.write8(DATA, 0x00); psx.as.write8(DATA, 0x00);
    const ack = [psx.as.read8(DATA), psx.as.read8(DATA), psx.as.read8(DATA), psx.as.read8(DATA)];
    reply({ cmd: 'memcardWriteAck', bytes: ack });
    return;
  }
  reply({ cmd: 'error', message: 'unknown command' });
};

