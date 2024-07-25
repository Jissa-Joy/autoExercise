const { expect } = require('@playwright/test');

exports.CategoryPage = class CategoryPage {
    constructor(page) {
        this.page = page;
        this.categoryLabel = page.locator('h2:has-text("Category")');
        this.womenPanel = page.getByRole('link', { name: 'Women' });
        this.dressCategory = page.locator('a[href="/category_products/1"]');
        this.dressLabel = page.locator('h2:has-text("Women - Dress Products")');
        this.menPanel = page.getByRole('link', { name: ' Men' });
        this.menSubCategory = page.locator('a[href="/category_products/3"]');
    }

    async verifyCategoriesVisible() {
        await expect(this.categoryLabel).toBeVisible();
    }

    async clickWomenCategory() {
        await this.womenPanel.click();
    }

    async clickDressCategory() {
        await this.dressCategory.click();
    }

    async verifyDressCategoryPage() {
        await expect(this.dressLabel).toBeVisible();
    }

    async clickMenCategory() {
        await this.menPanel.click();
    }

    async clickMenSubCategory() {
        await this.menSubCategory.click();
    }
};
