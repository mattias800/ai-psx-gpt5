import { test, expect } from '@playwright/test';

// E2E: simulate keyboard press and verify pad poll reflects it via worker API

test('host keyboard -> pad input', async ({ page }) => {
  const base = process.env.HOST_URL ?? 'http://localhost:5173/';
  await page.goto(base);

  // Create system
  await page.evaluate(async () => { await (window as any)._hostRequest({ cmd: 'create' }); });

  // Press KeyZ (mapped to 'cross')
  await page.keyboard.down('z');

  const poll = await page.evaluate(async () => {
    const res = await (window as any)._hostRequest({ cmd: 'padPoll' });
    return res?.bytes as number[];
  });

  expect(poll.slice(0,3)).toEqual([0xff, 0x41, 0x5a]);
  const btnHi = poll[4];
  expect((btnHi & (1<<(14-8))) === 0).toBe(true); // cross is pressed

  // Release KeyZ
  await page.keyboard.up('z');
  const poll2 = await page.evaluate(async () => {
    const res = await (window as any)._hostRequest({ cmd: 'padPoll' });
    return res?.bytes as number[];
  });
  const btnHi2 = poll2[4];
  expect((btnHi2 & (1<<(14-8))) !== 0).toBe(true); // cross released
});

