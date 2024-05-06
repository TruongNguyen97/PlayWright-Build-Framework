import { 
    BrowserContext, 
    Config, 
    expect, 
    FrameLocator, Locator, 
    Page, 
    PageScreenshotOptions
} from '@playwright/test';

import {BrowserManagement} from '../browser/browser-management';

export class PageUtils{
    static alertEvent;

    static page(): Page {
        return BrowserManagement.page;
    }

    static async goto(url: string, options?: {
        timeout?: number;
        waitUntil?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit';
    }) {
        await PageUtils.page().goto(url, options);
    }

    static async goBack(options?: {
        timeout?: number;
        waitUntil?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit';
    }) {
        await PageUtils.page().goBack(options);
    }

    static async getTitle(): Promise<string> {
        console.log('Getting page\'s title');
        return await PageUtils.page().title();
    }

    static async waitForPageLoad(loadState?: 'networkidle' | 'load' | 'domcontentloaded', options?: {
        timeout?: number;
    }): Promise<PageUtils> {
        await PageUtils.page().waitForLoadState(loadState, options);
        return this;
    }

    static async waitForElement(locator: Locator, options?: {
        state?: 'attached' | 'detached' | 'visible' | 'hidden';
        timeout?: number;
    }): Promise<void> {

        PageUtils.page().waitForSelector
        await locator.waitFor(options);
    }

    static async waitForElementToBeVisible(locator: Locator) : Promise<void> {
        return await this.waitForElement(locator, { state: 'visible' });
    }

    static async waitForElementToBeHidden(locator: Locator) {
        return await this.waitForElement(locator, { state: 'hidden' });
    }

    // type will simulate the typing behaviour of user
    static async typeText(locator: Locator, text: string, options?: {
        delay?: number;
        noWaitAfter?: boolean;
        strict?: boolean;
        timeout?: number;
    }): Promise<PageUtils> {
        await locator.type(text, options);
        return this;
    }

    static async fillText(locator: Locator, text: string): Promise<PageUtils> {
        await locator.fill(text);
        return this;
    }

    static async click(locator: Locator, index = 0): Promise<PageUtils> {
        await locator.nth(index).click();
        return this;
    }

    static async hover(locator: Locator, options?: {
        timeout?: number;
    }): Promise<void> {
        await locator.hover(options);
    }

    static async getBrowserContext(): Promise<BrowserContext> {
        return await PageUtils.page().context();
    }

    static async setStorageState(storageStatePath: string) {
        await PageUtils.page().context().storageState({ path: storageStatePath });
    }

    static async getText(locator: Locator, index = 0): Promise<string> {
        const elementText = await locator.nth(index).innerText();

        return elementText;
    }

    static async getInputValue(locator: Locator, index = 0): Promise<string> {
        const elementText = await locator.nth(index).inputValue();

        return elementText;
    }

    static async getLocator(selector: string, index = 0, options?: {
        has?: Locator;
        hasText?: string | RegExp;
    }): Promise<Locator> {
        return await PageUtils.page().locator(selector, options).nth(index);
        // await this.getLocatorBy(LocatorType.ROLE, 'alert', {});
    }

    static async getNumberOfElements(locator: Locator): Promise<number> {
        return await locator.count();
    }

    static async pressKey(locator: Locator, key: string,
        options?: { delay?: number; noWaitAfter?: boolean; timeout?: number; }) {
        return await locator.press(key, options);
    }

    static async rightClick(locator: Locator) {
        return await locator.click({
            button: 'right',
        });
    }

    static async middleClick(locator: Locator) {
        return await locator.click({
            button: 'middle',
        });
    }

    static async holdKeyAndClick(locator: Locator, options?: {
        modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[];
        timeout?: number;
    }) {
        return await locator.click(options);
    }

    static async clickAndHold(locator: Locator) {
        return await locator.click({
            delay: 3000
        });
    }

    static async clickMultipleTimes(locator: Locator, clickCount: number) {
        return await locator.click({
            clickCount: clickCount,
        });
    }

    static async checkButton(locator: Locator) {
        await this.waitForElementToBeVisible(locator);
        await locator.check();
    }

    static async uncheckButton (locator: Locator) {
        await this.waitForElementToBeVisible(locator);
        await locator.uncheck();
    }

    static async selectFromDropdown(dropdownLocator: Locator, value: string) {
        await dropdownLocator.selectOption(value);
    }

    static async captureScreenshot(options?: PageScreenshotOptions): Promise<Buffer> {
        return await PageUtils.page().screenshot(options);
    }

    static async checkScreenshot(screenshotBuffer: Buffer, fileName: string, options?: {
        threshold?: number,
        maxDiffPixels?: number,
        maxDiffPixelRatio?: number,
    }) {
        await expect(screenshotBuffer).toMatchSnapshot(fileName, options);
    }

    static async captureAndVerifyScreenshot(fileName: string, captureScreenshotOptions?: PageScreenshotOptions) {
        const screenshotBuffer = await this.captureScreenshot(captureScreenshotOptions);

        await this.checkScreenshot(screenshotBuffer, fileName);
    }

    static async registerAlert(timeout=5000, event='accept'){
        PageUtils.alertEvent = this.page().waitForEvent('dialog', {timeout: timeout}).then(async dialog => {
            if (event = 'dismiss'){
                await dialog.dismiss();
            }
            else{
                await dialog.accept();
            }
            
            return dialog.message();
        });
    }

    static async receiveAlert(){
        const message = await PageUtils.alertEvent;
        console.log(`Alert: ${message}`);    
        return message;
    }
}