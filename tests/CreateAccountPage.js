const { expect } = require('@playwright/test');

exports.CreateAccountPage = class CreateAccountPage {
  constructor(page) {
    this.page = page;

    this.locators = {
      accountInformationText: page.getByText("Enter Account Information"),
      genderMale: page.locator('#id_gender1'),
      genderFemale: page.locator('#id_gender2'),
      nameInput: page.locator('#name'),
      emailInput: page.locator('#email'),
      password: page.locator('#password'),
      days: page.locator('#days'),
      months: page.locator('#months'),
      years: page.locator('#years'),
      checkbox1: page.getByLabel("Sign up for our newsletter!"),
      checkbox2: page.getByLabel("Receive special offers from our partners!"),
      fname: page.locator('#first_name'),
      lname: page.locator('#last_name'),
      company: page.locator('#company'),
      address1: page.locator('#address1'),
      address2: page.locator('#address2'),
      country: page.locator('#country'),
      state: page.locator('#state'),
      city: page.locator('#city'),
      zipcode: page.locator('#zipcode'),
      mobile: page.locator('#mobile_number'),
      createButton: page.getByRole('Button', { name: "Create Account" }),
      accountCreatedText: page.getByText("Account Created!"),
      continueButton: page.locator('.btn.btn-primary')
    };
  }

  async verifyVisibility(element) {
    await expect(element).toBeVisible();
  }

  async fillField(locator, value) {
    const inputValue = await locator.inputValue();
    if (inputValue !== value) {
      await locator.fill(value);
    }
  }

  async selectTitle(title) {
    if (title !== "Mr.") {
      await this.locators.genderFemale.check();
    } else {
      await this.locators.genderMale.check();
    }
  }

  async fillUserDetails(userData) {
    await this.fillField(this.locators.nameInput, userData.name);
    await this.fillField(this.locators.emailInput, userData.email);
    await this.fillField(this.locators.password, userData.password);
    await this.locators.days.selectOption(userData.dob.day);
    await this.locators.months.selectOption(userData.dob.month);
    await this.locators.years.selectOption(userData.dob.year);
    await this.locators.checkbox1.check();
    await this.locators.checkbox2.check();
  }

  async fillAddressDetails(userData) {
    await this.fillField(this.locators.fname, userData.firstName);
    await this.fillField(this.locators.lname, userData.lastName);
    await this.fillField(this.locators.company, userData.company);
    await this.fillField(this.locators.address1, userData.address1);
    await this.fillField(this.locators.address2, userData.address2);
    await this.locators.country.selectOption(userData.country);
    await this.fillField(this.locators.state, userData.state);
    await this.fillField(this.locators.city, userData.city);
    await this.fillField(this.locators.zipcode, userData.zipCode);
    await this.fillField(this.locators.mobile, userData.mobileNumber);
  }

  async clickCreateButton() {
    await this.locators.createButton.click();
  }

  async clickContinueButton() {
    await this.locators.continueButton.click();
  }
};
