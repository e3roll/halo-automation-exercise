import BasePage from './BasePage';

class SignupPage extends BasePage {
  get url() {
    return '/signup';
  }

  get accountInfoTitle() {
    return $('h2.title.text-center b');
  }

  get titleMrRadio() {
    return $('input#id_gender1');
  }

  get nameInput() {
    return $('input#name');
  }

  get emailInput() {
    return $('input#email');
  }

  get passwordInput() {
    return $('input#password');
  }

  get daySelect() {
    return $('select#days');
  }

  get monthSelect() {
    return $('select#months');
  }

  get yearSelect() {
    return $('select#years');
  }

  get newsletterCheckbox() {
    return $('input#newsletter');
  }

  get offersCheckbox() {
    return $('input#optin');
  }

  get firstNameInput() {
    return $('input#first_name');
  }

  get lastNameInput() {
    return $('input#last_name');
  }

  get companyInput() {
    return $('input#company');
  }

  get address1Input() {
    return $('input#address1');
  }

  get address2Input() {
    return $('input#address2');
  }

  get countrySelect() {
    return $('select#country');
  }

  get stateInput() {
    return $('input#state');
  }

  get cityInput() {
    return $('input#city');
  }

  get zipcodeInput() {
    return $('input#zipcode');
  }

  get mobileNumberInput() {
    return $('input#mobile_number');
  }

  get createAccountButton() {
    return $('button[data-qa="create-account"]');
  }

  get accountCreatedTitle() {
    return $('h2[data-qa="account-created"] b');
  }

  async fillAccountInfo(details: {
    password: string;
    day: string;
    month: string;
    year: string;
  }): Promise<void> {
    await this.titleMrRadio.click();
    await this.passwordInput.setValue(details.password);
    await this.daySelect.selectByVisibleText(details.day);
    await this.monthSelect.selectByVisibleText(details.month);
    await this.yearSelect.selectByVisibleText(details.year);
    await this.newsletterCheckbox.click();
    await this.offersCheckbox.click();
  }

  async fillAddressInfo(address: {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
  }): Promise<void> {
    await this.firstNameInput.setValue(address.firstName);
    await this.lastNameInput.setValue(address.lastName);
    await this.companyInput.setValue(address.company);
    await this.address1Input.setValue(address.address1);
    await this.address2Input.setValue(address.address2);
    await this.countrySelect.selectByVisibleText(address.country);
    await this.stateInput.setValue(address.state);
    await this.cityInput.setValue(address.city);
    await this.zipcodeInput.setValue(address.zipcode);
    await this.mobileNumberInput.setValue(address.mobile);
  }

  async clickCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}

export default new SignupPage();
