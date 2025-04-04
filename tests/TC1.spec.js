const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const { CreateAccountPage } = require('./CreateAccountPage');
const fs = require('fs');
const path = require('path');

test('Test Case 1: Register User', async () => {
  // Load test data from JSON file
  const testDataPath = path.resolve(__dirname, 'testData', 'testData.json');
  let userData;
  console.log('Resolved test data path:', testDataPath);

  try {
    const rawData = fs.readFileSync(testDataPath, 'utf-8');
    userData = JSON.parse(rawData);
  } catch (err) {
    console.error(`Error reading the test data: ${err.message}`);
    return;  // Exit the test if data cannot be loaded
  }
  const firstUser = userData[0];
  console.log('User Data:', firstUser);
  // Launch browser and page
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Initialize page objects
  const homePage = new HomePage(page);
  const signupLoginPage = new SignupLoginPage(page);
  const createAccountPage = new CreateAccountPage(page);
  await homePage.navigateHomePage();
  await homePage.verifyHomePageLaunched();
  await homePage.clickButton(homePage.locators.signupLogin);

 // await signupLoginPage.verifyVisibility(signupLoginPage.newUserText);
 console.log('Email:', firstUser.email);
 console.log('Name:', firstUser.name);
  await signupLoginPage.enterUserDetails(userData.name, userData.email);
  await signupLoginPage.clickSignupButton();

//  await createAccountPage.verifyVisibility(createAccountPage.accountInformationText);
  await createAccountPage.selectTitle(userData.title);
  await createAccountPage.fillUserDetails(userData);
  await createAccountPage.fillAddressDetails(userData);
  await createAccountPage.clickCreateButton();
  //await createAccountPage.verifyVisibility(createAccountPage.accountCreatedText);
  await createAccountPage.clickContinueButton();

  await homePage.verifyUserLogin(userData.name);
  await browser.close();
});
