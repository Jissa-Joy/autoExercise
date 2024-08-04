const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { MainPage } = require('../Page/RemoveProducts');
const { RemoveProducts } = require('../Page/RemoveProducts');
const {PlaceOrderPage} =require('../Page/PlaceOrderPage');
const { afterEach } = require('node:test');
const { HomePage } = require('./HomePage');
test('Test Case 17: Remove Products ', async () => {


  
 let prodNo='3'
    const browser = await chromium.launch();
    //Launch New Page
      const page = await browser.newPage();
    
      const homePage = new HomePage(page);
   
       const removeProduct= new RemoveProducts(page);
      const placeOrder = new PlaceOrderPage(page);
    //2. Navigate to URL home page
      await homePage.navigateHomePage(); 
    
    //3. Verify homepage is visible successfully 
      await homePage.verifyHomePageLaunched();
    
    //4. Add products to cart
 await placeOrder.clickProduct(prodNo)
//click add cart button here

    // 5. Click 'Cart' button
    await placeOrder.cartBtnClick();
    
    // 6. Verify that cart page is displayed
    
    await placeOrder.verifyCartPageLaunched();

       // Step 6: Click 'X' button corresponding to a specific product by ID
    await removeProduct.clickRemoveButtonForProductById(3); 


});


test('Test Case 19: View Category Products ', async () => {

    const browser = await chromium.launch();
//Launch New Page
  const page = await browser.newPage();
// 1. Launch browser
const homePage = new HomePage(page);

// 2. Navigate to url 'http://automationexercise.com'

await homePage.navigateHomePage(); 

// 3. Click on 'Products' button

// 4. Verify that Brands are visible on left side bar

// 5. Click on any brand name

// 6. Verify that user is navigated to brand page and brand products are displayed

// 7. On left side bar, click on any other brand link

// 8. Verify that user is navigated to that brand page and can see products

})