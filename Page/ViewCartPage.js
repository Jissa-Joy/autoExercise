
const {expect} = require('@playwright/test');
exports.ViewCartPage = class ViewCartPage {

constructor(page)
{
    this.page = page;
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.registerLoginLink = page.getByRole('link', { name: 'Register / Login' });
    this.quantityButton = page.locator('#cart_info').getByRole('button');
   
    this.cartItems = page.locator('.cart_item');
}

async verifyProductsInCart() {
    await expect(this.cartItems).toHaveCount(2);
  }

  async verifyProductDetails() {
    const products = await this.cartItems.elementHandles();
    for (const product of products) {
      const quantity = await product.locator('.cart_quantity button').textContent();
      const price = await product.locator('.cart_price p').textContent();
      const totalPrice = await product.locator('.cart_total p').textContent();
      console.log(`Quantity: ${quantity}, Price: ${price}, Total Price: ${totalPrice}`);
    }
  }

async verifyProdInCart() {
    if (productCount !== 2) {
        throw new Error('Both products were not added to the cart.');
    }
}




}
