/**
 * Note: Test will depend on test|request|expect from Hooks
 * 
 */
import { test, expect } from './hooks';
import { SEARCH_INPUT_DATA } from '../../data/searchDemoQA-data'


test.describe('Search book 1', () => {
    test('Search book with multiple results', async ({ dashBoardPage }) => {
        const searchKey = SEARCH_INPUT_DATA.search_book_multiple_results;
        const bookStorePage = await dashBoardPage.GoToBookStorePage();
        await bookStorePage.searchBook(searchKey);
        expect(await bookStorePage.DoAllBooksOnTableDisplayContainSearchKey(searchKey)).toBeTruthy()
    });
});

