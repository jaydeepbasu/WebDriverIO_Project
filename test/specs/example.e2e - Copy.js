const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify User have landed on Volvo car MillionMore Page2222', () => {

    it('verify Million More Page Title2', async () => {
        await millionMorePage.open();
    });

    it('verify Million More Page Top Logo2', async () => {
        await millionMorePage.verifyLogo();
    });

    it('verify Million More Page Top Banner2', async () => {
        await millionMorePage.verifyTopBanner();
    });
});