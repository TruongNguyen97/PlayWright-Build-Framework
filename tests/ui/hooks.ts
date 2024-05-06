/**
 * Note: Hooks will depend on test|request|expect from fixture/main-fixure
 * 
 */
import { DataStorage } from '../../core/util/data-storage';
import { testMain, requestMain, expectMain } from '../../fixtures/main-fixture';
import { CONFIG_TIMEOUT } from '../../core/config/config-data';

export const test = testMain;
export const request = requestMain;
export const expect = expectMain;

test.beforeAll(async () => {
    console.log('Before tests');

    // Set maximum timeout of test case
    test.setTimeout(CONFIG_TIMEOUT.TEST_BASE_TIMEOUT)
});

test.beforeEach('Open start URL', async ({page, basePage, userService}) => {
    console.log(`Running ${test.info().title}`);
    
    // Set size of browser
    // await page.setViewportSize({ width: 1920, height: 1080 });

    // Go to Default page
    await basePage.goToDashboardPage();

    // Init Data Storage
    DataStorage.initData();
});

test.afterEach('After test - Clean Storage', async ({ page }) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);
  
    // Clean Data Storage
    DataStorage.clearData();
  });

test.afterAll(async () => {
    console.log('After All tests');    
});

