const {expect} = require('@playwright/test');
exports.PaymentPage = class PaymentPage {

    constructor(page){
           this.page = page;
           this.name = page.locator('input[name="name_on_card"]');
           this.cardNo = page.locator('input[name="card_number"]');
           this.cvc = page.locator('input[name="cvc"]');
           this.expiryMonth = page.locator('input[name="expiry_month"]');
           this.expiryYear = page.locator('input[name="expiry_year"]');
           this.payButton = page.locator('button[data-qa="pay-button"]');
           this.successMessage = page.getByText('Your order has been placed successfully!',{ timeout: 10000 });
    }

     async enterPaymentDetails(name,cardNo,cvc,expMon,expYr)
     {
        await this.name.fill(name);
        await this.cardNo.fill(cardNo);
        await this.cvc.fill(cvc);
        await this.expiryMonth.fill(expMon);
        await this.expiryYear.fill(expYr);
     }

     async clickPayButton()
     {
        await this.payButton.click();
     }

     async verifySuccessMessageVisibility()
     {
        await expect(this.successMessage).toBeVisible();
     }

      
}