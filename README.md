# Halo Automation Exercise

Test cases built with WebDriverIO v9, Cucumber (BDD), and TypeScript for site [automationexercise.com](https://www.automationexercise.com).

## Features

- BDD-style scenarios written in Gherkin (`.feature` files)
- POM design pattern
- Allure reporting with screenshots on failure
- Headless execution (optional)

## Requirements

- Node.js 18+
- Firefox / Chrome browser 

## Usage

Run the full test suite in a visible browser window:

```bash
npm test
```

or

```bash
npx wdio run wdio.conf.ts
```

Run headless (no browser window):

```bash
npm run test:headless
```

Generate and open the Allure HTML report after a test run:

```bash
npm run test:report
```

Run a single feature file:

```bash
npx wdio run wdio.conf.ts --spec features/login.feature
npx wdio run wdio.conf.ts --spec features/logout.feature
npx wdio run wdio.conf.ts --spec features/register.feature
npx wdio run wdio.conf.ts --spec features/purchase.feature
```

Run scenarios matching a tag:

```bash
npx wdio run wdio.conf.ts --cucumberOpts.tags="@smoke"
WDIO_HEADLESS=true npx wdio run wdio.conf.ts --cucumberOpts.tags="@e2e"
```

## Test Cases Covered

| ID    | Scenario                                          |
|-------|---------------------------------------------------|
| TC01  | Register a new user and delete the account        |
| TC02  | Login with correct credentials (then logout TC04) |
| TC03  | Login with incorrect credentials                  |
| TC04  | Logout user                                       |
| TC05  | Register with an already-existing email           |
| TC24  | Download invoice after completing a purchase      |

> **Note:** TC02 and TC04 require a pre-existing account: `halo@testmail.com` / `Halo@1234`.

## Author
Eugenio