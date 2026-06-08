import BasePage from './BasePage';

class PaymentPage extends BasePage {
  get nameOnCardInput() {
    return $('input[data-qa="name-on-card"]');
  }

  get cardNumberInput() {
    return $('input[data-qa="card-number"]');
  }

  get cvcInput() {
    return $('input[data-qa="cvc"]');
  }

  get expiryMonthInput() {
    return $('input[data-qa="expiry-month"]');
  }

  get expiryYearInput() {
    return $('input[data-qa="expiry-year"]');
  }

  get payButton() {
    return $('button[data-qa="pay-button"]');
  }

  // Confirmation page after payment
  get orderSuccessMessage() {
    return $('[data-qa="order-placed"]');
  }

  get downloadInvoiceBtn() {
    return $('//a[normalize-space()="Download Invoice"]');
  }

  async fillAndSubmit(details: {
    name: string;
    cardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
  }): Promise<void> {
    await this.nameOnCardInput.waitForDisplayed({ timeout: 10000 });
    await this.nameOnCardInput.setValue(details.name);
    await this.cardNumberInput.setValue(details.cardNumber);
    await this.cvcInput.setValue(details.cvc);
    await this.expiryMonthInput.setValue(details.expiryMonth);
    await this.expiryYearInput.setValue(details.expiryYear);
    await this.payButton.click();
  }

  async waitForOrderSuccess(): Promise<void> {
    await this.orderSuccessMessage.waitForDisplayed({ timeout: 15000 });
  }

  async downloadInvoice(): Promise<void> {
    await this.downloadInvoiceBtn.waitForDisplayed({ timeout: 10000 });
    await this.downloadInvoiceBtn.click();
  }
}

export default new PaymentPage();
