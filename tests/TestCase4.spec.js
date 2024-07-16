const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const { afterEach } = require('node:test');
const { ProductsPage } = require('../Page/ProductsPage');
const {ContactUsPage} = require('../Page/ContactUsPage')
const path = require('path');
const { AddProductsPage } = require('../Page/AddProductsPage');
const { ViewCartPage } = require('../Page/ViewCartPage');
const { AddProd } = require('../Page/AddProd');



test('Test Case 6: Contact Us Form', async () => {

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

    //Test Case 12 below
    test.only('Test Case 12:Add Products in Cart', async () => {
        
        //1. Launch Browser
        const browser = await chromium.launch();
        //Launch New Page
         const page = await browser.newPage();
        
         const homePage = new HomePage(page);
         const addProdPage = new AddProd(page);
         const viewCart = new ViewCartPage(page);
      
         //2. Navigate to url 'http://automationexercise.com'
         await homePage.navigateHomePage();
        
        //3. Verify that home page is visible successfully
        await homePage.verifyHomePageLaunched();
       
        //4.Click Products button

        await addProdPage.gotoProducts();
     
        //5. Hover over first product and click add to cart
       await addProdPage.addFirstProductToCart();

        //6.Click continue shopping button
       await addProdPage.continueShop();
      
        //7.Hover over second product and click 'Add to Cart'
        await addProdPage.itemHover();
        await addProdPage.addSecondProductToCart() ;
    
        //8.Click View Cart Button
    
         await addProdPage.addProd();
        //9.Verify both products are added to Cart
        await addProdPage.viewCart();

        //10. Verify the prices, quantity and total price

          await addProdPage.verifyProdDetails();
    })

    test.only('TC 12:Add Products in Cart', async () => {
    
        let qty ="1"
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
        await addProducts.viewCartOption();
        await page.pause(1000);
          //8.
         await addProducts.navigateToCart();
         
              await addProducts.verifyItemQty(qty);
    })