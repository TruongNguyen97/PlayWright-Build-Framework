import {test} from '@playwright/test';
import {LoginPage} from '../page-object/login-page'
import {CONFIG_APP} from '../data/config-data'
import { APIClient } from '../core/api/api-client';
import { UserService } from '../services/demoqa/user-service';
import { BookService } from '../services/demoqa/book-service';


export type APIFixtureType = {
	userService: UserService;
    bookService: BookService;
}

type ExtendParams = Parameters<typeof test.extend<APIFixtureType>>;

export const apiFixture: ExtendParams[0] = {
    userService: [async ({}, use) => {
        await use(new UserService(await new APIClient(CONFIG_APP.DEMOQA_API_URL).init()));
    }, {scope : 'test'}],

    bookService: [async ({}, use) => {
        await use(new BookService(await new APIClient(CONFIG_APP.DEMOQA_API_URL).init()));
    }, {scope : 'test'}]
};


