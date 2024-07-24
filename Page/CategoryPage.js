const {expect} = require('@playwright/test');
exports.CategoryPage = class CategoryPage {

    constructor(page){

        this.page = page;
        this.categoryLabel = page.locator('');
    }
}
