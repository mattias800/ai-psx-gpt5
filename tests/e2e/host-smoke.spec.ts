/* eslint-env browser */
import { test, expect } from '@playwright/test';

test('host-chrome boots and worker responds', async ({ page }) => {
  const base = process.env.HOST_URL ?? 'http://localhost:5173/';
  await page.goto(base);
  await page.waitForFunction(() => (window as any)._pong === 'pong');
  const pong = await page.evaluate(() => (window as any)._pong);
  expect(pong).toBe('pong');
});

