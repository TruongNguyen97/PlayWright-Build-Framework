# PlaywrightFramework

Playwright TypeScript+Javescript Automation Framework

## Playwright Introduction

* Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast. Headless execution is supported for all browsers on all platforms.
* As Playwright is written by the creators of the Puppeteer, you would find a lot of similarities between them.
* Playwright has its own test runner for end-to-end tests, we call it Playwright Test.
* Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
* Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
* Cross-language. Use the Playwright API in TypeScript, JavaScript, Python, .NET, Java. The core framework is implemented using TypeScript.
* Playwright development is sponsored by Microsoft.

[GitHub](https://github.com/microsoft/playwright)
[Documentation](https://playwright.dev/docs/intro)
[API reference](https://playwright.dev/docs/api/class-playwright/)
[Changelog](https://github.com/microsoft/playwright/releases)
  
# Playwright - Framework

This is an automation framework using Playwright written in TypeScript.

## Framework Structure

```
├─ .env                                               //<contains environment variables 
├─ .gitignore                                         //<gitignore file
├─ azure-pipelines.yml                                //<Azure Pipeline file
├─ constants                                          //
│  ├─ endpoints-constant                              //<contains constant end point of web
│  ├─ resources-ui-constant                           //<contains constant resources text of web
├─ core                                               //<contains core helper functions, models, browser, fixture,etc
│  ├─ browser                                         //
│  │  ├─ browser-context-utils.ts                     //<contains general func for browserContext
│  │  ├─ browser-management.ts                        //<Management browser,page,browserContext
│  │  ├─ browser-utils.ts                             //<contains general func for browser
│  ├─ config                                          //
│  │  ├─ config-data.ts                               //<manage timout data
│  ├─ api                                             //
│  │  ├─ api-client.ts                                //<Models for API Client request
|  ├─ page                                            //
│  |  ├─ page-utils.ts                                //<contains general func for page
|  ├─ fixture                                         //
│  |  ├─ browser-fixture.ts                           //<Define browser fixture
|  ├─ utils                                           // Extend function utils
├─ data                                               //<contains test data
│  ├─ config-data.ts                                  //<contain data related url of web
│  ├─ *-data.ts                                       //<contain data related feature of web
├─ fixtures                                           //<contains Playwright fixtures
│  ├─ main.fixture.ts                                 //<contains combination of all fixtures
│  ├─ api.fixture.ts                                  //<contains all fixtures related to API Testing
│  ├─ page.fixture.ts                                 //<contains fixtures related to page object
├─ helpers                                            //<contain helper functions, classes to work in some projects
│  ├─ acccess-token-helper.ts                         //<contain helper functions to work in API get token
│  ├─ book-api-helper.ts                              //<contain helper functions to work in API book
├─ service                                            //<contain service API
|  ├─ demoqa                                          // App demoqa API service
│  |  ├─ user-service.ts                              //contain api functions, classes to work in API User
│  |  ├─ api-constant.ts                              //<contains constant API endpoint
├─ data-object                                        //<business models of the SUT
├─ package-lock.json                                  //<provide an immutable version of package.json
├─ package.json                                       //<contains basic information about the project,registered dependencies and running script
├─ pages                                              //<contains page objects
│  ├─ base-page.ts                                    //
│  ├─ book-store-page.ts                              //
│  ├─ login-page.ts                                   //
│  ├─ profile-page.ts                                 //
├─ playwright.config.js                               //<PlayWright configuration file
├─ README.md                                          //<Starting guideline
├─ playwright-report                                  // report
├─ tests                                              //
│  ├─ api                                             //<Test cases for BookStore API>
│  │  └─ get-user.spec.ts                             //
│  └─ ui                                              //<Test cases for BookStore UI>
│     ├─ hooks.ts                                     //<Manage BeforeAll, AfterALL, BeforeEach, AfterEach
│     ├─ search-book.spec.ts                          //<Test cases of Bookstore feature applying POM + fixture


```

## Requirements

```
- Visual Code >= 1.85.2
- Playwright Test for VSCode >= 1.0.22
- NodeJS version >= v20.11.0
- Playwright >= 1.43.1
```

# Getting Started

```
This is the quick and easy getting started assuming you already have git, Visual Code and NodeJS installed.
```

## Open project in Visual Code

```
- Launch Visual Code
- File -> Open Folder OR ctrl+K ctrl+O
- Select project root folder
```

## Install the required items

1. Install all required packages for project defined in the package.json file: Playwright, etc

```sh

Open Terminal window in Visual Code (ctrl + `) then execute command:
npm install

Or go to project root folder then open CMD windows and execute command:
npm install

```

2. Install Playwright Browsers

```sh

Open Terminal window in Visual Code (ctrl + `) then execute command:
npx playwright install

Or go to project root folder then open CMD windows and execute command:
npx playwright install

```
## Define test config before run test
``` Fill data config into file .env
STAGING=1

# Demo QA
# _UI
DEMOQA_WEB_URL=https://demoqa.com

# _API
DEMOQA_API_URL=https://demoqa.com

# _Data
DEMOQA_ACCOUNT_USER_01=<username>
DEMOQA_ACCOUNT_PASSWORD_01=<password>

# Timeout
TEST_BASE_TIMEOUT= 300000       # timeout for each test, default: 30s
GLOBAL_TIMEOUT= 0               # maximum timeout for whole test suite, default: 0s (disabled)
EXPECT_BASE_TIMEOUT= 30000      # timeout for expect matchers, default: 5s
PAGE_TIMEOUT= 30000             # timeout for all function in page
```


## Run Tests

### Run tests by Playwright VSCode extension

1. Install Playwright Test for VS Code extension on VS Code Marketplace (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
2. You can run a single test by clicking the green triangle next to your test block to run your test. Playwright will run through each line of the test and when it finishes you will see a green tick next to your test block as well as the time it took to run the test.
![Run Test](https://user-images.githubusercontent.com/13063165/212735762-51bae36b-8c91-46f1-bd3a-24bd29f853d2.png)
3. You can also run your tests and show the browsers by selecting the option Show Browsers in the testing sidebar. Then when you click the green triangle to run your test the browser will open and you will visually see it run through your test. Leave this selected if you want browsers open for all your tests or uncheck it if you prefer your tests to run in headless mode with no browser open.
![Run Test](https://user-images.githubusercontent.com/13063165/212737059-0c52cda1-829d-4cda-9ca8-33741c87dfff.png)

   
### Run tests
```Run all the tests
npx playwright test

```Run a single test file
npx playwright test tests/search-book.spec.ts

```Run a set of test files
npx playwright test tests/

```Run the test with the title
npx playwright test -g "Search book with multiple results"

```Run tests in headed browsers
npx playwright test --headed

```Run all the tests against a specific project
npx playwright test --project=chromium

```Disable parallelization
npx playwright test --workers=1

```Enable parallelization with 2 workers
npx playwright test --workers=2

```Run in debug mode with Playwright Inspector
npx playwright test --debug

```Run tests in interactive UI mode, with a built-in watch mode (Preview)
npx playwright test --ui

```Ask for help
npx playwright test --help
```

### Run tests in parallel

We can run test cases in parallel in two ways

Option #1: Modify the "workers" field in the playwright.config.js page -> this option will affect all test suites

Option #2: Add --workers arguments in the test run commands (only affect for specific test run)

```sh
 npx playwright test --ui --project=chromium --workers=2
```

For more details, please refer to Playwright document
[Playwright Parallelism and sharding](https://playwright.dev/docs/test-parallel)


### How to configure and run tests on different environment or browser
Playwright has many options to configure how your tests are run. You can specify these options in the configuration file. Therefore, we can configure the enviroment which we use to run test in Project section of configuration file like below:

For more details, please refer to Playwright document
[Playwright Test Configuration](https://playwright.dev/docs/test-configuration)