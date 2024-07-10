const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');


test('Test Case 2: Login User with correct email and password', async () => {

    //Test data
let Email = "VR01@gmail.com";
let Pw = "VRpw01";
let Name = "VR01";
    
//1. Launch Browser
const browser = await chromium.launch();
//Launch New Page
 const page = await browser.newPage();

 const homePage = new HomePage(page);
 const signupLogin = new SignupLoginPage(page);

 //2. Navigate to url 'http://automationexercise.com'
 await homePage.navigateHomePage();

//3. Verify that home page is visible successfully
await homePage.verifyHomePageLaunched();

//4. Click on 'Signup / Login' button
await homePage.clickSignupLogin();

//5. Verify 'Login to your account' is visible
await signupLogin.verifyLoginToYourAccountText();

//6. Enter correct email address and password
await signupLogin.fillLoginEmail(Email);
await signupLogin.fillLoginPassword(Pw);

//7. Click 'login' button
await signupLogin.clickLoginButton();

//8. Verify that 'Logged in as username' is visible
await homePage.VerifyUserLogin(Name);

//9. Click 'Delete Account' button
await homePage.clickDeleteAccountButton();

//10. Verify that 'ACCOUNT DELETED!' is visible
await expect(page.getByText("Account Deleted!")).toBeVisible();
await page.locator('.btn.btn-primary').click();
 
})
