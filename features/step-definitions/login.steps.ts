import { When } from '@wdio/cucumber-framework';
import loginPage from '../../pages/LoginPage';

When(
  'I login with email {string} and password {string}',
  async (email: string, password: string) => {
    await loginPage.loginWith(email, password);
  }
);
