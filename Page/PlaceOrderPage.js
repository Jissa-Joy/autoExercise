const {expect} = require('@playwright/test');
exports.PlaceOrderPage = class PlaceOrderPage {

constructor(page)
{
    this.page = page;
    this.checkoutButton = page.locator('.btn.btn-default.check-out');
    this.cartButton = page.getByRole('#cartModal .modal-body a');
     this.proceedCheckoutBttn = page.locator('#do_action .check_out');
     this.registerBtn = page.getByRole('link', { name: 'Register / Login' });
     
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

}