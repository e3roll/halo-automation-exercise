import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  logLevels: {
    webdriver: 'error',
    geckodriver: 'error',
  },
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },

  specs: ['./features/**/*.feature'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    // Chrome
    // {
    //   browserName: 'chrome',
    //   'goog:chromeOptions': {
    //     args: [
    //       '--disable-notifications',
    //       '--disable-popup-blocking',
    //       '--no-sandbox',
    //       '--disable-extensions',
    //       '--disable-infobars',
    //     ]
    //   }
    // },
    // Firefox
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        log: { level: 'error' },
        args: [
          ...(process.env.WDIO_HEADLESS === 'true' ? ['--headless'] : []),
          // '--headless',  // uncomment to always run headless
        ],
        prefs: {
          'dom.webnotifications.enabled': false,
          'privacy.trackingprotection.enabled': true,
          'privacy.trackingprotection.pbmode.enabled': true,
          'privacy.trackingprotection.socialtracking.enabled': true,
        },
      },
    },
  ],

  logLevel: 'warn',
  bail: 0,
  baseUrl: 'https://www.automationexercise.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'cucumber',
  cucumberOpts: {
    require: ['./features/step-definitions/**/*.ts'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  afterStep: async function (_step, _scenario, { error }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};
