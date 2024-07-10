import { test, expect } from '@playwright/test';
const {chromium} = require('playwright');

test('Verify Register User', async ({ }) => {

   

    // 1. Launch Browser
    const browser = await chromium.launch();   
    const page = await browser.newPage();       

    // 2. Go to URL
    await page.goto('http://automationexercise.com'); 

    // 3. Verify home page is opened succesfully    
    await expect(page).toHaveTitle('Automation Exercise'); 

//     // 4. CLick on SignUp/Login button 
//     await page.getByText(" Signup / Login").click();   

//     // 5. New User Signup! to be visible          
//     await expect(page.getByText("New User Signup!")).toBeVisible(); 

//     // 6. Enter name and email address 
//     await page.locator('//div[@class="signup-form"]//input[@type = "text"]').fill("AT01"); 
//     await page.locator('//div[@class="signup-form"]//input[@type = "email"]').fill("AT01@gmail.com");  

//     // 7. click signup button
//     const submit = await page.locator('//div[@class="signup-form"]//button'); 
//     await expect(submit).toBeEnabled();
//     await submit.click();

//     //8. Verify 'ENTER ACCOUNT INFORMATION' is visible 
//     await expect(page.getByText("Enter Account Information")).toBeVisible();   

//     // 9. Fill details: Title, Name, Email, Password, Date of birth

//     if (Title !== "Mr.") {                                            
//       await page.locator('//*[@id="id_gender2"]').check();
//     } else {
//       await page.locator('//*[@id="id_gender1"]').check();
//     }

//     const inputValueName  = await page.locator('//*[@id="name"]').inputValue(); //fill Name  
//     if (inputValueName !== Name){
//         await page.locator('//*[@id="name"]').fill(Name);
//     }

//     await expect(page.locator('//*[@id="email"]')).toHaveValue(Email);  //fill email (already filled)
//     await page.locator("//*[@id='password']").fill(Pw);    //fill Password
//     await page.locator("//*[@id='days']").selectOption(Day);  
//     await page.locator("//*[@id='months']").selectOption(Month);  
//     await page.locator("//*[@id='years']").selectOption(Year);  
    
//     // 10.  Select checkbox 'Sign up for our newsletter!'
//     await page.getByLabel("Sign up for our newsletter!").check();

//      // 11.  Select checkbox 'Receive special offers from our partners!'
//      await page.getByLabel("Receive special offers from our partners!").check();

//      await page.locator("//*[@id='first_name']").fill("John");
//      await page.locator("//*[@id='last_name']").fill("Joe");
//      await page.locator("//*[@id='company']").fill("KJR");
//      await page.locator("//*[@id='address1']").fill("collin street");
//      await page.locator("//*[@id='address2']").fill("");
//      await page.locator("//*[@id='country']").selectOption("Australia");
//      await page.locator("//*[@id='state']").fill("Victoria");
//      await page.locator("//*[@id='city']").fill("Melbourne");
//      await page.locator("//*[@id='zipcode']").fill("3000");
//      await page.locator("//*[@id='mobile_number']").fill("0421567345");

//      await page.getByRole('Button', {name : "Create Account"}).click();
// })
