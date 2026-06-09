import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  get addressDelivery() {
    return $('#address_delivery');
  }

  get commentTextarea() {
    return $('textarea.form-control');
  }

  get placeOrderBtn() {
    return $('//a[normalize-space()="Place Order"]');
  }

  async waitForAddressDetails(): Promise<void> {
    await this.addressDelivery.waitForDisplayed();
  }

  async enterComment(comment: string): Promise<void> {
    await this.commentTextarea.waitForDisplayed();
    await this.commentTextarea.setValue(comment);
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderBtn.waitForClickable();
    await this.placeOrderBtn.click();
  }
}

export default new CheckoutPage();
