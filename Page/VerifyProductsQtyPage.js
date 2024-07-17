const { expect } = require('@playwright/test');
exports.VerifyProductsQtyPage = class VerifyProductsQtyPage {

    constructor(page) {
        this.page = page;

        this.viewProductButton = page.locator('a[href="/product_details/4"]');
        this.quantity = page.locator('#quantity');
        this.addtoCartBtn = page.getByRole('button', { name: ' Add to cart' });
        this.cartTable = page.locator('#cart_info_table');
       // this.tableRow= 
    }

    async viewProduct() {
        await this.viewProductButton.click();

    }

    async navigateTo() {
        await this.page.goto('https://automationexercise.com/product_details/4');
    }
    async addQuantity() {
        await this.quantity.fill('4');
    }
    async addToCart() {
        await this.addtoCartBtn.click();
    }

    async getCartRows() {
        return this.cartTable.locator('tr');
      }
    
      async getCellFromRow(row, colIndex) {
        return row.locator('td').nth(colIndex);
      }
    
      async verifyProductInCartWithQuantity(productName, expectedQuantity) {
        const rows = await this.getCartRows();
        const rowCount = await rows.count();
        let found = false;
    
        for (let i = 0; i < rowCount; i++) {
          const row = rows.nth(i);
          const productDescription = await (await this.getCellFromRow(row, 1)).textContent();
          if (productDescription.includes(productName)) {
            const quantity = await (await this.getCellFromRow(row, 3)).locator('button').textContent();
            expect(quantity.trim()).toBe(expectedQuantity.toString());
            found = true;
            break;
          }
        }
    
        expect(found).toBe(true, `${productName} should be in the cart`);
      }




}