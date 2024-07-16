const {expect} = require('@playwright/test');
exports.AddProd = class AddProd {

    constructor(page){

        this.page = page; 
       // this.firstProd = page.locator('div.choose a[href="/product_details/1"]]');
       this.firstProduct=page.locator('.choose > .nav > li > a').first();
        this.addCartButton = page.locator('button[class="btn btn-default cart"]');
    
        this.viewCartbutton = page.locator('div.modal-content a[href="/view_cart"]');
         this.firstProdPrice = page.locator('#product-1 .cart_price p');
         this.firstProdQty    =page.locator('.cart_quantity');
         


    }

    
    async gotoProducts(){
        await this.page.goto('https://www.automationexercise.com/products');
    }

    async addFirstProductToCart() {

        await this.firstProduct.click();
        await this.page.goto('https://automationexercise.com/product_details/1')
      }

      async addProd(){
        await this.addCartButton.click();

      }
      async viewCart(){
        await this.viewCartbutton.click();
        await this.page.goto('https://automationexercise.com/view_cart');

      }

      async verifyProdDetails()
      {
    
     
      }
}
