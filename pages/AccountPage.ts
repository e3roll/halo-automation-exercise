import BasePage from './BasePage';

class AccountPage extends BasePage {
  get deleteAccountBtn() {
    return $('a[href="/delete_account"]');
  }

  get loggedInUsername() {
    return $(`//a[contains(., 'Logged in as')]//b`);
  }

  get continueButton() {
    return $('a[data-qa="continue-button"]');
  }

  get logoutBtn() {
    return $('a[href="/logout"]');
  }

  async isLoggedIn(username: string): Promise<boolean> {
    // The nav renders "Logged in as <b>username</b>" inside an <a> tag when authenticated
    const loggedInEl = await $(`//a[contains(., 'Logged in as')]`);
    await loggedInEl.waitForDisplayed({ timeout: 10000 });
    const text = await loggedInEl.getText();
    return text.includes(`Logged in as ${username}`);
  }

  async getLoggedInUsername(): Promise<string> {
    return this.loggedInUsername.getText();
  }

  async deleteAccount(): Promise<void> {
    await this.deleteAccountBtn.click();
  }

  async isAccountDeleted(): Promise<boolean> {
    const heading = await $('h2[data-qa="account-deleted"] b');
    await heading.waitForDisplayed({ timeout: 10000 });
    return (await heading.getText()).toUpperCase().includes('ACCOUNT DELETED');
  }

  async clickContinueAfterDelete(): Promise<void> {
    await this.continueButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutBtn.click();
  }
}

export default new AccountPage();
