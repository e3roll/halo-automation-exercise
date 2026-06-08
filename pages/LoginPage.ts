import BasePage from './BasePage';

class LoginPage extends BasePage {
  get url() {
    return '/login';
  }

  // Login section
  get loginHeading() {
    return $('div.login-form h2');
  }

  get loginEmailInput() {
    return $('input[data-qa="login-email"]');
  }

  get loginPasswordInput() {
    return $('input[data-qa="login-password"]');
  }

  get loginButton() {
    return $('button[data-qa="login-button"]');
  }

  get loginErrorMessage() {
    return $('div.login-form p');
  }

  // Signup section
  get signupHeading() {
    return $('div.signup-form h2');
  }

  get signupNameInput() {
    return $('input[data-qa="signup-name"]');
  }

  get signupEmailInput() {
    return $('input[data-qa="signup-email"]');
  }

  get signupButton() {
    return $('button[data-qa="signup-button"]');
  }

  get signupErrorMessage() {
    return $('div.signup-form p');
  }

  async loginWith(email: string, password: string): Promise<void> {
    await this.loginEmailInput.setValue(email);
    await this.loginPasswordInput.setValue(password);
    await this.loginButton.click();
  }

  async signupWith(name: string, email: string): Promise<void> {
    await this.signupNameInput.setValue(name);
    await this.signupEmailInput.setValue(email);
    await this.signupButton.click();
  }

  async getLoginError(): Promise<string> {
    await this.loginErrorMessage.waitForDisplayed();
    return this.loginErrorMessage.getText();
  }

  async getSignupError(): Promise<string> {
    await this.signupErrorMessage.waitForDisplayed();
    return this.signupErrorMessage.getText();
  }

  async isLoginSectionVisible(): Promise<boolean> {
    return this.loginHeading.isDisplayed();
  }

  async isSignupSectionVisible(): Promise<boolean> {
    return this.signupHeading.isDisplayed();
  }
}

export default new LoginPage();
