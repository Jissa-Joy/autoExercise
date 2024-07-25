// category.test.js

const { test, expect } = require('@playwright/test');
const { CategoryPage } = require('../Page/CategoryPage');

test('View Category Products Test Case', async ({ page }) => {
    const categoryPage = new CategoryPage(page);
    
    // Step 1: Launch browser and navigate to the URL
    await page.goto('http://automationexercise.com');
    
    // Step 2: Verify that categories are visible on the left sidebar
   await categoryPage.areCategoriesVisible();
    
    // Step 3: Click on 'Women' category
    await categoryPage.clickWomenCategory();
    
    // Step 4: Click on any category link under 'Women' category, e.g., 'Dress'
    await categoryPage.navigateToSubCategory();
     // Step 5: Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    await categoryPage.subCategoryLabel();
        
    // Step 6: On the left sidebar, click on any sub-category link of 'Men' category

    await categoryPage.clickMenCategory();
    await categoryPage.navigateToMenSubCategory();
   // await categoryPage.navigateToCategory('Men');  try later
   // await categoryPage.navigateToSubCategory('Tshirts');
    
    // Step 7: Verify that the user is navigated to that category page
 //   const menCategoryHeaderText = await categoryPage.getCategoryHeaderText();
   // expect(menCategoryHeaderText).toContain('MEN - TSHIRTS PRODUCTS');

   await categoryPage.menSubCategoryLabel();
});
