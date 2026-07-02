// tests/visual.spec.js
import { test, expect } from '@playwright/test';

test('VRT(ビジュアルリグレッションテスト)', async ({ page }) => {
await page.goto('http://localhost:5173/');
  await page.evaluate(() => document.fonts.ready);

  await expect(page).toHaveScreenshot('top-page.png', {

    threshold: 0,

    ignoreAntialiasing: false,

    maxDiffPixelRatio: 0.001,
      });
});