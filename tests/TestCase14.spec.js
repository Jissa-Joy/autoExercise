const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
//const { CartPage } = require('./CartPage');
const { SignupLoginPage } = require('./SignupLoginPage');
const {CreateAccountPage} = require('./CreateAccountPage');
const { CheckoutPage } = require('../Page/CheckoutPage');
//const { PaymentPage  } = require('./PaymentPage');
const {PlaceOrderPage} =require('../Page/PlaceOrderPage');
//const {CartPage} = require('../Page/ca')

test.only('Test Case 14: Place Order: Register while Checkout', async() => {

//Test data
  const prodNo = "3";
  //Sign In Test data
  let Name = "jj2";
  let Email = "tessjoy@gmail.com";
  let Pw = "test123";
  let Day = "28"; 
  let Month = "November"; 
  let Year = "2000";
  let Title = "Mrs."; // or "Mrs.""
  let Fname = "Jhon";
  let Lname = "Stark";
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

//9. Fill all details in Signup and create account
  await signupLogin.fillsignupName(Name);
  await signupLogin.fillSignupEmailAddress(Email);
  await signupLogin.clickSignupButton();
  await createAccountPage.verifyenterAccountInformationText();
  await createAccountPage.selectTitle(Title);
  await createAccountPage.fillName(Name);
  await createAccountPage.fillEmail(Email);
  await createAccountPage.fillPassword(Pw);
  await createAccountPage.fillDateOfBirth(Day,Month,Year);
  await createAccountPage.selectCheckbox1();
  await createAccountPage.selectCheckbox2();
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

//10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await createAccountPage.verifyAccountCreatedText();
  await createAccountPage.clickcontinueButton();

//11. Verify ' Logged in as username' at top
  await homePage.VerifyUserLogin(Name);

//12.Click 'Cart' button
await placeOrder.clickMainCart();

//13. Click 'Proceed To Checkout' button
await placeOrder.proceedToCheckout();
//14. Verify Address Details and Review Your Order
  await checkoutPage.verifyDeliveryAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
  await checkoutPage.verifyBilllingAddress(Title,Fname,Lname,Company,Address1,Address2,Country,State,City,Zipcode,Mobilenumber);
  // console.log(checkoutPage.deliveryAddCol[1]);

//15. Enter description in comment text area and click 'Place Order'
  await checkoutPage.placeOrder();
  await checkoutPage.verifyOrderItemsComponents(1);
//16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
 /* await paymentPage.enterPaymentDetails(CardName,CardNo,cvc,ExpMonth,ExpYear);

//17. Click 'Pay and Confirm Order' button
  await paymentPage.clickPayButton();

 await page.pause(5000);

//18. Verify success message 'Your order has been placed successfully!'
  // await paymentPage.verifySuccessMessageVisibility();

//19. Click 'Delete Account' button
await homePage.clickDeleteAccountButton();

//20. Verify that 'ACCOUNT DELETED!' is visible
await expect(page.getByText("Account Deleted!")).toBeVisible();
await page.locator('.btn.btn-primary').click();*/
})
