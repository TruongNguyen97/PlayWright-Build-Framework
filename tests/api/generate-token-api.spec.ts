/**
 * Note: Test will depend on test|request|expect from Hooks
 * 
 */
import { LOGIN_DEMOQA_DATA } from '../../data/loginDemoQA-data';
import { testMain as test, requestMain as request, expectMain as expect } from '../../fixtures/main-fixture';


test.describe('Post generate token', () => {
    test('Post generate token return 200', async ({ userService }) => {
        const user = LOGIN_DEMOQA_DATA.valid_user_01;
        const account = {userName: user.username, password: user.password}
        const response = await userService.generateToken(account);
        const jsonResult = await response.json()

        expect(response.status()).toEqual(200)
        expect(jsonResult.token).not.toBeNull();
        expect(jsonResult.status).toEqual("Success")
        expect(jsonResult.result).toEqual("User authorized successfully.")
    });
});

