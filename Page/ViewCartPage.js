
const {expect} = require('@playwright/test');
exports.ViewCartPage = class ViewCartPage {

constructor(page)
{
    this.page = page;
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.registerLoginLink = page.getByRole('link', { name: 'Register / Login' });
    this.quantityButton = page.locator('#cart_info').getByRole('button');
//trying locators of webtable
     this.cartTable = page.locator('#cart_info_table');
 //   this.rows = page.cartTable.locator('//table//tr');
  //   this.itemProduct = rows.locator(":scope", has_text="Blue Top")
   



}


async getCartRows() {
    return this.cartTable.locator('tr');
  }

  async getCellFromRow(row, colIndex) {
    return row.locator('td').nth(colIndex);
  }

  async verifyProductDetails(productName, expectedPrice, expectedQuantity, expectedTotal) {
    const rows = await this.getCartRows();
    const rowCount = await rows.count();
    let found = false;

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const productDescription = await (await this.getCellFromRow(row, 1)).textContent();
      if (productDescription.includes(productName)) {
        const price = await (await this.getCellFromRow(row, 2)).textContent();
        const quantity = await (await this.getCellFromRow(row, 3)).locator('button').textContent();
        const total = await (await this.getCellFromRow(row, 4)).textContent();
        expect(price.trim()).toBe(expectedPrice);
        expect(quantity.trim()).toBe(expectedQuantity.toString());
        expect(total.trim()).toBe(expectedTotal);
        found = true;
        break;
      }
    }

    expect(found).toBe(true, `${productName} should be in the cart`);
  }
}









