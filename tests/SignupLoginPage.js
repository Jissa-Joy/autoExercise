exports.SignupLoginPage = class SignupLoginPage {
    constructor(page) {
      this.page = page;
  
      // Locators for elements on the page
      this.signupLogin = page.locator('text= Signup / Login');
      this.loginText = page.locator('h2');
      this.signupEmail = page.locator('input[data-qa="signup-email"]');  // Target the signup email field
      this.loginEmail = page.locator('input[data-qa="login-email"]');  // Target the login email field
      this.signupPassword = page.locator('input[name="password"]');  // Locator for password input
      this.signupButton = page.locator('button[type="submit"]');
      this.errorMessage = page.locator('.error-message');
    }
  
    // Method to verify visibility of a Locator
    async verifyVisibility(locator) {
      await expect(locator).toBeVisible();  // Ensure the locator is visible
    }
  
    // Method to enter user details for signup/login
    async enterUserDetails(email, password, isLogin = false) {
      const emailLocator = isLogin ? this.loginEmail : this.signupEmail; // Decide which locator to use based on login/signup
      console.log('Entering user details - Email:', email, 'Password:', password);  // Debugging log
      await emailLocator.waitFor({ state: 'visible' });  // Wait for the email input field to be visible
      await emailLocator.fill(email);  // Fill the email input
  
      await this.signupPassword.waitFor({ state: 'visible' });  // Wait for the password input field to be visible
      await this.signupPassword.fill(password);  // Fill the password input
    }
  
    // Verify if error message is visible
    async verifyErrorMessage() {
      await this.verifyVisibility(this.errorMessage);
    }
  
    // Verify visibility of the 'Login to Your Account' text
    async verifyLoginToYourAccountText() {
      await this.verifyVisibility(this.loginText);
    }
  
    // Verify visibility of Signup / Login button
    async verifySignupLoginVisibility() {
      await this.verifyVisibility(this.signupLogin);
    }
  };
  