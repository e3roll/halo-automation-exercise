import { When, Then } from '@wdio/cucumber-framework';
import loginPage from '../../pages/LoginPage';
import accountPage from '../../pages/AccountPage';
import { DEFAULT_TIMEOUT } from '../../pages/BasePage';

When('I click Logout', async () => {
  await accountPage.logout();
});

Then('I should be on the login page', async () => {
  await loginPage.loginTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
});
