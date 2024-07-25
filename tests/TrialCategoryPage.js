// CategoryPage.js

class TrialCategoryPage {
    constructor(page) {
        this.page = page;
        this.categoryPanel = page.locator('.left-sidebar .panel-group');
        this.categoryLink = page.locator('.left-sidebar .panel-group .panel-title a');
        this.subCategoryPanel = page.locator('.panel-collapse .panel-body ul li a');
        this.categoryHeader = page.locator('.features_items h2');
    }

  /*  async areCategoriesVisible() {
           // await expect(this.NewUserText).toBeVisible();
     await expect(this.categoryPanel).tobeVisible();
        }*/

    async navigateToCategory(categoryName) {
        await this.page.click(`${this.categoryLink} >> text=${categoryName}`);
    }

    async navigateToSubCategory(categoryName, subCategoryName) {
        await this.navigateToCategory(categoryName);
        await this.page.click(`${this.subCategoryPanel} >> text=${subCategoryName}`);
    }

    async getCategoryHeaderText() {
        return await this.page.textContent(this.categoryHeader);
    }
}

module.exports = { TrialCategoryPage };
