import type { Options } from '@wdio/types';
import { DEFAULT_TIMEOUT } from './constants';

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
    //       ...(process.env.WDIO_HEADLESS === 'true' ? ['--headless=new'] : []),
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
  waitforTimeout: DEFAULT_TIMEOUT,
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
    tags: '',
    timeout: 60000, // Cucumber step timeout
    ignoreUndefinedDefinitions: false,
  },

  reporters: ['spec'],
};
