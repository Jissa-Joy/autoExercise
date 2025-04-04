const { test, expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const { ProductPage } = require('../Page/ProductPge');
const { SubscriptionHomePage } = require('../Page/SubscriptionHomePage');
const { SearchProductPage } = require('../Page/SearchProductPage');

test.describe('Automation Exercise Tests', () => {
    let browser, page, homePage, signupLogin, prodPage, subscribeHome, searchProd;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        signupLogin = new SignupLoginPage(page);
        prodPage = new ProductPage(page);
        subscribeHome = new SubscriptionHomePage(page);
        searchProd = new SearchProductPage(page);

        await homePage.navigateHomePage();
        await homePage.verifyHomePageLaunched();
    },60000);

    test.afterEach(async () => {
        await page.close();
    });

    test('Test Case 4: Logout User', async () => {
        let Email = "jjoy@kjr.com", Pw = "test123", Name = "jj";

        await homePage.clickSignupLogin();
        await signupLogin.verifyLoginToYourAccountText();
        await signupLogin.fillLoginEmail(Email);
        await signupLogin.fillLoginPassword(Pw);
        await signupLogin.clickLoginButton();
        await homePage.VerifyUserLogin(Name);
        await signupLogin.clickLogoutButton();
        await homePage.navigateHomePage();
    });

    test('Test Case 5: Register User with Existing Email', async () => {
        let Email = "jjoy@kjr.com", Name = "jj";

        await homePage.clickSignupLogin();
        await signupLogin.verifyNewUserSignuptext();
        await signupLogin.enterName(Name);
        await signupLogin.enterEmailAddress(Email);
        await signupLogin.clickSignupButton();
        await signupLogin.verifySignupError();
    });

    test('Test Case 7: Verify Test Cases Page', async () => {
        await signupLogin.clickTestCases();
        await signupLogin.navigateTestcasePage();
        await signupLogin.verifyTestLogo();
    });

    test('Test Case 8: Verify All Products and Product Detail Page', async () => {
        await prodPage.clickProductsButton();
        await prodPage.navigateToProductsPage();
       // await prodPage.verifyProductPageLaunched();
        await prodPage.clickProduct(1);
        await prodPage.verifyProductDetails();
    });

    test('Test Case 9: Search Product', async () => {
        let itemName = "dress";
        
        await searchProd.clickProductsButton();
        await searchProd.navigateProductPage();
        await searchProd.enterSearch(itemName);
        await searchProd.verifyLabel();
        await searchProd.verifyAllProductsAreVisible();
    });

    test('Test Case 10: Verify Subscription in Home Page', async () => {
        let emailId = "test@test.com";
        
        await subscribeHome.scrollToFooter();
        await subscribeHome.verifySubscribeLabel();
        await subscribeHome.enterEmail(emailId);
        await subscribeHome.verifySuccessMessage();
    });

    test('Test Case 11: Verify Subscription in Cart Page', async () => {
        let emailId = "test1@test.com";
        
        await subscribeHome.clickCartButton();
        await subscribeHome.verifySubscribeLabel();
        await subscribeHome.enterEmail(emailId);
        await subscribeHome.verifySuccessMessage();
    });
});
