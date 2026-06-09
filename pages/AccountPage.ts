import BasePage from './BasePage';

class AccountPage extends BasePage {
  get deleteAccountBtn() {
    return $('a[href="/delete_account"]');
  }

  get loggedInUsername() {
    return $(`//a[contains(., 'Logged in as')]//b`);
  }

  get accountDeletedTitle() {
    return $('h2[data-qa="account-deleted"] b');
  }

  get logoutBtn() {
    return $('a[href="/logout"]');
  }

  async deleteAccount(): Promise<void> {
    await this.deleteAccountBtn.click();
  }

  async logout(): Promise<void> {
    await this.logoutBtn.click();
  }
}

export default new AccountPage();
