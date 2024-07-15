const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const {TestcasesPage} =require('./TestcasesPage');          //maybe delete later
const { afterEach } = require('node:test');
const { ProductsPage } = require('../Page/ProductsPage');
const { SearchPage } = require('../Page/SearchPage');
const testdata = require('../searchdata.json');
const { SubscriptionHomePage } = require('../Page/SubscriptionHomePage');
const {ContactUsPage} = require('../Page/ContactUsPage')


afterEach(async ()=> {
    await page.screenshot({path:Date.now() + screenshot1.png})
})

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

test('Test Case 5: Register User with existing email', async () => {

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

test('Test Case 6: Contact Us Form', async () => {

    //Test Data
    const Name = "Mark";
    const Email = "Mark@test.com";
    const Subject = "Automation";
    const Message = "Test message";
    
    //1. Launch Browser
    const browser = await chromium.launch();
    //Launch New Page
     const page = await browser.newPage();
    
     const homePage = new HomePage(page);
   //  const signupLogin = new SignupLoginPage(page);
     const contactUsPage = new ContactUsPage(page);
    
    
     ///2. Navigate to url 'http://automationexercise.com'
     await homePage.navigateHomePage();
    
     //3. Verify that home page is visible successfully
     await homePage.verifyHomePageLaunched();
     
     //4. Click on 'Contact Us' button
     await homePage.clickContactUsButton();
    
     //5. Verify 'GET IN TOUCH' is visible
     await contactUsPage.verifyGetInTouchText();
    
     //6. Enter name, email, subject and message
      await contactUsPage.enterName(Name);
      await contactUsPage.enterEmail(Email);
      await contactUsPage.enterMessage(Message);
      await contactUsPage.enterSubject(Subject);
    
     //7. Upload file
      await contactUsPage.uploadFile();
    
     //.8. Click 'Submit' button
     await contactUsPage.clickSubmitButton();
    
    //.9 click Ok on popup
    await contactUsPage.interactPopupOK();
    
    //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    await contactUsPage.VerifySuccessMessage();
    
    //11. Click 'Home' button and verify that landed to home page successfully
    await homePage.clickHomeButton();
    await homePage.verifyHomePageLaunched();
    
    })

test('Test Case 7: Verify Test Cases Page', async () => {

    
//1. Launch Browser
const browser = await chromium.launch();
//Launch New Page
 const page = await browser.newPage();

 const homePage = new HomePage(page);
 const signupLogin = new SignupLoginPage(page);
 //const testCases = new TestcasesPage(page);

 //2. Navigate to url 'http://automationexercise.com'
 await homePage.navigateHomePage();

//3. Verify that home page is visible successfully
await homePage.verifyHomePageLaunched();

//4.Click on Test cases button
await signupLogin.clickTestCases();

//5. Verify user is navigated to test cases page successfully
await signupLogin.navigateTestcasePage();
//await testCases.getTitle();
await signupLogin.verifyTestLogo();

})

test.only('Test Case 8: Verify All Products and product detail page', async () => {

    
    //1. Launch Browser
    const browser = await chromium.launch();
    //Launch New Page
     const page = await browser.newPage();
    
     const homePage = new HomePage(page);
     const signupLogin = new SignupLoginPage(page);
     const prodPage = new ProductsPage(page);
  
     //2. Navigate to url 'http://automationexercise.com'
     await homePage.navigateHomePage();
    
    //3. Verify that home page is visible successfully
    await homePage.verifyHomePageLaunched();
    
    //4.Click on Product button
    await prodPage.clickProductsButton();
    
    //5. Verify user is navigated to ALL PRODUCTS page successfully
   
   await prodPage.navigateProductPage();

    //6.The products list is visible


    //7.Click on 'View Product' of first product

   await prodPage.clickFirstProduct();
   await prodPage.verifyFirstProduct();
   await page.pause(3000);

    //9.verify that detail detail is visible 
    
//update code here

    })

    test.only('Test Case 9: Search Product', async () => {

        

        let itemName = "dress";
        //1. Launch Browser
        const browser = await chromium.launch();
        //Launch New Page
         const page = await browser.newPage();
        
         const homePage = new HomePage(page);
         const signupLogin = new SignupLoginPage(page);
         const prodPage = new ProductsPage(page);
         const searchPage = new SearchPage(page);
      
         //2. Navigate to url 'http://automationexercise.com'
         await homePage.navigateHomePage();
        
        //3. Verify that home page is visible successfully
        await homePage.verifyHomePageLaunched();
        
        //4.Click on Product button
        await prodPage.clickProductsButton();
        
        //5. Verify user is navigated to ALL PRODUCTS page successfully
       
       await prodPage.navigateProductPage();

       //6.Enter product name in search input and click search button
       await searchPage.enterSearch(itemName);
      
 
       //7.Verify 'Searched products' is visible
        await searchPage.verifyLabel();

       //8.Verify all the products related to search are visible

      await searchPage.verifyAllProductscontain(itemName);
    

    })

    test.only('Test Case 10:Verify subscription in Home page', async () => {

        
        let emailId = "test@test.com"
 
        //1. Launch Browser
        const browser = await chromium.launch();
        //Launch New Page
         const page = await browser.newPage();
        
         const homePage = new HomePage(page);
         const signupLogin = new SignupLoginPage(page);
         const subscribeHome = new SubscriptionHomePage(page);
      
         //2. Navigate to url 'http://automationexercise.com'
         await homePage.navigateHomePage();
        
        //3. Verify that home page is visible successfully
        await homePage.verifyHomePageLaunched();
        
        //4.Scroll down to footer
         // await subscribeHome.scrolltoFooter();

        //5.verify text 'SUBSCRIPTION'
        await subscribeHome.verifySubscribeLabel();


        //6.Enter email address in input and click arrow button
          await  subscribeHome.enterEmail(emailId);

        //7.Verify success message 'You have been successfully subscribed !' is visible
         await subscribeHome.verifySuccessMessage();


    })
