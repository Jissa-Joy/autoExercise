import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.locator('.overlay-content > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByRole('link', { name: 'Blue Top' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Men Tshirt' })).toBeVisible();
  await expect(page.getByText('Rs.').nth(1)).toBeVisible();
  await expect(page.getByText('Rs.').nth(3)).toBeVisible();
  await expect(page.locator('#product-1')).toContainText('Rs. 500');
  await expect(page.locator('#product-2')).toContainText('Rs. 400');
});