const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const { afterEach } = require('node:test');
const { ProductsPage } = require('../Page/SearchProductPage');
const {ContactUsPage} = require('../Page/ContactUsPage')
const path = require('path');
const { AddProductsPage } = require('../Page/AddProductsPage');
const { ViewCartPage } = require('../Page/ViewCartPage');
const { AddProd } = require('../Page/AddProd');
const { VerifyProductsQtyPage } = require('../Page/VerifyProductsQtyPage');



test.skip('Test Case 6: Contact Us Form', async () => {

    //Test Data
    const Name = "Mark";
    const Email = "Mark@test.com";
    const Subject = "Automation";
    const Message = "Test message";
    
    const filePath = path.resolve(__dirname, 'dummyfile.pdf');
    
    //1. Launch Browser
    const browser = await chromium.launch();
    //Launch New Page
     const page = await browser.newPage();
    const homePage = new HomePage(page);
   //  const signupLogin = new SignupLoginPage(page);
     const contactUsPage = new ContactUsPage(page);
  //  const filePath = path.resolve(__dirname,'dummyfile.pdf')
    
     ///2. Navigate to url 'http://automationexercise.com'
     await homePage.navigateHomePage();
    
     //3. Verify that home page is visible successfully
     await homePage.verifyHomePageLaunched();
     
     //4. Click on 'Contact Us' button
     await contactUsPage.clickContactUsButton();
     await expect(page).toHaveURL(/.contact_us/)
     //5. Verify 'GET IN TOUCH' is visible
     await contactUsPage.verifyGetInTouchText();
    
     //6. Enter name, email, subject and message
      await contactUsPage.enterName(Name);
      await contactUsPage.enterEmail(Email);
      await contactUsPage.enterSubject(Subject);
      await contactUsPage.enterMessage(Message);
     
     // await page.pause(300);
    
     //7. Upload file
      await contactUsPage.uploadFile(filePath);
   //   await page.pause(5000);
    
     //.8. Click 'Submit' button
     //await contactUsPage.interactPopupOK();
    
     await contactUsPage.clickSubmitButton();
   //await page.pause(1000)
   // await contactUsPage.interactPopupOK();
    //.9 click Ok on popup
  
    //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
   await contactUsPage.VerifySuccessMessage();
    
    //11. Click 'Home' button and verify that landed to home page successfully
    await contactUsPage.clickHomeButton();
    await homePage.verifyHomePageLaunched();
    
    })

    
    test.only('TC 12:Add Products in Cart', async () => {
    

        //1. Launch Browser
        const browser = await chromium.launch();
        //Launch New Page
        const page = await browser.newPage();

        const homePage = new HomePage(page);
        const addProducts = new AddProductsPage(page);
        const viewCart = new ViewCartPage(page);

        //2. Navigate to url 'http://automationexercise.com'
        await homePage.navigateHomePage();

        //3. Verify that home page is visible successfully
        await homePage.verifyHomePageLaunched();
        //4.  
        await addProducts.gotoProducts();

        //5.
        await addProducts.itemHover();
        //6.

        await addProducts.addFirstProductToCart();
        await addProducts.continueShop();
        //hover over 2nd item and add
        await addProducts.itemHover();
        await addProducts.addSecondProductToCart();
        //7.
        await addProducts.viewCart();
      
          //8.
       //  await addProducts.navigateToCart();
         await viewCart.verifyProductDetails('Blue Top', 'Rs. 500', 1, 'Rs. 500');
         await viewCart.verifyProductDetails('Men Tshirt', 'Rs. 400', 1, 'Rs. 400');
              //await addProducts.verifyItemQty(qty);
    })

    test.only('TC 13:Verify Product Quantity in Cart', async () => {
    
        
        //1. Launch Browser
        const browser = await chromium.launch();
        //Launch New Page
        const page = await browser.newPage();

        const homePage = new HomePage(page);
        const addProducts = new AddProductsPage(page);
        const viewCart = new ViewCartPage(page);
        const verifyProd = new VerifyProductsQtyPage(page);

        //2. Navigate to url 'http://automationexercise.com'
        await homePage.navigateHomePage();

        //3. Verify that home page is visible successfully
        await homePage.verifyHomePageLaunched();

        //4.click 'view product' for any product on home page
        await verifyProd.viewProduct();
            
        //5.verify product detail is opened
       await verifyProd.navigateTo();

        //6.increase quantity to 4
       await verifyProd.addQuantity();

        //7.click add to cart button
        await verifyProd.addToCart();
        //8.click view cart button  -- call view cart from previous TC
        await addProducts.viewCart();
        //9.verity that product is displayed in cart page with exact quantity
         
         await verifyProd.verifyProductInCartWithQuantity('Stylish Dress', 4);


    })

