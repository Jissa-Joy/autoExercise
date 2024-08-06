const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
//const { CartPage } = require('./CartPage');
const { SignupLoginPage } = require('./SignupLoginPage');
const {CreateAccountPage} = require('./CreateAccountPage');
const { CheckoutPage } = require('../Page/CheckoutPage');
//const { PaymentPage  } = require('./PaymentPage');
const {PlaceOrderPage} =require('../Page/PlaceOrderPage');
const {PaymentPage} = require('../Page/PaymentPage')
test.only('Test Case 14: Place Order: Register while Checkout', async() => {

//Test data
  const prodNo = "3";
  //Sign In Test data
  let Name = "jj2";
  let Email = "tess2j@gmail.com";
  let Pw = "test123";
  let Day = "24"; 
  let Month = "August"; 
  let Year = "2000";
  let Title = "Mrs."; // or "Mrs.""
  let Fname = "Tess";
  let Lname = "Jo";
  let Company = "KJR";
  let Address1 = "Collin Square";
  let Address2 = "";
  let Country = "Australia";
  let State = "Victoria";
  let City = "Melboune";
  let Zipcode = "3000";
  let Mobilenumber = "0400000000";

//Payment test data
 let CardName = "Jhon";
 let CardNo = "123345566";
 let cvc = "234";
 let ExpMonth = "10";
 let ExpYear = "2025";
    
//1. Launch Browser
  const browser = await chromium.launch();
//Launch New Page
  const page = await browser.newPage();

  const homePage = new HomePage(page);
 // const cartPage = new CartPage(page);
  const signupLogin = new SignupLoginPage(page);
  const createAccountPage = new CreateAccountPage(page);
  const checkoutPage = new CheckoutPage(page);
 // const paymentPage = new PaymentPage(page);
  const placeOrder = new PlaceOrderPage(page);
  const paymentPage = new PaymentPage(page);
//2. Navigate to URL home page
  await homePage.navigateHomePage(); 

//3. Verify homepage is visible successfully 
  await homePage.verifyHomePageLaunched();

//4. Add products to cart

  await homePage.clickAddTOCartButton(prodNo);

// 5. Click 'Cart' button
await placeOrder.cartBtnClick();

// 6. Verify that cart page is displayed

await placeOrder.verifyCartPageLaunched();
// 7. Click Proceed To Checkout

await placeOrder.proceedToCheckout();
// 8. Click 'Register / Login' button

await placeOrder.clickRegister();
await homePage.navigateHomePage(); 
 await homePage.clickSignupLogin();
 await signupLogin.verifyNewUserSignuptext();

await signupLogin.enterName(Name);
await signupLogin.enterEmailAddress(Email);

//7. Click 'Signup' button
await signupLogin.clickSignupButton();

//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
await createAccountPage.verifyenterAccountInformationText();

//9.Fill details: Title, Name, Email, Password, Date of birth
await createAccountPage.selectTitle(Title);
await createAccountPage.fillName(Name);
await createAccountPage.fillEmail(Email);
await createAccountPage.fillPassword(Pw);
await createAccountPage.fillDateOfBirth(Day,Month,Year);

//10.Select checkbox 'Sign up for our newsletter!'
 await createAccountPage.selectCheckbox1();

 //11.Select checkbox 'Receive special offers from our partners!'
 await createAccountPage.selectCheckbox2();

 //12.  Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
 await createAccountPage.fillFirstname(Fname);
 await createAccountPage.fillLastname(Lname);
 await createAccountPage.fillcompany(Company);
 await createAccountPage.fillAddress1(Address1);
 await createAccountPage.fillAddress2(Address2);
 await createAccountPage.fillCountry(Country);
 await createAccountPage.fillState(State);
 await createAccountPage.fillCity(City);
 await createAccountPage.fillZipcode(Zipcode);
 await createAccountPage.fillMobilenumber(Mobilenumber);


 await createAccountPage.clickCreateButton();

  await createAccountPage.verifyAccountCreatedText();

  
  await createAccountPage.clickcontinueButton();

  //16.Verify that 'Logged in as username' is visible
  await homePage.VerifyUserLogin(Name);


//12.Click 'Cart' button
await placeOrder.clickMainCart();

//13. Click 'Proceed To Checkout' button
await placeOrder.proceedToCheckout();
//14. Verify Address Details and Review Your Order
  await checkoutPage.verifyDeliveryAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
  await checkoutPage.verifyBilllingAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
  

//15. Enter description in comment text area and click 'Place Order'
  await checkoutPage.placeOrder();

  //16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await paymentPage.enterPaymentDetails(CardName,CardNo,cvc,ExpMonth,ExpYear);

//17. Click 'Pay and Confirm Order' button
  await paymentPage.clickPayButton();
  //18. Verify success message 'Your order has been placed successfully!'
  // await paymentPage.verifySuccessMessageVisibility();

//19. Click 'Delete Account' button
await homePage.clickDeleteAccountButton();

//20. Verify that 'ACCOUNT DELETED!' is visible
await expect(page.getByText("Account Deleted!")).toBeVisible();
await page.locator('.btn.btn-primary').click();

 // await checkoutPage.verifyOrderItemsComponents(1);

})

