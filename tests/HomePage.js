const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;

    this.locators = {
      signupLogin: page.getByText(" Signup / Login"),
      deleteAccountButton: page.locator('.fa.fa-trash-o'),
      logoutButton: page.locator("a[href='/logout']"),
      contactUsButton: page.locator("a[href='/contact_us']"),
      homeButton: page.locator(".fa.fa-home"),
      testCasesButton: page.locator("(//a[contains(text(),'Test Cases')])"),
      productButton: page.locator("//a[@href='/products']"),
      cartButton: page.locator("//*[@class = 'nav navbar-nav']//*[contains(text(),'Cart')]"),
      subscriptionText: page.getByText("Subscription", { exact: true }),
      subscribeEmail: page.locator("#susbscribe_email"),
      subscribeButton: page.locator("#subscribe"),
      subscriptionMessage: page.getByText("You have been successfully subscribed!"),
      introText: page.locator("//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]"),
      scrollUpButton: page.locator("#scrollUp"),
      addButton: page.locator(".grippy-host"),
      viewCart: page.getByRole('link', { name: "View Cart" })
    };
  }

  async navigateHomePage() {
    await this.page.goto('https://www.automationexercise.com');
  }

  async verifyHomePageLaunched() {
    await expect(this.page).toHaveTitle("Automation Exercise");
  }

  async clickButton(button) {
    console.log('Button locator:', button);
    if (!button) {
      throw new Error('Button locator is undefined');
    }
    await button.click();
  }
  

  async verifyElementVisibility(element) {
    await expect(element).toBeVisible();
  }

  async verifyUserLogin(name) {
    await expect(this.page.locator(`text=Logged in as ${name}`)).toBeVisible();
  }

  async enterSubscribeEmailAndSubmit(email) {
    await this.locators.subscribeEmail.fill(email);
    await this.locators.subscribeButton.click();
  }

  async addToCartButtonLocator(prodNo) {
    return this.page.locator(`//div[@class="features_items"]//div[@class="productinfo text-center"]//a[@data-product-id=${prodNo}]`);
  }

  async clickAddToCartButton(prodNo) {
    const addToCartButton = await this.addToCartButtonLocator(prodNo);
    await addToCartButton.click();
  }
};
