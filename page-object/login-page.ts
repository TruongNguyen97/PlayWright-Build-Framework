import { BasePage } from "./base-page"
import { Element } from "../core/element/element"
import { Account } from "../data-objects/account"

export class LoginPage{
    usernameTextbox: Element;
    passwordTextbox: Element;
    loginButton: Element;
    errorMessage: Element;

    constructor(){
        this.usernameTextbox = new Element("#userName");
        this.passwordTextbox = new Element("#password");
        this.loginButton = new Element("#login");
        this.errorMessage = new Element("#name");
    }          

    async login(loginInfo: Account) {
        await this.usernameTextbox.type(loginInfo.username);
        await this.passwordTextbox.type(loginInfo.password);
        await this.loginButton.click();
    }
}
