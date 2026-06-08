import { When, Then } from '@wdio/cucumber-framework';
import loginPage from '../../pages/LoginPage';
import accountPage from '../../pages/AccountPage';

When('I click Logout', async () => {
  await accountPage.logout();
});

Then('I should be on the login page', async () => {
  await loginPage.loginHeading.waitForDisplayed({ timeout: 10000 });
});
