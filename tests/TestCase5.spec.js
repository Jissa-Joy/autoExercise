const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { afterEach } = require('node:test');
const { SignupLoginPage } = require('./SignupLoginPage');
const {PlaceOrderPage} =require('../Page/PlaceOrderPage');
const { AddProductsPage } = require('../Page/AddProductsPage');
const {ViewCartPage} = require('../Page/ViewCartPage');
const {VerifyProductsQtyPage} = require('../Page/VerifyProductsQtyPage');
const {CreateAccountPage} = require('./CreateAccountPage');
const testdata = require('../testdata.json'); 
const {CheckoutPage}= require('../Page/CheckoutPage')

test.skip('TC 14:Place Order: Register with CheckOUT', async () => {


    
     let Company = "KJR";
     let Address1 = "Collin Square";
     let Address2 = "";
         
    
// 1. Launch browser
const browser = await chromium.launch();
 //Launch New Page
 const page = await browser.newPage();
 const context = await browser.newContext();
 const fs = require('fs');
 const homePage = new HomePage(page);
 const addProducts = new AddProductsPage(page);
 const viewCart = new ViewCartPage(page);
 const verifyProd = new VerifyProductsQtyPage(page);
 const placeOrder = new PlaceOrderPage(page);
 const signupLogin = new SignupLoginPage(page);
 const createAccountPage = new CreateAccountPage(page);
 const checkoutPage = new CheckoutPage(page);


// 2. Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

// 3. Verify that home page is visible successfully
await homePage.verifyHomePageLaunched();


// 4. Add products to cart
await addProducts.gotoProducts();
await addProducts.itemHover();
await addProducts.addFirstProductToCart();
//trial using cookies added on July 23rd

/*const cookies = await context.cookies();
const localStorage = await page.evaluate(() => {
  const json = {};
  for (const key in window.localStorage) {
    json[key] = window.localStorage.getItem(key);
  }
  return JSON.stringify(json);
});
fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
fs.writeFileSync('localStorage.json', localStorage);*/

// 5. Click 'Cart' button
await placeOrder.cartBtnClick();

// 6. Verify that cart page is displayed

await placeOrder.verifyCartPageLaunched();
// 7. Click Proceed To Checkout

await placeOrder.proceedToCheckout();
// 8. Click 'Register / Login' button

await placeOrder.clickRegister();

// 9. Fill all details in Signup and create account
await homePage.navigateHomePage();
await homePage.clickSignupLogin();
await signupLogin.enterName(testdata.name);
await signupLogin.enterEmailAddress(testdata.email);
await signupLogin.clickSignupButton();
//await createAccountPage.selectTitle(Title);
await createAccountPage.fillName(testdata.name);
await createAccountPage.fillEmail(testdata.email);
await createAccountPage.fillPassword(testdata.password);
//await createAccountPage.fillDateOfBirth(Day,Month,Year);
await createAccountPage.fillFirstname(testdata.fname);
await createAccountPage.fillLastname(testdata.lname);
await createAccountPage.fillcompany(Company);
await createAccountPage.fillAddress1(testdata.address.street);
await createAccountPage.fillAddress2(Address2);
await createAccountPage.fillCountry(testdata.address.country);
await createAccountPage.fillState(testdata.address.state);
await createAccountPage.fillCity(testdata.address.city);
await createAccountPage.fillZipcode(testdata.address.zip);
await createAccountPage.fillMobilenumber(testdata.mobile);


await createAccountPage.clickCreateButton();


await createAccountPage.verifyAccountCreatedText();


await createAccountPage.clickcontinueButton();


await homePage.VerifyUserLogin(testdata.name);

// 12.Click 'Cart' button

await placeOrder.clickMainCart();
// 13. Click 'Proceed To Checkout' button
await placeOrder.proceedToCheckout();

// 14. Verify Address Details and Review Your Order

await placeOrder.gotoCart();
await checkoutPage.placeOrder();
// 15. Enter description in comment text area and click 'Place Order'

// Create an instance of the CheckoutPage class


// Verify that the components of the cart item with product number 1 are visible
await checkoutPage.verifyOrderItemsComponents(1);

// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date


// 17. Click 'Pay and Confirm Order' button


// 18. Verify success message 'Your order has been placed successfully!'


// 19. Click 'Delete Account' button


// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
})