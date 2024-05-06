import { BasePage } from "./base-page"
import { Element , LocatorType} from "../core/element/element"
import { LoginPage } from "./login-page";
import { HomePage } from "./home-page";


export class BookStorePage extends HomePage{
    searchTextbox: Element;
    nextButton: Element;
    listBooks: Element;
    loginButton: Element;

    constructor(){
        super();
        this.searchTextbox = new Element("Type to search", LocatorType.PLACEHOLDER);
        this.nextButton = new Element("button", LocatorType.ROLE, { name: 'Next' });
        this.listBooks = new Element(".rt-tbody a[href*='?book=']");
        this.loginButton = new Element("#login");
    }        
    
    async GoToLoginPage(): Promise<LoginPage>{
        await this.loginButton.click();
        return new LoginPage()
    }

    async searchBook(searchKey){
        await this.searchTextbox.click();
        await this.searchTextbox.type(searchKey)
    }   

    async waitListBooksDisplay(){
        await this.listBooks.waitForElementToBeVisible();
    }

    async DoAllBooksOnTableDisplayContainSearchKey(searchKey): Promise<boolean>{
        let isNextBtnEnabled = false;
        while(true){
            for (const row of await this.listBooks.getListCurrentLocators()){

                if (!(await row.innerText()).toLowerCase().includes(searchKey.toLowerCase())){
                    return false;
                }
            }

            isNextBtnEnabled = await this.nextButton.isEnabled();

            if (isNextBtnEnabled == true){
                await this.nextButton.click();
                await this.listBooks.waitForElementToBeVisible();
            }{
                break;
            }
        }

        return true;
    }
}
