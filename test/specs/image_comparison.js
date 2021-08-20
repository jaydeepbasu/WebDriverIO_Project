const millionMorePage = require('../pageobjects/millionMore_page');

describe('Image Comparison Scenarios', () => {

    it('Verify Accept Cookie Page UI', async () => {
        await millionMorePage.open();
        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(3000);
        await expect(await browser.checkScreen('accept_cookie_page', { })).toBeLessThan(0.2);
    });

    it('Verify Full Page UI', async () => {
        const acceptCookiesButton = await $("[title='Accept']")
        await acceptCookiesButton.click()
        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)
       //As video is running on the page hence while taking screenshot there will always be a 
       //variation in pixels hence I am measuring the mismatch percentage to be less than 1
        await expect(await browser.checkFullPageScreen('fullPage', { })).toBeLessThan(1);
    });

    it('Verify Full Tabbable Page UI', async () => {
       //As video is running on the page hence while taking screenshot there will always be a 
       //variation in pixels hence I am measuring the mismatch percentage to be less than 2        
        await expect(await browser.checkTabbablePage('check-tabbable', { })).toBeLessThan(2);
    });

    it('Verify Decades of Innovation section UI', async () => {
        const elem = await $("//img[@data-autoid='imageWithText:image']/../..");
        await elem.scrollIntoView();
        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)
        await expect(await browser.checkScreen('decades_of_Innovation_section', { })).toEqual(0);
    });

    it('Verify Top Right Menu UI', async () => {
        const elem = await $("//button[@data-autoid='nav:siteNavHamburgerIcon']");
        await elem.scrollIntoView();
        await elem.click();
        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)
        await expect(await browser.checkScreen('top_right_menu', { })).toEqual(0);
    });

});