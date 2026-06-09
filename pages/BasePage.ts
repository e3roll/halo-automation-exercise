import { DEFAULT_TIMEOUT } from '../constants';

export default class BasePage {
  get url(): string {
    return '/';
  }

  async open(path?: string): Promise<void> {
    await browser.url(path ?? this.url);
  }

  async waitForPageLoad(): Promise<void> {
    await browser.waitUntil(
      async () => (await browser.execute(() => document.readyState)) === 'complete',
      { timeout: DEFAULT_TIMEOUT, timeoutMsg: 'Page did not finish loading' }
    );
  }

  get continueButton() {
    return $('a[data-qa="continue-button"]');
  }


}
