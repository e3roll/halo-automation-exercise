import BasePage from './BasePage';

class HomePage extends BasePage {
  get url() {
    return '/';
  }

  get signupLoginBtn() {
    return $('a[href="/login"]');
  }

  get logo() {
    return $('img[src="/static/images/home/logo.png"]');
  }

  async isDisplayed(): Promise<boolean> {
    await this.logo.waitForDisplayed({ timeout: 10000 });
    return this.logo.isDisplayed();
  }

  async clickSignupLogin(): Promise<void> {
    await this.signupLoginBtn.click();
  }
}

export default new HomePage();
