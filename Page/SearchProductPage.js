const {expect} = require('@playwright/test');
exports.SearchProductPage = class SearchProductPage {

    constructor(page){

        this.page = page;

this.productsButton = page.locator('.material-icons.card_travel');
this.allProductsLabel = page.locator('h2:has-text("All Products")');
//this.viewFirstProduct = page.locator(".fa.fa-plus-square >>nth=0")  //first Product from the list
//updated from here
this.searchTextbox = page.locator('#search_product');
this.searchButton = page.locator('#submit_search');
this.searchedProdLabel = page.locator('h2:has-text("Searched Products")');

this.productsContainer = page.locator('.features_items'); //class holding all dreess products
this.productItem = page.locator('.product-image-wrapper');




}

async clickProductsButton(){
    await this.productsButton.click();
}

async navigateProductPage()
{
    await this.page.goto('https://automationexercise.com/products'); 
}
async enterSearch(){
    await this.searchTextbox.fill('dress');
    await this.searchButton.click();
}

async verifyLabel()
{ // await expect(this.loginToYourAccountText).toBeVisible();
    await expect(this.searchedProdLabel).toBeVisible();
}

//function to verify product detials such as prod name, category, price , availability , condition and brand
// Check the visibility of each product
/*const productCount = await productsContainer.locator('.product-image-wrapper').count();
for (let i = 0; i < productCount; i++) {
  const product = productsContainer.locator('.product-image-wrapper').nth(i);
  await expect(product).toBeVisible();
}*/

async verifyAllProductsAreVisible() {
    const productCount = await this.productItem.count();
    for (let i = 0; i < productCount; i++) {
      const product = this.productItem.nth(i);
      await expect(product).toBeVisible();
    }
  }

}