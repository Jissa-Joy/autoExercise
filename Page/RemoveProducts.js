const { expect } = require('@playwright/test');

exports.RemoveProducts = class RemoveProducts {

    constructor(page) {
        this.page = page;
            this.page = page;
            this.categoriesSidebar = page.locator('.categories-sidebar');
            this.womenCategory = page.locator('a.sidebar-category-link[href="/category/women"]');
            this.womenDressLink = page.locator('a.sub-category-link[href="/category/women/dress"]');
        }
    
        async navigate() {
            await this.page.goto('http://automationexercise.com');
        }
    
        async verifyCategoriesVisible() {
            await expect(this.categoriesSidebar).toBeVisible();
        }
    
        async clickWomenCategory() {
            await this.womenCategory.click();
        }
    
        async clickWomenDressLink() {
            await this.womenDressLink.click();
        }
    
        async clickRemoveButtonForProductById(productId) {
            const removeButton = this.page.locator(`a.cart_quantity_delete[data-product-id="${productId}"]`);
            await removeButton.click();
        }


    }

