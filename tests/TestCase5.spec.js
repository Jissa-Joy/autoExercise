const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { afterEach } = require('node:test');
const { SignupLoginPage } = require('./SignupLoginPage');
const {PlaceOrderPage} =require('../Page/PlaceOrderPage');


test.only('TC 14:Place Order: Register with CheckOUT', async () => {
    
// 1. Launch browser
const browser = await chromium.launch();
 //Launch New Page
 const page = await browser.newPage();

 const homePage = new HomePage(page);
 const addProducts = new AddProductsPage(page);
 const viewCart = new ViewCartPage(page);
 const verifyProd = new VerifyProductsQtyPage(page);

// 2. Navigate to url 'http://automationexercise.com'
await homePage.navigateHomePage();

// 3. Verify that home page is visible successfully
await homePage.verifyHomePageLaunched();


// 4. Add products to cart


// 5. Click 'Cart' button


// 6. Verify that cart page is displayed


// 7. Click Proceed To Checkout


// 8. Click 'Register / Login' button


// 9. Fill all details in Signup and create account


// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button


// 11. Verify ' Logged in as username' at top


// 12.Click 'Cart' button


// 13. Click 'Proceed To Checkout' button


// 14. Verify Address Details and Review Your Order


// 15. Enter description in comment text area and click 'Place Order'


// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date


// 17. Click 'Pay and Confirm Order' button


// 18. Verify success message 'Your order has been placed successfully!'


// 19. Click 'Delete Account' button


// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
})