import { BasePage } from "./base-page"
import { Element , LocatorType} from "../core/element/element"
import { Account } from "../data-objects/account"
import { BookStorePage } from "./book-store-page";

export class DashBoardPage{
    bookStoreAppTitle: Element;
    leftPanel: Element;
    reactTable: Element;

    constructor(){
        this.bookStoreAppTitle = new Element("heading", LocatorType.ROLE, { name: 'Book Store Application' } );
        this.leftPanel = new Element(".left-pannel");
        this.reactTable = new Element(".ReactTable");
    }          

    async GoToBookStorePage(): Promise<BookStorePage>{
        await this.bookStoreAppTitle.click();
        await this.leftPanel.waitForElementToBeVisible();
        await this.reactTable.waitForElementToBeVisible();
        return new BookStorePage()
    }
}
