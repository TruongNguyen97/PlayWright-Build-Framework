/**
 * Note: Test will depend on test|request|expect from Hooks
 * 
 */
import { testMain as test, requestMain as request, expectMain as expect } from '../../fixtures/main-fixture';


test.describe('Get Books', () => {
    test('Get Books return 200', async ({ bookService }) => {
        const response = await bookService.getBooks();
        expect(response.status()).toEqual(200)
    });
});

