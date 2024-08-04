const { expect } = require('@playwright/test');
exports.AddProductsPage = class AddProductsPage {

    constructor(page) {

        this.page = page;
        this.firstProduct = page.locator('.productinfo > img').first();
        this.addButton = page.locator('.productinfo > .btn').first();
        this.addtoCartButton = page.locator('.btn.btn-default.add-to-cart')
        this.continueShoppingButton = page.locator('.btn.btn-success')  //change if needd

        this.secondProduct = page.locator('div:nth-child(4)');
        this.addSecondButton = page.locator('.productinfo > .btn').nth(1);

      //  this.cartQuantity =  page.locator('.cart_quantity button').textContent();
      this.cartQuantity = page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button');
        

        this.homeButton = page.getByRole("menuitem", { name: "Home" });
        this.navBar = page.getByRole("menubar");
        this.navBarItems = page.getByRole("menubar").getByRole("menuitem");
       // this.viewCartBtn = page.locator('//div[@class="modal-content"]//a') revert back if below fails
       this.viewCartButton = page.locator('text=View Cart');
    }



    async gotoProducts() {
        await this.page.goto('https://www.automationexercise.com/products');
    }


    async itemHover() {
        await this.page.hover('.single-products');

    }

    async addFirstProductToCart() {

        await this.addButton.click();
    }

    async addSecondProductToCart() {
        await this.addSecondButton.click();
    }

    async continueShop() {
        await this.continueShoppingButton.click();
    }
    async viewCart() {
        await this.viewCartButton.click();

    }
    async navigateToCart() {
     //   await this.page.goto('https://automationexercise.com/view_cart');
        expect(this.cartQuantity.trim()).toBe('1');
    }
    async verifyItemQty() {
        await expect (this.cartQuantity.toBe('1'));
    }


    //below method added on Aug2
    

}