// tests/visual.spec.js
import { test, expect } from '@playwright/test';

test('トップページのビジュアルリグレッションテスト', async ({ page }) => {
  // webServerで起動したReactアプリのトップページへ移動
  await page.goto('http://localhost:5173/');

  // 画面全体のスクリーンショットを撮影し、過去の正解画像と比較する
  await expect(page).toHaveScreenshot('top-page.png', {
    maxDiffPixelRatio: 0.01, // 1%未満の微小なピクセル変化は許容する設定（ノイズ対策）
  });
});