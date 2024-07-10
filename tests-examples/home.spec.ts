import { test, expect } from '@playwright/test';

test('Verify Title', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    await page.goto("https://practice.sdetunicorns.com/about/");
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
})
test('Verify Get started', async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/"); //GO to URL
    // await page.locator("#get-started").click();
    await page.locator("id=get-started").click();
    await expect(page).toHaveURL(/.*#get-started/);
})

test('Verify', async ({ page }) => {
    
})

