import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Star Wars Battle App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display get resource button', () => {
        page.navigateTo();
        expect(page.getResourceButtonText()).toEqual('Choose resources');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
