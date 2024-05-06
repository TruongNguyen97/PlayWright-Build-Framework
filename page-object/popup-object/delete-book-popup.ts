import { BrowserManagement } from "../../core/browser/browser-management";
import { Element , LocatorType} from "../../core/element/element"



export class DeleteBookPopup{
    deleteBookTitle: Element;
    deleteBookContent: Element;
    cancelButton: Element;
    okButton: Element;

    constructor(){

        this.deleteBookTitle = new Element(".modal-title");
        this.deleteBookContent = new Element(".modal-body");
        this.cancelButton = new Element("#closeSmallModal-cancel");
        this.okButton = new Element("#closeSmallModal-ok");
    }        

    async waitDeletePopupDisplay(){
        await this.deleteBookTitle.waitForElementToBeVisible();
        await this.deleteBookContent.waitForElementToBeVisible();
        await this.cancelButton.waitForElementToBeVisible();
        await this.okButton.waitForElementToBeVisible();
    }

    async clickOkButton(){
        await this.okButton.click();
    }
}
