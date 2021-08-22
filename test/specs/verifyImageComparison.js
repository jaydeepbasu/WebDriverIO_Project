const millionMorePage = require('../pageobjects/millionMore_page');

describe('Image Comparison Scenarios', () => {

    it('Verify Full Page UI', async () => {
        await millionMorePage.open();

        await millionMorePage.acceptCookies();

        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)

        //As video is running on the page hence while taking screenshot there will always be a 
        //variation in pixels hence after running multiple time I have carefully considered the mismatch 
        //percentage to be less than 9
        await expect(await browser.checkFullPageScreen('fullPage', { })).toBeLessThan(9);
    });


    it('Verify Full Tabbable Page UI', async () => {
        //As video is running on the page hence while taking screenshot there will always be a 
        //variation in pixels hence after running multiple time I have carefully considered the mismatch 
        //percentage to be less than 9        
        await expect(await browser.checkTabbablePage('check-tabbable', { })).toBeLessThan(9);
    });


    it('Verify Decades of Innovation section UI', async () => {
        // const elem = await $("//img[@data-autoid='imageWithText:image']/../..");
        // await elem.scrollIntoView();
        await millionMorePage.decades_Inno_sec_scrollView();

        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)
        await expect(await browser.checkScreen('decades_of_Innovation_section', { })).toEqual(0);
    });


    it('Verify Top Right Menu UI', async () => {
        // const elem = await $("//button[@data-autoid='nav:siteNavHamburgerIcon']");
        // await elem.scrollIntoView();
        // await elem.click();
        await millionMorePage.clickTopRightMenu();
        
        //pause has been added to bring stability in the image comparison as video is running on the page.
        await browser.pause(2000)
        await expect(await browser.checkScreen('top_right_menu', { })).toEqual(0);
    });

});