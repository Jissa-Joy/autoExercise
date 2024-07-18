const {expect} = require('@playwright/test');
exports.PlaceOrderPage = class PlaceOrderPage {

constructor(page)
{
    this.page = page;
    this.checkoutButton = page.locator('.btn.btn-default.check-out');
    this.cartButton = page.locator('a[href="/view_cart"]');


}

async cartBtnClick(){
   await this.cartButton.click();
}


}