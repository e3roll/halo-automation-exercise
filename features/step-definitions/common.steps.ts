import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import homePage from '../../pages/HomePage';
import loginPage from '../../pages/LoginPage';
import signupPage from '../../pages/SignupPage';
import accountPage from '../../pages/AccountPage';
import { DEFAULT_TIMEOUT } from '../../pages/BasePage';

Given('I am on the home page', async () => {
  await homePage.open();
  await homePage.waitForPageLoad();
});

When('I click on Signup Login', async () => {
  await homePage.clickSignupLogin();
});

Then('I should see the {string} title', async (title: string) => {
  const upper = title.toUpperCase();

  if (upper.includes('NEW USER SIGNUP')) {
    await loginPage.signupTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  } else if (upper.includes('LOGIN TO YOUR ACCOUNT')) {
    await loginPage.loginTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  } else if (upper.includes('ENTER ACCOUNT INFORMATION')) {
    await signupPage.accountInfoTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  } else if (upper.includes('ACCOUNT CREATED')) {
    await signupPage.accountCreatedTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  } else if (upper.includes('ACCOUNT DELETED')) {
    await accountPage.accountDeletedTitle.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  } else {
    throw new Error(`Unknown title: "${title}"`);
  }
});

Then('I should be logged in as {string}', async (username: string) => {
  await accountPage.loggedInUsername.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  const text = await accountPage.loggedInUsername.getText();
  if (!text.includes(username)) {
    throw new Error(`Expected user "${username}" but got: "${text}"`);
  }
});

When(
  'I enter name {string} and email {string}',
  async (name: string, email: string) => {
    await loginPage.signupWith(name, email);
  }
);

When(
  'I fill in account information with password {string} and date of birth {string} {string} {string}',
  async (password: string, day: string, month: string, year: string) => {
    await signupPage.fillAccountInfo({ password, day, month, year });
  }
);

When('I fill in address information', async (table: DataTable) => {
  const row = table.rowsHash();
  await signupPage.fillAddressInfo({
    firstName: row['firstName'],
    lastName: row['lastName'],
    company: row['company'],
    address1: row['address1'],
    address2: row['address2'],
    country: row['country'],
    state: row['state'],
    city: row['city'],
    zipcode: row['zipcode'],
    mobile: row['mobile'],
  });
});

When('I click Create Account', async () => {
  await signupPage.clickCreateAccount();
});

When('I click Continue', async () => {
  await signupPage.clickContinue();
});

When('I delete the account', async () => {
  await accountPage.deleteAccount();
});

Then('I should see the error {string}', async (errorText: string) => {
  await loginPage.signupErrorMessage.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  const error = await loginPage.signupErrorMessage.getText();
  if (!error.includes(errorText)) {
    throw new Error(`Expected signup error "${errorText}" but got: "${error}"`);
  }
});
