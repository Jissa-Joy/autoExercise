const {expect} = require('@playwright/test');
exports.BrandPage = class BrandPage {

constructor(page){

    this.page = page;
    //   this.loginToYourAccountText = page.getByText("Login to your account");
    //const h2Locator = page.locator('h2').getByText('Your Exact Text');

    this.brandsLabel = page.locator('h2').getbyText("Brands");
    this.brandLinks = page.locator('.brands_products a');
}

async verifyBrandsText()
{
    await expect(this.brandsLabel).toBeVisible();

}


async selectBrand(brandName) {
    await this.brandLinks.locator(`text=${brandName}`).click();
}

async verifyBrandProductsDisplayed() {
    await expect(this.productsSection).toBeVisible();
}

}
