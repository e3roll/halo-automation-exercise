import BasePage from './BasePage';

class ProductPage extends BasePage {
  get addToCartBtn() {
    return $('.btn.btn-default.cart');
  }

  get viewCartBtn() {
    return $('#cartModal a[href="/view_cart"]');
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.waitForClickable();
    await this.addToCartBtn.click();
  }

  async goToCartFromModal(): Promise<void> {
    await this.viewCartBtn.waitForDisplayed();
    await this.viewCartBtn.click();
  }
}

export default new ProductPage();
