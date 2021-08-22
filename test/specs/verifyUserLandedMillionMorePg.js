const millionMorePage = require('../pageobjects/millionMore_page');

 describe('Verify User have landed on Volvo car MillionMore Page', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
    });
    
    it('verify Cookies alert pops up', async () => {
        await millionMorePage.verifyCookiesPopUp();
    });

    it('verify user is able to accept Cookies', async () => {
        await millionMorePage.acceptCookies();
    });


    it('verify Million More Page Title', async () => {
        await millionMorePage.verifyTitle();
    });

    it('verify Million More Page Top Logo', async () => {
        await millionMorePage.verifyLogo();
    });

    it('verify Million More Page Top Banner', async () => {
        await millionMorePage.verifyTopBanner();
    });

    it('verify Million More Page Top Banner Text', async () => {
        await millionMorePage.verifyTopBannerText();
    });

 });