import { test, expect } from '@playwright/test';

// E2E: memcard write then readback via host worker API

test('host memcard write/read', async ({ page }) => {
  const base = process.env.HOST_URL ?? 'http://localhost:5173/';
  await page.goto(base);

  // Create system and ensure memcard present
  await page.evaluate(async () => { await (window as any)._hostRequest({ cmd: 'create' }); });
  await page.evaluate(async () => { await (window as any)._hostRequest({ cmd: 'setMemcard', present: true }); });

  // Write sector 2 with 0x22 pattern
  const ack = await page.evaluate(async () => {
    const bytes = Array(128).fill(0x22);
    const res = await (window as any)._hostRequest({ cmd: 'memcardWrite', hi: 0, lo: 2, bytes });
    return res?.bytes as number[];
  });
  expect(ack).toEqual([0x00, 0x5c, 0x00, 0x00]);

  // Readback sector 2
  const rd = await page.evaluate(async () => {
    const res = await (window as any)._hostRequest({ cmd: 'memcardRead', hi: 0, lo: 2 });
    return res?.bytes as number[];
  });
  expect(rd[0]).toBe(0x00);
  expect(rd[1]).toBe(0x5a);
  for (let i=0;i<128;i++) expect(rd[2+i]).toBe(0x22);
  expect(rd[130]).toBe(0x00);
  expect(rd[131]).toBe(0x00);
});

