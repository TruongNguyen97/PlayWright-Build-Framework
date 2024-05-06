import {test} from '@playwright/test';
import {LoginPage} from '../page-object/login-page'
import { BasePage } from '../page-object/base-page';
import { BookStorePage } from '../page-object/book-store-page';
import { DashBoardPage } from '../page-object/dashboard-page';
import { ProfilePage } from '../page-object/profile-page';

export type PageFixtureType = {
	loginPage: LoginPage;
    basePage: BasePage;
    bookStorePage: BookStorePage;
    dashBoardPage: DashBoardPage;
    profilePage: ProfilePage;
}

type ExtendParams = Parameters<typeof test.extend<PageFixtureType>>;

export const pageFixture: ExtendParams[0] = {
    basePage: async ({}, use) => {
        await use(new BasePage());
    },
    loginPage: async ({}, use) => {
        await use(new LoginPage());
    },
    bookStorePage: async ({}, use) => {
        await use(new BookStorePage());
    },
    dashBoardPage: async ({}, use) => {
        await use(new DashBoardPage());
    },
    profilePage: async ({}, use) => {
        await use(new ProfilePage());
    }
};