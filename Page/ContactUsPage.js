const {expect} = require('@playwright/test');
exports.SignupLoginPage = class SignupLoginPage {

constructor(page)
{
    this.page = page;
    this.contactButton = page.locator('.fa.fa-envelope')



}
}