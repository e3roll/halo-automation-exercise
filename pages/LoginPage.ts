import BasePage from './BasePage';

class LoginPage extends BasePage {
  get url() {
    return '/login';
  }

  // Login section
  get loginTitle() {
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

  // Signup section
  get signupTitle() {
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
}

export default new LoginPage();
