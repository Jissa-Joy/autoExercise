const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');


test('Test Case 4: Logout User', async () => {

    //Test data
let Email = "jjoy@kjr.com";
let Pw = "test123";
let Name = "jj";
    
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

//9. Click Logout button

await signupLogin.clickLogoutButton();

//10. Verify that user is navigated to login page

await homePage.navigateLoginPage();
 
})

test.only('Test Case 5: Register User with existing email', async () => {

    //Test data
let Email = "jjoy@kjr.com";
let Pw = "test123";
let Name = "jj";
    
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

//4. click on SignUp/LogIn option 
await homePage.clickSignupLogin();

//5. Verify 'New User Signup!' is visible
await signupLogin.verifyNewUserSignuptext();

//6. Enter name and already registered email address
await signupLogin.enterName(Name);
await signupLogin.enterEmailAddress(Email);

//7. Click Signup button
await signupLogin.clickSignupButton();

//8.Verify error 'Email Address already exist' is visible
await signupLogin.verifySignupError();

})