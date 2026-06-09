import { When, Then, DataTable } from '@wdio/cucumber-framework';
import productPage from '../../pages/ProductPage';
import cartPage from '../../pages/CartPage';
import checkoutPage from '../../pages/CheckoutPage';
import paymentPage from '../../pages/PaymentPage';

When('I open the first product page', async () => {
  await browser.url('/product_details/1');
});

When('I add the product to the cart', async () => {
  await productPage.addToCart();
  await productPage.goToCartFromModal();
});

Then('I should be on the cart page', async () => {
  await cartPage.waitForCartPage();
});

When('I proceed to checkout', async () => {
  await cartPage.proceedToCheckout();
});

When('I click Register Login on the checkout prompt', async () => {
  await cartPage.clickRegisterLoginOnModal();
});

When('I view the cart', async () => {
  await browser.url('/view_cart');
});

Then('I should see address details and order review', async () => {
  await checkoutPage.waitForAddressDetails();
});

When('I place the order with comment {string}', async (comment: string) => {
  await checkoutPage.enterComment(comment);
  await checkoutPage.placeOrder();
});

When('I confirm payment with card details', async (table: DataTable) => {
  const row = table.rowsHash();
  await paymentPage.fillAndSubmit({
    name: row['name'],
    cardNumber: row['cardNumber'],
    cvc: row['cvc'],
    expiryMonth: row['expiryMonth'],
    expiryYear: row['expiryYear'],
  });
});

Then('I should see the order placed successfully message', async () => {
  await paymentPage.waitForOrderSuccess();
});

When('I download the invoice', async () => {
  await paymentPage.downloadInvoice();
});
