import { BrowserManagement } from "../core/browser/browser-management";
import { Element, LocatorType } from "../core/element/element"
import { Page } from '@playwright/test';
import { DashBoardPage } from "./dashboard-page";
import { ProfilePage } from "./profile-page";
import { LoginPage } from "./login-page";
import { WEB_DEMOQA_ENDPOINTS } from "../constants/endpoints-constant";

export class BasePage {
    page(): Page {
        return BrowserManagement.page;
    }

    async goToDashboardPage(): Promise<DashBoardPage>{
        await this.page().goto(WEB_DEMOQA_ENDPOINTS.DEFAULT)
        return new DashBoardPage();
    }

    async goToProfilePage(): Promise<ProfilePage>{
        await this.page().goto(WEB_DEMOQA_ENDPOINTS.PROFILE)
        return new ProfilePage();
    }

    async goToLoginPage(): Promise<LoginPage>{
        await this.page().goto(WEB_DEMOQA_ENDPOINTS.LOGIN)
        return new LoginPage();
    }

    
};

