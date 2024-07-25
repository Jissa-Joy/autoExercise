const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../Page/ContactPage');
const {HomePage} = require('./HomePage');
const path = require('path');

test('Automate Contact Us Page', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const homePage = new HomePage(page);

    // Step 1: Launch browser and navigate to the URL
    await page.goto('http://automationexercise.com');

    // Step 2: Navigate to 'Contact Us' page
    await page.locator('a:has-text("Contact us")').click();

    // Step 3: Verify that the contact form is visible
    await contactPage.verifyContactFormTitle();

    // Step 4: Fill the contact form
    const filePath = path.join(__dirname, '../files/testfile.png');
    await contactPage.fillContactForm(
        'J J', 
        'jjo@test.com', 
        'Test Contact Subject', 
        'This is a test message', 
        filePath
    );

    // Step 5: Submit the form 
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await contactPage.submitForm();

    // Wait for the success alert to appear
    await contactPage.waitForSuccessAlert();
   // await contactPage.submitForm();

    // Step 6: Verify that the success alert is visible
    await contactPage.verifySuccessAlert();

    //await contactPage.navigateToHome();
    await homePage.navigateHomePage();

    await homePage.verifyHomePageLaunched();

});
