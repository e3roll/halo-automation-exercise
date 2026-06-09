import BasePage, { DEFAULT_TIMEOUT } from './BasePage';

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

  async waitForPageLoad(): Promise<void> {
    await super.waitForPageLoad();
    await this.logo.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  }

  async clickSignupLogin(): Promise<void> {
    await this.signupLoginBtn.click();
  }
}

export default new HomePage();
