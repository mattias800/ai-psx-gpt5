/* eslint-env browser */
import { test, expect } from '@playwright/test';

// End-to-end host input wire via worker: create psx, set pad buttons by names, poll pad, and read memcard header

test('host input wire: pad poll and memcard read', async ({ page }) => {
  const base = process.env.HOST_URL ?? 'http://localhost:5173/';
  await page.goto(base);

  // Create system
  const created = await page.evaluate(async () => {
    const res = await (window as any)._hostRequest({ cmd: 'create' });
    return res?.cmd;
  });
  expect(created).toBe('created');

  // Set some buttons and poll
  const poll = await page.evaluate(async () => {
    await (window as any)._hostRequest({ cmd: 'setPad', buttons: ['start','cross'] });
    const res = await (window as any)._hostRequest({ cmd: 'padPoll' });
    return res?.bytes as number[];
  });
  expect(poll.slice(0,3)).toEqual([0xff, 0x41, 0x5a]);
  const btnLo = poll[3];
  const btnHi = poll[4];
  // start (bit3) and cross (bit14) should be 0 (pressed)
  expect((btnLo & (1<<3)) === 0).toBe(true);
  expect((btnHi & (1<<(14-8))) === 0).toBe(true);

  // Memcard present and read sector 0
  const mc = await page.evaluate(async () => {
    await (window as any)._hostRequest({ cmd: 'setMemcard', present: true });
    const res = await (window as any)._hostRequest({ cmd: 'memcardRead', hi: 0, lo: 0 });
    return res?.bytes as number[];
  });
  expect(mc[0]).toBe(0x00);
  expect(mc[1]).toBe(0x5a);
  for (let i=0;i<128;i++) expect(mc[2+i]).toBe(0x00);
  expect(mc[130]).toBe(0x00);
  expect(mc[131]).toBe(0x00);
});

