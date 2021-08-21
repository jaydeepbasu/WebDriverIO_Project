const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Side Navigation box and Our Cars links are working', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify burger sign is displayed', async () => {
        await millionMorePage.verifyburgerSign();
    });
    
    it('verify volvo logo is dislayed in side navigation box', async () => {
        await millionMorePage.verifySideNavigationBox();
    });

    it('verify our cars is displayed at the top right', async () => {
        await millionMorePage.verifyOurCarsLinkTopRight();
    });

    it('verify Electric car text is dislayed in drop down navigation box', async () => {
        await millionMorePage.verifyOurCarsElectricSection();
        await millionMorePage.closeOurCarsSection();
    });

});