const {expect} = require('@playwright/test');
//const path = require('path');
exports.ContactUsPage = class ContactUsPage {

   constructor(page) {
    this.page = page;
    this.getInTouchText = page.getByText("GET IN TOUCH");
    this.name = page.getByPlaceholder("Name");
    this.email = page.getByPlaceholder('Email', { exact: true });
    this.subject = page.getByPlaceholder("Subject");
    this.message = page.getByPlaceholder("Your Message Here");
    this.uploadfile = page.locator("//input[@name='upload_file']");
    this.submitButton = page.locator("//input[@name='submit']");
    this.successMessage = page.getByText("Success! Your details have been submitted successfully.");
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

   async uploadFile()
   {
      
      await this.uploadfile.setInputFiles('dummyfile.pdf');

   }

   async clickSubmitButton()
   {
      await this.submitButton.click();
   }
   
   async interactPopupOK()
   {
      const popup = await this.page.waitForEvent('popup');
      // Interact with the new popup normally.
      await popup.getByRole('button',{name:'OK'}).click();
   }

   async VerifySuccessMessage()
   {
      await expect(this.successMessage).toBeVisible();
   }
 
}