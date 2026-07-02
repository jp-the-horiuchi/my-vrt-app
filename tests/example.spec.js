// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('【従来のテスト】ボタンがDOM上に存在するかチェック', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // 画面上にボタンタグが存在するかを取得
  const button = page.getByRole('button');

  // HTMLの構造としてボタンが存在し、見えている状態かをテスト（CSSで巨大化していても合格する）
  await expect(button).toBeVisible();
});
