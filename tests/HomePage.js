const {expect} = require('@playwright/test');
exports.HomePage = class HomePage {

constructor(page){

    this.page = page;
    this.signupLogin = page.getByText(" Signup / Login");
    this.deleteAccountButton = page.locator('.fa.fa-trash-o') ;
    // this.loggedIn = page.getByText("Logged In as $(name)");
   



}

async navigateHomePage()
{
    await this.page.goto('https://www.automationexercise.com'); 
}

async verifyHomePageLaunched()
{
    await expect(this.page).toHaveTitle("Automation Exercise");
}

async clickSignupLogin()
{
    await this.signupLogin.click();
}

async VerifyUserLogin(name)
{
    await expect(this.page.locator(`text=Logged in as ${name}`)).toBeVisible();;
}

async clickDeleteAccountButton()
{
    await this.deleteAccountButton.click();
}
//Locators for Logout user and Register user with existing email pages (TC4 & TC5)

async navigateLoginPage()
{
    await this.page.goto('https://www.automationexercise.com/login'); 
}



}
