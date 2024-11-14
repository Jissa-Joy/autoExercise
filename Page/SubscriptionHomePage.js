const {expect} = require('@playwright/test');
exports.SubscriptionHomePage = class SubscriptionHomePage {

    constructor(page){

        this.page = page;

        this.subscribeLabel = page.locator('h2:has-text("Subscription")')
        this.email = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('.fa.fa-arrow-circle-o-right')
      // this.successMessage = page.locator('div:has-text("You have been successfully subscribed!")');
        this.successMessage=page.locator('#success-subscribe');

        //below are locators from Cart Page
        this.cartButton = page.getByRole('link', { name: ' Cart' }) //cart locator
        this.footerSelector = 'footer.footer';


    }

   
   async enterEmail(emailID){
    await this.email.fill(emailID);
         await this.subscribeButton.click();
   }

   async verifySubscribeLabel(){
    await expect (this.subscribeLabel).toBeVisible();
   }

   async verifySuccessMessage(){
    await expect(this.successMessage).toBeVisible();
   }

   async clickCartButton()
   {
    await this.cartButton.click();
   }

//uncommented oct 18
async scrollToFooter() {
  const footer = await this.page.$(this.footerSelector); // Select the footer element
  if (footer) {
      await footer.scrollIntoViewIfNeeded(); // Scroll the footer into view
      
  }
  
}



}