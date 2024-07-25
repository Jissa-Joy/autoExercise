// category.test.js

const { test, expect } = require('@playwright/test');
const { TrialCategoryPage } = require('./TrialCategoryPage');

test('View Category Products Test Case', async ({ page }) => {
    const categoryPage = new TrialCategoryPage(page);

    // Step 1: Launch browser and navigate to the URL
    await page.goto('http://automationexercise.com');
    
    // Step 2: Verify that categories are visible on the left sidebar
    const categoriesVisible = await categoryPage.areCategoriesVisible();
    expect(categoriesVisible).toBeTruthy();
    
    // Step 3: Click on 'Women' category
    await categoryPage.navigateToCategory('Women');
    
    // Step 4: Click on any category link under 'Women' category, e.g., 'Dress'
    await categoryPage.navigateToSubCategory('Women', 'Dress');
    
    // Step 5: Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
    const womenCategoryHeaderText = await categoryPage.getCategoryHeaderText();
    expect(womenCategoryHeaderText).toContain('WOMEN - DRESS PRODUCTS');
    
    // Step 6: On the left sidebar, click on any sub-category link of 'Men' category
    await categoryPage.navigateToSubCategory('Men', 'Tshirts');
    
    // Step 7: Verify that the user is navigated to that category page
    const menCategoryHeaderText = await categoryPage.getCategoryHeaderText();
    expect(menCategoryHeaderText).toContain('MEN - TSHIRTS PRODUCTS');
});
