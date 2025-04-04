const { test, expect, chromium } = require('@playwright/test');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');

let browser, page, homePage, signupLogin;

test.beforeEach(async () => {
    // 1. Launch browser
    browser = await chromium.launch({ headless: true });

    // 2. Launch a new page for each test
    page = await browser.newPage();

    // 3. Initialize page objects
    homePage = new HomePage(page);
    signupLogin = new SignupLoginPage(page);

    // 4. Navigate to the homepage
    await homePage.navigateHomePage();
    await homePage.verifyHomePageLaunched();
});

test.afterEach(async () => {
    // Close the page and browser after each test
    await page.close();
    await browser.close();
});

// Test Case 2: Login User with correct email and password
test('Test Case 2: Login User with correct email and password', async () => {
    const Email = "testjj@gmail.com";
    const Pw = "jjpw1";
    const Name = "testjj";

    // 1. Click on 'Signup / Login' button
    await homePage.clickSignupLogin();

    // 2. Verify 'Login to your account' is visible
    await signupLogin.verifyLoginToYourAccountText();

    // 3. Enter correct credentials
    await signupLogin.fillLoginEmail(Email);
    await signupLogin.fillLoginPassword(Pw);

    // 4. Click 'login' button
    await signupLogin.clickLoginButton();

    // 5. Verify successful login
    await homePage.verifyUserLogin(Name);

    // 6. Click 'Delete Account' button
    await homePage.clickDeleteAccountButton();

    // 7. Verify that 'ACCOUNT DELETED!' message is visible
    await expect(page.locator('.alert.alert-danger')).toContainText("Account Deleted!");
    await page.locator('.btn.btn-primary').click();
});

// Test Case 3: Login User with incorrect email and password
test('Test Case 3: Login User with incorrect email and password', async () => {
    const Email = "jjtest@gmail.com";
    const Pw = "jjpwd";

    // 1. Click on 'Signup / Login' button
    await homePage.clickSignupLogin();

    // 2. Verify 'Login to your account' is visible
    await signupLogin.verifyLoginToYourAccountText();

    // 3. Enter incorrect credentials
    await signupLogin.fillLoginEmail(Email);
    await signupLogin.fillLoginPassword(Pw);

    // 4. Click 'login' button
    await signupLogin.clickLoginButton();

    // 5. Verify error message for invalid credentials
    await signupLogin.verifyErrorMessage();
});
