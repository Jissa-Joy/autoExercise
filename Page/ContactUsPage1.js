/* USE THE OTHER PAGE (ContactPage.js) for testing - updated methods to handle the alert & works well



const {expect} = require('@playwright/test');
const path = require('path');
exports.ContactUsPage = class ContactUsPage {

   constructor(page) {
    this.page = page;
    this.contactUsButton = page.locator('.fa.fa-envelope')
    this.getInTouchText = page.getByText("GET IN TOUCH");
   
    this.name = page.locator('input[type="text"][data-qa="name"]');
    this.email = page.locator('//input[@placeholder="Email"]');
    this.subject  =page.locator('input[data-qa="subject"][name="subject"]');
    this.message = page.locator('#message');
    this.uploadfile =  page.locator('input[type="file"]')
    this.submitButton = page.locator('input[name="submit"]')
    this.successMessage = page.getByText("Success! Your details have been submitted successfully.");
    this.homeButton = page.locator('.fa.fa-angle-double-left')
   }
 

   async clickContactUsButton(){
      await this.contactUsButton.click()
   }
   async verifyGetInTouchText()
   {
      await expect(this.getInTouchText).toBeVisible();
   }

   async enterName(name)
   {
      await this.name.fill(name);
   }

   async enterEmail(email)
   {
      await this.email.fill(email);
   }

   async enterSubject(subject)
   {
      await this.subject.fill(subject);
   }

   async enterMessage(message)
   {
      await this.message.fill(message);
   }

   async uploadFile(filePath)
   {
      
      await this.uploadfile.setInputFiles(filePath);

   }

   async clickSubmitButton()
   {
      await this.submitButton.click();
      await this.page.on('dialog', async dialog => {
         expect(dialog.message()).toContain('OK');
         await dialog.accept(); 
      })

   }
   
 



   async VerifySuccessMessage()
   {
      await expect(this.successMessage).toBeVisible();
      
   }
 
  async clickHomeButton(){
   await this.homeButton.click();
  }


}*/