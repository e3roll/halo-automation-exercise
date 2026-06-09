import BasePage, { DEFAULT_TIMEOUT } from './BasePage';

class CheckoutPage extends BasePage {
  // Delivery address block — confirms we're on the checkout page
  get addressDelivery() {
    return $('#address_delivery');
  }

  get commentTextarea() {
    return $('textarea.form-control');
  }

  // "Place Order" button links to /payment
  get placeOrderBtn() {
    return $('//a[normalize-space()="Place Order"]');
  }

  async waitForAddressDetails(): Promise<void> {
    await this.addressDelivery.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  }

  async enterComment(comment: string): Promise<void> {
    await this.commentTextarea.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await this.commentTextarea.setValue(comment);
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderBtn.waitForClickable({ timeout: DEFAULT_TIMEOUT });
    await this.placeOrderBtn.click();
  }
}

export default new CheckoutPage();
