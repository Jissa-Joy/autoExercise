const { test, expect } = require('@playwright/test');
const { CategoryPage } = require('../Page/CategoryPage');

test('View Category Products', async ({ page }) => {
    const categoryPage = new CategoryPage(page);

    // Step 1: Launch browser and Step 2: Navigate to URL
    await page.goto('http://automationexercise.com');

    // Step 3: Verify that categories are visible on the left sidebar
    await categoryPage.verifyCategoriesVisible();

    // Step 4: Click on the 'Women' category
    await categoryPage.clickWomenCategory();

    // Step 5: Click on any category link under the 'Women' category, for example, Dress
    await categoryPage.clickDressCategory();

    // Step 6: Verify that the category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
    await categoryPage.verifyDressCategoryPage();

    // Step 7: On the left sidebar, click on any sub-category link of the 'Men' category
    await categoryPage.clickMenCategory();
    await categoryPage.clickMenSubCategory();

    // Step 8: Verify that the user is navigated to that category page
    // Assuming there is some unique text or element to verify navigation
    const menCategoryHeader = page.locator('h2:has-text("Men - Tshirts Products")');
    await expect(menCategoryHeader).toBeVisible();
});
