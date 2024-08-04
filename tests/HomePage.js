const {expect} = require('@playwright/test');
exports.HomePage = class HomePage {

constructor(page){

    this.page = page;
    //Menu locators
    this.signupLogin = page.getByText(" Signup / Login");
    this.deleteAccountButton = page.locator('.fa.fa-trash-o') ;
    this.logoutButton = page.locator("a[href='/logout']");
    this.contactusbutton = page.locator("a[href='/contact_us']");
    this.homeButton = page.locator(".fa.fa-home");
    this.testCasesButton = page.locator("(//a[contains(text(),'Test Cases')])");
    this.productButton = page.locator("//a[@href='/products']");
    this.cartButton = page.locator("//*[@class = 'nav navbar-nav']//*[contains(text(),'Cart')]");
    this.subscriptionText = page.getByText("Subscription", {exact : true});
    this.subscribeEmail = page.locator("#susbscribe_email");
    this.subscribeButton = page.locator("#subscribe");
    this.subscriptionMessage = page.getByText("You have been successfully subscribed!");
    this.introText = page.locator("//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]");
    this.scrollUpButton = page.locator("#scrollUp");
    this.addButton = page.locator(".grippy-host");

    this.viewCart = page.getByRole('link',{name: "View Cart"});

    
  


}

async navigateHomePage()
{
    await this.page.goto('https://www.automationexercise.com'); 
}

async verifyHomePageLaunched()
{
    await expect(this.page).toHaveTitle("Automation Exercise");
}

async clickHomeButton()
{
    await this.homeButton.click();
}

async clickSignupLogin()
{
    await this.signupLogin.click();
}

async VerifyUserLogin(name)
{
    await expect(this.page.locator(`text=Logged in as ${name}`)).toBeVisible();
}

async clickDeleteAccountButton()
{
    await this.deleteAccountButton.click();
}

async clickLogoutButton()
{
    await this.logoutButton.click();
}

async clickContactUsButton()
{
    await this.contactusbutton.click();
}

async clickTestCasesButton()
{
    await this.testCasesButton.click();
}

async clickProductButton()
{
    await this.productButton.click();
}

async clickCartButton()
{
    await this.cartButton.click();
}

async verifySubscriptionTextVisibility()
{
    await expect(this.subscriptionText).toBeVisible();
}

async enterSusbscribeEmail(email)
{
    await this.subscribeEmail.click();
    await this.subscribeEmail.fill(email);
    await this.subscribeButton.click();
}

async verifySubscriptionMessageVisibility()
{
    await expect(this.subscriptionMessage).toBeVisible();
}

async verifyIntroTextVisibility()
{
    await expect(this.introText).toBeVisible();
}

//method to locate add to cart button
addToCartButtonLocator(prodNo)
{
 return this.page.locator(`//div[@class="features_items"]//div[@class = "productinfo text-center"]//a[@data-product-id = ${prodNo}]`)
}

async clickAddTOCartButton(prodNo)
{
    const addTOCartButton = this.addToCartButtonLocator(prodNo);
    await addTOCartButton.click();
}

async clickViewCart()
{
    await this.viewCart.click();
}

}
