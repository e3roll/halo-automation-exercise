# Halo Automation Exercise

Test cases built with WebDriverIO v9, Cucumber (BDD), and TypeScript for site [automationexercise.com](https://www.automationexercise.com), .

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
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@smoke"
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@e2e"
```

## Project Structure

```
halo-application/
├── features/
│   ├── login.feature           # TC02, TC03: login scenarios
│   ├── logout.feature          # TC04: logout scenario
│   ├── purchase.feature        # TC24: purchase and invoice download
│   ├── register.feature        # TC01, TC05: registration scenarios
│   └── step-definitions/
│       ├── common.steps.ts     # Shared steps: home page, signup, account deletion
│       ├── login.steps.ts      # Login-specific steps
│       ├── logout.steps.ts     # Logout-specific steps
│       └── purchase.steps.ts   # Cart, purchase and checkout steps
├── pages/
│   ├── BasePage.ts             # open(), waitForPageLoad(), getTitle()
│   ├── AccountPage.ts          # User name, logout, delete account
│   ├── CartPage.ts             # Proceed to checkout, checkout modal
│   ├── CheckoutPage.ts         # Address review, comment, place order
│   ├── HomePage.ts             # Logo check, navigation menu
│   ├── LoginPage.ts            # Login form, signup form, error messages
│   ├── PaymentPage.ts          # Payment form, order confirmation, download invoice
│   ├── ProductPage.ts          # Product detail page, add to cart
│   └── SignupPage.ts           # Account info form, address form
├── allure-results/             # Raw Allure XML output (generated at runtime)
├── allure-report/              # HTML report
├── wdio.conf.ts                # WebDriverIO configuration
└── tsconfig.json               # TypeScript configuration
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