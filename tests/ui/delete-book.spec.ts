/**
 * Note: Test will depend on test|request|expect from Hooks
 * 
 */
import { test, expect } from './hooks';
import { DELETE_BOOK_INPUT_DATA } from '../../data/deleteBookDemoQA-data'
import { LOGIN_DEMOQA_DATA } from '../../data/loginDemoQA-data';
import { DataStorage } from '../../core/util/data-storage';
import { RESOURCES_UI_CONSTANT } from '../../constants/resources-ui-constant';
import { Book } from '../../data-objects/book';
import { PageUtils } from '../../core/page/page-utils';


test.describe('Delete book', () => {
    const user = LOGIN_DEMOQA_DATA.valid_user_01;
    
    test('Delete book successfully', async ({ basePage, userService, profilePage, bookService }) => {
        const book = DELETE_BOOK_INPUT_DATA.delete_book_successfully;
        const loginPage = await basePage.goToLoginPage();

        await bookService.addBookFromUser(user, book);

        await loginPage.login(user)
        await profilePage.waitListBooksDisplay()

        await profilePage.searchBook(book.title)
        await profilePage.waitListBooksDisplay()
        
        await profilePage.getDeleteBookByTitleElement(book.title).click();
        await profilePage.deleteBookPopup.waitDeletePopupDisplay();

        await PageUtils.registerAlert();
        await profilePage.deleteBookPopup.clickOkButton();

        expect(await PageUtils.receiveAlert()).toEqual(RESOURCES_UI_CONSTANT.DELETE_BOOK_ALERT_MESSAGE);
        expect(await profilePage.bookIsShown(book.title)).toBeFalsy();
    });

    test.afterEach(async ({ bookService, userService }) => {
        // Clean book if needs
        if (DataStorage.getData("bookAdded") != null){
            const book: Book = DataStorage.getData("bookAdded") ;
            await bookService.deleteBookFromUser(user, book);
        }
    });
});
