import BasePage, { DEFAULT_TIMEOUT } from './BasePage';

class CartPage extends BasePage {
  get url() {
    return '/view_cart';
  }

  // "Proceed To Checkout" in cart
  get proceedToCheckoutBtn() {
    return $('a.btn.btn-default.check_out');
  }

  // Modal that appears when not logged in — "Register / Login" link
  get registerLoginModalBtn() {
    return $('#checkoutModal a[href="/login"]');
  }

  async waitForCartPage(): Promise<void> {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('/view_cart'),
      { timeout: DEFAULT_TIMEOUT, timeoutMsg: 'Cart page did not load' }
    );
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.waitForClickable();
    await this.proceedToCheckoutBtn.click();
  }

  async clickRegisterLoginOnModal(): Promise<void> {
    await this.registerLoginModalBtn.waitForDisplayed();
    await this.registerLoginModalBtn.click();
  }
}

export default new CartPage();
