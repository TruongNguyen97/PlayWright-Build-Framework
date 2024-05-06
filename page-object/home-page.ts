import { BrowserManagement } from "../core/browser/browser-management";
import { Element, LocatorType } from "../core/element/element"
import { Page, expect } from '@playwright/test';
import { DashBoardPage } from "./dashboard-page";
import { ProfilePage } from "./profile-page";

export class HomePage{

    page(): Page {
        return BrowserManagement.page;
    }

};

