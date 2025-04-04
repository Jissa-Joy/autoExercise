const {expect} = require('@playwright/test');
exports.ProductPage = class ProductPage {

constructor(page){

    this.page = page;
    this.productsButton = page.locator('a[href="/products"]');
    this.productList = page.locator("//div[@class='features_items']");
    this.Viewproduct = page.locator(`a[href="/product_details/{$prodNo}"]`);
    this.productName1 = page.locator("//div[@class = 'product-information']//h2");
    this.productCategory1 = page.locator("//div[@class = 'product-information']//p[1]");
    this.productPrice1 = page.locator("//div[@class = 'product-information']//span //span")
    this.productAvailability1 = page.locator("//div[@class = 'product-information']//p[2]");
    this.productCondition1 = page.locator("//div[@class = 'product-information']//p[3]")
    this.productBrand1 = page.locator("//div[@class = 'product-information']//p[4]");

    this.searchBar = page.getByPlaceholder("Search Product");
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsText = page.getByText("Searched Products");

    this.searchedProductName = page.locator('//div[@class="productinfo text-center"]//p');
    this.searchedProductPrice = page.locator('//div[@class="productinfo text-center"]//h2');


}

async clickProductsButton()
{
    await this.productsButton.click();
}
async verifyProductPageLaunched()
{
    await expect(this.page).toHaveURL("https://www.automationexercise.com/products");
}

async verifyProductList()
{
    await expect(this.productList).toBeVisible();
}

  // Method to get the product locator dynamically
  viewProductLocator(prodNo) {
    return this.page.locator(`a[href="/product_details/${prodNo}"]`);
  }

  // Method to click the first product
  async clickProduct(prodNo) {
    const viewProduct = this.viewProductLocator(prodNo);
    await viewProduct.click();
  }

  async navigateProductPage()
  {
      await this.page.goto('https://automationexercise.com/products'); 
  }


async verifyProductNameVisibility()
{
    await expect(this.productName1).toBeVisible();
}
async verifyProductCategoryVisibility()
{
    await expect(this.productCategory1).toBeVisible();
}
async verifyProductPriceVisibility()
{
    await expect(this.productPrice1).toBeVisible();
}
async verifyProductAvailabilityVisibility()
{
    await expect(this.productAvailability1).toBeVisible();
}
async verifyProductConditionVisibility()
{
    await expect(this.productCondition1).toBeVisible();
}
async verifyProductBrandVisibility()
{
    await expect(this.productBrand1).toBeVisible();
}

async searchProduct()
{
    await this.searchBar.click();
    await this.searchBar.fill("Winter Top");
}

async clickSearchButton ()
{
    await this.searchButton.click();
}

async verifySearchedProductsTextVisibility()
{
    await expect(this.searchedProductsText).toBeVisible();
}

async verifySearchedProductsVisibility()
{
    await expect(this.searchedProductName).toBeVisible();
    await expect(this.searchedProductPrice).toBeVisible();
}


}