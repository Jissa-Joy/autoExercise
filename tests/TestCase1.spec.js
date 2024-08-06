const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');
const { SignupLoginPage } = require('./SignupLoginPage');
const {CreateAccountPage} = require('./CreateAccountPage');

test('Test Case 1: Register User ', async () => {

     //Test data
    let Name = "VR001";
    let Email = "VR001@gmail.com";
    let Pw = "VRpw01";
    let Day = "28"; 
    let Month = "November"; 
    let Year = "1998";
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
    let Mobilenumber = "0421567345";

    //1. Launch Browser
    const browser = await chromium.launch();
    //Launch New Page
     const page = await browser.newPage();

    const homePage = new HomePage(page);
    const signupLogin = new SignupLoginPage(page);
    const createAccountPage = new CreateAccountPage(page);


    //2. Navigate to URL home page
    await homePage.navigateHomePage(); 

    //3. Verify homepage is visible successfully 
    await homePage.verifyHomePageLaunched();

    //4. click on SignUp/LogIn option 
    await homePage.clickSignupLogin();

    //5. Verify 'New User Signup!' is visible
    await signupLogin.verifyNewUserSignuptext();

    //6.Enter name and email address
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
     await createAccountPage.fillLastname(Fname);
     await createAccountPage.fillcompany(Company);
     await createAccountPage.fillAddress1(Address1);
     await createAccountPage.fillAddress2(Address2);
     await createAccountPage.fillCountry(Country);
     await createAccountPage.fillState(State);
     await createAccountPage.fillCity(City);
     await createAccountPage.fillZipcode(Zipcode);
     await createAccountPage.fillMobilenumber(Mobilenumber);

     //13.Click 'Create Account button'
     await createAccountPage.clickCreateButton();

     //14.Verify that 'ACCOUNT CREATED!' is visible
     await createAccountPage.verifyAccountCreatedText();

     //15.Click 'Continue' button
     await createAccountPage.clickcontinueButton();

     //16.Verify that 'Logged in as username' is visible
     await homePage.VerifyUserLogin(Name);

     //17. Click 'Delete Account' button
     await homePage.clickDeleteAccountButton();

     //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     await expect(page.getByText("Account Deleted!")).toBeVisible();
     await page.locator('.btn.btn-primary').click();

})




  


