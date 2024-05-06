// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';


dotenv.config();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

// module.exports
module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout:     30 * 10000,
  expect:      {
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
      timeout:         10000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    baseURL: process.env.DEMOQA_WEB_URL,
    /* Default timeout for each Playwright action in millisecond */
    actionTimeout: 30000,
    /* Timeout for each navigation action in milliseconds  */
    navigationTimeout: 300000,
    acceptDownloads: true,
    /* Name of the browser that runs tests. Defaults to 'chromium' - "chromium"|"firefox"|"webkit"  */
    browserName: 'chromium',
    /* Toggles bypassing page's Content-Security-Policy. Defaults to false.  */
    bypassCSP: true,
    /* Use the remote browser instead of launching a browser locally*/
    // connectOptions: {
    //   wsEndpoint: 'ws://localhost:5678',
    // },
    /* Whether to automatically capture a screenshot after each test. Defaults to 'off'-'on'-'only-on-failure'. */
    screenshot: 'only-on-failure',
    viewport: { width: 1920, height: 1080 },
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup project
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'api',
      use: { },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

