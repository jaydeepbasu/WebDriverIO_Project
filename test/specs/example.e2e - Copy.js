const millionMorePage = require('../pageobjects/millionMore_page');

describe('Example', () => {

    it('verify Million More Page Title', async () => {
        await millionMorePage.open();
    });

    it('should save some screenshots', async () => {
        // browser.url('https://Codemify.com/interview/interview');
        // Save a screen
        await browser.saveScreen('examplePaged', { /* some options */ });
        // Save an element
        // browser.saveElement($('.rightSideBarUL'), 'firstButtonElement', { /* some options */ });
        // Save a full page screenshot
        //   browser.saveFullPageScreen('fullPage', { /* some options */ });
        //   // Save a full page screenshot with all tab executions
        //   browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
    });

    it('should compare successful with a baseline', async () => {
        // await browser.url('https://Codemify.com/interview/interview');
        // Check a screen
        await expect(await browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);
        // Check an element
        //   expect(browser.checkElement($('.rightSideBarUL'), 'firstButtonElement', { /* some options */ })).toEqual(0);
        // Check a full page screenshot
        //   expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
        //   // Check a full page screenshot with all tab executions
        //   expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
    });

});