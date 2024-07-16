
const {expect} = require('@playwright/test');
exports.ViewCartPage = class ViewCartPage {

constructor(page)
{
    this.page = page;
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.registerLoginLink = page.getByRole('link', { name: 'Register / Login' });
    this.quantityButton = page.locator('#cart_info').getByRole('button');

}

async validateCorrectProductQuantity(productQuantity) {
    await expect(this.quantityButton, "The product quantity in cart does not match").toHaveText(productQuantity);
}

}
