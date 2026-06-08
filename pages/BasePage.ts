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
      { timeout: 10000, timeoutMsg: 'Page did not finish loading' }
    );
  }

  async getTitle(): Promise<string> {
    return browser.getTitle();
  }
}