test.only('Test Case 15: Place Order: Register befoe Checkout', async() => {

  //Test data
    const prodNo = "3";
    //Sign In Test data
    let Name = "jess";
    let Email = "jessjo@gmail.com";
    let Pw = "test123";
    let Day = "24"; 
    let Month = "August"; 
    let Year = "2000";
    let Title = "Mrs."; // or "Mrs.""
    let Fname = "Jess";
    let Lname = "Jo";
    let Company = "KJR";
    let Address1 = "Collin Square";
    let Address2 = "";
    let Country = "Australia";
    let State = "Victoria";
    let City = "Melboune";
    let Zipcode = "3000";
    let Mobilenumber = "0400000000";
  
  //Payment test data
   let CardName = "Jess";
   let CardNo = "123345566";
   let cvc = "234";
   let ExpMonth = "10";
   let ExpYear = "2025";
      
  //1. Launch Browser
    const browser = await chromium.launch();
  //Launch New Page
    const page = await browser.newPage();
  
    const homePage = new HomePage(page);
   // const cartPage = new CartPage(page);
    const signupLogin = new SignupLoginPage(page);
    const createAccountPage = new CreateAccountPage(page);
    const checkoutPage = new CheckoutPage(page);
   // const paymentPage = new PaymentPage(page);
    const placeOrder = new PlaceOrderPage(page);
    const paymentPage = new PaymentPage(page);
  //2. Navigate to URL home page
    await homePage.navigateHomePage(); 
  
  //3. Verify homepage is visible successfully 
    await homePage.verifyHomePageLaunched();
  
//4. Click 'Signup / Login' button
   await homePage.clickSignupLogin();

  //5. Fill all details in Signup and create account
  await signupLogin.enterName(Name);
  await signupLogin.enterEmailAddress(Email);
  await signupLogin.clickSignupButton();
  
   
  //Fill details: Title, Name, Email, Password, Date of birth
  await createAccountPage.selectTitle(Title);
  await createAccountPage.fillName(Name);
  await createAccountPage.fillEmail(Email);
  await createAccountPage.fillPassword(Pw);
  await createAccountPage.fillDateOfBirth(Day,Month,Year);
  
  //Select checkbox 'Sign up for our newsletter!'
   await createAccountPage.selectCheckbox1();
  
   //Select checkbox 'Receive special offers from our partners!'
   //await createAccountPage.selectCheckbox2();
  
   //  Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
   await createAccountPage.fillFirstname(Fname);
   await createAccountPage.fillLastname(Lname);
   await createAccountPage.fillcompany(Company);
   await createAccountPage.fillAddress1(Address1);
   await createAccountPage.fillAddress2(Address2);
   await createAccountPage.fillCountry(Country);
   await createAccountPage.fillState(State);
   await createAccountPage.fillCity(City);
   await createAccountPage.fillZipcode(Zipcode);
   await createAccountPage.fillMobilenumber(Mobilenumber);
  
  
   await createAccountPage.clickCreateButton();
  
    await createAccountPage.verifyAccountCreatedText();
  
    
    await createAccountPage.clickcontinueButton();
  
    //7.Verify that 'Logged in as username' is visible
    await homePage.VerifyUserLogin(Name);
  
    //8. Add products to cart
   
  await homePage.clickAddTOCartButton(prodNo);

  // 9. Click 'Cart' button
  await placeOrder.cartBtnClick();
  
  // 10. Verify that cart page is displayed
  
  await placeOrder.verifyCartPageLaunched();
  // 11. Click Proceed To Checkout
  
  await placeOrder.proceedToCheckout();

  //12. Verify Address Details and Review Your Order
    await checkoutPage.verifyDeliveryAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
    await checkoutPage.verifyBilllingAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
    
  
  //13. Enter description in comment text area and click 'Place Order'
    await checkoutPage.placeOrder();
  
    //14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    await paymentPage.enterPaymentDetails(CardName,CardNo,cvc,ExpMonth,ExpYear);
  
  //15. Click 'Pay and Confirm Order' button
    await paymentPage.clickPayButton();
    //16. Verify success message 'Your order has been placed successfully!'
    // await paymentPage.verifySuccessMessageVisibility();
  
  //17. Click 'Delete Account' button
  await homePage.clickDeleteAccountButton();
  
  //18. Verify that 'ACCOUNT DELETED!' is visible
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.locator('.btn.btn-primary').click();
  
   // await checkoutPage.verifyOrderItemsComponents(1);
  
  })
  