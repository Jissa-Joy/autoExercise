const {expect} = require('@playwright/test');
exports.ProductsPage = class ProductsPage {

    constructor(page){

        this.page = page;

this.productsButton = page.locator('.material-icons.card_travel');

this.allProductsLabel = page.locator('h2:has-text("All Products")');
this.viewFirstProduct = page.locator(".fa.fa-plus-square >>nth=0")  //first Product from the list
//this.viewThirdProduct = page.locator(".fa.fa-plus-square >>nth=2") //3rd prod
this.firstProduct = page.locator('h2:has-text("Blue Top")')   //name of product
this.productCategory = page.locator("//p[normalize-space()='Category: Women > Tops']");
this.price=page.locator('span:has-text("Rs. 500")')
//this.prodAvailability = 
//this.prodCondition =
//this.prodBrand =


//this.thirdProduct = page.locator('h2:has-text("Sleeveless Dress")')  //verifying 3rd product from the list

}

async clickProductsButton(){
    await this.productsButton.click();
}

async navigateProductPage()
{
    await this.page.goto('https://automationexercise.com/products'); 
}
async clickFirstProduct(){
    await this.viewFirstProduct.click();
}

async verifyFirstProduct()
{ // await expect(this.loginToYourAccountText).toBeVisible();
    await expect(this.viewFirstProduct).toBeVisible();
}

//function to verify product detials such as prod name, category, price , availability , condition and brand




}