import { Page, test, request } from '@playwright/test';
import { PageFixtureType, pageFixture } from './page-fixture';
import { APIFixtureType, apiFixture } from './api-fixture';
import { BrowserFixtureType, browserFixture } from '../core/fixture/browser-fixture';
import { SEARCH_INPUT_DATA } from '../data/searchDemoQA-data';

export const testMain = test.extend<BrowserFixtureType & APIFixtureType & PageFixtureType> ({
  ...browserFixture,
  ...apiFixture,
  ...pageFixture
})

export const requestMain = request;
export const expectMain = test.expect;