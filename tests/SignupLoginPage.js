const {expect} = require('@playwright/test');
exports.SignupLoginPage = class SignupLoginPage {

constructor(page)
{
    this.page = page;
    this.NewUserText = page.getByText("New User Signup!");
    this.nameInput  = page.locator('//div[@class="signup-form"]//input[@type = "text"]'); 
    this.emailInput = page.locator('//div[@class="signup-form"]//input[@type = "email"]'); 
    this.signupButton = page.locator('//div[@class="signup-form"]//button'); 

    this.loginToYourAccountText = page.getByText("Login to your account");
    this.emailLogin = page.locator('//*[@class="login-form"]//*[@type = "email"]');
    this.pwLogin = page.locator('//*[@class="login-form"]//*[@type = "password"]');
    this.loginButton = page.getByRole('Button', {name:"Login"});
    this.errorMessage = page.locator("//p[normalize-space()='Your email or password is incorrect!']")
     //updated locators for logout page
    this.logoutButton = page.locator(".fa.fa-lock");
    this.signupErrorMessage = page.locator("//p[normalize-space()='Email Address already exist!']")

}

async verifyNewUserSignuptext()
{
    await expect(this.NewUserText).toBeVisible();
}

async enterName(name)
{
    await this.nameInput.fill(name);
}

async enterEmailAddress(email)
{
    await this.emailInput.fill(email);
}

async clickSignupButton()
{
    await expect(this.signupButton).toBeEnabled();
    await this.signupButton.click();
}

async verifyLoginToYourAccountText()
{
    await expect(this.loginToYourAccountText).toBeVisible();
}

async fillLoginEmail(email)
{
    await this.emailLogin.fill(email);
}

async fillLoginPassword(pw)
{
    await this.pwLogin.fill(pw);

}

async clickLoginButton()
{
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();
}

async verifyErrorMessage(){
    await expect(this.errorMessage).toBeVisible();
}

async clickLogoutButton()
{
    await this.logoutButton.click();
}

async verifySignupError()
{
    await expect(this.signupErrorMessage).toBeVisible();
}
}