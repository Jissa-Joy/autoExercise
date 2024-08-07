const {expect} = require('@playwright/test');
exports.PlaceOrderPage = class PlaceOrderPage {

constructor(page)
{
    this.page = page;
    this.checkoutButton = page.locator('.btn.btn-default.check-out');
    this.cartButton = page.locator('a').filter({ hasText: 'View Cart' })
     this.proceedCheckoutBttn = page.locator('text="Proceed To Checkout"');
     this.registerBtn = page.getByRole('link', { name: 'Register / Login' });
     this.cartButton = page.locator('text=View Cart');
     this.mainCartButton = page.getByRole('link', { name: ' Cart' });
     this.textAreaDesc=  page.locator('textarea[name="message"]');
     this.addtoCartBtn = page.locator('fa.fa-shopping-cart').filter({hasText:"Add to cart"});

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

async clickAddCart(){
    await this.addtoCartBtn.click();
}
async clickRegister()

{
    await this.registerBtn.click();
}

async clickMainCart()
{
    await this.mainCartButton.click();

}

async gotoCart(){
    await this.page.goto('https://automationexercise.com/checkout'); 
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

}
