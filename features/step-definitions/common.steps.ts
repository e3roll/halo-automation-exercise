import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../../pages/HomePage';
import loginPage from '../../pages/LoginPage';
import signupPage from '../../pages/SignupPage';
import accountPage from '../../pages/AccountPage';

Given('I am on the home page', async () => {
  await homePage.open();
  await homePage.waitForPageLoad();
  await homePage.logo.waitForDisplayed({ timeout: 10000 });
});

When('I click on Signup Login', async () => {
  await homePage.clickSignupLogin();
});

Then('I should see the {string} heading', async (heading: string) => {
  const upper = heading.toUpperCase();

  if (upper.includes('NEW USER SIGNUP')) {
    await loginPage.signupHeading.waitForDisplayed({ timeout: 10000 });
  } else if (upper.includes('LOGIN TO YOUR ACCOUNT')) {
    await loginPage.loginHeading.waitForDisplayed({ timeout: 10000 });
  } else if (upper.includes('ENTER ACCOUNT INFORMATION')) {
    await signupPage.accountInfoHeading.waitForDisplayed({ timeout: 10000 });
  } else if (upper.includes('ACCOUNT CREATED')) {
    await signupPage.accountCreatedHeading.waitForDisplayed({ timeout: 10000 });
  } else if (upper.includes('ACCOUNT DELETED')) {
    await $('h2[data-qa="account-deleted"] b').waitForDisplayed({ timeout: 10000 });
  }
});

Then('I should be logged in as {string}', async (_username: string) => {
  await $('a[href="/logout"]').waitForDisplayed({ timeout: 10000 });
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

When('I fill in address information', async () => {
  await signupPage.fillAddressInfo({
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Corp',
    address1: '123 Test Street',
    address2: 'Suite 4',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobile: '5551234567',
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
  await loginPage.signupErrorMessage.waitForDisplayed({ timeout: 10000 });
  const error = await loginPage.signupErrorMessage.getText();
  if (!error.includes(errorText)) {
    throw new Error(`Expected signup error "${errorText}" but got: "${error}"`);
  }
});
