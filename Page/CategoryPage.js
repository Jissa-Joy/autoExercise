const {expect} = require('@playwright/test');
const exp = require('constants');
exports.CategoryPage = class CategoryPage {

    constructor(page){

        this.page = page;
        this.categoryLabel = page.locator('h2:has-text("Category")')

        this.womenPanel = page.getByRole('link', { name: ' Women' });
        this.dressCategory = page.locator('a[href="/category_products/1"]');
        this.dressLabel = page.locator('h2:has-text("Women - Dress Products")');
        this.menPanel = page.getByRole('link', { name: ' Men' });
       this.menSubCategory = page.locator('a[href="/category_products/3"]');
       this.menSubCategoryLabel = page.locator('h2:has-text("Men - Tshirts")');
    }

    async clickWomenCategory() {
        await this.womenPanel.click();
    }

         async navigateToSubCategory()
        {
            await this.dressCategory.click();
        }
        async clickMenCategory() {
            await this.menPanel.click();
        }
    
             async navigateToMenSubCategory()
            {
                await this.menSubCategory.click();
            }
 /*   async getCategoryHeaderText() {
        return await this.page.locator(categoryHeader).textContent();
    }*/

    async areCategoriesVisible() {
        // await expect(this.NewUserText).toBeVisible();
      await expect(this.categoryLabel).toBeVisible();
    }

    async subCategoryLabel(){
        await expect(this.dressLabel).toBeVisible();
    }
    async menSubCategoryLabel(){
        await expect(this.menSubCategoryLabel).toBeVisible();
    }

    async navigateToCategory(categoryName) {
        const categoryLink = this.page.locator(`${this.categoryPanel} >> text=${categoryName}`);
        await categoryLink.click();
    }

   /* async navigateToSubCategory(subCategoryName) {
        const subCategoryLink = this.page.locator(`${this.subCategoryPanel} >> text=${subCategoryName}`);
        await subCategoryLink.click();
    }*/

}

