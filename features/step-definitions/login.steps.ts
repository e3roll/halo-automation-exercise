import { When, Then } from '@wdio/cucumber-framework';
import loginPage from '../../pages/LoginPage';
import accountPage from '../../pages/AccountPage';

When(
  'I login with email {string} and password {string}',
  async (email: string, password: string) => {
    await loginPage.loginWith(email, password);
  }
);

Then('I should see the login error {string}', async (errorText: string) => {
  await loginPage.loginErrorMessage.waitForDisplayed({ timeout: 10000 });
  const error = await loginPage.loginErrorMessage.getText();
  if (!error.includes(errorText)) {
    throw new Error(`Expected login error "${errorText}" but got: "${error}"`);
  }
});