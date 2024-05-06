import { BasePage } from "./base-page"
import { Element , LocatorType} from "../core/element/element"
import { LoginPage } from "./login-page";
import { HomePage } from "./home-page";
import { DeleteBookPopup } from "./popup-object/delete-book-popup";


export class ProfilePage extends HomePage{
    searchTextbox: Element;
    nextButton: Element;
    listBooks: Element;
    deleteBookPopup: DeleteBookPopup;


    constructor(){
        super();
        this.searchTextbox = new Element("Type to search", LocatorType.PLACEHOLDER);
        this.nextButton = new Element("button", LocatorType.ROLE, { name: 'Next' });
        this.listBooks = new Element(".rt-tbody a[href*='?book=']");
        this.deleteBookPopup = new DeleteBookPopup();
    }        

    async searchBook(searchKey){
        await this.searchTextbox.click();
        await this.searchTextbox.type(searchKey)
    }   

    async waitListBooksDisplay(){
        await this.listBooks.waitForElementToBeVisible();
    }

    getDeleteBookByTitleElement(title) : Element{
        let deleteBookIcon = `//a[.='${title}']//ancestor::div[@class='rt-td']//following-sibling::div//span[@id='delete-record-undefined']`
        return new Element(deleteBookIcon)
    }

    async bookIsShown(title, timeout=5000): Promise<boolean>{
        await this.searchBook(title);
        return await this.listBooks.isDisplay(timeout);

    }
    
}
