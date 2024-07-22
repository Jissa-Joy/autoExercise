const {expect} = require('@playwright/test');
exports.PlaceOrderPage = class PlaceOrderPage {

constructor(page)
{
    this.page = page;
    this.checkoutButton = page.locator('.btn.btn-default.check-out');
    this.cartButton = page.getByRole('');
     this.proceedCheckoutBttn = page.locator('text="Proceed To Checkout"');
     this.registerBtn = page.getByRole('link', { name: 'Register / Login' });
     this.cartButton = page.locator('text=View Cart');
     this.mainCartButton = page.locator('a[href="/view_cart"]');

}

async cartBtnClick(){
   await this.cartButton.click();
  
}

async proceedToCheckout(){

    await this.proceedCheckoutBttn.click();
}

async verifyCartPageLaunched()
{
    await expect(this.page).toHaveTitle("Automation Exercise - Checkout");
}
async clickRegister()

{
    await this.registerBtn.click();
}

async clickMainCart()
{
    await this.mainCartButton.click();
   // await await this.page.goto('https://automationexercise.com/checkout'); 
}

async gotoCart(){
    await this.page.goto('https://automationexercise.com/checkout'); 
}

}
}