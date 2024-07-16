import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.locator('.productinfo > img').first().click();
  await page.locator('.overlay-content > .btn').first().click();
});