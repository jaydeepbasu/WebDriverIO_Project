const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify User have landed on Volvo car MillionMore Page', () => {

    it('verify Million More Page Title', async () => {
        await millionMorePage.open();
    });

    it('verify Million More Page Top Logo', async () => {
        await millionMorePage.verifyLogo();
    });

    it('verify Million More Page Top Banner', async () => {
        await millionMorePage.verifyTopBanner();
    });
});