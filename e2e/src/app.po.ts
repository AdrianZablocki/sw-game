import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getResourceButtonText() {
        return element(by.css('.select-battle')).getText() as Promise<string>;
    }
}
