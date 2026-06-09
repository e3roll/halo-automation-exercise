# Halo Automation Exercise

Test cases built with WebDriverIO v9, Cucumber (BDD), and TypeScript for site [automationexercise.com](https://www.automationexercise.com).

## Features

- BDD-style scenarios written in Gherkin (`.feature` files)
- POM design pattern
- Headless execution

## Requirements

- Node.js 18+
- Firefox
- Chrome (not tested)

## Usage

Run the full test suite in a visible browser window:

```bash
npm test
```

or

```bash
npx wdio run wdio.conf.ts
```

Run headless:

```bash
npm run test:headless
```

Run a single feature file:

```bash
npx wdio run wdio.conf.ts --spec features/login.feature
```

Run scenarios matching a tag:

```bash
npx wdio run wdio.conf.ts --cucumberOpts.tags="@smoke"
WDIO_HEADLESS=true npx wdio run wdio.conf.ts --cucumberOpts.tags="@e2e"
```

## Test Cases

| ID    | Scenario                                     |
|-------|----------------------------------------------|
| TC01  | Register a new user and delete the account   |
| TC02  | Login with correct credentials and logout    |
| TC24  | Download invoice after completing a purchase |

> **Note:** TC02 requires a pre-existing account: `halo@testmail.com` / `halotest`.

## Author

Eugenio