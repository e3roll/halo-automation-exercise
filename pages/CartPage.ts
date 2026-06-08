import BasePage from './BasePage';

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

  async isOnCartPage(): Promise<boolean> {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('/view_cart'),
      { timeout: 10000, timeoutMsg: 'Cart page did not load' }
    );
    return true;
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.waitForClickable({ timeout: 10000 });
    await this.proceedToCheckoutBtn.click();
  }

  async clickRegisterLoginOnModal(): Promise<void> {
    await this.registerLoginModalBtn.waitForDisplayed({ timeout: 10000 });
    await this.registerLoginModalBtn.click();
  }
}

export default new CartPage();
