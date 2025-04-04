const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const { CreateAccountPage } = require('./CreateAccountPage');

test('Test Case 1: Register User', async () => {
  // Test Data
  const userData = {
    name: "testjj", 
    email: "testjj@gmail.com",
    password: "jjpw1",
    dob: { day: "11", month: "January", year: "1975" },
    title: "Mrs.",
    firstName: "Jess",
    lastName: "j",
    company: "KJR",
    address1: "Collin Square",
    address2: "",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    zipCode: "3000",
    mobileNumber: "0420000000"
  };

  // Launch browser and page
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Initialize page objects
  const homePage = new HomePage(page);
  const signupLoginPage = new SignupLoginPage(page);
  const createAccountPage = new CreateAccountPage(page);

  // Step 1: Navigate to homepage
  await homePage.navigateHomePage();
  await homePage.verifyHomePageLaunched();

  // Step 2: Click on Signup/Login
  await homePage.clickSignupLogin();
 // await signupLoginPage.verifyNewUserSignupText();

  // Step 3: Enter User Details for Signup
  await signupLoginPage.enterName(userData.name);
  await signupLoginPage.enterEmailAddress(userData.email);
  await signupLoginPage.clickSignupButton();

  // Step 4: Verify account creation form and fill details
  await createAccountPage.verifyenterAccountInformationText();
  await createAccountPage.selectTitle(userData.title);
  await createAccountPage.fillName(userData.name);
  await createAccountPage.fillEmail(userData.email);
  await createAccountPage.fillPassword(userData.password);
  await createAccountPage.fillDateOfBirth(userData.dob.day, userData.dob.month, userData.dob.year);

  // Step 5: Select checkboxes
  await createAccountPage.selectCheckbox1();
  await createAccountPage.selectCheckbox2();

  // Step 6: Fill Address Details
  await createAccountPage.fillFirstname(userData.firstName);
  await createAccountPage.fillLastname(userData.lastName);
  await createAccountPage.fillCompany(userData.company);
  await createAccountPage.fillAddress1(userData.address1);
  await createAccountPage.fillAddress2(userData.address2);
  await createAccountPage.fillCountry(userData.country);
  await createAccountPage.fillState(userData.state);
  await createAccountPage.fillCity(userData.city);
  await createAccountPage.fillZipcode(userData.zipCode);
  await createAccountPage.fillMobilenumber(userData.mobileNumber);

  // Step 7: Click 'Create Account' button and verify account creation
  await createAccountPage.clickCreateButton();
  await createAccountPage.verifyAccountCreatedText();

  // Step 8: Click 'Continue' and verify user login
  await createAccountPage.clickContinueButton();
  await homePage.verifyUserLogin(userData.name);

/* // Step 9: Delete Account and verify deletion
  await homePage.clickDeleteAccountButton();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.locator('.btn.btn-primary').click();*/

  // Close browser after test
  await page.close();
  await browser.close();
});
