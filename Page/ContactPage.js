const { expect } = require('@playwright/test');

exports.ContactPage = class ContactPage {

    constructor(page) {
        this.page = page;
        this.contactFormTitle = page.locator('h2.title:has-text("Get In Touch")');
        this.nameInput = page.locator('input[data-qa="name"]');
        this.emailInput = page.locator('input[data-qa="email"]');
        this.subjectInput = page.locator('input[data-qa="subject"]');
        this.messageTextarea = page.locator('textarea[data-qa="message"]');
        this.uploadFileInput = page.locator('input[type="file"]');
        this.submitButton = page.locator('input[data-qa="submit-button"]');
        this.successAlert = page.locator('.status.alert.alert-success');
    }

    async fillContactForm(name, email, subject, message, filePath) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageTextarea.fill(message);
        if (filePath) {
            await this.uploadFileInput.setInputFiles(filePath);
        }
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async verifySuccessAlert() {
        await expect(this.successAlert).toBeVisible();
    }

    async verifyContactFormTitle() {
        await expect(this.contactFormTitle).toBeVisible();
    }
    //giving locator directly below 
    async waitForSuccessAlert() {
        await this.page.waitForSelector('.status.alert.alert-success', { state: 'visible', timeout: 10000 });
    }
}
